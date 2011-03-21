dojo.provide('dbp.tests.Router');

dojo.require('dbp.Router');

(function() {

var testVal,

    routes = [
      {
        path : '/test',
        handler : function() {
          testVal = '/test';
        },
        defaultRoute : true
      },
      {
        path : '/test2',
        handler : function() {
          testVal = '/test2';
        }
      },
      {
        path : '/basic',
        handler : function() {
          testVal = 'basic';
        }
      },
      {
        path : '/bar/:baz',
        handler : function(params) {
          testVal = params.baz;
        }
      },
      {
        path : '/bar/:baz/:bim',
        handler : function(params) {
          testVal = params.baz + params.bim;
        }
      },
      {
        path : '/bar/:baz/bim/:bop',
        handler : function(params) {
          testVal = params.baz + params.bop;
        }
      },
      {
        path : /\/splat\/(.*)/,
        handler : function(params) {
          testVal = params.splat[0];
        }
      },
      {
        path : /\/splat\/(.*)\/foo\/(.*)/,
        handler : function(params) {
          testVal = params.splat[0] + ':' + params.splat[1];
      }
    }
  ];

doh.register('dbp.Router', [

  {
    name : "It should handle a hash if one is set when initialized",
    setUp : function() {
      this.router = new dbp.Router(routes);
    },
    runTest : function() {
      window.location.hash = '#/test';
      this.router.init();
      doh.is(testVal, '/test');
    },
    tearDown : function() {
      this.router.destroy();
    }
  },

  {
    name : "It should route the request to the appropriate route with the appropriate parameters",
    setUp : function() {
      this.router = new dbp.Router(routes);
    },
    runTest : function() {
      this.router.go('/bar/test-123');
      doh.is(testVal, 'test-123');

      this.router.go('/basic');
      doh.is(testVal, 'basic');

      this.router.go('/bar/hello/world');
      doh.is(testVal, 'helloworld');

      this.router.go('/bar/testing/bim/123');
      doh.is(testVal, 'testing123');

      this.router.go('/splat/1/2/3');
      doh.is(testVal, '1/2/3');

      this.router.go('/splat/1/2/3/foo/4/5/6');
      doh.is(testVal, '1/2/3:4/5/6');
    },
    tearDown : function() {
      this.router.destroy();
    }
  }

]);

}());
