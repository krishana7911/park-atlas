import React from "react";
import { Country } from "../types";

interface CountryCardProps {
  country: Country;
  refProp?: (node: HTMLElement | null) => void;
}

const CountryCard: React.FC<CountryCardProps> = ({ country, refProp }) => {
  return (
    <div
      ref={refProp ?? undefined}
      className="border border-gray-700 p-6 rounded-xl shadow-lg flex flex-col items-center bg-gray-800 w-full max-w-[30rem] h-[25rem] justify-center space-y-4"
    >
      {country.flag && <img src={country.flag} alt={country.name} className="w-28 h-16 mb-2 rounded shadow-md" />}
      <h2 className="text-xl font-semibold text-white text-center">{country.name}</h2>
      <p className="text-sm text-gray-400 text-center">Region: {country.region.name}</p>
      <p className="text-lg font-medium text-gray-300 text-center">Protected Areas: {country.pas_count}</p>
      <a
        href={country.links.protected_planet}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 underline mt-3 text-lg text-center transition duration-300 hover:text-blue-300"
      >
        More Info
      </a>
    </div>
  );
};

export default CountryCard;
