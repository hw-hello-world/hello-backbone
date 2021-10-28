(function() {
  /**
   * Issue 1: not able to override parent fields
   *   - e.g. override idAttribute (at child) doesn't take effect at constructor (parent)
   *          but works fine at instance level.
   *   - override function works
   *   - root problem is in ES Class, methods belong to prototype but fields belong to instance
   * https://github.com/tc39/proposal-class-public-fields/issues/59
   * https://github.com/tc39/proposal-class-fields/issues/123
   * https://github.com/tc39/proposal-class-fields
   */
  console.group('Backbone ES6 Class (broken)');

  class FooModel extends Backbone.Model {

    idAttribute = 'fooId';

    fooName = null;
    // static fooName = 'foo'; // equivalent to FooModel.fooName = 'xx'

    bar = false

    preinitialize() {
      if (this.fooName) {
        this.fooName = this.fooName + ' o-model';
      } else {
        this.fooName = 'o-model';
      }

      console.log('this.fooName: %s', this.fooName);
      console.log('this.idAttribute: %s', this.idAttribute);
    }

    constructor(attr, options) {
      super(attr, options);

      if (this.bar) {
        console.log('this.bar: %s', this.bar);
      }

    }

    getFullName() {
      return 'Hello, ' + this.fooName;
    }
  }

  class ChildModel extends FooModel {
    // not able to override parent property
    idAttribute = 'childId';
    fooName = 'child';
    bar = true;
    getFullName() {
      return 'overrides fullname in child';
    }
  };

  console.group('Init FooModel');
  const fm = new FooModel();
  console.log('foo model', fm);
  console.groupEnd();

  console.group('Init ChildModel');
  const cm = new ChildModel();
  console.log('child model', cm);
  console.groupEnd();


  console.groupEnd();

})();
