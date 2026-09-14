import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Disclaimer | Australian Citizenship Test",
  description:
    "Read the disclaimer for the Australian Citizenship Test practice website and mobile app.",
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#172033]">
      <Header />

      <section className="bg-[#001B44] px-6 py-14 text-white lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-widest">
            Legal
          </span>
          <h1 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-5xl">
            Disclaimer
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Important information about the purpose and limitations of our
            Australian Citizenship Test practice materials.
          </p>
          <p className="mt-5 text-sm text-slate-400">
            Last updated: September 2026
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-4xl px-5 py-10 md:px-8 md:py-14">
        <article className="rounded-3xl border border-[#E4E7EC] bg-white p-6 shadow-sm sm:p-10">
          <LegalSection title="1. Educational Practice Tool">
            <p>
              The Australian Citizenship Test website and mobile application
              are educational tools designed to help users practise and prepare
              for the Australian citizenship test.
            </p>
          </LegalSection>

          <LegalSection title="2. Not Official Government Material">
            <p>
              This Service is independently operated and is not an official
              Australian Government website or application unless explicitly
              stated otherwise.
            </p>
            <p>
              We are not affiliated with, endorsed by, sponsored by, or
              representing the Australian Government, the Department of Home
              Affairs, or any Australian Government agency.
            </p>
          </LegalSection>

          <LegalSection title="3. Practice Questions">
            <p>
              Practice questions and explanations available through the Service
              are created or selected for educational practice. They are not
              presented as the actual questions that will appear on an
              individual's official citizenship test.
            </p>
            <p>
              Completing a practice test or achieving a particular score does
              not guarantee a particular result in an official citizenship
              test.
            </p>
          </LegalSection>

          <LegalSection title="4. Information Can Change">
            <p>
              Citizenship requirements, test procedures, government policies,
              and other official information may change. Although we aim to
              keep educational content useful and accurate, we cannot guarantee
              that every item will always reflect the latest official
              requirements.
            </p>
            <p>
              For current and authoritative requirements, users should consult
              official Australian Government sources.
            </p>
          </LegalSection>

          <LegalSection title="5. No Legal or Immigration Advice">
            <p>
              Content provided through the Service is general educational
              information only. It is not legal, immigration, or professional
              advice and should not be relied upon as a substitute for advice
              from an appropriately qualified professional.
            </p>
          </LegalSection>

          <LegalSection title="6. Third-Party Content">
            <p>
              The Service may reference or link to external websites and
              services. We do not necessarily control or endorse third-party
              content and are not responsible for changes to external
              information or services.
            </p>
          </LegalSection>

          <LegalSection title="7. No Guarantee of Results">
            <p>
              Use of the Service does not guarantee that a user will pass an
              Australian citizenship test or achieve any particular outcome.
              Individual results depend on many factors, including preparation,
              understanding, and the requirements applicable at the time of the
              official test.
            </p>
          </LegalSection>

          <LegalSection title="8. Contact">
            <p>
              If you believe any information on the Service should be reviewed,
              please contact us at:
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
