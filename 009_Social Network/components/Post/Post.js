import styles from './Post.module.css'

export default function Post({ post }) {
  return (
    <div className="card">
      <div className={styles.postHeader}>
        <img src={post.user.avatar} alt={post.user.name} className={styles.avatar} />
        <div>
          <div className={styles.userName}>{post.user.name}</div>
          <div className={styles.timestamp}>{post.timestamp}</div>
        </div>
      </div>
      
      <div className={styles.postContent}>
        {post.content}
      </div>
      
      <div className={styles.postStats}>
        <span>{post.likes} likes</span>
        <span>{post.comments} comments</span>
      </div>
      
      <div className={styles.postActions}>
        <button className={styles.actionButton}>Like</button>
        <button className={styles.actionButton}>Comment</button>
        <button className={styles.actionButton}>Share</button>
      </div>
    </div>
  )
}