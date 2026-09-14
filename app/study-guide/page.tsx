'use client';

import React from 'react';
import {
  BookOpen,
  CheckCircle2,
  Clock,
  Flag,
  Landmark,
  Scale,
  Globe2,
  Users,
  Smartphone,
  ArrowRight,
  Target,
  Lightbulb,
  ClipboardCheck,
  Award,
} from 'lucide-react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const GOOGLE_PLAY_URL =
  'https://play.google.com/store/apps/details?id=com.australiancitizenship.prep';

export default function CitizenshipStudyGuide() {
  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#172033]">
      <Header />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#001B44] px-6 py-20 text-white sm:py-24 lg:px-8">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#C8102E]/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#002868]/50 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
            <BookOpen className="h-4 w-4 text-[#C8102E]" />
            Australian Citizenship Test
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Australian Citizenship Test
            <span className="block text-white/90">Study Guide</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Learn what to study for the Australian citizenship test, understand
            the key topics, and build a practical preparation routine before
            your test day.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#study-topics"
              className="inline-flex items-center gap-2 rounded-full bg-[#C8102E] px-7 py-4 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#A80D27]"
            >
              Start Studying
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#mobile-app"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/15"
            >
              <Smartphone className="h-4 w-4" />
              Study With the App
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================
          QUICK FACTS
      ========================================================= */}
      <section className="border-b border-[#E4E7EC] bg-white">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 px-6 py-7 sm:grid-cols-4 lg:px-8">
          <div className="rounded-2xl bg-[#F5F7FA] p-5 text-center">
            <p className="text-2xl font-extrabold text-[#002868]">20</p>
            <p className="mt-1 text-xs font-medium text-[#667085]">
              Questions
            </p>
          </div>

          <div className="rounded-2xl bg-[#F5F7FA] p-5 text-center">
            <p className="text-2xl font-extrabold text-[#002868]">45</p>
            <p className="mt-1 text-xs font-medium text-[#667085]">
              Minutes
            </p>
          </div>

          <div className="rounded-2xl bg-[#F5F7FA] p-5 text-center">
            <p className="text-2xl font-extrabold text-[#002868]">75%</p>
            <p className="mt-1 text-xs font-medium text-[#667085]">
              Overall Pass Mark
            </p>
          </div>

          <div className="rounded-2xl bg-[#FDECEE] p-5 text-center">
            <p className="text-2xl font-extrabold text-[#C8102E]">5/5</p>
            <p className="mt-1 text-xs font-medium text-[#667085]">
              Values Questions
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          MAIN CONTENT
      ========================================================= */}
      <main className="mx-auto max-w-4xl px-6 py-14 sm:py-16 lg:px-8">
        {/* =========================================================
            INTRO
        ========================================================= */}
        <section className="rounded-3xl border border-[#E4E7EC] bg-white p-8 shadow-sm sm:p-10">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#EEF3FB] text-[#002868]">
              <Target className="h-5 w-5" />
            </div>

            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-[#002868]">
                How to Use This Study Guide
              </h2>

              <p className="mt-3 leading-7 text-[#667085]">
                Start with the official Australian citizenship test study
                material and work through each major topic. Build your
                understanding first, then reinforce what you have learned with
                practice questions and timed mock tests.
              </p>

              <p className="mt-3 leading-7 text-[#667085]">
                If you prefer studying on your phone, our Australian Citizenship
                Test app brings the study material, practice questions and mock
                tests together in one place.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            STUDY TOPICS
        ========================================================= */}
  <section id="study-topics" className="mt-14">
  <div className="mb-7">
    <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#C8102E]">
      What to Study
    </span>

    <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#002868]">
      Australian Citizenship Test Study Topics
    </h2>

    <p className="mt-3 max-w-3xl leading-7 text-[#667085]">
      Your preparation is divided into four major areas covering the key
      subjects you need to understand for the Australian citizenship test.
      Work through each lesson, then reinforce your knowledge with practice
      questions and mock tests.
    </p>
  </div>

  <div className="space-y-6">

    {/* =========================================================
        PART 1 — AUSTRALIA & ITS PEOPLE
    ========================================================= */}
    <article className="rounded-3xl border border-[#E4E7EC] bg-white p-7 shadow-sm sm:p-8">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#EEF3FB] text-[#002868]">
          <Flag className="h-5 w-5" />
        </div>

        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#C8102E]">
              Part 1
            </span>

            <span className="rounded-full bg-[#F5F7FA] px-3 py-1 text-[10px] font-bold text-[#667085]">
              10 Lessons
            </span>
          </div>

          <h3 className="mt-1 text-xl font-extrabold text-[#002868]">
            Australia &amp; Its People
          </h3>

          <p className="mt-2 leading-7 text-[#667085]">
            Learn about Australia’s people, history, states, territories,
            traditions and national symbols.
          </p>

          <div className="mt-5 space-y-2">
            {[
              'Aboriginal & Torres Strait Islander peoples',
              'European settlement & the First Fleet',
              'Gold rush & early development',
              'Federation & the nation of Australia',
              'Australia’s people & multicultural society',
              'States, territories & capital cities',
              'Australian states & their features',
              'Welcome to Country & Acknowledgement of Country',
              'Important days for Australians',
              'Australian flags, symbols & national anthem',
            ].map((lesson, index) => (
              <div
                key={lesson}
                className="flex items-center gap-3 rounded-xl bg-[#F5F7FA] px-4 py-3"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#EEF3FB] text-xs font-extrabold text-[#002868]">
                  {index + 1}
                </span>

                <span className="text-sm font-semibold text-[#172033]">
                  {lesson}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>

    {/* =========================================================
        PART 2 — DEMOCRATIC BELIEFS
    ========================================================= */}
    <article className="rounded-3xl border border-[#E4E7EC] bg-white p-7 shadow-sm sm:p-8">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#EEF3FB] text-[#002868]">
          <Scale className="h-5 w-5" />
        </div>

        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#C8102E]">
              Part 2
            </span>

            <span className="rounded-full bg-[#F5F7FA] px-3 py-1 text-[10px] font-bold text-[#667085]">
              10 Lessons
            </span>
          </div>

          <h3 className="mt-1 text-xl font-extrabold text-[#002868]">
            Democratic Beliefs, Rights &amp; Liberties
          </h3>

          <p className="mt-2 leading-7 text-[#667085]">
            Understand Australia’s democratic beliefs, freedoms, equality,
            rights, citizenship responsibilities and privileges.
          </p>

          <div className="mt-5 space-y-2">
            {[
              'Australia’s democratic system',
              'The Rule of Law',
              'Freedom of speech & expression',
              'Freedom of association',
              'Freedom of religion',
              'Equality of people',
              'Equality of opportunity & a “fair go”',
              'Responsibilities of Australian citizens',
              'Privileges of Australian citizenship',
              'Participating in Australian society',
            ].map((lesson, index) => (
              <div
                key={lesson}
                className="flex items-center gap-3 rounded-xl bg-[#F5F7FA] px-4 py-3"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#EEF3FB] text-xs font-extrabold text-[#002868]">
                  {index + 1}
                </span>

                <span className="text-sm font-semibold text-[#172033]">
                  {lesson}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>

    {/* =========================================================
        PART 3 — GOVERNMENT & THE LAW
    ========================================================= */}
    <article className="rounded-3xl border border-[#E4E7EC] bg-white p-7 shadow-sm sm:p-8">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#EEF3FB] text-[#002868]">
          <Landmark className="h-5 w-5" />
        </div>

        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#C8102E]">
              Part 3
            </span>

            <span className="rounded-full bg-[#F5F7FA] px-3 py-1 text-[10px] font-bold text-[#667085]">
              10 Lessons
            </span>
          </div>

          <h3 className="mt-1 text-xl font-extrabold text-[#002868]">
            Government &amp; The Law
          </h3>

          <p className="mt-2 leading-7 text-[#667085]">
            Learn how Australia’s government works, how laws are made and how
            the legal system operates.
          </p>

          <div className="mt-5 space-y-2">
            {[
              'How do I have my say?',
              'Federation & the Australian Constitution',
              'Three powers of government',
              'Head of State & the Governor-General',
              'Australian Parliament',
              'Australian Government & political parties',
              'State & territory governments',
              'Local government',
              'What do the three levels of government do?',
              'How laws are made & enforced',
            ].map((lesson, index) => (
              <div
                key={lesson}
                className="flex items-center gap-3 rounded-xl bg-[#F5F7FA] px-4 py-3"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#EEF3FB] text-xs font-extrabold text-[#002868]">
                  {index + 1}
                </span>

                <span className="text-sm font-semibold text-[#172033]">
                  {lesson}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>

    {/* =========================================================
        PART 4 — AUSTRALIAN VALUES
    ========================================================= */}
    <article className="rounded-3xl border border-[#E4E7EC] bg-white p-7 shadow-sm sm:p-8">
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#FDECEE] text-[#C8102E]">
          <Award className="h-5 w-5" />
        </div>

        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#C8102E]">
              Part 4
            </span>

            <span className="rounded-full bg-[#F5F7FA] px-3 py-1 text-[10px] font-bold text-[#667085]">
              10 Lessons
            </span>
          </div>

          <h3 className="mt-1 text-xl font-extrabold text-[#002868]">
            Australian Values
          </h3>

          <p className="mt-2 leading-7 text-[#667085]">
            Understand the values of freedom, respect, equality, fairness and
            responsibility that shape Australian society.
          </p>

          <div className="mt-5 space-y-2">
            {[
              'Commitment to the Rule of Law',
              'Parliamentary democracy',
              'Freedom of speech & expression',
              'Freedom of association',
              'Freedom of religion',
              'Equality of all people',
              'Equality of opportunity & a “fair go”',
              'Mutual respect & tolerance',
              'Making a contribution & helping others',
              'Safety, loyalty & commitment to Australia',
            ].map((lesson, index) => (
              <div
                key={lesson}
                className="flex items-center gap-3 rounded-xl bg-[#F5F7FA] px-4 py-3"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#EEF3FB] text-xs font-extrabold text-[#002868]">
                  {index + 1}
                </span>

                <span className="text-sm font-semibold text-[#172033]">
                  {lesson}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-[#C8102E]/20 bg-[#FDECEE] p-5">
            <div className="flex items-center gap-2 font-bold text-[#C8102E]">
              <Award className="h-5 w-5" />
              Important
            </div>

            <p className="mt-2 text-sm leading-6 text-[#172033]">
              Make Australian values a priority in your preparation. You need
              to answer all 5 Australian values questions correctly.
            </p>
          </div>
        </div>
      </div>
    </article>

    {/* =========================================================
        APP CTA
    ========================================================= */}
    <section
      aria-labelledby="app-study-cta"
      className="relative mt-8 overflow-hidden rounded-3xl bg-[#002868] px-7 py-9 shadow-sm sm:px-10 sm:py-11"
    >
      {/* Decorative elements */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/5" />
      <div className="pointer-events-none absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-[#C8102E]/10" />

      <div className="relative max-w-3xl">
        <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.15em] text-white/80">
          Continue Your Preparation
        </span>

        <h2
          id="app-study-cta"
          className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl"
        >
          Study the Australian Citizenship Test on Your Phone
        </h2>

        <p className="mt-3 max-w-2xl leading-7 text-white/80">
          Take your preparation with you wherever you go. Our mobile app
          provides study material, practice questions and mock tests to help
          you learn the key topics and build confidence before test day.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="https://play.google.com/store/apps/details?id=com.australiancitizenship.prep"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-[#C8102E] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#A90D27] focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            Get the App on Google Play
          </a>
        </div>

        {/* Non-official app disclaimer */}
        <p className="mt-5 max-w-2xl text-xs leading-5 text-white/60">
          <strong className="font-semibold text-white/75">
            Important:
          </strong>{' '}
          This app is an independent study and preparation tool. It is not
          affiliated with, endorsed by, or operated by the Australian
          Government or the Department of Home Affairs. It is designed to help
          users study the citizenship test topics, practise questions and
          prepare with mock tests.
        </p>
      </div>
    </section>

  </div>
</section>

        {/* =========================================================
            STUDY PLAN
        ========================================================= */}
        <section className="mt-16">
          <div className="mb-7">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#C8102E]">
              Preparation Plan
            </span>

            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#002868]">
              A Simple Way to Prepare
            </h2>

            <p className="mt-3 leading-7 text-[#667085]">
              A structured approach can make your preparation easier and help
              you identify areas that need more revision.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                number: '01',
                icon: BookOpen,
                title: 'Learn the Study Material',
                text: 'Start with the official Our Common Bond resource and build your understanding of the material before relying heavily on practice questions.',
              },
              {
                number: '02',
                icon: ClipboardCheck,
                title: 'Study Topic by Topic',
                text: 'Break your preparation into smaller topics instead of trying to memorise everything at once.',
              },
              {
                number: '03',
                icon: CheckCircle2,
                title: 'Practise Questions',
                text: 'Use practice questions to identify topics you understand well and areas where you need additional revision.',
              },
              {
                number: '04',
                icon: Clock,
                title: 'Take Timed Mock Tests',
                text: 'Once you are comfortable with the material, practise under timed conditions so you become familiar with the test environment.',
              },
              {
                number: '05',
                icon: Lightbulb,
                title: 'Review Your Mistakes',
                text: 'Do not simply repeat questions. Review incorrect answers and return to the relevant study material before trying again.',
              },
            ].map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className="flex gap-4 rounded-2xl border border-[#E4E7EC] bg-white p-5 shadow-sm sm:p-6"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#002868] text-sm font-extrabold text-white">
                    {step.number}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4 text-[#C8102E]" />

                      <h3 className="font-extrabold text-[#172033]">
                        {step.title}
                      </h3>
                    </div>

                    <p className="mt-2 text-sm leading-6 text-[#667085]">
                      {step.text}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* =========================================================
            MOBILE APP CTA
        ========================================================= */}
        <section
          id="mobile-app"
          className="relative mt-16 overflow-hidden rounded-3xl bg-[#001B44] p-8 text-white shadow-xl sm:p-12"
        >
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#C8102E]/20 blur-3xl" />

          <div className="relative z-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
              <Smartphone className="h-6 w-6" />
            </div>

            <h2 className="mt-6 max-w-2xl text-2xl font-extrabold tracking-tight sm:text-3xl">
              Study the Australian Citizenship Test on Your Phone
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              Take your preparation beyond the website. Our Australian
              Citizenship Test mobile app includes study material, practice
              questions and mock tests, so you can learn, revise and practise
              wherever you are.
            </p>

            <div className="mt-7">
              <a
                href={GOOGLE_PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#C8102E] px-7 py-4 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#A80D27]"
              >
                Get the App on Google Play
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <p className="mt-4 text-xs text-slate-400">
              Study material, practice questions and mock tests in one app.
            </p>
          </div>
        </section>

        {/* =========================================================
            TEST DAY
        ========================================================= */}
        <section className="mt-16 rounded-3xl border border-[#E4E7EC] bg-white p-8 shadow-sm sm:p-10">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#EEF3FB] text-[#002868]">
              <ClipboardCheck className="h-5 w-5" />
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-[#002868]">
                Before Test Day
              </h2>

              <p className="mt-3 leading-7 text-[#667085]">
                In the final stage of your preparation, focus on reviewing your
                weaker topics and becoming comfortable with multiple-choice
                questions and timed practice.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  'Review the official study material.',
                  'Practise Australian values questions carefully.',
                  'Take timed mock tests.',
                  'Review questions you answered incorrectly.',
                  'Make sure you understand the test-day requirements in your official appointment information.',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-[#667085]"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#18864B]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* =========================================================
            FINAL CTA
        ========================================================= */}
        <section className="mt-8 rounded-3xl border border-[#E4E7EC] bg-white p-8 text-center shadow-sm sm:p-12">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FDECEE] text-[#C8102E]">
            <BookOpen className="h-6 w-6" />
          </div>

          <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-[#002868] sm:text-3xl">
            Start Your Citizenship Test Preparation
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#667085] sm:text-base">
            Learn the material, practise questions and test your knowledge with
            mock exams. Use the app to keep your preparation with you wherever
            you go.
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#C8102E] px-7 py-4 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#A80D27]"
            >
              <Smartphone className="h-4 w-4" />
              Get the App on Google Play
            </a>

            <a
              href="/exam"
              className="inline-flex items-center gap-2 rounded-full border border-[#002868]/15 bg-[#F5F7FA] px-7 py-4 text-sm font-bold text-[#002868] transition hover:bg-[#EEF3FB]"
            >
              Start Free Practice Exam
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>

        {/* =========================================================
            OFFICIAL RESOURCE
        ========================================================= */}
        <div className="mt-10 flex items-start gap-3 rounded-2xl border border-[#E4E7EC] bg-white p-5">
          <BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-[#18864B]" />

          <p className="text-xs leading-5 text-[#667085]">
            For the latest official information and study material, refer to
            the Australian Government Department of Home Affairs and the
            official{' '}
            <a
              href="https://immi.homeaffairs.gov.au/citizenship/test-and-interview/our-common-bond"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#002868] underline underline-offset-2"
            >
              Our Common Bond
            </a>{' '}
            resource.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}