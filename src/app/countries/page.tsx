"use client";
import { useEffect, useState, useRef, useCallback } from "react";
import CountryCard from "../../components/CountryCard";
import { Country } from "../../utils/types";

const API_URL = "https://api.protectedplanet.net/v3/countries";
const FLAG_API = "https://restcountries.com/v3.1/name";
const TOKEN = "Enter Token here";

export default function CountryList() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const observer = useRef<IntersectionObserver | null>(null);
  const loadedPages = useRef<Set<number>>(new Set());

  const fetchCountries = useCallback(async () => {
    if (loading || !hasMore || loadedPages.current.has(page)) return;

    setLoading(true);
    try {
      const response = await fetch(`${API_URL}?page=${page}&per_page=10&with_geometry=false&token=${TOKEN}`);
      const data = await response.json();

      if (!data.countries.length) {
        setHasMore(false);
        return;
      }

      const countriesWithFlags = await Promise.all(
        data.countries.map(async (country: Country) => {
          const flagRes = await fetch(`${FLAG_API}/${encodeURIComponent(country.name)}`);
          const flagData = await flagRes.json();
          return { ...country, flag: flagData[0]?.flags?.png || "" };
        })
      );

      setCountries((prev) => [...prev, ...countriesWithFlags]);
      loadedPages.current.add(page);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
    setLoading(false);
  }, [page, loading, hasMore]);

  const lastCountryRef = useCallback(
    (node: HTMLElement | null) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) fetchCountries();
        },
        { threshold: 1 }
      );

      if (node) observer.current.observe(node);
    },
    [loading, fetchCountries]
  );

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div className="p-6 flex flex-col items-center bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6">Protected Areas by Countries</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {countries.map((country, index) => (
          <CountryCard
            key={country.id}
            country={country}
            refProp={index === countries.length - 1 ? lastCountryRef : undefined}
          />
        ))}
      </div>

      {loading && <p className="text-gray-400 mt-6">Loading more...</p>}
      {!hasMore && <p className="text-gray-400 mt-6">No more countries to load.</p>}
    </div>
  );
}
