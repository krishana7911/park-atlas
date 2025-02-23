const Footer = () => {
    return (
      <footer className="bg-forestGreen text-offWhite py-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} ParkAtlas. All rights reserved.
        </p>
        <p className="text-xs">
          Designed and built with love to support conservation efforts worldwide.
        </p>
      </footer>
    );
  };

  export default Footer;
