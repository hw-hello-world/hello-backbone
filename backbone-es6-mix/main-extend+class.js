/**
 * Refactoring Parent class
 * - to use preinitialize
 * - to use _.result to read properties
 *
 * With that, child class can be converted to ES6 class
 * - convert properties to function
 */
(function() {
  console.group('Backbone ES6 Extend+Class');

  const BaseModel = Backbone.Model.extend({
    idAttribute: 'fooId',

    fooName: null,

    bar: false,

    preinitialize() {
      const fooName = _.result(this, 'fooName');
      if (fooName) {
        this.fooName = fooName + ' o-model';
      } else {
        this.fooName = 'o-model';
      }

      console.log('this.fooName: %s', this.fooName);
      console.log('this.idAttribute: %s', _.result(this, 'idAttribute'));

    },

    constructor: function(attr, options) {
      Backbone.Model.apply(this, arguments);

      const bar = _.result(this, 'bar');
      if (bar) {
        console.log('this.bar: %s', bar);
      }

    },

    getFullName() {
      return 'Hello, ' + this.fooName;
    },

  })

  BaseModel.isCourageModel = true;

  class ChildModel extends BaseModel {
    idAttribute() { return 'childId'; }

    fooName() { return 'child'; }
    // fooName = 'child';

    bar() { return true; }

    getFullName() {
      return 'overrides fullname in child';
    }
  };
  class GC extends ChildModel {}

  console.group('Init FooModel');
  const fm = new BaseModel();
  console.log('foo model', fm);
  console.groupEnd();

  console.group('Init ChildClassModel');
  const cm = new ChildModel();
  console.log('child model', cm);
  console.groupEnd();

  console.groupEnd();

})();
