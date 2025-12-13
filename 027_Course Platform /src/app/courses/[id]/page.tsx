'use client';

import { notFound } from 'next/navigation';
import { courses, courseModules } from '@/lib/data';
import { Clock, Users, Star, Award, PlayCircle, CheckCircle } from 'lucide-react';

interface CoursePageProps {
  params: {
    id: string;
  };
}

export default function CoursePage({ params }: CoursePageProps) {
  const course = courses.find(c => c.id === params.id);
  const modules = courseModules[params.id] || [];

  if (!course) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Course Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-8">
        <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
        <p className="text-xl mb-6 opacity-90">{course.description}</p>
        <div className="flex flex-wrap gap-6">
          <div className="flex items-center">
            <Clock className="h-5 w-5 mr-2" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-5 w-5 mr-2" />
            <span>{course.students.toLocaleString()} students</span>
          </div>
          <div className="flex items-center">
            <Star className="h-5 w-5 mr-2" />
            <span>{course.rating} rating</span>
          </div>
          <div className="flex items-center">
            <Award className="h-5 w-5 mr-2" />
            <span>{course.level} level</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Content */}
        <div className="lg:col-span-2">
          {/* What You'll Learn */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-6 shadow">
            <h2 className="text-2xl font-bold mb-4">What you'll learn</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                'Build real-world applications',
                'Master modern frameworks',
                'Learn best practices',
                'Get hands-on experience',
                'Understand core concepts',
                'Prepare for interviews'
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Course Content */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow">
            <h2 className="text-2xl font-bold mb-6">Course Content</h2>
            <div className="space-y-4">
              {modules.map((module, moduleIndex) => (
                <div key={module.id} className="border rounded-lg overflow-hidden">
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 font-semibold">
                    Module {moduleIndex + 1}: {module.title}
                  </div>
                  <div className="divide-y">
                    {module.lessons.map((lesson, lessonIndex) => (
                      <div key={lesson.id} className="p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-900">
                        <div className="flex items-center">
                          <PlayCircle className="h-5 w-5 text-gray-400 mr-4" />
                          <div>
                            <div className="font-medium">
                              Lesson {lessonIndex + 1}: {lesson.title}
                            </div>
                            <div className="text-sm text-gray-500">{lesson.duration}</div>
                          </div>
                        </div>
                        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                          Preview
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Course Card */}
        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              {/* Price Section */}
              <div className="p-6 border-b">
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">
                    ${course.price}
                  </span>
                  <span className="text-gray-500 ml-2">one-time payment</span>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg mb-4 transition-colors">
                  Enroll Now
                </button>
                <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                  30-day money-back guarantee
                </p>
              </div>

              {/* Course Includes */}
              <div className="p-6">
                <h3 className="font-bold mb-4">This course includes:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>12 hours on-demand video</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Downloadable resources</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Certificate of completion</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Full lifetime access</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span>Access on mobile and TV</span>
                  </li>
                </ul>
              </div>

              {/* Instructor */}
              <div className="p-6 border-t">
                <h3 className="font-bold mb-4">Instructor</h3>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mr-4">
                    <span className="text-lg font-bold text-blue-600 dark:text-blue-300">
                      {course.instructor.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold">{course.instructor}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Senior Developer & Instructor
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}