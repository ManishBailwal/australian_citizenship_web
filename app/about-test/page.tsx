
"use client";

import React from "react";
import {
  BookOpen,
  CheckCircle2,
  Clock,
  FileText,
  Flag,
  Monitor,
  ShieldCheck,
  Target,
  Users,
  ArrowRight,
  AlertTriangle,
  Lightbulb,
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function AboutTestPage() {
  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#172033]">

        <Header/>
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#001B44] px-6 py-20 text-white sm:py-24 lg:px-8">
        {/* Decorative background */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#C8102E]/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#002868]/60 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="text-center">
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
              <Target className="h-4 w-4 text-[#C8102E]" />
              Australian Citizenship Test
            </div>

            {/* H1 */}
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              About the Australian
              <span className="block text-white/90">
                Citizenship Test
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Understand exactly how the Australian citizenship test works,
              what you will be tested on, how the scoring works, and what you
              need to know before test day.
            </p>
          </div>

          {/* =====================================================
              TEST SNAPSHOT
          ===================================================== */}
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {/* Questions */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 text-center backdrop-blur-sm">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                <FileText className="h-5 w-5 text-white" />
              </div>

              <p className="mt-4 text-3xl font-extrabold">20</p>
              <p className="mt-1 text-xs font-medium text-slate-400">
                Questions
              </p>
            </div>

            {/* Time */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 text-center backdrop-blur-sm">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                <Clock className="h-5 w-5 text-white" />
              </div>

              <p className="mt-4 text-3xl font-extrabold">45</p>
              <p className="mt-1 text-xs font-medium text-slate-400">
                Minutes
              </p>
            </div>

            {/* Pass mark */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 text-center backdrop-blur-sm">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                <CheckCircle2 className="h-5 w-5 text-white" />
              </div>

              <p className="mt-4 text-3xl font-extrabold">75%</p>
              <p className="mt-1 text-xs font-medium text-slate-400">
                Overall Pass Mark
              </p>
            </div>

            {/* Values */}
            <div className="rounded-2xl border border-[#C8102E]/30 bg-[#C8102E]/10 p-5 text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-[#C8102E]/20">
                <ShieldCheck className="h-5 w-5 text-white" />
              </div>

              <p className="mt-4 text-3xl font-extrabold">5/5</p>
              <p className="mt-1 text-xs font-medium text-slate-300">
                Values Required
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          QUICK INTRO
      ========================================================= */}
      <section className="border-b border-[#E4E7EC] bg-white">
        <div className="mx-auto max-w-5xl px-6 py-8 lg:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EEF3FB] text-[#002868]">
              <BookOpen className="h-6 w-6" />
            </div>

            <div>
              <h2 className="text-base font-extrabold text-[#172033]">
                What is the Australian citizenship test?
              </h2>

              <p className="mt-1 max-w-3xl text-sm leading-6 text-[#667085]">
                The Australian citizenship test is a computer-based
                multiple-choice assessment designed to check your knowledge
                of Australia and your understanding of the responsibilities
                and privileges of Australian citizenship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}
      <main className="mx-auto max-w-5xl px-6 py-14 sm:py-16 lg:px-8">
        <div className="space-y-8">
          {/* =====================================================
              SECTION 1 — HOW THE TEST WORKS
          ===================================================== */}
          <section
            id="how-it-works"
            className="rounded-3xl border border-[#E4E7EC] bg-white p-7 shadow-sm sm:p-10"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EEF3FB] text-[#002868]">
                <Monitor className="h-5 w-5" />
              </div>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#C8102E]">
                  Test Format
                </p>

                <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-[#002868] sm:text-3xl">
                  How does the citizenship test work?
                </h2>
              </div>
            </div>

            <p className="mt-6 text-sm leading-7 text-[#667085] sm:text-base">
              The Australian citizenship test is conducted on a computer at
              an approved test centre. You will answer multiple-choice
              questions covering Australian values, government, laws, history,
              national symbols, and other topics contained in the official
              study material.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <InfoCard
                number="01"
                title="Computer Based"
                description="The test is completed electronically at an approved test centre."
              />

              <InfoCard
                number="02"
                title="20 Questions"
                description="You will answer 20 multiple-choice questions."
              />

              <InfoCard
                number="03"
                title="45 Minutes"
                description="You have 45 minutes to complete the test."
              />
            </div>
          </section>

          {/* =====================================================
              SECTION 2 — WHAT IS TESTED
          ===================================================== */}
          <section
            id="what-is-tested"
            className="rounded-3xl border border-[#E4E7EC] bg-white p-7 shadow-sm sm:p-10"
          >
            <SectionHeading
              icon={<BookOpen className="h-5 w-5" />}
              eyebrow="What You Study"
              title="What topics are tested?"
            />

            <p className="mt-6 text-sm leading-7 text-[#667085] sm:text-base">
              Questions are based on the official Australian citizenship study
              material. Your preparation should focus on understanding the
              information rather than simply memorising isolated answers.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <TopicCard
                icon={<Flag className="h-5 w-5" />}
                title="Australia and Its People"
                description="Learn about Australia's history, national identity, symbols and important events."
              />

              <TopicCard
                icon={<Users className="h-5 w-5" />}
                title="Democratic Beliefs"
                description="Understand Australia's democratic system and the principles that underpin Australian society."
              />

              <TopicCard
                icon={<ShieldCheck className="h-5 w-5" />}
                title="Government & the Law"
                description="Understand Australia's system of government, laws and the rule of law."
              />

              <TopicCard
                icon={<CheckCircle2 className="h-5 w-5" />}
                title="Australian Values"
                description="Understand the values expected of people who become Australian citizens."
              />
            </div>
          </section>

          {/* =====================================================
              SECTION 3 — PASSING SCORE
          ===================================================== */}
          <section
            id="passing-score"
            className="rounded-3xl border border-[#E4E7EC] bg-white p-7 shadow-sm sm:p-10"
          >
            <SectionHeading
              icon={<Target className="h-5 w-5" />}
              eyebrow="Scoring"
              title="What score do you need to pass?"
            />

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-[#EEF3FB] p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#667085]">
                  Overall requirement
                </span>

                <p className="mt-2 text-4xl font-extrabold text-[#002868]">
                  75%
                </p>

                <p className="mt-2 text-sm leading-6 text-[#667085]">
                  You need to correctly answer at least 15 of the 20 questions
                  to meet the overall passing requirement.
                </p>
              </div>

              <div className="rounded-2xl border-2 border-[#C8102E] bg-[#FDECEE] p-6">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-[#C8102E]" />

                  <span className="text-xs font-bold uppercase tracking-wider text-[#C8102E]">
                    Critical requirement
                  </span>
                </div>

                <p className="mt-2 text-4xl font-extrabold text-[#C8102E]">
                  5 / 5
                </p>

                <p className="mt-2 text-sm leading-6 text-[#172033]">
                  All 5 Australian values questions must be answered correctly.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-[#E4E7EC] bg-[#F5F7FA] p-5">
              <div className="flex items-start gap-3">
                <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-[#C8102E]" />

                <p className="text-sm leading-6 text-[#667085]">
                  <strong className="text-[#172033]">
                    Important:
                  </strong>{" "}
                  Reaching 75% overall is not enough by itself. You must also
                  answer every Australian values question correctly.
                </p>
              </div>
            </div>
          </section>

          {/* =====================================================
              SECTION 4 — AUSTRALIAN VALUES
          ===================================================== */}
          <section
            id="australian-values"
            className="rounded-3xl border border-[#E4E7EC] bg-white p-7 shadow-sm sm:p-10"
          >
            <SectionHeading
              icon={<ShieldCheck className="h-5 w-5" />}
              eyebrow="Australian Values"
              title="Why are Australian values important?"
            />

            <p className="mt-6 text-sm leading-7 text-[#667085] sm:text-base">
              Australian values form a particularly important part of the
              citizenship test. The values questions assess your understanding
              of principles that are fundamental to Australia's democratic
              society.
            </p>

            <div className="mt-7 space-y-3">
              <ValueRow
                title="Freedom and dignity of the individual"
                description="Respect for the freedom and dignity of every person."
              />

              <ValueRow
                title="Equality"
                description="Respect for equality between men and women and equality before the law."
              />

              <ValueRow
                title="The rule of law"
                description="Everyone is subject to Australia's laws and no person is above the law."
              />

              <ValueRow
                title="Parliamentary democracy"
                description="Australia's democratic system is based on elected representatives and participation."
              />

              <ValueRow
                title="Peaceful participation"
                description="Citizens are expected to participate peacefully and respect the rights of others."
              />
            </div>
          </section>

          {/* =====================================================
              SECTION 5 — BEFORE TEST DAY
          ===================================================== */}
          <section
            id="before-test"
            className="rounded-3xl border border-[#E4E7EC] bg-white p-7 shadow-sm sm:p-10"
          >
            <SectionHeading
              icon={<Clock className="h-5 w-5" />}
              eyebrow="Before Your Appointment"
              title="What should you know before test day?"
            />

            <div className="mt-7 space-y-4">
              <ChecklistRow
                title="Study the official resource"
                description="Use the official Our Common Bond resource as the foundation of your preparation."
              />

              <ChecklistRow
                title="Practise multiple-choice questions"
                description="Use practice questions to become comfortable with the format and identify topics that need more revision."
              />

              <ChecklistRow
                title="Practise Australian values"
                description="Pay particular attention to Australian values because every values question must be answered correctly."
              />

              <ChecklistRow
                title="Practise under time pressure"
                description="Complete timed practice exams so that the 45-minute format feels familiar before your appointment."
              />
            </div>
          </section>

          {/* =====================================================
              SECTION 6 — TEST DAY
          ===================================================== */}
          <section
            id="test-day"
            className="rounded-3xl border border-[#E4E7EC] bg-white p-7 shadow-sm sm:p-10"
          >
            <SectionHeading
              icon={<FileText className="h-5 w-5" />}
              eyebrow="Test Day"
              title="What happens during the test?"
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <StepCard
                number="01"
                title="Check In"
                description="Arrive at your test centre and complete the required identification and appointment checks."
              />

              <StepCard
                number="02"
                title="Take the Test"
                description="Answer the 20 multiple-choice questions on the computer within the available time."
              />

              <StepCard
                number="03"
                title="Receive Your Result"
                description="Your result is displayed after you complete the computer-based test."
              />
            </div>
          </section>

          {/* =====================================================
              SECTION 7 — AFTER THE TEST
          ===================================================== */}
          <section
            id="after-test"
            className="rounded-3xl border border-[#E4E7EC] bg-white p-7 shadow-sm sm:p-10"
          >
            <SectionHeading
              icon={<CheckCircle2 className="h-5 w-5" />}
              eyebrow="After the Test"
              title="What happens after you pass?"
            />

            <p className="mt-6 text-sm leading-7 text-[#667085] sm:text-base">
              Passing the citizenship test is an important step in your
              citizenship application, but it is not the same as becoming an
              Australian citizen immediately. The Department of Home Affairs
              continues processing your application before a final decision
              and, where applicable, your citizenship ceremony.
            </p>

            <div className="mt-7 rounded-2xl bg-[#F5F7FA] p-6">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#18864B]" />

                <div>
                  <h3 className="text-sm font-bold text-[#172033]">
                    The test is only one part of the citizenship process
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-[#667085]">
                    Your citizenship application may still require further
                    assessment before it is approved.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* =====================================================
              CTA
          ===================================================== */}
          <section className="relative overflow-hidden rounded-3xl bg-[#001B44] p-8 text-center text-white shadow-xl sm:p-12">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#C8102E]/10 blur-3xl" />

            <div className="relative z-10">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                <Target className="h-6 w-6 text-white" />
              </div>

              <h2 className="mt-5 text-2xl font-extrabold tracking-tight sm:text-3xl">
                Now put your knowledge to the test
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
                Practise with our free Australian citizenship test simulator
                and see how prepared you really are.
              </p>

              <Link
                href="/exam"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#C8102E] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#C8102E]/20 transition-all hover:-translate-y-0.5 hover:bg-[#A80D27]"
              >
                Start Free Practice Exam
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>

          {/* =====================================================
              RELATED PAGES
          ===================================================== */}
          <section className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/citizenship-test-guide"
              className="group rounded-2xl border border-[#E4E7EC] bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[#002868]/20 hover:shadow-md"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-[#C8102E]">
                Next Reading
              </p>

              <h3 className="mt-2 text-lg font-extrabold text-[#002868]">
                Australian Citizenship Test Guide
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#667085]">
                Explore eligibility, documents, fees, application steps and
                what happens after the test.
              </p>

              <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#002868]">
                Read the guide
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              href="/citizenship-test-faq"
              className="group rounded-2xl border border-[#E4E7EC] bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[#002868]/20 hover:shadow-md"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-[#C8102E]">
                Have Questions?
              </p>

              <h3 className="mt-2 text-lg font-extrabold text-[#002868]">
                Australian Citizenship Test FAQs
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#667085]">
                Browse 25 commonly asked questions about the test, scoring,
                Australian values and preparation.
              </p>

              <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#002868]">
                Browse FAQs
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          </section>

          {/* =====================================================
              OFFICIAL RESOURCE
          ===================================================== */}
          <div className="flex items-start gap-3 rounded-2xl border border-[#E4E7EC] bg-white p-5">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#18864B]" />

            <p className="text-xs leading-5 text-[#667085]">
              For the latest official information about the citizenship test,
              always refer to the Australian Government Department of Home
              Affairs and the official{" "}
              <a
                href="https://immi.homeaffairs.gov.au/citizenship/test-and-interview/our-common-bond"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#002868] underline underline-offset-2"
              >
                Our Common Bond
              </a>{" "}
              resource.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

/* =============================================================
   REUSABLE COMPONENTS
   ============================================================= */

function SectionHeading({
  icon,
  eyebrow,
  title,
}: {
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EEF3FB] text-[#002868]">
        {icon}
      </div>

      <div>
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#C8102E]">
          {eyebrow}
        </p>

        <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-[#002868] sm:text-3xl">
          {title}
        </h2>
      </div>
    </div>
  );
}

function InfoCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-[#E4E7EC] bg-[#F5F7FA] p-5">
      <span className="text-xs font-extrabold text-[#C8102E]">
        {number}
      </span>

      <h3 className="mt-3 text-sm font-extrabold text-[#172033]">
        {title}
      </h3>

      <p className="mt-1 text-xs leading-5 text-[#667085]">
        {description}
      </p>
    </div>
  );
}

function TopicCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-[#E4E7EC] bg-[#F5F7FA] p-5 transition hover:border-[#002868]/20 hover:bg-white hover:shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#002868] shadow-sm">
          {icon}
        </div>

        <h3 className="text-sm font-extrabold text-[#172033]">
          {title}
        </h3>
      </div>

      <p className="mt-3 text-sm leading-6 text-[#667085]">
        {description}
      </p>
    </div>
  );
}

function ValueRow({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-[#E4E7EC] bg-[#F5F7FA] p-4">
      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#EAF7F0] text-[#18864B]">
        <CheckCircle2 className="h-4 w-4" />
      </div>

      <div>
        <h3 className="text-sm font-bold text-[#172033]">
          {title}
        </h3>

        <p className="mt-1 text-sm leading-5 text-[#667085]">
          {description}
        </p>
      </div>
    </div>
  );
}

function ChecklistRow({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-[#E4E7EC] bg-[#F5F7FA] p-5">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EAF7F0] text-[#18864B]">
        <CheckCircle2 className="h-4 w-4" />
      </div>

      <div>
        <h3 className="text-sm font-bold text-[#172033]">
          {title}
        </h3>

        <p className="mt-1 text-sm leading-6 text-[#667085]">
          {description}
        </p>
      </div>
    </div>
  );
}

function StepCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="relative rounded-2xl border border-[#E4E7EC] bg-[#F5F7FA] p-6">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#002868] text-xs font-extrabold text-white">
        {number}
      </div>

      <h3 className="mt-5 text-base font-extrabold text-[#172033]">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-[#667085]">
        {description}
      </p>
    </div>
  );
}

