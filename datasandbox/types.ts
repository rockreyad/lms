export interface ICsvFiles {
  "Skills set": string;
  "Course categories ": string;
  "Order ": string;
  "Course Name": string;
  "Lessons ": string;
  Projects: string;
  "Quizzes ": string;
  "Total Times ": string;
  "Course Description ": string;
}

export interface ICourse {
  name: string;
  description: string;
  duration: string;
  ages: number[];
  category?: string;
}

export interface ICourseModule {
  name: string;
  order: number;
  lessonsDuration: string;
  projectsDuration: string;
  quizzesDuration: string;
  totalDuration: string;
  description: string;
  courseName?: string;
}
