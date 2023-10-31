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
          "relative bg-cover bg-center bg-no-repeat bg-fixed h-96 flex flex-col justify-center items-center"
        }
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-white text-center w-2/3 space-y-4">
          <h1 className="text-4xl font-bold">{name}</h1>
          <p className="text-lg">{description}</p>
        </div>
      </div>
      {/* Enroll button is bottom middle */}
      <div className="flex flex-col justify-center items-center relative inset-x-0 -translate-y-1/2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-8 grid-flow-col bg-white w-3/6 py-8 px-10 rounded-full gap-4">
          <div className="text-center p-3 bg-white rounded-lg shadow-md">
            <p className="text-xl font-semibold text-cyan-500">Total Modules</p>
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
        <button className="absolute inset-x-0 -translate-y-20  py-4 px-20 rounded-full bg-slate-800 text-cyan-500 font-semibold tracking-wider text-2xl uppercase shadow-md hover:bg-slate-700 hover:text-white transition duration-300 ease-in-out w-1/5 mx-auto text-center">
          Enroll
        </button>
      </div>
    </div>
  );
};

export default CourseInfo;
