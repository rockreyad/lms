"use client";
import React, { FunctionComponent } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CourseCard from "../course-card";
import { Course } from "@/types/course.schema";

interface IFeatureCourse {
  courses: Pick<Course, "id" | "name" | "description" | "duration" | "image">[];
}

const FeatureCourse: FunctionComponent<IFeatureCourse> = ({ courses }) => {
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
          autoplay={{ delay: 5000 }}
          mousewheel={{
            releaseOnEdges: true,
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
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
