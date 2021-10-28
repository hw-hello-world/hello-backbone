(function() {
  console.group('Backbone Extend+Class+Extend');

  const ModelExt = Backbone.Model.extend({
    constructor: function(attr, options) {
      this.idAttribute = 'modelExtId';

      _.extend(this, options);

      if (options.className || this.className) {
        this.className += ' foo-container';
      } else {
        this.className = 'foo-container';
      }

      Backbone.Model.apply(this, arguments);
    }
  });

  class BaseModel extends ModelExt {
    getFullName() {
      return 'Hello, ' + this.className;
    }

    constructor(attr, options) {
      super(attr, options);

      console.group('FooModel constructor');
      console.log('after invoke super.');
      console.log('this.className: %s', this.className);
      console.log('this.idAttribute: %s', this.idAttribute);
      console.groupEnd();
    }
  };

  const ChildModel = BaseModel.extend({
    idAttribute: 'childId',
    className: 'child',
  });

  class ChildBModel extends BaseModel{
    idAttribute = 'childB';
    className = 'child';
  }

  const fm = new BaseModel();
  console.log('foo model', fm);

  const cm = new ChildModel();
  console.log('child model', cm);

  const cbm = new ChildBModel();
  console.log('child b model', cbm);


  console.groupEnd();

})();
