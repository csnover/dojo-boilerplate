Dojo Boilerplate: A Starter Kit for Dojo Development
====================================================

The Dojo Boilerplate is a set of files to help you rapidly get up and running
with the Dojo Toolkit. It illustrates some basic best practices when working
with Dojo.

Quick Start
-----------

0. Make sure you have [Node.js](http://nodejs.org) and a
   [Java runtime](http://www.oracle.com/technetwork/java/index.html)
   installed.
1. Clone the repository using `git clone --recursive`.
2. Run `npm install` to install additional Node.js dependencies.
3. Develop your project in `src/` until it is amazing.
4. Run `build.sh`, which will create an awesome optimised build in `dist/`.
5. Upload `dist/` for millions of people the world over to enjoy.
6. Hapyness.

### Windows Users

If you have [msysgit](http://git-scm.com) installed, run Git Bash and verify
some dependencies by running the following commands:

    which java
    which node

A brief tour
------------

* All of the application's source goes in `src`. It will be built into
  `dist`.
* Build profiles for the build system go in `profiles`.
* The entrypoint of the demo application is the HTML file at
  `src/index.html`.
* The `build.sh` script takes your application files and builds them for
  production use using Stylus and the Dojo build system. It depends on the
  presence of an application build profile at `profiles/app.profile.js`.
* The file `src/app/resources/app.styl` contains all the CSS for the
  application.
* Tests using [Intern](http://theintern.io) exist in the `tests` directory.
  They can be run with `tests/run.sh`. The test configuration is at
  `tests/intern.js` and defaults to using a Sauce Labs tunnel.

Useful resources
----------------

* [Dojo Tutorials](http://dojotoolkit.org/documentation/)
* [Dojo Reference Guide](http://dojotoolkit.org/reference-guide/)
* [Dojo API Browser](http://dojotoolkit.org/api/)

About the boilerplate
---------------------

This boilerplate is occasionally updated to try to reflect the latest and
greatest features and design patterns for writing Web apps with Dojo, but
it relies heavily on information and contributions from other users. If
you have an idea, suggestion, or problem, please [report
it](https://github.com/csnover/dojo-boilerplate/issues) or create a pull
request! (Please note that you will need to have signed the [Dojo
CLA](http://dojofoundation.org/about/cla) before your pull requests are
accepted, for the good of us all!)

License
-------

The Dojo Boilerplate is licensed under the New BSD license.
