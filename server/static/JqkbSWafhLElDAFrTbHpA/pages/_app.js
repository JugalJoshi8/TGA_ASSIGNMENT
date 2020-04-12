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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js
var object_assign = __webpack_require__("UXZV");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js

function _extends() {
  _extends = assign_default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./src/components/shared/Header.js


var __jsx = external_react_default.a.createElement;

const Header = () => {
  return __jsx("header", {
    className: "jsx-3382266299" + " " + "flex align-center p1"
  }, __jsx("div", {
    className: "jsx-3382266299" + " " + "logo ml1 mr1"
  }, "Y"), __jsx("h1", {
    className: "jsx-3382266299"
  }, "Hacker News"), __jsx("ul", {
    className: "jsx-3382266299"
  }, __jsx("li", {
    className: "jsx-3382266299"
  }, "new"), __jsx("li", {
    className: "jsx-3382266299"
  }, "past"), __jsx("li", {
    className: "jsx-3382266299"
  }, "comments"), __jsx("li", {
    className: "jsx-3382266299"
  }, "ask"), __jsx("li", {
    className: "jsx-3382266299"
  }, "show"), __jsx("li", {
    className: "jsx-3382266299"
  }, "jobs"), __jsx("li", {
    className: "jsx-3382266299"
  }, "submit")), __jsx(style_default.a, {
    id: "3382266299"
  }, ["header.jsx-3382266299{background-color:rgb(255,102,0);color:#000;}", ".logo.jsx-3382266299{color:white;padding:10px;border:solid 2px white;}", "h1.jsx-3382266299{font-size:1rem;color:inherit;}", "ul.jsx-3382266299{list-style:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}", "li.jsx-3382266299{padding:0 10px;cursor:pointer;}", "li.jsx-3382266299:not(:last-child){border-right:solid 1px black;}"]));
};

/* harmony default export */ var shared_Header = (Header);
// CONCATENATED MODULE: ./pages/_app.js



var _app_jsx = external_react_default.a.createElement;


function MyApp({
  Component,
  pageProps
}) {
  return _app_jsx(external_react_default.a.Fragment, null, _app_jsx(shared_Header, null), _app_jsx(Component, _extends({}, pageProps, {
    className: "jsx-1067393241" + " " + (pageProps && pageProps.className != null && pageProps.className || "")
  })), _app_jsx(style_default.a, {
    id: "1067393241"
  }, ["html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;max-width:1200px;margin:0 auto;}", "*{box-sizing:border-box;}", "ul{list-style:none;margin:0;padding:0;}", ".flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".align-center{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}", ".fs-xs{font-size:12px;}", ".fs-sm{font-size:14px;}", ".fs{font-size:16px;}", ".fs-lg{font-size:18px;}", ".fs-xl{font-size:24px;}", ".p1{padding:10px;}", ".pl1{padding-left:10px;}", ".ml1{margin-left:10px;}", ".pr1{padding-right:10px;}", ".mr1{margin-right:10px;}", ".pl2{padding-left:20px;}", ".ml2{margin-left:20px;}", ".pr2{padding-right:20px;}", ".mr2{margin-right:20px;}"]));
}

/* harmony default export */ var _app = __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ })

/******/ });