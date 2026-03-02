'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import styles from '@/styles/Home.module.css';

interface SearchBarProps {
  onSearch: (username: string) => void;
  loading: boolean;
}

export default function SearchBar({ onSearch, loading }: SearchBarProps) {
  const [username, setUsername] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      onSearch(username.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username..."
          className={styles.searchInput}
          disabled={loading}
        />
        <button 
          type="submit" 
          className={styles.searchButton}
          disabled={loading}
        >
          <Search size={20} />
          <span>Search</span>
        </button>
      </div>
    </form>
  );
}