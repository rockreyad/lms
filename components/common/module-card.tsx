import { Module } from "@/types/modules.schema";
import React, { FC } from "react";

interface IModuleCard {
  module: Module;
}
const MoudleCard: FC<IModuleCard> = ({
  module: {
    name,
    description,
    lessonsDuration,
    projectsDuration,
    quizzesDuration,
    totalDuration,
  },
}) => {
  return (
    <li className="flex flex-col md:flex-row first:pt-0 last:pb-0 py-4 gap-2 md:gap-0">
      <div className="w-full md:w-1/3">
        <h3 className="text-lg font-semibold text-cyan-500">{name}</h3>
      </div>
      <div className="w-full md:w-2/3">
        <p className="text-gray-800 mb-2">{description}</p>
      </div>
      <div className="w-full md:w-1/3 text-end flex md:block divide-x md:divide-x-0 divide-gray-300">
        <p className="text-gray-600 text-sm mb-2 px-1">
          Lessons: <span className="font-medium">{lessonsDuration}</span>
        </p>
        <p className="text-gray-600 text-sm mb-2 px-1">
          Projects: <span className="font-medium">{projectsDuration}</span>
        </p>
        <p className="text-gray-600 text-sm mb-2 px-1">
          Quizzes: <span className="font-medium">{quizzesDuration}</span>
        </p>
        <p className="text-gray-600 text-sm mb-2 px-1">
          Total: <span className="font-medium">{totalDuration}</span>
        </p>
      </div>
    </li>
  );
};

export default MoudleCard;
