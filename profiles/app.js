({
  appDir: '../src/',

  baseUrl: 'js',

  dir: '../dist/',

  pragmas: {
    asynchLoader: true
  },

  locale: 'en-us',

  packages: [
    {
      name: 'dojo',
      location: 'dojo-release-1.6.0-src/dojo',
      main: 'lib/main-browser',
      lib: '.'
    },
    {
      name: 'dijit',
      location: 'dojo-release-1.6.0-src/dijit',
      main: 'lib/main',
      lib: '.'
    }
  ],

  modules: [
    {
      name: 'app/_base'
    }
  ]
})