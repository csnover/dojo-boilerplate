/**
 * This file is your application's main JavaScript file; it is loaded by the require() call in _base.js.
 * By convention, whatever object is returned by this file can be loaded by other files simply by requiring "app"
 * (in lieu of "app/main").
 */
define([ 'dojo', 'dijit/Dialog', 'dojo/domReady!' ], function (dojo, Dialog) {
	new Dialog({
		title: 'Hello World',
		content: 'Loaded successfully!'
	}).placeAt(document.body).show();
});