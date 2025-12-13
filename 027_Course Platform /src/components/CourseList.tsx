import { Course } from '@/types';
import CourseCard from './CourseCard';

interface CourseListProps {
  courses: Course[];
  title?: string;
}

export default function CourseList({ courses, title = 'Featured Courses' }: CourseListProps) {
  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
        {title}
      </h2>
      
      {courses.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">No courses found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </section>
  );
}