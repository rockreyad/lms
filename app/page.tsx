import ConvertkitSignupForm from "@/components/home/contact-form";
import { HeroSection } from "@/components/home/hero-section";
import Stats from "@/components/home/stats";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <Stats />
      <ConvertkitSignupForm />
    </>
  );
}
