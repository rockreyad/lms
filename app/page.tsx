import ConvertkitSignupForm from "@/components/home/contact-form";
import FeatureCourse from "@/components/home/feature-course";
import { HeroSection } from "@/components/home/hero-section";
import MarketingVideo from "@/components/home/marketing-video";
import Stats from "@/components/home/stats";
import prisma from "@/module/lib/prisma_client";
import { Course } from "@/types/course.schema";

async function getFeaturedCourses() {
  try {
    const response = await prisma.courses.findMany({
      where: {
        featured: true,
      },
      select: {
        id: true,
        name: true,
        description: true,
        duration: true,
        image: true,
      },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
}

export default async function Home() {
  const featuredCourses = await getFeaturedCourses();
  return (
    <>
      <HeroSection />
      <Stats />
      {featuredCourses && <FeatureCourse courses={featuredCourses} />}
      <MarketingVideo />
      <ConvertkitSignupForm formId="5de2554a83" />
    </>
  );
}
