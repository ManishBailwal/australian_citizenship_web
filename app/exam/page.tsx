"use client";

import Link from "next/link";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Clock3,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

import { practiceTestQuestions } from "@/data/practiceTestQuestions";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Answer = "A" | "B" | "C" | "D";

const TOTAL_TIME = 45 * 60;

const optionLetters: Answer[] = ["A", "B", "C", "D"];

const categoryLabels = {
  "Australia & its people": "Australia & Its People",
  "Democratic beliefs, rights & liberties":
    "Democratic Beliefs, Rights & Liberties",
  "Government & law": "Government & Law",
  "Australian values": "Australian Values",
};

export default function PracticeTestPage() {
  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, Answer>>({});
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [finished, setFinished] = useState(false);

  const currentQuestion = practiceTestQuestions[currentIndex];

  const answeredCount = Object.keys(answers).length;

  const progress = ((currentIndex + 1) / practiceTestQuestions.length) * 100;

  const formattedTime = useMemo(() => {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }, [timeLeft]);

  useEffect(() => {
    if (!started || finished) return;

    const timer = window.setInterval(() => {
      setTimeLeft((previous) => {
        if (previous <= 1) {
          window.clearInterval(timer);
          setFinished(true);
          return 0;
        }

        return previous - 1;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [started, finished]);

  function selectAnswer(answer: Answer) {
    setAnswers((previous) => ({
      ...previous,
      [currentQuestion.id]: answer,
    }));
  }

  function nextQuestion() {
    if (currentIndex < practiceTestQuestions.length - 1) {
      setCurrentIndex((previous) => previous + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setFinished(true);
    }
  }

  function previousQuestion() {
    if (currentIndex > 0) {
      setCurrentIndex((previous) => previous - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function restartTest() {
    setStarted(false);
    setCurrentIndex(0);
    setAnswers({});
    setTimeLeft(TOTAL_TIME);
    setFinished(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const results = useMemo(() => {
    let totalCorrect = 0;
    let valuesCorrect = 0;

    practiceTestQuestions.forEach((question) => {
      const selected = answers[question.id];

      if (selected === question.correctAnswer) {
        totalCorrect++;

        if (question.isAustralianValues) {
          valuesCorrect++;
        }
      }
    });

    const passed =
      totalCorrect >= 15 &&
      valuesCorrect === 5;

    return {
      totalCorrect,
      valuesCorrect,
      passed,
    };
  }, [answers]);

  /* -------------------------------------------------------
     INTRO / START SCREEN
  ------------------------------------------------------- */

  if (!started) {
    return (
      <div className="min-h-screen bg-[#F5F7FA] text-[#172033]">
        <Header />

        {/* Hero */}
        <section className="relative overflow-hidden bg-[#001B44] px-6 py-16 text-white lg:px-8">
          <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#C8102E]/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
              <ShieldCheck size={14} className="text-[#C8102E]" />
              Practice Test
            </span>

            <h1 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-5xl">
              Australian Citizenship
              <span className="block text-[#C8102E]">Practice Test</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Test your knowledge with 20 carefully selected practice
              questions covering Australian people, democratic beliefs,
              government and law, and Australian values.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <HeroStat value="20" label="Questions" />
              <HeroStat value="45 min" label="Time limit" />
              <HeroStat value="75%" label="Pass target" />
            </div>
          </div>
        </section>

        <main className="mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-14">
          <div className="mx-auto max-w-3xl p-4">
            <section className="rounded-3xl border border-[#E4E7EC] bg-white p-6 shadow-sm sm:p-10">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FDECEE] text-[#C8102E]">
                  <ShieldCheck size={21} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#C8102E]">
                    Before you begin
                  </p>
                  <h2 className="mt-1 text-xl font-extrabold text-[#002868]">
                    How the practice test works
                  </h2>
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
                <InfoCard
                  icon={<Clock3 size={19} />}
                  title="45-minute timer"
                  text="Complete all 20 questions within the practice time limit."
                />
                <InfoCard
                  icon={<CheckCircle2 size={19} />}
                  title="20 questions"
                  text="Questions cover the main Australian citizenship test topics."
                />
                <InfoCard
                  icon={<ShieldCheck size={19} />}
                  title="Passing target"
                  text="Score at least 15/20 and answer all 5 Australian Values questions correctly."
                />
                <InfoCard
                  icon={<Sparkles size={19} />}
                  title="Practice only"
                  text="These questions are designed for preparation and are not official test questions."
                />
              </div>

              <button
                onClick={() => setStarted(true)}
                className="mt-8 inline-flex h-14 w-full cursor-pointer items-center justify-center gap-3 rounded-full bg-[#C8102E] px-7 text-sm font-bold text-white shadow-lg transition-all hover:bg-[#C8102E]/90 sm:w-auto"
              >
                Start Practice Test
                <ArrowRight size={18} />
              </button>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  /* -------------------------------------------------------
     RESULT SCREEN
  ------------------------------------------------------- */

  if (finished) {
    return (
      <div className="min-h-screen bg-[#F5F7FA] text-[#172033]">
        <Header />

        <main className="mx-auto max-w-4xl px-5 py-12 md:px-8 md:py-16">
          <div className="text-center">
            <div
              className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-lg ${
                results.passed ? "bg-[#18864B]" : "bg-[#C8102E]"
              }`}
            >
              {results.passed ? <CheckCircle2 size={30} /> : <X size={30} />}
            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-widest text-[#C8102E]">
              Practice Test Complete
            </p>

            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-[#002868] md:text-5xl">
              {results.passed ? "Great work!" : "Keep practising."}
            </h1>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-[#667085]">
              {results.passed
                ? "You reached the practice passing target. Keep reviewing the topics to strengthen your preparation."
                : "You did not reach the practice passing target this time. Review the topics and try the test again."}
            </p>
          </div>

          <div className="mt-10 rounded-3xl border border-[#E4E7EC] bg-white p-6 shadow-sm md:p-8">
            <div className="grid gap-4 md:grid-cols-3">
              <ResultMetric
                value={`${results.totalCorrect}/20`}
                label="Overall Score"
                highlight={results.totalCorrect >= 15}
              />

              <ResultMetric
                value={`${results.valuesCorrect}/5`}
                label="Australian Values"
                highlight={results.valuesCorrect === 5}
              />

              <ResultMetric
                value={results.passed ? "PASS" : "TRY AGAIN"}
                label="Result"
                highlight={results.passed}
              />
            </div>

            <div className="mt-8 rounded-2xl border border-[#E4E7EC] bg-[#F5F7FA] p-5">
              <div className="flex items-start gap-3">
                <ShieldCheck
                  size={20}
                  className="mt-0.5 shrink-0 text-[#C8102E]"
                />
                <div>
                  <p className="text-sm font-extrabold text-[#002868]">
                    Practice passing target
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#667085]">
                    Score at least 15 out of 20 and answer all 5 Australian
                    Values questions correctly.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={restartTest}
                className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-[#002868] px-5 text-sm font-bold text-white transition hover:bg-[#001f50]"
              >
                <RotateCcw size={16} />
                Try Again
              </button>

              <Link
                href="/"
                className="inline-flex h-12 flex-1 items-center justify-center rounded-full border border-[#D7DCE4] bg-white px-5 text-sm font-bold text-[#002868] transition hover:bg-[#F5F7FA]"
              >
                Back to Home
              </Link>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-3xl bg-[#001B44] p-7 text-white shadow-xl sm:p-10">
            <div className="flex flex-col justify-between gap-7 md:flex-row md:items-center">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold">
                  <Sparkles size={13} />
                  Prepare on your phone
                </div>

                <h2 className="text-2xl font-extrabold">
                  Want to prepare more?
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300">
                  Study the topics, practise more questions and take mock
                  tests with our Australian Citizenship Test mobile app.
                </p>
              </div>

              <a
                href="https://play.google.com/store/apps/details?id=com.australiancitizenship.prep"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-[#C8102E] px-5 text-sm font-bold text-white transition hover:bg-[#C8102E]/90"
              >
                Get the App on Google Play
              </a>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  /* -------------------------------------------------------
     TEST SCREEN
  ------------------------------------------------------- */

  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#172033]">
      {/* Test Header */}
      <header className="sticky top-0 z-30 border-b border-[#0D2A52] bg-[#001B44] text-white">
        <div className="mx-auto max-w-5xl px-5 py-4 md:px-8">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="hidden h-10 w-10 items-center justify-center rounded-xl bg-[#C8102E] text-white transition-opacity hover:opacity-90 sm:flex"
              >
                <ShieldCheck size={18} />
              </Link>

              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-300">
                  Practice Test
                </p>
                <p className="text-sm font-extrabold sm:text-base">
                  Australian Citizenship Test
                </p>
              </div>
            </div>

            <div
              className={`flex items-center gap-2 rounded-xl border px-3 py-2 text-sm font-bold ${
                timeLeft <= 300
                  ? "border-[#C8102E]/30 bg-[#FDECEE] text-[#C8102E]"
                  : "border-white/10 bg-white/10 text-white"
              }`}
            >
              <Clock3 size={16} />
              {formattedTime}
            </div>
          </div>

          <div className="mt-4 flex items-center gap-3">
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-[#C8102E] transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            <span className="text-xs font-semibold text-slate-300">
              {currentIndex + 1}/{practiceTestQuestions.length}
            </span>
          </div>
        </div>
      </header>

      {/* Question */}
      <div className="mx-auto max-w-4xl p-4">
        <div className="grid gap-8 lg:grid-cols-[1fr_260px] items-start">
          <section className="rounded-3xl border border-[#E4E7EC] bg-white p-5 shadow-sm sm:p-7">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-[#EEF3FB] px-3 py-1 text-[11px] font-bold text-[#002868]">
                {categoryLabels[currentQuestion.category]}
              </span>

              {currentQuestion.isAustralianValues && (
                <span className="rounded-full bg-[#FDECEE] px-3 py-1 text-[11px] font-semibold text-[#C8102E]">
                  Australian Values
                </span>
              )}
            </div>

            <p className="mt-5 text-xs font-semibold text-[#667085]">
              Question {currentIndex + 1} of 20
            </p>

            <h1 className="mt-2 max-w-2xl text-2xl font-extrabold leading-snug tracking-tight text-[#002868] md:text-3xl">
              {currentQuestion.question}
            </h1>

            <div className="mt-6 space-y-2.5">
              {currentQuestion.options.map((option, index) => {
                const letter = optionLetters[index];
                const selected = answers[currentQuestion.id] === letter;

                return (
                  <button
                    key={letter}
                    onClick={() => selectAnswer(letter)}
                    className={`group flex w-full items-center gap-3.5 rounded-2xl border p-3.5 text-left transition md:p-4 ${
                      selected
                        ? "border-[#C8102E] bg-[#FDECEE] shadow-sm"
                        : "border-[#E4E7EC] bg-white hover:border-[#002868]/30 hover:bg-[#F5F7FA]"
                    }`}
                  >
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-xs font-bold transition ${
                        selected
                          ? "bg-[#C8102E] text-white"
                          : "bg-[#EEF3FB] text-[#002868]"
                      }`}
                    >
                      {selected ? <Check size={15} /> : letter}
                    </span>

                    <span
                      className={`text-xs leading-5 md:text-sm ${
                        selected
                          ? "font-semibold text-[#172033]"
                          : "text-[#667085]"
                      }`}
                    >
                      {option}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 flex items-center justify-between gap-3">
              <button
                onClick={previousQuestion}
                disabled={currentIndex === 0}
                className="inline-flex h-10 items-center gap-2 rounded-full border border-[#D7DCE4] bg-white px-4 text-xs font-bold text-[#002868] transition hover:bg-[#F5F7FA] disabled:cursor-not-allowed disabled:opacity-35"
              >
                <ArrowLeft size={14} />
                <span className="hidden sm:inline">Previous</span>
              </button>

              <p className="text-xs text-[#667085]">
                {answeredCount} of 20 answered
              </p>

              <button
                onClick={nextQuestion}
                disabled={!answers[currentQuestion.id]}
                className="inline-flex h-10 items-center gap-2 rounded-full bg-[#C8102E] px-4 text-xs font-bold text-white shadow-sm transition hover:bg-[#C8102E]/90 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {currentIndex === practiceTestQuestions.length - 1
                  ? "Finish Test"
                  : "Next"}
                <ArrowRight size={14} />
              </button>
            </div>
          </section>

          {/* Question navigator & Download App CTA */}
          <aside className="hidden lg:flex flex-col gap-6">
            <div className="rounded-3xl border border-[#E4E7EC] bg-white p-4 shadow-sm">
              <p className="text-xs font-extrabold text-[#002868]">Questions</p>

              <p className="mt-0.5 text-[11px] text-[#667085]">
                Jump to a question
              </p>

              <div className="mt-4 grid grid-cols-4 gap-1.5">
                {practiceTestQuestions.map((question, index) => {
                  const isCurrent = index === currentIndex;
                  const isAnswered = Boolean(answers[question.id]);

                  return (
                    <button
                      key={question.id}
                      onClick={() => setCurrentIndex(index)}
                      className={`relative h-8 rounded-lg text-[11px] font-bold transition ${
                        isCurrent
                          ? "bg-[#002868] text-white"
                          : isAnswered
                          ? "bg-[#FDECEE] text-[#C8102E]"
                          : "bg-[#F5F7FA] text-[#667085] hover:bg-[#EEF3FB]"
                      }`}
                    >
                      {index + 1}
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 border-t border-[#E4E7EC] pt-3">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-[#667085]">Answered</span>
                  <span className="font-bold text-[#002868]">
                    {answeredCount}/20
                  </span>
                </div>
              </div>
            </div>

            {/* Download App Sidebar CTA */}
            <div className="overflow-hidden rounded-3xl bg-[#001B44] p-5 text-white shadow-md">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-semibold">
                <Sparkles size={12} />
                Mobile App
              </div>
              <h3 className="mt-3 text-base font-extrabold leading-tight">
                Practice on the go
              </h3>
              <p className="mt-1.5 text-xs leading-5 text-slate-300">
                Get extra mock exams and practice offline with our Mobile app.
              </p>
              <a
                href="https://play.google.com/store/apps/details?id=com.australiancitizenship.prep"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex h-10 w-full items-center justify-center rounded-full bg-[#C8102E] px-4 text-xs font-bold text-white transition hover:bg-[#C8102E]/90"
              >
                Get the App
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------
   SMALL COMPONENTS
------------------------------------------------------- */

function HeroStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="min-w-[110px] rounded-2xl border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-sm">
      <p className="text-lg font-extrabold">{value}</p>
      <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-wider text-slate-300">
        {label}
      </p>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-[#E4E7EC] bg-[#F5F7FA] p-5 ">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-[#C8102E] shadow-sm">
        {icon}
      </div>
      <p className="mt-4 text-sm font-extrabold text-[#002868]">{title}</p>
      <p className="mt-1 text-sm leading-6 text-[#667085]">{text}</p>
    </div>
  );
}

function ResultMetric({
  value,
  label,
  highlight,
}: {
  value: string;
  label: string;
  highlight: boolean;
}) {
  return (
    <div className="rounded-2xl border border-[#E4E7EC] bg-[#F5F7FA] p-5 text-center">
      <p
        className={`text-3xl font-extrabold ${
          highlight ? "text-[#C8102E]" : "text-[#002868]"
        }`}
      >
        {value}
      </p>

      <p className="mt-1 text-xs font-semibold text-[#667085]">{label}</p>
    </div>
  );
}