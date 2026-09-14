import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Sydney, NSW",
    date: "Passed August 2026",
    quote: "The timed mock exams were a game-changer. Walking into the Department of Home Affairs test centre felt completely familiar because I had practiced under the exact same 45-minute conditions here.",
    score: "100% on First Try"
  },
  {
    name: "Liam O'Connor",
    location: "Melbourne, VIC",
    date: "Passed July 2026",
    quote: "I struggled with the Australian values and government sections initially, but the chapter-wise breakdowns and instant explanations made it so easy to retain everything. Highly recommend!",
    score: "95% Score"
  },
  {
    name: "Mei-Ling Chen",
    location: "Brisbane, QLD",
    date: "Passed June 2026",
    quote: "Up-to-date, clean, and zero fluff. The questions mirror the real test material from 'Our Common Bond' perfectly. Passed on my first attempt without stress.",
    score: "Passed First Try"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white border-t border-[#E4E7EC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#002868] bg-[#EEF3FB] px-3 py-1.5 rounded-md border border-[#E4E7EC]">
            Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172033]">
            Trusted by Thousands of Future Australians
          </h2>
          <p className="text-[#667085] text-lg">
            Read how our platform helped applicants pass their citizenship test with total confidence.
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div 
              key={idx}
              className="bg-[#F5F7FA] p-8 rounded-2xl border border-[#E4E7EC] flex flex-col justify-between relative group hover:border-[#002868]/30 transition-all shadow-sm"
            >
              <div className="absolute top-6 right-6 text-[#002868]/10 group-hover:text-[#C8102E]/10 transition-colors">
                <Quote className="w-10 h-10" />
              </div>

              <div className="space-y-4 relative z-10">
                {/* Rating Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C8102E] text-[#C8102E]" />
                  ))}
                </div>

                <p className="text-[#172033] text-base leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-[#E4E7EC] flex items-center justify-between relative z-10">
                <div>
                  <h4 className="font-bold text-[#002868] text-sm">{item.name}</h4>
                  <p className="text-xs text-[#667085]">{item.location} • {item.date}</p>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#18864B] bg-[#EEF3FB] px-2.5 py-1 rounded-full border border-[#E4E7EC]">
                  <CheckCircle className="w-3 h-3" />
                  {item.score}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}