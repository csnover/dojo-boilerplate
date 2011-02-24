dependencies = {
  stripConsole : 'all',
  action : 'clean,release',
  optimize : 'shrinksafe',
  releaseName : 'app',
  localeList : 'en-us',

  layers: [
    {
      name: "../app/base.js",
      resourceName : "myApp.base",
      dependencies: [
        "app.base"
      ]
    }
  ],

  prefixes: [
    [ "dijit", "../dijit" ],
    [ "dojox", "../dojox" ],
    [ "app", "../../app" ]
  ]
};
