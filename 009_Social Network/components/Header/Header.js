import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h1>SocialApp</h1>
        </div>
        
        <div className={styles.search}>
          <input type="text" placeholder="Search..." />
        </div>
        
        <div className={styles.userActions}>
          <img src="/images/avatars/current-user.jpg" alt="User avatar" className={styles.userAvatar} />
          <span>Your Name</span>
        </div>
      </div>
    </header>
  )
}