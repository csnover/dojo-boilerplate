Dojo Boilerplate: A Starter Kit for Dojo Development
====================================================

The Dojo Boilerplate is a set of files to help you rapidly get up and running
with the Dojo Toolkit. It illustrates some basic best practices when working
with Dojo. This is the branch for the new AMD loader and build systems in Dojo
1.7 and later; there is also a
[branch using the old synchronous loader](https://github.com/csnover/dojo-boilerplate/tree/1.6),
for use with Dojo 1.6 and earlier.

Huge thanks go out to [neonstalwart](https://github.com/neonstalwart) for his
original
[dojo-requirejs-template](https://github.com/neonstalwart/dojo-requirejs-template)
project. Though that repository is no longer maintained, it was instrumental in
providing guidance for earlier versions of the AMD branch.

Quick Start
-----------

0. Clone the repository using `git clone --recursive`.
1. Develop your project in `src/` until it is amazing.
2. Run `build.sh`, which will create an awesome optimised build in `dist/`.
3. Upload `dist/` for millions of people the world over to enjoy.
4. Hapyness.

### Windows Users

If you have [msysgit](http://git-scm.com) installed, run Git Bash and verify
some dependencies by running the following commands:

    which java
    which node

If at least `java` is available, you’re ready to go; `cd` to your project
directory and follow the Quick Start instructions above. If Java is missing,
you will need to install it. Node.js is optional, but will reward you with
much faster builds.

A brief tour
------------

* The starting point of the boilerplate is the file at `src/index.html` for
  the client, and `src/server.sh` for a server running Node.js. These files
  are responsible for loading the Dojo loader and the application’s
  bootstrapper script.
* The file `src/app/run.js` is your application’s bootstrapper script. In
  it, you can configure paths, packages, and other configuration options
  that should apply to both the client and the server. By default, this file
  simply configures paths and packages and then loads `src/app/main.js`
  (by way of the second `[ 'app' ]` argument).
* The file `build.sh` takes your application files and builds them for
  production use using the Dojo build tool. It depends on the presence of the
  build profile at `profiles/app.profile.js`.
* The file `src/app/resources/app.css` contains import statements to load
  the CSS for Dojo’s Claro theme. _If you are not using Dijit widgets, you
  probably want to remove these imports!_

Useful resources
----------------

* [Dojo Tutorials](http://dojotoolkit.org/documentation/)
* [Dojo Reference Guide](http://dojotoolkit.org/reference-guide/)
* [Dojo API Browser](http://dojotoolkit.org/api/)

About the boilerplate
---------------------

This boilerplate is constantly updated to try to reflect the latest and
greatest features and design patterns for writing Web apps with Dojo, but
it relies heavily on information and contributions from other users. If
you have an idea, suggestion, or problem, please [report
it](https://github.com/csnover/dojo-boilerplate/issues) or create a pull
request! (Please note that you will need to have signed the [Dojo
CLA](http://dojofoundation.org/about/cla) before your pull requests are
accepted, for the good of us all!)

License
-------

The Dojo Boilerplate is licensed under the [same
terms](http://bugs.dojotoolkit.org/browser/dojo/trunk/LICENSE) as the Dojo
Toolkit. Consult the individual projects (see the Useful resources section
above) for additional licensing information.