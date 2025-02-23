"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function ParkDetailPage() {
  const searchParams = useSearchParams();

  const park = {
    name: searchParams.get("name") || "Unknown",
    location: searchParams.get("location") || "N/A",
    designation: searchParams.get("designation") || "N/A",
    type: searchParams.get("type") || "N/A",
    area: searchParams.get("area") || "0",
    marine: searchParams.get("marine") === "true" ? "Yes" : "No",
    ownership: searchParams.get("ownership") || "N/A",
    managingAuthority: searchParams.get("managingAuthority") || "N/A",
    status: searchParams.get("status") || "N/A",
    designationYear: searchParams.get("designationYear") || "N/A",
  };

  return (
    <div className="p-6 mt-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">

      <h1 className="text-4xl font-extrabold text-gray-800 mb-4">{park.name}</h1>
      <p className="text-lg text-gray-600 mb-6">{park.location}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(park).map(([key, value]) => (
          key !== "name" && key !== "location" && (
            <div key={key} className="p-3 bg-gray-100 rounded-lg">
              <p className="text-sm font-semibold text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</p>
              <p className="text-lg font-medium text-gray-800">{value}</p>
            </div>
          )
        ))}
      </div>

      <div className="mt-6">
        <Link
          href="/parks"
          className="px-4 py-2 bg-softOlive text-white rounded-lg hover:bg-oliveDark transition"
        >
          ← Back to Parks List
        </Link>
      </div>
    </div>
  );
}
