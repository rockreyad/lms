import SectionCard from "@/components/course/section-card";
import SelectChildAge from "@/components/course/select-child-age";
import prisma from "@/module/lib/prisma_client";
import { Course } from "@/types/course.schema";
import React from "react";

async function courses() {
  try {
    const response = await prisma.courses.findMany();
    return response;
  } catch (error) {
    return error as Error;
  }
}

const CoursePage = async () => {
  const data = await courses();
  return (
    <div className="flex flex-col  justify-center items-center pt-20 mx-5 gap-10">
      <SectionCard
        title="Our Course"
        description="You can choose from a wide range of courses designed to nurture your child's talents and knowledge. Unlock their potential with our engaging and educational offerings"
      />
      <SelectChildAge age={data as Course[]} />
    </div>
  );
};

export default CoursePage;
