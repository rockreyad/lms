"use client";
import { Course } from "@/types/course.schema";
import React, { FunctionComponent, memo } from "react";
import SearchCourse from "./search-course";
import { useSearchParams } from "next/navigation";
import CourseCard from "../common/course-card";
import { Age } from "@/types/age.schema";
import SelectChildAge from "./select-child";

interface ICourseSection {
  courses: Course[];
  courseData: Pick<Age, "id" | "age">[];
  age: number;
}
const CourseSection: FunctionComponent<ICourseSection> = memo(
  ({ courses, courseData, age }) => {
    const searchParams = useSearchParams();
    let search = searchParams.get("search");
    let category = searchParams.get("category");

    const filteredCourses =
      courses && courses.length
        ? courses.filter((course) => {
            const courseNameMatchesSearch =
              !search ||
              course.name.toLowerCase().includes(search.toLowerCase());

            const courseCategoryMatchesFilter =
              !category ||
              (course.category && course.category.name === category);

            return courseNameMatchesSearch && courseCategoryMatchesFilter;
          })
        : [];
    return (
      <div className="space-y-10">
        <div className="flex flex-col lg:flex-row items-center gap-4">
          {courseData && <SelectChildAge age={courseData} selectedAge={age} />}
          <div className="w-full">
            <SearchCourse />
          </div>
        </div>
        <h3 className="text-xl lg:text-3xl text-center font-semibold">
          {courses.length +
            `${courses.length <= 1 ? " course" : " courses"} found`}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredCourses
            .filter((course) => {
              if (!search) return true;
              return course.name.toLowerCase().includes(search.toLowerCase());
            })
            .map((course) => (
              <CourseCard key={course.id} course={course as any} />
            ))}
        </div>
      </div>
    );
  }
);

export default CourseSection;
CourseSection.displayName = "CourseSection";
