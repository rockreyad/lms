import * as path from "path";
import { ICsvFiles } from "./types";
import { writeJson, readCsvData } from "./utils";

(async () => {
  // Change this file name to the file you want to read
  const mainFile = "Tangnest Courses AGE 18.csv";
  // Get CSV Data from file
  const mainFileProducts = (await readCsvData<ICsvFiles>(`./data/${mainFile}`))
    .map((product) =>
      product["Course categories "]
        ? {
            name: product["Course categories "].trim(),
          }
        : null
    )
    .filter((product) => product !== null)
    .filter(
      (product, index, self) =>
        index === self.findIndex((p) => p?.name === product?.name)
    );

  // Write JSON Data to file
  await writeJson(mainFileProducts, `./results/categories.json`);
  console.log(mainFileProducts);
})();
