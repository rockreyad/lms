import { Module } from "@/types/modules.schema";
import React, { FC } from "react";
import MoudleCard from "../common/module-card";

interface ICourseModules {
  modules: Module[];
}
const CourseModules: FC<ICourseModules> = ({ modules }) => {
  return (
    <ul
      role="list"
      className="grid gap-4 divide-y divide-slate-200 px-6 py-24 lg:px-10"
    >
      {modules.map((module, _idx) => (
        <MoudleCard key={module.id + _idx} module={module} />
      ))}
    </ul>
  );
};

export default CourseModules;
