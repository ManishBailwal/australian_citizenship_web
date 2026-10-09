import React from 'react';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function CriticalRule() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="bg-[#FDECEE] border border-[#C8102E]/30 rounded-3xl p-8 lg:p-10 shadow-sm relative overflow-hidden">

          {/* Subtle background icon watermark */}
          <div className="absolute -right-10 -bottom-10 text-[#C8102E]/10 pointer-events-none">
            <AlertTriangle className="w-64 h-64" />
          </div>

          <div className="relative z-10 space-y-6">

            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 bg-[#C8102E] text-white px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest shadow-sm">
              <AlertTriangle className="w-4 h-4" />
              <span>Important Test Requirement</span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#172033] tracking-tight">
              Understanding the Australian Values Requirement
            </h2>

            {/* Introduction */}
            <p className="text-[#172033]/80 text-base sm:text-lg leading-relaxed">
              The Australian citizenship test has two important requirements:
              you need to achieve an overall score of at least 75%, and you
              must answer all five Australian values questions correctly.
            </p>

            {/* Rule Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">

              {/* Values Requirement */}
              <div className="bg-white p-6 rounded-2xl border border-[#E4E7EC] shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-[#C8102E] font-bold text-sm">
                  <AlertTriangle className="w-5 h-5" />
                  <span>Australian Values Questions</span>
                </div>

                <p className="text-sm text-[#667085] leading-relaxed">
                  The test includes{' '}
                  <strong className="text-[#172033]">
                    5 Australian values questions
                  </strong>
                  . You must answer all five correctly to meet the
                  Australian values requirement.
                </p>
              </div>

              {/* Overall Requirement */}
              <div className="bg-white p-6 rounded-2xl border border-[#E4E7EC] shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-[#18864B] font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Overall Passing Score</span>
                </div>

                <p className="text-sm text-[#667085] leading-relaxed">
                  You must achieve at least{' '}
                  <strong className="text-[#172033]">
                    75% overall
                  </strong>
                  . With 20 questions, this means answering at least 15
                  questions correctly overall.
                </p>
              </div>

            </div>

            {/* Practice Test Note */}
            <p className="text-xs text-[#667085] italic pt-2">
              Our practice tests use the 75% overall requirement and include
              Australian values questions to help you practise this part of
              the test.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}