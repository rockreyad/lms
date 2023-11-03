"use client";
import { Age } from "@/types/age.schema";
import { Category } from "@/types/category.schema";
import { useRouter, useSearchParams } from "next/navigation";
import React, { FunctionComponent, useCallback } from "react";

interface ISecitonCard {
  title: string;
  description: Age["courseDetails"];
  category?: Category[];
}
const SectionCard: FunctionComponent<ISecitonCard> = ({
  title,
  description,
  category,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams()!;
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }
      return params.toString();
    },
    [searchParams]
  );

  const currentCategory = searchParams.get("category");

  return (
    <div className="bg-teal-100/50 rounded-xl flex flex-col justify-start gap-4 md:gap-6 lg:gap-8 px-6 py-24 lg:px-10">
      <p className="text-sm md:text-base lg:text-xl font-medium tracking-wider uppercase">
        {title}
      </p>
      <h2 className="text-xl md:text-2xl lg:text-4xl font-normal md:font-medium tracking-wide break-words leading-3">
        {description}
      </h2>

      <div className="flex flex-wrap gap-2">
        {category?.map((cat, index) => (
          <div
            key={cat.id + index}
            className={`${
              currentCategory?.toLocaleLowerCase() ===
              cat.name.toLocaleLowerCase()
                ? "bg-teal-200/100"
                : "bg-teal-200/50"
            } rounded-full px-4 py-2 text-sm font-medium hover:bg-teal-200/100 transition-all cursor-pointer`}
            onClick={() => {
              if (currentCategory?.toLowerCase() === cat.name.toLowerCase()) {
                router.push(`?${createQueryString("category", "")}`);
              } else {
                router.push(`?${createQueryString("category", cat.name)}`);
              }
            }}
          >
            {cat.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionCard;
