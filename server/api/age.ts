import prisma from "@/module/lib/prisma_client";

export async function getAge(age: number) {
  return prisma.ages.findUnique({
    where: {
      age: age,
    },
    select: {
      id: true,
      age: true,
      courseDetails: true,
    },
  });
}
