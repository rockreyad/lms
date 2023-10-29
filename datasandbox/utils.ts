import * as csv from "fast-csv";
import fs from "fs/promises";

export const productHeaders = {
  "Skills set": "Skills set",
  "Course categories": "Course categories",
  Order: "Order",
  "Course Name": "Course Name",
  Lessons: "Lessons",
  Projects: "Projects",
  Quizzes: "Quizzes",
  "Total Times": "Total Times",
  "Course Description": "Course Description",
};

export const readCsvData = async <T>(filePath: string): Promise<T[]> =>
  new Promise((resolve, reject) => {
    const dataArray: T[] = [];
    csv
      .parseFile(filePath, {
        headers: true,
      })
      .on("data", (data) => {
        dataArray.push(data);
      })
      .on("error", (err) => reject(err))
      .on("end", () => {
        resolve(dataArray);
      });
  });
export const writeJson = async (
  data: Object | null[],
  writeFilePath: string
) => {
  return await fs.writeFile(writeFilePath, JSON.stringify(data), "utf8");
};
export const readDirFilesName = async (dir: string) => {
  return await fs.readdir(dir);
};
