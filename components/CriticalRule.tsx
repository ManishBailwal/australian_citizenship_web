import React from 'react';
import { AlertTriangle, CheckCircle2, XCircle } from 'lucide-react';

export default function CriticalRule() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="bg-[#FDECEE] border-2 border-[#C8102E] rounded-3xl p-8 lg:p-10 shadow-sm relative overflow-hidden">
          
          {/* Subtle background icon watermark */}
          <div className="absolute -right-10 -bottom-10 text-[#C8102E]/10 pointer-events-none">
            <AlertTriangle className="w-64 h-64" />
          </div>

          <div className="relative z-10 space-y-6">
            
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 bg-[#C8102E] text-white px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest shadow-sm">
              <AlertTriangle className="w-4 h-4" />
              <span>Critical Department of Home Affairs Rule</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172033] tracking-tight">
              The 100% Values Trap: Why Smart Applicants Fail
            </h2>

            <p className="text-[#172033]/80 text-base sm:text-lg leading-relaxed">
              Many applicants score 85% overall, yet still fail the official test. According to the Department of Home Affairs guidelines, passing the citizenship exam requires satisfying two strict conditions simultaneously:
            </p>

            {/* Rule breakdown grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-6 rounded-2xl border border-[#E4E7EC] shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-[#C8102E] font-bold text-sm">
                  <XCircle className="w-5 h-5" />
                  <span>The 5 Values Questions</span>
                </div>
                <p className="text-sm text-[#667085] leading-relaxed">
                  You must get <strong className="text-[#172033]">100% (all 5 out of 5)</strong> correct on the mandatory Australian values section. Missing even one results in an automatic fail.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#E4E7EC] shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-[#18864B] font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Overall Passing Grade</span>
                </div>
                <p className="text-sm text-[#667085] leading-relaxed">
                  You must achieve a minimum overall mark of <strong className="text-[#172033]">75% (at least 15 out of 20 questions)</strong> across the entire test.
                </p>
              </div>
            </div>

            <p className="text-xs text-[#667085] italic pt-2">
              * Our platform mimics this exact logic in every practice test, flagging any missed values questions so you are fully prepared before sitting the exam at a Department of Home Affairs office.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}