'use client';

import { GitHubRepo } from '@/types/github';
import { Star, GitFork, Calendar } from 'lucide-react';
import styles from '@/styles/Home.module.css';

interface RepositoryListProps {
  repos: GitHubRepo[];
}

export default function RepositoryList({ repos }: RepositoryListProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className={styles.repoSection}>
      <h3>Latest Repositories</h3>
      <div className={styles.repoGrid}>
        {repos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.repoCard}
          >
            <h4>{repo.name}</h4>
            {repo.description && (
              <p className={styles.repoDescription}>{repo.description}</p>
            )}
            <div className={styles.repoStats}>
              {repo.language && (
                <span className={styles.repoLanguage}>
                  <span className={styles.languageDot}></span>
                  {repo.language}
                </span>
              )}
              <span className={styles.repoStat}>
                <Star size={14} />
                {repo.stargazers_count}
              </span>
              <span className={styles.repoStat}>
                <GitFork size={14} />
                {repo.forks_count}
              </span>
              <span className={styles.repoStat}>
                <Calendar size={14} />
                {formatDate(repo.updated_at)}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}