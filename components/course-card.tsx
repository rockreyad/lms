import React from "react";

const CourseCard = ({ course }) => {
  return (
    <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48  max-w-lg mx-auto">
      <div className="absolute inset-0 -z-10 h-full w-full object-cover">
        {/* Add an image for the course here */}
        <img
          src={course.imageUrl} // Replace with the course image URL
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
      <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

      <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
        {course.name}
      </h3>
      <p className="mt-2 text-gray-300">{course.description}</p>
      <p className="mt-2 text-gray-300">Duration: {course.duration}</p>
    </div>
  );
};

export default CourseCard;
