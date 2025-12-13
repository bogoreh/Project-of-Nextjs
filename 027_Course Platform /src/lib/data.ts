import { Course, CourseModule } from '@/types';

export const courses: Course[] = [
  {
    id: '1',
    title: 'React Fundamentals',
    description: 'Learn React from scratch with hands-on projects',
    instructor: 'John Doe',
    duration: '12 hours',
    level: 'Beginner',
    category: 'Web Development',
    price: 49.99,
    rating: 4.8,
    students: 1250,
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop',
    published: true
  },
  {
    id: '2',
    title: 'TypeScript Mastery',
    description: 'Master TypeScript for scalable applications',
    instructor: 'Jane Smith',
    duration: '10 hours',
    level: 'Intermediate',
    category: 'Programming',
    price: 59.99,
    rating: 4.9,
    students: 890,
    imageUrl: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=300&fit=crop',
    published: true
  },
  {
    id: '3',
    title: 'Next.js 14 Complete Guide',
    description: 'Build modern web applications with Next.js 14',
    instructor: 'Mike Johnson',
    duration: '15 hours',
    level: 'Intermediate',
    category: 'Web Development',
    price: 69.99,
    rating: 4.7,
    students: 2100,
    imageUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w-400&h-300&fit=crop',
    published: true
  },
  {
    id: '4',
    title: 'Node.js Backend Development',
    description: 'Build robust backend services with Node.js',
    instructor: 'Sarah Williams',
    duration: '20 hours',
    level: 'Advanced',
    category: 'Backend Development',
    price: 79.99,
    rating: 4.6,
    students: 1500,
    imageUrl: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=300&fit=crop',
    published: true
  }
];

export const courseModules: Record<string, CourseModule[]> = {
  '1': [
    {
      id: 'm1',
      title: 'Introduction to React',
      lessons: [
        { id: 'l1', title: 'What is React?', duration: '15:00', videoUrl: 'https://example.com/video1' },
        { id: 'l2', title: 'JSX Fundamentals', duration: '20:00', videoUrl: 'https://example.com/video2' },
        { id: 'l3', title: 'Components & Props', duration: '25:00', videoUrl: 'https://example.com/video3' }
      ]
    },
    {
      id: 'm2',
      title: 'State & Lifecycle',
      lessons: [
        { id: 'l4', title: 'Understanding State', duration: '18:00', videoUrl: 'https://example.com/video4' },
        { id: 'l5', title: 'Lifecycle Methods', duration: '22:00', videoUrl: 'https://example.com/video5' }
      ]
    }
  ]
};