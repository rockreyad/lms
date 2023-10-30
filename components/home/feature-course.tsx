"use client";
import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CourseCard from "../course-card";

const courses = [
  {
    id: 1,
    name: "Course Name 1",
    description: "Description for Course 1",
    duration: "3 months",
    imageUrl: "https://source.unsplash.com/random/800x600",
  },
  {
    id: 2,
    name: "Course Name 2",
    description: "Description for Course 2",
    duration: "2 months",
    imageUrl: "https://source.unsplash.com/random/800x600",
  },
  {
    id: 3,
    name: "Course Name 3",
    description: "Description for Course 3",
    duration: "4 months",
    imageUrl: "https://source.unsplash.com/random/800x600",
  },
  {
    id: 4,
    name: "Course Name 1",
    description: "Description for Course 1",
    duration: "3 months",
    imageUrl: "https://source.unsplash.com/random/800x600",
  },
  {
    id: 5,
    name: "Course Name 2",
    description: "Description for Course 2",
    duration: "2 months",
    imageUrl: "https://source.unsplash.com/random/800x600",
  },
  {
    id: 6,
    name: "Course Name 3",
    description: "Description for Course 3",
    duration: "4 months",
    imageUrl: "https://source.unsplash.com/random/800x600",
  },
];

const FeatureCourse = () => {
  return (
    <div className="bg-cyan-100/30 py-24 sm:py-32">
      <div className="mx-auto max-w-full px-6 lg:px-8 space-y-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Featured Courses
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Explore our top-rated courses for children.
          </p>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          navigation
          freeMode={true}
          slidesPerView={5}
          autoplay={{ delay: 5000 }}
          mousewheel={{
            releaseOnEdges: true,
          }}
          loop={true}
        >
          {courses.map((course) => (
            <SwiperSlide key={course.id}>
              <CourseCard course={course} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeatureCourse;
