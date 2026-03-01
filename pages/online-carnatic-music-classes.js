import Layout from "../components/Layout";
import Hero from "../components/carnatic/Hero";
import HowItWorks from "@/components/carnatic/HowItWorks.mjs";
import Advantages from "@/components/carnatic/Advantages.mjs";
import RockstarsSection from "@/components/carnatic/RockstarsSection.mjs";
import PricingSection from "@/components/carnatic/PricingSection.mjs";
import TutorsSection from "@/components/carnatic/TutorSection.mjs";
import TestimonialsSection from "@/components/carnatic/TestimonialsSection.mjs";
import FAQSection from "@/components/carnatic/FAQSection.mjs";
import HiringSection from "@/components/carnatic/HiringSection.mjs";
import ContentSection from "@/components/carnatic/ContentSection.mjs";
import StudentPortalSection from "@/components/carnatic/StudentPortalSection.mjs";

export default function CarnaticPage() {
  return (
    <Layout>
      <Hero />
      <HowItWorks />
      <Advantages />
      <RockstarsSection />
      <PricingSection />
      <TutorsSection />
      <TestimonialsSection />
      <FAQSection />
      <HiringSection />
      <ContentSection />
      <StudentPortalSection />
    </Layout>
  );
}
