import axios from 'axios';
import { GitHubUser, GitHubRepo } from '@/types/github';

const GITHUB_API = 'https://api.github.com';

export const fetchUser = async (username: string): Promise<GitHubUser> => {
  const response = await axios.get(`${GITHUB_API}/users/${username}`);
  return response.data;
};

export const fetchRepos = async (username: string): Promise<GitHubRepo[]> => {
  const response = await axios.get(
    `${GITHUB_API}/users/${username}/repos?sort=updated&per_page=6`
  );
  return response.data;
};