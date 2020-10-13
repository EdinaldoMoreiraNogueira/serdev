module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Calculator/Calculator.module.css":
/*!*****************************************************!*\
  !*** ./components/Calculator/Calculator.module.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"calculator\": \"Calculator_calculator__WCRNJ\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhbGN1bGF0b3IvQ2FsY3VsYXRvci5tb2R1bGUuY3NzPzNkMDkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhbGN1bGF0b3IvQ2FsY3VsYXRvci5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY2FsY3VsYXRvclwiOiBcIkNhbGN1bGF0b3JfY2FsY3VsYXRvcl9fV0NSTkpcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Calculator/Calculator.module.css\n");

/***/ }),

/***/ "./components/Calculator/index.js":
/*!****************************************!*\
  !*** ./components/Calculator/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Calculator_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Calculator.module.css */ \"./components/Calculator/Calculator.module.css\");\n/* harmony import */ var _Calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Calculator_module_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/acer/Diversos/Serdev/components/Calculator/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  const {\n    0: altura,\n    1: setAltura\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0);\n  const {\n    0: peso,\n    1: setPeso\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0);\n  const {\n    0: imc,\n    1: setImc\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])();\n\n  function calculateIMC() {\n    const alturam = altura / 100;\n    setImc((peso / (alturam * alturam)).toFixed(2));\n  }\n\n  function verifyIMC() {\n    if (imc < 18.5) return 'Abaixo do peso';\n    if (imc < 24.9) return 'Peso Normal';\n    if (imc < 29.9) return 'Sobre-peso';\n    if (imc < 34.9) return 'Obesidade Grau 1';\n    if (imc < 39.9) return 'Obesidade Grau 2';\n    return \"Obesidade Grau 3\";\n  }\n\n  return __jsx(\"div\", {\n    className: _Calculator_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.calculator,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    maxWidth: \"xs\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 17\n    }\n  }, \"Calculadora\"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    container: true,\n    direction: \"column\",\n    spacing: 2,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 17\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    item: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 21\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n    label: \"Altura em cm\",\n    variant: \"filled\",\n    fullWidth: true,\n    type: \"number\",\n    value: altura,\n    onChange: e => setAltura(e.target.value),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 25\n    }\n  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    item: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 21\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"TextField\"], {\n    label: \"Peso em kg\",\n    variant: \"filled\",\n    fullWidth: true,\n    type: \"number\",\n    value: peso,\n    onChange: e => setPeso(e.target.value),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 25\n    }\n  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    item: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 21\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    variant: \"contained\",\n    color: \"primary\",\n    fullWidth: true,\n    onClick: () => calculateIMC(),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 25\n    }\n  }, \"Calcular\")), imc && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    item: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 25\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 29\n    }\n  }, \"O seu IMC \\xE9 \", imc, \" kg/m2 - \", verifyIMC())))));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhbGN1bGF0b3IvaW5kZXguanM/NzRhNyJdLCJuYW1lcyI6WyJhbHR1cmEiLCJzZXRBbHR1cmEiLCJ1c2VTdGF0ZSIsInBlc28iLCJzZXRQZXNvIiwiaW1jIiwic2V0SW1jIiwiY2FsY3VsYXRlSU1DIiwiYWx0dXJhbSIsInRvRml4ZWQiLCJ2ZXJpZnlJTUMiLCJzdHlsZXMiLCJjYWxjdWxhdG9yIiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSwyRUFBWTtBQUN2QixRQUFNO0FBQUEsT0FBQ0EsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JDLHNEQUFRLENBQUMsQ0FBRCxDQUFwQztBQUNBLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkYsc0RBQVEsQ0FBQyxDQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLEdBQUQ7QUFBQSxPQUFNQztBQUFOLE1BQWdCSixzREFBUSxFQUE5Qjs7QUFFQSxXQUFTSyxZQUFULEdBQXdCO0FBQ3BCLFVBQU1DLE9BQU8sR0FBR1IsTUFBTSxHQUFHLEdBQXpCO0FBQ0FNLFVBQU0sQ0FBQyxDQUFDSCxJQUFJLElBQUlLLE9BQU8sR0FBR0EsT0FBZCxDQUFMLEVBQTZCQyxPQUE3QixDQUFxQyxDQUFyQyxDQUFELENBQU47QUFDSDs7QUFDRCxXQUFTQyxTQUFULEdBQXFCO0FBQ2pCLFFBQUlMLEdBQUcsR0FBRyxJQUFWLEVBQWdCLE9BQU8sZ0JBQVA7QUFDaEIsUUFBSUEsR0FBRyxHQUFHLElBQVYsRUFBZ0IsT0FBTyxhQUFQO0FBQ2hCLFFBQUlBLEdBQUcsR0FBRyxJQUFWLEVBQWdCLE9BQU8sWUFBUDtBQUNoQixRQUFJQSxHQUFHLEdBQUcsSUFBVixFQUFnQixPQUFPLGtCQUFQO0FBQ2hCLFFBQUlBLEdBQUcsR0FBRyxJQUFWLEVBQWdCLE9BQU8sa0JBQVA7QUFDaEIsV0FBTyxrQkFBUDtBQUVIOztBQUVELFNBQ0k7QUFBSyxhQUFTLEVBQUVNLDZEQUFNLENBQUNDLFVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDJEQUFEO0FBQVcsWUFBUSxFQUFDLElBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDLElBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosRUFJSSxNQUFDLHNEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLGFBQVMsRUFBQyxRQUExQjtBQUFtQyxXQUFPLEVBQUUsQ0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsc0RBQUQ7QUFBTSxRQUFJLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsMkRBQUQ7QUFBVyxTQUFLLEVBQUMsY0FBakI7QUFBZ0MsV0FBTyxFQUFDLFFBQXhDO0FBQWlELGFBQVMsTUFBMUQ7QUFBMkQsUUFBSSxFQUFDLFFBQWhFO0FBQXlFLFNBQUssRUFBRVosTUFBaEY7QUFBd0YsWUFBUSxFQUFHYSxDQUFELElBQU9aLFNBQVMsQ0FBQ1ksQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBbEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREosRUFJSSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDJEQUFEO0FBQVcsU0FBSyxFQUFDLFlBQWpCO0FBQThCLFdBQU8sRUFBQyxRQUF0QztBQUErQyxhQUFTLE1BQXhEO0FBQXlELFFBQUksRUFBQyxRQUE5RDtBQUF1RSxTQUFLLEVBQUVaLElBQTlFO0FBQW9GLFlBQVEsRUFBR1UsQ0FBRCxJQUFPVCxPQUFPLENBQUNTLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQTVHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQUpKLEVBT0ksTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx3REFBRDtBQUFRLFdBQU8sRUFBQyxXQUFoQjtBQUE0QixTQUFLLEVBQUMsU0FBbEM7QUFBNEMsYUFBUyxNQUFyRDtBQUNJLFdBQU8sRUFBRSxNQUFNUixZQUFZLEVBRC9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosQ0FQSixFQWNLRixHQUFHLElBQ0EsTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUNpQkEsR0FEakIsZUFDK0JLLFNBQVMsRUFEeEMsQ0FESixDQWZSLENBSkosQ0FESixDQURKO0FBa0NILEMiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhbGN1bGF0b3IvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb250YWluZXIsIEdyaWQsIFR5cG9ncmFwaHksIFRleHRGaWVsZCwgQnV0dG9uIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0NhbGN1bGF0b3IubW9kdWxlLmNzcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IFthbHR1cmEsIHNldEFsdHVyYV0gPSB1c2VTdGF0ZSgwKVxuICAgIGNvbnN0IFtwZXNvLCBzZXRQZXNvXSA9IHVzZVN0YXRlKDApXG4gICAgY29uc3QgW2ltYywgc2V0SW1jXSA9IHVzZVN0YXRlKClcblxuICAgIGZ1bmN0aW9uIGNhbGN1bGF0ZUlNQygpIHtcbiAgICAgICAgY29uc3QgYWx0dXJhbSA9IGFsdHVyYSAvIDEwMFxuICAgICAgICBzZXRJbWMoKHBlc28gLyAoYWx0dXJhbSAqIGFsdHVyYW0pKS50b0ZpeGVkKDIpKVxuICAgIH1cbiAgICBmdW5jdGlvbiB2ZXJpZnlJTUMoKSB7XG4gICAgICAgIGlmIChpbWMgPCAxOC41KSByZXR1cm4gJ0FiYWl4byBkbyBwZXNvJ1xuICAgICAgICBpZiAoaW1jIDwgMjQuOSkgcmV0dXJuICdQZXNvIE5vcm1hbCdcbiAgICAgICAgaWYgKGltYyA8IDI5LjkpIHJldHVybiAnU29icmUtcGVzbydcbiAgICAgICAgaWYgKGltYyA8IDM0LjkpIHJldHVybiAnT2Jlc2lkYWRlIEdyYXUgMSdcbiAgICAgICAgaWYgKGltYyA8IDM5LjkpIHJldHVybiAnT2Jlc2lkYWRlIEdyYXUgMidcbiAgICAgICAgcmV0dXJuIFwiT2Jlc2lkYWRlIEdyYXUgM1wiXG5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhbGN1bGF0b3J9ID5cbiAgICAgICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJ4c1wiID5cbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIiA+XG4gICAgICAgICAgICAgICAgICAgIENhbGN1bGFkb3JhXG4gICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIGRpcmVjdGlvbj1cImNvbHVtblwiIHNwYWNpbmc9ezJ9ID5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgbGFiZWw9XCJBbHR1cmEgZW0gY21cIiB2YXJpYW50PVwiZmlsbGVkXCIgZnVsbFdpZHRoIHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17YWx0dXJhfSBvbkNoYW5nZT17KGUpID0+IHNldEFsdHVyYShlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgbGFiZWw9XCJQZXNvIGVtIGtnXCIgdmFyaWFudD1cImZpbGxlZFwiIGZ1bGxXaWR0aCB0eXBlPVwibnVtYmVyXCIgdmFsdWU9e3Blc299IG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGVzbyhlLnRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiIGZ1bGxXaWR0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNhbGN1bGF0ZUlNQygpfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FsY3VsYXJcbiAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cblxuICAgICAgICAgICAgICAgICAgICB7aW1jICYmXG4gICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPIHNldSBJTUMgw6kge2ltY30ga2cvbTIgLSB7dmVyaWZ5SU1DKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgICAgICAgICB9XG5cblxuXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Calculator/index.js\n");

/***/ }),

/***/ "./components/Header/Header.module.css":
/*!*********************************************!*\
  !*** ./components/Header/Header.module.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"Header_header__1-VVS\",\n\t\"header_title\": \"Header_header_title__1NEws\",\n\t\"img\": \"Header_img__1QI-m\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIubW9kdWxlLmNzcz80NTAyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaGVhZGVyXCI6IFwiSGVhZGVyX2hlYWRlcl9fMS1WVlNcIixcblx0XCJoZWFkZXJfdGl0bGVcIjogXCJIZWFkZXJfaGVhZGVyX3RpdGxlX18xTkV3c1wiLFxuXHRcImltZ1wiOiBcIkhlYWRlcl9pbWdfXzFRSS1tXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header/Header.module.css\n");

/***/ }),

/***/ "./components/Header/index.js":
/*!************************************!*\
  !*** ./components/Header/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Header; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"@material-ui/core\");\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header.module.css */ \"./components/Header/Header.module.css\");\n/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Header_module_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/acer/Diversos/Serdev/components/Header/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction Header() {\n  return __jsx(\"div\", {\n    className: _Header_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.header,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    fixed: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    container: true,\n    justify: \"center\",\n    alignItems: \"center\",\n    space: 6,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 16\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    item: true,\n    xs: 12,\n    sm: 6,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 20\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h3\",\n    className: _Header_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.header_title,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 21\n    }\n  }, \"Calcule o seu IMC\"), \"O IMC \\xE9 o Indice de Massa Corporal e \\xE9 utilizado para saber se o peso esta de acordo com a altura\", __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 21\n    }\n  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Grid\"], {\n    item: true,\n    xs: 12,\n    sm: 6,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 20\n    }\n  }, __jsx(\"img\", {\n    className: _Header_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.img,\n    src: \"/medic.png\",\n    alt: \"m\\xE9dico e paciente\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 24\n    }\n  })))));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci9pbmRleC5qcz8zYTBjIl0sIm5hbWVzIjpbIkhlYWRlciIsInN0eWxlcyIsImhlYWRlciIsImhlYWRlcl90aXRsZSIsImltZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWdCLFNBQVNBLE1BQVQsR0FBa0I7QUFDOUIsU0FFSTtBQUFLLGFBQVMsRUFBRUMseURBQU0sQ0FBQ0MsTUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsMkRBQUQ7QUFBVyxTQUFLLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRyxNQUFDLHNEQUFEO0FBQU0sYUFBUyxNQUFmO0FBQWdCLFdBQU8sRUFBQyxRQUF4QjtBQUFpQyxjQUFVLEVBQUMsUUFBNUM7QUFBcUQsU0FBSyxFQUFFLENBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHNEQUFEO0FBQU0sUUFBSSxNQUFWO0FBQVcsTUFBRSxFQUFFLEVBQWY7QUFBbUIsTUFBRSxFQUFFLENBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDLElBQXBCO0FBQXlCLGFBQVMsRUFBRUQseURBQU0sQ0FBQ0UsWUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERCw2R0FLQyxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRCxDQURKLEVBVUksTUFBQyxzREFBRDtBQUFNLFFBQUksTUFBVjtBQUFXLE1BQUUsRUFBRSxFQUFmO0FBQW1CLE1BQUUsRUFBRSxDQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUVGLHlEQUFNLENBQUNHLEdBQXZCO0FBQTRCLE9BQUcsRUFBQyxZQUFoQztBQUE2QyxPQUFHLEVBQUMsc0JBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQVZKLENBREgsQ0FESixDQUZKO0FBdUJIIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9IZWFkZXIvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250YWluZXIsIEdyaWQsIFR5cG9ncmFwaHl9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBzdHlsZXMgZnJvbScuL0hlYWRlci5tb2R1bGUuY3NzJztcblxuIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlciAoKXtcbiAgICByZXR1cm4gKFxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfSA+XG4gICAgICAgICAgICA8Q29udGFpbmVyIGZpeGVkID5cbiAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBqdXN0aWZ5PVwiY2VudGVyXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiIHNwYWNlPXs2fSA+XG4gICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fSA+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcl90aXRsZX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ2FsY3VsZSBvIHNldSBJTUNcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5ID5cbiAgICAgICAgICAgICAgICAgICAgICAgTyBJTUMgw6kgbyBJbmRpY2UgZGUgTWFzc2EgQ29ycG9yYWwgZSDDqSB1dGlsaXphZG8gcGFyYSBzYWJlciBzZSBvIHBlc28gZXN0YSBkZSBhY29yZG8gY29tIGEgYWx0dXJhXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlxuXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IHNtPXs2fSA+XG4gICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaW1nfSBzcmM9XCIvbWVkaWMucG5nXCIgYWx0PVwibcOpZGljbyBlIHBhY2llbnRlXCIgLz5cblxuICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cblxuICAgICAgICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header/index.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"./components/Header/index.js\");\n/* harmony import */ var _components_Calculator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Calculator */ \"./components/Calculator/index.js\");\nvar _jsxFileName = \"/home/acer/Diversos/Serdev/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction HomePage() {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 8\n    }\n  }), __jsx(_components_Calculator__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 8\n    }\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWVQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxHQUFtQjtBQUNmLFNBQ0ksbUVBQ0QsTUFBRSwwREFBRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREMsRUFFRCxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGQyxDQURKO0FBTUg7O0FBRWNBLHVFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCBDYWxjdWxhdG9yIGZyb20gJy4uL2NvbXBvbmVudHMvQ2FsY3VsYXRvcic7XG5cbmZ1bmN0aW9uIEhvbWVQYWdlKCl7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICA8IEhlYWRlci8+XG4gICAgICAgPENhbGN1bGF0b3IvPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiP2I2OTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQG1hdGVyaWFsLXVpL2NvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@material-ui/core\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });