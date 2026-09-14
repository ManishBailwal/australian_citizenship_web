import React from 'react';
import { Calendar, Download, FileText, CheckCircle2 } from 'lucide-react';

const studyHighlights = [
  {
    date: "1 January 1901",
    title: "Federation of Australia",
    desc: "The six colonies united to become the Commonwealth of Australia under the Australian Constitution."
  },
  {
    date: "25 April 1915",
    title: "ANZAC Day Origin",
    desc: "Australian and New Zealand Army Corps landed at Gallipoli during World War I, forging a proud national tradition."
  },
  {
    date: "26 January 1788",
    title: "First Fleet Arrival",
    desc: "Governor Arthur Phillip arrived at Port Jackson (Sydney Cove) with the First Fleet from Britain."
  }
];

export default function ResourceHub() {
  return (
    <section className="py-20 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#002868] bg-[#EEF3FB] px-3 py-1.5 rounded-md border border-[#E4E7EC]">
            Essential Cheat Sheet
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172033]">
            Key Dates & History Milestones
          </h2>
          <p className="text-[#667085] text-lg">
            Master these critical historical dates heavily featured in the official citizenship exam questions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {studyHighlights.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-[#E4E7EC] shadow-sm space-y-4 hover:border-[#002868]/30 transition-all">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#C8102E] bg-[#FDECEE] px-3 py-1 rounded-full border border-[#C8102E]/20">
                <Calendar className="w-3.5 h-3.5" />
                <span>{item.date}</span>
              </div>
              <h3 className="text-xl font-bold text-[#002868]">{item.title}</h3>
              <p className="text-sm text-[#667085] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Download Banner Box */}
       <div className="mt-12 bg-[#001B44] text-white p-8 sm:p-10 rounded-3xl shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-extrabold">Want to study offline on the go?</h3>
            <p className="text-sm text-slate-400">Download our study notes covering all chapters of &ldquo;Our Common Bond&rdquo;.</p>
          </div>
          <a
            href="https://play.google.com/store/apps/details?id=com.australiancitizenship.prep"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#C8102E] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#C8102E]/90 transition-all shadow-md shrink-0 text-sm"
          >
            <Download className="w-4 h-4" />
            <span>Download App</span>
          </a>
        </div>

      </div>
    </section>
  );
}