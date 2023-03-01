module.exports = {
  apps: [
    {
      name: 'mrdonalds',
      script: 'server.js',
      watch: '.',
      env: {
        HTTP: 'https',
      },
    },
  ],
};
