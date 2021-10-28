(function() {
  console.group('Backbone ES6 Class + functions (works)');

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

  class ChildModel extends FooModel {
    // not able to override parent property
    idAttribute() { return 'childId'; }
    fooName() { return 'child'; }
    bar() { return true; }

    getFullName() {
      return 'overrides fullname in child';
    }
  };

  console.group('Init FooModel');
  const fm = new FooModel();
  console.log('foo model', fm);
  console.groupEnd();

  console.group('Init ChildClassModel');
  const ccm = new ChildModel();
  console.log('child model', ccm);
  console.groupEnd();

  console.groupEnd();

})();
