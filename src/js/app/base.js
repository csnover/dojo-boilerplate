define(['dojo', 'dijit/Dialog'], function (dojo, Dialog) {
	dojo.addOnLoad(function () {
		new Dialog({
			title: 'Hello World',
			content: 'Loaded successfully!'
		}).placeAt(document.body).show();
	});
});