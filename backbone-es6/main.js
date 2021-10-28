// (function() {
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
console.group('Backbone ES6 Class');

class FooModel extends Backbone.Model {
  idAttribute = 'fooId';

  // static fooName = 'foo'; // equivalent to FooModel.fooName = 'xx'
  //
  fooName = 'foo';

  constructor(attr, options) {
    if (this.fooName) {

    }
    super(attr, options);
    console.group('FooModel constructor');
    console.log('after invoke super.');

    // expects 'foo'
    // works in green browsers (chrome, ff, safari)
    console.log('this.idAttribute: %s', this.idAttribute);
    console.log('this.fooName: %s', this.fooName);
    console.log('this.getFullName: %s', this.getFullName());

    console.groupEnd();
  }

  getFullName() {
    return 'Hello, ' + this.fooName;
  }
}

class ChildModel extends FooModel {
  // not able to override parent property
  idAttribute = 'childId';
  fooName = 'child';
  getFullName() {
    return 'overrides fullname in child';
  }
};

const fm = new FooModel();
const cm = new ChildModel();

// Backbone.Model.prototype.idAttribute = 'hackIdAttr';
// console.log(fm.idAttribute);
// console.log(cm.idAttribute);

console.log(fm);
console.log(cm);

console.groupEnd();

// })();
