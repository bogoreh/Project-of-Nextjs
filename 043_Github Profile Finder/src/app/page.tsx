'use client';

import { useState } from 'react';
import { GitHubUser, GitHubRepo } from '@/types/github';
import { fetchUser, fetchRepos } from '@/utils/api';
import SearchBar from '@/components/SearchBar';
import ProfileCard from '@/components/ProfileCard';
import RepositoryList from '@/components/RepositoryList';
import styles from '@/styles/Home.module.css';

export default function Home() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (username: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const userData = await fetchUser(username);
      const reposData = await fetchRepos(username);
      setUser(userData);
      setRepos(reposData);
    } catch (err) {
      setError('User not found or API rate limit exceeded');
      setUser(null);
      setRepos([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>GitHub Profile Finder</h1>
        <p className={styles.subtitle}>Search for any GitHub user and explore their profile</p>
        
        <SearchBar onSearch={handleSearch} loading={loading} />
        
        {loading && (
          <div className={styles.loading}>
            <div className={styles.spinner}></div>
            <p>Loading profile...</p>
          </div>
        )}
        
        {error && (
          <div className={styles.error}>
            <p>{error}</p>
          </div>
        )}
        
        {user && !loading && (
          <div className={styles.results}>
            <ProfileCard user={user} />
            {repos.length > 0 && <RepositoryList repos={repos} />}
          </div>
        )}
      </div>
    </main>
  );
}