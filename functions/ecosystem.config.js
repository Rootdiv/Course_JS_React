module.exports = {
  apps: [
    {
      name: 'mrdonalds',
      script: 'server.js',
      watch: true,
      env: {
        HTTPS: true,
      },
    },
  ],
};
