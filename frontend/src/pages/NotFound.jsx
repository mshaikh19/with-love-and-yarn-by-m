import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

export default function NotFound() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-[#FDFCFB] flex flex-col font-sans text-tertiary">
      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-center text-center px-6 py-32">
        <h1 className="font-[Corinthia] text-[8rem] md:text-[12rem] text-[#E5D6DA] leading-none mb-4">404</h1>
        <h2 className="font-serif text-3xl md:text-4xl text-tertiary mb-6">Oops, we dropped a stitch.</h2>
        <p className="text-[#8A7080] font-medium max-w-md mx-auto mb-10">
          We can't seem to find the page you're looking for. It might have been moved or deleted.
        </p>
        <Link to="/" className="bg-tertiary text-white px-8 py-4 rounded-full text-[11px] font-black uppercase tracking-[0.2em] shadow-md hover:bg-tertiary/90 hover:shadow-lg transition-all">
          Return to Storefront
        </Link>
      </main>

      <Footer />
    </div>
  );
}
