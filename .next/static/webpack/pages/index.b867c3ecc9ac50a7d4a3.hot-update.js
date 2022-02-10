webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Modal-Pokemon/modalPokemon.tsx":
/*!*******************************************************!*\
  !*** ./src/components/Modal-Pokemon/modalPokemon.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style */ "./src/components/Modal-Pokemon/style.ts");


var _jsxFileName = "C:\\Users\\felip\\OneDrive\\\xC1rea de Trabalho\\Projetos\\project-pokemon\\src\\components\\Modal-Pokemon\\modalPokemon.tsx",
    _this = undefined;




var ModalPokemon = function ModalPokemon(_ref) {
  var image = _ref.image,
      name = _ref.name,
      infos = _ref.infos,
      status = _ref.status,
      onClick = _ref.onClick;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_2__["backImage"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_2__["ImagePokemon"], {
        src: image
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_2__["NamePokemon"], {
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_2__["DivInfo"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_2__["InfoPokemon"], {
        children: infos
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_2__["StatusValue"], {
        children: status
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_style__WEBPACK_IMPORTED_MODULE_2__["Detail"], {
      onClick: onClick,
      children: "More Datails"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, _this);
};

_c = ModalPokemon;
/* harmony default export */ __webpack_exports__["default"] = (ModalPokemon);

var _c;

$RefreshReg$(_c, "ModalPokemon");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTW9kYWwtUG9rZW1vbi9tb2RhbFBva2Vtb24udHN4Il0sIm5hbWVzIjpbIk1vZGFsUG9rZW1vbiIsImltYWdlIiwibmFtZSIsImluZm9zIiwic3RhdHVzIiwib25DbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFVQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFvRDtBQUFBLE1BQWpEQyxLQUFpRCxRQUFqREEsS0FBaUQ7QUFBQSxNQUExQ0MsSUFBMEMsUUFBMUNBLElBQTBDO0FBQUEsTUFBcENDLEtBQW9DLFFBQXBDQSxLQUFvQztBQUFBLE1BQTdCQyxNQUE2QixRQUE3QkEsTUFBNkI7QUFBQSxNQUFyQkMsT0FBcUIsUUFBckJBLE9BQXFCO0FBQ3JFLHNCQUNJLHFFQUFDLDRDQUFEO0FBQUEsNEJBQ0kscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDSSxxRUFBQyxtREFBRDtBQUFnQixXQUFHLEVBQUVKO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFJSSxxRUFBQyxrREFBRDtBQUFBLGdCQUFnQkM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpKLGVBS0kscUVBQUMsOENBQUQ7QUFBQSw4QkFDSSxxRUFBQyxrREFBRDtBQUFBLGtCQUFnQkM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUkscUVBQUMsa0RBQUQ7QUFBQSxrQkFBZ0JDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMSixlQVNJLHFFQUFDLDZDQUFEO0FBQVUsYUFBTyxFQUFFQyxPQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBYUgsQ0FkRDs7S0FBTUwsWTtBQWdCU0EsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjg2N2MzZWNjOWFjNTBhN2Q0YTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICogYXMgUyBmcm9tICcuL3N0eWxlJztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICBpbWFnZT86IGFueTtcclxuICAgIG5hbWU/OiBzdHJpbmc7XHJcbiAgICBpbmZvcz86IGFueTtcclxuICAgIHN0YXR1cz86IHN0cmluZztcclxuICAgIG9uQ2xpY2s/OiBhbnk7XHJcbn1cclxuXHJcbmNvbnN0IE1vZGFsUG9rZW1vbiA9ICh7IGltYWdlLCBuYW1lLCBpbmZvcywgc3RhdHVzLCBvbkNsaWNrIH06IFByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxTLk1vZGFsPlxyXG4gICAgICAgICAgICA8Uy5iYWNrSW1hZ2U+XHJcbiAgICAgICAgICAgICAgICA8Uy5JbWFnZVBva2Vtb24gc3JjPXtpbWFnZX0gLz5cclxuICAgICAgICAgICAgPC9TLmJhY2tJbWFnZT5cclxuICAgICAgICAgICAgPFMuTmFtZVBva2Vtb24+e25hbWV9PC9TLk5hbWVQb2tlbW9uPlxyXG4gICAgICAgICAgICA8Uy5EaXZJbmZvPlxyXG4gICAgICAgICAgICAgICAgPFMuSW5mb1Bva2Vtb24+e2luZm9zfTwvUy5JbmZvUG9rZW1vbj5cclxuICAgICAgICAgICAgICAgIDxTLlN0YXR1c1ZhbHVlPntzdGF0dXN9PC9TLlN0YXR1c1ZhbHVlPlxyXG4gICAgICAgICAgICA8L1MuRGl2SW5mbz5cclxuICAgICAgICAgICAgPFMuRGV0YWlsIG9uQ2xpY2s9e29uQ2xpY2t9Pk1vcmUgRGF0YWlsczwvUy5EZXRhaWw+XHJcbiAgICAgICAgPC9TLk1vZGFsPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbFBva2Vtb247Il0sInNvdXJjZVJvb3QiOiIifQ==