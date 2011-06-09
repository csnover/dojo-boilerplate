/**
 * This file is your application's main JavaScript file; it is listed as a loader dependency in _base.js and will
 * automatically load when _base.js loads.
 *
 * Because this file has the special filename "main.js", whatever object it returns can be loaded by other files simply
 * by requiring "app" (instead of "app/main").
 *
 * This module’s second dependency, "./Dialog", is a relative dependency; you should use this type of notation for
 * dependencies within a package in order to ensure the package is fully portable.
 *
 * This module’s third dependency is a plugin dependency; in this case, it is a dependency on the "dojo/domReady"
 * plugin, which means this module will not be defined until after the DOM is ready.
 *
 * In all cases, the function that is passed to define() is only invoked once, and the return value is cached.
 */
define([ 'dojo', './Dialog', 'dojo/domReady!' ], function (dojo, Dialog) {
	var app = {
		dialog: new Dialog().placeAt(document.body)
	};

	app.dialog.show();

	return app;
});