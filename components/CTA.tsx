import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-[#001B44] relative overflow-hidden text-white">
      {/* Decorative background blurs */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#002868]/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-[#C8102E]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 bg-[#002868]/60 border border-[#002868] text-[#EEF3FB] px-4 py-2 rounded-full text-sm font-medium">
          <Sparkles className="w-4 h-4 text-[#C8102E]" />
          <span>Start Your Journey Today — 100% Free Practice</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight max-w-3xl mx-auto">
          Ready to Ace Your <span className="text-[#C8102E]">Citizenship Test</span>?
        </h2>

        <p className="text-[#667085] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
          Join thousands of successful applicants. Take your first timed mock exam now and test your readiness in under 45 minutes.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a 
            href="/exam" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C8102E] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#C8102E]/90 transition-all shadow-lg hover:shadow-[#C8102E]/20 text-base"
          >
            <span>Start Free Practice Test</span>
            <ArrowRight className="w-5 h-5" />
          </a>
          <a 
            href="/study-guide" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 font-medium px-8 py-4 rounded-full hover:bg-white/15 transition-all text-base"
          >
            Review Study Guide
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 pt-6 text-xs text-[#667085]">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#18864B]" /> No Credit Card Required
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#18864B]" /> Instant Results & Explanations
          </span>
        </div>

      </div>
    </section>
  );
}