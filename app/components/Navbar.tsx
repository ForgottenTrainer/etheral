'use client';

import { useState } from 'react';
import Link from 'next/link';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full flex justify-center px-4 pt-4">
        <nav className="flex items-center justify-between border max-w-6xl w-full border-slate-700 px-6 py-4 rounded-full text-white text-sm relative bg-black/20 backdrop-blur-sm">

        {/* IZQUIERDA: LOGO */}
        <Link href="/" className="shrink-0">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="4.706" cy="16" r="4.706" fill="#D9D9D9" />
            <circle cx="16.001" cy="4.706" r="4.706" fill="#D9D9D9" />
            <circle cx="16.001" cy="27.294" r="4.706" fill="#D9D9D9" />
            <circle cx="27.294" cy="16" r="4.706" fill="#D9D9D9" />
            </svg>
        </Link>

        {/* CENTRO: LINKS */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-6">
            {['Games', 'Community', 'Asset Store', 'Docs'].map((item) => (
            <Link key={item} href="#" className="relative overflow-hidden h-6 group">
                <span className="block group-hover:-translate-y-full transition-transform duration-300">
                {item}
                </span>
                <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
                {item}
                </span>
            </Link>
            ))}
        </div>

        {/* DERECHA: BOTONES */}
        <div className="hidden md:flex items-center gap-4 flex-shrink-0">
            <button className="border cursor-pointer border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition">
            Blog
            </button>
            <button className="bg-white cursor-pointer hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300">
            Download
            </button>
        </div>

        {/* BOTÓN MOBILE */}
        <button onClick={toggleMobileMenu} className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>

        </nav>

    </div>
  );
};