webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Calculator/index.js":
/*!****************************************!*\
  !*** ./components/Calculator/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _Calculator_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Calculator.module.css */ \"./components/Calculator/Calculator.module.css\");\n/* harmony import */ var _Calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Calculator_module_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/acer/Diversos/Serdev/components/Calculator/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      altura = _useState[0],\n      setAltura = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      peso = _useState2[0],\n      setPeso = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(),\n      imc = _useState3[0],\n      setImc = _useState3[1];\n\n  function calculateIMC() {\n    var alturam = altura / 100;\n    setImc((peso / (alturam * alturam)).toFixed(2));\n  }\n\n  function verifyIMC() {\n    if (imc < 18.5) return 'Abaixo do peso';\n    if (imc < 24.9) return 'Peso Normal';\n    if (imc < 29.9) return 'Sobre-peso';\n    if (imc < 34.9) return 'Obesidade Grau 1';\n    if (imc < 39.9) return 'Obesidade Grau 2';\n    return \"Obesidade Grau 3\";\n  }\n\n  return __jsx(\"div\", {\n    className: _Calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.calculator,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    maxWidth: \"xs\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 10\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 10\n    }\n  }, \"Calculadora\"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    container: true,\n    direction: \"column\",\n    spacing: 2,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 10\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    item: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 14\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n    label: \"Altura em cm\",\n    variant: \"filled\",\n    fullWidth: true,\n    type: \"number\",\n    value: altura,\n    onChange: function onChange(e) {\n      return setAltura(e.target.value);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 15\n    }\n  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    item: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 14\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n    label: \"Peso em kg\",\n    variant: \"filled\",\n    fullWidth: true,\n    type: \"number\",\n    value: peso,\n    onChange: function onChange(e) {\n      return setPeso(e.target.value);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 15\n    }\n  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    item: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 14\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    variant: \"contained\",\n    color: \"primary\",\n    fullWidth: true,\n    onClick: function onClick() {\n      return calculateIMC();\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 18\n    }\n  }, \"Calcular\")), imc, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    item: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 14\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 18\n    }\n  }, \"O seu IMC \\xE9 \", imc, \" kg/m2 - \", verifyIMC())))));\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYWxjdWxhdG9yL2luZGV4LmpzPzc0YTciXSwibmFtZXMiOlsidXNlU3RhdGUiLCJhbHR1cmEiLCJzZXRBbHR1cmEiLCJwZXNvIiwic2V0UGVzbyIsImltYyIsInNldEltYyIsImNhbGN1bGF0ZUlNQyIsImFsdHVyYW0iLCJ0b0ZpeGVkIiwidmVyaWZ5SU1DIiwic3R5bGVzIiwiY2FsY3VsYXRvciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSwyRUFBVTtBQUFBLGtCQUNPQSxzREFBUSxDQUFDLENBQUQsQ0FEZjtBQUFBLE1BQ2RDLE1BRGM7QUFBQSxNQUNOQyxTQURNOztBQUFBLG1CQUVHRixzREFBUSxDQUFDLENBQUQsQ0FGWDtBQUFBLE1BRWRHLElBRmM7QUFBQSxNQUVSQyxPQUZROztBQUFBLG1CQUdDSixzREFBUSxFQUhUO0FBQUEsTUFHZEssR0FIYztBQUFBLE1BR1RDLE1BSFM7O0FBS3JCLFdBQVNDLFlBQVQsR0FBd0I7QUFDcEIsUUFBTUMsT0FBTyxHQUFHUCxNQUFNLEdBQUMsR0FBdkI7QUFDQUssVUFBTSxDQUFDLENBQUNILElBQUksSUFBRUssT0FBTyxHQUFDQSxPQUFWLENBQUwsRUFBeUJDLE9BQXpCLENBQWlDLENBQWpDLENBQUQsQ0FBTjtBQUNIOztBQUNMLFdBQVNDLFNBQVQsR0FBcUI7QUFDakIsUUFBR0wsR0FBRyxHQUFHLElBQVQsRUFBZ0IsT0FBTyxnQkFBUDtBQUNoQixRQUFHQSxHQUFHLEdBQUcsSUFBVCxFQUFnQixPQUFPLGFBQVA7QUFDaEIsUUFBR0EsR0FBRyxHQUFHLElBQVQsRUFBZ0IsT0FBTyxZQUFQO0FBQ2hCLFFBQUdBLEdBQUcsR0FBRyxJQUFULEVBQWdCLE9BQU8sa0JBQVA7QUFDaEIsUUFBR0EsR0FBRyxHQUFHLElBQVQsRUFBZ0IsT0FBTyxrQkFBUDtBQUNoQixXQUFPLGtCQUFQO0FBRUg7O0FBRUcsU0FDSTtBQUFLLGFBQVMsRUFBRU0sNkRBQU0sQ0FBQ0MsVUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsMkRBQUQ7QUFBVyxZQUFRLEVBQUMsSUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUMsSUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEQSxFQUlBLE1BQUMsc0RBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsYUFBUyxFQUFDLFFBQTFCO0FBQW1DLFdBQU8sRUFBRSxDQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQywyREFBRDtBQUFXLFNBQUssRUFBQyxjQUFqQjtBQUFnQyxXQUFPLEVBQUMsUUFBeEM7QUFBaUQsYUFBUyxNQUExRDtBQUEyRCxRQUFJLEVBQUMsUUFBaEU7QUFBeUUsU0FBSyxFQUFFWCxNQUFoRjtBQUF3RixZQUFRLEVBQUUsa0JBQUNZLENBQUQ7QUFBQSxhQUFNWCxTQUFTLENBQUNXLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWY7QUFBQSxLQUFsRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsQ0FESixFQUlJLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsMkRBQUQ7QUFBVyxTQUFLLEVBQUMsWUFBakI7QUFBOEIsV0FBTyxFQUFDLFFBQXRDO0FBQWdELGFBQVMsTUFBekQ7QUFBMEQsUUFBSSxFQUFDLFFBQS9EO0FBQXdFLFNBQUssRUFBRVosSUFBL0U7QUFBc0YsWUFBUSxFQUFFLGtCQUFDVSxDQUFEO0FBQUEsYUFBTVQsT0FBTyxDQUFDUyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFiO0FBQUEsS0FBaEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBSkosRUFPSSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHdEQUFEO0FBQVEsV0FBTyxFQUFDLFdBQWhCO0FBQTRCLFNBQUssRUFBQyxTQUFsQztBQUE2QyxhQUFTLE1BQXREO0FBQ0EsV0FBTyxFQUFFO0FBQUEsYUFBS1IsWUFBWSxFQUFqQjtBQUFBLEtBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixDQVBKLEVBY0tGLEdBZEwsRUFnQkksTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUNZQSxHQURaLGVBQzBCSyxTQUFTLEVBRG5DLENBREosQ0FoQkosQ0FKQSxDQURELENBREo7QUFnQ0giLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhbGN1bGF0b3IvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBHcmlkLCBUeXBvZ3JhcGh5LCBUZXh0RmllbGQsIEJ1dHRvbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0NhbGN1bGF0b3IubW9kdWxlLmNzcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oKXtcbiAgICBjb25zdCBbYWx0dXJhLCBzZXRBbHR1cmFdID0gdXNlU3RhdGUoMClcbiAgICBjb25zdCBbcGVzbywgc2V0UGVzb10gPSB1c2VTdGF0ZSgwKVxuICAgIGNvbnN0IFtpbWMsIHNldEltY10gPSB1c2VTdGF0ZSgpXG5cbiAgICBmdW5jdGlvbiBjYWxjdWxhdGVJTUMgKCl7XG4gICAgICAgIGNvbnN0IGFsdHVyYW0gPSBhbHR1cmEvMTAwXG4gICAgICAgIHNldEltYygocGVzby8oYWx0dXJhbSphbHR1cmFtKSkudG9GaXhlZCgyKSlcbiAgICB9XG5mdW5jdGlvbiB2ZXJpZnlJTUMgKCl7XG4gICAgaWYoaW1jIDwgMTguNSApIHJldHVybiAnQWJhaXhvIGRvIHBlc28nXG4gICAgaWYoaW1jIDwgMjQuOSApIHJldHVybiAnUGVzbyBOb3JtYWwnXG4gICAgaWYoaW1jIDwgMjkuOSApIHJldHVybiAnU29icmUtcGVzbydcbiAgICBpZihpbWMgPCAzNC45ICkgcmV0dXJuICdPYmVzaWRhZGUgR3JhdSAxJ1xuICAgIGlmKGltYyA8IDM5LjkgKSByZXR1cm4gJ09iZXNpZGFkZSBHcmF1IDInXG4gICAgcmV0dXJuIFwiT2Jlc2lkYWRlIEdyYXUgM1wiXG5cbn1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FsY3VsYXRvcn0gPlxuICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cInhzXCIgPlxuICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgPlxuICAgICAgICAgIENhbGN1bGFkb3JhXG4gICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPVwiY29sdW1uXCIgc3BhY2luZz17Mn0gPlxuICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgICAgIDxUZXh0RmllbGQgbGFiZWw9XCJBbHR1cmEgZW0gY21cIiB2YXJpYW50PVwiZmlsbGVkXCIgZnVsbFdpZHRoIHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17YWx0dXJhfSBvbkNoYW5nZT17KGUpPT4gc2V0QWx0dXJhKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgICAgPFRleHRGaWVsZCBsYWJlbD1cIlBlc28gZW0ga2dcIiB2YXJpYW50PVwiZmlsbGVkXCIgIGZ1bGxXaWR0aCB0eXBlPVwibnVtYmVyXCIgdmFsdWU9e3Blc299ICBvbkNoYW5nZT17KGUpPT4gc2V0UGVzbyhlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PiBjYWxjdWxhdGVJTUMoKX0gPlxuICAgICAgICAgICAgICAgICBDYWxjdWxhclxuICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgICAgICB7aW1jfVxuXG4gICAgICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgTyBzZXUgSU1DIMOpIHtpbWN9IGtnL20yIC0ge3ZlcmlmeUlNQygpfVxuICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgICA8L0dyaWQ+XG4gICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Calculator/index.js\n");

/***/ })

})