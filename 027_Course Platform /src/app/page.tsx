import { courses } from '@/lib/data';
import CourseList from '@/components/CourseList';
import { BookOpen, Users, Award, Globe } from 'lucide-react';

export default function Home() {
  const featuredCourses = courses.slice(0, 3);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Learn New Skills Online
          <span className="text-blue-600"> With Expert Instructors</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Join thousands of students learning at their own pace with our comprehensive courses.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/courses"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300"
          >
            Browse Courses
          </a>
          <a
            href="/dashboard"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-3 px-8 rounded-lg transition-colors duration-300"
          >
            My Dashboard
          </a>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
            <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 dark:text-white">50+</div>
            <div className="text-gray-600 dark:text-gray-400">Courses</div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
            <Users className="h-8 w-8 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 dark:text-white">10K+</div>
            <div className="text-gray-600 dark:text-gray-400">Students</div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
            <Award className="h-8 w-8 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 dark:text-white">25+</div>
            <div className="text-gray-600 dark:text-gray-400">Instructors</div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
            <Globe className="h-8 w-8 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 dark:text-white">100%</div>
            <div className="text-gray-600 dark:text-gray-400">Online</div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <CourseList courses={featuredCourses} title="Featured Courses" />

      {/* Categories */}
      <section className="py-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Popular Categories
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Web Development', 'Data Science', 'Mobile Apps', 'Business'].map((category) => (
            <div
              key={category}
              className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-xl hover:shadow-lg transition-shadow cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {category}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                15+ courses
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}