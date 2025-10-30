"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg md:text-xl">AI</span>
            </div>
            <span className="font-bold text-lg md:text-xl text-white group-hover:text-primary-400 transition-colors">
              AI za svakoga
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#usluge" className="text-body-md text-neutral-300 hover:text-primary-400 transition-colors">
              Usluge
            </a>
            <a href="#proces" className="text-body-md text-neutral-300 hover:text-primary-400 transition-colors">
              Proces
            </a>
            <a href="#faq" className="text-body-md text-neutral-300 hover:text-primary-400 transition-colors">
              FAQ
            </a>
            <a
              href="#kontakt"
              className="px-6 py-2.5 bg-primary-600 text-white rounded-lg hover:bg-primary-500 transition-all font-medium shadow-sm hover:shadow-md"
            >
              Zakažite poziv
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-800">
            <div className="flex flex-col gap-4">
              <a
                href="#usluge"
                className="text-body-md text-neutral-300 hover:text-primary-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Usluge
              </a>
              <a
                href="#proces"
                className="text-body-md text-neutral-300 hover:text-primary-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Proces
              </a>
              <a
                href="#faq"
                className="text-body-md text-neutral-300 hover:text-primary-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <a
                href="#kontakt"
                className="px-6 py-2.5 bg-primary-600 text-white rounded-lg hover:bg-primary-500 transition-all font-medium text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Zakažite poziv
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
