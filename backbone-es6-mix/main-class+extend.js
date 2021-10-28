/**
 * Refactoring Parent class
 * - use preinitialize
 * - use _.result to read properties
 * - convert to ES6 class
 *
 * Child class
 * - can still using `.extend` without any code changes.
 */

(function() {
  console.group('Backbone ES6 Class+Extend');

  class FooModel extends Backbone.Model {

    idAttribute() { return 'fooId'; }

    fooName() { return null; }

    bar() { return false; }

    preinitialize() {
      const fooName = _.result(this, 'fooName');
      if (fooName) {
        this.fooName = fooName + ' o-model';
      } else {
        this.fooName = 'o-model';
      }

      console.log('this.fooName: %s', this.fooName);
      console.log('this.idAttribute: %s', _.result(this, 'idAttribute'));
    }

    constructor(attr, options) {
      super(attr, options);

      const bar = _.result(this, 'bar');
      if (bar) {
        console.log('this.bar: %s', bar);
      }

    }

    getFullName() {
      return 'Hello, ' + this.fooName;
    }
  }

  const ChildModel = FooModel.extend({
    // not able to override parent property
    idAttribute: 'childId',
    fooName: 'child',
    bar: true,

    getFullName() {
      return 'overrides fullname in child';
    }
  });

  console.group('Init FooModel');
  const fm = new FooModel();
  console.log('foo model', fm);
  console.groupEnd();

  console.group('Init ChildModel');
  const ccm = new ChildModel();
  console.log('child model', ccm);
  console.groupEnd();

  console.groupEnd();

})();


