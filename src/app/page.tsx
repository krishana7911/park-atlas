// src/app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col flex-grow">
      {/* Background Section */}
      <div
        className="relative h-[calc(100vh-125px)] flex items-center justify-center"
        style={{ backgroundImage: "url('/images/pexels-felixmittermeier-957024.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center p-6 z-10">
          <h1 className="text-4xl font-extrabold text-white">Welcome to ParkAtlas</h1>
          <p className="text-xl text-white mt-4">Explore the world's national parks and wildlife sanctuaries.</p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/parks" className="bg-softOlive text-offWhite px-6 py-2 rounded-lg shadow-md hover:bg-forestGreen transition">
              Browse Parks
            </Link>
            <Link href="/map" className="bg-mutedTeal text-offWhite px-6 py-2 rounded-lg shadow-md hover:bg-teal-700 transition">
              View Interactive Map
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

