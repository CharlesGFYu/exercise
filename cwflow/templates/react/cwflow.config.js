module.exports = {
  type: 'react',
  version: '{{version}}',
  webpack: {},
  options: {
    port: 3000,
    css: {
      extract: false
    },
    cleanDist: false,
    emonitor: false,
    sentry: false
  }
}