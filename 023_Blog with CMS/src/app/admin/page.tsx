'use client';

import { useState } from 'react';
import { BlogPost, CreatePostInput } from '@/lib/types';
import { getAllPostsAdmin, createPost, updatePost, deletePost } from '@/lib/utils';
import PostForm from '@/components/Admin/PostForm';
import PostList from '@/components/Admin/PostList';

export default function AdminPage() {
  const [posts, setPosts] = useState<BlogPost[]>(getAllPostsAdmin());
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [showForm, setShowForm] = useState(false);

  const handleCreatePost = (postData: CreatePostInput) => {
    const newPost = createPost(postData);
    setPosts([newPost, ...getAllPostsAdmin()]);
    setShowForm(false);
  };

  const handleUpdatePost = (id: string, postData: Partial<CreatePostInput>) => {
    const updatedPost = updatePost(id, postData);
    if (updatedPost) {
      setPosts(getAllPostsAdmin());
      setEditingPost(null);
      setShowForm(false);
    }
  };

  const handleDeletePost = (id: string) => {
    if (confirm('Are you sure you want to delete this post?')) {
      if (deletePost(id)) {
        setPosts(getAllPostsAdmin());
      }
    }
  };

  const handleEditPost = (post: BlogPost) => {
    setEditingPost(post);
    setShowForm(true);
  };

  const handleCancelEdit = () => {
    setEditingPost(null);
    setShowForm(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Blog Posts</h2>
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Create New Post
        </button>
      </div>

      {showForm && (
        <PostForm
          post={editingPost}
          onSubmit={editingPost ? handleUpdatePost : handleCreatePost}
          onCancel={handleCancelEdit}
        />
      )}

      <PostList
        posts={posts}
        onEdit={handleEditPost}
        onDelete={handleDeletePost}
      />
    </div>
  );
}