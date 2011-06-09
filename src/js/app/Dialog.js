/**
 * This file is a very simple example of a class declaration in Dojo. It defines "app/Dialog" as a new class that
 * extends a dijit Dialog and overrides the default title and content properties.
 */
define([ 'dojo', 'dijit/Dialog' ], function (dojo, Dialog) {
    return dojo.declare(Dialog, {
        title: 'Hello World',
        content: 'Loaded successfully!'
    });
});