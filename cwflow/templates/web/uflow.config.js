module.exports = {
  type: 'web',
  version: '{{version}}',
  webpack: {},
  options: {
    port: 3000,
    css: {
      extract: false
    },
    sentry: false,
    emonitor: false,
    cleanDist: false
  }
};
