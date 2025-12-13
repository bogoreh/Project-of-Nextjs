import { Heart, MessageCircle, Share2, MoreVertical } from 'lucide-react';
import { Post } from '@/lib/types';
import { formatDate } from '@/lib/utils';

interface PostCardProps {
  post: Post;
  onLike: (postId: string) => void;
}

export default function PostCard({ post, onLike }: PostCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-4">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <img
            src={post.userAvatar}
            alt={post.userName}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h3 className="font-semibold text-gray-800 dark:text-white">
              {post.userName}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {formatDate(post.createdAt)}
            </p>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreVertical className="h-5 w-5" />
        </button>
      </div>

      <p className="text-gray-700 dark:text-gray-300 mb-4">{post.content}</p>

      {post.imageUrl && (
        <div className="mb-4">
          <img
            src={post.imageUrl}
            alt="Post image"
            className="rounded-lg w-full h-64 object-cover"
          />
        </div>
      )}

      <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-6">
          <button
            onClick={() => onLike(post.id)}
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-red-500"
          >
            <Heart className="h-5 w-5" />
            <span>{post.likes}</span>
          </button>

          <button className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-500">
            <MessageCircle className="h-5 w-5" />
            <span>{post.comments}</span>
          </button>

          <button className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-green-500">
            <Share2 className="h-5 w-5" />
            <span>{post.shares}</span>
          </button>
        </div>
      </div>
    </div>
  );
}