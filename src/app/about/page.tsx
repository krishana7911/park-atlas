export default function About() {
  return (
    <div className="max-w-5xl mx-auto p-8 space-y-8 text-[var(--dusty-gray)] bg-[var(--off-white)]">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[var(--forest-green)]">About ParkAtlas</h1>
        <p className="mt-3 text-lg text-[var(--slate-blue)]">
          Discover, explore, and contribute to the conservation of the world's most breathtaking national parks and wildlife sanctuaries.
        </p>
      </div>

      {/* Mission Section */}
      <section className="bg-forestGreen p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-[var(--off-white)]">Our Mission</h2>
        <p className="mt-3 text-[var(--warm-sand)]">
          ParkAtlas is dedicated to raising awareness about the beauty and importance of protected natural spaces.
          Our goal is to build a global community of explorers, conservationists, and park enthusiasts who share knowledge,
          stories, and insights about these incredible places.
        </p>
      </section>

      {/* Features Section */}
      <section>
        <h2 className="text-2xl font-semibold text-[var(--forest-green)]">What We Offer</h2>
        <ul className="mt-4 list-disc list-inside space-y-3 text-[var(--dusty-gray)]">
          <li>🌿 <strong>Comprehensive park guides</strong> for planning your adventures.</li>
          <li>🗺️ <strong>Interactive maps</strong> for easy exploration.</li>
          <li>📢 <strong>Community-driven insights</strong> and real-time updates.</li>
          <li>🌎 <strong>Conservation awareness</strong> and eco-friendly travel tips.</li>
        </ul>
      </section>

      {/* Newsletter Subscription */}
      <section className="bg-mutedTeal p-10 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-semibold text-[var(--off-white)]">Stay Updated</h2>
        <p className="mt-3 text-[var(--warm-sand)]">
          Subscribe to our newsletter and receive updates on new parks, conservation efforts, and travel tips.
        </p>
        <form className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto w-full">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-5 py-3 w-full sm:w-2/3 border border-[var(--dusty-gray)] rounded-md focus:ring focus:ring-[var(--forest-green)]"
          />
          <button className="bg-[var(--forest-green)] text-[var(--off-white)] px-6 py-3 rounded-md hover:bg-[var(--slate-blue)] transition w-full sm:w-auto">
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
}
