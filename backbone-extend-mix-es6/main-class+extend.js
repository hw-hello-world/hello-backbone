(function() {
  console.group('Backbone Class+Extend');

  class FooModel extends Backbone.Model {
    getFullName() {
      return 'Hello, ' + this.className;
    }

    preinitialize() {
      console.log('pre initialize');
      this.idAttribute = 'fooId';
      this.className = null;
    }

    constructor(attr, options) {
      super(attr, options);
      console.group('FooModel constructor');

      console.log('after invoke super.');
      console.log('this.className: %s', this.className);
      console.log('this.idAttribute: %s', this.idAttribute);


      if (this.className) {
        this.className += ' foo-container';
      } else {
        this.className = 'foo-container';
      }
      console.groupEnd();
    }
  };

  const ChildAModel = FooModel.extend({
    // NOTE: override properties doesn't work
    // as `preinitialize` set value to `this` context.
    // those properties are actually living at prototype (parent context)
    idAttribute: 'childId',
    className: 'child',
  });

  const fm = new FooModel();
  console.log('foo model', fm);
  console.log('foo model', fm.className);


  // NOTE: this doesn't work as FooModel is a class
  // and cannot be invoke via Backbone.extend
  // Unless compile down to ES5: https://babeljs.io/repl/
  // TODO: integrates babel
  //
  // const cm = new ChildModel();
  console.log('Child model', ChildAModel);
  // console.log('child model', cm);
  // console.log('child model', cm.className);

  console.groupEnd();

})();
