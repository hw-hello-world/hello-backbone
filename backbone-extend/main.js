(function() {
  console.group('Backbone Extend');

  const FooModel = Backbone.Model.extend({
    idAttribute: 'fooId',

    fooName: null,

    bar: false,

    /**
     * Cannot be `constructor() {...}`
     */
    constructor: function(attr, options) {
      if (this.fooName) {
        this.fooName = this.fooName + ' o-model';
      } else {
        this.fooName = 'o-model';
      }

      console.log('this.fooName: %s', this.fooName);
      console.log('this.idAttribute: %s', this.idAttribute);

      Backbone.Model.apply(this, arguments);

      if (this.bar) {
        console.log('this.bar: %s', this.bar);
      }
    },

    getFullName() {
      return 'Hello, ' + this.fooName;
    },

  });

  const ChildModel = FooModel.extend({
    idAttribute: 'childId',
    fooName: 'child',
    bar: true,
  });

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
