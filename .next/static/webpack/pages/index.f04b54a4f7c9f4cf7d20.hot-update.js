webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Calculator/index.js":
/*!****************************************!*\
  !*** ./components/Calculator/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _Calculator_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Calculator.module.css */ \"./components/Calculator/Calculator.module.css\");\n/* harmony import */ var _Calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Calculator_module_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/acer/Diversos/Serdev/components/Calculator/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      altura = _useState[0],\n      setAltura = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      peso = _useState2[0],\n      setPeso = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(),\n      imc = _useState3[0],\n      setImc = _useState3[1];\n\n  function calculateIMC() {\n    var alturam = altura / 100;\n    setImc((peso / (alturam * alturam)).toFixed(2));\n  }\n\n  function verifyIMC() {\n    if (imc < 18.5) return 'Abaixo do peso';\n    if (imc < 24.9) return 'Peso Normal';\n    if (imc < 29.9) return 'Sobre-peso';\n    if (imc < 34.9) return 'Obesidade Grau 1';\n    if (imc < 39.9) return 'Obesidade Grau 2';\n  }\n\n  return __jsx(\"div\", {\n    className: _Calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.calculator,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    maxWidth: \"xs\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 10\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 10\n    }\n  }, \"Calculadora\"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    container: true,\n    direction: \"column\",\n    spacing: 2,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 10\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    item: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 14\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n    label: \"Altura em cm\",\n    variant: \"filled\",\n    fullWidth: true,\n    type: \"number\",\n    value: altura,\n    onChange: function onChange(e) {\n      return setAltura(e.target.value);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 15\n    }\n  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    item: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 14\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n    label: \"Peso em kg\",\n    variant: \"filled\",\n    fullWidth: true,\n    type: \"number\",\n    value: peso,\n    onChange: function onChange(e) {\n      return setPeso(e.target.value);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 15\n    }\n  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    item: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 14\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    variant: \"contained\",\n    color: \"primary\",\n    fullWidth: true,\n    onClick: function onClick() {\n      return calculateIMC();\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 18\n    }\n  }, \"Calcular\")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    item: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 14\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 18\n    }\n  }, \"O seu IMC \\xE9 \", imc, \" kg/m2\")))));\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYWxjdWxhdG9yL2luZGV4LmpzPzc0YTciXSwibmFtZXMiOlsidXNlU3RhdGUiLCJhbHR1cmEiLCJzZXRBbHR1cmEiLCJwZXNvIiwic2V0UGVzbyIsImltYyIsInNldEltYyIsImNhbGN1bGF0ZUlNQyIsImFsdHVyYW0iLCJ0b0ZpeGVkIiwidmVyaWZ5SU1DIiwic3R5bGVzIiwiY2FsY3VsYXRvciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSwyRUFBVTtBQUFBLGtCQUNPQSxzREFBUSxDQUFDLENBQUQsQ0FEZjtBQUFBLE1BQ2RDLE1BRGM7QUFBQSxNQUNOQyxTQURNOztBQUFBLG1CQUVHRixzREFBUSxDQUFDLENBQUQsQ0FGWDtBQUFBLE1BRWRHLElBRmM7QUFBQSxNQUVSQyxPQUZROztBQUFBLG1CQUdDSixzREFBUSxFQUhUO0FBQUEsTUFHZEssR0FIYztBQUFBLE1BR1RDLE1BSFM7O0FBS3JCLFdBQVNDLFlBQVQsR0FBd0I7QUFDcEIsUUFBTUMsT0FBTyxHQUFHUCxNQUFNLEdBQUMsR0FBdkI7QUFDQUssVUFBTSxDQUFDLENBQUNILElBQUksSUFBRUssT0FBTyxHQUFDQSxPQUFWLENBQUwsRUFBeUJDLE9BQXpCLENBQWlDLENBQWpDLENBQUQsQ0FBTjtBQUNIOztBQUNMLFdBQVNDLFNBQVQsR0FBcUI7QUFDakIsUUFBR0wsR0FBRyxHQUFHLElBQVQsRUFBZ0IsT0FBTyxnQkFBUDtBQUNoQixRQUFHQSxHQUFHLEdBQUcsSUFBVCxFQUFnQixPQUFPLGFBQVA7QUFDaEIsUUFBR0EsR0FBRyxHQUFHLElBQVQsRUFBZ0IsT0FBTyxZQUFQO0FBQ2hCLFFBQUdBLEdBQUcsR0FBRyxJQUFULEVBQWdCLE9BQU8sa0JBQVA7QUFDaEIsUUFBR0EsR0FBRyxHQUFHLElBQVQsRUFBZ0IsT0FBTyxrQkFBUDtBQUVuQjs7QUFFRyxTQUNJO0FBQUssYUFBUyxFQUFFTSw2REFBTSxDQUFDQyxVQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQywyREFBRDtBQUFXLFlBQVEsRUFBQyxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQyxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURBLEVBSUEsTUFBQyxzREFBRDtBQUFNLGFBQVMsTUFBZjtBQUFnQixhQUFTLEVBQUMsUUFBMUI7QUFBbUMsV0FBTyxFQUFFLENBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLDJEQUFEO0FBQVcsU0FBSyxFQUFDLGNBQWpCO0FBQWdDLFdBQU8sRUFBQyxRQUF4QztBQUFpRCxhQUFTLE1BQTFEO0FBQTJELFFBQUksRUFBQyxRQUFoRTtBQUF5RSxTQUFLLEVBQUVYLE1BQWhGO0FBQXdGLFlBQVEsRUFBRSxrQkFBQ1ksQ0FBRDtBQUFBLGFBQU1YLFNBQVMsQ0FBQ1csQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBZjtBQUFBLEtBQWxHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQURKLEVBSUksTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQywyREFBRDtBQUFXLFNBQUssRUFBQyxZQUFqQjtBQUE4QixXQUFPLEVBQUMsUUFBdEM7QUFBZ0QsYUFBUyxNQUF6RDtBQUEwRCxRQUFJLEVBQUMsUUFBL0Q7QUFBd0UsU0FBSyxFQUFFWixJQUEvRTtBQUFzRixZQUFRLEVBQUUsa0JBQUNVLENBQUQ7QUFBQSxhQUFNVCxPQUFPLENBQUNTLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWI7QUFBQSxLQUFoRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsQ0FKSixFQU9JLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsd0RBQUQ7QUFBUSxXQUFPLEVBQUMsV0FBaEI7QUFBNEIsU0FBSyxFQUFDLFNBQWxDO0FBQTZDLGFBQVMsTUFBdEQ7QUFDQSxXQUFPLEVBQUU7QUFBQSxhQUFLUixZQUFZLEVBQWpCO0FBQUEsS0FEVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLENBUEosRUFjSSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBQ1lGLEdBRFosV0FESixDQWRKLENBSkEsQ0FERCxDQURKO0FBOEJIIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DYWxjdWxhdG9yL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbnRhaW5lciwgR3JpZCwgVHlwb2dyYXBoeSwgVGV4dEZpZWxkLCBCdXR0b259IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9DYWxjdWxhdG9yLm1vZHVsZS5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgW2FsdHVyYSwgc2V0QWx0dXJhXSA9IHVzZVN0YXRlKDApXG4gICAgY29uc3QgW3Blc28sIHNldFBlc29dID0gdXNlU3RhdGUoMClcbiAgICBjb25zdCBbaW1jLCBzZXRJbWNdID0gdXNlU3RhdGUoKVxuXG4gICAgZnVuY3Rpb24gY2FsY3VsYXRlSU1DICgpe1xuICAgICAgICBjb25zdCBhbHR1cmFtID0gYWx0dXJhLzEwMFxuICAgICAgICBzZXRJbWMoKHBlc28vKGFsdHVyYW0qYWx0dXJhbSkpLnRvRml4ZWQoMikpXG4gICAgfVxuZnVuY3Rpb24gdmVyaWZ5SU1DICgpe1xuICAgIGlmKGltYyA8IDE4LjUgKSByZXR1cm4gJ0FiYWl4byBkbyBwZXNvJ1xuICAgIGlmKGltYyA8IDI0LjkgKSByZXR1cm4gJ1Blc28gTm9ybWFsJ1xuICAgIGlmKGltYyA8IDI5LjkgKSByZXR1cm4gJ1NvYnJlLXBlc28nXG4gICAgaWYoaW1jIDwgMzQuOSApIHJldHVybiAnT2Jlc2lkYWRlIEdyYXUgMSdcbiAgICBpZihpbWMgPCAzOS45ICkgcmV0dXJuICdPYmVzaWRhZGUgR3JhdSAyJ1xuXG59XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhbGN1bGF0b3J9ID5cbiAgICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJ4c1wiID5cbiAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiID5cbiAgICAgICAgICBDYWxjdWxhZG9yYVxuICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj1cImNvbHVtblwiIHNwYWNpbmc9ezJ9ID5cbiAgICAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgICA8VGV4dEZpZWxkIGxhYmVsPVwiQWx0dXJhIGVtIGNtXCIgdmFyaWFudD1cImZpbGxlZFwiIGZ1bGxXaWR0aCB0eXBlPVwibnVtYmVyXCIgdmFsdWU9e2FsdHVyYX0gb25DaGFuZ2U9eyhlKT0+IHNldEFsdHVyYShlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgIDxHcmlkIGl0ZW0+XG4gICAgICAgICAgICAgIDxUZXh0RmllbGQgbGFiZWw9XCJQZXNvIGVtIGtnXCIgdmFyaWFudD1cImZpbGxlZFwiICBmdWxsV2lkdGggdHlwZT1cIm51bWJlclwiIHZhbHVlPXtwZXNvfSAgb25DaGFuZ2U9eyhlKT0+IHNldFBlc28oZS50YXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT4gY2FsY3VsYXRlSU1DKCl9ID5cbiAgICAgICAgICAgICAgICAgQ2FsY3VsYXJcbiAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgTyBzZXUgSU1DIMOpIHtpbWN9IGtnL20yXG4gICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Calculator/index.js\n");

/***/ })

})