'use client';

import { useState, useEffect } from 'react';
import PostCard from '@/components/PostCard';
import CreatePost from '@/components/CreatePost';
import Sidebar from '@/components/Sidebar';
import { getPosts, getUsers, createPost, likePost } from '@/lib/api';
import { Post, User } from '@/lib/types';

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [postsData, usersData] = await Promise.all([
        getPosts(),
        getUsers()
      ]);
      setPosts(postsData);
      setUsers(usersData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreatePost = async (content: string) => {
    try {
      // Using first user as current user for demo
      const newPost = await createPost(content, users[0].id);
      setPosts([newPost, ...posts]);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  const handleLike = async (postId: string) => {
    try {
      await likePost(postId);
      setPosts(posts.map(post => 
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      ));
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center h-64">
          <div className="text-gray-600 dark:text-gray-400">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
          <CreatePost 
            onSubmit={handleCreatePost} 
            userAvatar={users[0]?.avatar || 'https://ui-avatars.com/api/?name=User&background=random'}
          />
          
          <div className="space-y-4">
            {posts.map((post) => (
              <PostCard 
                key={post.id} 
                post={post} 
                onLike={handleLike}
              />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Sidebar users={users} />
        </div>
      </div>
    </div>
  );
}