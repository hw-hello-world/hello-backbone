/**
 * Doesn't work either.
 * The key problem is probably because ES6 class set properties/fields
 * at instance level instead of parent (prototype),
 * which seems make sense from typical Class/OOP inherint model.
 */
(function() {
  console.group('Backbone ES6 Class - Mulitple Inherent');

  class FooShadowModel extends Backbone.Model {
    idAttribute = 'fooId';

    fooName = 'foo';

    getFullName() {
      return 'Hello, ' + this.fooName;
    }
  }

  class FooModel extends FooShadowModel {
    constructor(attr, options) {
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
  }

  class ChildShadowModel extends FooModel {
    // not able to override parent property
    idAttribute = 'childId';
    fooName = 'child';
    getFullName() {
      return 'overrides fullname in child';
    }
  };

  class ChildModel extends ChildShadowModel {
    constructor(attr, options) {
      super(attr, options)
    }
  }

  const fm = new FooModel();
  const cm = new ChildModel();

  console.log(fm);
  console.log(cm);

  console.groupEnd();

})();
