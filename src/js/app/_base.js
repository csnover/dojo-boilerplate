/**
 * This file is a build control script. It is used to configure the bootloader at runtime, and to configure the
 * build system at build time.
 */
require({
    baseUrl: 'js/',
    isDebug: this.isDebug,

    deps: [ 'app' ],

    packages: [
        { name: 'dojo', location: 'dojo', lib: '.' },
        { name: 'dijit', location: 'dijit', lib: '.' },
        { name: 'dojox', location: 'dojox', lib: '.' },
        { name: 'app', location: 'app', lib: '.' },
        { name: 'dbp', location: 'dbp', lib: '.' }
    ]
});