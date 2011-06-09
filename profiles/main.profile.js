dependencies = {
    action: 'clean,release',
    cssOptimize: 'comments',
    mini: true,
    optimize: 'shrinksafe',
    releaseName: 'js',
    stripConsole: 'all',

    layers: [
        { name: '../app/_base.js', resourceName: 'app._base', dependencies: [ 'app._base' ] }
    ],

    prefixes: [
        [ 'dijit', '../dijit' ],
        [ 'dojox', '../dojox' ],
        [ 'app', '../app' ],
        [ 'dbp', '../dbp' ]
    ]
}