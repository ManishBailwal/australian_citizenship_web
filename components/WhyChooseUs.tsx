
import React from 'react';
import { Check, X } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#002868] bg-[#EEF3FB] px-3 py-1.5 rounded-md border border-[#E4E7EC]">
            Platform Comparison
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172033]">
            Why Future Citizens Choose Our Platform
          </h2>

          <p className="text-[#667085] text-lg">
            Don't just read the handbook. Learn, practice, test yourself, and
            track your progress with everything you need in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* Traditional Way */}
          <div className="bg-[#F5F7FA] p-8 rounded-3xl border border-[#E4E7EC] space-y-6">

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#667085]/10 flex items-center justify-center text-[#667085]">
                <X className="w-5 h-5" />
              </div>

              <h3 className="text-xl font-bold text-[#172033]">
                Reading the Handbook Alone
              </h3>
            </div>

            <ul className="space-y-4 text-sm text-[#667085]">

              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-[#C8102E] shrink-0 mt-0.5" />
                <span>
                  Long sections of information can be difficult to remember
                  without regular practice.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-[#C8102E] shrink-0 mt-0.5" />
                <span>
                  No daily practice system to help you build a consistent
                  study habit.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-[#C8102E] shrink-0 mt-0.5" />
                <span>
                  No collection of mock tests to simulate the real
                  citizenship test experience.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-[#C8102E] shrink-0 mt-0.5" />
                <span>
                  Difficult to quickly revisit important questions or lessons
                  you want to study again.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-[#C8102E] shrink-0 mt-0.5" />
                <span>
                  No instant explanations, scores, or progress tracking after
                  practice.
                </span>
              </li>

            </ul>
          </div>

          {/* Our Platform */}
          <div className="bg-[#001B44] text-white p-8 rounded-3xl border border-[#002868] shadow-xl space-y-6 relative overflow-hidden">

            {/* Recommended Badge */}
            <div className="absolute top-0 right-0 bg-[#C8102E] text-white text-[10px] font-extrabold uppercase px-4 py-1.5 rounded-bl-2xl tracking-widest">
              Recommended
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#C8102E] flex items-center justify-center text-white">
                <Check className="w-5 h-5" />
              </div>

              <h3 className="text-xl font-bold text-white">
                Aussie Citizenship Prep Hub
              </h3>
            </div>

            <ul className="space-y-4 text-sm text-slate-300">

              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#18864B] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">
                    Detailed chapter explanations
                  </strong>{' '}
                  to help you understand the material instead of simply
                  memorising it.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#18864B] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">
                    Practice questions
                  </strong>{' '}
                  to reinforce what you learn and identify areas that need
                  more attention.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#18864B] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">
                    20 full mock tests
                  </strong>{' '}
                  designed to help you build confidence before test day.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#18864B] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">
                    Daily streaks
                  </strong>{' '}
                  to keep you motivated and build a consistent preparation
                  routine.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#18864B] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">
                    Bookmark questions and lessons
                  </strong>{' '}
                  so you can quickly return to important topics whenever you
                  need them.
                </span>
              </li>

            

              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#18864B] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white">
                    Your Personalized Study Companion
                  </strong>{' '}
                  to guide your preparation, help you stay on track, and make it easier
                  to focus on the areas that matter most.
                </span>
              </li>

            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}

