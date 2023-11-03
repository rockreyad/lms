import SelectChildAge from "@/components/course/select-child-age";
import ConvertkitSignupForm from "@/components/home/contact-form";
import FeatureCourse from "@/components/home/feature-course";
import { HeroSection } from "@/components/home/hero-section";
import MarketingVideo from "@/components/home/marketing-video";
import Stats from "@/components/home/stats";
import { courses, getFeaturedCourses } from "@/server/api/course";
import { getSkills } from "@/server/api/skills";

export default async function Home() {
  const featuredCourses = await getFeaturedCourses();
  const skills = await getSkills();
  const data = await courses();
  return (
    <>
      <HeroSection />
      {data && <SelectChildAge age={data} skills={skills} />}
      <Stats />
      {featuredCourses && <FeatureCourse courses={featuredCourses} />}
      {/* <MarketingVideo /> */}
      <ConvertkitSignupForm />
    </>
  );
}
