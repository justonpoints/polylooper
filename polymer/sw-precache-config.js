module.exports = {
  staticFileGlobs: [
    '/index.html',
    '/manifest.json',
    '/bower_components/webcomponentsjs/webcomponents-lite.min.js',
    '/images/*',
    'src/*'
  ],
  navigateFallback: '/index.html',
  navigateFallbackWhitelist: [/\/app\/*/]
};
