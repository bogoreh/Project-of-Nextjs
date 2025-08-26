import styles from './Sidebar.module.css'

export default function Sidebar() {
  // Sample friends data
  const friends = [
    { id: 1, name: 'Alex Johnson', avatar: '/images/avatars/user3.jpg' },
    { id: 2, name: 'Sarah Williams', avatar: '/images/avatars/user4.jpg' },
    { id: 3, name: 'Mike Thompson', avatar: '/images/avatars/user5.jpg' }
  ]

  return (
    <aside className={styles.sidebar}>
      <div className="card">
        <h3>Friends</h3>
        <div className={styles.friendsList}>
          {friends.map(friend => (
            <div key={friend.id} className={styles.friend}>
              <img src={friend.avatar} alt={friend.name} className={styles.friendAvatar} />
              <span>{friend.name}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="card">
        <h3>Trending Topics</h3>
        <ul className={styles.topicsList}>
          <li>#NextJS</li>
          <li>#WebDevelopment</li>
          <li>#Programming</li>
          <li>#TechNews</li>
        </ul>
      </div>
    </aside>
  )
}