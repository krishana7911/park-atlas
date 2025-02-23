"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";

interface Park {
  id: string;
  name: string;
  location: string;
  designation: string;
  lat?: number; // Latitude (if available)
  lon?: number; // Longitude (if available)
}

export default function MapPage() {
  const [parks, setParks] = useState<Park[]>([]);

  useEffect(() => {
    async function fetchParks() {
      try {
        const res = await fetch(`/api/parks?page=1&pageSize=50`); // Fetch more parks
        const data = await res.json();

        // Convert park data (assuming we have lat/lon)
        const formattedParks = data.data.map((park: any) => ({
          id: park.id,
          name: park.NAME,
          location: park.SUB_LOC || park.ISO3,
          designation: park.DESIG_ENG,
          lat: park.LATITUDE || null, // Replace with actual lat field if available
          lon: park.LONGITUDE || null, // Replace with actual lon field if available
        }));

        setParks(formattedParks);
      } catch (error) {
        console.error("Error fetching parks:", error);
      }
    }

    fetchParks();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Interactive Map</h1>
      <p className="mb-4">Explore the locations of national parks & sanctuaries.</p>

      <MapContainer
        center={[20.5937, 78.9629]} // Centered in India
        zoom={5} // More zoomed in for better focus
        style={{ height: "500px", width: "100%", borderRadius: "8px", overflow: "hidden" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Add markers for parks with lat/lon */}
        {parks
          .filter((park) => park.lat && park.lon) // Ensure parks have coordinates
          .map((park) => (
            <Marker key={park.id} position={[park.lat!, park.lon!]}>
              <Popup>
                <strong>{park.name}</strong> <br />
                {park.location} <br />
                {park.designation}
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </div>
  );
}
