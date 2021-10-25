console.group('Backbone Extend');

const FooModel = Backbone.Model.extend({
  idAttribute : 'fooId',
  fooName: 'foo',
  getFullName() {
    return 'Hello, ' + this.fooName;
  },

  /**
   * Cannot be `constructor() {...}`
   */
  constructor: function(attr, options) {
    console.group('FooModel constructor');

    console.log('Before invoke super.');
    console.log('this.fooName: %s', this.fooName); // expects 'foo'
    console.log('this.className: %s', this.idAttribute);

    Backbone.Model.apply(this, arguments);

    console.log('after invoke super.');
    console.groupEnd();
  }
});

const ChildModel = FooModel.extend({
  idAttribute : 'childId',
  fooName: 'child',
});

const fm = new FooModel();
const cm = new ChildModel();

console.log(fm);
console.log(cm);

console.groupEnd();
