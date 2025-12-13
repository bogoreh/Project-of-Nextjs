'use client';

import { Course } from '@/types';
import { Clock, Users, Star, Award } from 'lucide-react';
import Link from 'next/link';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Course Image */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600"></div>
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
            course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {course.level}
          </span>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
            {course.category}
          </span>
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            ${course.price}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
          {course.title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {course.description}
        </p>

        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
          <span className="flex items-center mr-4">
            <Clock className="h-4 w-4 mr-1" />
            {course.duration}
          </span>
          <span className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            {course.students.toLocaleString()}
          </span>
        </div>

        {/* Rating and Instructor */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Star className="h-5 w-5 text-yellow-500 fill-current" />
            <span className="ml-2 font-medium">{course.rating}</span>
            <span className="text-gray-500 ml-1">({course.students})</span>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            By {course.instructor}
          </div>
        </div>

        {/* Action Button */}
        <Link
          href={`/courses/${course.id}`}
          className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg text-center transition-colors duration-300"
        >
          View Course Details
        </Link>
      </div>
    </div>
  );
}