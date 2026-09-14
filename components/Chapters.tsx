import React from 'react';
import { BookOpen, Landmark, Users, Flag, ArrowRight } from 'lucide-react';
import { australianCitizenshipData } from '@/data/CitizenshipPoints';

const chapterMeta = [
  { icon: Flag, slug: "part-1", accent: "bg-[#EEF3FB] text-[#002868]" },
  { icon: Users, slug: "part-2", accent: "bg-[#FDECEE] text-[#C8102E]" },
  { icon: Landmark, slug: "part-3", accent: "bg-[#EEF3FB] text-[#002868]" },
  { icon: BookOpen, slug: "part-4", accent: "bg-[#FDECEE] text-[#C8102E]" },
];

export default function Chapters() {
  return (
    <section id="chapters" className="py-24 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#002868] bg-[#EEF3FB] px-3 py-1.5 rounded-md border border-[#E4E7EC]">
            Comprehensive Curriculum
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172033]">
            Master Every Chapter of the Official Guide
          </h2>
          <p className="text-[#667085] text-lg">
            Our study material is meticulously mapped to every section of <span className="italic">Our Common Bond</span> to ensure zero surprises on exam day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {chapterMeta.map((meta, idx) => {
            const Icon = meta.icon;
            const section = australianCitizenshipData[meta.slug];
            if (!section) return null;

            return (
              <div 
                key={idx} 
                className="bg-white p-8 rounded-2xl shadow-sm border border-[#E4E7EC] hover:shadow-md hover:border-[#002868]/30 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${meta.accent}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold text-[#667085] bg-[#F5F7FA] px-2.5 py-1 rounded-full border border-[#E4E7EC]">
                      {section.points.length} Key Points
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#002868] mb-3 group-hover:text-[#C8102E] transition-colors line-clamp-2">
                    {section.title.split(":")[1]?.trim() || section.title}
                  </h3>
                  
                  <p className="text-[#667085] text-sm leading-relaxed mb-6 line-clamp-3">
                    {section.points[0]?.description || "Explore essential study material."}
                  </p>
                </div>

                <a 
                  href={`/citizenshipPoints/${section.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#002868] group-hover:text-[#C8102E] transition-colors pt-4 border-t border-[#E4E7EC]"
                >
                  <span>Study Chapter</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}