(function() {
  console.group('Backbone Extend+Class');

  const FooModel = Backbone.Model.extend({
    idAttribute: 'fooId',
    fooName: 'foo',
    getFullName() {
      return 'Hello, ' + this.fooName;
    },

    constructor: function(attr, options) {
      Backbone.Model.apply(this, arguments);

      console.group('FooModel constructor');

      console.log('after invoke super.');
      console.log('this.fooName: %s', this.fooName);
      console.log('this.className: %s', this.idAttribute);

      console.groupEnd();
    }
  });

  class ChildAModel extends FooModel {
    idAttribute = 'childId'
    fooName = 'child'
  };

  class ChildBModel extends FooModel {
    preinitialize() {
      this.idAttribute = 'childId';
      this.fooName = 'child';
    }
  };


  const fm = new FooModel();
  console.log('FooModel', fm);

  const cam = new ChildAModel();
  console.log('ChildAModel', cam);

  const cbm = new ChildBModel();
  console.log('ChildBModel', cbm);

  console.groupEnd();
})();
