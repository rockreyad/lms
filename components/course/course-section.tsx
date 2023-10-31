"use client";
import { Course } from "@/types/course.schema";
import React, { FunctionComponent } from "react";
import CourseCard from "../course-card";

interface ICourseSection {
  courses: Course[];
}
const CourseSection: FunctionComponent<ICourseSection> = ({ courses }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseSection;
