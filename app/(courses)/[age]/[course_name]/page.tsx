import CourseInfo from "@/components/course-details/course-info";
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

export default function SingleCourse({ params }: { params: Props["params"] }) {
  const { age, course_name: _course_name } = params;
  const course_name = _course_name.replace(/%20/g, " ");
  console.log("course_name", course_name);
  console.log("age", age);
  const desc =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, delectus perferendis laudantium ratione sed tempore temporibus voluptatibus ipsam sapiente voluptate vero, modi, consectetur dolor. Incidunt, quos corporis expedita doloremque error iure. Nemo non eos error illo deleniti commodi natus dignissimos?";
  return (
    <div>
      <CourseInfo
        name={course_name}
        description={desc}
        image="/images/course-bg.jpeg"
      />
    </div>
  );
}
