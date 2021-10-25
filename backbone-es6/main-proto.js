(function() {
  console.group('Backbone ES6 Class - prototype');

  class FooModel extends Backbone.Model {

    fooName = 'foo';

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

    getFullName() {
      return 'Hello, ' + this.fooName;
    }
  }

  FooModel.prototype.idAttribute = 'idAttrFooProto';

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

  console.log(fm);
  console.log(cm);

  console.groupEnd();

})();
