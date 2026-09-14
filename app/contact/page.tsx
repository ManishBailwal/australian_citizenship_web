"use client";

import React, { useState } from "react";
import {
  Mail,
  MessageSquare,
  Send,
  CheckCircle2,
  Clock,
  MapPin,
  ArrowRight,
  Loader2,
  AlertCircle,
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { sendEmail } from "@/app/actions/sendEmail";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const result = await sendEmail(formData);
      if (result.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(result.error || "Something went wrong.");
      }
    } catch (err) {
      setErrorMessage("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#172033]">
      <Header />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#001B44] px-6 py-20 text-white sm:py-24 lg:px-8">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#C8102E]/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#002868]/50 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
            <MessageSquare className="h-4 w-4 text-[#C8102E]" />
            Get in Touch
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Contact Our
            <span className="block text-white/90">Support Team</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Have questions about the Australian citizenship test, our practice exams,
            or the mobile app? We are here to help you with your preparation.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT SECTION */}
      <main className="mx-auto max-w-5xl px-6 py-14 sm:py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          
          {/* INFO SIDEBAR */}
          <div className="space-y-6 lg:col-span-1">
            <div className="rounded-3xl border border-[#E4E7EC] bg-white p-7 shadow-sm">
              <h2 className="text-lg font-extrabold text-[#002868]">
                Quick Information
              </h2>
              <p className="mt-2 text-sm leading-6 text-[#667085]">
                Check out our FAQs or official references if you need immediate answers regarding test formats or passing marks.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EEF3FB] text-[#002868]">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#172033]">Response Time</p>
                    <p className="text-xs text-[#667085]">Within 24 to 48 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EEF3FB] text-[#002868]">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#172033]">Direct Email</p>
                    <p className="text-xs text-[#667085]">manishbailwal812@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EEF3FB] text-[#002868]">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#172033]">Platform Type</p>
                    <p className="text-xs text-[#667085]">Independent Study & Prep Resource</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-[#001B44] p-7 text-white shadow-md">
              <h3 className="text-base font-extrabold">Looking for FAQs?</h3>
              <p className="mt-2 text-xs leading-5 text-slate-300">
                Browse through common questions about test rules, scores, and values requirements.
              </p>
              <Link
                href="/citizenship-test-faq"
                className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-white transition hover:text-[#C8102E]"
              >
                Browse FAQ Page
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="rounded-3xl border border-[#E4E7EC] bg-white p-7 shadow-sm sm:p-10 lg:col-span-2">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#EAF7F0] text-[#18864B]">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h2 className="mt-5 text-2xl font-extrabold text-[#002868]">
                  Message Sent Successfully!
                </h2>
                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[#667085]">
                  Thank you for reaching out. A member of our support team will get back to you within 24 to 48 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", subject: "General Inquiry", message: "" });
                  }}
                  className="mt-8 rounded-full bg-[#002868] px-7 py-3 text-sm font-bold text-white transition hover:bg-[#001B44]"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h2 className="text-2xl font-extrabold text-[#002868]">
                    Send Us a Message
                  </h2>
                  <p className="mt-1 text-sm text-[#667085]">
                    Fill out the form below and we will get back to you as soon as possible.
                  </p>
                </div>

                {errorMessage && (
                  <div className="flex items-center gap-2 rounded-2xl bg-red-50 p-4 text-sm text-[#C8102E] border border-red-200">
                    <AlertCircle className="h-5 w-5 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-[#172033]">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="mt-2 w-full rounded-2xl border border-[#E4E7EC] bg-[#F5F7FA] px-4 py-3.5 text-sm font-medium text-[#172033] outline-none transition focus:border-[#002868] focus:bg-white focus:ring-2 focus:ring-[#002868]/10"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#172033]">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      className="mt-2 w-full rounded-2xl border border-[#E4E7EC] bg-[#F5F7FA] px-4 py-3.5 text-sm font-medium text-[#172033] outline-none transition focus:border-[#002868] focus:bg-white focus:ring-2 focus:ring-[#002868]/10"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-[#172033]">
                    Subject
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="mt-2 w-full rounded-2xl border border-[#E4E7EC] bg-[#F5F7FA] px-4 py-3.5 text-sm font-medium text-[#172033] outline-none transition focus:border-[#002868] focus:bg-white focus:ring-2 focus:ring-[#002868]/10"
                  >
                    <option value="General Inquiry">General Study Inquiry</option>
                    <option value="Practice Exam Issue">Practice Exam / Mock Test Support</option>
                    <option value="Mobile App Support">Mobile App Assistance</option>
                    <option value="Feedback">Feedback & Suggestions</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#172033]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we help you prepare for your test?"
                    className="mt-2 w-full rounded-2xl border border-[#E4E7EC] bg-[#F5F7FA] px-4 py-3.5 text-sm font-medium text-[#172033] outline-none transition focus:border-[#002868] focus:bg-white focus:ring-2 focus:ring-[#002868]/10"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#C8102E] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#C8102E]/20 transition-all hover:-translate-y-0.5 hover:bg-[#A80D27] disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}