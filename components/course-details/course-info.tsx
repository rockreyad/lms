import { Course } from "@/types/course.schema";
import React, { FunctionComponent } from "react";

export interface ICourseInfo {
  age: number;
  course: Pick<Course, "name" | "description" | "image" | "duration"> & {
    _count: { modules: 5 };
  };
}
const CourseInfo: FunctionComponent<ICourseInfo> = ({
  age,
  course: { name, description, image, duration, _count },
}) => {
  return (
    <div>
      <div
        className={
          "relative bg-cover bg-center bg-no-repeat bg-fixed h-[30rem] lg:h-96 flex flex-col justify-center items-center"
        }
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-white text-left md:text-center px-10 w-full md:w-2/3 space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">{name}</h1>
          <p className="text-base md:text-lg">{description}</p>
        </div>
      </div>
      {/* Enroll button is bottom middle */}
      <div className="flex flex-col justify-center items-center relative inset-x-0 -translate-y-1/2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-8 grid-flow-col bg-white w-[90%] md:w-3/6 lg:w-2/3 py-8 px-10 rounded-full gap-4">
          <div className="text-center p-3 bg-white rounded-lg shadow-md">
            <p className="text-xl font-semibold text-cyan-500 lg:flex justify-center items-center lg:gap-1">
              <span className="hidden lg:block">Total </span>
              Modules
            </p>
            <p className="text-2xl font-bold">{_count.modules}</p>
          </div>
          <div className="text-center p-3 bg-white rounded-lg shadow-md">
            <p className="text-xl font-semibold text-cyan-500">Duration</p>
            <p className="text-2xl font-bold">{duration}</p>
          </div>
          <div className="text-center p-3 bg-white rounded-lg shadow-md">
            <p className="text-xl font-semibold text-cyan-500">Age</p>
            <p className="text-2xl font-bold">{age}</p>
          </div>
        </div>
        <button className="absolute inset-x-0 -translate-y-20  py-4 lg:px-20 rounded-full bg-slate-800 text-cyan-500 font-semibold tracking-wider text-2xl uppercase shadow-md hover:bg-slate-700 hover:text-white transition duration-300 ease-in-out w-1/2 md:w-1/5 mx-auto text-center">
          Enroll
        </button>
      </div>
    </div>
  );
};

export default CourseInfo;
