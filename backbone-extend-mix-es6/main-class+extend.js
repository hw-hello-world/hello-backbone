(function() {
  console.group('Backbone Class+Extend');

  class FooModel extends Backbone.Model {
    getFullName() {
      return 'Hello, ' + this.fooName;
    }

    preinitialize() {
      console.log('pre initialize');
      this.idAttribute = 'fooId';
      this.fooName = 'foo'
    }

    constructor(attr, options) {
      super(attr, options);
      console.group('FooModel constructor');

      console.log('after invoke super.');
      console.log('this.fooName: %s', this.fooName); // expects 'foo'
      console.log('this.className: %s', this.idAttribute);

      console.groupEnd();
    }
  };

  const ChildModel = FooModel.extend({
    idAttribute: 'childId',
    fooName: 'child',
    constructor: function () {
      FooModel.prototype.constructor.apply(this, arguments);
    }
  });

  const fm = new FooModel();
  console.log('foo model', fm);

  const cm = new ChildModel();
  console.log('child model', ChildModel);
  console.log('child model', cm);

  console.groupEnd();

})();
