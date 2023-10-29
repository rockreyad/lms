const { PrismaClient } = require("@prisma/client");

const { ages } = require("./seeds/age.seeds.js");
const { categories } = require("./seeds/course_categories.seeds.js");
const { courses } = require("./seeds/course.seeds.js");
const { modules } = require("./seeds/course_modules.seeds.js");

const prisma = new PrismaClient();

// Sequence meeters, don't break the order
async function main() {
  // Seeds ages
  await prisma.ages.createMany({
    data: ages,
  });

  //   Seeds course categories
  await prisma.coursecategories.createMany({
    data: categories,
  });

  // Seed courses
  for (const course of courses) {
    const category = await prisma.coursecategories.findUnique({
      where: { name: course.category },
    });
    const newCourse = await prisma.courses.create({
      data: {
        name: course.name,
        description: course.description,
        duration: course.duration,
        category: {
          connect: {
            id: category.id,
          },
        },
      },
    });
    for (const age of course.ages) {
      const findAge = await prisma.ages.findUnique({
        where: { age },
      });
      await prisma.agesOnCourses.create({
        data: {
          age: {
            connect: {
              id: findAge.id,
            },
          },
          course: {
            connect: {
              id: newCourse.id,
            },
          },
        },
      });
    }
  }
  // Seed course modules
  for (const courseModule of modules) {
    const course = await prisma.courses.findUnique({
      where: { name: courseModule.courseName },
    });
    await prisma.coursemodules.create({
      data: {
        name: courseModule.name,
        description: courseModule.description,
        lessonsDuration: courseModule.lessonsDuration,
        projectsDuration: courseModule.projectsDuration,
        quizzesDuration: courseModule.quizzesDuration,
        totalDuration: courseModule.totalDuration,
        order: courseModule.order,
        course: {
          connect: {
            id: course.id,
          },
        },
      },
    });
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
