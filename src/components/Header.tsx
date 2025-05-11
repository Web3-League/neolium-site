// src/components/Header.tsx
"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  
  // Effet pour détecter le défilement et ajuster l'apparence du header
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Fonction pour déterminer si un lien est actif
  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  return (
    <header className={`py-6 px-6 sticky top-0 z-10 shadow-lg transition-all duration-300 ${
      scrolled ? 'bg-gray-900' : 'bg-gray-900 bg-opacity-80'
    }`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-bold text-indigo-400">Néolium</h1>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/"
                className={`transition-colors ${
                  isActive('/') ? 'text-indigo-400' : 'hover:text-indigo-400'
                }`}
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                href="/#decouvrir"
                className={`transition-colors ${
                  pathname === '/#decouvrir' ? 'text-indigo-400' : 'hover:text-indigo-400'
                }`}
              >
                Nos Solutions
              </Link>
            </li>
            <li>
              <Link
                href="/#contact"
                className={`transition-colors ${
                  pathname === '/#contact' ? 'text-indigo-400' : 'hover:text-indigo-400'
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;