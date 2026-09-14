"use client" ;
import React from 'react';
import { ShieldCheck, FileText, DollarSign, Award, CheckCircle2, AlertTriangle, Clock, HelpCircle, ArrowRight, UserCheck, Calendar, MapPin, BookOpen } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export default function CitizenshipGuide() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How many questions are on the Australian citizenship test?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The test consists of 20 multiple-choice questions. You are given 45 minutes to complete the computer-based exam."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if I fail the Australian values section?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You must answer all 5 questions (100%) in the Australian values section correctly. Missing even a single values question results in an automatic fail, regardless of your overall score."
        }
      },
      {
        "@type": "Question",
        "name": "What is the overall passing mark?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You must achieve an overall mark of at least 75%, which means correctly answering 15 out of the 20 total questions."
        }
      },
      {
        "@type": "Question",
        "name": "Can I retake the citizenship test if I fail?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Retaking the test is free and your application stays active. There is no mandatory multi-week waiting period, though you cannot retake it on the exact same day. You generally have up to three attempts to pass."
        }
      },
      {
        "@type": "Question",
        "name": "Is the test available in languages other than English?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. While official study materials like the Our Common Bond booklet are translated into various community languages, the actual test administered at the centre is conducted strictly in English only."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#172033]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />

      {/* Page Hero */}
      <section className="bg-[#001B44] text-white py-16 px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-4 relative z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C8102E] bg-white/10 px-3 py-1 rounded-full">
            Complete Applicant Handbook
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Australian Citizenship Test: Eligibility Criteria, Fees & Process
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Your exhaustive resource for eligibility requirements, documentation checklists, test-day protocols, application steps, and the strict 100% values passing rule.
          </p>
        </div>
      </section>

      {/* Main Content Container */}
      <main className="max-w-4xl mx-auto px-6 lg:px-8 py-16 space-y-16">
        
        {/* Section 1: Eligibility Criteria & Residence Requirements */}
        <section id="criteria" className="bg-white p-8 sm:p-10 rounded-3xl border border-[#E4E7EC] shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#EEF3FB] text-[#002868] flex items-center justify-center font-bold">
              1
            </div>
            <h2 className="text-2xl font-extrabold text-[#002868]">Eligibility Criteria & Residence Requirements</h2>
          </div>
          
          <p className="text-[#667085] leading-relaxed">
            Before applying for Australian citizenship by conferral, the Department of Home Affairs mandates that you meet strict lawful residence, character, and permanent residency prerequisites:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#F5F7FA] border border-[#E4E7EC] space-y-2">
              <h3 className="font-bold text-[#172033] text-base flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#18864B]" /> 4-Year Visa Rule
              </h3>
              <p className="text-sm text-[#667085]">
                You must have lived in Australia on a valid Australian visa for the past 4 years immediately prior to lodging your application.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F5F7FA] border border-[#E4E7EC] space-y-2">
              <h3 className="font-bold text-[#172033] text-base flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#18864B]" /> Permanent Residency Rule
              </h3>
              <p className="text-sm text-[#667085]">
                You must have been a permanent resident (PR) for at least the last 12 months immediately before applying.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#F5F7FA] border border-[#E4E7EC] space-y-2">
            <h3 className="font-bold text-[#172033] text-base flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#18864B]" /> Absence Limits & Overseas Travel
            </h3>
            <p className="text-sm text-[#667085] leading-relaxed">
              Total absence from Australia must not exceed <strong>12 months</strong> across the 4-year qualifying period. Furthermore, you must not have been out of Australia for more than <strong>90 days</strong> during the 12-month period right before applying.
            </p>
          </div>
        </section>

        {/* Section 2: Comprehensive Document Checklist */}
        <section id="documents" className="bg-white p-8 sm:p-10 rounded-3xl border border-[#E4E7EC] shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#EEF3FB] text-[#002868] flex items-center justify-center font-bold">
              2
            </div>
            <h2 className="text-2xl font-extrabold text-[#002868]">Required Document Checklist</h2>
          </div>

          <p className="text-[#667085] leading-relaxed">
            When submitting your online application via ImmiAccount, you will need to upload clear, scanned color copies of specific identity and background documents:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#F5F7FA] border border-[#E4E7EC] space-y-2">
              <h3 className="font-bold text-[#172033] text-sm">Identity Documents (Proof of ID)</h3>
              <ul className="text-sm text-[#667085] space-y-1 list-disc list-inside">
                <li>Current passport (photo page & visa labels)</li>
                <li>Australian driver&apos;s licence or proof of age card</li>
                <li>Birth certificate showing parentage details</li>
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-[#F5F7FA] border border-[#E4E7EC] space-y-2">
              <h3 className="font-bold text-[#172033] text-sm">Character & Residence Records</h3>
              <ul className="text-sm text-[#667085] space-y-1 list-disc list-inside">
                <li>Australian National Police Check (AFP certificate)</li>
                <li>International police checks if lived overseas</li>
                <li>Proof of residential address history (utility bills/lease agreements)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Step-by-Step Application Process */}
        <section id="process" className="bg-white p-8 sm:p-10 rounded-3xl border border-[#E4E7EC] shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#EEF3FB] text-[#002868] flex items-center justify-center font-bold">
              3
            </div>
            <h2 className="text-2xl font-extrabold text-[#002868]">Step-by-Step Application Process</h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F5F7FA] border border-[#E4E7EC]">
              <span className="w-7 h-7 rounded-full bg-[#002868] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
              <div>
                <h3 className="font-bold text-[#172033]">Create and Access Your ImmiAccount</h3>
                <p className="text-sm text-[#667085]">Log into the official Department of Home Affairs portal, complete the online application form for Australian Citizenship by Conferral, and attach your digital documents.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F5F7FA] border border-[#E4E7EC]">
              <span className="w-7 h-7 rounded-full bg-[#002868] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
              <div>
                <h3 className="font-bold text-[#172033]">Pay Application Fee & Submit</h3>
                <p className="text-sm text-[#667085]">Pay the required Department processing fees securely online. Once submitted, you will receive a transaction reference number (TRN).</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F5F7FA] border border-[#E4E7EC]">
              <span className="w-7 h-7 rounded-full bg-[#002868] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
              <div>
                <h3 className="font-bold text-[#172033]">Receive Test Invitation & Book Appointment</h3>
                <p className="text-sm text-[#667085]">After initial processing, the Department will email you an appointment notice to book your computerized test at an approved test centre.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Application Fees & Concessions */}
        <section id="fees" className="bg-white p-8 sm:p-10 rounded-3xl border border-[#E4E7EC] shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#EEF3FB] text-[#002868] flex items-center justify-center font-bold">
              4
            </div>
            <h2 className="text-2xl font-extrabold text-[#002868]">Application Fees & Fee Concessions</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#EEF3FB] border border-[#002868]/20 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C8102E]">Standard Conferral Fee</span>
              <h3 className="text-xl font-bold text-[#002868]">General Application</h3>
              <p className="text-3xl font-extrabold text-[#002868] pt-1">$490 AUD</p>
              <p className="text-xs text-[#667085]">Covers document processing, interview administration, and test evaluation.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F5F7FA] border border-[#E4E7EC] space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#667085]">Concession Rate</span>
              <h3 className="text-xl font-bold text-[#172033]">Eligible Pensioners / Concession Cards</h3>
              <p className="text-3xl font-extrabold text-[#172033] pt-1">Reduced Fee / Exempt</p>
              <p className="text-xs text-[#667085]">Holders of valid Australian government concession cards (e.g., Pensioner Concession Card) may qualify for reduced pricing.</p>
            </div>
          </div>
        </section>

      
      {/* Section 5: Test Format & Passing Rules */}
        <section id="passing" className="bg-white p-8 sm:p-10 rounded-3xl border border-[#E4E7EC] shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#EEF3FB] text-[#002868] flex items-center justify-center font-bold">
              5
            </div>
            <h2 className="text-2xl font-extrabold text-[#002868]">Test Format & Passing Rules</h2>
          </div>

          <p className="text-[#667085] leading-relaxed">
            The actual citizenship test is a computerized exam taken at a Department of Home Affairs test centre. Here are the core specifications:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-[#F5F7FA] border border-[#E4E7EC] text-center space-y-1">
              <span className="text-xs font-semibold text-[#667085] uppercase">Format</span>
              <p className="text-xl font-extrabold text-[#002868]">20 Questions</p>
              <p className="text-xs text-[#667085]">Multiple choice</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F5F7FA] border border-[#E4E7EC] text-center space-y-1">
              <span className="text-xs font-semibold text-[#667085] uppercase">Time Limit</span>
              <p className="text-xl font-extrabold text-[#002868]">45 Minutes</p>
              <p className="text-xs text-[#667085]">Computerized exam</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F5F7FA] border border-[#E4E7EC] text-center space-y-1">
              <span className="text-xs font-semibold text-[#667085] uppercase">Overall Pass Mark</span>
              <p className="text-xl font-extrabold text-[#18864B]">75% Minimum</p>
              <p className="text-xs text-[#667085]">15 / 20 correct</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F5F7FA] border border-[#E4E7EC] text-center space-y-1">
              <span className="text-xs font-semibold text-[#667085] uppercase">Language</span>
              <p className="text-xl font-extrabold text-[#002868]">English Only</p>
              <p className="text-xs text-[#667085]">Mandatory policy</p>
            </div>
          </div>

          {/* Critical 100% Values Callout Box */}
          <div className="p-6 rounded-2xl bg-[#FDECEE] border-2 border-[#C8102E] space-y-3">
            <div className="flex items-center gap-2 text-[#C8102E] font-bold text-base">
              <AlertTriangle className="w-5 h-5" />
              <span>The Strict 100% Australian Values Rule</span>
            </div>
            <p className="text-sm text-[#172033] leading-relaxed">
              In addition to achieving at least 75% overall, you must answer <strong>all 5 questions (100%)</strong> in the Australian values section correctly. Missing even a single values question results in an automatic fail, regardless of your total score.
            </p>
          </div>
        </section>

        {/* Section 6: What Happens If You Fail the Test? */}
        <section id="retake-policy" className="bg-white p-8 sm:p-10 rounded-3xl border border-[#E4E7EC] shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#EEF3FB] text-[#002868] flex items-center justify-center font-bold">
              6
            </div>
            <h2 className="text-2xl font-extrabold text-[#002868]">What Happens If You Fail the Test?</h2>
          </div>

          <p className="text-[#667085] leading-relaxed">
            Failing your first attempt is a setback, but it is not a dead end. The Department of Home Affairs outlines clear protocols for retesting that protect your application status:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#F5F7FA] border border-[#E4E7EC] space-y-2">
              <h3 className="font-bold text-[#172033] text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#18864B]" /> No Extra Fees
              </h3>
              <p className="text-sm text-[#667085]">
                Retaking the test is completely free. The cost is fully covered under your original citizenship application fee.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F5F7FA] border border-[#E4E7EC] space-y-2">
              <h3 className="font-bold text-[#172033] text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#18864B]" /> Application Stays Active
              </h3>
              <p className="text-sm text-[#667085]">
                Failing does not cancel your application or affect your permanent residency status. You can continue living in Australia normally.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#F5F7FA] border border-[#E4E7EC] space-y-2">
            <h3 className="font-bold text-[#172033] text-base flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#002868]" /> Rebooking & The 3-Attempt Guideline
            </h3>
            <p className="text-sm text-[#667085] leading-relaxed">
              While you cannot retake the test on the exact same day if you fail, there is no mandatory multi-week waiting period—you can book your next slot as soon as one opens up. However, note that the Department of Home Affairs generally expects you to pass within <strong>three test appointments</strong>; failing across multiple consecutive attempts can eventually lead to application refusal.
            </p>
          </div>
        </section>

        {/* Section 7: Test-Day Protocols & Exemptions */}
        <section id="protocols" className="bg-white p-8 sm:p-10 rounded-3xl border border-[#E4E7EC] shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#EEF3FB] text-[#002868] flex items-center justify-center font-bold">
              7
            </div>
            <h2 className="text-2xl font-extrabold text-[#002868]">Test Day Protocols & Exemptions</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#F5F7FA] border border-[#E4E7EC] space-y-2">
              <h3 className="font-bold text-[#172033] text-sm flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#002868]" /> What to Bring on Test Day
              </h3>
              <p className="text-sm text-[#667085] leading-relaxed">
                Bring your booking confirmation email and the exact original photo identification documents (such as your passport) used when booking your appointment.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F5F7FA] border border-[#E4E7EC] space-y-2">
              <h3 className="font-bold text-[#172033] text-sm flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-[#002868]" /> Test Exemptions
              </h3>
              <p className="text-sm text-[#667085] leading-relaxed">
                Certain applicants are exempt from sitting the citizenship test, including individuals aged 60 and over, or those with permanent hearing, sight, or speech impairments.
              </p>
            </div>
          </div>
        </section>

        {/* Section 8: Post-Test Process, Approval & Citizenship Ceremony */}
        <section id="ceremony" className="bg-white p-8 sm:p-10 rounded-3xl border border-[#E4E7EC] shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#EEF3FB] text-[#002868] flex items-center justify-center font-bold">
              8
            </div>
            <h2 className="text-2xl font-extrabold text-[#002868]">Post-Test Process, Approval & Ceremony</h2>
          </div>

          <p className="text-[#667085] leading-relaxed">
            Passing your citizenship test is a major milestone, but it does not mean you are instantly an Australian citizen. Here is what to expect in the final stages of your journey:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-[#F5F7FA] border border-[#E4E7EC] space-y-2">
              <h3 className="font-bold text-[#172033] text-sm flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#002868]" /> 1. Immediate Results
              </h3>
              <p className="text-sm text-[#667085]">
                Your score is displayed instantly on screen at the end of your computer exam so you will know your pass/fail status immediately.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F5F7FA] border border-[#E4E7EC] space-y-2">
              <h3 className="font-bold text-[#172033] text-sm flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#002868]" /> 2. Application Decision
              </h3>
              <p className="text-sm text-[#667085]">
                The Department continues assessing character, identity, and residency records before issuing a formal written approval notice.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F5F7FA] border border-[#E4E7EC] space-y-2">
              <h3 className="font-bold text-[#172033] text-sm flex items-center gap-2">
                <Award className="w-4 h-4 text-[#002868]" /> 3. The Ceremony & Pledge
              </h3>
              <p className="text-sm text-[#667085]">
                You receive a local council invitation to attend a citizenship ceremony, make the pledge, and collect your official certificate.
              </p>
            </div>
          </div>
        </section>

        {/* Section 9: Frequently Asked Questions */}
        <section id="faq" className="bg-white p-8 sm:p-10 rounded-3xl border border-[#E4E7EC] shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#EEF3FB] text-[#002868] flex items-center justify-center font-bold">
              ?
            </div>
            <h2 className="text-2xl font-extrabold text-[#002868]">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-[#F5F7FA] border border-[#E4E7EC] space-y-2">
              <h3 className="font-bold text-[#172033] text-base">How many questions are on the Australian citizenship test?</h3>
              <p className="text-sm text-[#667085] leading-relaxed">
                The test consists of 20 multiple-choice questions. You are given 45 minutes to complete the computer-based exam.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F5F7FA] border border-[#E4E7EC] space-y-2">
              <h3 className="font-bold text-[#172033] text-base">What happens if I fail the Australian values section?</h3>
              <p className="text-sm text-[#667085] leading-relaxed">
                You must answer all 5 questions (100%) in the Australian values section correctly. Missing even a single values question results in an automatic fail, regardless of your overall score.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F5F7FA] border border-[#E4E7EC] space-y-2">
              <h3 className="font-bold text-[#172033] text-base">What is the overall passing mark?</h3>
              <p className="text-sm text-[#667085] leading-relaxed">
                You must achieve an overall mark of at least 75%, which means correctly answering 15 out of the 20 total questions.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F5F7FA] border border-[#E4E7EC] space-y-2">
              <h3 className="font-bold text-[#172033] text-base">Can I retake the test if I fail?</h3>
              <p className="text-sm text-[#667085] leading-relaxed">
                Yes. Retaking the test is completely free and your application stays active. While you cannot retake it on the same day, there is no mandatory multi-week waiting period. You generally have up to three attempts to pass.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F5F7FA] border border-[#E4E7EC] space-y-2">
              <h3 className="font-bold text-[#172033] text-base">Is the test available in languages other than English?</h3>
              <p className="text-sm text-[#667085] leading-relaxed">
                No. While official study materials like the <a href="https://immi.homeaffairs.gov.au/citizenship/test-and-interview/our-common-bond" target="_blank" rel="noopener noreferrer" className="underline text-[#002868]">Our Common Bond booklet</a> are translated into various community languages, the actual test administered at the centre is conducted strictly in **English only**.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Banner to Start Practice */}
        <div className="bg-[#001B44] text-white p-8 sm:p-12 rounded-3xl shadow-xl text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold">Ready to Ace Your Citizenship Test?</h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base">
            Put your preparation to the test with our 45-minute timed simulator featuring the exact 100% values tracking rule.
          </p>
          <div className="pt-2">
            <a
              href="/exam"
              className="inline-flex items-center gap-2 bg-[#C8102E] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#C8102E]/90 transition-all shadow-lg text-base"
            >
              <span>Start Free Practice Exam Now</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

      </main>

      {/* Official Government Source Citation */}
      <div className="text-center text-xs text-[#667085] py-4">
        Content compiled from official guidelines and the <a href="https://immi.homeaffairs.gov.au/citizenship/test-and-interview/our-common-bond" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#002868]">Department of Home Affairs Our Common Bond resource</a>.
      </div>

      <Footer />
    </div>
  );
}