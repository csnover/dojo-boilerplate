/**
 * This is a new Dojo 1.7 style build profile.
 */

// This function is used to determine whether or not a resource should be tagged as copy-only. See the resourceTags
// property below for more information.
function copyOnly(mid){

	// Ensures that our boot script is not transformed by the build system.
	return mid in {
		'app/run': 1
	};
}

var profile = {
	// basePath is relative to the directory containing this profile file; in this case, it is being set to the
	// src/js directory, which is the same place as the baseUrl directory in the loader configuration.
	basePath: '..',

    // This is the directory within the release directory where built packages will be placed. The release directory
	// itself is defined by util/build.sh.
    releaseName: 'js',

    // Builds a new release.
    action: 'release',

    // Strips all comments from CSS files.
    cssOptimize: 'comments',

    // Excludes tests, demos, and original template files from being included in the built version.
    mini: true,

    // Uses Closure Compiler as the JavaScript minifier. This can also be set to "shrinksafe" to use ShrinkSafe.
    optimize: 'closure',

    // Strips all calls to console functions within the code.
    stripConsole: 'all',

    // The default selector engine is not included by default in a dojo.js build in order to make mobile builds
    // smaller. We add it back here to avoid that extra HTTP request.
    selectorEngine: 'acme',

    // Builds can be split into multiple different JavaScript files called "layers". This allows applications to
    // defer loading large sections of code until they are actually required while still allowing multiple modules to
	// be compiled into a single file.
    layers: {
        // This is our main application layer. This layer will normally contain most or all of your application code.
        'app/main': { include: [ 'app/main' ] },

        // In the demo application, we conditionally require app/Dialog on the client-side, so we're building a
        // separate layer containing just that client-side code.
        'app/Dialog': { include: [ 'app/Dialog' ] }
	},

    // Providing hints to the build system allows code to be conditionally removed on a more granular level than
    // simple module dependencies can allow. This is especially useful for creating tiny mobile builds.
    // Keep in mind that dead code removal only happens in minifiers that support it! Currently, ShrinkSafe does not
    // support dead code removal; Closure Compiler and UglifyJS do.
    staticHasFeatures: {
    },

	// Resource tags are functions that provide hints to the compiler about a given file. The first argument is the
	// filename of the file, and the second argument is the module ID for the file.
	resourceTags:{
		// Files that contain test code.
		test: function(filename, mid){
			return false;
		},

		// Files that should be copied as-is without being modified by the build system.
		copyOnly: function(filename, mid){
			return copyOnly(mid);
		},

		// Files that are AMD modules.
		amd: function(filename, mid){
			return !copyOnly(mid) && /\.js$/.test(filename);
		},

		// Files that should not be copied when the "mini" compiler flag is set to true.
		miniExclude: function(filename, mid){
			return false;
		}
	}
};