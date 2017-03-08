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
var Template = Package['templating-runtime'].Template;
var _ = Package.underscore._;
var $ = Package.jquery.$;
var jQuery = Package.jquery.jQuery;
var AutoForm = Package['aldeed:autoform'].AutoForm;
var meteorInstall = Package.modules.meteorInstall;
var Buffer = Package.modules.Buffer;
var process = Package.modules.process;
var Symbol = Package['ecmascript-runtime'].Symbol;
var Map = Package['ecmascript-runtime'].Map;
var Set = Package['ecmascript-runtime'].Set;
var meteorBabelHelpers = Package['babel-runtime'].meteorBabelHelpers;
var Promise = Package.promise.Promise;
var SimpleSchema = Package['aldeed:simple-schema'].SimpleSchema;
var MongoObject = Package['aldeed:simple-schema'].MongoObject;
var Blaze = Package.blaze.Blaze;
var UI = Package.blaze.UI;
var Handlebars = Package.blaze.Handlebars;
var Spacebars = Package.spacebars.Spacebars;
var HTML = Package.htmljs.HTML;

var require = meteorInstall({"node_modules":{"meteor":{"fabienb4:autoform-semantic-ui":{"templates":{"semantic-ui":{"semantic-ui.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/fabienb4_autoform-semantic-ui/templates/semantic-ui/semantic-ui.js                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/* global AutoForm */Template.autoForm.helpers({                                                                       // 1
  atts: function () {                                                                                                  // 4
    // After removing all of the props we know about, everything else should                                           // 5
    // become a form attribute unless it's an array or object.                                                         // 6
    var val = void 0,                                                                                                  // 7
        htmlAttributes = {},                                                                                           // 7
        context = this;                                                                                                // 7
    context = AutoForm.Utility.addClass(context, "ui form");                                                           // 9
    var removeProps = ["schema", "collection", "validation", "doc", "resetOnSuccess", "type", "template", "autosave", "autosaveOnKeyup", "meteormethod", "filter", "autoConvert", "removeEmptyStrings", "trimStrings"]; // Filter out any attributes that have a component prefix
                                                                                                                       //
    function hasComponentPrefix(prop) {                                                                                // 29
      return _.any(AutoForm.Utility.componentTypeList, function (componentType) {                                      // 30
        return prop.indexOf(componentType + "-") === 0;                                                                // 32
      });                                                                                                              // 32
    } // Filter out arrays and objects, which are obviously not meant to be                                            // 34
    // HTML attributes.                                                                                                // 37
                                                                                                                       //
                                                                                                                       //
    for (var prop in meteorBabelHelpers.sanitizeForInObject(context)) {                                                // 38
      if (context.hasOwnProperty(prop) && !_.contains(removeProps, prop) && !hasComponentPrefix(prop)) {               // 39
        val = context[prop];                                                                                           // 41
                                                                                                                       //
        if (!_.isArray(val) && !_.isObject(val)) {                                                                     // 43
          htmlAttributes[prop] = val;                                                                                  // 44
        }                                                                                                              // 45
      }                                                                                                                // 46
    } // By default, we add the `novalidate="novalidate"` attribute to our form,                                       // 47
    // unless the user passes `validation="browser"`.                                                                  // 50
                                                                                                                       //
                                                                                                                       //
    if (this.validation !== "browser" && !htmlAttributes.novalidate) {                                                 // 51
      htmlAttributes.novalidate = "novalidate";                                                                        // 52
    }                                                                                                                  // 53
                                                                                                                       //
    return htmlAttributes;                                                                                             // 55
  }                                                                                                                    // 56
});                                                                                                                    // 3
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"components":{"quickForm":{"template.quickForm.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/fabienb4_autoform-semantic-ui/templates/semantic-ui/components/quickForm/template.quickForm.js             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("quickForm_semanticUI");                                                                          // 2
Template["quickForm_semanticUI"] = new Template("Template.quickForm_semanticUI", (function() {                         // 3
  var view = this;                                                                                                     // 4
  return Blaze._TemplateWith(function() {                                                                              // 5
    return Spacebars.call(Spacebars.dot(view.lookup("."), "qfAutoFormContext"));                                       // 6
  }, function() {                                                                                                      // 7
    return Spacebars.include(view.lookupTemplate("autoForm"), function() {                                             // 8
      return [ "\n\n    ", Spacebars.With(function() {                                                                 // 9
        return Spacebars.call(view.lookup("grouplessFields"));                                                         // 10
      }, function() {                                                                                                  // 11
        return [ "\n      ", Blaze._TemplateWith(function() {                                                          // 12
          return Spacebars.call(view.lookup("quickFieldsAtts"));                                                       // 13
        }, function() {                                                                                                // 14
          return Spacebars.include(view.lookupTemplate("afQuickFields"));                                              // 15
        }), "\n    " ];                                                                                                // 16
      }), "\n\n    ", Blaze.Each(function() {                                                                          // 17
        return Spacebars.call(view.lookup("fieldGroups"));                                                             // 18
      }, function() {                                                                                                  // 19
        return [ "\n      ", HTML.DIV({                                                                                // 20
          class: "ui segment af-fieldGroup"                                                                            // 21
        }, "\n        ", Spacebars.With(function() {                                                                   // 22
          return Spacebars.call(view.lookup("fieldGroupLabel"));                                                       // 23
        }, function() {                                                                                                // 24
          return [ "\n          ", HTML.DIV({                                                                          // 25
            class: "ui top attached label af-fieldGroup-heading"                                                       // 26
          }, Blaze.View("lookup:.", function() {                                                                       // 27
            return Spacebars.mustache(view.lookup("."));                                                               // 28
          })), "\n        " ];                                                                                         // 29
        }), "\n        ", Blaze._TemplateWith(function() {                                                             // 30
          return Spacebars.call(view.lookup("quickFieldsAtts"));                                                       // 31
        }, function() {                                                                                                // 32
          return Spacebars.include(view.lookupTemplate("afQuickFields"));                                              // 33
        }), "\n      "), "\n    " ];                                                                                   // 34
      }), "\n\n    ", Blaze.If(function() {                                                                            // 35
        return Spacebars.call(view.lookup("qfShouldRenderButton"));                                                    // 36
      }, function() {                                                                                                  // 37
        return [ "\n      ", HTML.DIV({                                                                                // 38
          class: "field"                                                                                               // 39
        }, "\n        ", HTML.BUTTON(HTML.Attrs({                                                                      // 40
          type: "submit"                                                                                               // 41
        }, function() {                                                                                                // 42
          return Spacebars.attrMustache(view.lookup("submitButtonAtts"));                                              // 43
        }), "\n        ", Spacebars.With(function() {                                                                  // 44
          return Spacebars.call(Spacebars.dot(view.lookup(".."), "atts", "buttonContent"));                            // 45
        }, function() {                                                                                                // 46
          return [ "\n          ", Blaze.View("lookup:.", function() {                                                 // 47
            return Spacebars.mustache(view.lookup("."));                                                               // 48
          }), "\n        " ];                                                                                          // 49
        }, function() {                                                                                                // 50
          return "\n          Submit\n        ";                                                                       // 51
        }), "\n        "), "\n      "), "\n    " ];                                                                    // 52
      }), "\n  " ];                                                                                                    // 53
    });                                                                                                                // 54
  });                                                                                                                  // 55
}));                                                                                                                   // 56
                                                                                                                       // 57
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"quickForm.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/fabienb4_autoform-semantic-ui/templates/semantic-ui/components/quickForm/quickForm.js                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.quickForm_semanticUI.helpers({                                                                                // 1
  fieldGroupLabel: function () {                                                                                       // 2
    var name = this.name; // if field group name is of the form XY_abcde where "XY" is a number, remove prefix         // 3
                                                                                                                       //
    if (!Number.isNaN(parseInt(name.substr(0, 2), 10)) && name.charAt(2) === "_") {                                    // 6
      name = name.substr(3);                                                                                           // 7
    } // if SimpleSchema.defaultLabel is defined, use it                                                               // 8
                                                                                                                       //
                                                                                                                       //
    if (typeof SimpleSchema.defaultLabel === "function") {                                                             // 11
      return SimpleSchema.defaultLabel(name);                                                                          // 12
    } else {                                                                                                           // 13
      // else, just capitalise name                                                                                    // 14
      return name.charAt(0).toUpperCase() + name.slice(1);                                                             // 15
    }                                                                                                                  // 16
  },                                                                                                                   // 17
  quickFieldsAtts: function () {                                                                                       // 18
    // These are the quickForm attributes that we want to forward to                                                   // 19
    // the afQuickFields component.                                                                                    // 20
    return _.pick(this.atts, "id-prefix");                                                                             // 21
  },                                                                                                                   // 22
  submitButtonAtts: function () {                                                                                      // 23
    var qfAtts = this.atts;                                                                                            // 24
    var atts = {};                                                                                                     // 25
                                                                                                                       //
    if (typeof qfAtts.buttonClasses === "string") {                                                                    // 27
      atts["class"] = qfAtts.buttonClasses;                                                                            // 28
    } else {                                                                                                           // 29
      atts["class"] = "ui positive submit button";                                                                     // 30
    }                                                                                                                  // 31
                                                                                                                       //
    return atts;                                                                                                       // 33
  },                                                                                                                   // 34
  qfAutoFormContext: function () {                                                                                     // 35
    var ctx = _.clone(this.qfAutoFormContext || {});                                                                   // 36
                                                                                                                       //
    ctx = AutoForm.Utility.addClass(ctx, "ui form");                                                                   // 38
    delete ctx["id-prefix"];                                                                                           // 40
    return ctx;                                                                                                        // 42
  }                                                                                                                    // 43
});                                                                                                                    // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"afArrayField":{"template.afArrayField.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/fabienb4_autoform-semantic-ui/templates/semantic-ui/components/afArrayField/template.afArrayField.js       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afArrayField_semanticUI");                                                                       // 2
Template["afArrayField_semanticUI"] = new Template("Template.afArrayField_semanticUI", (function() {                   // 3
  var view = this;                                                                                                     // 4
  return [ HTML.H4({                                                                                                   // 5
    class: "ui top attached block header"                                                                              // 6
  }, "\n    ", Blaze.View("lookup:afFieldLabelText", function() {                                                      // 7
    return Spacebars.mustache(view.lookup("afFieldLabelText"), Spacebars.kw({                                          // 8
      name: Spacebars.dot(view.lookup("."), "atts", "name")                                                            // 9
    }));                                                                                                               // 10
  }), "\n  "), "\n  ", HTML.DIV({                                                                                      // 11
    class: "ui secondary bottom attached segment"                                                                      // 12
  }, "\n    ", Blaze.If(function() {                                                                                   // 13
    return Spacebars.dataMustache(view.lookup("afFieldIsInvalid"), Spacebars.kw({                                      // 14
      name: Spacebars.dot(view.lookup("."), "atts", "name")                                                            // 15
    }));                                                                                                               // 16
  }, function() {                                                                                                      // 17
    return [ "\n      ", HTML.DIV({                                                                                    // 18
      class: "ui pointing red basic label"                                                                             // 19
    }, "\n        ", Blaze.View("lookup:afFieldMessage", function() {                                                  // 20
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("afFieldMessage"), Spacebars.kw({                        // 21
        name: Spacebars.dot(view.lookup("."), "atts", "name")                                                          // 22
      })));                                                                                                            // 23
    }), "\n      "), "\n    " ];                                                                                       // 24
  }), "\n    ", Blaze._TemplateWith(function() {                                                                       // 25
    return {                                                                                                           // 26
      name: Spacebars.call(Spacebars.dot(view.lookup("."), "atts", "name")),                                           // 27
      minCount: Spacebars.call(Spacebars.dot(view.lookup("."), "atts", "minCount")),                                   // 28
      maxCount: Spacebars.call(Spacebars.dot(view.lookup("."), "atts", "maxCount"))                                    // 29
    };                                                                                                                 // 30
  }, function() {                                                                                                      // 31
    return Spacebars.include(view.lookupTemplate("afEachArrayItem"), function() {                                      // 32
      return [ "\n      ", HTML.DIV({                                                                                  // 33
        class: "field autoform-array-item"                                                                             // 34
      }, "\n        ", Blaze.If(function() {                                                                           // 35
        return Spacebars.dataMustache(view.lookup("afArrayFieldHasMoreThanMinimum"), Spacebars.kw({                    // 36
          name: Spacebars.dot(view.lookup(".."), "atts", "name"),                                                      // 37
          minCount: Spacebars.dot(view.lookup(".."), "atts", "minCount"),                                              // 38
          maxCount: Spacebars.dot(view.lookup(".."), "atts", "maxCount")                                               // 39
        }));                                                                                                           // 40
      }, function() {                                                                                                  // 41
        return [ "\n          ", HTML.DIV({                                                                            // 42
          class: "ui mini red corner label autoform-remove-item"                                                       // 43
        }, "\n            ", HTML.I({                                                                                  // 44
          class: "icon minus"                                                                                          // 45
        }), "\n          "), "\n        " ];                                                                           // 46
      }), "\n        ", Blaze._TemplateWith(function() {                                                               // 47
        return {                                                                                                       // 48
          name: Spacebars.call(Spacebars.dot(view.lookup("."), "name")),                                               // 49
          label: Spacebars.call(false),                                                                                // 50
          options: Spacebars.call(view.lookup("afOptionsFromSchema"))                                                  // 51
        };                                                                                                             // 52
      }, function() {                                                                                                  // 53
        return Spacebars.include(view.lookupTemplate("afQuickField"));                                                 // 54
      }), "\n      "), "\n    " ];                                                                                     // 55
    });                                                                                                                // 56
  }), "\n    ", Blaze.If(function() {                                                                                  // 57
    return Spacebars.dataMustache(view.lookup("afArrayFieldHasLessThanMaximum"), Spacebars.kw({                        // 58
      name: Spacebars.dot(view.lookup("."), "atts", "name"),                                                           // 59
      minCount: Spacebars.dot(view.lookup("."), "atts", "minCount"),                                                   // 60
      maxCount: Spacebars.dot(view.lookup("."), "atts", "maxCount")                                                    // 61
    }));                                                                                                               // 62
  }, function() {                                                                                                      // 63
    return [ "\n      ", HTML.DIV({                                                                                    // 64
      class: "field"                                                                                                   // 65
    }, "\n        ", HTML.DIV({                                                                                        // 66
      class: "ui small green icon button autoform-add-item",                                                           // 67
      "data-autoform-field": function() {                                                                              // 68
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "atts", "name"));                                    // 69
      },                                                                                                               // 70
      "data-autoform-mincount": function() {                                                                           // 71
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "atts", "minCount"));                                // 72
      },                                                                                                               // 73
      "data-autoform-maxcount": function() {                                                                           // 74
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "atts", "maxCount"));                                // 75
      }                                                                                                                // 76
    }, "\n          ", HTML.I({                                                                                        // 77
      class: "icon plus"                                                                                               // 78
    }), "\n        "), "\n      "), "\n    " ];                                                                        // 79
  }), "\n  ") ];                                                                                                       // 80
}));                                                                                                                   // 81
                                                                                                                       // 82
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"afFormGroup":{"template.afFormGroup.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/fabienb4_autoform-semantic-ui/templates/semantic-ui/components/afFormGroup/template.afFormGroup.js         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afFormGroup_semanticUI");                                                                        // 2
Template["afFormGroup_semanticUI"] = new Template("Template.afFormGroup_semanticUI", (function() {                     // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV(HTML.Attrs({                                                                                         // 5
    class: function() {                                                                                                // 6
      return [ Spacebars.mustache(view.lookup("afFormGroupClass")), " ", Spacebars.mustache(view.lookup("inputClass")), " field ", Spacebars.mustache(view.lookup("requiredClass")), Blaze.If(function() {
        return Spacebars.dataMustache(view.lookup("afFieldIsInvalid"), Spacebars.kw({                                  // 8
          name: Spacebars.dot(view.lookup("."), "name")                                                                // 9
        }));                                                                                                           // 10
      }, function() {                                                                                                  // 11
        return " error";                                                                                               // 12
      }) ];                                                                                                            // 13
    }                                                                                                                  // 14
  }, function() {                                                                                                      // 15
    return Spacebars.attrMustache(view.lookup("afFormGroupAtts"));                                                     // 16
  }), "\n    ", Blaze.Unless(function() {                                                                              // 17
    return Spacebars.call(view.lookup("skipLabel"));                                                                   // 18
  }, function() {                                                                                                      // 19
    return [ "\n      ", HTML.LABEL(HTML.Attrs(function() {                                                            // 20
      return Spacebars.attrMustache(view.lookup("afFieldLabelAtts"));                                                  // 21
    }), "\n        ", Blaze.If(function() {                                                                            // 22
      return Spacebars.call(Spacebars.dot(view.lookup("."), "labelText"));                                             // 23
    }, function() {                                                                                                    // 24
      return [ "\n          ", Blaze.View("lookup:..labelText", function() {                                           // 25
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "labelText"));                                       // 26
      }), "\n        " ];                                                                                              // 27
    }, function() {                                                                                                    // 28
      return [ "\n          ", Blaze.View("lookup:afFieldLabelText", function() {                                      // 29
        return Spacebars.mustache(view.lookup("afFieldLabelText"), Spacebars.kw({                                      // 30
          name: Spacebars.dot(view.lookup("."), "name")                                                                // 31
        }));                                                                                                           // 32
      }), "\n        " ];                                                                                              // 33
    }), "\n      "), "\n    " ];                                                                                       // 34
  }), "\n    ", Blaze.If(function() {                                                                                  // 35
    return Spacebars.call(view.lookup("leftLabel"));                                                                   // 36
  }, function() {                                                                                                      // 37
    return [ "\n      ", HTML.DIV({                                                                                    // 38
      class: "ui label"                                                                                                // 39
    }, Blaze.View("lookup:leftLabel", function() {                                                                     // 40
      return Spacebars.mustache(view.lookup("leftLabel"));                                                             // 41
    })), "\n    " ];                                                                                                   // 42
  }, function() {                                                                                                      // 43
    return [ "\n      ", Blaze.If(function() {                                                                         // 44
      return Spacebars.call(view.lookup("leftIcon"));                                                                  // 45
    }, function() {                                                                                                    // 46
      return [ "\n        ", HTML.I({                                                                                  // 47
        class: function() {                                                                                            // 48
          return [ Spacebars.mustache(view.lookup("leftIcon")), " icon" ];                                             // 49
        }                                                                                                              // 50
      }), "\n      " ];                                                                                                // 51
    }), "\n    " ];                                                                                                    // 52
  }), "\n    ", Blaze._TemplateWith(function() {                                                                       // 53
    return Spacebars.call(Spacebars.dot(view.lookup("."), "afFieldInputAtts"));                                        // 54
  }, function() {                                                                                                      // 55
    return Spacebars.include(view.lookupTemplate("afFieldInput"));                                                     // 56
  }), "\n    ", Blaze.If(function() {                                                                                  // 57
    return Spacebars.call(view.lookup("rightLabel"));                                                                  // 58
  }, function() {                                                                                                      // 59
    return [ "\n      ", HTML.DIV({                                                                                    // 60
      class: "ui label"                                                                                                // 61
    }, Blaze.View("lookup:rightLabel", function() {                                                                    // 62
      return Spacebars.mustache(view.lookup("rightLabel"));                                                            // 63
    })), "\n    " ];                                                                                                   // 64
  }, function() {                                                                                                      // 65
    return [ "\n      ", Blaze.If(function() {                                                                         // 66
      return Spacebars.call(view.lookup("rightIcon"));                                                                 // 67
    }, function() {                                                                                                    // 68
      return [ "\n        ", HTML.I({                                                                                  // 69
        class: function() {                                                                                            // 70
          return [ Spacebars.mustache(view.lookup("rightIcon")), " icon" ];                                            // 71
        }                                                                                                              // 72
      }), "\n      " ];                                                                                                // 73
    }), "\n    " ];                                                                                                    // 74
  }), "\n    ", Blaze.If(function() {                                                                                  // 75
    return Spacebars.dataMustache(view.lookup("afFieldIsInvalid"), Spacebars.kw({                                      // 76
      name: Spacebars.dot(view.lookup("."), "name")                                                                    // 77
    }));                                                                                                               // 78
  }, function() {                                                                                                      // 79
    return [ "\n      ", HTML.DIV({                                                                                    // 80
      class: "ui pointing red basic label"                                                                             // 81
    }, "\n        ", Blaze.View("lookup:afFieldMessage", function() {                                                  // 82
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("afFieldMessage"), Spacebars.kw({                        // 83
        name: Spacebars.dot(view.lookup("."), "name")                                                                  // 84
      })));                                                                                                            // 85
    }), "\n      "), "\n    " ];                                                                                       // 86
  }), "\n  ");                                                                                                         // 87
}));                                                                                                                   // 88
                                                                                                                       // 89
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"afFormGroup.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/fabienb4_autoform-semantic-ui/templates/semantic-ui/components/afFormGroup/afFormGroup.js                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.afFormGroup_semanticUI.helpers({                                                                              // 1
  skipLabel: function () {                                                                                             // 2
    var self = this;                                                                                                   // 3
    var type = AutoForm.getInputType(self.afFieldInputAtts);                                                           // 4
    return self.skipLabel || type === "boolean-checkbox";                                                              // 6
  },                                                                                                                   // 7
  requiredClass: function () {                                                                                         // 8
    if (this.required) {                                                                                               // 9
      return "required";                                                                                               // 10
    }                                                                                                                  // 11
  },                                                                                                                   // 12
  inputClass: function () {                                                                                            // 13
    var leftLabel = this.afFieldInputAtts.leftLabel;                                                                   // 14
    var rightLabel = this.afFieldInputAtts.rightLabel;                                                                 // 15
    var leftIcon = this.afFieldInputAtts.leftIcon;                                                                     // 16
    var rightIcon = this.afFieldInputAtts.rightIcon;                                                                   // 17
                                                                                                                       //
    if (leftLabel || rightLabel || leftIcon || rightIcon) {                                                            // 19
      var className = "ui";                                                                                            // 20
                                                                                                                       //
      if (leftLabel && rightIcon) {                                                                                    // 22
        className += " labeled icon";                                                                                  // 23
      } else if (leftIcon && rightLabel) {                                                                             // 24
        className += " left icon right labeled";                                                                       // 25
      } else if (leftLabel) {                                                                                          // 26
        className += " labeled";                                                                                       // 27
      } else if (rightLabel) {                                                                                         // 28
        className += " right labeled";                                                                                 // 29
      } else if (leftIcon) {                                                                                           // 30
        className += " left icon";                                                                                     // 31
      } else if (rightIcon) {                                                                                          // 32
        className += " icon";                                                                                          // 33
      }                                                                                                                // 34
                                                                                                                       //
      return className + " fluid input";                                                                               // 36
    }                                                                                                                  // 37
  },                                                                                                                   // 38
  leftLabel: function () {                                                                                             // 39
    return this.afFieldInputAtts.leftLabel;                                                                            // 40
  },                                                                                                                   // 41
  rightLabel: function () {                                                                                            // 42
    return this.afFieldInputAtts.rightLabel;                                                                           // 43
  },                                                                                                                   // 44
  leftIcon: function () {                                                                                              // 45
    return this.afFieldInputAtts.leftIcon;                                                                             // 46
  },                                                                                                                   // 47
  rightIcon: function () {                                                                                             // 48
    return this.afFieldInputAtts.rightIcon;                                                                            // 49
  }                                                                                                                    // 50
});                                                                                                                    // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"afObjectField":{"template.afObjectField.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/fabienb4_autoform-semantic-ui/templates/semantic-ui/components/afObjectField/template.afObjectField.js     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afObjectField_semanticUI");                                                                      // 2
Template["afObjectField_semanticUI"] = new Template("Template.afObjectField_semanticUI", (function() {                 // 3
  var view = this;                                                                                                     // 4
  return [ Spacebars.With(function() {                                                                                 // 5
    return Spacebars.dataMustache(view.lookup("afFieldLabelText"), Spacebars.kw({                                      // 6
      name: Spacebars.dot(view.lookup("."), "name")                                                                    // 7
    }));                                                                                                               // 8
  }, function() {                                                                                                      // 9
    return [ "\n    ", HTML.H4({                                                                                       // 10
      class: "ui top attached block header"                                                                            // 11
    }, Blaze.View("lookup:.", function() {                                                                             // 12
      return Spacebars.mustache(view.lookup("."));                                                                     // 13
    })), "\n  " ];                                                                                                     // 14
  }), "\n  ", HTML.DIV({                                                                                               // 15
    class: function() {                                                                                                // 16
      return [ "ui secondary bottom attached segment form", Blaze.If(function() {                                      // 17
        return Spacebars.dataMustache(view.lookup("afFieldIsInvalid"), Spacebars.kw({                                  // 18
          name: Spacebars.dot(view.lookup("."), "name")                                                                // 19
        }));                                                                                                           // 20
      }, function() {                                                                                                  // 21
        return " error";                                                                                               // 22
      }) ];                                                                                                            // 23
    }                                                                                                                  // 24
  }, "\n    ", Blaze.If(function() {                                                                                   // 25
    return Spacebars.dataMustache(view.lookup("afFieldIsInvalid"), Spacebars.kw({                                      // 26
      name: Spacebars.dot(view.lookup("."), "name")                                                                    // 27
    }));                                                                                                               // 28
  }, function() {                                                                                                      // 29
    return [ "\n      ", HTML.DIV({                                                                                    // 30
      class: "ui pointing red basic label"                                                                             // 31
    }, "\n        ", Blaze.View("lookup:afFieldMessage", function() {                                                  // 32
      return Spacebars.makeRaw(Spacebars.mustache(view.lookup("afFieldMessage"), Spacebars.kw({                        // 33
        name: Spacebars.dot(view.lookup("."), "name")                                                                  // 34
      })));                                                                                                            // 35
    }), "\n      "), "\n    " ];                                                                                       // 36
  }), "\n    ", Blaze._TemplateWith(function() {                                                                       // 37
    return Spacebars.call(view.lookup("quickFieldsAtts"));                                                             // 38
  }, function() {                                                                                                      // 39
    return Spacebars.include(view.lookupTemplate("afQuickFields"));                                                    // 40
  }), "\n  ") ];                                                                                                       // 41
}));                                                                                                                   // 42
                                                                                                                       // 43
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"afObjectField.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/fabienb4_autoform-semantic-ui/templates/semantic-ui/components/afObjectField/afObjectField.js              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.afObjectField_semanticUI.helpers({                                                                            // 1
  quickFieldsAtts: function () {                                                                                       // 2
    return _.pick(this, "name", "id-prefix");                                                                          // 3
  }                                                                                                                    // 4
});                                                                                                                    // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"inputTypes":{"basic-select":{"template.basic-select.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/fabienb4_autoform-semantic-ui/templates/semantic-ui/inputTypes/basic-select/template.basic-select.js       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afBasicSelect_semanticUI");                                                                      // 2
Template["afBasicSelect_semanticUI"] = new Template("Template.afBasicSelect_semanticUI", (function() {                 // 3
  var view = this;                                                                                                     // 4
  return HTML.SELECT(HTML.Attrs(function() {                                                                           // 5
    return Spacebars.attrMustache(Spacebars.dot(view.lookup("."), "atts"));                                            // 6
  }), "\n    ", Blaze.Each(function() {                                                                                // 7
    return Spacebars.call(Spacebars.dot(view.lookup("."), "items"));                                                   // 8
  }, function() {                                                                                                      // 9
    return [ "\n      ", Blaze.If(function() {                                                                         // 10
      return Spacebars.call(Spacebars.dot(view.lookup("."), "optgroup"));                                              // 11
    }, function() {                                                                                                    // 12
      return [ "\n        ", HTML.OPTGROUP({                                                                           // 13
        label: function() {                                                                                            // 14
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "optgroup"));                                      // 15
        }                                                                                                              // 16
      }, "\n          ", Blaze.Each(function() {                                                                       // 17
        return Spacebars.call(Spacebars.dot(view.lookup("."), "items"));                                               // 18
      }, function() {                                                                                                  // 19
        return [ "\n            ", HTML.OPTION(HTML.Attrs(function() {                                                 // 20
          return Spacebars.attrMustache(view.lookup("afSelectOptionAtts"));                                            // 21
        }), Blaze.View("lookup:..label", function() {                                                                  // 22
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "label"));                                         // 23
        })), "\n          " ];                                                                                         // 24
      }), "\n        "), "\n      " ];                                                                                 // 25
    }, function() {                                                                                                    // 26
      return [ "\n        ", HTML.OPTION(HTML.Attrs(function() {                                                       // 27
        return Spacebars.attrMustache(view.lookup("afSelectOptionAtts"));                                              // 28
      }), Blaze.View("lookup:..label", function() {                                                                    // 29
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "label"));                                           // 30
      })), "\n      " ];                                                                                               // 31
    }), "\n    " ];                                                                                                    // 32
  }), "\n  ");                                                                                                         // 33
}));                                                                                                                   // 34
                                                                                                                       // 35
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"basic-select.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/fabienb4_autoform-semantic-ui/templates/semantic-ui/inputTypes/basic-select/basic-select.js                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
AutoForm.addInputType("basic-select", {                                                                                // 1
  template: "afBasicSelect",                                                                                           // 2
  valueOut: function () {                                                                                              // 3
    return this.val();                                                                                                 // 4
  },                                                                                                                   // 5
  valueConverters: {                                                                                                   // 6
    stringArray: AutoForm.valueConverters.stringToStringArray,                                                         // 7
    number: AutoForm.valueConverters.stringToNumber,                                                                   // 8
    numberArray: AutoForm.valueConverters.stringToNumberArray,                                                         // 9
    boolean: AutoForm.valueConverters.stringToBoolean,                                                                 // 10
    booleanArray: AutoForm.valueConverters.stringToBooleanArray,                                                       // 11
    date: AutoForm.valueConverters.stringToDate,                                                                       // 12
    dateArray: AutoForm.valueConverters.stringToDateArray                                                              // 13
  },                                                                                                                   // 6
  contextAdjust: function (context) {                                                                                  // 15
    // can fix issues with some browsers selecting the firstOption instead of the selected option                      // 16
    context.atts.autocomplete = "off";                                                                                 // 17
                                                                                                                       //
    var itemAtts = _.omit(context.atts, "firstOption");                                                                // 19
                                                                                                                       //
    var firstOption = context.atts.firstOption; // build items list                                                    // 20
                                                                                                                       //
    context.items = []; // If a firstOption was provided, add that to the items list first                             // 23
                                                                                                                       //
    if (firstOption !== false) {                                                                                       // 26
      context.items.push({                                                                                             // 27
        name: context.name,                                                                                            // 28
        label: typeof firstOption === "string" ? firstOption : "(Select One)",                                         // 29
        value: "",                                                                                                     // 30
        // _id must be included because it is a special property that                                                  // 31
        // #each uses to track unique list items when adding and removing them                                         // 32
        // See https://github.com/meteor/meteor/issues/2174                                                            // 33
        //                                                                                                             // 34
        // Setting this to an empty string caused problems if option with value                                        // 35
        // 1 was in the options list because Spacebars evaluates "" to 1 and                                           // 36
        // considers that a duplicate.                                                                                 // 37
        // See https://github.com/aldeed/meteor-autoform/issues/656                                                    // 38
        _id: "AUTOFORM_EMPTY_FIRST_OPTION",                                                                            // 39
        selected: false,                                                                                               // 40
        atts: itemAtts                                                                                                 // 41
      });                                                                                                              // 27
    }                                                                                                                  // 43
                                                                                                                       //
    var buildOption = function (option) {                                                                              // 45
      return {                                                                                                         // 45
        name: context.name,                                                                                            // 46
        label: option.label,                                                                                           // 47
        value: option.value,                                                                                           // 48
        htmlAtts: _.omit(option, "label", "value"),                                                                    // 49
        // _id must be included because it is a special property that                                                  // 50
        // #each uses to track unique list items when adding and removing them                                         // 51
        // See https://github.com/meteor/meteor/issues/2174                                                            // 52
        //                                                                                                             // 53
        // The toString() is necessary because otherwise Spacebars evaluates                                           // 54
        // any string to 1 if the other values are numbers, and then considers                                         // 55
        // that a duplicate.                                                                                           // 56
        // See https://github.com/aldeed/meteor-autoform/issues/656                                                    // 57
        _id: option.value.toString(),                                                                                  // 58
        selected: option.value === context.value,                                                                      // 59
        atts: itemAtts                                                                                                 // 60
      };                                                                                                               // 45
    }; // Add all defined options                                                                                      // 45
                                                                                                                       //
                                                                                                                       //
    _.each(context.selectOptions, function (option) {                                                                  // 64
      if (option.optgroup) {                                                                                           // 65
        var subOptions = _.map(option.items, buildOption);                                                             // 66
                                                                                                                       //
        context.items.push({                                                                                           // 68
          optgroup: option.optgroup,                                                                                   // 69
          items: subOptions                                                                                            // 70
        });                                                                                                            // 68
      } else {                                                                                                         // 72
        context.items.push(buildOption(option));                                                                       // 73
      }                                                                                                                // 74
    });                                                                                                                // 75
                                                                                                                       //
    return context;                                                                                                    // 77
  }                                                                                                                    // 78
});                                                                                                                    // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"boolean-checkbox":{"template.boolean-checkbox.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/fabienb4_autoform-semantic-ui/templates/semantic-ui/inputTypes/boolean-checkbox/template.boolean-checkbox. //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afCheckbox_semanticUI");                                                                         // 2
Template["afCheckbox_semanticUI"] = new Template("Template.afCheckbox_semanticUI", (function() {                       // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: function() {                                                                                                // 6
      return [ "ui ", Spacebars.mustache(Spacebars.dot(view.lookup("atts"), "checkboxType")), " checkbox" ];           // 7
    }                                                                                                                  // 8
  }, "\n    ", HTML.INPUT(HTML.Attrs({                                                                                 // 9
    type: "checkbox",                                                                                                  // 10
    value: function() {                                                                                                // 11
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 12
    }                                                                                                                  // 13
  }, function() {                                                                                                      // 14
    return Spacebars.attrMustache(view.lookup("inputAtts"));                                                           // 15
  })), "\n    ", HTML.LABEL(Blaze.View("lookup:afFieldLabelText", function() {                                         // 16
    return Spacebars.mustache(view.lookup("afFieldLabelText"), Spacebars.kw({                                          // 17
      name: Spacebars.dot(view.lookup("."), "name")                                                                    // 18
    }));                                                                                                               // 19
  })), "\n  ");                                                                                                        // 20
}));                                                                                                                   // 21
                                                                                                                       // 22
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"boolean-checkbox.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/fabienb4_autoform-semantic-ui/templates/semantic-ui/inputTypes/boolean-checkbox/boolean-checkbox.js        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.afCheckbox_semanticUI.onRendered(function () {                                                                // 1
  this.$(this.firstNode).checkbox(this.data.atts.settings);                                                            // 2
});                                                                                                                    // 3
Template.afCheckbox_semanticUI.helpers({                                                                               // 5
  inputAtts: function () {                                                                                             // 6
    return _.omit(this.atts, "checkboxType");                                                                          // 7
  }                                                                                                                    // 8
});                                                                                                                    // 5
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"button":{"template.button.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/fabienb4_autoform-semantic-ui/templates/semantic-ui/inputTypes/button/template.button.js                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afInputButton_semanticUI");                                                                      // 2
Template["afInputButton_semanticUI"] = new Template("Template.afInputButton_semanticUI", (function() {                 // 3
  var view = this;                                                                                                     // 4
  return HTML.INPUT(HTML.Attrs({                                                                                       // 5
    type: "button",                                                                                                    // 6
    value: function() {                                                                                                // 7
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 8
    }                                                                                                                  // 9
  }, function() {                                                                                                      // 10
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 11
  }));                                                                                                                 // 12
}));                                                                                                                   // 13
                                                                                                                       // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"button.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/fabienb4_autoform-semantic-ui/templates/semantic-ui/inputTypes/button/button.js                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.afInputButton_semanticUI.helpers({                                                                            // 1
  atts: function () {                                                                                                  // 2
    var atts = _.clone(this.atts); // Add semantic-ui class                                                            // 3
                                                                                                                       //
                                                                                                                       //
    atts = AutoForm.Utility.addClass(atts, "ui button");                                                               // 6
    return atts;                                                                                                       // 8
  }                                                                                                                    // 9
});                                                                                                                    // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"color":{"template.color.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/fabienb4_autoform-semantic-ui/templates/semantic-ui/inputTypes/color/template.color.js                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afInputColor_semanticUI");                                                                       // 2
Template["afInputColor_semanticUI"] = new Template("Template.afInputColor_semanticUI", (function() {                   // 3
  var view = this;                                                                                                     // 4
  return HTML.INPUT(HTML.Attrs({                                                                                       // 5
    type: "color",                                                                                                     // 6
    value: function() {                                                                                                // 7
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 8
    }                                                                                                                  // 9
  }, function() {                                                                                                      // 10
    return Spacebars.attrMustache(Spacebars.dot(view.lookup("."), "atts"));                                            // 11
  }));                                                                                                                 // 12
}));                                                                                                                   // 13
                                                                                                                       // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"date":{"template.date.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/fabienb4_autoform-semantic-ui/templates/semantic-ui/inputTypes/date/template.date.js                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afInputDate_semanticUI");                                                                        // 2
Template["afInputDate_semanticUI"] = new Template("Template.afInputDate_semanticUI", (function() {                     // 3
  var view = this;                                                                                                     // 4
  return HTML.INPUT(HTML.Attrs({                                                                                       // 5
    type: "date",                                                                                                      // 6
    value: function() {                                                                                                // 7
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 8
    }                                                                                                                  // 9
  }, function() {                                                                                                      // 10
    return Spacebars.attrMustache(Spacebars.dot(view.lookup("."), "atts"));                                            // 11
  }));                                                                                                                 // 12
}));                                                                                                                   // 13
                                                                                                                       // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"datetime":{"template.datetime.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/fabienb4_autoform-semantic-ui/templates/semantic-ui/inputTypes/datetime/template.datetime.js               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afInputDateTime_semanticUI");                                                                    // 2
Template["afInputDateTime_semanticUI"] = new Template("Template.afInputDateTime_semanticUI", (function() {             // 3
  var view = this;                                                                                                     // 4
  return HTML.INPUT(HTML.Attrs({                                                                                       // 5
    type: "datetime",                                                                                                  // 6
    value: function() {                                                                                                // 7
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 8
    }                                                                                                                  // 9
  }, function() {                                                                                                      // 10
    return Spacebars.attrMustache(Spacebars.dot(view.lookup("."), "atts"));                                            // 11
  }));                                                                                                                 // 12
}));                                                                                                                   // 13
                                                                                                                       // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"datetime-local":{"template.datetime-local.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/fabienb4_autoform-semantic-ui/templates/semantic-ui/inputTypes/datetime-local/template.datetime-local.js   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afInputDateTimeLocal_semanticUI");                                                               // 2
Template["afInputDateTimeLocal_semanticUI"] = new Template("Template.afInputDateTimeLocal_semanticUI", (function() {   // 3
  var view = this;                                                                                                     // 4
  return HTML.INPUT(HTML.Attrs({                                                                                       // 5
    type: "datetime-local",                                                                                            // 6
    value: function() {                                                                                                // 7
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 8
    }                                                                                                                  // 9
  }, function() {                                                                                                      // 10
    return Spacebars.attrMustache(Spacebars.dot(view.lookup("."), "atts"));                                            // 11
  }));                                                                                                                 // 12
}));                                                                                                                   // 13
                                                                                                                       // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"email":{"template.email.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/fabienb4_autoform-semantic-ui/templates/semantic-ui/inputTypes/email/template.email.js                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afInputEmail_semanticUI");                                                                       // 2
Template["afInputEmail_semanticUI"] = new Template("Template.afInputEmail_semanticUI", (function() {                   // 3
  var view = this;                                                                                                     // 4
  return HTML.INPUT(HTML.Attrs({                                                                                       // 5
    type: "email",                                                                                                     // 6
    value: function() {                                                                                                // 7
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 8
    }                                                                                                                  // 9
  }, function() {                                                                                                      // 10
    return Spacebars.attrMustache(Spacebars.dot(view.lookup("."), "atts"));                                            // 11
  }));                                                                                                                 // 12
}));                                                                                                                   // 13
                                                                                                                       // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"month":{"template.month.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/fabienb4_autoform-semantic-ui/templates/semantic-ui/inputTypes/month/template.month.js                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afInputMonth_semanticUI");                                                                       // 2
Template["afInputMonth_semanticUI"] = new Template("Template.afInputMonth_semanticUI", (function() {                   // 3
  var view = this;                                                                                                     // 4
  return HTML.INPUT(HTML.Attrs({                                                                                       // 5
    type: "month",                                                                                                     // 6
    value: function() {                                                                                                // 7
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 8
    }                                                                                                                  // 9
  }, function() {                                                                                                      // 10
    return Spacebars.attrMustache(Spacebars.dot(view.lookup("."), "atts"));                                            // 11
  }));                                                                                                                 // 12
}));                                                                                                                   // 13
                                                                                                                       // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"number":{"template.number.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/fabienb4_autoform-semantic-ui/templates/semantic-ui/inputTypes/number/template.number.js                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afInputNumber_semanticUI");                                                                      // 2
Template["afInputNumber_semanticUI"] = new Template("Template.afInputNumber_semanticUI", (function() {                 // 3
  var view = this;                                                                                                     // 4
  return HTML.INPUT(HTML.Attrs({                                                                                       // 5
    type: "number",                                                                                                    // 6
    value: function() {                                                                                                // 7
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 8
    }                                                                                                                  // 9
  }, function() {                                                                                                      // 10
    return Spacebars.attrMustache(Spacebars.dot(view.lookup("."), "atts"));                                            // 11
  }));                                                                                                                 // 12
}));                                                                                                                   // 13
                                                                                                                       // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"password":{"template.password.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/fabienb4_autoform-semantic-ui/templates/semantic-ui/inputTypes/password/template.password.js               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afInputPassword_semanticUI");                                                                    // 2
Template["afInputPassword_semanticUI"] = new Template("Template.afInputPassword_semanticUI", (function() {             // 3
  var view = this;                                                                                                     // 4
  return HTML.INPUT(HTML.Attrs({                                                                                       // 5
    type: "password",                                                                                                  // 6
    value: function() {                                                                                                // 7
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 8
    }                                                                                                                  // 9
  }, function() {                                                                                                      // 10
    return Spacebars.attrMustache(Spacebars.dot(view.lookup("."), "atts"));                                            // 11
  }));                                                                                                                 // 12
}));                                                                                                                   // 13
                                                                                                                       // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"radio":{"template.radio.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/fabienb4_autoform-semantic-ui/templates/semantic-ui/inputTypes/radio/template.radio.js                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afRadio_semanticUI");                                                                            // 2
Template["afRadio_semanticUI"] = new Template("Template.afRadio_semanticUI", (function() {                             // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    class: "ui radio checkbox"                                                                                         // 6
  }, "\n    ", HTML.LABEL("\n      ", HTML.INPUT(HTML.Attrs({                                                          // 7
    type: "radio",                                                                                                     // 8
    value: function() {                                                                                                // 9
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 10
    }                                                                                                                  // 11
  }, function() {                                                                                                      // 12
    return Spacebars.attrMustache(Spacebars.dot(view.lookup("."), "atts"));                                            // 13
  })), "\n      ", Blaze.View("lookup:afFieldLabelText", function() {                                                  // 14
    return Spacebars.mustache(view.lookup("afFieldLabelText"), Spacebars.kw({                                          // 15
      name: Spacebars.dot(view.lookup("."), "name")                                                                    // 16
    }));                                                                                                               // 17
  }), "\n    "), "\n  ");                                                                                              // 18
}));                                                                                                                   // 19
                                                                                                                       // 20
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"radio.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/fabienb4_autoform-semantic-ui/templates/semantic-ui/inputTypes/radio/radio.js                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.afRadio_semanticUI.helpers({                                                                                  // 1
  atts: function () {                                                                                                  // 2
    var atts = _.clone(this.atts);                                                                                     // 3
                                                                                                                       //
    if (this.selected) {                                                                                               // 5
      atts.checked = "";                                                                                               // 6
    }                                                                                                                  // 7
                                                                                                                       //
    return atts;                                                                                                       // 9
  }                                                                                                                    // 10
});                                                                                                                    // 1
Template.afRadio_semanticUI.onRendered(function () {                                                                   // 13
  this.$(this.firstNode).checkbox(this.data.atts.settings);                                                            // 14
});                                                                                                                    // 15
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"range":{"template.range.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/fabienb4_autoform-semantic-ui/templates/semantic-ui/inputTypes/range/template.range.js                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afInputRange_semanticUI");                                                                       // 2
Template["afInputRange_semanticUI"] = new Template("Template.afInputRange_semanticUI", (function() {                   // 3
  var view = this;                                                                                                     // 4
  return HTML.INPUT(HTML.Attrs({                                                                                       // 5
    type: "range",                                                                                                     // 6
    value: function() {                                                                                                // 7
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 8
    }                                                                                                                  // 9
  }, function() {                                                                                                      // 10
    return Spacebars.attrMustache(Spacebars.dot(view.lookup("."), "atts"));                                            // 11
  }));                                                                                                                 // 12
}));                                                                                                                   // 13
                                                                                                                       // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"reset":{"template.reset.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/fabienb4_autoform-semantic-ui/templates/semantic-ui/inputTypes/reset/template.reset.js                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afInputReset_semanticUI");                                                                       // 2
Template["afInputReset_semanticUI"] = new Template("Template.afInputReset_semanticUI", (function() {                   // 3
  var view = this;                                                                                                     // 4
  return HTML.INPUT(HTML.Attrs({                                                                                       // 5
    type: "reset",                                                                                                     // 6
    value: function() {                                                                                                // 7
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 8
    }                                                                                                                  // 9
  }, function() {                                                                                                      // 10
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 11
  }));                                                                                                                 // 12
}));                                                                                                                   // 13
                                                                                                                       // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"reset.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/fabienb4_autoform-semantic-ui/templates/semantic-ui/inputTypes/reset/reset.js                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.afInputReset_semanticUI.helpers({                                                                             // 1
  atts: function () {                                                                                                  // 2
    var atts = _.clone(this.atts); // Add semantic-ui class                                                            // 3
                                                                                                                       //
                                                                                                                       //
    atts = AutoForm.Utility.addClass(atts, "ui button");                                                               // 6
    return atts;                                                                                                       // 8
  }                                                                                                                    // 9
});                                                                                                                    // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"search":{"template.search.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/fabienb4_autoform-semantic-ui/templates/semantic-ui/inputTypes/search/template.search.js                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afInputSearch_semanticUI");                                                                      // 2
Template["afInputSearch_semanticUI"] = new Template("Template.afInputSearch_semanticUI", (function() {                 // 3
  var view = this;                                                                                                     // 4
  return HTML.INPUT(HTML.Attrs({                                                                                       // 5
    type: "search",                                                                                                    // 6
    value: function() {                                                                                                // 7
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 8
    }                                                                                                                  // 9
  }, function() {                                                                                                      // 10
    return Spacebars.attrMustache(Spacebars.dot(view.lookup("."), "atts"));                                            // 11
  }));                                                                                                                 // 12
}));                                                                                                                   // 13
                                                                                                                       // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"select":{"template.select.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/fabienb4_autoform-semantic-ui/templates/semantic-ui/inputTypes/select/template.select.js                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afSelect_semanticUI");                                                                           // 2
Template["afSelect_semanticUI"] = new Template("Template.afSelect_semanticUI", (function() {                           // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV(HTML.Attrs(function() {                                                                              // 5
    return Spacebars.attrMustache(view.lookup("divAtts"));                                                             // 6
  }), "\n    ", HTML.INPUT(HTML.Attrs({                                                                                // 7
    type: "hidden",                                                                                                    // 8
    value: function() {                                                                                                // 9
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 10
    }                                                                                                                  // 11
  }, function() {                                                                                                      // 12
    return Spacebars.attrMustache(view.lookup("inputAtts"));                                                           // 13
  })), "\n    ", Blaze.If(function() {                                                                                 // 14
    return Spacebars.call(Spacebars.dot(view.lookup("."), "atts", "placeholder"));                                     // 15
  }, function() {                                                                                                      // 16
    return [ "\n      ", HTML.DIV({                                                                                    // 17
      class: "default text"                                                                                            // 18
    }, Blaze.View("lookup:..atts.placeholder", function() {                                                            // 19
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "atts", "placeholder"));                               // 20
    })), "\n    " ];                                                                                                   // 21
  }, function() {                                                                                                      // 22
    return [ "\n      ", HTML.DIV({                                                                                    // 23
      class: "text"                                                                                                    // 24
    }), "\n    " ];                                                                                                    // 25
  }), HTML.Raw('\n    <i class="dropdown icon"></i>\n    '), HTML.DIV({                                                // 26
    class: "menu"                                                                                                      // 27
  }, "\n      ", Blaze.If(function() {                                                                                 // 28
    return Spacebars.call(view.lookup("showClearButton"));                                                             // 29
  }, function() {                                                                                                      // 30
    return [ "\n        ", HTML.DIV({                                                                                  // 31
      class: "ui fluid compact clear button"                                                                           // 32
    }, HTML.I({                                                                                                        // 33
      class: "erase icon"                                                                                              // 34
    })), "\n      " ];                                                                                                 // 35
  }), "\n      ", Blaze.Each(function() {                                                                              // 36
    return Spacebars.call(Spacebars.dot(view.lookup("."), "items"));                                                   // 37
  }, function() {                                                                                                      // 38
    return [ "\n        ", Spacebars.include(view.lookupTemplate("afSelectRecursive")), "\n      " ];                  // 39
  }), "\n    "), "\n  ");                                                                                              // 40
}));                                                                                                                   // 41
                                                                                                                       // 42
Template.__checkName("afSelectRecursive");                                                                             // 43
Template["afSelectRecursive"] = new Template("Template.afSelectRecursive", (function() {                               // 44
  var view = this;                                                                                                     // 45
  return Blaze.If(function() {                                                                                         // 46
    return Spacebars.call(Spacebars.dot(view.lookup("."), "itemGroup"));                                               // 47
  }, function() {                                                                                                      // 48
    return [ "\n    ", HTML.DIV({                                                                                      // 49
      class: "header"                                                                                                  // 50
    }, Blaze.View("lookup:..itemGroup", function() {                                                                   // 51
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "itemGroup"));                                         // 52
    })), "\n    ", Blaze.Each(function() {                                                                             // 53
      return Spacebars.call(Spacebars.dot(view.lookup("."), "items"));                                                 // 54
    }, function() {                                                                                                    // 55
      return [ "\n      ", Spacebars.include(view.lookupTemplate("afSelectRecursive")), "\n    " ];                    // 56
    }), "\n  " ];                                                                                                      // 57
  }, function() {                                                                                                      // 58
    return [ "\n    ", Blaze.If(function() {                                                                           // 59
      return Spacebars.call(Spacebars.dot(view.lookup("."), "category"));                                              // 60
    }, function() {                                                                                                    // 61
      return [ "\n      ", HTML.DIV({                                                                                  // 62
        class: "item",                                                                                                 // 63
        "data-value": function() {                                                                                     // 64
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "category", "value"));                             // 65
        }                                                                                                              // 66
      }, "\n        ", HTML.I({                                                                                        // 67
        class: "dropdown icon"                                                                                         // 68
      }), "\n        ", HTML.SPAN({                                                                                    // 69
        class: "text"                                                                                                  // 70
      }, Blaze.View("lookup:..category.label", function() {                                                            // 71
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "category", "label"));                               // 72
      })), "\n        ", HTML.DIV({                                                                                    // 73
        class: "menu"                                                                                                  // 74
      }, "\n          ", Blaze.Each(function() {                                                                       // 75
        return Spacebars.call(Spacebars.dot(view.lookup("."), "items"));                                               // 76
      }, function() {                                                                                                  // 77
        return [ "\n            ", Spacebars.include(view.lookupTemplate("afSelectRecursive")), "\n          " ];      // 78
      }), "\n        "), "\n      "), "\n    " ];                                                                      // 79
    }, function() {                                                                                                    // 80
      return [ "\n      ", HTML.DIV(HTML.Attrs({                                                                       // 81
        "data-value": function() {                                                                                     // 82
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                         // 83
        }                                                                                                              // 84
      }, function() {                                                                                                  // 85
        return Spacebars.attrMustache(Spacebars.dot(view.lookup("."), "htmlAtts"));                                    // 86
      }), "\n        ", Blaze.If(function() {                                                                          // 87
        return Spacebars.call(Spacebars.dot(view.lookup("."), "icon"));                                                // 88
      }, function() {                                                                                                  // 89
        return [ "\n          ", HTML.I({                                                                              // 90
          class: function() {                                                                                          // 91
            return Spacebars.mustache(Spacebars.dot(view.lookup("."), "icon"));                                        // 92
          }                                                                                                            // 93
        }), "\n        " ];                                                                                            // 94
      }), "\n        ", Blaze.If(function() {                                                                          // 95
        return Spacebars.call(Spacebars.dot(view.lookup("."), "circularLabel"));                                       // 96
      }, function() {                                                                                                  // 97
        return [ "\n          ", HTML.DIV({                                                                            // 98
          class: function() {                                                                                          // 99
            return [ "ui ", Spacebars.mustache(Spacebars.dot(view.lookup("."), "circularLabel")), " empty circular label" ];
          }                                                                                                            // 101
        }), "\n        " ];                                                                                            // 102
      }), "\n        ", Blaze.If(function() {                                                                          // 103
        return Spacebars.call(Spacebars.dot(view.lookup("."), "description"));                                         // 104
      }, function() {                                                                                                  // 105
        return [ "\n          ", HTML.SPAN({                                                                           // 106
          class: "description"                                                                                         // 107
        }, Blaze.View("lookup:..description", function() {                                                             // 108
          return Spacebars.mustache(Spacebars.dot(view.lookup("."), "description"));                                   // 109
        })), "\n        " ];                                                                                           // 110
      }), "\n        ", Blaze.View("lookup:..label", function() {                                                      // 111
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "label"));                                           // 112
      }), "\n      "), "\n    " ];                                                                                     // 113
    }), "\n  " ];                                                                                                      // 114
  });                                                                                                                  // 115
}));                                                                                                                   // 116
                                                                                                                       // 117
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"select.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/fabienb4_autoform-semantic-ui/templates/semantic-ui/inputTypes/select/select.js                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
AutoForm.addInputType("select", {                                                                                      // 1
	template: "afSelect",                                                                                                 // 2
	valueOut: function () {                                                                                               // 3
		return this.val();                                                                                                   // 4
	},                                                                                                                    // 5
	valueConverters: {                                                                                                    // 6
		stringArray: AutoForm.valueConverters.stringToStringArray,                                                           // 7
		number: AutoForm.valueConverters.stringToNumber,                                                                     // 8
		numberArray: AutoForm.valueConverters.stringToNumberArray,                                                           // 9
		boolean: AutoForm.valueConverters.stringToBoolean,                                                                   // 10
		booleanArray: AutoForm.valueConverters.stringToBooleanArray,                                                         // 11
		date: AutoForm.valueConverters.stringToDate,                                                                         // 12
		dateArray: AutoForm.valueConverters.stringToDateArray                                                                // 13
	},                                                                                                                    // 6
	contextAdjust: function (context) {                                                                                   // 15
		// can fix issues with some browsers selecting the firstOption instead of the selected option                        // 16
		context.atts.autocomplete = "off"; // delete eventual option used in other templates                                 // 17
                                                                                                                       //
		delete context.atts.firstOption;                                                                                     // 20
                                                                                                                       //
		var itemAtts = _.omit(context.atts, "placeholder"); // build items list                                              // 22
                                                                                                                       //
                                                                                                                       //
		context.items = [];                                                                                                  // 25
                                                                                                                       //
		var buildItem = function (item) {                                                                                    // 27
			return {                                                                                                            // 27
				name: context.name,                                                                                                // 28
				label: item.label,                                                                                                 // 29
				icon: item.icon || false,                                                                                          // 30
				description: item.description || false,                                                                            // 31
				value: item.value,                                                                                                 // 32
				htmlAtts: _.extend({                                                                                               // 33
					"class": "item"                                                                                                   // 34
				}, _.omit(item, "label", "value", "icon", "circularLabel", "description", "itemGroup", "category", "items")),      // 34
				// _id must be included because it is a special property that                                                      // 37
				// #each uses to track unique list items when adding and removing them                                             // 38
				// See https://github.com/meteor/meteor/issues/2174                                                                // 39
				//                                                                                                                 // 40
				// The toString() is necessary because otherwise Spacebars evaluates                                               // 41
				// any string to 1 if the other values are numbers, and then considers                                             // 42
				// that a duplicate.                                                                                               // 43
				// See https://github.com/aldeed/meteor-autoform/issues/656                                                        // 44
				_id: item.value.toString(),                                                                                        // 45
				atts: itemAtts                                                                                                     // 46
			};                                                                                                                  // 27
		}; // Add all defined options                                                                                        // 27
                                                                                                                       //
                                                                                                                       //
		_.each(context.selectOptions, function (item) {                                                                      // 50
			if (item.itemGroup) {                                                                                               // 51
				var subItems = _.map(item.items, buildItem);                                                                       // 52
                                                                                                                       //
				context.items.push({                                                                                               // 54
					itemGroup: item.itemGroup,                                                                                        // 55
					items: subItems                                                                                                   // 56
				});                                                                                                                // 54
			} else if (item.category) {                                                                                         // 58
				var _subItems = _.map(item.items, buildItem);                                                                      // 59
                                                                                                                       //
				context.items.push({                                                                                               // 61
					category: item.category,                                                                                          // 62
					items: _subItems                                                                                                  // 63
				});                                                                                                                // 61
			} else {                                                                                                            // 65
				context.items.push(buildItem(item));                                                                               // 66
			}                                                                                                                   // 67
		});                                                                                                                  // 68
                                                                                                                       //
		return context;                                                                                                      // 70
	}                                                                                                                     // 71
});                                                                                                                    // 1
Template.afSelect_semanticUI.helpers({                                                                                 // 74
	divAtts: function () {                                                                                                // 75
		var atts = {                                                                                                         // 76
			"class": "ui dropdown"                                                                                              // 76
		}; // Add custom classes or default                                                                                  // 76
                                                                                                                       //
		if (_.isString(this.atts.class)) {                                                                                   // 79
			atts = AutoForm.Utility.addClass(atts, this.atts.class);                                                            // 80
		} else {                                                                                                             // 81
			atts = AutoForm.Utility.addClass(atts, "fluid selection");                                                          // 82
		} // Add the disabled class if required                                                                              // 83
                                                                                                                       //
                                                                                                                       //
		if (this.atts.disabled === "") {                                                                                     // 86
			atts = AutoForm.Utility.addClass(atts, "disabled");                                                                 // 87
		} // Add search class, also add selection for proper design                                                          // 88
                                                                                                                       //
                                                                                                                       //
		if (this.atts.search || this.atts.fullTextSearch) {                                                                  // 91
			atts = AutoForm.Utility.addClass(atts, "search selection");                                                         // 92
		} // Add multiple class                                                                                              // 93
                                                                                                                       //
                                                                                                                       //
		if (this.atts.multiple) {                                                                                            // 96
			atts = AutoForm.Utility.addClass(atts, "multiple");                                                                 // 97
		}                                                                                                                    // 98
                                                                                                                       //
		return atts;                                                                                                         // 100
	},                                                                                                                    // 101
	inputAtts: function () {                                                                                              // 102
		return _.pick(this.atts, "name", "id", "required", "data-schema-key", "autocomplete", "value");                      // 103
	},                                                                                                                    // 104
	showClearButton: function () {                                                                                        // 105
		return this.atts.required !== "" && !this.atts.multiple;                                                             // 106
	}                                                                                                                     // 107
});                                                                                                                    // 74
Template.afSelect_semanticUI.events({                                                                                  // 110
	"click .ui.clear.button": function (event, template) {                                                                // 111
		template.$(".ui.dropdown").dropdown("clear").dropdown("hide");                                                       // 112
	}                                                                                                                     // 113
});                                                                                                                    // 110
Template.afSelect_semanticUI.onRendered(function () {                                                                  // 116
	var node = this.$(this.firstNode);                                                                                    // 117
	node.dropdown(_.extend({                                                                                              // 119
		fullTextSearch: this.data.atts.fullTextSearch || false,                                                              // 120
		allowAdditions: this.data.atts.allowAdditions || false,                                                              // 121
		maxSelections: this.data.atts.maxSelections || false,                                                                // 122
		allowCategorySelection: this.data.atts.allowCategorySelection || false,                                              // 123
		useLabels: this.data.atts.useLabels === false ? false : true                                                         // 124
	}, this.data.atts.settings));                                                                                         // 119
	this.autorun(function (c) {                                                                                           // 127
		var data = Template.currentData();                                                                                   // 128
                                                                                                                       //
		if (data.value) {                                                                                                    // 130
			node.dropdown("set selected", data.value);                                                                          // 131
			c.stop();                                                                                                           // 132
		}                                                                                                                    // 133
	});                                                                                                                   // 134
});                                                                                                                    // 135
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"select-checkbox":{"template.select-checkbox.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/fabienb4_autoform-semantic-ui/templates/semantic-ui/inputTypes/select-checkbox/template.select-checkbox.js //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afCheckboxGroup_semanticUI");                                                                    // 2
Template["afCheckboxGroup_semanticUI"] = new Template("Template.afCheckboxGroup_semanticUI", (function() {             // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV(HTML.Attrs({                                                                                         // 5
    class: "grouped fields"                                                                                            // 6
  }, function() {                                                                                                      // 7
    return Spacebars.attrMustache(view.lookup("dsk"));                                                                 // 8
  }), "\n  ", Blaze.Each(function() {                                                                                  // 9
    return Spacebars.call(Spacebars.dot(view.lookup("."), "items"));                                                   // 10
  }, function() {                                                                                                      // 11
    return [ "\n    ", HTML.DIV({                                                                                      // 12
      class: "field"                                                                                                   // 13
    }, "\n      ", HTML.DIV({                                                                                          // 14
      class: "ui checkbox"                                                                                             // 15
    }, "\n        ", HTML.INPUT(HTML.Attrs({                                                                           // 16
      type: "checkbox",                                                                                                // 17
      value: function() {                                                                                              // 18
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                           // 19
      }                                                                                                                // 20
    }, function() {                                                                                                    // 21
      return Spacebars.attrMustache(view.lookup("atts"));                                                              // 22
    })), "\n        ", HTML.LABEL(Blaze.View("lookup:label", function() {                                              // 23
      return Spacebars.mustache(view.lookup("label"));                                                                 // 24
    })), "\n      "), "\n    "), "\n  " ];                                                                             // 25
  }), "\n  ");                                                                                                         // 26
}));                                                                                                                   // 27
                                                                                                                       // 28
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"select-checkbox.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/fabienb4_autoform-semantic-ui/templates/semantic-ui/inputTypes/select-checkbox/select-checkbox.js          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.afCheckboxGroup_semanticUI.helpers({                                                                          // 1
  atts: function () {                                                                                                  // 2
    var atts = _.clone(this.atts);                                                                                     // 3
                                                                                                                       //
    if (this.selected) {                                                                                               // 5
      atts.checked = "checked";                                                                                        // 6
    } // remove data-schema-key attribute because we put it                                                            // 7
    // on the entire group                                                                                             // 10
                                                                                                                       //
                                                                                                                       //
    delete atts["data-schema-key"];                                                                                    // 11
    return atts;                                                                                                       // 13
  },                                                                                                                   // 14
  dsk: function () {                                                                                                   // 15
    return {                                                                                                           // 16
      "data-schema-key": this.atts["data-schema-key"]                                                                  // 17
    };                                                                                                                 // 16
  }                                                                                                                    // 19
});                                                                                                                    // 1
Template.afCheckboxGroup_semanticUI.onRendered(function () {                                                           // 22
  this.$(this.firstNode).find(".ui.checkbox").checkbox(this.data.atts.settings);                                       // 23
});                                                                                                                    // 24
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"select-checkbox-inline":{"template.select-checkbox-inline.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/fabienb4_autoform-semantic-ui/templates/semantic-ui/inputTypes/select-checkbox-inline/template.select-chec //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afCheckboxGroupInline_semanticUI");                                                              // 2
Template["afCheckboxGroupInline_semanticUI"] = new Template("Template.afCheckboxGroupInline_semanticUI", (function() {
  var view = this;                                                                                                     // 4
  return HTML.DIV(HTML.Attrs({                                                                                         // 5
    class: "inline fields"                                                                                             // 6
  }, function() {                                                                                                      // 7
    return Spacebars.attrMustache(view.lookup("dsk"));                                                                 // 8
  }), "\n  ", Blaze.Each(function() {                                                                                  // 9
    return Spacebars.call(Spacebars.dot(view.lookup("."), "items"));                                                   // 10
  }, function() {                                                                                                      // 11
    return [ "\n    ", HTML.DIV({                                                                                      // 12
      class: "field"                                                                                                   // 13
    }, "\n      ", HTML.DIV({                                                                                          // 14
      class: "ui checkbox"                                                                                             // 15
    }, "\n        ", HTML.INPUT(HTML.Attrs({                                                                           // 16
      type: "checkbox",                                                                                                // 17
      value: function() {                                                                                              // 18
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                           // 19
      }                                                                                                                // 20
    }, function() {                                                                                                    // 21
      return Spacebars.attrMustache(view.lookup("atts"));                                                              // 22
    })), "\n        ", HTML.LABEL(Blaze.View("lookup:label", function() {                                              // 23
      return Spacebars.mustache(view.lookup("label"));                                                                 // 24
    })), "\n      "), "\n    "), "\n  " ];                                                                             // 25
  }), "\n  ");                                                                                                         // 26
}));                                                                                                                   // 27
                                                                                                                       // 28
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"select-checkbox-inline.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/fabienb4_autoform-semantic-ui/templates/semantic-ui/inputTypes/select-checkbox-inline/select-checkbox-inli //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.afCheckboxGroupInline_semanticUI.helpers({                                                                    // 1
  atts: function () {                                                                                                  // 2
    var atts = _.clone(this.atts);                                                                                     // 3
                                                                                                                       //
    if (this.selected) {                                                                                               // 5
      atts.checked = "checked";                                                                                        // 6
    } // remove data-schema-key attribute because we put it                                                            // 7
    // on the entire group                                                                                             // 10
                                                                                                                       //
                                                                                                                       //
    delete atts["data-schema-key"];                                                                                    // 11
    return atts;                                                                                                       // 13
  },                                                                                                                   // 14
  dsk: function () {                                                                                                   // 15
    return {                                                                                                           // 16
      "data-schema-key": this.atts["data-schema-key"]                                                                  // 17
    };                                                                                                                 // 16
  }                                                                                                                    // 19
});                                                                                                                    // 1
Template.afCheckboxGroupInline_semanticUI.onRendered(function () {                                                     // 22
  this.$(this.firstNode).find(".ui.checkbox").checkbox(this.data.atts.settings);                                       // 23
});                                                                                                                    // 24
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"select-radio":{"template.select-radio.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/fabienb4_autoform-semantic-ui/templates/semantic-ui/inputTypes/select-radio/template.select-radio.js       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afRadioGroup_semanticUI");                                                                       // 2
Template["afRadioGroup_semanticUI"] = new Template("Template.afRadioGroup_semanticUI", (function() {                   // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV(HTML.Attrs({                                                                                         // 5
    class: "grouped fields"                                                                                            // 6
  }, function() {                                                                                                      // 7
    return Spacebars.attrMustache(view.lookup("dsk"));                                                                 // 8
  }), "\n    ", Blaze.Each(function() {                                                                                // 9
    return Spacebars.call(Spacebars.dot(view.lookup("."), "items"));                                                   // 10
  }, function() {                                                                                                      // 11
    return [ "\n      ", HTML.DIV({                                                                                    // 12
      class: "field"                                                                                                   // 13
    }, "\n        ", HTML.DIV({                                                                                        // 14
      class: "ui radio checkbox"                                                                                       // 15
    }, "\n          ", HTML.INPUT(HTML.Attrs({                                                                         // 16
      type: "radio",                                                                                                   // 17
      value: function() {                                                                                              // 18
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                           // 19
      }                                                                                                                // 20
    }, function() {                                                                                                    // 21
      return Spacebars.attrMustache(view.lookup("atts"));                                                              // 22
    })), "\n          ", HTML.LABEL(Blaze.View("lookup:..label", function() {                                          // 23
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "label"));                                             // 24
    })), "\n        "), "\n      "), "\n    " ];                                                                       // 25
  }), "\n  ");                                                                                                         // 26
}));                                                                                                                   // 27
                                                                                                                       // 28
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"select-radio.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/fabienb4_autoform-semantic-ui/templates/semantic-ui/inputTypes/select-radio/select-radio.js                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.afRadioGroup_semanticUI.helpers({                                                                             // 1
  atts: function () {                                                                                                  // 2
    var atts = _.clone(this.atts);                                                                                     // 3
                                                                                                                       //
    if (this.selected) {                                                                                               // 5
      atts.checked = "checked";                                                                                        // 6
    } // remove data-schema-key attribute because we put it                                                            // 7
    // on the entire group                                                                                             // 10
                                                                                                                       //
                                                                                                                       //
    delete atts["data-schema-key"];                                                                                    // 11
    return atts;                                                                                                       // 13
  },                                                                                                                   // 14
  dsk: function () {                                                                                                   // 15
    return {                                                                                                           // 16
      "data-schema-key": this.atts["data-schema-key"]                                                                  // 17
    };                                                                                                                 // 16
  }                                                                                                                    // 19
});                                                                                                                    // 1
Template.afRadioGroup_semanticUI.onRendered(function () {                                                              // 22
  this.$(this.firstNode).find(".ui.radio.checkbox").checkbox(this.data.atts.settings);                                 // 23
});                                                                                                                    // 24
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"select-radio-inline":{"template.select-radio-inline.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/fabienb4_autoform-semantic-ui/templates/semantic-ui/inputTypes/select-radio-inline/template.select-radio-i //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afRadioGroupInline_semanticUI");                                                                 // 2
Template["afRadioGroupInline_semanticUI"] = new Template("Template.afRadioGroupInline_semanticUI", (function() {       // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV(HTML.Attrs({                                                                                         // 5
    class: "inline fields"                                                                                             // 6
  }, function() {                                                                                                      // 7
    return Spacebars.attrMustache(view.lookup("dsk"));                                                                 // 8
  }), "\n    ", Blaze.Each(function() {                                                                                // 9
    return Spacebars.call(Spacebars.dot(view.lookup("."), "items"));                                                   // 10
  }, function() {                                                                                                      // 11
    return [ "\n      ", HTML.DIV({                                                                                    // 12
      class: "field"                                                                                                   // 13
    }, "\n        ", HTML.DIV({                                                                                        // 14
      class: "ui radio checkbox"                                                                                       // 15
    }, "\n          ", HTML.INPUT(HTML.Attrs({                                                                         // 16
      type: "radio",                                                                                                   // 17
      value: function() {                                                                                              // 18
        return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                           // 19
      }                                                                                                                // 20
    }, function() {                                                                                                    // 21
      return Spacebars.attrMustache(view.lookup("atts"));                                                              // 22
    })), "\n          ", HTML.LABEL(Blaze.View("lookup:..label", function() {                                          // 23
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "label"));                                             // 24
    })), "\n        "), "\n      "), "\n    " ];                                                                       // 25
  }), "\n  ");                                                                                                         // 26
}));                                                                                                                   // 27
                                                                                                                       // 28
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"select-radio-inline.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/fabienb4_autoform-semantic-ui/templates/semantic-ui/inputTypes/select-radio-inline/select-radio-inline.js  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.afRadioGroupInline_semanticUI.helpers({                                                                       // 1
  atts: function () {                                                                                                  // 2
    var atts = _.clone(this.atts);                                                                                     // 3
                                                                                                                       //
    if (this.selected) {                                                                                               // 5
      atts.checked = "checked";                                                                                        // 6
    } // remove data-schema-key attribute because we put it                                                            // 7
    // on the entire group                                                                                             // 10
                                                                                                                       //
                                                                                                                       //
    delete atts["data-schema-key"];                                                                                    // 11
    return atts;                                                                                                       // 13
  },                                                                                                                   // 14
  dsk: function () {                                                                                                   // 15
    return {                                                                                                           // 16
      "data-schema-key": this.atts["data-schema-key"]                                                                  // 17
    };                                                                                                                 // 16
  }                                                                                                                    // 19
});                                                                                                                    // 1
Template.afRadioGroupInline_semanticUI.onRendered(function () {                                                        // 22
  this.$(this.firstNode).find(".ui.radio.checkbox").checkbox(this.data.atts.settings);                                 // 23
});                                                                                                                    // 24
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"submit":{"template.submit.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/fabienb4_autoform-semantic-ui/templates/semantic-ui/inputTypes/submit/template.submit.js                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afInputSubmit_semanticUI");                                                                      // 2
Template["afInputSubmit_semanticUI"] = new Template("Template.afInputSubmit_semanticUI", (function() {                 // 3
  var view = this;                                                                                                     // 4
  return HTML.INPUT(HTML.Attrs({                                                                                       // 5
    type: "submit",                                                                                                    // 6
    value: function() {                                                                                                // 7
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 8
    }                                                                                                                  // 9
  }, function() {                                                                                                      // 10
    return Spacebars.attrMustache(view.lookup("atts"));                                                                // 11
  }));                                                                                                                 // 12
}));                                                                                                                   // 13
                                                                                                                       // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"submit.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/fabienb4_autoform-semantic-ui/templates/semantic-ui/inputTypes/submit/submit.js                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
Template.afInputSubmit_semanticUI.helpers({                                                                            // 1
  atts: function () {                                                                                                  // 2
    var atts = _.clone(this.atts); // Add semantic-ui class                                                            // 3
                                                                                                                       //
                                                                                                                       //
    atts = AutoForm.Utility.addClass(atts, "ui positive button");                                                      // 6
    return atts;                                                                                                       // 8
  }                                                                                                                    // 9
});                                                                                                                    // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"tel":{"template.tel.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/fabienb4_autoform-semantic-ui/templates/semantic-ui/inputTypes/tel/template.tel.js                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afInputTel_semanticUI");                                                                         // 2
Template["afInputTel_semanticUI"] = new Template("Template.afInputTel_semanticUI", (function() {                       // 3
  var view = this;                                                                                                     // 4
  return HTML.INPUT(HTML.Attrs({                                                                                       // 5
    type: "tel",                                                                                                       // 6
    value: function() {                                                                                                // 7
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 8
    }                                                                                                                  // 9
  }, function() {                                                                                                      // 10
    return Spacebars.attrMustache(Spacebars.dot(view.lookup("."), "atts"));                                            // 11
  }));                                                                                                                 // 12
}));                                                                                                                   // 13
                                                                                                                       // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"text":{"template.text.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/fabienb4_autoform-semantic-ui/templates/semantic-ui/inputTypes/text/template.text.js                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afInputText_semanticUI");                                                                        // 2
Template["afInputText_semanticUI"] = new Template("Template.afInputText_semanticUI", (function() {                     // 3
  var view = this;                                                                                                     // 4
  return HTML.INPUT(HTML.Attrs({                                                                                       // 5
    type: "text",                                                                                                      // 6
    value: function() {                                                                                                // 7
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 8
    }                                                                                                                  // 9
  }, function() {                                                                                                      // 10
    return Spacebars.attrMustache(Spacebars.dot(view.lookup("."), "atts"));                                            // 11
  }));                                                                                                                 // 12
}));                                                                                                                   // 13
                                                                                                                       // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"textarea":{"template.textarea.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/fabienb4_autoform-semantic-ui/templates/semantic-ui/inputTypes/textarea/template.textarea.js               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afTextarea_semanticUI");                                                                         // 2
Template["afTextarea_semanticUI"] = new Template("Template.afTextarea_semanticUI", (function() {                       // 3
  var view = this;                                                                                                     // 4
  return HTML.TEXTAREA(HTML.Attrs(function() {                                                                         // 5
    return Spacebars.attrMustache(Spacebars.dot(view.lookup("."), "atts"));                                            // 6
  }, {                                                                                                                 // 7
    value: function() {                                                                                                // 8
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 9
    }                                                                                                                  // 10
  }));                                                                                                                 // 11
}));                                                                                                                   // 12
                                                                                                                       // 13
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"time":{"template.time.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/fabienb4_autoform-semantic-ui/templates/semantic-ui/inputTypes/time/template.time.js                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afInputTime_semanticUI");                                                                        // 2
Template["afInputTime_semanticUI"] = new Template("Template.afInputTime_semanticUI", (function() {                     // 3
  var view = this;                                                                                                     // 4
  return HTML.INPUT(HTML.Attrs({                                                                                       // 5
    type: "time",                                                                                                      // 6
    value: function() {                                                                                                // 7
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 8
    }                                                                                                                  // 9
  }, function() {                                                                                                      // 10
    return Spacebars.attrMustache(Spacebars.dot(view.lookup("."), "atts"));                                            // 11
  }));                                                                                                                 // 12
}));                                                                                                                   // 13
                                                                                                                       // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"url":{"template.url.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/fabienb4_autoform-semantic-ui/templates/semantic-ui/inputTypes/url/template.url.js                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afInputUrl_semanticUI");                                                                         // 2
Template["afInputUrl_semanticUI"] = new Template("Template.afInputUrl_semanticUI", (function() {                       // 3
  var view = this;                                                                                                     // 4
  return HTML.INPUT(HTML.Attrs({                                                                                       // 5
    type: "url",                                                                                                       // 6
    value: function() {                                                                                                // 7
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 8
    }                                                                                                                  // 9
  }, function() {                                                                                                      // 10
    return Spacebars.attrMustache(Spacebars.dot(view.lookup("."), "atts"));                                            // 11
  }));                                                                                                                 // 12
}));                                                                                                                   // 13
                                                                                                                       // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"week":{"template.week.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/fabienb4_autoform-semantic-ui/templates/semantic-ui/inputTypes/week/template.week.js                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("afInputWeek_semanticUI");                                                                        // 2
Template["afInputWeek_semanticUI"] = new Template("Template.afInputWeek_semanticUI", (function() {                     // 3
  var view = this;                                                                                                     // 4
  return HTML.INPUT(HTML.Attrs({                                                                                       // 5
    type: "week",                                                                                                      // 6
    value: function() {                                                                                                // 7
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "value"));                                             // 8
    }                                                                                                                  // 9
  }, function() {                                                                                                      // 10
    return Spacebars.attrMustache(Spacebars.dot(view.lookup("."), "atts"));                                            // 11
  }));                                                                                                                 // 12
}));                                                                                                                   // 13
                                                                                                                       // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}}}},{"extensions":[".js",".json",".html",".css"]});
require("./node_modules/meteor/fabienb4:autoform-semantic-ui/templates/semantic-ui/semantic-ui.js");
require("./node_modules/meteor/fabienb4:autoform-semantic-ui/templates/semantic-ui/components/quickForm/template.quickForm.js");
require("./node_modules/meteor/fabienb4:autoform-semantic-ui/templates/semantic-ui/components/quickForm/quickForm.js");
require("./node_modules/meteor/fabienb4:autoform-semantic-ui/templates/semantic-ui/components/afArrayField/template.afArrayField.js");
require("./node_modules/meteor/fabienb4:autoform-semantic-ui/templates/semantic-ui/components/afFormGroup/template.afFormGroup.js");
require("./node_modules/meteor/fabienb4:autoform-semantic-ui/templates/semantic-ui/components/afFormGroup/afFormGroup.js");
require("./node_modules/meteor/fabienb4:autoform-semantic-ui/templates/semantic-ui/components/afObjectField/template.afObjectField.js");
require("./node_modules/meteor/fabienb4:autoform-semantic-ui/templates/semantic-ui/components/afObjectField/afObjectField.js");
require("./node_modules/meteor/fabienb4:autoform-semantic-ui/templates/semantic-ui/inputTypes/basic-select/template.basic-select.js");
require("./node_modules/meteor/fabienb4:autoform-semantic-ui/templates/semantic-ui/inputTypes/basic-select/basic-select.js");
require("./node_modules/meteor/fabienb4:autoform-semantic-ui/templates/semantic-ui/inputTypes/boolean-checkbox/template.boolean-checkbox.js");
require("./node_modules/meteor/fabienb4:autoform-semantic-ui/templates/semantic-ui/inputTypes/boolean-checkbox/boolean-checkbox.js");
require("./node_modules/meteor/fabienb4:autoform-semantic-ui/templates/semantic-ui/inputTypes/button/template.button.js");
require("./node_modules/meteor/fabienb4:autoform-semantic-ui/templates/semantic-ui/inputTypes/button/button.js");
require("./node_modules/meteor/fabienb4:autoform-semantic-ui/templates/semantic-ui/inputTypes/color/template.color.js");
require("./node_modules/meteor/fabienb4:autoform-semantic-ui/templates/semantic-ui/inputTypes/date/template.date.js");
require("./node_modules/meteor/fabienb4:autoform-semantic-ui/templates/semantic-ui/inputTypes/datetime/template.datetime.js");
require("./node_modules/meteor/fabienb4:autoform-semantic-ui/templates/semantic-ui/inputTypes/datetime-local/template.datetime-local.js");
require("./node_modules/meteor/fabienb4:autoform-semantic-ui/templates/semantic-ui/inputTypes/email/template.email.js");
require("./node_modules/meteor/fabienb4:autoform-semantic-ui/templates/semantic-ui/inputTypes/month/template.month.js");
require("./node_modules/meteor/fabienb4:autoform-semantic-ui/templates/semantic-ui/inputTypes/number/template.number.js");
require("./node_modules/meteor/fabienb4:autoform-semantic-ui/templates/semantic-ui/inputTypes/password/template.password.js");
require("./node_modules/meteor/fabienb4:autoform-semantic-ui/templates/semantic-ui/inputTypes/radio/template.radio.js");
require("./node_modules/meteor/fabienb4:autoform-semantic-ui/templates/semantic-ui/inputTypes/radio/radio.js");
require("./node_modules/meteor/fabienb4:autoform-semantic-ui/templates/semantic-ui/inputTypes/range/template.range.js");
require("./node_modules/meteor/fabienb4:autoform-semantic-ui/templates/semantic-ui/inputTypes/reset/template.reset.js");
require("./node_modules/meteor/fabienb4:autoform-semantic-ui/templates/semantic-ui/inputTypes/reset/reset.js");
require("./node_modules/meteor/fabienb4:autoform-semantic-ui/templates/semantic-ui/inputTypes/search/template.search.js");
require("./node_modules/meteor/fabienb4:autoform-semantic-ui/templates/semantic-ui/inputTypes/select/template.select.js");
require("./node_modules/meteor/fabienb4:autoform-semantic-ui/templates/semantic-ui/inputTypes/select/select.js");
require("./node_modules/meteor/fabienb4:autoform-semantic-ui/templates/semantic-ui/inputTypes/select-checkbox/template.select-checkbox.js");
require("./node_modules/meteor/fabienb4:autoform-semantic-ui/templates/semantic-ui/inputTypes/select-checkbox/select-checkbox.js");
require("./node_modules/meteor/fabienb4:autoform-semantic-ui/templates/semantic-ui/inputTypes/select-checkbox-inline/template.select-checkbox-inline.js");
require("./node_modules/meteor/fabienb4:autoform-semantic-ui/templates/semantic-ui/inputTypes/select-checkbox-inline/select-checkbox-inline.js");
require("./node_modules/meteor/fabienb4:autoform-semantic-ui/templates/semantic-ui/inputTypes/select-radio/template.select-radio.js");
require("./node_modules/meteor/fabienb4:autoform-semantic-ui/templates/semantic-ui/inputTypes/select-radio/select-radio.js");
require("./node_modules/meteor/fabienb4:autoform-semantic-ui/templates/semantic-ui/inputTypes/select-radio-inline/template.select-radio-inline.js");
require("./node_modules/meteor/fabienb4:autoform-semantic-ui/templates/semantic-ui/inputTypes/select-radio-inline/select-radio-inline.js");
require("./node_modules/meteor/fabienb4:autoform-semantic-ui/templates/semantic-ui/inputTypes/submit/template.submit.js");
require("./node_modules/meteor/fabienb4:autoform-semantic-ui/templates/semantic-ui/inputTypes/submit/submit.js");
require("./node_modules/meteor/fabienb4:autoform-semantic-ui/templates/semantic-ui/inputTypes/tel/template.tel.js");
require("./node_modules/meteor/fabienb4:autoform-semantic-ui/templates/semantic-ui/inputTypes/text/template.text.js");
require("./node_modules/meteor/fabienb4:autoform-semantic-ui/templates/semantic-ui/inputTypes/textarea/template.textarea.js");
require("./node_modules/meteor/fabienb4:autoform-semantic-ui/templates/semantic-ui/inputTypes/time/template.time.js");
require("./node_modules/meteor/fabienb4:autoform-semantic-ui/templates/semantic-ui/inputTypes/url/template.url.js");
require("./node_modules/meteor/fabienb4:autoform-semantic-ui/templates/semantic-ui/inputTypes/week/template.week.js");

/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['fabienb4:autoform-semantic-ui'] = {};

})();
