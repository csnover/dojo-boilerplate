/**
 * THIS FILE IS A WORK IN PROGRESS AND MOST LIKELY
 * DOES NOT WORK AT THE MOMENT. YOU HAVE BEEN WARNED.
 */
dojo.provide("dbp.Router");

dojo.require("dojo.hash");

/**
 * dbp.Router provides an API for specifying hash-based URLs ("routes") and
 * the functionality associated with each. It allows the routes to include both
 * path and query string parameters which are then available inside the
 * handling function:
 *
 *    /things/:id     ->    #/things/3
 *    /things         ->    #/things?id=3&color=red
 *
 * Defining a route involves providing a path for the route, and a function to
 * run for the route. The function receives two arguments: an object containing
 * the parameters associated with the route, if any; and an object containing
 * information about the route that was run.
 *
 * @author rmurphey
 */

dbp.Router = (function(d){

var routes = [],
    routeCache = {},
    currentHash,

    hasHistoryState = "onpopstate" in window;

return {
  /**
   * Initialize the router with routes
   * @param {Array} routes an array of routes
   */
  init : function(routes) {
    d.subscribe("/dbp/router/go", this, "_go");

    if (!routes || !routes.length) {
      throw "No routes provided to dbp.Router.";
    }

    d.forEach(routes, function(r) {
      this._registerRoute(r.path, r.handler, r.defaultRoute);
    }, this);

    // use the first route as the default if one
    // is not marked as the default
    if (!this.defaultRoute) {
      console.warn("No default route was marked; using first route as default.");
      this.defaultRoute = routes.length && routes[0];
    }

    if (hasHistoryState) {
      d.connect(window, "onpopstate", this, function() {
        this._handle(window.location.hash);
      });
    } else {
      d.subscribe("/dojo/hashchange", this, "_handle");
    }
  },

  /**
   * Redirect to a path
   * @param {String} path
   */
  _go : function(path) {
    if (path.indexOf("#") !== 0) {
      path = "#" + path;
    }

    if (hasHistoryState) {
      history.pushState(null, null, path);
    } else {
      window.location.hash = path;
    }

    this._handle(path);
  },

  /**
   * When a user navigates to a page, this is the function
   * that gets called to figure out what to do with the hash.
   */
  _handle : function(hash) {
    if (hash === this.currentHash) { return; }

    this.currentHash = hash = hash.replace("#","");

    var route = this.currentRoute =
                this._chooseRoute(this._getRouteablePath(hash)) ||
                this._getDefaultRoute(),

        params = this._parseParams(hash);

    route = d.mixin(route, {
      hash : hash,
      params : params
    });

    d.publish("/dbp/router/before", [ route ]);
    route.callback(params, route);
    d.publish("/dbp/router/after", [ route ]);
  },

  /**
   * This is provided as a function so it can be overridden.
   */
  _getDefaultRoute : function() {
    return this.defaultRoute;
  },

  /**
   * Find the route to use for a given path
   */
  _chooseRoute : function(path) {
    var routeablePath;

    if (!this.routeCache[path]) {
      routeablePath = this._getRouteablePath(path);
      d.forEach(routes, function(r) {
        if (routeablePath.match(r.matcher)) { cache[path] = r; }
      });
    }

    return routeCache[path];
  },

  registerRoute : function(path, fn, defaultRoute) {
    var r = {
          path : path,
          handler : fn,
          matcher : this._convertPathToMatcher(path),
          paramNames : this._getParamNames(path)
        };

    routes.push(r);

    if (defaultRoute) { this.defaultRoute = r; }
  },

  /**
   * Given a path, which may be a regex or a string, return a regex
   * that can be used to determine whether to use the associated route
   * to process a given path.
   */
  _convertPathToMatcher : function(route) {

  },

  /**
   * Given a path to which a user navigated, return an object
   * containg the parameter name(s) and value(s)
   */
  _parseParams : function(path) {
    var route = this.currentRoute;
  },

  /**
   * Given a hash that may contain a query string:
   *
   *    #/foo/bar?baz=1
   *
   * Return a string that does not contain the query string
   */
  _getRouteablePath : function(hash) {
    return path.split('?')[0];
  },

  /**
   * Given a route, which could be a string or a regex, return
   * the parameter names expected by the route as an array.
   */
  _getParamNames : function(route) {

  }
};

}(dojo));

/**
 * Example usage
dbp.router.init([
  {
    path : "/foo/:bar", // can be a regex or a string
    handler : function(params) { },
    defaultRoute : true
  }
]);
*/
