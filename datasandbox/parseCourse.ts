import { ICourse, ICsvFiles } from "./types";
import { writeJson, readCsvData, readDirFilesName } from "./utils";

(async () => {
  const files = await readDirFilesName("./data");
  const coursesJson: ICourse[] = [];
  for (const file of files) {
    const age = file.split(" ")[3].split(".")[0];
    const courses = await readCsvData<ICsvFiles>(`./data/${file}`);
    //
    courses.forEach((course) => {
      const isCourseName = course["Course categories "] !== "";
      if (isCourseName) {
        const name = course["Course Name"].trim();
        const description = course["Course Description "].trim();
        const duration = course["Total Times "].trim();
        const category = course["Course categories "].trim();
        const courseJson: ICourse = {
          name,
          description,
          duration,
          ages: [Number(age)],
          category,
        };

        const isCourseExist = coursesJson.find(
          (course) => course.name === name
        );
        if (isCourseExist) {
          const index = coursesJson.findIndex((course) => course.name === name);
          coursesJson[index].ages.push(Number(age));
        } else {
          coursesJson.push(courseJson);
        }
      }
    });
    console.log(`Done ${file}`);
  }
  await writeJson(coursesJson, `./results/courses.json`);
  console.log("Done");
})();
