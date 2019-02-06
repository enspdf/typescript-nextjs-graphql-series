module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout.tsx":
/*!*******************************!*\
  !*** ./components/Layout.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/sebastianhiguita/Desktop/typescript/typescript-nextjs-graphql-series/components/Layout.tsx";




var Layout = function Layout(_ref) {
  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? "This is the default title" : _ref$title;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Home")), " ", "|", " ", react__WEBPACK_IMPORTED_MODULE_0__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/hello",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Hello")), " ", "|", " ", react__WEBPACK_IMPORTED_MODULE_0__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/register",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Register")), " ", "|", " ", react__WEBPACK_IMPORTED_MODULE_0__["createElement"](next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Login")), " ", "|", " ")), children, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("footer", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "I'm here to stay (Footer)")));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./generated/apolloComponents.tsx":
/*!****************************************!*\
  !*** ./generated/apolloComponents.tsx ***!
  \****************************************/
/*! exports provided: ConfirmUserDocument, ConfirmUserComponent, ConfirmUserHOC, LoginDocument, LoginComponent, LoginHOC, RegisterDocument, RegisterComponent, RegisterHOC, HelloDocument, HelloComponent, HelloHOC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmUserDocument", function() { return ConfirmUserDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmUserComponent", function() { return ConfirmUserComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmUserHOC", function() { return ConfirmUserHOC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDocument", function() { return LoginDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginHOC", function() { return LoginHOC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterDocument", function() { return RegisterDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterHOC", function() { return RegisterHOC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelloDocument", function() { return HelloDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelloComponent", function() { return HelloComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelloHOC", function() { return HelloHOC; });
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/sebastianhiguita/Desktop/typescript/typescript-nextjs-graphql-series/generated/apolloComponents.tsx";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  query Hello {\n    hello\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  mutation Register($data: RegisterInput!) {\n    register(data: $data) {\n      id\n      firstName\n      lastName\n      email\n      name\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  mutation Login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      id\n      firstName\n      lastName\n      email\n      name\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation ConfirmUser($token: String!) {\n    confirmUser(token: $token)\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/** The `Upload` scalar type represents a file upload. */
// ====================================================
// Documents
// ====================================================


 // ====================================================
// Components
// ====================================================

var ConfirmUserDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject());
var ConfirmUserComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ConfirmUserComponent, _React$Component);

  function ConfirmUserComponent() {
    _classCallCheck(this, ConfirmUserComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(ConfirmUserComponent).apply(this, arguments));
  }

  _createClass(ConfirmUserComponent, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_apollo__WEBPACK_IMPORTED_MODULE_0__["Mutation"], _extends({
        mutation: ConfirmUserDocument
      }, this["props"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }));
    }
  }]);

  return ConfirmUserComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);
function ConfirmUserHOC(operationOptions) {
  return react_apollo__WEBPACK_IMPORTED_MODULE_0__["graphql"](ConfirmUserDocument, operationOptions);
}
var LoginDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject2());
var LoginComponent =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(LoginComponent, _React$Component2);

  function LoginComponent() {
    _classCallCheck(this, LoginComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(LoginComponent).apply(this, arguments));
  }

  _createClass(LoginComponent, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_apollo__WEBPACK_IMPORTED_MODULE_0__["Mutation"], _extends({
        mutation: LoginDocument
      }, this["props"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }));
    }
  }]);

  return LoginComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);
function LoginHOC(operationOptions) {
  return react_apollo__WEBPACK_IMPORTED_MODULE_0__["graphql"](LoginDocument, operationOptions);
}
var RegisterDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject3());
var RegisterComponent =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(RegisterComponent, _React$Component3);

  function RegisterComponent() {
    _classCallCheck(this, RegisterComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(RegisterComponent).apply(this, arguments));
  }

  _createClass(RegisterComponent, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_apollo__WEBPACK_IMPORTED_MODULE_0__["Mutation"], _extends({
        mutation: RegisterDocument
      }, this["props"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        },
        __self: this
      }));
    }
  }]);

  return RegisterComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);
function RegisterHOC(operationOptions) {
  return react_apollo__WEBPACK_IMPORTED_MODULE_0__["graphql"](RegisterDocument, operationOptions);
}
var HelloDocument = graphql_tag__WEBPACK_IMPORTED_MODULE_2___default()(_templateObject4());
var HelloComponent =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(HelloComponent, _React$Component4);

  function HelloComponent() {
    _classCallCheck(this, HelloComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(HelloComponent).apply(this, arguments));
  }

  _createClass(HelloComponent, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](react_apollo__WEBPACK_IMPORTED_MODULE_0__["Query"], _extends({
        query: HelloDocument
      }, this["props"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }));
    }
  }]);

  return HelloComponent;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);
function HelloHOC(operationOptions) {
  return react_apollo__WEBPACK_IMPORTED_MODULE_0__["graphql"](HelloDocument, operationOptions);
}

/***/ }),

/***/ "./pages/hello.tsx":
/*!*************************!*\
  !*** ./pages/hello.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _generated_apolloComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../generated/apolloComponents */ "./generated/apolloComponents.tsx");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
var _jsxFileName = "/Users/sebastianhiguita/Desktop/typescript/typescript-nextjs-graphql-series/pages/hello.tsx";



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_generated_apolloComponents__WEBPACK_IMPORTED_MODULE_1__["HelloComponent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, function (_ref) {
    var data = _ref.data;
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, data && data.hello ? data.hello : "...loading");
  }));
});

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/hello.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/hello.tsx */"./pages/hello.tsx");


/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ })

/******/ });
//# sourceMappingURL=hello.js.map