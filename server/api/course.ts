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
        ages: {
          select: {
            age: {
              select: {
                age: true,
              },
            },
          },
        },
      },
    });

    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function getCourse({
  age,
  course_name,
}: {
  age: number;
  course_name: string;
}) {
  return prisma.courses.findFirst({
    where: {
      name: course_name,
      ages: {
        some: {
          age: {
            age: age,
          },
        },
      },
    },
    select: {
      name: true,
      description: true,
      image: true,
      duration: true,
      _count: {
        select: {
          modules: {
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
          },
        },
      },
    },
  });
}
