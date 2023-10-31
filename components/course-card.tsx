import { Course } from "@/types/course.schema";
import Image from "next/image";
import Link from "next/link";
import React, { FunctionComponent } from "react";

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
      let age = course.description.match(/\d{1,2}-\d{1,2}/g);
      return (
        <div className="p-2 border border-gray-300 rounded-xl space-y-4">
          <div className="relative">
            <Image
              src={course.image}
              alt={course.name}
              width={500}
              height={500}
              className="h-full w-full object-cover rounded-lg"
            />
            <div className="absolute top-4 left-4 bg-cyan-400 p-1 rounded-md">
              <p className="text-lg font-semibold text-white">
                {course.category?.name}
              </p>
            </div>
          </div>
          <div className="flex flex-col border-b border-b-gray-300 pb-4 space-y-2">
            <h1 className="text-2xl font-bold">{course.name}</h1>
            <p className="text-gray-700 line-clamp-2">{course.description}</p>
          </div>
          <div className="grid grid-cols-2">
            {
              <div className={`${age ? "block" : "invisible"} space-y-1`}>
                <h3 className="text-gray-300">Age</h3>
                <h3 className="text-gray-800 font-semibold">{age}</h3>
              </div>
            }
            <div className="justify-self-end space-y-1">
              <h3 className="text-gray-300">Duration</h3>
              <h3 className="text-gray-800 font-semibold text-end">
                {course.duration}
              </h3>
            </div>
          </div>
          <div className="flex justify-end">
            <Link
              href={`/courses/${course.name}`}
              className="p-2 border border-gray-300 rounded-xl w-full text-center bg-slate-800 text-cyan-500 font-semibold tracking-wider text-xl uppercase py-4 px-10 shadow-md hover:bg-slate-700 hover:text-white transition duration-300 ease-in-out"
            >
              View Course
            </Link>
          </div>
        </div>
      );
  }
};

export default CourseCard;
