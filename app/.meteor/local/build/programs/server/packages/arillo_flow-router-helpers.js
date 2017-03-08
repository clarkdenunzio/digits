(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var check = Package.check.check;
var Match = Package.check.Match;
var _ = Package.underscore._;
var ActiveRoute = Package['zimme:active-route'].ActiveRoute;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var __coffeescriptShare, FlowRouterHelpers;

(function(){

///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
// packages/arillo_flow-router-helpers/client/helpers.coffee.js                      //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
                                                                                     //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var currentRouteName,                                                                //
    currentRouteOption,                                                              //
    func,                                                                            //
    helpers,                                                                         //
    isSubReady,                                                                      //
    name,                                                                            //
    param,                                                                           //
    pathFor,                                                                         //
    queryParam,                                                                      //
    subsReady,                                                                       //
    urlFor,                                                                          //
    slice = [].slice,                                                                //
    hasProp = {}.hasOwnProperty;                                                     //
                                                                                     //
subsReady = function () {                                                            //
  var subs;                                                                          //
  subs = 1 <= arguments.length ? slice.call(arguments, 0) : [];                      //
                                                                                     //
  if (subs.length === 1) {                                                           //
    return FlowRouter.subsReady();                                                   //
  }                                                                                  //
                                                                                     //
  subs = subs.slice(0, subs.length - 1);                                             //
  return _.reduce(subs, function (memo, sub) {                                       //
    return memo && FlowRouter.subsReady(sub);                                        //
  }, true);                                                                          //
};                                                                                   //
                                                                                     //
pathFor = function (path, view) {                                                    //
  var hashBang, query, ref;                                                          //
                                                                                     //
  if (view == null) {                                                                //
    view = {                                                                         //
      hash: {}                                                                       //
    };                                                                               //
  }                                                                                  //
                                                                                     //
  if (!path) {                                                                       //
    throw new Error('no path defined');                                              //
  }                                                                                  //
                                                                                     //
  if (!view.hash) {                                                                  //
    view = {                                                                         //
      hash: view                                                                     //
    };                                                                               //
  }                                                                                  //
                                                                                     //
  if (((ref = path.hash) != null ? ref.route : void 0) != null) {                    //
    view = path;                                                                     //
    path = view.hash.route;                                                          //
    delete view.hash.route;                                                          //
  }                                                                                  //
                                                                                     //
  query = view.hash.query ? FlowRouter._qs.parse(view.hash.query) : {};              //
  hashBang = view.hash.hash ? view.hash.hash : '';                                   //
  return FlowRouter.path(path, view.hash, query) + (hashBang ? "#" + hashBang : '');
};                                                                                   //
                                                                                     //
urlFor = function (path, view) {                                                     //
  var relativePath;                                                                  //
  relativePath = pathFor(path, view);                                                //
  return Meteor.absoluteUrl(relativePath.substr(1));                                 //
};                                                                                   //
                                                                                     //
param = function (name) {                                                            //
  return FlowRouter.getParam(name);                                                  //
};                                                                                   //
                                                                                     //
queryParam = function (key) {                                                        //
  return FlowRouter.getQueryParam(key);                                              //
};                                                                                   //
                                                                                     //
currentRouteName = function () {                                                     //
  return FlowRouter.getRouteName();                                                  //
};                                                                                   //
                                                                                     //
currentRouteOption = function (optionName) {                                         //
  return FlowRouter.current().route.options[optionName];                             //
};                                                                                   //
                                                                                     //
isSubReady = function (sub) {                                                        //
  if (sub) {                                                                         //
    return FlowRouter.subsReady(sub);                                                //
  }                                                                                  //
                                                                                     //
  return FlowRouter.subsReady();                                                     //
};                                                                                   //
                                                                                     //
helpers = {                                                                          //
  subsReady: subsReady,                                                              //
  pathFor: pathFor,                                                                  //
  urlFor: urlFor,                                                                    //
  param: param,                                                                      //
  queryParam: queryParam,                                                            //
  currentRouteName: currentRouteName,                                                //
  isSubReady: isSubReady,                                                            //
  currentRouteOption: currentRouteOption                                             //
};                                                                                   //
                                                                                     //
if (Meteor.isClient) {                                                               //
  for (name in meteorBabelHelpers.sanitizeForInObject(helpers)) {                    //
    if (!hasProp.call(helpers, name)) continue;                                      //
    func = helpers[name];                                                            //
    Template.registerHelper(name, func);                                             //
  }                                                                                  //
}                                                                                    //
                                                                                     //
if (Meteor.isServer) {                                                               //
  FlowRouterHelpers = {                                                              //
    pathFor: pathFor,                                                                //
    urlFor: urlFor                                                                   //
  };                                                                                 //
}                                                                                    //
///////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
(function (pkg, symbols) {
  for (var s in symbols)
    (s in pkg) || (pkg[s] = symbols[s]);
})(Package['arillo:flow-router-helpers'] = {}, {
  FlowRouterHelpers: FlowRouterHelpers
});

})();
