dojo.provide('app.base');

dojo.require('dijit.Dialog');

dojo.addOnLoad(function() {
  new dijit.Dialog({
    title: 'Hello World',
    content: 'Loaded successfully!'
  }).placeAt(document.body).show();
});
