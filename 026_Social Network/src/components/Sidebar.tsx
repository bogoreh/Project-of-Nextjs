import { User } from '@/lib/types';
import { Users, TrendingUp, Calendar } from 'lucide-react';

interface SidebarProps {
  users: User[];
}

export default function Sidebar({ users }: SidebarProps) {
  return (
    <div className="space-y-6">
      {/* Trending */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
        <div className="flex items-center space-x-2 mb-4">
          <TrendingUp className="h-5 w-5 text-blue-600" />
          <h3 className="font-semibold text-gray-800 dark:text-white">Trending Now</h3>
        </div>
        <div className="space-y-3">
          {['#TechNews', '#WebDev', '#Design', '#AI'].map((tag) => (
            <div key={tag} className="text-blue-600 hover:text-blue-700 cursor-pointer">
              {tag}
            </div>
          ))}
        </div>
      </div>

      {/* Online Users */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
        <div className="flex items-center space-x-2 mb-4">
          <Users className="h-5 w-5 text-green-600" />
          <h3 className="font-semibold text-gray-800 dark:text-white">Online Friends</h3>
        </div>
        <div className="space-y-3">
          {users.slice(0, 3).map((user) => (
            <div key={user.id} className="flex items-center space-x-3">
              <div className="relative">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-10 h-10 rounded-full"
                />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <p className="font-medium text-gray-800 dark:text-white">{user.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Online</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
        <div className="flex items-center space-x-2 mb-4">
          <Calendar className="h-5 w-5 text-purple-600" />
          <h3 className="font-semibold text-gray-800 dark:text-white">Upcoming Events</h3>
        </div>
        <div className="space-y-3">
          <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <p className="font-medium text-gray-800 dark:text-white">Tech Meetup</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Tomorrow, 6:00 PM</p>
          </div>
          <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <p className="font-medium text-gray-800 dark:text-white">Webinar: AI Trends</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Jan 20, 2:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}