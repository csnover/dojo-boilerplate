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
 * Example usage
 *
 *    var myRouter = new dbp.Router([
 *      {
 *        path : "/foo/:bar",
 *        handler : function(params) { },
 *        defaultRoute : true
 *      }
 *    ]);
 *
 *    myRouter.init();
 *
 * This router was heavily inspired by Sammy.js, a full-featured router
 * for jQuery projects. http://sammyjs.org/
 */

(function(d){

var routes = [],
    routeCache = {},
    currentPath,
    connections = [],
    subscriptions = [],

    PATH_REPLACER = "([^\/]+)",
    PATH_NAME_MATCHER = /:([\w\d]+)/g,

    hasHistoryState = "onpopstate" in window;

dojo.declare('dbp.Router', null, {
  constructor : function(userRoutes) {
    if (!userRoutes || !userRoutes.length) {
      throw "No routes provided to dbp.Router.";
    }

    if (routes.length) {
      console.warn("An instance of dbp.Router already exists. You may want to create another one, but it's unlikely.");
    }


    d.forEach(userRoutes, function(r) {
      this._registerRoute(r.path, r.handler, r.defaultRoute);
    }, this);

    // use the first route as the default if one
    // is not marked as the default
    if (!this.defaultRoute) {
      this.defaultRoute = userRoutes[0];
    }

  },

  /**
   * Initialization method; looks at current hash and handles,
   * else uses default route to get started
   */
  init : function() {
    this.go(window.location.hash || this.defaultRoute.path);

    if (hasHistoryState) {
      connections.push(d.connect(window, "onpopstate", this, function() {
        this._handle(window.location.hash);
      }));
    } else {
      subscriptions.push(d.subscribe("/dojo/hashchange", this, "_handle"));
    }
  },

  /**
   * Redirect to a path
   * @param {String} path
   */
  go : function(path) {
    path = dojo.trim(path);
    if (!path) { return; }

    this._handle(path);

    if (path.indexOf("#") !== 0) {
      path = "#" + path;
    }

    if (hasHistoryState) {
      history.pushState(null, null, path);
    } else {
      window.location.hash = path;
    }
  },

  /**
   * When the router observes navigation to a new hash, it passes
   * the hash to this function to be handled.
   *
   * @param {String} The hash to which the user navigated
   */
  _handle : function(hash) {
    if (hash === currentPath) { return; }
    currentPath = hash;

    var path = hash.replace("#",""),

        route = this._chooseRoute(this._getRouteablePath(path)) ||
                this.defaultRoute;

        params = this._parseParams(path, route);

    route = d.mixin(route, {
      hash : hash,
      params : params
    });

    route.handler(params, route);
  },

  /**
   * Find the route to use for a given path
   */
  _chooseRoute : function(path) {
    var routeablePath;

    if (!routeCache[path]) {
      routeablePath = this._getRouteablePath(path);
      d.forEach(routes, function(r) {
        if (routeablePath.match(r.matcher)) { routeCache[path] = r; }
      });
    }

    return routeCache[path];
  },

  /**
   * Register a route with the router. Generally only used internally,
   * but exposed for external use as well.
   *
   * @param {Regex|String} path The path pattern to which the route applies
   * @param {Function} fn The handler to use for the route
   * @param {Boolean} defaultRoute Whether the route should be used as
   *                    the default route.
   */
  _registerRoute : function(path, fn, defaultRoute) {
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
   *
   * @private
   * @param {Regex|String} route
   * @returns Regex for determining whether a path matches the route
   * @type {Regex}
   */
  _convertPathToMatcher : function(route) {
    return d.isString(route) ?
      new RegExp("^" + route.replace(PATH_NAME_MATCHER, PATH_REPLACER) + "$") :
      route;
  },

  /**
   * Given a path to which a user navigated, and the route that we've
   * determined should handle the path, return an object containg the parameter
   * name(s) and value(s)
   *
   * @private
   * @param {String} hash The hash to which a user navigated
   * @param {Route} route The route
   * @returns A params object containing parameter keynames and values
   * @type {Object}
   */
  _parseParams : function(hash, route) {
    // TODO
    var parts = hash.split('?'),
        path = parts[0],
        query = parts[1],
        params,
        pathParams,
        _decode = decodeURIComponent;

    params = query ? d.mixin({}, d.queryToObject(query)) : {};

    if ((pathParams = route.matcher.exec(this._getRouteablePath(path))) !== null) {
      // first match is the full path
      pathParams.shift();

      // for each of the matches
      d.forEach(pathParams, function(param, i) {
        // if theres a matching param name
        if (route.paramNames[i]) {
          // set the name to the match
          params[route.paramNames[i]] = _decode(param);
        } else {
          // initialize 'splat'
          if (!params.splat) { params.splat = []; }
          params.splat.push(_decode(param));
        }
      });
    }

    return params;
  },

  /**
   * Given a path that may contain a query string:
   *
   *    /foo/bar?baz=1
   *
   * Return a string that does not contain the query string, so we
   * can use the string for matching to a route.
   *
   * @private
   * @param {String} path
   */
  _getRouteablePath : function(path) {
    return path.split('?')[0];
  },

  /**
   * Given a route, which could be a string or a regex, return
   * the parameter names expected by the route as an array.
   *
   * @param {Regex|String} path The path specified for a route
   * @returns An array of parameter names
   * @type Array
   */
  _getParamNames : function(path) {
    var pathMatch,
        paramNames = [];

    PATH_NAME_MATCHER.lastIndex = 0;

    while ((pathMatch = PATH_NAME_MATCHER.exec(path)) !== null) {
      paramNames.push(pathMatch[1]);
    }

    return paramNames;
  },

  destroy : function() {
    dojo.forEach(connections, d.disconnect);
    dojo.forEach(subscriptions, d.unsubscribe);
    routes = [];
  }
});

}(dojo));

