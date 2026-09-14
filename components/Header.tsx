'use client';

import React, { useState } from 'react';
import { BookOpen, Menu, Phone, X } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#001B44]/95 backdrop-blur-md border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo & Brand */}
        <a
          href="/"
          className="flex items-center gap-3 group"
          onClick={closeMobileMenu}
        >
          <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg group-hover:scale-105 transition-transform flex items-center justify-center bg-[#001B44]">
            <img
              src="/logo.png"
              alt="Australian Citizenship Test Logo"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <span className="font-extrabold text-lg tracking-tight block leading-none">
              Aussie<span className="text-[#C8102E]"> Citizenship</span> Test
            </span>

            <span className="text-[10px] uppercase tracking-widest text-[#667085] font-semibold">
              Exam Prep
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a
            href="/exam"
            className="hover:text-white transition-colors"
          >
            Practice Exams
          </a>

          <a
            href="/citizenship-test-guide"
            className="hover:text-white transition-colors"
          >
            Citizenship Guide
          </a>

          <a
            href="/study-guide"
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <BookOpen className="w-4 h-4 text-[#C8102E]" />
            <span>Study Guide</span>
          </a>

          <a
            href="/citizenship-test-faq"
            className="hover:text-white transition-colors"
          >
            FAQ
          </a>

          <a
            href="/about-test"
            className="hover:text-white transition-colors"
          >
            About Test
          </a>
        </nav>

        {/* Desktop Contact */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#C8102E] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#C8102E]/90 transition-all shadow-md hover:shadow-[#C8102E]/20"
          >
            <Phone className="w-4 h-4" />
            <span>Contact</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2.5 rounded-lg bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#001B44]">
          <nav className="px-6 py-5 space-y-2">

            <a
              href="/exam"
              onClick={closeMobileMenu}
              className="flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-white transition-colors"
            >
              <span>Practice Exams</span>
            </a>

            <a
              href="/citizenship-test-guide"
              onClick={closeMobileMenu}
              className="flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-white transition-colors"
            >
              <span>Citizenship Guide</span>
            </a>

            <a
              href="/study-guide"
              onClick={closeMobileMenu}
              className="flex items-center gap-2 px-4 py-3.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-white transition-colors"
            >
              <BookOpen className="w-4 h-4 text-[#C8102E]" />
              <span>Study Guide</span>
            </a>

            <a
              href="/citizenship-test-faq"
              onClick={closeMobileMenu}
              className="flex items-center px-4 py-3.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-white transition-colors"
            >
              FAQ
            </a>

            <a
              href="/about-test"
              onClick={closeMobileMenu}
              className="flex items-center px-4 py-3.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-white transition-colors"
            >
              About Test
            </a>

            {/* Mobile Contact */}
            <div className="pt-3">
              <a
                href="/contact"
                onClick={closeMobileMenu}
                className="flex items-center justify-center gap-2 w-full bg-[#C8102E] text-white text-sm font-semibold px-5 py-3.5 rounded-xl hover:bg-[#C8102E]/90 transition-all shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Contact</span>
              </a>
            </div>

          </nav>
        </div>
      )}
    </header>
  );
}