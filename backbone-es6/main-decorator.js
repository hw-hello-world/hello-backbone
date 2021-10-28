(function() {
  function props(value) {
    return function dec(target, key, description) {
      _.extend(target.prototype, value);
    }
  }

  console.group('Backbone ES6 Class + decorator (works)');

  @props({
    idAttribute: 'fooId',
    fooName: null,
  })
  class FooModel extends Backbone.Model {

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

  FooModel.prototype.idAttribute = 'fooId';
  FooModel.prototype.fooName = null;
  FooModel.prototype.bar = false;

  @props({
    idAttribute: 'childId',
    fooName: 'child'
  })
  class ChildModel extends FooModel {
    getFullName() {
      return 'overrides fullname in child';
    }
  };

  ChildModel.prototype.idAttribute = 'childId';
  ChildModel.prototype.fooName = 'child';
  ChildModel.prototype.bar = true;

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
