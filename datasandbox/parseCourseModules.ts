import { ICourseModule, ICsvFiles } from "./types";
import { writeJson, readCsvData, readDirFilesName } from "./utils";

(async () => {
  const files = await readDirFilesName("./data");
  const modulesJson: ICourseModule[] = [];
  let recentCourseName = "";
  for (const file of files) {
    const courses = await readCsvData<ICsvFiles>(`./data/${file}`);
    //
    for (const course of courses) {
      const isCourseName = course["Course categories "] !== "";
      if (isCourseName) recentCourseName = course["Course Name"].trim();
      // console.log(`Processing ${file} ${recentCourseName}`);
      const isCourseModule = course["Order "] !== "";
      if (isCourseModule) {
        const name = course["Course Name"].trim();
        const order = parseInt(course["Order "]);
        const lessonsDuration = course["Lessons "].trim();
        const projectsDuration = course["Projects"].trim();
        const quizzesDuration = course["Quizzes "].trim();
        const totalDuration = course["Total Times "].trim();
        const description = course["Course Description "].trim();
        const courseName = recentCourseName;
        const courseJson: ICourseModule = {
          name,
          order,
          lessonsDuration: lessonsDuration === "-" ? "0" : lessonsDuration,
          projectsDuration: projectsDuration === "-" ? "0" : projectsDuration,
          quizzesDuration: quizzesDuration === "-" ? "0" : quizzesDuration,
          totalDuration: totalDuration === "-" ? "0" : totalDuration,
          description,
          courseName,
        };

        const isModuleExist = modulesJson.find(
          (module) => module.name === name && module.courseName === courseName
        );
        if (!isModuleExist) {
          modulesJson.push(courseJson);
        }
      }
    }
    console.log(`Done ${file}`);
  }
  await writeJson(modulesJson, `./results/courseModules.json`);
  console.log("Done");
})();
