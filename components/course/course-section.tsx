"use client";
import { Course } from "@/types/course.schema";
import React, { FunctionComponent } from "react";
import CourseCard from "../common/course-card";
import SearchCourse from "./search-course";
import { useSearchParams } from "next/navigation";

interface ICourseSection {
  courses: Course[];
}
const CourseSection: FunctionComponent<ICourseSection> = ({ courses }) => {
  const searchParams = useSearchParams();
  let search = searchParams.get("search");
  return (
    <div className="space-y-10">
      <SearchCourse />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {courses?.length
          ? courses
              .filter((course) => {
                if (!search) return true;
                return course.name.toLowerCase().includes(search.toLowerCase());
              })
              .map((course) => <CourseCard key={course.id} course={course} />)
          : null}
      </div>
    </div>
  );
};

export default CourseSection;
