import CourseInfo, {
  ICourseInfo,
} from "@/components/course-details/course-info";
import CourseModules from "@/components/course-details/course-modules";
import { getCourse, getCoursesByAge } from "@/server/api/course";
import { getModules } from "@/server/api/modules";
import { Course } from "@/types/course.schema";
import { Metadata } from "next";
import React from "react";

type Props = {
  params: { age: string; course_name: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const { age, course_name: _course_name } = params;
  const course_name = _course_name.replace(/%20/g, " ");
  return {
    title: `${course_name} | ${age}`,
    description: `Explore our ${course_name} course designed for ${age} year olds. Empower your child with essential digital skills and unlock their potential for a brighter future.`,
    robots: "index,follow",
  };
}

export default async function SingleCourse({
  params,
}: {
  params: Props["params"];
}) {
  const { age, course_name: _course_name } = params;
  const course_name = _course_name.replace(/%20/g, " ");
  let _age = Number(age.split("-")[1]);
  const modules = await getModules({
    age: _age,
    course_name,
  });
  const course_data = await getCourse({
    age: _age,
    course_name,
  });
  return (
    <div>
      <CourseInfo age={_age} course={course_data as ICourseInfo["course"]} />
      <CourseModules modules={modules} />
    </div>
  );
}
