import CourseSection from "@/components/course/course-section";
import SectionCard from "@/components/course/section-card";
import SelectChildAge from "@/components/course/select-child-age";
import { getAge } from "@/server/api/age";
import { courses, getCoursesByAge } from "@/server/api/course";
import { Category } from "@/types/category.schema";
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
  const age_data = await getAge(Number(age));
  const data = await getCoursesByAge(Number(age));
  // const course_data = await courses();
  return (
    <div className="mx-4 space-y-10">
      <SectionCard
        title="Our Course"
        description={age_data?.courseDetails as string}
        category={
          (data as Course[])
            .map((course) => course.category)
            .filter((category, index, array) => {
              return (
                array.findIndex((cat) => cat?.id === category?.id) === index
              );
            }) as Category[]
        }
      />
      {/* {course_data && <SelectChildAge age={course_data} />} */}
      <CourseSection courses={data as Course[]} />
    </div>
  );
};

export default AgeCourses;
