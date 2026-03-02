'use client';

import { GitHubUser } from '@/types/github';
import { MapPin, Link as LinkIcon, Users, Calendar, Mail, Building } from 'lucide-react';
import styles from '@/styles/Home.module.css';

interface ProfileCardProps {
  user: GitHubUser;
}

export default function ProfileCard({ user }: ProfileCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className={styles.profileCard}>
      <div className={styles.profileHeader}>
        <img 
          src={user.avatar_url} 
          alt={user.name || user.login}
          className={styles.avatar}
        />
        <div className={styles.profileInfo}>
          <h2>{user.name || user.login}</h2>
          <a 
            href={user.html_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.username}
          >
            @{user.login}
          </a>
        </div>
      </div>

      {user.bio && (
        <p className={styles.bio}>{user.bio}</p>
      )}

      <div className={styles.stats}>
        <div className={styles.stat}>
          <Users size={18} />
          <span>{user.followers} followers</span>
        </div>
        <div className={styles.stat}>
          <Users size={18} />
          <span>{user.following} following</span>
        </div>
        <div className={styles.stat}>
          <span>{user.public_repos} repos</span>
        </div>
      </div>

      <div className={styles.details}>
        {user.company && (
          <div className={styles.detail}>
            <Building size={16} />
            <span>{user.company}</span>
          </div>
        )}
        {user.location && (
          <div className={styles.detail}>
            <MapPin size={16} />
            <span>{user.location}</span>
          </div>
        )}
        {user.email && (
          <div className={styles.detail}>
            <Mail size={16} />
            <a href={`mailto:${user.email}`}>{user.email}</a>
          </div>
        )}
        {user.blog && (
          <div className={styles.detail}>
            <LinkIcon size={16} />
            <a href={user.blog} target="_blank" rel="noopener noreferrer">
              {user.blog.replace(/^https?:\/\//, '')}
            </a>
          </div>
        )}
        <div className={styles.detail}>
          <Calendar size={16} />
          <span>Joined {formatDate(user.created_at)}</span>
        </div>
      </div>
    </div>
  );
}