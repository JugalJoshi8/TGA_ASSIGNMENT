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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__("0bYB");
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_);

// CONCATENATED MODULE: ./src/utils.js
const getLocation = (href = "") => {
  var match = href && href.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);
  return match ? {
    href: href,
    protocol: match[1],
    host: match[2],
    hostname: match[3],
    port: match[4],
    pathname: match[5],
    search: match[6],
    hash: match[7]
  } : {};
};
const getHoursPassed = dateString => {
  var diff = (new Date().getTime() - new Date(dateString).getTime()) / 1000;
  diff /= 60 * 60;
  return Math.abs(Math.round(diff));
};
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/promise.js
var promise = __webpack_require__("eVuF");
var promise_default = /*#__PURE__*/__webpack_require__.n(promise);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js
var stringify = __webpack_require__("9Jkg");
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// CONCATENATED MODULE: ./src/NewsService.js


const hiddenItems = JSON.parse(typeof localStorage !== "undefined" && localStorage.getItem("hiddenItems") || "{}");
const NewsService_upvotes = JSON.parse(typeof localStorage !== "undefined" && localStorage.getItem("upvotes") || "{}");
const setItemAsHidden = key => {
  hiddenItems[key] = true;
  localStorage.setItem("hiddenItems", stringify_default()(hiddenItems));
};
const isItemHidden = key => {
  return hiddenItems[key] === true;
};
const getUpvotes = key => {
  return new promise_default.a(resolve => {
    resolve(NewsService_upvotes[key] || 0);
  });
};
const upvoteItem = (key, value) => {
  NewsService_upvotes[key] = value;
  localStorage.setItem("upvotes", stringify_default()(NewsService_upvotes));
};
// CONCATENATED MODULE: ./src/components/molecules/NewsItem.js


var __jsx = external_react_default.a.createElement;



/* harmony default export */ var NewsItem = (({
  item
}) => {
  const {
    0: isHidden,
    1: setHidden
  } = Object(external_react_["useState"])(isItemHidden(item.objectID));

  if (isHidden) {
    return null;
  }

  const {
    0: upvotes,
    1: setUpvotes
  } = Object(external_react_["useState"])(0);
  Object(external_react_["useEffect"])(() => {
    const getUpvotesFunc = async () => {
      const upvotes = await getUpvotes(item.objectID);
      setUpvotes(upvotes);
    };

    getUpvotesFunc();
  }, []);
  return __jsx("li", {
    className: "jsx-2949268551" + " " + "flex align-center pl2"
  }, __jsx("div", {
    className: "jsx-2949268551" + " " + "mr2 comments"
  }, item.num_comments || 0), __jsx("div", {
    className: "jsx-2949268551" + " " + "mr1 upvotes"
  }, upvotes || 0), __jsx("div", {
    onClick: () => {
      upvoteItem(item.objectID, upvotes + 1);
      setUpvotes(upvotes + 1);
    },
    className: "jsx-2949268551" + " " + "p1 mr2"
  }, __jsx("div", {
    className: "jsx-2949268551" + " " + "upvoteIcon"
  })), __jsx("div", {
    className: "jsx-2949268551" + " " + "flex details"
  }, __jsx("div", {
    className: "jsx-2949268551" + " " + "fs-lg mr1"
  }, item.title, " ", __jsx("a", {
    target: "_blank",
    href: item.url,
    className: "jsx-2949268551" + " " + "fs-sm light-color"
  }, "(", getLocation(item.url).hostname, ")"), " "), __jsx("div", {
    className: "jsx-2949268551" + " " + "mr1"
  }, __jsx("span", {
    className: "jsx-2949268551" + " " + "light-color"
  }, "by"), " ", item.author), __jsx("div", {
    className: "jsx-2949268551" + " " + "light-color mr1 fs-sm"
  }, getHoursPassed(item.created_at), " hours ago"), __jsx("div", {
    onClick: () => {
      setItemAsHidden(item.objectID);
      setHidden(true);
    },
    className: "jsx-2949268551" + " " + "hide-item"
  }, "[", __jsx("span", {
    className: "jsx-2949268551"
  }, "hide"), "]")), __jsx(style_default.a, {
    id: "2949268551"
  }, [".comments.jsx-2949268551,.upvotes.jsx-2949268551{min-width:40px;}", ".upvoteIcon.jsx-2949268551{width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:8px solid #888;cursor:pointer;}", ".light-color.jsx-2949268551{color:#333;}", "li.jsx-2949268551{background:#eee;line-height:40px;}", "li.jsx-2949268551:nth-child(2n){background:#ddd;}", ".details.jsx-2949268551{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}", ".hide-item.jsx-2949268551{cursor:pointer;}"]));
});
// CONCATENATED MODULE: ./src/components/templates/FrontPage.js


var FrontPage_jsx = external_react_default.a.createElement;





const FrontPage = props => {
  console.log(props);
  const {
    0: items,
    1: setItems
  } = Object(external_react_["useState"])(props.hits);
  const {
    0: currentPage,
    1: setCurrentPage
  } = Object(external_react_["useState"])(0);

  const getPageItems = async () => {
    const res = await external_isomorphic_unfetch_default()(`https://hn.algolia.com/api/v1/search?page=${currentPage + 1}`);
    const json = await res.json();
    setItems(items.concat(json.hits));
    setCurrentPage(currentPage + 1);
  };

  return FrontPage_jsx("div", {
    className: "jsx-2693121912" + " " + "container"
  }, FrontPage_jsx(head_default.a, null, FrontPage_jsx("title", {
    className: "jsx-2693121912"
  }, "Hacker news"), FrontPage_jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-2693121912"
  }), FrontPage_jsx("meta", {
    name: "description",
    content: "contains all the latest hacking related news",
    className: "jsx-2693121912"
  })), FrontPage_jsx("main", {
    className: "jsx-2693121912"
  }, FrontPage_jsx("ul", {
    className: "jsx-2693121912" + " " + "news-list"
  }, items.map(item => FrontPage_jsx(NewsItem, {
    key: item.objectID,
    item: item
  }))), FrontPage_jsx("div", {
    onClick: getPageItems,
    className: "jsx-2693121912" + " " + "load-more"
  }, "Load more")), FrontPage_jsx(style_default.a, {
    id: "2693121912"
  }, ["ul.jsx-2693121912{margin-bottom:20px;}", ".load-more.jsx-2693121912{cursor:pointer;margin-bottom:20px;}"]));
};

FrontPage.getInitialProps = async ctx => {
  const res = await external_isomorphic_unfetch_default()("https://hn.algolia.com/api/v1/search?page=0");
  const json = await res.json();
  return {
    hits: json.hits
  };
};

/* harmony default export */ var templates_FrontPage = (FrontPage);
// CONCATENATED MODULE: ./pages/index.js
/* concated harmony reexport default */__webpack_require__.d(__webpack_exports__, "default", function() { return templates_FrontPage; });



/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });