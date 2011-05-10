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
  
  paths: {
    text : 'requirejs-0.24.0/text',
    i18n : 'requirejs-0.24.0/i18n',
  },

  modules: [
    {
      name: 'app/_base'
    }
  ]
})