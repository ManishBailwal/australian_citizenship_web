import React from 'react';
import { ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#001B44] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          
          {/* Brand & Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#C8102E] flex items-center justify-center shadow-lg">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-extrabold text-lg tracking-tight block leading-none">
                  Aussie<span className="text-[#C8102E]">Citizenship</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#667085] font-semibold">
                  Official Prep 2026
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Helping future Australians pass their citizenship test with confidence through realistic mock exams and comprehensive chapter reviews.
            </p>
          </div>

          {/* Quick Links */}
         <div className="md:col-span-3 space-y-4">
  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200">
    Legal
  </h4>

  <ul className="space-y-2.5 text-sm text-slate-400">
    <li>
      <a
        href="/privacy-policy"
        className="hover:text-white transition-colors"
      >
        Privacy Policy
      </a>
    </li>

    <li>
      <a
        href="/terms-and-conditions"
        className="hover:text-white transition-colors"
      >
        Terms &amp; Conditions
      </a>
    </li>

    <li>
      <a
        href="/disclaimer"
        className="hover:text-white transition-colors"
      >
        Disclaimer
      </a>
    </li>
  </ul>
</div>

          {/* Legal / Disclaimer */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200">Important Disclaimer</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              This platform is an independent study aid designed to help applicants prepare for the Australian citizenship test. It is not affiliated with or endorsed by the Australian Government or the Department of Home Affairs.
            </p>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} AussieCitizenship Test Prep. All rights reserved.</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Built with precision for future citizens</span>
          </div>
        </div>

      </div>
    </footer>
  );
}