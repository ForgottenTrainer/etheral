'use client';
import { useState } from 'react';
import Link from 'next/link';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="w-full flex flex-col items-center px-4 pt-4 relative">
      {/* NAVBAR */}
      <nav className="flex items-center justify-between border max-w-6xl w-full border-slate-700 px-6 py-4 rounded-full text-white text-sm relative bg-black/20 backdrop-blur-sm">
        {/* LOGO */}
        <Link href="/" className="shrink-0">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <circle cx="4.706" cy="16" r="4.706" fill="#D9D9D9" />
            <circle cx="16.001" cy="4.706" r="4.706" fill="#D9D9D9" />
            <circle cx="16.001" cy="27.294" r="4.706" fill="#D9D9D9" />
            <circle cx="27.294" cy="16" r="4.706" fill="#D9D9D9" />
          </svg>
        </Link>

        {/* LINKS DESKTOP */}
        <div className="hidden md:flex flex-1 justify-center gap-6">
          {['Games', 'Community', 'Asset Store', 'Docs'].map((item) => (
            <Link key={item} href="#" className="relative overflow-hidden h-6 group">
              <span className="block group-hover:-translate-y-full transition-transform duration-300">
                {item}
              </span>
              <span className="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300">
                {item}
              </span>
            </Link>
          ))}
        </div>

        {/* DERECHA DESKTOP */}
        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            {isSearchOpen ? (
              <form onSubmit={handleSearch}>
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="bg-slate-800/50 border border-slate-600 rounded-full px-4 py-2 text-sm w-48"
                  autoFocus
                  onBlur={() => !searchQuery && setIsSearchOpen(false)}
                />
              </form>
            ) : (
              <button
                onClick={() => setIsSearchOpen(true)}
                className="border border-slate-600 p-2 rounded-full hover:bg-slate-800 cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>

              </button>
            )}
          </div>

          <button className="border border-slate-600 px-4 py-2 rounded-full">
            Blog
          </button>
          <button className="bg-white text-black px-4 py-2 rounded-full">
            Download
          </button>
        </div>

        {/* HAMBURGUESA */}
        <button onClick={toggleMobileMenu} className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* MENÚ MOBILE */}
      <div
        className={`md:hidden mt-3 w-full max-w-6xl rounded-2xl border border-slate-700 bg-black/30 backdrop-blur-md
        transition-all duration-300 origin-top
        ${isMobileMenuOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}
      >
        <div className="flex flex-col gap-4 p-6 text-white">
          {/* LINKS */}
          {['Games', 'Community', 'Asset Store', 'Docs'].map((item) => (
            <Link key={item} href="#" className="text-sm opacity-80 hover:opacity-100">
              {item}
            </Link>
          ))}

          {/* SEARCH */}
          <form onSubmit={handleSearch}>
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-full bg-slate-800/50 border border-slate-600 rounded-full px-4 py-2 text-sm"
            />
          </form>

          {/* BOTONES */}
          <button className="border border-slate-600 px-4 py-2 rounded-full">
            Blog
          </button>
          <button className="bg-white text-black px-4 py-2 rounded-full">
            Download
          </button>
        </div>
      </div>
    </div>
  );
};
