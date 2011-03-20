dojo-boilerplate
================

The Dojo Boilerplate is a set of files to help you rapidly get up and running
with the Dojo Toolkit. It illustrates some basic best practices when working
with Dojo. The master branch uses the standard Dojo build system; if you're
feeling adventurous, there is also a
[branch that uses AMD modules](https://github.com/rmurphey/dojo-boilerplate/tree/AMD)
and is built using [RequireJS](http://requirejs.org).

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
* The `src/index.html` file loads `src/js/app/base.js`; it's up to you to make
  this file load anything else your app requires.
* The file `util/build.sh` reads the profile file at `profiles/app.js`, which
  contains instructions to the Dojo build tool on how to build the files for
  production. The profile instructs the build tool to create two files: one
  that includes a built version of the base Dojo files, and one that includes
  all of your application's code and its dependencies.

Useful resources
----------------

* [Dojo Reference Guide](http://dojotoolkit.org/reference-guide/)
* [RequireJS documentation](http://requirejs.org/docs/api.html)

License
-------

The Dojo Boilerplate is licensed under the [same
terms](http://bugs.dojotoolkit.org/browser/dojo/trunk/LICENSE) as the Dojo
Toolkit. Consult the individual projects (see the Useful resources section
above) for additional licensing information.
