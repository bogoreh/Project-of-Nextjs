import Post from '../components/Post/Post'
import Sidebar from '../components/Sidebar/Sidebar'
import styles from '../page.module.css'

export default function Feed() {
  // Sample posts data (same as home page)
  const posts = [
    {
      id: 1,
      user: {
        name: 'Jane Smith',
        avatar: '/images/avatars/user1.jpg'
      },
      content: 'Just finished my morning run! Feeling energized for the day ahead. 🏃‍♀️',
      timestamp: '2 hours ago',
      likes: 24,
      comments: 5
    },
    {
      id: 2,
      user: {
        name: 'John Doe',
        avatar: '/images/avatars/user2.jpg'
      },
      content: 'Working on a new project with Next.js. Loving the developer experience!',
      timestamp: '4 hours ago',
      likes: 42,
      comments: 12
    }
  ]

  return (
    <div className={styles.homePage}>
      <div className={styles.feed}>
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
      
      <Sidebar />
    </div>
  )
}