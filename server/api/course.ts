import prisma from "@/module/lib/prisma_client";

export async function courses() {
  try {
    const response = await prisma.ages.findMany({
      select: {
        age: true,
        id: true,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getCoursesByAge(age: number) {
  try {
    const response = await prisma.courses.findMany({
      where: {
        ages: {
          some: {
            age: {
              age: age,
            },
          },
        },
      },
      include: {
        category: true,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getFeaturedCourses() {
  try {
    const response = await prisma.courses.findMany({
      where: {
        featured: true,
      },
      select: {
        id: true,
        name: true,
        description: true,
        duration: true,
        image: true,
      },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
}
