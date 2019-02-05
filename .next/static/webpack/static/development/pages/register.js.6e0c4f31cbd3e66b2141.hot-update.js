webpackHotUpdate("static/development/pages/register.js",{

/***/ "./components/fields/InputField.tsx":
/*!******************************************!*\
  !*** ./components/fields/InputField.tsx ***!
  \******************************************/
/*! exports provided: InputField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputField", function() { return InputField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/sebastianhiguita/Desktop/typescript/typescript-nextjs-graphql-series/components/fields/InputField.tsx";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


var InputField = function InputField(_ref) {
  var field = _ref.field,
      _ref$form = _ref.form,
      errors = _ref$form.errors,
      touched = _ref$form.touched,
      props = _objectWithoutProperties(_ref, ["field", "form"]);

  var errorMessage = touched[field.name] && errors[field.name];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({}, field, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })), errorMessage);
};

/***/ })

})
//# sourceMappingURL=register.js.6e0c4f31cbd3e66b2141.hot-update.js.map