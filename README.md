dojo-boilerplate
================

The Dojo Boilerplate is a set of files to help you rapidly get up and running
with the Dojo Toolkit (DTK). It illustrates some basic best practices when
working with DTK, and includes a build system that uses
[RequireJS](http://requirejs.org) for efficient development and tiny, blazing
fast production builds.

Huge thanks go out to [neonstalwart](https://github.com/neonstalwart) for his
original
[dojo-requirejs-template](https://github.com/neonstalwart/dojo-requirejs-template)
project. Though that repository is no longer maintained, it was instrumental in
providing guidance for integrating RequireJS with Dojo 1.6.

Using the boilerplate
---------------------

0. Clone the repository.
1. Run `util/setup.sh` to automatically download all required dependencies.
2. Develop your project in `src/` until it is amazing.
3. Run `util/build.sh`, which will create an awesome optimised build in `dist/`.
4. Upload `dist/` for millions of people the world over to enjoy.
5. Hapyness.

If you are on Windows, we have not yet created build scripts to download the
required files automatically. Pull requests are welcome :)

A brief tour
------------

* The boilerplate provides the file `src/js/app/base.js` as the starting point
  for your development
* The `src/index.html` file loads the configuration file located at
  `src/js/app/_base.js`, which in turn asynchronously loads
  `src/js/app/base.js`.
* The file `util/build.sh` reads the profile file at `profiles/app.js`, which
  contains instructions to RequireJS on how to build the files for production.
  The profile instructs RequireJS to create a single file that includes Dojo,
  your application's code, and all associated dependencies as specified within
  your application's code.

Useful resources
----------------

* [DTK Reference Guide](http://dojotoolkit.org/reference-guide/)
* [RequireJS documentation](http://requirejs.org/docs/api.html)

Potential issues
----------------

* Current releases of DTK don’t include an asynchronous loader. We use
  RequireJS as a stand-in until the official loader and build system are
  complete. Current discussions suggest that Dojo will ultimately use bdLoad as
  its loader; however, it does not presently include a build system. Since both
  RequireJS and bdLoad both comply with the CommonJS AMD standard, you will be
  ready to go with no changes to your application’s code when the new official
  loader is ready. Yay standards!
* DTK currently uses `dojo.cache` for its widget templates instead of the AMD
  `text!` plugin; this means that strings included by widgets using
  `dojo.cache` will end up being loaded twice. This has been reported upstream
  at [ticket #12383](http://bugs.dojotoolkit.org/ticket/12383).

License
-------

The Dojo Boilerplate is licensed under the [same
terms](http://bugs.dojotoolkit.org/browser/dojo/trunk/LICENSE) as DTK. Consult
the individual projects (see the Useful resources section above) for additional
licensing information.
