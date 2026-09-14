import React from 'react';
import { ShieldCheck, BookOpen, User, Menu, Phone } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#001B44]/95 backdrop-blur-md border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo & Brand */}
        <a href="/" className="flex items-center gap-3 group">
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

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="/exam" className="hover:text-white transition-colors">Practice Exams</a>
           <a href="/citizenship-test-guide" className="hover:text-white transition-colors">Citizenship Guide</a>
          <a href="/study-guide" className="hover:text-white transition-colors flex items-center gap-1.5">
            <BookOpen className="w-4 h-4 text-[#C8102E]" />
            <span>Study Guide</span>
          </a>
          <a href="/citizenship-test-faq" className="hover:text-white transition-colors">FAQ</a>
          <a href="/about-test" className="hover:text-white transition-colors">About Test</a>
        </nav>

        {/* Right Action / Auth CTAs */}
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
        <button className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white">
          <Menu className="w-6 h-6" />
        </button>

      </div>
    </header>
  );
}