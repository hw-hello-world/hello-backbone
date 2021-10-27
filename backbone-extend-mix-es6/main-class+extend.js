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
      console.log('this.fooName: %s', this.fooName);
      console.log('this.className: %s', this.idAttribute);

      console.groupEnd();
    }
  };

  const ChildModel = FooModel.extend({
    // NOTE: override properties doesn't work
    // as `preinitialize` set value to `this` context.
    // those properties are actually living at prototype (parent context)
    idAttribute: 'childId',
    fooName: 'child',
  });

  const fm = new FooModel();
  console.log('foo model', fm);

  // NOTE: this doesn't work as FooModel is a class
  // and cannot be invoke via Backbone.extend
  // Unless compile down to ES5


  // const cm = new ChildModel();
  console.log('child model', ChildModel);
  // console.log('child model', cm);

  console.groupEnd();

})();
