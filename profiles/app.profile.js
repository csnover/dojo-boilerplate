/**
 * This is the default application build profile used by the boilerplate. While it looks similar, this build profile
 * is different from the package build profile at `app/package.js` in the following ways:
 *
 * 1. you can have multiple application build profiles (e.g. one for desktop, one for tablet, etc.), but only one
 *    package build profile;
 * 2. the package build profile only configures the `resourceTags` for the files in the package, whereas the
 *    application build profile tells the build system how to build the entire application.
 *
 * Look to `util/build/buildControlDefault.js` for more information on available options and their default values.
 */

var profile = {
	// `basePath` is relative to the directory containing this profile file; in this case, it is being set to the
	// src/ directory, which is the same place as the `baseUrl` directory in the loader configuration. (If you change
	// this, you will also need to update run.js.)
	basePath: '../src/',

	// This is the directory within the release directory where built packages will be placed. The release directory
	// itself is defined by `build.sh`. You should probably not use this; it is a legacy option dating back to Dojo
	// 0.4.
	// If you do use this, you will need to update build.sh, too.
	// releaseName: '',

	// Builds a new release.
	action: 'release',

	// Strips all comments and whitespace from CSS files and inlines @imports where possible.
	cssOptimize: 'comments',

	// Excludes tests, demos, and original template files from being included in the built version.
	mini: true,

	// Uses Closure Compiler as the JavaScript minifier. This can also be set to "shrinksafe" to use ShrinkSafe,
	// though ShrinkSafe is deprecated and not recommended.
	// This option defaults to "" (no compression) if not provided.
	optimize: 'closure',

	// We're building layers, so we need to set the minifier to use for those, too.
	// This defaults to "shrinksafe" if not provided.
	layerOptimize: 'closure',

	// A list of packages that will be built. The same packages defined in the loader should be defined here in the
	// build profile.
	packages: [
		// Using a string as a package is shorthand for `{ name: 'app', location: 'app' }`
		'app',
		'dgrid',
		'dijit',
		'dojo',
		'dojox',
		'put-selector',
		'xstyle'
	],

	// Strips all calls to console functions within the code. You can also set this to "warn" to strip everything
	// but console.error, and any other truthy value to strip everything but console.warn and console.error.
	// This defaults to "normal" (strip all but warn and error) if not provided.
	stripConsole: 'all',

	// The default selector engine is not included by default in a dojo.js build in order to make mobile builds
	// smaller. We add it back here to avoid that extra HTTP request. There is also an "acme" selector available; if
	// you use that, you will need to set the `selectorEngine` property in index.html, too.
	selectorEngine: 'lite',

	// Any module in an application can be converted into a "layer" module, which consists of the original module +
	// additional dependencies built into the same file. Using layers allows applications to reduce the number of HTTP
	// requests by combining all JavaScript into a single file.
	layers: {
		// This is the main loader module. It is a little special because it is treated like an AMD module even though
		// it is actually just plain JavaScript. There is some extra magic in the build system specifically for this
		// module ID.
		'dojo/dojo': {
			// By default, the build system will try to include `dojo/main` in the built `dojo/dojo` layer, which adds
			// a bunch of stuff we do not want or need. We want the initial script load to be as small and quick to
			// load as possible, so we configure it as a custom, bootable base.
			boot: true,
			customBase: true
		},

		// In this demo application, we load `app/main` on the client-side, so here we build a separate layer containing
		// that code. (Practically speaking, you would probably just want to roll everything into the `dojo/dojo` layer,
		// but this helps provide a basic illustration of how multi-layer builds work.) Note that when you create a new
		// layer, the module referenced by the layer is always included in the layer (in this case, `app/main`), so it
		// does not need to be explicitly defined in the `include` array.
		'app/main': {}
	},

	// Providing hints to the build system allows code to be conditionally removed on a more granular level than simple
	// module dependencies can allow. This is especially useful for creating tiny mobile builds. Keep in mind that dead
	// code removal only happens in minifiers that support it! Currently, only Closure Compiler to the Dojo build system
	// with dead code removal. A documented list of has-flags in use within the toolkit can be found at
	// <http://dojotoolkit.org/reference-guide/dojo/has.html>.
	staticHasFeatures: {
		// The trace & log APIs are used for debugging the loader, so we do not need them in the build.
		'dojo-trace-api': false,
		'dojo-log-api': false,

		// This causes normally private loader data to be exposed for debugging. In a release build, we do not need
		// that either.
		'dojo-publish-privates': false,

		// This application is pure AMD, so get rid of the legacy loader.
		'dojo-sync-loader': false,

		// `dojo-xhr-factory` relies on `dojo-sync-loader`, which we have removed.
		'dojo-xhr-factory': false,

		// We are not loading tests in production, so we can get rid of some test sniffing code.
		'dojo-test-sniff': false
	}
};