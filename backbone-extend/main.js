console.group('Backbone Extend');

const BaseModel = Backbone.Model.extend({
  idAttribute: 'fooId',

  fooName: null,

  bar: false,

  /**
   * Cannot be `constructor() {...}`
   */
  constructor(attr, options) {
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

const ChildModel = BaseModel.extend({
  idAttribute: 'childId',
  fooName: 'child',
  bar: true,
});

const GrandChildModel = ChildModel.extend({

});

console.group('Init FooModel');
const fm = new BaseModel();
console.log('foo model', fm);
console.groupEnd();

console.group('Init ChildModel');
const cm = new ChildModel();
console.log('child model', cm);
console.groupEnd();


console.group('Init GrandChildModel');
const gcm = new GrandChildModel();
console.log('grand child model', gcm);
console.log('is instanceof ChildModel', gcm instanceof ChildModel);
console.log('is instanceof BaseModel', gcm instanceof BaseModel);
console.groupEnd();

console.groupEnd();
