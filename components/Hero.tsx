import React from 'react';
import { ShieldCheck, Clock, Award, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-[#001B44] text-white overflow-hidden py-20 lg:py-32">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-[#002868]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#C8102E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Official Badge */}
            <div className="inline-flex items-center gap-2 bg-[#002868]/50 border border-[#002868] text-[#EEF3FB] px-4 py-2 rounded-full text-sm font-medium">
              <ShieldCheck className="w-4 h-4 text-[#C8102E]" />
              <span>Based on the Official &ldquo;Our Common Bond&rdquo; Guide</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Pass Your <span className="text-[#C8102E]">Australian Citizenship</span> Test on the First Try.
            </h1>

            {/* Subtitle */}
            <p className="text-[#667085] text-lg sm:text-xl max-w-2xl leading-relaxed">
              Prepare with realistic timed mock exams, instant explanations, and up-to-date practice questions designed to mirror the official Department of Home Affairs test.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a 
                href="/exam" 
                className="inline-flex items-center justify-center gap-2 bg-[#C8102E] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#C8102E]/90 transition-all shadow-lg hover:shadow-[#C8102E]/20 text-base"
              >
                <span>Start Free Practice Test</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="/study-guide" 
                className="inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 font-medium px-8 py-4 rounded-full hover:bg-white/15 transition-all text-base"
              >
                Browse Chapters
              </a>
            </div>

            {/* Trust Points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#18864B]" />
                <span>99% Pass Rate</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-[#18864B]" />
                <span>500+ Questions</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#18864B]" />
                <span>Instant Results</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Mock Test Card Preview */}
          <div className="lg:col-span-5">
            <div className="bg-white text-[#172033] p-6 lg:p-8 rounded-2xl shadow-2xl border border-[#E4E7EC] relative">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-6 border-b border-[#E4E7EC] mb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#667085] bg-[#EEF3FB] px-3 py-1 rounded-md">
                    Simulated Exam
                  </span>
                  <h3 className="text-lg font-bold text-[#002868] mt-2">Official Citizenship Practice</h3>
                </div>
                <div className="flex items-center gap-2 text-[#667085] text-sm bg-[#F5F7FA] px-3 py-1.5 rounded-full border border-[#E4E7EC]">
                  <Clock className="w-4 h-4 text-[#C8102E]" />
                  <span>45 Mins</span>
                </div>
              </div>

              {/* Sample Question Preview */}
              <div className="space-y-4">
                <p className="text-sm font-semibold text-[#172033]">
                  Question 4 of 20: What is Australia&apos;s national flower?
                </p>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl border border-[#E4E7EC] bg-[#F5F7FA] text-sm font-medium flex items-center justify-between hover:border-[#002868] cursor-pointer transition-all">
                    <span>A) Golden Wattle</span>
                    <div className="w-4 h-4 rounded-full border border-[#667085]" />
                  </div>
                  <div className="p-3.5 rounded-xl border border-[#002868] bg-[#EEF3FB] text-sm font-semibold flex items-center justify-between text-[#002868]">
                    <span>B) Eucalyptus Blossom</span>
                    <div className="w-4 h-4 rounded-full bg-[#002868] flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl border border-[#E4E7EC] bg-[#F5F7FA] text-sm font-medium flex items-center justify-between hover:border-[#002868] cursor-pointer transition-all">
                    <span>C) Waratah</span>
                    <div className="w-4 h-4 rounded-full border border-[#667085]" />
                  </div>
                </div>
              </div>

              {/* Card Footer / Action */}
              <div className="mt-8 pt-6 border-t border-[#E4E7EC] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#18864B]" />
                  <span className="text-xs text-[#667085] font-medium">Pass Mark: 75% Required</span>
                </div>
                <span className="text-xs font-bold text-[#002868] bg-[#EEF3FB] px-3 py-1.5 rounded-full">
                  Preview Mode
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}