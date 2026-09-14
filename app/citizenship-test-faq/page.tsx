
"use client";

import React, { useState } from "react";
import {
  Search,
  ChevronDown,
  HelpCircle,
  BookOpen,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Calendar,
  FileText,
  ArrowRight,
  Star,
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const FAQS = [
  {
    category: "Test Basics",
    icon: BookOpen,
    questions: [
      {
        q: "What is the Australian citizenship test?",
        a: "The Australian citizenship test is a computer-based multiple-choice test that assesses your knowledge of Australia and the responsibilities and privileges of Australian citizenship. The test is based on the official Our Common Bond resource provided by the Department of Home Affairs.",
      },
      {
        q: "How many questions are on the Australian citizenship test?",
        a: "The Australian citizenship test consists of 20 multiple-choice questions. You have 45 minutes to complete the computer-based test.",
      },
      {
        q: "How long is the Australian citizenship test?",
        a: "You are given 45 minutes to complete the Australian citizenship test. The test is taken on a computer at an approved test centre.",
      },
      {
        q: "Is the Australian citizenship test in English?",
        a: "Yes. The actual citizenship test administered at the test centre is conducted in English. Official study resources such as the Our Common Bond booklet may be available in community languages, but the test itself is in English.",
      },
      {
        q: "What does the Australian citizenship test cover?",
        a: "The test covers Australia's democratic beliefs, laws and government, Australian values, national symbols, history, geography, and the responsibilities and privileges of Australian citizenship. The questions are based on the official Our Common Bond resource.",
      },
    ],
  },
  {
    category: "Passing Score & Australian Values",
    icon: CheckCircle2,
    questions: [
      {
        q: "What score do I need to pass the Australian citizenship test?",
        a: "You need to achieve an overall score of at least 75% to pass the test. With 20 questions, this means answering at least 15 questions correctly.",
      },
      {
        q: "How many Australian values questions are on the citizenship test?",
        a: "The Australian citizenship test includes 5 questions specifically assessing Australian values.",
      },
      {
        q: "Do I need to get all Australian values questions correct?",
        a: "Yes. You must answer all 5 Australian values questions correctly. Getting even one Australian values question wrong means you do not pass the test, even if your overall score is 75% or higher.",
      },
      {
        q: "What are Australian values questions?",
        a: "Australian values questions assess your understanding of fundamental Australian values, including respect for the freedom and dignity of individuals, equality, the rule of law, parliamentary democracy, and peaceful participation in Australian society.",
      },
      {
        q: "Can I pass if I get 15 out of 20 questions correct?",
        a: "A score of 15 out of 20 meets the 75% overall passing requirement. However, you must also answer all 5 Australian values questions correctly. A total score of 15/20 alone does not guarantee a pass.",
      },
    ],
  },
  {
    category: "Booking & Test Day",
    icon: Calendar,
    questions: [
      {
        q: "Where do I take the Australian citizenship test?",
        a: "The citizenship test is conducted at an approved Department of Home Affairs test centre. Your appointment information will provide the location and details you need for your test.",
      },
      {
        q: "What should I bring to my citizenship test?",
        a: "Bring your appointment or booking confirmation and the original photo identification documents required for your appointment, such as the passport or other identification specified by the Department.",
      },
      {
        q: "How do I book my Australian citizenship test?",
        a: "After your citizenship application is processed to the stage where a test is required, the Department of Home Affairs will provide information about your test appointment. Follow the instructions in your appointment notice to arrange your test.",
      },
      {
        q: "Can I change my citizenship test appointment?",
        a: "If you need to change your appointment, follow the instructions provided by the Department of Home Affairs in your appointment notice. Availability for alternative appointments can depend on your location and available test-centre times.",
      },
      {
        q: "Do I get my citizenship test result immediately?",
        a: "Your test result is generally displayed on the computer screen when you finish the test, allowing you to know whether you have passed the test at the end of your appointment.",
      },
    ],
  },
  {
    category: "Failing & Retaking the Test",
    icon: ShieldCheck,
    questions: [
      {
        q: "What happens if I fail the Australian citizenship test?",
        a: "Failing the citizenship test does not automatically end your citizenship application. You may be given another opportunity to sit the test. Follow the instructions provided by the Department of Home Affairs after your unsuccessful attempt.",
      },
      {
        q: "Can I retake the Australian citizenship test if I fail?",
        a: "Yes. If you do not pass the test, you can generally take the test again. Retesting is part of the citizenship application process and does not require you to submit an entirely new citizenship application.",
      },
      {
        q: "Do I have to pay again if I fail the citizenship test?",
        a: "You do not normally pay a separate citizenship application fee simply because you need to retake the test. Your original citizenship application remains the basis for the testing process.",
      },
      {
        q: "Can I take the citizenship test again on the same day?",
        a: "You cannot simply retake the citizenship test immediately on the same day after an unsuccessful attempt. You will need to follow the Department of Home Affairs process for arranging another test appointment.",
      },
      {
        q: "How many attempts do I have to pass the citizenship test?",
        a: "The Department of Home Affairs may provide further test opportunities if you do not pass. The exact circumstances can depend on your application and the instructions provided by the Department, so always follow the requirements in your official correspondence.",
      },
    ],
  },
  {
    category: "Preparation & Study",
    icon: Star,
    questions: [
      {
        q: "What is the best way to prepare for the Australian citizenship test?",
        a: "The best place to start is the official Our Common Bond resource. Study the material carefully and then reinforce your knowledge with practice questions and timed mock tests. Pay particular attention to Australian values because all 5 values questions must be answered correctly.",
      },
      {
        q: "What study material should I use for the Australian citizenship test?",
        a: "The official Our Common Bond resource from the Department of Home Affairs is the primary study resource for the citizenship test. Use it as the foundation of your preparation before completing practice tests.",
      },
      {
        q: "How many practice tests should I take before the citizenship test?",
        a: "There is no fixed number of practice tests that guarantees success. A good approach is to continue practising until you can consistently achieve scores comfortably above the 75% requirement while correctly answering all Australian values questions.",
      },
      {
        q: "Are Australian citizenship practice tests useful?",
        a: "Yes. Practice tests can help you become familiar with multiple-choice questions, identify areas where you need more study, improve your timing, and build confidence before the real test.",
      },
      {
        q: "How can I improve my Australian citizenship test score?",
        a: "Review the official study material, identify the topics you frequently get wrong, practise those topics specifically, and take timed mock exams. Do not focus only on reaching 75%—make sure you can consistently answer Australian values questions correctly as well.",
      },
    ],
  },
];

const allFaqs = FAQS.flatMap((section) => section.questions);

export default function CitizenshipTestFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [search, setSearch] = useState("");

  const filteredSections = FAQS.map((section) => ({
    ...section,
    questions: section.questions.filter(
      ({ q, a }) =>
        q.toLowerCase().includes(search.toLowerCase()) ||
        a.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter((section) => section.questions.length > 0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: {
        "@type": "Answer",
        text: a,
      },
    })),
  };

  let questionCounter = 0;

  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#172033]">
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <Header />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#001B44] px-6 py-20 text-white sm:py-24 lg:px-8">
        {/* Decorative background elements */}
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#C8102E]/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#002868]/50 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
            <HelpCircle className="h-4 w-4 text-[#C8102E]" />
            Australian Citizenship Test
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Australian Citizenship
            <span className="block text-white/90">Test FAQs</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Get clear answers to the most common questions about the
            Australian citizenship test, including questions, passing scores,
            Australian values, test day, retakes, and preparation.
          </p>

          {/* Search */}
          <div className="mx-auto mt-10 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-[#667085]" />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search your question..."
                className="w-full rounded-2xl border border-white/10 bg-white py-4 pl-14 pr-5 text-sm font-medium text-[#172033] shadow-2xl outline-none transition placeholder:text-[#98A2B3] focus:ring-4 focus:ring-[#C8102E]/20 sm:py-5"
              />
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400">
            <span>25 common questions</span>
            <span className="hidden sm:inline">•</span>
            <span>Test format</span>
            <span className="hidden sm:inline">•</span>
            <span>Australian values</span>
            <span className="hidden sm:inline">•</span>
            <span>Preparation</span>
          </div>
        </div>
      </section>

      {/* =========================================================
          INTRO / TRUST STRIP
      ========================================================= */}
      <section className="border-b border-[#E4E7EC] bg-white">
        <div className="mx-auto flex max-w-5xl flex-col gap-5 px-6 py-7 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EEF3FB] text-[#002868]">
              <FileText className="h-4 w-4" />
            </div>

            <div>
              <p className="text-sm font-bold text-[#172033]">
                Your citizenship test questions, answered
              </p>
              <p className="mt-1 text-xs leading-5 text-[#667085]">
                Information is based on the official Australian citizenship
                test study resources and application guidance.
              </p>
            </div>
          </div>

          <Link
            href="/citizenship-test-guide"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#002868] transition hover:text-[#C8102E]"
          >
            Read the complete guide
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* =========================================================
          FAQ CONTENT
      ========================================================= */}
      <main className="mx-auto max-w-4xl px-6 py-14 sm:py-16 lg:px-8">
        {filteredSections.length > 0 ? (
          <div className="space-y-14">
            {filteredSections.map((section) => {
              const Icon = section.icon;

              return (
                <section key={section.category}>
                  {/* Category heading */}
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF3FB] text-[#002868]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#C8102E]">
                        Frequently Asked Questions
                      </p>

                      <h2 className="text-xl font-extrabold tracking-tight text-[#002868] sm:text-2xl">
                        {section.category}
                      </h2>
                    </div>
                  </div>

                  {/* Questions */}
                  <div className="space-y-3">
                    {section.questions.map((faq) => {
                      const currentIndex = questionCounter++;
                      const isOpen = openIndex === currentIndex;

                      return (
                        <article
                          key={faq.q}
                          className={`overflow-hidden rounded-2xl border bg-white transition-all duration-200 ${
                            isOpen
                              ? "border-[#002868]/20 shadow-md"
                              : "border-[#E4E7EC] shadow-sm hover:border-[#002868]/20 hover:shadow-md"
                          }`}
                        >
                          <button
                            type="button"
                            onClick={() =>
                              setOpenIndex(isOpen ? null : currentIndex)
                            }
                            className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6"
                            aria-expanded={isOpen}
                          >
                            <span
                              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-extrabold transition ${
                                isOpen
                                  ? "bg-[#002868] text-white"
                                  : "bg-[#F5F7FA] text-[#667085]"
                              }`}
                            >
                              {String(currentIndex + 1).padStart(2, "0")}
                            </span>

                            <span className="flex-1 pr-2 text-sm font-bold leading-6 text-[#172033] sm:text-base">
                              {faq.q}
                            </span>

                            <span
                              className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition ${
                                isOpen
                                  ? "bg-[#C8102E] text-white"
                                  : "bg-[#F5F7FA] text-[#667085]"
                              }`}
                            >
                              <ChevronDown
                                className={`h-4 w-4 transition-transform duration-200 ${
                                  isOpen ? "rotate-180" : ""
                                }`}
                              />
                            </span>
                          </button>

                          <div
                            className={`grid transition-[grid-template-rows] duration-300 ${
                              isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                            }`}
                          >
                            <div className="overflow-hidden">
                              <div className="border-t border-[#E4E7EC] px-5 pb-6 pt-5 sm:px-6">
                                <p className="text-sm leading-7 text-[#667085] sm:text-[15px]">
                                  {faq.a}
                                </p>
                              </div>
                            </div>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>
        ) : (
          <div className="rounded-3xl border border-[#E4E7EC] bg-white px-6 py-16 text-center shadow-sm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F5F7FA] text-[#667085]">
              <Search className="h-6 w-6" />
            </div>

            <h2 className="mt-5 text-xl font-extrabold text-[#172033]">
              No questions found
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#667085]">
              Try searching for another term such as "values", "pass mark",
              "retake", or "questions".
            </p>

            <button
              onClick={() => setSearch("")}
              className="mt-6 rounded-full bg-[#002868] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#001B44]"
            >
              Show all questions
            </button>
          </div>
        )}

        {/* =========================================================
            QUICK FACTS
        ========================================================= */}
        {!search && (
          <section className="mt-16 rounded-3xl bg-[#001B44] p-7 text-white shadow-xl sm:p-10">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#C8102E]">
                Know the essentials
              </span>

              <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
                Australian Citizenship Test at a Glance
              </h2>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
                <p className="text-2xl font-extrabold">20</p>
                <p className="mt-1 text-xs text-slate-400">Questions</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
                <p className="text-2xl font-extrabold">45</p>
                <p className="mt-1 text-xs text-slate-400">Minutes</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
                <p className="text-2xl font-extrabold">75%</p>
                <p className="mt-1 text-xs text-slate-400">Pass Mark</p>
              </div>

              <div className="rounded-2xl border border-[#C8102E]/30 bg-[#C8102E]/10 p-5 text-center">
                <p className="text-2xl font-extrabold">5/5</p>
                <p className="mt-1 text-xs text-slate-300">Values Required</p>
              </div>
            </div>
          </section>
        )}

        {/* =========================================================
            CTA
        ========================================================= */}
        {!search && (
          <section className="mt-8 overflow-hidden rounded-3xl border border-[#E4E7EC] bg-white p-8 text-center shadow-sm sm:p-12">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FDECEE] text-[#C8102E]">
              <Clock className="h-6 w-6" />
            </div>

            <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-[#002868] sm:text-3xl">
              Ready to test your knowledge?
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#667085] sm:text-base">
              Stop reading and start practising. Take our free citizenship
              practice exam and experience a timed test environment.
            </p>

            <Link
              href="/exam"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#C8102E] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#C8102E]/20 transition-all hover:-translate-y-0.5 hover:bg-[#A80D27]"
            >
              Start Free Practice Exam
              <ArrowRight className="h-4 w-4" />
            </Link>
          </section>
        )}

        {/* =========================================================
            OFFICIAL RESOURCE
        ========================================================= */}
        <div className="mt-10 flex items-start gap-3 rounded-2xl border border-[#E4E7EC] bg-white p-5">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#18864B]" />

          <p className="text-xs leading-5 text-[#667085]">
            For the latest official information, always refer to the
            Australian Government Department of Home Affairs and the official
            <a
              href="https://immi.homeaffairs.gov.au/citizenship/test-and-interview/our-common-bond"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 font-semibold text-[#002868] underline underline-offset-2"
            >
              Our Common Bond
            </a>{" "}
            resource.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

