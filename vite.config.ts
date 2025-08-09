import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { execSync } from "child_process";

// Get git information
const getGitInfo = () => {
  try {
    const gitHash = execSync('git rev-parse HEAD').toString().trim();
    const gitDate = execSync('git log -1 --format="%ai"').toString().trim();
    const gitMessage = execSync('git log -1 --format="%s"').toString().trim();
    return { gitHash, gitDate, gitMessage };
  } catch (error) {
    console.warn('Could not get git information:', error);
    return { gitHash: '', gitDate: '', gitMessage: '' };
  }
};

const { gitHash, gitDate, gitMessage } = getGitInfo();

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/',
  server: {
    host: "::",
    port: 8080,
    strictPort: false,
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'dev.sourcing.vn',
      '.sourcing.vn'  // Allow all subdomains of sourcing.vn
    ]
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    __GIT_COMMIT_HASH__: JSON.stringify(gitHash),
    __GIT_COMMIT_DATE__: JSON.stringify(gitDate),
    __GIT_COMMIT_MESSAGE__: JSON.stringify(gitMessage),
  },
}));
