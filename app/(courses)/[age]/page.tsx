import CourseSection from "@/components/course/course-section";
import SectionCard from "@/components/course/section-card";
import { getCoursesByAge } from "@/server/api/course";
import { Course } from "@/types/course.schema";
import { Metadata } from "next";
import React from "react";

type Props = {
  params: { age: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const ageParams = params.age;
  const age = ageParams.split("-")[1];
  return {
    title: `Courses for ${age} years old`,
    description: `
      You can choose from a wide range of courses designed to nurture your child's talents and knowledge. Unlock their potential with our engaging and educational offerings
    `,
  };
}

const AgeCourses = async ({ params }: { params: Props["params"] }) => {
  const ageParams = params.age;
  const age = ageParams.split("-")[1];
  const data = await getCoursesByAge(Number(age));
  return (
    <div className="mx-4 space-y-10">
      <SectionCard
        title="Our Course"
        description="You can choose from a wide range of courses designed to nurture your child's talents and knowledge. Unlock their potential with our engaging and educational offerings"
      />
      <CourseSection courses={data as Course[]} />
    </div>
  );
};

export default AgeCourses;
