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
import Image from "next/image";

export default function Home() {
  return (
     <div>
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
