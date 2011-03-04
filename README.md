dojo-boilerplate
================

dojo-boilerplate is a base set of files that anyone can use to get up and running immediately with the Dojo Toolkit
(DTK) when starting development of complex Web apps. It illustrates some basic best practices when working with DTK and
includes a working build system with asynchronous loader (courtesy of [RequireJS](http://requirejs.org)) for
effortless development and tiny, blazing fast production builds.

Huge thanks go out to [neonstalwart](https://github.com/neonstalwart) for his no longer maintained
[dojo-requirejs-template](https://github.com/neonstalwart/dojo-requirejs-template) project, which was instrumental in
providing guidance for integrating RequireJS with Dojo 1.6. Unlike dojo-requirejs-template, this boilerplate will
be continually updated to reflect current best practices and track new releases of DTK, and we encourage everyone to
submit issues and pull requests.

Potential issues
----------------

* Current releases of DTK don’t include an asynchronous loader. We use RequireJS as a stand-in until the official
loader and build system are complete. (Since both RequireJS and bdLoad both comply with the CommonJS AMD standard, you
will be ready to go with no changes to your application’s code when the new official loader is ready. Yay for
standards!)

* Because DTK currently uses `dojo.cache` for its widget templates instead of the AMD `text!` plugin, those strings
will end up being loaded twice. This has been reported upstream at [ticket #12383](http://bugs.dojotoolkit.org/ticket/12383).