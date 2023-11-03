import prisma from "@/module/lib/prisma_client";

export async function getSkills() {
  return prisma.coursecategories.findMany({
    orderBy: {
      id: "asc",
    },
    select: {
      id: true,
      name: true,
    },
  });
}
