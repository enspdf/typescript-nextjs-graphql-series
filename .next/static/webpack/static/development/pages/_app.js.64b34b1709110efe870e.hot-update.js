webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./lib/initApollo.ts":
/*!***************************!*\
  !*** ./lib/initApollo.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return initApollo; });
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/index.js");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-link-http */ "./node_modules/apollo-link-http/lib/index.js");
/* harmony import */ var apollo_link_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-link-context */ "./node_modules/apollo-link-context/lib/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _isBrowser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isBrowser */ "./lib/isBrowser.ts");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var apolloClient = null;

if (!_isBrowser__WEBPACK_IMPORTED_MODULE_4__["isBrowser"]) {
  global.fetch = isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default.a;
}

function create(initialState, _ref) {
  var getToken = _ref.getToken;
  var httpLink = Object(apollo_link_http__WEBPACK_IMPORTED_MODULE_1__["createHttpLink"])({
    uri: "http://localhost:4000/graphql",
    credentials: "include"
  });
  var authLink = Object(apollo_link_context__WEBPACK_IMPORTED_MODULE_2__["setContext"])(function (_, _ref2) {
    var headers = _ref2.headers;
    var token = getToken();
    return {
      headers: _objectSpread({}, headers, {
        cookie: token ? "qid=".concat(token) : ""
      })
    };
  });
  return new apollo_boost__WEBPACK_IMPORTED_MODULE_0__["ApolloClient"]({
    connectToDevTools: _isBrowser__WEBPACK_IMPORTED_MODULE_4__["isBrowser"],
    ssrMode: !_isBrowser__WEBPACK_IMPORTED_MODULE_4__["isBrowser"],
    link: authLink.concat(httpLink),
    cache: new apollo_boost__WEBPACK_IMPORTED_MODULE_0__["InMemoryCache"]().restore(initialState || {})
  });
}

function initApollo(initialState, options) {
  if (!_isBrowser__WEBPACK_IMPORTED_MODULE_4__["isBrowser"]) {
    return create(initialState, options);
  }

  if (!apolloClient) {
    apolloClient = create(initialState, options);
  }

  return apolloClient;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=_app.js.64b34b1709110efe870e.hot-update.js.map