import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-forestGreen text-offWhite py-4 px-8 sm:px-10 md:px-20 flex justify-between items-center">
      <Link href="/" className="text-xl font-semibold hover:text-off-white">
        ParkAtlas
      </Link>
      <nav className="space-x-6">
        <Link href="/" className="text-lg hover:text-off-white">
          Home
        </Link>
        <Link href="/parks" className="text-lg hover:text-off-white">
          Parks
        </Link>
        <Link href="/about" className="text-lg hover:text-off-white">
          About
        </Link>
        <Link href="/map" className="text-lg hover:text-off-white">
          Map
        </Link>
      </nav>
    </header>
  );
};

export default Header;
