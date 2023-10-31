"use client";
import Image from "next/image";
import React from "react";
import { Course } from "@/types/course.schema";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CourseDefaultCard({
  course,
}: {
  course: Pick<Course, "name" | "description" | "duration" | "image"> | Course;
}) {
  const currentPath = usePathname();
  let cardAge = course.description.match(/\d{1,2}-\d{1,2}/g);
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
          <p className="text-lg font-semibold text-white">{course.duration}</p>
        </div>
      </div>
      <div className="flex flex-col border-b border-b-gray-300 pb-4 space-y-2">
        <h1 className="text-2xl font-bold">{course.name}</h1>
        <p className="text-gray-700 line-clamp-2">{course.description}</p>
      </div>
      <div className="grid grid-cols-2">
        {
          <div className={`${cardAge ? "block" : "invisible"} space-y-1`}>
            <h3 className="text-gray-300">Age</h3>
            <h3 className="text-gray-800 font-semibold">{cardAge}</h3>
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
          href={`${currentPath}/${course.name}`}
          className="p-2 border border-gray-300 rounded-xl w-full text-center bg-slate-800 text-cyan-500 font-semibold tracking-wider text-xl uppercase py-4 px-10 shadow-md hover:bg-slate-700 hover:text-white transition duration-300 ease-in-out"
        >
          View Course
        </Link>
      </div>
    </div>
  );
}
