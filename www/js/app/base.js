dojo.provide("app.base");
/**
 * This file is your application's base JavaScript file;
 * it is loaded into the page by the dojo.require() call in
 * index.html. You can write code in this file, use it to
 * express dependencies on other files, or both. Generally,
 * this file should be used only for bootstrapping code;
 * actual functionality should be placed in other files inside
 * the www/js/app directory.
 *
 * You can specify dependencies on other files by adding
 * dojo.require() statements for them:
 *
 *    dojo.require('dijit.Dialog');
 *
 * This works for your application's files, too:
 *
 *    dojo.require('app.Foo');
 *
 * The above would look for a file located at
 * www/js/app/Foo.js; however, it's important to note
 * that this only works because we've specified a modulePath for
 * the "app" namespace in index.html. If we do not specify a
 * modulePath for a namespace, dojo.require will assume that the
 * namespace corresponds to a directory that is a sibling of
 * the directory that contains dojo.js. The modulePath setting
 * in index.html overrides that default, providing a location
 * for the namespace relative to the location of dojo.js.
 *
 * Note also that any files you include via dojo.require()
 * MUST include a call to dojo.provide at the beginning;
 * the dojo.provide() function should be passed a string
 * that specifies how you expect the module to be referred
 * to in dojo.require() calls:
 *
 *    dojo.provide('app.Foo');
 *
 * Finally, note that you do not need to express all of your
 * application's dependencies in this one file; individual files
 * can express their own dependencies as well.
 */

/**
 * Any functionality that depends on the DOM being available
 * should be passed inside a function to dojo.ready.
 */
dojo.ready(function() {

});
