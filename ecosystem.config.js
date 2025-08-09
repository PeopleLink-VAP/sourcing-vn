export default {
  apps: [
    {
      name: 'sourcing-vn-dev',
      script: 'npm',
      args: 'run dev',
      cwd: '/home/dev/sourcing-vn',
      env: {
        NODE_ENV: 'development',
        PORT: 8080,
        HOST: '::',
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      error_file: './logs/pm2-error.log',
      out_file: './logs/pm2-out.log',
      log_file: './logs/pm2-combined.log',
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      restart_delay: 4000,
      max_restarts: 10,
      min_uptime: '10s'
    }
  ]
};
