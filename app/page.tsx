import Script from "next/script";
import Chapters from "@/components/Chapters";
import CriticalRule from "@/components/CriticalRule";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ResourceHub from "@/components/ResourceHub";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";

  const websiteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.citizenshiptestau.com/#website",
      url: "https://www.citizenshiptestau.com/",
      name: "Australian Citizenship Test",
      description:
  "Prepare for the Australian citizenship test with free practice questions, realistic mock tests, Australian values questions, study guides and helpful resources based on the official Our Common Bond material.",
      inLanguage: "en-AU",
    },
    {
      "@type": "Organization",
      "@id": "https://www.citizenshiptestau.com/#organization",
      name: "Australian Citizenship Test",
      url: "https://www.citizenshiptestau.com/",
    },
  ],
};


export default function Home() {




  return (
     <div>
      <Script
  id="website-organization-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(websiteSchema),
  }}
/>
           <Header/>
          <Hero/>
          <Chapters/>
          <ResourceHub/>
          <CriticalRule/>
          <WhyChooseUs/>
          <Testimonials/>
          <FAQ/>
          <CTA/>
          <Footer/>
     </div>
  );
}
