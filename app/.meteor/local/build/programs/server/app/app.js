var require = meteorInstall({"imports":{"api":{"stuff":{"index.js":["./stuff.js",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////
//                                                                               //
// imports/api/stuff/index.js                                                    //
//                                                                               //
///////////////////////////////////////////////////////////////////////////////////
                                                                                 //
module.import('./stuff.js');                                                     // 1
///////////////////////////////////////////////////////////////////////////////////

}],"stuff.js":["meteor/mongo","meteor/aldeed:simple-schema",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////
//                                                                               //
// imports/api/stuff/stuff.js                                                    //
//                                                                               //
///////////////////////////////////////////////////////////////////////////////////
                                                                                 //
module.export({                                                                  // 1
  Stuff: function () {                                                           // 1
    return Stuff;                                                                // 1
  },                                                                             // 1
  StuffSchema: function () {                                                     // 1
    return StuffSchema;                                                          // 1
  }                                                                              // 1
});                                                                              // 1
var Mongo = void 0;                                                              // 1
module.import('meteor/mongo', {                                                  // 1
  "Mongo": function (v) {                                                        // 1
    Mongo = v;                                                                   // 1
  }                                                                              // 1
}, 0);                                                                           // 1
var SimpleSchema = void 0;                                                       // 1
module.import('meteor/aldeed:simple-schema', {                                   // 1
  "SimpleSchema": function (v) {                                                 // 1
    SimpleSchema = v;                                                            // 1
  }                                                                              // 1
}, 1);                                                                           // 1
var Stuff = new Mongo.Collection('Stuff');                                       // 6
var StuffSchema = new SimpleSchema({                                             // 11
  name: {                                                                        // 12
    label: 'Name',                                                               // 13
    type: String,                                                                // 14
    optional: false,                                                             // 15
    max: 20,                                                                     // 16
    autoform: {                                                                  // 17
      group: 'Stuff',                                                            // 18
      placeholder: 'Bicycle'                                                     // 19
    }                                                                            // 17
  },                                                                             // 12
  quantity: {                                                                    // 22
    label: 'Quantity',                                                           // 23
    type: Number,                                                                // 24
    optional: false,                                                             // 25
    autoform: {                                                                  // 26
      group: 'Stuff',                                                            // 27
      placeholder: '3'                                                           // 28
    }                                                                            // 26
  }                                                                              // 22
});                                                                              // 11
Stuff.attachSchema(StuffSchema);                                                 // 33
///////////////////////////////////////////////////////////////////////////////////

}]}},"startup":{"both":{"accounts-config.js":["meteor/meteor","meteor/accounts-base",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////
//                                                                               //
// imports/startup/both/accounts-config.js                                       //
//                                                                               //
///////////////////////////////////////////////////////////////////////////////////
                                                                                 //
var Meteor = void 0;                                                             // 1
module.import('meteor/meteor', {                                                 // 1
  "Meteor": function (v) {                                                       // 1
    Meteor = v;                                                                  // 1
  }                                                                              // 1
}, 0);                                                                           // 1
var Accounts = void 0;                                                           // 1
module.import('meteor/accounts-base', {                                          // 1
  "Accounts": function (v) {                                                     // 1
    Accounts = v;                                                                // 1
  }                                                                              // 1
}, 1);                                                                           // 1
                                                                                 //
if (Meteor.isClient) {                                                           // 4
  Accounts.ui.config({                                                           // 5
    passwordSignupFields: 'USERNAME_ONLY'                                        // 6
  });                                                                            // 5
}                                                                                // 8
///////////////////////////////////////////////////////////////////////////////////

}],"index.js":["./accounts-config.js",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////
//                                                                               //
// imports/startup/both/index.js                                                 //
//                                                                               //
///////////////////////////////////////////////////////////////////////////////////
                                                                                 //
module.import('./accounts-config.js');                                           // 1
///////////////////////////////////////////////////////////////////////////////////

}]},"server":{"accounts.js":["meteor/meteor","meteor/accounts-base",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////
//                                                                               //
// imports/startup/server/accounts.js                                            //
//                                                                               //
///////////////////////////////////////////////////////////////////////////////////
                                                                                 //
var Meteor = void 0;                                                             // 1
module.import('meteor/meteor', {                                                 // 1
  "Meteor": function (v) {                                                       // 1
    Meteor = v;                                                                  // 1
  }                                                                              // 1
}, 0);                                                                           // 1
var Accounts = void 0;                                                           // 1
module.import('meteor/accounts-base', {                                          // 1
  "Accounts": function (v) {                                                     // 1
    Accounts = v;                                                                // 1
  }                                                                              // 1
}, 1);                                                                           // 1
                                                                                 //
/* eslint-disable no-console */ /* When running app for first time, pass a settings file to set up a default user account. */if (Meteor.users.find().count() === 0) {
  if (!!Meteor.settings.defaultAccount) {                                        // 8
    Accounts.createUser({                                                        // 9
      username: Meteor.settings.defaultAccount.username,                         // 10
      password: Meteor.settings.defaultAccount.password                          // 11
    });                                                                          // 9
  } else {                                                                       // 13
    console.log('No default user!  Please invoke meteor with a settings file.');
  }                                                                              // 15
}                                                                                // 16
///////////////////////////////////////////////////////////////////////////////////

}],"index.js":["./accounts.js","./stuff.js",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////
//                                                                               //
// imports/startup/server/index.js                                               //
//                                                                               //
///////////////////////////////////////////////////////////////////////////////////
                                                                                 //
module.import('./accounts.js');                                                  // 1
module.import('./stuff.js');                                                     // 1
///////////////////////////////////////////////////////////////////////////////////

}],"stuff.js":["../../api/stuff/stuff.js","meteor/underscore",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////
//                                                                               //
// imports/startup/server/stuff.js                                               //
//                                                                               //
///////////////////////////////////////////////////////////////////////////////////
                                                                                 //
var Stuff = void 0;                                                              // 1
module.import('../../api/stuff/stuff.js', {                                      // 1
  "Stuff": function (v) {                                                        // 1
    Stuff = v;                                                                   // 1
  }                                                                              // 1
}, 0);                                                                           // 1
                                                                                 //
var _ = void 0;                                                                  // 1
                                                                                 //
module.import('meteor/underscore', {                                             // 1
  "_": function (v) {                                                            // 1
    _ = v;                                                                       // 1
  }                                                                              // 1
}, 1);                                                                           // 1
/**                                                                              // 4
 * A list of Stuff to pre-fill the Collection.                                   //
 * @type {*[]}                                                                   //
 */var stuffSeeds = [{                                                           //
  name: 'Basket',                                                                // 9
  quantity: 3                                                                    // 9
}, {                                                                             // 9
  name: 'Bicycle',                                                               // 10
  quantity: 2                                                                    // 10
}]; /**                                                                          // 10
     * Initialize the Stuff collection if empty with seed data.                  //
     */                                                                          //
                                                                                 //
if (Stuff.find().count() === 0) {                                                // 16
  _.each(stuffSeeds, function () {                                               // 17
    function seedStuffs(stuff) {                                                 // 17
      Stuff.insert(stuff);                                                       // 18
    }                                                                            // 19
                                                                                 //
    return seedStuffs;                                                           // 17
  }());                                                                          // 17
}                                                                                // 20
///////////////////////////////////////////////////////////////////////////////////

}]}}},"server":{"main.js":["/imports/startup/server","/imports/startup/both","/imports/api/stuff",function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////
//                                                                               //
// server/main.js                                                                //
//                                                                               //
///////////////////////////////////////////////////////////////////////////////////
                                                                                 //
module.import('/imports/startup/server');                                        // 1
module.import('/imports/startup/both');                                          // 1
module.import('/imports/api/stuff');                                             // 1
///////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json"]});
require("./server/main.js");
//# sourceMappingURL=app.js.map
