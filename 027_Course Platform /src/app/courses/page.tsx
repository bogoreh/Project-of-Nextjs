import { courses } from '@/lib/data';
import CourseList from '@/components/CourseList';
import { Filter, Grid, List } from 'lucide-react';

export default function CoursesPage() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            All Courses
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Browse our collection of {courses.length} courses
          </p>
        </div>
        
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <button className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </button>
          <div className="flex border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
            <button className="p-2 bg-white dark:bg-gray-800 border-r">
              <Grid className="h-4 w-4" />
            </button>
            <button className="p-2 bg-gray-100 dark:bg-gray-900">
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {['All', 'Web Development', 'Programming', 'Data Science', 'Business', 'Design'].map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full transition-colors ${
              category === 'All'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <CourseList courses={courses} />
    </div>
  );
}