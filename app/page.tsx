import ConvertkitSignupForm from "@/components/home/contact-form";
import FeatureCourse from "@/components/home/feature-course";
import { HeroSection } from "@/components/home/hero-section";
import MarketingVideo from "@/components/home/marketing-video";
import Stats from "@/components/home/stats";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Stats />
      <FeatureCourse />
      <MarketingVideo />
      <ConvertkitSignupForm formId="5de2554a83" />
    </>
  );
}
