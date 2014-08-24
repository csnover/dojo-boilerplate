(function () { return this; })().dojoConfig = {
	// Since we are loading the Dojo 1 AMD loader to emulate the normal environment of our modules more closely,
	// we need to disable actions within the loader that will cause requests to occur before the loader is reconfigured;
	// if `async` is not set, the loader will immediately try to synchronously load all of `dojo/main`
	async: true,
	// has-configuration gets shared between Intern and Dojo 1, which currently causes some problems in Intern code
	// if the `config-deferredInstrumentation` has rule is true (it is by default), so force it off
	deferredInstrumentation: false
};

// Learn more about configuring this file at <https://github.com/theintern/intern/wiki/Configuring-Intern>.
// These default settings work OK for most people. The options that *must* be changed below are the
// packages, suites, excludeInstrumentation, and (if you want functional tests) functionalSuites.
define({
	// The port on which the instrumenting proxy will listen
	proxyPort: 9000,

	// A fully qualified URL to the Intern proxy
	proxyUrl: 'http://localhost:9000/',

	// Default desired capabilities for all environments. Individual capabilities can be overridden by any of the
	// specified browser environments in the `environments` array below as well. See
	// https://code.google.com/p/selenium/wiki/DesiredCapabilities for standard Selenium capabilities and
	// https://saucelabs.com/docs/additional-config#desired-capabilities for Sauce Labs capabilities.
	capabilities: {
		'selenium-version': '2.42.2'
	},

	// Browsers to run integration testing against. Note that version numbers must be strings if used with Sauce
	// OnDemand. Options that will be permutated are browserName, version, platform, and platformVersion; any other
	// capabilities options specified for an environment will be copied as-is
	environments: [
		{ browserName: 'internet explorer', version: '11', platform: 'Windows 8.1' },
		{ browserName: 'internet explorer', version: '10', platform: 'Windows 8' },
		{ browserName: 'internet explorer', version: '9', platform: 'Windows 7' },
		{ browserName: 'firefox', version: '28', platform: [ 'OS X 10.9', 'Windows 7', 'Linux' ] },
		{ browserName: 'chrome', version: '34', platform: [ 'OS X 10.9', 'Windows 7', 'Linux' ] },
		{ browserName: 'safari', version: '6', platform: 'OS X 10.8' },
		{ browserName: 'safari', version: '7', platform: 'OS X 10.9' }
	],

	// Maximum number of simultaneous integration tests that should be executed on the remote WebDriver service
	maxConcurrency: Infinity,

	// Name of the tunnel class to use for WebDriver tests
	tunnel: 'SauceLabsTunnel',

	// The desired AMD loader to use when running unit tests (client.html). Here we are using the Dojo loader that
	// our app actually uses to ensure that things are as similar as possible between the test environment and the
	// actual end-user environment
	useLoader: {
		'host-browser': '../../src/dojo/dojo.js'
	},

	// Configuration options for the module loader; any AMD configuration options supported by the specified AMD loader
	// can be used here
	loader: {
		// Packages that should be registered with the loader in each testing environment;
		// to test a built version of the application, `src` can be changed to `dist`
		packages: [
			{ name: 'app', location: 'src/app' },
			{ name: 'dgrid', location: 'src/dgrid' },
			{ name: 'dijit', location: 'src/dijit' },
			{ name: 'dojo', location: 'src/dojo' },
			{ name: 'dojox', location: 'src/dojox' },
			{ name: 'put-selector', location: 'src/put-selector' },
			{ name: 'xstyle', location: 'src/xstyle' },
			{ name: 'tests', location: 'tests' }
		]
	},

	// Non-functional test suite(s) to run in each browser
	suites: [ 'tests/unit/Dialog' ],

	// Functional test suite(s) to run in each browser once non-functional tests are completed
	functionalSuites: [ 'tests/functional/index' ],

	// A regular expression matching URLs to files that should not be included in code coverage analysis
	// In the case of the boilerplate, we only want to know about stuff from `app`
	excludeInstrumentation: /^(?:tests|node_modules|src\/(?:dgrid|dijit|dojo|dojox|put-selector|xstyle))\//
});
