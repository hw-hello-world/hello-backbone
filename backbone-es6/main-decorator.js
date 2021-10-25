(function() {
  function props(value) {
    return function dec(target, key, description) {
      _.extend(target.prototype, value);
    }
  }

  console.group('Backbone ES6 class - decorator');

  @props({
    idAttribute: 'fooId',
    fooName: 'foo',
  })
  class FooModel extends Backbone.Model {

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


  @props({
    idAttribute: 'childId',
    fooName: 'child'
  })
  class ChildModel extends FooModel {
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
