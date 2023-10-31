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
  const age = params.age;

  return {
    title: `Courses for ${age} years old`,
    description: `
      You can choose from a wide range of courses designed to nurture your child's talents and knowledge. Unlock their potential with our engaging and educational offerings
    `,
  };
}

const AgeCourses = async ({ params }: { params: Props["params"] }) => {
  const { age } = params;
  const data = await getCoursesByAge(Number(age));
  return (
    <div>
      <SectionCard
        title="Our Course"
        description="You can choose from a wide range of courses designed to nurture your child's talents and knowledge. Unlock their potential with our engaging and educational offerings"
      />
      <CourseSection courses={data as Course[]} />
    </div>
  );
};

export default AgeCourses;
