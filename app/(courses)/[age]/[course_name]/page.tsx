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
  return (
    <div>
      <p>Course name: {course_name}</p>
      <p>Age: {age}</p>
    </div>
  );
}
