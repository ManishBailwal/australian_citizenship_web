
import Link from "next/link";

const topics = [
  {
    title: "Australia and its people",
    description:
      "Learn about Australia's history, Indigenous peoples, national identity, traditions, and the contributions of people from different backgrounds.",
  },
  {
    title: "Democratic beliefs, rights and liberties",
    description:
      "Review democracy, freedom of expression, equality before the law, individual rights, and the responsibilities people share in a democratic society.",
  },
  {
    title: "Government and the law in Australia",
    description:
      "Practise questions about Australia's Constitution, the three levels of government, Parliament, elections, and the rule of law.",
  },
  {
    title: "Australian values",
    description:
      "Strengthen your understanding of freedom, respect, equality, and the principles that are central to the Australian citizenship test.",
  },
];

export default function ExamSEOContent() {
  return (
    <section className="bg-white px-5 py-14 mt-4 md:px-8 md:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-wider text-[#C8102E]">
            Test preparation guide
          </p>

          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#002868] md:text-4xl">
            Australian Citizenship Practice Test
          </h2>

          <p className="mt-5 text-base leading-8 text-[#475467]">
            Preparing for the Australian citizenship test involves
            understanding Australia's history, democratic system,
            government, laws and values. This free Australian
            citizenship practice test helps you review these topics
            through multiple-choice questions in an exam-style format.
            Use your results to identify areas that need more study
            before your official test.
          </p>

          <p className="mt-4 text-base leading-8 text-[#475467]">
            This practice test contains 20 questions and has a
            45-minute timer. To meet its practice passing target, you
            must answer at least 15 questions correctly and answer all
            five Australian Values questions correctly. The questions
            are independently prepared for practice and are not
            official test questions.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-extrabold text-[#002868]">
            Topics covered in the practice test
          </h2>

          <p className="mt-3 leading-7 text-[#475467]">
            The questions are organised around four areas covered
            in the Australian citizenship test preparation material.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {topics.map((topic, index) => (
              <article
                key={topic.title}
                className="rounded-2xl border border-[#E4E7EC] bg-[#F8FAFC] p-5"
              >
                <span className="text-sm font-bold text-[#C8102E]">
                  Topic {index + 1}
                </span>

                <h3 className="mt-2 text-lg font-bold text-[#002868]">
                  {topic.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-[#475467]">
                  {topic.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-extrabold text-[#002868]">
            How to prepare for the Australian citizenship test
          </h2>

          <div className="mt-4 space-y-4 text-base leading-8 text-[#475467]">
            <p>
              Start by studying the official{" "}
              <a
                href="https://immi.homeaffairs.gov.au/citizenship-subsite/files/our-common-bond-testable.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#C8102E] underline underline-offset-4"
              >
                Australian Citizenship: Our Common Bond testable section
              </a>
              . It covers the knowledge areas assessed in the test.
            </p>

            <p>
              After studying, take a practice test without looking
              up the answers. Review the questions you answered
              incorrectly, revisit the relevant topics, and try
              another practice session to check your understanding.
            </p>

            <p>
              Pay particular attention to Australian Values. In the
              official test, all five Australian Values questions
              must be answered correctly, in addition to achieving
              an overall score of at least 15 out of 20.
            </p>
          </div>

          <section className="mt-12">
  <h2 className="text-2xl font-bold text-[#002868]">
    Learn More About the Australian Citizenship Test
  </h2>

  <p className="mt-3 leading-7 text-gray-700">
    Before taking a practice exam, learn how the Australian citizenship
    test works, what topics it covers, and how to prepare effectively.
  </p>

  <div className="mt-5 grid gap-4 sm:grid-cols-3">
    <Link
      href="/about-test"
      className="rounded-xl border border-gray-200 p-5 transition hover:border-blue-500 hover:bg-blue-50"
    >
      <h3 className="font-semibold text-[#002868]">
        About the Citizenship Test
      </h3>
      <p className="mt-2 text-sm leading-6 text-gray-600">
        Understand the test format, requirements, questions, and what to
        expect on test day.
      </p>
      <span className="mt-3 inline-block text-sm font-semibold text-blue-700">
        Learn about the test →
      </span>
    </Link>

    <Link
      href="/citizenship-test-guide"
      className="rounded-xl border border-gray-200 p-5 transition hover:border-blue-500 hover:bg-blue-50"
    >
      <h3 className="font-semibold text-[#002868]">
        Citizenship Test Guide
      </h3>
      <p className="mt-2 text-sm leading-6 text-gray-600">
        Review key topics and prepare for your Australian citizenship test.
      </p>
      <span className="mt-3 inline-block text-sm font-semibold text-blue-700">
        Read the study guide →
      </span>
    </Link>

    <Link
      href="/citizenship-test-faq"
      className="rounded-xl border border-gray-200 p-5 transition hover:border-blue-500 hover:bg-blue-50"
    >
      <h3 className="font-semibold text-[#002868]">
        Citizenship Test FAQs
      </h3>
      <p className="mt-2 text-sm leading-6 text-gray-600">
        Find answers to common questions about preparation and the test.
      </p>
      <span className="mt-3 inline-block text-sm font-semibold text-blue-700">
        Read the FAQs →
      </span>
    </Link>
  </div>
</section>
        </div>

        <div className="mt-12 rounded-2xl border border-[#E4E7EC] bg-[#F8FAFC] p-5 md:p-6">
          <h2 className="text-xl font-extrabold text-[#002868]">
            Is this an official Australian citizenship test?
          </h2>

          <p className="mt-3 text-sm leading-7 text-[#475467]">
            No. This is an independent educational practice resource.
            It is not operated by or affiliated with the Australian
            Government or the Department of Home Affairs. Question
            wording and content may differ from those used in your
            official test appointment. For authoritative preparation
            information, consult the Department of Home Affairs.
          </p>

          <a
            href="https://immi.homeaffairs.gov.au/citizenship-subsite/Pages/Test-and-interview/citizenship-test.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex font-semibold text-[#C8102E] underline underline-offset-4"
          >
            Official citizenship test information
          </a>
        </div>
      </div>
    </section>
  );
}
