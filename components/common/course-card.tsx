import { Course } from "@/types/course.schema";
import Image from "next/image";
import Link from "next/link";
import React, { FunctionComponent } from "react";
import CourseDefaultCard from "./course-default-card";

interface ICourseCard {
  course: Pick<Course, "name" | "description" | "duration" | "image"> &
    Partial<Pick<Course, "category">>;
  variant?: "featured" | "normal";
}
const CourseCard: FunctionComponent<ICourseCard> = ({
  course,
  variant = "normal",
}) => {
  switch (variant) {
    case "featured":
      return (
        <Link
          href={"#"}
          prefetch
          className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48  max-w-sm mx-auto  shadow-lg shadow-cyan-200"
        >
          <div className="absolute inset-0 -z-10 h-full w-full object-cover">
            {/* Add an image for the course here */}
            <Image
              src={course.image} // Replace with the course image URL
              alt={course.name}
              className="h-full w-full object-cover"
              width={500}
              height={500}
            />
          </div>
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
          <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

          <h3 className="mt-3 text-lg font-bold leading-6 text-cyan-100">
            {course.name}
          </h3>
          <p className="mt-2 text-slate-200 line-clamp-3">
            {course.description}
          </p>
          <p className="mt-2 text-cyan-100">
            Duration:{" "}
            <span className="font-semibold text-cyan-200">
              {course.duration}
            </span>
          </p>
        </Link>
      );
    default:
      return <CourseDefaultCard course={course} />;
  }
};

export default CourseCard;
