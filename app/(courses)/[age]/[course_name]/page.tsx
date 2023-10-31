import React from "react";

type Props = {
  params: { age: string; course_name: string };
};

export default function SingleCourse({ params }: { params: Props["params"] }) {
  const { age } = params;
  const course_name = params.course_name.replace(/%20/g, " ");
  console.log("course_name", course_name);
  console.log("age", age);
  return (
    <div>
      <p>Course name: {course_name}</p>
      <p>Age: {age}</p>
    </div>
  );
}
