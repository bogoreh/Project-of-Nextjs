import styles from './profile.module.css'

export default function Profile() {
  return (
    <div className={styles.profile}>
      <div className={styles.profileHeader}>
        <img 
          src="/images/cover.jpg" 
          alt="Cover" 
          className={styles.coverPhoto}
        />
        <div className={styles.profileInfo}>
          <img 
            src="/images/avatars/current-user.jpg" 
            alt="Profile" 
            className={styles.profileAvatar}
          />
          <h2>Your Name</h2>
          <p>Software Developer | Next.js Enthusiast</p>
        </div>
      </div>
      
      <div className={styles.profileContent}>
        <div className={styles.about}>
          <h3>About</h3>
          <p>Hello! I'm a software developer passionate about building web applications with modern technologies.</p>
        </div>
        
        <div className={styles.posts}>
          <h3>Your Posts</h3>
          <p>Your posts will appear here.</p>
        </div>
      </div>
    </div>
  )
}