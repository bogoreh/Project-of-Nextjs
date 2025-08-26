import styles from './notifications.module.css'

export default function Notifications() {
  // Sample notifications
  const notifications = [
    {
      id: 1,
      type: 'like',
      user: 'Jane Smith',
      content: 'liked your post',
      timestamp: '10 minutes ago'
    },
    {
      id: 2,
      type: 'comment',
      user: 'John Doe',
      content: 'commented on your post',
      timestamp: '2 hours ago'
    },
    {
      id: 3,
      type: 'friend',
      user: 'Alex Johnson',
      content: 'sent you a friend request',
      timestamp: '1 day ago'
    }
  ]

  return (
    <div className={styles.notifications}>
      <h2>Notifications</h2>
      
      <div className={styles.notificationsList}>
        {notifications.map(notification => (
          <div key={notification.id} className={styles.notification}>
            <div className={styles.notificationIcon}>
              {notification.type === 'like' && '👍'}
              {notification.type === 'comment' && '💬'}
              {notification.type === 'friend' && '👤'}
            </div>
            
            <div className={styles.notificationContent}>
              <p>
                <strong>{notification.user}</strong> {notification.content}
              </p>
              <span className={styles.timestamp}>{notification.timestamp}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}