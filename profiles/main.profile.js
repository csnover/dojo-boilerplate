dependencies = {
    action: 'clean,release',
    async: true,
    cssOptimize: 'comments',
    mini: true,
    optimize: 'shrinksafe',
    releaseName: 'js',
    stripConsole: 'all',

    layers: [
        { name: '../app/_base.js', resourceName: 'app._base', dependencies: [ 'app._base', 'app.main' ] }
    ],

    prefixes: [
        [ 'dijit', '../dijit' ],
        [ 'dojox', '../dojox' ],
        [ 'app', '../app' ],
        [ 'dbp', '../dbp' ]
    ],

    staticHasFeatures: {
        'dojo-sync-loader':0
    }
}