import { Category } from "@/types/category.schema";
import React, { FunctionComponent } from "react";

interface ISecitonCard {
  title: string;
  description: string;
  category?: Category[];
}
const SectionCard: FunctionComponent<ISecitonCard> = ({
  title,
  description,
  category,
}) => {
  console.log("category", category);
  return (
    <div className="bg-teal-100/50 rounded-xl flex flex-col justify-start gap-8 p-20">
      <p className="text-xl font-medium tracking-wider uppercase">{title}</p>
      <h2 className="text-4xl font-medium tracking-wide">{description}</h2>
    </div>
  );
};

export default SectionCard;
