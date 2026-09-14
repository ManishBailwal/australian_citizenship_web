'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "How many questions are on the actual Australian citizenship test?",
    answer: "The official test consists of 20 multiple-choice questions administered on a computer at a Department of Home Affairs office."
  },
  {
    question: "What is the passing score required?",
    answer: "You must score at least 75% overall, and you must correctly answer all 3 questions regarding Australian values. Our mock tests strictly follow these official scoring rules."
  },
  {
    question: "How long do I have to complete the test?",
    answer: "You are given 45 minutes to complete the 20 questions. Most applicants finish well within this timeframe when properly prepared."
  },
  {
    question: "Are these practice questions updated for 2026?",
    answer: "Yes, our question bank is continuously updated to reflect the latest version of the official Department of Home Affairs resource book, 'Our Common Bond'."
  },
  {
    question: "Is the practice test completely free?",
    answer: "Yes! You can take unlimited free practice tests and chapter reviews to build your confidence before booking your official exam."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#002868] bg-[#EEF3FB] px-3 py-1.5 rounded-md border border-[#E4E7EC]">
            <HelpCircle className="w-4 h-4 text-[#C8102E]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172033]">
            Frequently Asked Questions
          </h2>
          <p className="text-[#667085] text-lg">
            Everything you need to know about the Australian citizenship test format, scoring rules, and preparation strategy.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="border border-[#E4E7EC] rounded-2xl overflow-hidden transition-all bg-[#F5F7FA]"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left font-bold text-[#002868] hover:text-[#C8102E] transition-colors"
                >
                  <span className="text-lg">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full bg-white border border-[#E4E7EC] flex items-center justify-center transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#002868] text-white border-[#002868]' : 'text-[#667085]'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-6 text-[#667085] text-base leading-relaxed border-t border-[#E4E7EC]/60 pt-4 bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}