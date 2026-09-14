// app/citizenship/[partId]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { australianCitizenshipData } from "@/data/CitizenshipPoints";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";

interface PageProps {
  params: Promise<{
    partId: string;
  }>;
}

export function generateStaticParams() {
  return Object.keys(australianCitizenshipData).map((slug) => ({
    partId: slug,
  }));
}

export default async function CitizenshipPartPage({ params }: PageProps) {
  const resolvedParams = await params;
  const section = australianCitizenshipData[resolvedParams.partId];

  if (!section) {
    notFound();
  }

  const allSlugs = Object.keys(australianCitizenshipData);
  const currentIndex = allSlugs.indexOf(resolvedParams.partId);
  const prevSlug = currentIndex > 0 ? allSlugs[currentIndex - 1] : null;
  const nextSlug = currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null;

  const prevSection = prevSlug ? australianCitizenshipData[prevSlug] : null;
  const nextSection = nextSlug ? australianCitizenshipData[nextSlug] : null;

  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#172033] font-sans">
      <Header />

      {/* =========================================================
          HERO SECTION
      ========================================================= */}
     <section className="relative overflow-hidden bg-[#001B44] px-6 py-20 text-white sm:py-24 lg:px-8">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#C8102E]/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#002868]/50 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/90 backdrop-blur-sm">
            <BookOpen className="h-4 w-4 text-[#C8102E]" />
            Important Study Points • Part {currentIndex + 1} of {allSlugs.length}
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-white">
            {section.title}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Master the core concepts, principles, and key facts required for your Australian citizenship test. Want to study detailed chapters? <a href="https://play.google.com/store/apps/details?id=com.australiancitizenship.prep" target="_blank" rel="noopener noreferrer" className="font-bold text-[#C8102E] underline underline-offset-4 hover:text-[#C8102E]/80">Download our mobile app</a> for in-depth lessons, progress tracking, and offline practice.
          </p>
        </div>
      </section>
      {/* =========================================================
          MAIN CONTENT CONTAINER
      ========================================================= */}
      <main className="mx-auto max-w-4xl px-6 py-14 sm:py-16 lg:px-8 space-y-12">
        
        {/* Navigation Breadcrumb / Top Bar */}
        <div className="flex items-center justify-between text-sm text-[#667085] bg-white p-4 rounded-2xl border border-[#E4E7EC] shadow-sm">
         
          <span className="font-semibold text-[#002868]">
            {section.points.length} Essential Points
          </span>
        </div>

        {/* Content List */}
        <div className="space-y-6">
          {section.points.map((item, index) => (
            <div 
              key={index}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E4E7EC] shadow-sm hover:shadow-md hover:border-[#002868]/20 transition-all"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EEF3FB] text-[#002868] text-xs font-extrabold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="space-y-2">
                  <h2 className="text-xl font-extrabold tracking-tight text-[#002868]">
                    {item.title}
                  </h2>
                  <p className="text-[#667085] leading-relaxed text-base sm:text-[15px]">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* =========================================================
            BOTTOM PAGINATION LINKS (FIXED ROUTING PATH)
        ========================================================= */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[#E4E7EC]">
          {prevSection ? (
            <Link 
              href={`/citizenshipPoints/${prevSection.slug}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white border border-[#E4E7EC] text-sm font-bold text-[#002868] hover:border-[#002868]/30 shadow-sm transition-all"
            >
              ← Previous: {prevSection.title.split(":")[0]}
            </Link>
          ) : <div />}

          {nextSection ? (
            <Link 
              href={`/citizenshipPoints/${nextSection.slug}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#002868] text-white text-sm font-bold hover:bg-[#001B44] shadow-md transition-all ml-auto"
            >
              Next: {nextSection.title.split(":")[0]}
              <ArrowRight className="h-4 w-4" />
            </Link>
          ) : <div />}
        </div>

        {/* =========================================================
            CTA BANNER
        ========================================================= */}
        <section className="mt-16 overflow-hidden rounded-3xl border border-[#E4E7EC] bg-white p-8 text-center shadow-sm sm:p-12">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FDECEE] text-[#C8102E]">
            <CheckCircle2 className="h-6 w-6" />
          </div>

          <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-[#002868] sm:text-3xl">
            Ready to test your knowledge on this chapter?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-[#667085] sm:text-base">
            Put your learning to the test with our free practice questions modeled directly after the official Department of Home Affairs examination.
          </p>

          <Link
            href="/exam"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#C8102E] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#C8102E]/20 transition-all hover:-translate-y-0.5 hover:bg-[#A80D27]"
          >
            Start Free Practice Exam
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>

      </main>

      <Footer />
    </div>
  );
}