export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  price: number;
  rating: number;
  students: number;
  imageUrl: string;
  published: boolean;
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  videoUrl: string;
}

export interface CourseModule {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  enrolledCourses: string[];
}