import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms & Conditions | Australian Citizenship Test",
  description:
    "Read the Terms and Conditions for using the Australian Citizenship Test practice website and mobile app.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#172033]">
      <Header />

      <section className="bg-[#001B44] px-6 py-14 text-white lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-widest">
            Legal
          </span>
          <h1 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-5xl">
            Terms &amp; Conditions
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            The terms that apply when you use our Australian Citizenship Test
            practice website and mobile application.
          </p>
          <p className="mt-5 text-sm text-slate-400">
            Last updated: September 2026
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-4xl px-5 py-10 md:px-8 md:py-14">
        <article className="rounded-3xl border border-[#E4E7EC] bg-white p-6 shadow-sm sm:p-10">
          <LegalSection title="1. Acceptance of These Terms">
            <p>
              By accessing or using the Australian Citizenship Test practice
              website or mobile application (the "Service"), you agree to be
              bound by these Terms &amp; Conditions.
            </p>
            <p>
              If you do not agree with these terms, please do not use the
              Service.
            </p>
          </LegalSection>

          <LegalSection title="2. Educational and Practice Purpose">
            <p>
              The Service provides educational and practice material intended
              to help users prepare for the Australian citizenship test.
            </p>
            <p>
              Practice questions, explanations, scores, and other material are
              provided for preparation purposes and should not be treated as
              official Australian Government test questions or official advice.
            </p>
          </LegalSection>

          <LegalSection title="3. No Government Affiliation">
            <p>
              Unless expressly stated otherwise, the Service is independently
              operated and is not affiliated with, endorsed by, sponsored by,
              or operated by the Australian Government, the Department of Home
              Affairs, or any Australian Government agency.
            </p>
          </LegalSection>

          <LegalSection title="4. Use of the Service">
            <p>You agree to use the Service only for lawful purposes.</p>
            <p>You must not:</p>
            <ul>
              <li>attempt to interfere with or disrupt the Service;</li>
              <li>use the Service to distribute malicious or harmful code;</li>
              <li>copy, scrape, reproduce, or commercially exploit content without permission;</li>
              <li>misrepresent the Service or your relationship with us; or</li>
              <li>use the Service in a way that violates applicable law.</li>
            </ul>
          </LegalSection>

          <LegalSection title="5. Intellectual Property">
            <p>
              Unless otherwise indicated, the website design, original text,
              graphics, branding, software, and other original materials made
              available through the Service are owned by or licensed to us and
              are protected by applicable intellectual property laws.
            </p>
            <p>
              You may use the Service for personal, non-commercial study and
              preparation. No ownership rights are transferred to you.
            </p>
          </LegalSection>

          <LegalSection title="6. Third-Party Links and Services">
            <p>
              The Service may contain links to third-party websites or services,
              including app stores and external resources. These links are
              provided for convenience, and we do not control or guarantee the
              availability, accuracy, or policies of third-party services.
            </p>
          </LegalSection>

          <LegalSection title="7. Availability and Changes">
            <p>
              We may modify, suspend, or discontinue parts of the Service at any
              time. We do not guarantee that the Service will always be
              available, uninterrupted, or error-free.
            </p>
          </LegalSection>

          <LegalSection title="8. Accuracy of Information">
            <p>
              We aim to provide useful and accurate educational material, but
              information may change over time. You should verify important
              requirements and current official information through the
              Australian Government's official sources.
            </p>
          </LegalSection>

          <LegalSection title="9. Limitation of Liability">
            <p>
              To the maximum extent permitted by applicable law, we are not
              responsible for losses or damages arising from reliance on
              practice material, interruptions to the Service, technical
              problems, or third-party services.
            </p>
            <p>
              Nothing in these terms excludes or limits rights or remedies that
              cannot legally be excluded or limited under applicable law.
            </p>
          </LegalSection>

          <LegalSection title="10. Termination">
            <p>
              We may restrict or terminate access to the Service where
              reasonably necessary, including where a user violates these
              terms, applicable law, or the security of the Service.
            </p>
          </LegalSection>

          <LegalSection title="11. Changes to These Terms">
            <p>
              We may update these Terms &amp; Conditions from time to time.
              Changes will be posted on this page with an updated date.
              Continued use of the Service after changes take effect may
              constitute acceptance of the updated terms to the extent
              permitted by law.
            </p>
          </LegalSection>

          <LegalSection title="12. Contact">
            <p>
              Questions about these terms can be sent to:
            </p>
            <p className="font-semibold text-[#002868]">
              manishbailwal02@gmail.com
            </p>
            
          </LegalSection>
        </article>
      </main>

      <Footer />
    </div>
  );
}

function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-b border-[#E4E7EC] py-7 first:pt-0 last:border-b-0 last:pb-0">
      <h2 className="text-xl font-extrabold text-[#002868]">{title}</h2>
      <div className="mt-4 space-y-4 text-sm leading-7 text-[#667085]">
        {children}
      </div>
    </section>
  );
}
