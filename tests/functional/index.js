define([
	'intern!object',
	'intern/chai!assert',
	'../support/helpers/waitForCss',
	'require'
], function (registerSuite, assert, waitForCss, require) {
	registerSuite(function () {
		return {
			name: 'index.html',

			'startup': function () {
				return this.remote.get(require.toUrl('app/') + '../index.html')
					.then(waitForCss('body.loaded', 10000))
					.findByCssSelector('.dijitDialogTitle')
						.getVisibleText()
						.then(function (text) {
							assert.strictEqual(text, 'Hello World', 'Hello World dialog should be displayed when the application is loaded');
						});
			}
		};
	});
});
