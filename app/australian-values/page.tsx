import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  ExternalLink,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const values = [
  {
    number: "01",
    title: "Freedom and Dignity of the Individual",
    description:
      "Australian society values the freedom and dignity of each individual. People are expected to respect the rights, choices and lawful freedoms of others.",
    points: [
      "Every person should be treated with dignity and respect.",
      "People have important freedoms protected by Australian law.",
      "Individual freedoms are exercised within the law and alongside respect for other people.",
    ],
  },
  {
    number: "02",
    title: "Freedom of Religion, Speech and Association",
    description:
      "Australia values freedom of religion, freedom of speech and freedom of association. These freedoms allow people to hold beliefs, express lawful opinions and participate in legal organisations.",
    points: [
      "People are free to follow a religion or choose not to follow one.",
      "People can express their ideas and opinions within the law.",
      "People can join or leave lawful organisations and associations.",
      "The freedoms of other people must also be respected.",
    ],
  },
  {
    number: "03",
    title: "Commitment to the Rule of Law",
    description:
      "The rule of law means that Australian laws apply to everyone. No person or group is above the law, and everyone is expected to obey Australian laws.",
    points: [
      "Everyone is equal in relation to the law.",
      "Australian laws apply regardless of a person's background or position.",
      "People are expected to obey the law even when no one is watching.",
      "Courts and legal systems help maintain a peaceful and orderly society.",
    ],
  },
  {
    number: "04",
    title: "Parliamentary Democracy",
    description:
      "Australia is a parliamentary democracy. Australian citizens participate in how the country is governed by voting for representatives in parliament.",
    points: [
      "Laws are determined by parliaments elected by the people.",
      "Citizens have a role in Australia's democratic system.",
      "People can participate in elections and choose representatives.",
      "Political and social change should occur through democratic and peaceful processes.",
    ],
  },
  {
    number: "05",
    title: "Equality of Opportunity and a Fair Go",
    description:
      "Australian society values equality of opportunity and a 'fair go'. People should have the opportunity to pursue their goals regardless of characteristics such as gender, race, age, disability, religion or background.",
    points: [
      "Men and women have equal rights under Australian law.",
      "People should have equality of opportunity.",
      "Discrimination based on protected characteristics is addressed by Australian law.",
      "A 'fair go' includes mutual respect, tolerance and compassion for people in need.",
    ],
  },
  {
    number: "06",
    title: "Mutual Respect and Tolerance",
    description:
      "Respecting other people means recognising their freedom, dignity, opinions and choices. Australians are expected to handle disagreements peacefully.",
    points: [
      "People may have different opinions and beliefs.",
      "Disagreement should be handled peacefully.",
      "Violence is not an acceptable way to resolve disagreements.",
      "People should respect the lawful freedoms and dignity of others.",
    ],
  },
  {
    number: "07",
    title: "English and Community Participation",
    description:
      "The English language is recognised as an important unifying element of Australian society. Community participation and helping others are also important aspects of Australian life.",
    points: [
      "English is the national language of Australia.",
      "Learning English can help people participate in Australian society.",
      "People are encouraged to contribute positively to their communities.",
      "Compassion and helping people in need are part of the values described in the official material.",
    ],
  },
];

const quickFacts = [
  {
    value: "5",
    label: "Australian values questions",
  },
  {
    value: "5/5",
    label: "Values questions required correct",
  },
  {
    value: "20",
    label: "Total test questions",
  },
  {
    value: "75%",
    label: "Overall mark required",
  },
];

export default function AustralianValuesPage() {
  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#172033]">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#001B44] px-6 py-20 text-white sm:py-24 lg:px-8">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#C8102E]/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#002868]/50 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
            <BookOpen className="h-4 w-4 text-[#C8102E]" />
            Australian Citizenship Test
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
           Australian Values for the Citizenship Test
           
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
            Learn the Australian values covered in the citizenship test,
            including freedom, respect, equality, the rule of law,
            parliamentary democracy and a fair go.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/exam"
              className="inline-flex items-center gap-2 rounded-full bg-[#C8102E] px-7 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-[#A80D27]"
            >
              Start Free Practice Exam
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/study-guide"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/15"
            >
              View Study Guide
            </Link>
          </div>
        </div>
      </section>

      {/* QUICK FACTS */}
      <main className="mx-auto max-w-5xl px-6 py-14 sm:py-16 lg:px-8">
        <section className="rounded-3xl border border-[#E4E7EC] bg-white p-6 shadow-sm sm:p-8">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#C8102E]">
              Know the essentials
            </span>

            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#002868] sm:text-3xl">
              Australian Values Test Facts
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#667085]">
              Australian values form one of the four testable areas in the
              official citizenship test resource.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {quickFacts.map((fact) => (
              <div
                key={fact.label}
                className="rounded-2xl bg-[#F5F7FA] p-5 text-center"
              >
                <p className="text-2xl font-extrabold text-[#002868]">
                  {fact.value}
                </p>

                <p className="mt-1 text-xs leading-5 text-[#667085]">
                  {fact.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* INTRO */}
        <section className="mt-12 rounded-3xl border border-[#E4E7EC] bg-white p-7 shadow-sm sm:p-10">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EEF3FB] text-[#002868]">
              <ShieldCheck className="h-5 w-5" />
            </div>

            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-[#002868] sm:text-3xl">
                What are Australian values?
              </h2>

              <p className="mt-4 text-base leading-7 text-[#667085]">
                Australian values are principles that help describe Australia's
                democratic society and the way people are expected to live
                together. The official citizenship test assesses an
                understanding and commitment to Australian values based on
                freedom, respect and equality.
              </p>

              <p className="mt-4 text-base leading-7 text-[#667085]">
                The official material also discusses the rule of law,
                parliamentary democracy, equality of opportunity, mutual
                respect, tolerance, compassion and the importance of English
                as a unifying element of Australian society.
              </p>
            </div>
          </div>
        </section>

        {/* TEST REQUIREMENT */}
        <section className="mt-8 overflow-hidden rounded-3xl bg-[#001B44] p-7 text-white shadow-xl sm:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#C8102E]">
                Important test rule
              </span>

              <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">
                You must answer all 5 Australian values questions correctly
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                The citizenship test has 20 multiple-choice questions. Five
                questions assess Australian values. To pass, you must answer
                all five values questions correctly and achieve an overall
                mark of at least 15 out of 20.
              </p>
            </div>

            <div className="shrink-0 rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
              <p className="text-4xl font-extrabold">5/5</p>
              <p className="mt-1 text-sm text-slate-300">
                Values questions
              </p>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="mt-14">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#C8102E]">
              Study the key concepts
            </span>

            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#002868] sm:text-4xl">
              Australian Values You Should Understand
            </h2>

            <p className="mt-4 text-base leading-7 text-[#667085]">
              Use these explanations as a study aid, then review the official
              Australian Citizenship: Our Common Bond resource before taking
              the test.
            </p>
          </div>

          <div className="mt-8 space-y-5">
            {values.map((value) => (
              <article
                key={value.number}
                className="rounded-3xl border border-[#E4E7EC] bg-white p-6 shadow-sm transition hover:border-[#002868]/20 hover:shadow-md sm:p-8"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EEF3FB] text-xs font-extrabold text-[#002868]">
                    {value.number}
                  </span>

                  <div className="min-w-0">
                    <h3 className="text-xl font-extrabold tracking-tight text-[#002868] sm:text-2xl">
                      {value.title}
                    </h3>

                    <p className="mt-3 text-base leading-7 text-[#667085]">
                      {value.description}
                    </p>

                    <ul className="mt-5 space-y-3">
                      {value.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-sm leading-6 text-[#475467] sm:text-[15px]"
                        >
                          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#18864B]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* HOW TO PREPARE */}
        <section className="mt-14 rounded-3xl border border-[#E4E7EC] bg-white p-7 shadow-sm sm:p-10">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EEF3FB] text-[#002868]">
              <BookOpen className="h-5 w-5" />
            </div>

          <div>
  <h2 className="text-2xl font-extrabold tracking-tight text-[#002868] sm:text-3xl">
    How to prepare for Australian values questions
  </h2>

  <div className="mt-5 space-y-4 text-base leading-7 text-[#667085]">
    <p>
      Start with the official{" "}
      <strong>Australian Citizenship: Our Common Bond</strong>{" "}
      resource. Home Affairs states that the citizenship test
      questions are based on this resource.
    </p>

    <p>
      Before practising, review the{" "}
      <Link
        href="/about-test"
        className="font-semibold text-[#002868] underline underline-offset-4 hover:text-[#C8102E]"
      >
        Australian citizenship test format and passing score
      </Link>
      {" "}and read the{" "}
      <Link
        href="/citizenship-test-guide"
        className="font-semibold text-[#002868] underline underline-offset-4 hover:text-[#C8102E]"
      >
        Australian citizenship test guide
      </Link>
      {" "}to understand the test requirements and preparation process.
    </p>

    <p>
      Pay particular attention to the meaning of freedom, respect,
      equality, the rule of law and parliamentary democracy. Do not rely
      only on memorising individual practice questions; make sure you
      understand the underlying concepts.
    </p>

    <p>
      After studying the official material, use practice questions and
      timed mock tests to check your understanding and identify topics
      that need further review.
    </p>
  </div>

  <a
    href="https://immi.homeaffairs.gov.au/citizenship/test-and-interview/our-common-bond"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#002868] underline underline-offset-4 hover:text-[#C8102E]"
  >
    Read the official Our Common Bond resource
    <ExternalLink className="h-4 w-4" />
  </a>
</div>
          </div>
        </section>

        {/* APP CTA */}
        <section className="mt-10 overflow-hidden rounded-3xl bg-[#001B44] p-8 text-white shadow-xl sm:p-10">
          <div className="flex flex-col items-center gap-7 text-center sm:flex-row sm:text-left">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/10">
              <Smartphone className="h-8 w-8 text-white" />
            </div>

            <div className="flex-1">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#C8102E]">
                Study on the go
              </span>

              <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
                Continue your Australian citizenship test preparation
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
                Use our mobile app for additional lessons, progress tracking
                and practice while you prepare for the citizenship test.
              </p>
            </div>

            <a
              href="https://play.google.com/store/apps/details?id=com.australiancitizenship.prep"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#002868] transition hover:bg-slate-100"
            >
              Download App
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </section>

        {/* PRACTICE CTA */}
        <section className="mt-8 overflow-hidden rounded-3xl border border-[#E4E7EC] bg-white p-8 text-center shadow-sm sm:p-12">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FDECEE] text-[#C8102E]">
            <Clock className="h-6 w-6" />
          </div>

          <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-[#002868] sm:text-3xl">
            Ready to practise?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#667085] sm:text-base">
            Test your knowledge with our free Australian citizenship practice
            exam and review your understanding of the key test topics.
          </p>

          <Link
            href="/exam"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#C8102E] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#C8102E]/20 transition-all hover:-translate-y-0.5 hover:bg-[#A80D27]"
          >
            Start Free Practice Exam
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>

        {/* OFFICIAL SOURCE */}
        <section className="mt-10 flex items-start gap-3 rounded-2xl border border-[#E4E7EC] bg-white p-5">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#18864B]" />

          <p className="text-xs leading-5 text-[#667085]">
            This page is an independent study aid and is not affiliated with
            or endorsed by the Australian Government or the Department of Home
            Affairs. For the latest official information and test requirements,
            always check the{" "}
            <a
              href="https://immi.homeaffairs.gov.au/citizenship/test-and-interview/our-common-bond"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#002868] underline underline-offset-2"
            >
              official Our Common Bond resource
            </a>
            .
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}