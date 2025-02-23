import Footer from '@/components/Footer';
import Header from '@/components/Header';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>ParkAtlas</title>
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer className="h-[80px]" /> {/* Set a fixed height for the footer */}
      </body>
    </html>
  );
}
