module.exports = {
  type: 'react-components',
  version: '{{version}}',
  webpack: {
    entry: [ './docs/index.js' ]
  },
  options: {
    port: 3000,
    html: {
      template: 'docs/index.html',
      filename: '../index.html'
    },
    css: {
      extract: false
    },
    sentry: false,
    emonitor: false,
    cleanDist: false
  }
};
