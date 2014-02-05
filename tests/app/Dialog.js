define([
    'doh/runner',
    'app/Dialog'
], function (
    doh,
    Dialog
) {

    doh.register('Dialog tests', [{
        
        name: 'Dialog must have correct title',

        setUp: function () {
            this.dialog = new Dialog();
        },

        tearDown: function () {
            // 'clean' workspace. We must destroy the dialog if we open it.
        },

        runTest: function (t) {
            t.is('Hello World', this.dialog.get('title'));
        }

    }, function DialogMustHaveCorrectContent (t) {
            // Another way to write tests
            var dialog = new Dialog();
            t.is('Loaded successfully!', dialog.get('content'));
    }]);

    // In order to test DOM manipulation, you may want to run in an HTML page.
    if(doh.isBrowser) {
        doh.register('Dialog DOM tests',
            require.toUrl('../../../tests/app/Dialog.html'), 30000);
    }

});
