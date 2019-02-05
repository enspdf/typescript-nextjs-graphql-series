webpackHotUpdate("static/development/pages/register.js",{

/***/ "./pages/register.tsx":
/*!****************************!*\
  !*** ./pages/register.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _components_fields_InputField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/fields/InputField */ "./components/fields/InputField.tsx");
/* harmony import */ var _generated_apolloComponents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../generated/apolloComponents */ "./generated/apolloComponents.tsx");

var _jsxFileName = "/Users/sebastianhiguita/Desktop/typescript/typescript-nextjs-graphql-series/pages/register.tsx";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Register Page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_generated_apolloComponents__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, function (register) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
      onSubmit:
      /*#__PURE__*/
      function () {
        var _ref2 = _asyncToGenerator(
        /*#__PURE__*/
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data, _ref) {
          var setErrors, response, errors;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  setErrors = _ref.setErrors;
                  _context.prev = 1;
                  _context.next = 4;
                  return register({
                    variables: {
                      data: data
                    }
                  });

                case 4:
                  response = _context.sent;
                  console.log(response);
                  _context.next = 15;
                  break;

                case 8:
                  _context.prev = 8;
                  _context.t0 = _context["catch"](1);
                  console.log("Err: ", _context.t0.graphQLErrors);
                  errors = {};

                  _context.t0.graphQLErrors[0].validationErrors.forEach(function (validationErr) {
                    Object.values(validationErr.constraints).forEach(function (message) {
                      errors[validationErr.property] = message;
                    });
                  });

                  console.log(errors);
                  setErrors(errors);

                case 15:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[1, 8]]);
        }));

        return function (_x, _x2) {
          return _ref2.apply(this, arguments);
        };
      }(),
      initialValues: {
        email: "",
        firstName: "",
        lastName: "",
        password: ""
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, function (_ref3) {
      var values = _ref3.values,
          handleSubmit = _ref3.handleSubmit;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
        onSubmit: handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "firstName",
        placeholder: "First Name",
        component: _components_fields_InputField__WEBPACK_IMPORTED_MODULE_4__["InputField"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "lastName",
        placeholder: "Last Name",
        component: _components_fields_InputField__WEBPACK_IMPORTED_MODULE_4__["InputField"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "email",
        placeholder: "Email",
        component: _components_fields_InputField__WEBPACK_IMPORTED_MODULE_4__["InputField"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        name: "password",
        placeholder: "Password",
        type: "password",
        component: _components_fields_InputField__WEBPACK_IMPORTED_MODULE_4__["InputField"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, "Submit"));
    });
  }));
});
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/register")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=register.js.d6a0dd3b98ce0aa86b8a.hot-update.js.map