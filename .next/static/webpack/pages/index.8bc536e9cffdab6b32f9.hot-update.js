webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Calculator/index.js":
/*!****************************************!*\
  !*** ./components/Calculator/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _Calculator_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Calculator.module.css */ \"./components/Calculator/Calculator.module.css\");\n/* harmony import */ var _Calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Calculator_module_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/acer/Diversos/Serdev/components/Calculator/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      altura = _useState[0],\n      setAltura = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      peso = _useState2[0],\n      setPeso = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(),\n      imc = _useState3[0],\n      setImc = _useState3[1];\n\n  function calculateIMC() {\n    var alturam = altura / 100;\n    setImc((peso / (alturam * alturam)).toFixed(2));\n  }\n\n  function verifyIMC() {}\n\n  return __jsx(\"div\", {\n    className: _Calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.calculator,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    maxWidth: \"xs\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 10\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 10\n    }\n  }, \"Calculadora\"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    container: true,\n    direction: \"column\",\n    spacing: 2,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 10\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    item: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 14\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n    label: \"Altura em cm\",\n    variant: \"filled\",\n    fullWidth: true,\n    type: \"number\",\n    value: altura,\n    onChange: function onChange(e) {\n      return setAltura(e.target.value);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 15\n    }\n  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    item: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 14\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n    label: \"Peso em kg\",\n    variant: \"filled\",\n    fullWidth: true,\n    type: \"number\",\n    value: peso,\n    onChange: function onChange(e) {\n      return setPeso(e.target.value);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 15\n    }\n  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    item: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 14\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    variant: \"contained\",\n    color: \"primary\",\n    fullWidth: true,\n    onClick: function onClick() {\n      return calculateIMC();\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 18\n    }\n  }, \"Calcular\")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    item: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 14\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 18\n    }\n  }, \"O seu IMC \\xE9 \", imc, \" kg/m2\")))));\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYWxjdWxhdG9yL2luZGV4LmpzPzc0YTciXSwibmFtZXMiOlsidXNlU3RhdGUiLCJhbHR1cmEiLCJzZXRBbHR1cmEiLCJwZXNvIiwic2V0UGVzbyIsImltYyIsInNldEltYyIsImNhbGN1bGF0ZUlNQyIsImFsdHVyYW0iLCJ0b0ZpeGVkIiwidmVyaWZ5SU1DIiwic3R5bGVzIiwiY2FsY3VsYXRvciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSwyRUFBVTtBQUFBLGtCQUNPQSxzREFBUSxDQUFDLENBQUQsQ0FEZjtBQUFBLE1BQ2RDLE1BRGM7QUFBQSxNQUNOQyxTQURNOztBQUFBLG1CQUVHRixzREFBUSxDQUFDLENBQUQsQ0FGWDtBQUFBLE1BRWRHLElBRmM7QUFBQSxNQUVSQyxPQUZROztBQUFBLG1CQUdDSixzREFBUSxFQUhUO0FBQUEsTUFHZEssR0FIYztBQUFBLE1BR1RDLE1BSFM7O0FBS3JCLFdBQVNDLFlBQVQsR0FBd0I7QUFDcEIsUUFBTUMsT0FBTyxHQUFHUCxNQUFNLEdBQUMsR0FBdkI7QUFDQUssVUFBTSxDQUFDLENBQUNILElBQUksSUFBRUssT0FBTyxHQUFDQSxPQUFWLENBQUwsRUFBeUJDLE9BQXpCLENBQWlDLENBQWpDLENBQUQsQ0FBTjtBQUNIOztBQUNMLFdBQVNDLFNBQVQsR0FBcUIsQ0FFcEI7O0FBRUcsU0FDSTtBQUFLLGFBQVMsRUFBRUMsNkRBQU0sQ0FBQ0MsVUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsMkRBQUQ7QUFBVyxZQUFRLEVBQUMsSUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUMsSUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEQSxFQUlBLE1BQUMsc0RBQUQ7QUFBTSxhQUFTLE1BQWY7QUFBZ0IsYUFBUyxFQUFDLFFBQTFCO0FBQW1DLFdBQU8sRUFBRSxDQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQywyREFBRDtBQUFXLFNBQUssRUFBQyxjQUFqQjtBQUFnQyxXQUFPLEVBQUMsUUFBeEM7QUFBaUQsYUFBUyxNQUExRDtBQUEyRCxRQUFJLEVBQUMsUUFBaEU7QUFBeUUsU0FBSyxFQUFFWCxNQUFoRjtBQUF3RixZQUFRLEVBQUUsa0JBQUNZLENBQUQ7QUFBQSxhQUFNWCxTQUFTLENBQUNXLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWY7QUFBQSxLQUFsRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsQ0FESixFQUlJLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsMkRBQUQ7QUFBVyxTQUFLLEVBQUMsWUFBakI7QUFBOEIsV0FBTyxFQUFDLFFBQXRDO0FBQWdELGFBQVMsTUFBekQ7QUFBMEQsUUFBSSxFQUFDLFFBQS9EO0FBQXdFLFNBQUssRUFBRVosSUFBL0U7QUFBc0YsWUFBUSxFQUFFLGtCQUFDVSxDQUFEO0FBQUEsYUFBTVQsT0FBTyxDQUFDUyxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFiO0FBQUEsS0FBaEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELENBSkosRUFPSSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHdEQUFEO0FBQVEsV0FBTyxFQUFDLFdBQWhCO0FBQTRCLFNBQUssRUFBQyxTQUFsQztBQUE2QyxhQUFTLE1BQXREO0FBQ0EsV0FBTyxFQUFFO0FBQUEsYUFBS1IsWUFBWSxFQUFqQjtBQUFBLEtBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixDQVBKLEVBY0ksTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUNZRixHQURaLFdBREosQ0FkSixDQUpBLENBREQsQ0FESjtBQThCSCIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ2FsY3VsYXRvci9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb250YWluZXIsIEdyaWQsIFR5cG9ncmFwaHksIFRleHRGaWVsZCwgQnV0dG9ufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ2FsY3VsYXRvci5tb2R1bGUuY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpe1xuICAgIGNvbnN0IFthbHR1cmEsIHNldEFsdHVyYV0gPSB1c2VTdGF0ZSgwKVxuICAgIGNvbnN0IFtwZXNvLCBzZXRQZXNvXSA9IHVzZVN0YXRlKDApXG4gICAgY29uc3QgW2ltYywgc2V0SW1jXSA9IHVzZVN0YXRlKClcblxuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUlNQyAoKXtcbiAgICAgICAgY29uc3QgYWx0dXJhbSA9IGFsdHVyYS8xMDBcbiAgICAgICAgc2V0SW1jKChwZXNvLyhhbHR1cmFtKmFsdHVyYW0pKS50b0ZpeGVkKDIpKVxuICAgIH1cbmZ1bmN0aW9uIHZlcmlmeUlNQyAoKXtcbiAgICBcbn1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FsY3VsYXRvcn0gPlxuICAgICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cInhzXCIgPlxuICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgPlxuICAgICAgICAgIENhbGN1bGFkb3JhXG4gICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICA8R3JpZCBjb250YWluZXIgZGlyZWN0aW9uPVwiY29sdW1uXCIgc3BhY2luZz17Mn0gPlxuICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgICAgIDxUZXh0RmllbGQgbGFiZWw9XCJBbHR1cmEgZW0gY21cIiB2YXJpYW50PVwiZmlsbGVkXCIgZnVsbFdpZHRoIHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17YWx0dXJhfSBvbkNoYW5nZT17KGUpPT4gc2V0QWx0dXJhKGUudGFyZ2V0LnZhbHVlKX0gLz5cbiAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgICAgPFRleHRGaWVsZCBsYWJlbD1cIlBlc28gZW0ga2dcIiB2YXJpYW50PVwiZmlsbGVkXCIgIGZ1bGxXaWR0aCB0eXBlPVwibnVtYmVyXCIgdmFsdWU9e3Blc299ICBvbkNoYW5nZT17KGUpPT4gc2V0UGVzbyhlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiICBmdWxsV2lkdGhcbiAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PiBjYWxjdWxhdGVJTUMoKX0gPlxuICAgICAgICAgICAgICAgICBDYWxjdWxhclxuICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICBPIHNldSBJTUMgw6kge2ltY30ga2cvbTJcbiAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgIDwvR3JpZD5cblxuICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Calculator/index.js\n");

/***/ })

})