"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
var _id = /*#__PURE__*/new WeakMap();
var _firstName = /*#__PURE__*/new WeakMap();
var _lastName = /*#__PURE__*/new WeakMap();
var _email = /*#__PURE__*/new WeakMap();
var _password = /*#__PURE__*/new WeakMap();
var _birthdate = /*#__PURE__*/new WeakMap();
var User = /*#__PURE__*/_createClass(
// NOTE: We are using ES 2019 private instance variables (they start with #)
// ES 2019 is not currently supported by all browsers, so this app may only work in Chrome
// But you could use Babel to transpile the code to ES5, and then it should work in all browsers

// INSTANCE VARIABLES

// CONSTRUCTOR
function User(_ref) {
  var id = _ref.id,
    firstName = _ref.firstName,
    lastName = _ref.lastName,
    email = _ref.email,
    password = _ref.password,
    birthdate = _ref.birthdate;
  _classCallCheck(this, User);
  _classPrivateFieldInitSpec(this, _id, {
    writable: true,
    value: void 0
  });
  _classPrivateFieldInitSpec(this, _firstName, {
    writable: true,
    value: void 0
  });
  _classPrivateFieldInitSpec(this, _lastName, {
    writable: true,
    value: void 0
  });
  _classPrivateFieldInitSpec(this, _email, {
    writable: true,
    value: void 0
  });
  _classPrivateFieldInitSpec(this, _password, {
    writable: true,
    value: void 0
  });
  _classPrivateFieldInitSpec(this, _birthdate, {
    writable: true,
    value: void 0
  });
  _classPrivateFieldSet(this, _id, id || 0);
  _classPrivateFieldSet(this, _firstName, firstName);
  _classPrivateFieldSet(this, _lastName, lastName);
  _classPrivateFieldSet(this, _email, email);
  _classPrivateFieldSet(this, _password, password);
  _classPrivateFieldSet(this, _birthdate, birthdate);
}

// SETTERS/GETTERS (aka 'properties' in C#)

// METHODS
);