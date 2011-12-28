# Dojo Boilerplate: A Starter Kit for Dojo Development

The Dojo Boilerplate is a set of files to help you rapidly get up and running
with the Dojo Toolkit. It illustrates some basic best practices when working
with Dojo. This is the branch for the new Dojo 1.7 loader and build systems,
which use AMD modules; there is also a [branch using the old synchronous
loader](https://github.com/csnover/dojo-boilerplate/tree/1.6), for use
with Dojo 1.6.

Huge thanks go out to [neonstalwart](https://github.com/neonstalwart) for his
original
[dojo-requirejs-template](https://github.com/neonstalwart/dojo-requirejs-template)
project. Though that repository is no longer maintained, it was instrumental in
providing guidance for earlier versions of the AMD branch.

## Quick Start

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

## A brief tour

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
  build profile at `src/app/app.profile.js`.
* The file `src/app/resources/app.css` contains import statements to load
  the CSS for Dojo’s Claro theme. _If you are not using Dijit widgets, you
  probably want to remove these imports!_
* The directory `src/dbp` contains tools you may find useful. These tools
  are a work in progress, and are not yet updated to AMD syntax.


Useful resources
----------------

* [Dojo Reference Guide (latest release version)](http://dojotoolkit.org/reference-guide/)
* [Introduction to Custom Dojo Widgets](http://www.enterprisedojo.com/2010/09/21/introduction-to-custom-dojo-widgets/)
* [Dojo Reference Guide (Dojo trunk)](http://livedocs.dojotoolkit.org/)

License
-------

The Dojo Boilerplate is licensed under the [same
terms](http://bugs.dojotoolkit.org/browser/dojo/trunk/LICENSE) as the Dojo
Toolkit. Consult the individual projects (see the Useful resources section
above) for additional licensing information.
