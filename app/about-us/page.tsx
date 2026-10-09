"use client";

import React from "react";
import {
  BookOpen,
  CheckCircle2,
  ShieldCheck,
  Target,
  FileText,
  ExternalLink,
  Mail,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#172033]">
      <Header />

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#001B44] px-6 py-20 text-white sm:py-24 lg:px-8">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#C8102E]/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#002868]/60 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
            <Target className="h-4 w-4 text-[#C8102E]" />
            About Our Platform
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            About Australian
            <span className="block text-white/90">
              Citizenship Test Practice
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            We provide independent study and practice resources to help people
            prepare for the Australian citizenship test.
          </p>
        </div>
      </section>

      {/* =========================================================
          INTRO
      ========================================================= */}
      <main className="mx-auto max-w-5xl px-6 py-14 sm:py-16 lg:px-8">
        <div className="space-y-8">
          {/* =====================================================
              WHO WE ARE
          ===================================================== */}
          <section className="rounded-3xl border border-[#E4E7EC] bg-white p-7 shadow-sm sm:p-10">
            <SectionHeading
              icon={<BookOpen className="h-5 w-5" />}
              eyebrow="Who We Are"
              title="A preparation resource for citizenship test candidates"
            />

            <div className="mt-6 space-y-5 text-sm leading-7 text-[#667085] sm:text-base">
              <p>
                Australian Citizenship Test Practice is an independent
                educational platform created to help people prepare for the
                Australian citizenship test.
              </p>

              <p>
                The website brings together study guidance, practice questions,
                mock tests, explanations and other preparation resources in
                one place. Our aim is to make it easier for learners to review
                the topics covered by the citizenship test and identify areas
                where they may need additional study.
              </p>

              <p>
                Our preparation resources are designed to complement the
                official Australian Government citizenship test study material.
                Visitors should use the official resources as the primary
                source for current citizenship test and application
                information.
              </p>
            </div>
          </section>

          {/* =====================================================
              WHAT WE PROVIDE
          ===================================================== */}
          <section className="rounded-3xl border border-[#E4E7EC] bg-white p-7 shadow-sm sm:p-10">
            <SectionHeading
              icon={<CheckCircle2 className="h-5 w-5" />}
              eyebrow="What We Provide"
              title="Resources designed for practical preparation"
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <ResourceCard
                icon={<BookOpen className="h-5 w-5" />}
                title="Study Guidance"
                description="Review the main citizenship test topics and build an understanding of the material before moving on to practice."
              />

              <ResourceCard
                icon={<FileText className="h-5 w-5" />}
                title="Practice Questions"
                description="Use practice questions to reinforce your understanding and identify topics that may require more revision."
              />

              <ResourceCard
                icon={<Target className="h-5 w-5" />}
                title="Mock Tests"
                description="Complete timed practice exams to become familiar with multiple-choice questions and test timing."
              />

              <ResourceCard
                icon={<CheckCircle2 className="h-5 w-5" />}
                title="Results & Review"
                description="Review your practice results and use them to decide which areas you should study further."
              />
            </div>
          </section>

          {/* =====================================================
              OUR APPROACH
          ===================================================== */}
          <section className="rounded-3xl border border-[#E4E7EC] bg-white p-7 shadow-sm sm:p-10">
            <SectionHeading
              icon={<ShieldCheck className="h-5 w-5" />}
              eyebrow="Our Approach"
              title="Clear, practical and independent"
            />

            <div className="mt-6 space-y-5 text-sm leading-7 text-[#667085] sm:text-base">
              <p>
                We focus on providing preparation material that is
                straightforward and easy to use. Instead of relying only on
                memorisation, our resources encourage learners to understand
                the topics, practise answering questions and review their
                mistakes.
              </p>

              <p>
                We also aim to clearly distinguish our preparation material
                from official government resources. Practice questions and
                explanations published on this website are created for
                preparation and should not be treated as official Australian
                citizenship test questions.
              </p>
            </div>
          </section>

          {/* =====================================================
              OFFICIAL SOURCES
          ===================================================== */}
          <section className="rounded-3xl border border-[#E4E7EC] bg-white p-7 shadow-sm sm:p-10">
            <SectionHeading
              icon={<FileText className="h-5 w-5" />}
              eyebrow="Official Information"
              title="Use Australian Government sources for current requirements"
            />

            <div className="mt-6 rounded-2xl border border-[#E4E7EC] bg-[#F5F7FA] p-6">
              <p className="text-sm leading-7 text-[#667085] sm:text-base">
                Citizenship requirements, application procedures, fees,
                appointments and other government processes can change. For
                the latest official information, always check the Australian
                Government Department of Home Affairs.
              </p>

              <a
                href="https://immi.homeaffairs.gov.au/citizenship/test-and-interview/our-common-bond"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#002868] underline underline-offset-4 transition hover:text-[#C8102E]"
              >
                View the official Our Common Bond resource
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </section>

          {/* =====================================================
              INDEPENDENCE / DISCLAIMER
          ===================================================== */}
          <section className="rounded-3xl border border-[#C8102E]/20 bg-[#FDECEE] p-7 sm:p-10">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#C8102E] shadow-sm">
                <ShieldCheck className="h-5 w-5" />
              </div>

              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#C8102E]">
                  Important
                </p>

                <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-[#002868]">
                  Independent educational resource
                </h2>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-sm leading-7 text-[#667085] sm:text-base">
              <p>
                Australian Citizenship Test Practice is an independent
                educational website. We are not the Australian Government,
                Department of Home Affairs, or any other government agency.
              </p>

              <p>
                The website is not affiliated with, endorsed by, or operated
                by the Australian Government or the Department of Home
                Affairs.
              </p>

              <p>
                Information on this website is provided for educational and
                preparation purposes. Always refer to official government
                sources for decisions relating to your citizenship application
                and current requirements.
              </p>
            </div>
          </section>

          {/* =====================================================
              RELATED RESOURCES
          ===================================================== */}
          <section className="grid gap-4 sm:grid-cols-2">
            <Link
              href="/citizenship-test-guide"
              className="group rounded-2xl border border-[#E4E7EC] bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[#002868]/20 hover:shadow-md"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-[#C8102E]">
                Learn More
              </p>

              <h3 className="mt-2 text-lg font-extrabold text-[#002868]">
                Australian Citizenship Test Guide
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#667085]">
                Explore test requirements, eligibility, fees, the application
                process and what to expect.
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
                Find answers to common questions about test format, scoring,
                Australian values and preparation.
              </p>

              <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#002868]">
                Browse FAQs
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </Link>
          </section>

          {/* =====================================================
              CONTACT CTA
          ===================================================== */}
          <section className="relative overflow-hidden rounded-3xl bg-[#001B44] p-8 text-center text-white shadow-xl sm:p-12">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#C8102E]/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#002868]/60 blur-3xl" />

            <div className="relative z-10">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                <Mail className="h-6 w-6 text-white" />
              </div>

              <h2 className="mt-5 text-2xl font-extrabold tracking-tight sm:text-3xl">
                Have a question about the website?
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-300 sm:text-base">
                If you need help with our website or preparation resources,
                you can contact us through our contact page.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#C8102E] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#C8102E]/20 transition-all hover:-translate-y-0.5 hover:bg-[#A80D27]"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </section>
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

function ResourceCard({
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