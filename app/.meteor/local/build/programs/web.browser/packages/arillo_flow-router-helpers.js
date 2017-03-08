//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var check = Package.check.check;
var Match = Package.check.Match;
var Template = Package['templating-runtime'].Template;
var _ = Package.underscore._;
var ActiveRoute = Package['zimme:active-route'].ActiveRoute;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var __coffeescriptShare;

(function(){

///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
// packages/arillo_flow-router-helpers/client/template.helpers.js                    //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
                                                                                     //
                                                                                     // 1
Template.__checkName("linkTo");                                                      // 2
Template["linkTo"] = new Template("Template.linkTo", (function() {                   // 3
  var view = this;                                                                   // 4
  return HTML.A({                                                                    // 5
    href: function() {                                                               // 6
      return Spacebars.mustache(view.lookup("pathFor"), view.lookup("."));           // 7
    }                                                                                // 8
  }, Blaze._InOuterTemplateScope(view, function() {                                  // 9
    return Spacebars.include(function() {                                            // 10
      return Spacebars.call(view.templateContentBlock);                              // 11
    });                                                                              // 12
  }));                                                                               // 13
}));                                                                                 // 14
                                                                                     // 15
///////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function(){

///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
// packages/arillo_flow-router-helpers/client/helpers.coffee.js                      //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
                                                                                     //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
var FlowRouterHelpers,                                                               //
    currentRouteName,                                                                //
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
Package['arillo:flow-router-helpers'] = {};

})();
