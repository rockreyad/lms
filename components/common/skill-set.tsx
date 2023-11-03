import { Category } from "@/types/category.schema";
import React, {
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useState,
} from "react";

interface ISkillSet {
  skills: Category[];
  selectedSkills: Category[] | null;
  setSelectedSkills: Dispatch<SetStateAction<Category[] | null>>;
}
const SkillSet: FunctionComponent<ISkillSet> = ({
  skills,
  selectedSkills,
  setSelectedSkills,
}) => {
  const handleCategoriesSelect = (category: Category) => {
    setSelectedSkills((prev) => {
      if (prev?.find((cat) => cat.id === category.id)) {
        return prev?.filter((cat) => cat.id !== category.id);
      } else {
        return [...(prev || []), category];
      }
    });
  };

  return (
    <div className="flex flex-col gap-2 mx-auto">
      <h3 className="text-xl font-semibold text-left text-slate-700">
        Skills <span className="text-red-400">*</span>{" "}
      </h3>
      <div className="flex flex-1 flex-wrap gap-2">
        {skills.map((skill, skillIdx) => (
          <div
            key={skillIdx}
            onClick={() => handleCategoriesSelect(skill)}
            className={`bg-slate-500/20 hover:bg-slate-400/50 text-white text-center px-2 py-1 rounded-md hover:cursor-pointer ${
              selectedSkills?.find((cat) => cat.id === skill.id)
                ? "bg-slate-800/70"
                : ""
            }`}
          >
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSet;
