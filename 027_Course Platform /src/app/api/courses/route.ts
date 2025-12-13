import { NextResponse } from 'next/server';
import { courses } from '@/lib/data';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const level = searchParams.get('level');

  let filteredCourses = courses;

  if (category) {
    filteredCourses = filteredCourses.filter(course => 
      course.category.toLowerCase().includes(category.toLowerCase())
    );
  }

  if (level) {
    filteredCourses = filteredCourses.filter(course => 
      course.level.toLowerCase() === level.toLowerCase()
    );
  }

  return NextResponse.json(filteredCourses);
}