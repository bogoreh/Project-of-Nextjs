import { BlogPost, CreatePostInput } from './types';
import postsData from '@/data/posts.json';

let posts: BlogPost[] = [...postsData.posts];

export const getAllPosts = (): BlogPost[] => {
  return posts.filter(post => post.isPublished);
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return posts.find(post => post.slug === slug && post.isPublished);
};

export const getAllPostsAdmin = (): BlogPost[] => {
  return posts;
};

export const createPost = (postData: CreatePostInput): BlogPost => {
  const newPost: BlogPost = {
    ...postData,
    id: Math.random().toString(36).substr(2, 9),
    publishedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  
  posts.unshift(newPost);
  return newPost;
};

export const updatePost = (id: string, postData: Partial<CreatePostInput>): BlogPost | null => {
  const postIndex = posts.findIndex(post => post.id === id);
  
  if (postIndex === -1) return null;
  
  posts[postIndex] = {
    ...posts[postIndex],
    ...postData,
    updatedAt: new Date().toISOString(),
  };
  
  return posts[postIndex];
};

export const deletePost = (id: string): boolean => {
  const postIndex = posts.findIndex(post => post.id === id);
  
  if (postIndex === -1) return false;
  
  posts.splice(postIndex, 1);
  return true;
};