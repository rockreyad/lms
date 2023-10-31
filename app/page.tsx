import SelectChildAge from "@/components/course/select-child-age";
import ConvertkitSignupForm from "@/components/home/contact-form";
import FeatureCourse from "@/components/home/feature-course";
import { HeroSection } from "@/components/home/hero-section";
import MarketingVideo from "@/components/home/marketing-video";
import Stats from "@/components/home/stats";
import { courses, getFeaturedCourses } from "@/server/api/course";

export default async function Home() {
  const featuredCourses = await getFeaturedCourses();
  const data = await courses();
  return (
    <>
      <HeroSection />
      <Stats />
      {data && <SelectChildAge age={data} />}
      {featuredCourses && <FeatureCourse courses={featuredCourses} />}
      <MarketingVideo />
      <ConvertkitSignupForm formId="5de2554a83" />
    </>
  );
}
