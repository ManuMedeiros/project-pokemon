webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ "./src/styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_Search_Pokemons_searchPokemons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Search-Pokemons/searchPokemons */ "./src/components/Search-Pokemons/searchPokemons.tsx");
/* harmony import */ var components_Search_modal_searchModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Search-modal/searchModal */ "./src/components/Search-modal/searchModal.tsx");
/* harmony import */ var components_Modal_Pokemon_modalPokemon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Modal-Pokemon/modalPokemon */ "./src/components/Modal-Pokemon/modalPokemon.tsx");


var _jsxFileName = "C:\\Users\\felip\\OneDrive\\\xC1rea de Trabalho\\Projetos\\project-pokemon\\src\\pages\\index.tsx",
    _s = $RefreshSig$();







function Home() {
  _s();

  var _valores$stats, _itens$stat;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      pokemon = _useState[0],
      setPokemon = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      valores = _useState2[0],
      setValores = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      detalhes = _useState3[0],
      setDetalhes = _useState3[1];

  var modal = function modal() {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("https://pokeapi.co/api/v2/pokemon/".concat(pokemon)).then(function (preview) {
      setValores(preview.data);
      setDetalhes(true);
    })["catch"](function (error) {
      alert("Quem é esse pokemon?");
    });
  };

  var itensName = valores === null || valores === void 0 ? void 0 : (_valores$stats = valores.stats) === null || _valores$stats === void 0 ? void 0 : _valores$stats.slice(0, 3);
  console.log(itensName, 'itensName');
  var itens = valores === null || valores === void 0 ? void 0 : valores.stats.map(function (item) {
    return item.base_stat;
  });
  console.log(itens, 'intes');
  console.log(valores, 'dataPokemon');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    children: [valores && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Modal_Pokemon_modalPokemon__WEBPACK_IMPORTED_MODULE_6__["default"], {
      image: valores.sprites.other.dream_world.front_default,
      name: valores.name,
      infos: (_itens$stat = itens.stat) === null || _itens$stat === void 0 ? void 0 : _itens$stat.name,
      status: itens,
      onClick: ''
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      className: "inicio",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Search_modal_searchModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
        text: "Abrir",
        onChange: function onChange(e) {
          return setPokemon(e.target.value);
        },
        onClick: function onClick(e) {
          modal(), e.preventDefault();
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Search_Pokemons_searchPokemons__WEBPACK_IMPORTED_MODULE_4__["default"], {
        text: "Pokemons"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 9
  }, this);
}

_s(Home, "7NTKUphD0sbXlpLrblQWk3CLz2Q=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJIb21lIiwidXNlU3RhdGUiLCJwb2tlbW9uIiwic2V0UG9rZW1vbiIsInZhbG9yZXMiLCJzZXRWYWxvcmVzIiwiZGV0YWxoZXMiLCJzZXREZXRhbGhlcyIsIm1vZGFsIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicHJldmlldyIsImRhdGEiLCJlcnJvciIsImFsZXJ0IiwiaXRlbnNOYW1lIiwic3RhdHMiLCJzbGljZSIsImNvbnNvbGUiLCJsb2ciLCJpdGVucyIsIm1hcCIsIml0ZW0iLCJiYXNlX3N0YXQiLCJzdHlsZXMiLCJjb250YWluZXIiLCJzcHJpdGVzIiwib3RoZXIiLCJkcmVhbV93b3JsZCIsImZyb250X2RlZmF1bHQiLCJuYW1lIiwic3RhdCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUFBOztBQUFBOztBQUFBLGtCQUNHQyxzREFBUSxFQURYO0FBQUEsTUFDcEJDLE9BRG9CO0FBQUEsTUFDWEMsVUFEVzs7QUFBQSxtQkFFR0Ysc0RBQVEsRUFGWDtBQUFBLE1BRXBCRyxPQUZvQjtBQUFBLE1BRVhDLFVBRlc7O0FBQUEsbUJBR0tKLHNEQUFRLEVBSGI7QUFBQSxNQUdwQkssUUFIb0I7QUFBQSxNQUdWQyxXQUhVOztBQUszQixNQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQ2hCQyxnREFBSyxDQUNBQyxHQURMLDZDQUM4Q1IsT0FEOUMsR0FHS1MsSUFITCxDQUdVLFVBQUNDLE9BQUQsRUFBYTtBQUNmUCxnQkFBVSxDQUFDTyxPQUFPLENBQUNDLElBQVQsQ0FBVjtBQUNBTixpQkFBVyxDQUFDLElBQUQsQ0FBWDtBQUNILEtBTkwsV0FPVyxVQUFBTyxLQUFLLEVBQUk7QUFDWkMsV0FBSyxDQUFDLHNCQUFELENBQUw7QUFDSCxLQVRMO0FBVUgsR0FYRDs7QUFhQSxNQUFNQyxTQUFTLEdBQUdaLE9BQUgsYUFBR0EsT0FBSCx5Q0FBR0EsT0FBTyxDQUFFYSxLQUFaLG1EQUFHLGVBQWdCQyxLQUFoQixDQUFzQixDQUF0QixFQUF5QixDQUF6QixDQUFsQjtBQUVBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUosU0FBWixFQUF1QixXQUF2QjtBQUVBLE1BQU1LLEtBQUssR0FBR2pCLE9BQUgsYUFBR0EsT0FBSCx1QkFBR0EsT0FBTyxDQUFFYSxLQUFULENBQWVLLEdBQWYsQ0FBbUIsVUFBQ0MsSUFBRDtBQUFBLFdBQVVBLElBQUksQ0FBQ0MsU0FBZjtBQUFBLEdBQW5CLENBQWQ7QUFFQUwsU0FBTyxDQUFDQyxHQUFSLENBQVlDLEtBQVosRUFBbUIsT0FBbkI7QUFFQUYsU0FBTyxDQUFDQyxHQUFSLENBQVloQixPQUFaLEVBQXFCLGFBQXJCO0FBRUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUVxQiw4REFBTSxDQUFDQyxTQUF2QjtBQUFBLGVBQ0t0QixPQUFPLGlCQUNKLHFFQUFDLDZFQUFEO0FBQ0ksV0FBSyxFQUFFQSxPQUFPLENBQUN1QixPQUFSLENBQWdCQyxLQUFoQixDQUFzQkMsV0FBdEIsQ0FBa0NDLGFBRDdDO0FBRUksVUFBSSxFQUFFMUIsT0FBTyxDQUFDMkIsSUFGbEI7QUFHSSxXQUFLLGlCQUFFVixLQUFLLENBQUNXLElBQVIsZ0RBQUUsWUFBWUQsSUFIdkI7QUFJSSxZQUFNLEVBQUVWLEtBSlo7QUFLSSxhQUFPLEVBQUU7QUFMYjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRlIsZUF3REk7QUFBTSxlQUFTLEVBQUMsUUFBaEI7QUFBQSw4QkFDSSxxRUFBQywyRUFBRDtBQUNJLFlBQUksRUFBQyxPQURUO0FBRUksZ0JBQVEsRUFBRSxrQkFBQ1ksQ0FBRDtBQUFBLGlCQUFPOUIsVUFBVSxDQUFDOEIsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBakI7QUFBQSxTQUZkO0FBR0ksZUFBTyxFQUFFLGlCQUFDRixDQUFELEVBQU87QUFBRXpCLGVBQUssSUFBSXlCLENBQUMsQ0FBQ0csY0FBRixFQUFUO0FBQThCO0FBSHBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQU1JLHFFQUFDLGlGQUFEO0FBQ0ksWUFBSSxFQUFDO0FBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXFFSDs7R0FqR3VCcEMsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hZmJiMjg4MWFkYTFjYTE4MjljYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgU2VhcmNoUG9rZW1vbnMgZnJvbSAnY29tcG9uZW50cy9TZWFyY2gtUG9rZW1vbnMvc2VhcmNoUG9rZW1vbnMnO1xyXG5pbXBvcnQgU2VhcmNoTW9kYWwgZnJvbSAnY29tcG9uZW50cy9TZWFyY2gtbW9kYWwvc2VhcmNoTW9kYWwnO1xyXG5pbXBvcnQgTW9kYWxQb2tlbW9uIGZyb20gJ2NvbXBvbmVudHMvTW9kYWwtUG9rZW1vbi9tb2RhbFBva2Vtb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICAgIGNvbnN0IFtwb2tlbW9uLCBzZXRQb2tlbW9uXSA9IHVzZVN0YXRlPGFueT4oKTtcclxuICAgIGNvbnN0IFt2YWxvcmVzLCBzZXRWYWxvcmVzXSA9IHVzZVN0YXRlPGFueT4oKTtcclxuICAgIGNvbnN0IFtkZXRhbGhlcywgc2V0RGV0YWxoZXNdID0gdXNlU3RhdGU8YW55PigpO1xyXG5cclxuICAgIGNvbnN0IG1vZGFsID0gKCkgPT4ge1xyXG4gICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgIC5nZXQoYGh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi8ke3Bva2Vtb259YCxcclxuICAgICAgICApXHJcbiAgICAgICAgICAgIC50aGVuKChwcmV2aWV3KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRWYWxvcmVzKHByZXZpZXcuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBzZXREZXRhbGhlcyh0cnVlKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJRdWVtIMOpIGVzc2UgcG9rZW1vbj9cIilcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaXRlbnNOYW1lID0gdmFsb3Jlcz8uc3RhdHM/LnNsaWNlKDAsIDMpXHJcblxyXG4gICAgY29uc29sZS5sb2coaXRlbnNOYW1lLCAnaXRlbnNOYW1lJylcclxuXHJcbiAgICBjb25zdCBpdGVucyA9IHZhbG9yZXM/LnN0YXRzLm1hcCgoaXRlbSkgPT4gaXRlbS5iYXNlX3N0YXQpXHJcblxyXG4gICAgY29uc29sZS5sb2coaXRlbnMsICdpbnRlcycpXHJcblxyXG4gICAgY29uc29sZS5sb2codmFsb3JlcywgJ2RhdGFQb2tlbW9uJylcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAge3ZhbG9yZXMgJiYgKFxyXG4gICAgICAgICAgICAgICAgPE1vZGFsUG9rZW1vblxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlPXt2YWxvcmVzLnNwcml0ZXMub3RoZXIuZHJlYW1fd29ybGQuZnJvbnRfZGVmYXVsdH1cclxuICAgICAgICAgICAgICAgICAgICBuYW1lPXt2YWxvcmVzLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5mb3M9e2l0ZW5zLnN0YXQ/Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzPXtpdGVuc31cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsnJ31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHsvKiB7dmFsb3JlcyAmJiBkZXRhbGhlcyAmJlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGFiaWxpZGFkZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ4XCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGV0YWxoZXMoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0+WDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZhbG9yZXMtbm9tZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mbzFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57dmFsb3Jlcy5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpZC1pbmZvXCI+e3ZhbG9yZXMuaWR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsb3Jlcy5zdGF0cy5tYXAoKHN0YXRzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJocFwiPntzdGF0cy5zdGF0Lm5hbWV9PTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntzdGF0cy5iYXNlX3N0YXR9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsb3Jlcy5hYmlsaXRpZXMubWFwKChhYmlsaXRpZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57YWJpbGl0aWVzLmFiaWxpdHkubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2YWxvcmVzLnR5cGVzLm1hcCgodHlwZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpcG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlR5cGU9IHt0eXBlcy50eXBlLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLXBva1wiIHNyYz17dmFsb3Jlcy5zcHJpdGVzLm90aGVyLmRyZWFtX3dvcmxkLmZyb250X2RlZmF1bHR9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH0gKi99XHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImluaWNpb1wiPlxyXG4gICAgICAgICAgICAgICAgPFNlYXJjaE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dD0nQWJyaXInXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQb2tlbW9uKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4geyBtb2RhbCgpLCBlLnByZXZlbnREZWZhdWx0KCk7IH19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFNlYXJjaFBva2Vtb25zXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dD0nUG9rZW1vbnMnXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==