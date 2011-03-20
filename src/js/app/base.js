dojo.provide("app.base");

dojo.require("dijit.Dialog");

dojo.addOnLoad(function() {
  // add a class to set the dijit theme
  dojo.addClass(document.body, "claro");

  // create a new dialog
  new dijit.Dialog({
    title: "Hello World",
    content: "Loaded successfully!"
  }).placeAt(document.body).show();
});
