/**
 * Build profiles look mostly the same in Dojo 1.7 as they do in previous versions of the toolkit.
 */
dependencies = {
    // Strips all comments from CSS files.
    cssOptimize: 'comments',

    // Excludes tests, demos, and original template files from being included in the built version.
    mini: true,

    // Uses Closure Compiler as the JavaScript minifier. This can also be set to "shrinksafe" to use ShrinkSafe.
    optimize: 'closure',

    // This is the directory within the output directory that built JavaScript will be placed.
    releaseName: 'js',

    // Strips all calls to console functions within the code.
    stripConsole: 'all',

    // The default selector engine is not included by default in a dojo.js build in order to make mobile builds
    // smaller. We add it back here to avoid that extra HTTP request.
    selectorEngine: 'acme',

    // Builds can be split into multiple different JavaScript files called "layers". This allows applications to
    // defer loading large sections of code until they are actually required. Note that, at the moment, module IDs
    // in "dependencies" are still written using dots instead of slashes.
    layers: [
        // This is our main application layer. This layer will normally contain most or all of your application code.
        { name: '../app/main.js', dependencies: [ 'app.main' ] },

        // In the demo application, we conditionally require app/Dialog on the client-side, so we're building a
        // separate layer containing just that client-side code.
        { name: '../app/Dialog.js', dependencies: [ 'app.Dialog' ] }
    ],

    // Each package requires a defined prefix so that the builder can find and combine modules into a single file.
    // The first string in each array is the package name, and the second string is the path to that package, relative
    // to the directory containing dojo.js.
    prefixes: [
        [ 'dijit', '../dijit' ],
        [ 'dojox', '../dojox' ],
        [ 'app', '../app' ],
        [ 'dbp', '../dbp' ]
    ],

    // Providing hints to the build system allows code to be conditionally removed on a more granular level than
    // simple module dependencies can allow. This is especially useful for creating tiny mobile builds.
    // Keep in mind that dead code removal only happens in minifiers that support it! Currently, ShrinkSafe does not
    // support dead code removal; Closure Compiler and UglifyJS do.
    staticHasFeatures: {
    }
}
