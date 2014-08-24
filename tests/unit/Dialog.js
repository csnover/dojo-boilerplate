define([
	'intern!object',
	'intern/chai!assert',
	'app/Dialog'
], function (registerSuite, assert, Dialog) {
	registerSuite(function () {
		var dialog;
		return {
			name: 'app/Dialog',

			beforeEach: function () {
				dialog = new Dialog();
			},

			afterEach: function () {
				dialog.destroyRecursive();
			},

			'default properties': function () {
				assert.strictEqual(dialog.get('title'), 'Hello World', 'Default title should be set');
				assert.strictEqual(dialog.get('content'), 'Loaded successfully!', 'Default content should be set');
			},

			'#show, #hide': function () {
				assert.strictEqual(dialog.domNode.offsetHeight, 0, 'Dialog should be invisible before being shown');
				return dialog.show().then(function () {
					assert.operator(dialog.domNode.offsetHeight, '>', 0, 'Dialog should be visible after being shown');
					return dialog.hide().then(function () {
						assert.strictEqual(dialog.domNode.offsetHeight, 0, 'Dialog should be invisible after being hidden');
					});
				});
			}
		};
	});
});
