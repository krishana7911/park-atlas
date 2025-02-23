"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Park {
  id: string;
  name: string;
  location: string;
  designation: string;
  type: string;
  area: number;
  marine: boolean;
  ownership?: string;
  managingAuthority?: string;
  status: string;
  designationYear?: string;
}

export default function ParksPage() {
  const [parks, setParks] = useState<Park[]>([]);
  const [page, setPage] = useState<number>(1);
  const [pageSize] = useState<number>(9);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    async function fetchParks() {
      setLoading(true);
      try {
        const res = await fetch(`/api/parks?page=${page}&pageSize=${pageSize}&filter=${filter}`);
        const data = await res.json();

        const formattedParks = data.data.map((park: any) => ({
          id: park.id, // Ensure id is mapped correctly
          name: park.name || "Unknown",
          location: park.location || "Unknown",
          designation: park.designation || "Not Reported",
          type: park.type || "N/A",
          area: park.area || 0,
          marine: !!park.marine, // Convert to boolean
          ownership: park.ownership || "N/A",
          managingAuthority: park.managingAuthority || "N/A",
          status: park.status || "Unknown",
          designationYear: park.designationYear ? park.designationYear.toString() : "N/A",
        }));

        setParks(formattedParks);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error("Error fetching parks:", error);
      }
      setLoading(false);
    }

    fetchParks();
  }, [page, pageSize, filter]); // Ensure effect runs on filter change

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">National Parks & Sanctuaries</h1>

      {/* Search Filter */}
      <input
        type="text"
        placeholder="Search parks..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="p-2 border rounded w-full mb-4"
      />

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => setPage((prev) => Math.max(1, prev - 1))}
          disabled={page === 1}
          className="p-2 border rounded bg-softOlive disabled:opacity-50"
        >
          Previous
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
          disabled={page === totalPages}
          className="p-2 border rounded bg-softOlive disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* Parks Grid */}
      {loading ? (
        <p>Loading parks...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {parks.length > 0 ? (
            parks.map((park) => (
              <div key={park.id} className="border p-4 rounded shadow-md bg-white">
                <h2 className="text-xl font-semibold">
                  <Link
                    href={{
                      pathname: `/parks/${park.id}`,
                      query: {
                        name: park.name,
                        location: park.location,
                        designation: park.designation,
                        type: park.type,
                        area: park.area,
                        marine: park.marine,
                        ownership: park.ownership,
                        managingAuthority: park.managingAuthority,
                        status: park.status,
                        designationYear: park.designationYear,
                      },
                    }}
                    className="text-blue-600 hover:underline"
                  >
                    {park.name}
                  </Link>
                </h2>
                <p className="text-sm text-gray-600">{park.location}</p>
                <p className="text-sm">Designation: {park.designation}</p>
                <p className="text-sm">Type: {park.type}</p>
                <p className="text-sm">Area: {park.area} km²</p>
                <p className="text-sm">Marine: {park.marine ? "Yes" : "No"}</p>
                <p className="text-sm">Status: {park.status}</p>
              </div>
            ))
          ) : (
            <p>No parks found.</p>
          )}
        </div>
      )}
    </div>
  );
}
