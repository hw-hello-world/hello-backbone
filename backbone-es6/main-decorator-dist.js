"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

(function () {
  var _dec, _class, _dec2, _class2;

  function props(value) {
    return function dec(target, key, description) {
      _.extend(target.prototype, value);
    };
  }

  console.group('Backbone ES6 class - decorator');
  var FooModel = (_dec = props({
    idAttribute: 'fooId',
    fooName: 'foo'
  }), _dec(_class = /*#__PURE__*/function (_Backbone$Model) {
    _inherits(FooModel, _Backbone$Model);

    var _super = _createSuper(FooModel);

    function FooModel(attr, options) {
      var _this;

      _classCallCheck(this, FooModel);

      _this = _super.call(this, attr, options);
      console.group('FooModel constructor');
      console.log('after invoke super.'); // expects 'foo'
      // works in green browsers (chrome, ff, safari)

      console.log('this.idAttribute: %s', _this.idAttribute);
      console.log('this.fooName: %s', _this.fooName);
      console.log('this.getFullName: %s', _this.getFullName());
      console.groupEnd();
      return _this;
    }

    _createClass(FooModel, [{
      key: "getFullName",
      value: function getFullName() {
        return 'Hello, ' + this.fooName;
      }
    }]);

    return FooModel;
  }(Backbone.Model)) || _class);
  var ChildModel = (_dec2 = props({
    idAttribute: 'childId',
    fooName: 'child'
  }), _dec2(_class2 = /*#__PURE__*/function (_FooModel) {
    _inherits(ChildModel, _FooModel);

    var _super2 = _createSuper(ChildModel);

    function ChildModel() {
      _classCallCheck(this, ChildModel);

      return _super2.apply(this, arguments);
    }

    _createClass(ChildModel, [{
      key: "getFullName",
      value: function getFullName() {
        return 'overrides fullname in child';
      }
    }]);

    return ChildModel;
  }(FooModel)) || _class2);
  ;
  var fm = new FooModel();
  var cm = new ChildModel();
  console.log(fm);
  console.log(cm);
  console.groupEnd();
})();
