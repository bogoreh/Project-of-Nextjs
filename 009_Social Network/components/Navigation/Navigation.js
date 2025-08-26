import Link from 'next/link'
import styles from './Navigation.module.css'

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <Link href="/feed" className={styles.navLink}>
            <span className={styles.icon}>🏠</span>
            <span>Feed</span>
          </Link>
        </li>
        <li>
          <Link href="/profile" className={styles.navLink}>
            <span className={styles.icon}>👤</span>
            <span>Profile</span>
          </Link>
        </li>
        <li>
          <Link href="/notifications" className={styles.navLink}>
            <span className={styles.icon}>🔔</span>
            <span>Notifications</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}