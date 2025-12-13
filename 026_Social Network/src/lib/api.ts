import { User, Post, Comment } from './types';

// Mock data
export const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://ui-avatars.com/api/?name=John+Doe&background=random',
    bio: 'Software developer and tech enthusiast',
    followers: 120,
    following: 85
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    avatar: 'https://ui-avatars.com/api/?name=Jane+Smith&background=random',
    bio: 'Digital marketing specialist',
    followers: 230,
    following: 150
  },
  {
    id: '3',
    name: 'Bob Johnson',
    email: 'bob@example.com',
    avatar: 'https://ui-avatars.com/api/?name=Bob+Johnson&background=random',
    bio: 'Photographer and traveler',
    followers: 85,
    following: 120
  }
];

export const mockPosts: Post[] = [
  {
    id: '1',
    userId: '1',
    userName: 'John Doe',
    userAvatar: 'https://ui-avatars.com/api/?name=John+Doe&background=random',
    content: 'Just launched my new project! 🚀 Excited to share it with everyone.',
    likes: 42,
    comments: 8,
    shares: 3,
    createdAt: new Date('2024-01-15T10:30:00')
  },
  {
    id: '2',
    userId: '2',
    userName: 'Jane Smith',
    userAvatar: 'https://ui-avatars.com/api/?name=Jane+Smith&background=random',
    content: 'Had an amazing time at the tech conference today! Great insights and networking.',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
    likes: 89,
    comments: 12,
    shares: 5,
    createdAt: new Date('2024-01-14T15:45:00')
  },
  {
    id: '3',
    userId: '3',
    userName: 'Bob Johnson',
    userAvatar: 'https://ui-avatars.com/api/?name=Bob+Johnson&background=random',
    content: 'Beautiful sunset from my hike today. Nature is amazing! 🌅',
    imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w-800',
    likes: 156,
    comments: 24,
    shares: 9,
    createdAt: new Date('2024-01-13T18:20:00')
  }
];

export const mockComments: Comment[] = [
  {
    id: '1',
    postId: '1',
    userId: '2',
    userName: 'Jane Smith',
    userAvatar: 'https://ui-avatars.com/api/?name=Jane+Smith&background=random',
    content: 'Congratulations! Looking forward to seeing it.',
    createdAt: new Date('2024-01-15T11:00:00')
  }
];

// API functions
export const getPosts = async (): Promise<Post[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockPosts;
};

export const getUsers = async (): Promise<User[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockUsers;
};

export const createPost = async (content: string, userId: string): Promise<Post> => {
  const user = mockUsers.find(u => u.id === userId);
  if (!user) throw new Error('User not found');
  
  const newPost: Post = {
    id: (mockPosts.length + 1).toString(),
    userId,
    userName: user.name,
    userAvatar: user.avatar,
    content,
    likes: 0,
    comments: 0,
    shares: 0,
    createdAt: new Date()
  };
  
  mockPosts.unshift(newPost);
  return newPost;
};

export const likePost = async (postId: string): Promise<Post> => {
  const post = mockPosts.find(p => p.id === postId);
  if (!post) throw new Error('Post not found');
  
  post.likes += 1;
  return post;
};