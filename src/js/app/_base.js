require({
  baseUrl: 'js/',

  // set the paths to our library packages
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

  // set the path for the require plugins—text, i18n, etc.
  paths: {
    require: 'requirejs-0.23.0/require'
  }
}, ['app/base']);