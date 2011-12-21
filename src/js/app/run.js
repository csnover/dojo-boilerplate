/**
 * This file is used to reconfigure parts of the loader at runtime for this application. We've put this extra
 * configuration in a separate file, instead of adding it directly to index.html, because it contains options that
 * can be shared if the application is run on both the client and the server.
 *
 * If you aren't planning on running your app on both the client and the server, you could easily move this
 * configuration into index.html (as a dojoConfig object) if it makes your life easier.
 */
require({
    // The base path for all packages and modules. If you don't provide this, baseUrl defaults to the directory
    // that contains dojo.js.
    baseUrl: 'js/',

    // A list of packages to register. Strictly speaking, you do not need to register any packages,
    // but you can't require "app" and get app/main.js if you do not register the "app" package (the loader will look
    // for a module at <baseUrl>/app.js instead). Unregistered packages also cannot use the packageMap feature, which
    // might be important to you if you need to relocate dependencies.
    packages: [
        'dojo',
        'dijit',
        'dojox',
        'app',
        'dbp'
    ]
// Require 'app'. This loads the main application file, app/main.js.
}, [ 'app' ]);