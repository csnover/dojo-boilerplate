require({
	baseUrl: 'js/',
	isDebug: true,

	deps: [ 'app' ],

	packages: [
		{ name: 'dojo', location: 'dojo', lib: '.' },
		{ name: 'dijit', location: 'dijit', lib: '.' },
		{ name: 'dojox', location: 'dojox', lib: '.' },
		{ name: 'app', location: 'app', lib: '.' },
		{ name: 'dbp', location: 'dbp', lib: '.' }
	],

	build: {
		action: 'clean,release',
		basePath: '..',
		baseUrl: undefined,
		cssOptimize: 'comments',
		destBasePath: '../../dist',
		destPackageBasePath: '../dist/js',
		isDebug: false,
		mini: true,
		optimize: 'shrinksafe',
		stripConsole: 'all'
	}
});