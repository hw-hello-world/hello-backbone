(function() {
  console.group('Backbone Extend+Class');

  const FooModel = Backbone.Model.extend({
    idAttribute: 'fooId',
    className: 'foo',
    getFullName() {
      return 'Hello, ' + this.className;
    },

    constructor: function(attr, options) {
      Backbone.Model.apply(this, arguments);

      console.group('FooModel constructor');

      console.log('after invoke super.');
      console.log('this.className: %s', this.className);
      console.log('this.idAttribute: %s', this.idAttribute);

      console.groupEnd();
    }
  });

  class ChildAModel extends FooModel {
    idAttribute = 'childId'
    className = 'child'
  };

  class ChildBModel extends FooModel {
    preinitialize() {
      this.idAttribute = 'childId';
      this.className = 'child';
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
