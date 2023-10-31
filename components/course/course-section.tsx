"use client";
import { Course } from "@/types/course.schema";
import React, { FunctionComponent, memo } from "react";
import CourseCard from "../course-card";
import SearchCourse from "./search-course";
import { useSearchParams } from "next/navigation";

interface ICourseSection {
  courses: Course[];
}
const CourseSection: FunctionComponent<ICourseSection> = memo(({ courses }) => {
  const searchParams = useSearchParams();
  let search = searchParams.get("search");
  let category = searchParams.get("category");

  const filteredCourses = courses.filter((course) => {
    const courseNameMatchesSearch =
      !search || course.name.toLowerCase().includes(search.toLowerCase());

    const courseCategoryMatchesFilter =
      !category || (course.category && course.category.name === category);

    return courseNameMatchesSearch && courseCategoryMatchesFilter;
  });
  return (
    <div className="space-y-10">
      <SearchCourse />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredCourses
          .filter((course) => {
            if (!search) return true;
            return course.name.toLowerCase().includes(search.toLowerCase());
          })
          .map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
      </div>
    </div>
  );
});

export default CourseSection;
CourseSection.displayName = "CourseSection";
