import prisma from "@/module/lib/prisma_client";

export async function getModules({
  age,
  course_name,
}: {
  age: number;
  course_name: string;
}) {
  return prisma.coursemodules.findMany({
    where: {
      course: {
        name: course_name,
        ages: {
          some: {
            age: {
              age: age,
            },
          },
        },
      },
    },
    orderBy: {
      order: "asc",
    },
  });
}
