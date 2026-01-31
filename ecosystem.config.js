module.exports = {
  apps: [
    {
      name: 'shop',
      script: 'pnpm',
      args: 'start',
      cwd: '/home/simple/Online-Shop',
      env: {
        NODE_ENV: 'production',
        PORT: 3003
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      error_file: '/home/simple/Online-Shop/logs/error.log',
      out_file: '/home/simple/Online-Shop/logs/out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
    }
  ]
};
