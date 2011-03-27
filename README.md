# Dojo Boilerplate: A Starter Kit for Dojo Development

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

## Quick Start

0. Clone the repository.
1. Run `util/setup.sh` to automatically download all required dependencies.
2. Develop your project in `www/` until it is amazing.
3. Run `util/build.sh`, which will create an awesome optimised build in `dist/`.
4. Upload `dist/` for millions of people the world over to enjoy.
5. Hapyness.

If you already have a clone of the repo, and just want to create a new
instance of it, run `make new=/dir/to/create`, and it will copy the files to
the directory you specify.

If you are on Windows, we have not yet created build scripts to download the
required files automatically. Pull requests are welcome :)

## A brief tour

* The starting point of the boilerplate is the file at `www/index.html`. This
  file is responsible for loading base Dojo, telling Dojo where to look for
  modules in the `app` and `dbp` namespaces, and finally loading your
  application's base JavaScript file.
* The file `www/js/app/base.js` is your application's base JavaScript file. In
  it, you can specify dependencies on other files, including files you create.
  You can also write application code, though the code you write in this
  particular file should be limited to bootstrapping functionality.
* The file `util/build.sh` takes your application files and builds them for
  production use using the Dojo build tool. It depends on the presence of the
  bootstrapping file at `www/js/app/base.js`, and a "profile" file at
  `profiles/app.js`.
* The file `www/css/app.css` contains import statements to load the CSS for
  Dojo's Claro theme. _If you are not using Dijit widgets, you probably want to
  remove these imports!_
* The directory `www/js/dbp` contains tools you may find useful. These tools
  are a work in progress.


Useful resources
----------------

* [Dojo Reference Guide](http://dojotoolkit.org/reference-guide/)
* [Introduction to Custom Dojo Widgets](http://www.enterprisedojo.com/2010/09/21/introduction-to-custom-dojo-widgets/)
* [RequireJS documentation](http://requirejs.org/docs/api.html)

License
-------

The Dojo Boilerplate is licensed under the [same
terms](http://bugs.dojotoolkit.org/browser/dojo/trunk/LICENSE) as the Dojo
Toolkit. Consult the individual projects (see the Useful resources section
above) for additional licensing information.
