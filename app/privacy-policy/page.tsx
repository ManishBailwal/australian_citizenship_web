import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | Australian Citizenship Test",
  description:
    "Read the Privacy Policy for the Australian Citizenship Test practice website and mobile app.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#172033]">
      <Header />

      <section className="bg-[#001B44] px-6 py-14 text-white lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-widest">
            Legal
          </span>
          <h1 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            How we collect, use, and protect information when you use our
            website and Australian Citizenship Test practice app.
          </p>
          <p className="mt-5 text-sm text-slate-400">
            Last updated: September 2026
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-4xl px-5 py-10 md:px-8 md:py-14">
        <article className="rounded-3xl border border-[#E4E7EC] bg-white p-6 shadow-sm sm:p-10">
          <LegalSection title="1. Introduction">
            <p>
              This Privacy Policy explains how information may be handled when
              you use the Australian Citizenship Test practice website and
              related mobile application (collectively, the "Service").
            </p>
            <p>
              By using the Service, you acknowledge the practices described in
              this policy. If you do not agree with this policy, please stop
              using the Service.
            </p>
          </LegalSection>

          <LegalSection title="2. Information We May Collect">
            <p>
              Depending on how you use the Service, we may collect information
              such as basic device or browser information, usage information,
              diagnostic information, and information you voluntarily provide
              when contacting us.
            </p>
            <p>
              The practice test itself is designed to let you answer questions
              without requiring you to provide sensitive personal information.
            </p>
          </LegalSection>

          <LegalSection title="3. How We Use Information">
            <p>Information may be used to:</p>
            <ul>
              <li>provide and operate the Service;</li>
              <li>improve website and app functionality;</li>
              <li>understand usage and diagnose technical problems;</li>
              <li>maintain security and prevent misuse; and</li>
              <li>respond to support or other enquiries.</li>
            </ul>
          </LegalSection>

          <LegalSection title="4. Cookies and Similar Technologies">
            <p>
              The website may use cookies, local storage, analytics tools, or
              similar technologies to remember preferences, understand usage,
              and improve the Service. You can control cookies through your
              browser settings where supported.
            </p>
          </LegalSection>

          <LegalSection title="5. Third-Party Services">
            <p>
              We may use third-party providers for services such as hosting,
              analytics, crash reporting, authentication, advertising, or app
              distribution. Those providers may process information according
              to their own privacy policies and applicable terms.
            </p>
            <p>
              The Service may also link to third-party websites, including
              Google Play. We are not responsible for the privacy practices of
              external websites or services.
            </p>
          </LegalSection>

          <LegalSection title="6. Data Security">
            <p>
              We take reasonable steps designed to protect information against
              unauthorized access, loss, misuse, or disclosure. However, no
              internet transmission or electronic storage system can be
              guaranteed to be completely secure.
            </p>
          </LegalSection>

          <LegalSection title="7. Data Retention">
            <p>
              Information is retained only for as long as reasonably necessary
              for the purposes described in this policy, to provide the Service,
              resolve disputes, meet legal obligations, or protect our rights.
            </p>
          </LegalSection>

          <LegalSection title="8. Children's Privacy">
            <p>
              The Service is not intended to knowingly collect personal
              information from children. If you believe a child has provided
              personal information to us, please contact us so that we can
              review and, where appropriate, delete it.
            </p>
          </LegalSection>

          <LegalSection title="9. Your Rights">
            <p>
              Depending on your location and applicable law, you may have rights
              to access, correct, delete, or otherwise control certain personal
              information. Requests can be made using the contact details
              provided below.
            </p>
          </LegalSection>

          <LegalSection title="10. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. The revised
              version will be posted on this page with an updated date. Your
              continued use of the Service after an update may constitute
              acceptance of the revised policy to the extent permitted by law.
            </p>
          </LegalSection>

          <LegalSection title="11. Contact Us">
            <p>
              If you have questions about this Privacy Policy or want to make a
              privacy-related request, contact us at:
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
