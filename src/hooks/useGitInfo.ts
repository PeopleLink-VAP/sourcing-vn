import { useState, useEffect } from 'react';

interface GitInfo {
  hash: string;
  date: string;
  message: string;
  loading: boolean;
  error: string | null;
}

export const useGitInfo = (): GitInfo => {
  const [gitInfo, setGitInfo] = useState<GitInfo>({
    hash: '',
    date: '',
    message: '',
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchGitInfo = async () => {
      try {
        // Git information is injected at build time via Vite's define option
        const hash = __GIT_COMMIT_HASH__ || '';
        const date = __GIT_COMMIT_DATE__ || '';
        const message = __GIT_COMMIT_MESSAGE__ || '';

        setGitInfo({
          hash: hash.substring(0, 7), // Show short hash
          date: date ? new Date(date).toLocaleString() : '',
          message,
          loading: false,
          error: null,
        });
      } catch (error) {
        setGitInfo({
          hash: '',
          date: '',
          message: '',
          loading: false,
          error: 'Failed to load git info',
        });
      }
    };

    fetchGitInfo();
  }, []);

  return gitInfo;
};
