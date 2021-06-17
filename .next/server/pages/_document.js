(function() {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./lib/gtag.js":
/*!*********************!*\
  !*** ./lib/gtag.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pageview": function() { return /* binding */ pageview; },
/* harmony export */   "event": function() { return /* binding */ event; }
/* harmony export */ });
// lib/gtag.js
// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
const pageview = url => {
  window.gtag('config', 'G-68D7X7GVFQ', {
    page_path: url
  });
}; // https://developers.google.com/analytics/devguides/collection/gtagjs/events

const event = ({
  action,
  category,
  label,
  value
}) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value
  });
};

/***/ }),

/***/ "./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ "./node_modules/next/document.js");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_gtag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/gtag */ "./lib/gtag.js");

var _jsxFileName = "D:\\proyectsPrivate\\portfolio\\pages\\_document.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_1___default()) {
  static async getInitialProps(ctx) {
    const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1___default().getInitialProps(ctx);
    return _objectSpread({}, initialProps);
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
          property: "og:type",
          content: "website"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
          property: "og:image",
          itemprop: "image primaryImageOfPage",
          content: "assets/img/cort.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
          property: "og:url",
          content: "https://willycordon.vercel.app/"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
          async: true,
          src: `https://www.googletagmanager.com/gtag/js?id=G-68D7X7GVFQ`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
          dangerouslySetInnerHTML: {
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-68D7X7GVFQ', {
              page_path: window.location.pathname,
            });
          `
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          href: "assets/img/favicon.png",
          rel: "icon"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          href: "assets/img/apple-touch-icon.png",
          rel: "apple-touch-icon"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          href: "https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i",
          rel: "stylesheet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          href: "assets/vendor/bootstrap/css/bootstrap.min.css",
          rel: "stylesheet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          href: "assets/vendor/icofont/icofont.min.css",
          rel: "stylesheet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          href: "assets/vendor/boxicons/css/boxicons.min.css",
          rel: "stylesheet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          href: "assets/vendor/venobox/venobox.css",
          rel: "stylesheet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          href: "assets/vendor/owl.carousel/assets/owl.carousel.min.css",
          rel: "stylesheet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          href: "assets/vendor/aos/aos.css",
          rel: "stylesheet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          href: "assets/css/style.css",
          rel: "stylesheet"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          rel: "stylesheet",
          href: "https://unicons.iconscout.com/release/v4.0.0/css/thinline.css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("body", {
        "data-mobile-nav-trigger-alignment": "right",
        "data-mobile-nav-align": "left",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
          src: "assets/vendor/jquery/jquery.min.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
          src: "assets/vendor/bootstrap/js/bootstrap.bundle.min.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
          src: "assets/vendor/jquery.easing/jquery.easing.min.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
          src: "assets/vendor/php-email-form/validate.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
          src: "assets/vendor/waypoints/jquery.waypoints.min.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
          src: "assets/vendor/counterup/counterup.min.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
          src: "assets/vendor/isotope-layout/isotope.pkgd.min.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
          src: "assets/vendor/venobox/venobox.min.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
          src: "assets/vendor/owl.carousel/owl.carousel.min.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
          src: "assets/vendor/typed.js/typed.min.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
          src: "assets/vendor/aos/aos.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
          src: "assets/js/main.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MyDocument);

/***/ }),

/***/ "../next-server/lib/constants":
/*!*********************************************************!*\
  !*** external "next/dist/next-server/lib/constants.js" ***!
  \*********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/constants.js");;

/***/ }),

/***/ "../next-server/lib/document-context":
/*!****************************************************************!*\
  !*** external "next/dist/next-server/lib/document-context.js" ***!
  \****************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/document-context.js");;

/***/ }),

/***/ "../next-server/lib/head-manager-context":
/*!********************************************************************!*\
  !*** external "next/dist/next-server/lib/head-manager-context.js" ***!
  \********************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head-manager-context.js");;

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ "../next-server/server/get-page-files":
/*!*****************************************************************!*\
  !*** external "next/dist/next-server/server/get-page-files.js" ***!
  \*****************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/get-page-files.js");;

/***/ }),

/***/ "../next-server/server/utils":
/*!********************************************************!*\
  !*** external "next/dist/next-server/server/utils.js" ***!
  \********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/utils.js");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/server");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_document_js"], function() { return __webpack_exec__("./pages/_document.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9saWIvZ3RhZy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9wYWdlcy9fZG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9jb25zdGFudHMuanNcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2RvY3VtZW50LWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQtbWFuYWdlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovL3BvcnRmb2xpby9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMuanNcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovL3BvcnRmb2xpby9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zZXJ2ZXJcIiJdLCJuYW1lcyI6WyJwYWdldmlldyIsInVybCIsIndpbmRvdyIsImd0YWciLCJwYWdlX3BhdGgiLCJldmVudCIsImFjdGlvbiIsImNhdGVnb3J5IiwibGFiZWwiLCJ2YWx1ZSIsImV2ZW50X2NhdGVnb3J5IiwiZXZlbnRfbGFiZWwiLCJNeURvY3VtZW50IiwiRG9jdW1lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJpbml0aWFsUHJvcHMiLCJyZW5kZXIiLCJfX2h0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDTyxNQUFNQSxRQUFRLEdBQUlDLEdBQUQsSUFBUztBQUM3QkMsUUFBTSxDQUFDQyxJQUFQLENBQVksUUFBWixFQUFzQixjQUF0QixFQUFzQztBQUNwQ0MsYUFBUyxFQUFFSDtBQUR5QixHQUF0QztBQUdELENBSkksQyxDQU1MOztBQUNPLE1BQU1JLEtBQUssR0FBRyxDQUFDO0FBQUVDLFFBQUY7QUFBVUMsVUFBVjtBQUFvQkMsT0FBcEI7QUFBMkJDO0FBQTNCLENBQUQsS0FBd0M7QUFDM0RQLFFBQU0sQ0FBQ0MsSUFBUCxDQUFZLE9BQVosRUFBcUJHLE1BQXJCLEVBQTZCO0FBQzNCSSxrQkFBYyxFQUFFSCxRQURXO0FBRTNCSSxlQUFXLEVBQUVILEtBRmM7QUFHM0JDLFNBQUssRUFBRUE7QUFIb0IsR0FBN0I7QUFLRCxDQU5NLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVFQ7QUFDQTs7QUFFQSxNQUFNRyxVQUFOLFNBQXlCQyxzREFBekIsQ0FBa0M7QUFDaEMsZUFBYUMsZUFBYixDQUE2QkMsR0FBN0IsRUFBa0M7QUFDaEMsVUFBTUMsWUFBWSxHQUFHLE1BQU1ILG9FQUFBLENBQXlCRSxHQUF6QixDQUEzQjtBQUNBLDZCQUFZQyxZQUFaO0FBQ0Q7O0FBRURDLFFBQU0sR0FBRztBQUNQLHdCQUNFLDhEQUFDLCtDQUFEO0FBQUEsOEJBQ0UsOERBQUMsK0NBQUQ7QUFBQSxnQ0FFQTtBQUFNLGtCQUFRLEVBQUMsU0FBZjtBQUF5QixpQkFBTyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkEsZUFHQTtBQUFNLGtCQUFRLEVBQUMsVUFBZjtBQUEwQixrQkFBUSxFQUFDLDBCQUFuQztBQUE4RCxpQkFBTyxFQUFDO0FBQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEEs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O0FBQUE7QUFBQSxnQkFoQkosZUFtQkk7QUFBUSxhQUFHLEVBQUM7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQW5CSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EzQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFvRUQ7O0FBM0UrQjs7QUE4RWxDLCtEQUFlTixVQUFmLEU7Ozs7Ozs7Ozs7O0FDakZBLG9FOzs7Ozs7Ozs7OztBQ0FBLDJFOzs7Ozs7Ozs7OztBQ0FBLCtFOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLDRFOzs7Ozs7Ozs7OztBQ0FBLG1FOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL19kb2N1bWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGxpYi9ndGFnLmpzXHJcbi8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9ndGFnanMvcGFnZXNcclxuZXhwb3J0IGNvbnN0IHBhZ2V2aWV3ID0gKHVybCkgPT4ge1xyXG4gICAgd2luZG93Lmd0YWcoJ2NvbmZpZycsICdHLTY4RDdYN0dWRlEnLCB7XHJcbiAgICAgIHBhZ2VfcGF0aDogdXJsLFxyXG4gICAgfSlcclxuICB9XHJcbiAgXHJcbiAgLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vYW5hbHl0aWNzL2Rldmd1aWRlcy9jb2xsZWN0aW9uL2d0YWdqcy9ldmVudHNcclxuICBleHBvcnQgY29uc3QgZXZlbnQgPSAoeyBhY3Rpb24sIGNhdGVnb3J5LCBsYWJlbCwgdmFsdWUgfSkgPT4ge1xyXG4gICAgd2luZG93Lmd0YWcoJ2V2ZW50JywgYWN0aW9uLCB7XHJcbiAgICAgIGV2ZW50X2NhdGVnb3J5OiBjYXRlZ29yeSxcclxuICAgICAgZXZlbnRfbGFiZWw6IGxhYmVsLFxyXG4gICAgICB2YWx1ZTogdmFsdWUsXHJcbiAgICB9KVxyXG4gIH0iLCJpbXBvcnQgRG9jdW1lbnQsIHsgSHRtbCwgSGVhZCwgTWFpbiwgTmV4dFNjcmlwdCB9IGZyb20gJ25leHQvZG9jdW1lbnQnXHJcbmltcG9ydCB7R0FfVFJBS0lOR19JRH0gZnJvbSAnLi4vbGliL2d0YWcnO1xyXG5cclxuY2xhc3MgTXlEb2N1bWVudCBleHRlbmRzIERvY3VtZW50IHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGN0eCkge1xyXG4gICAgY29uc3QgaW5pdGlhbFByb3BzID0gYXdhaXQgRG9jdW1lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eClcclxuICAgIHJldHVybiB7IC4uLmluaXRpYWxQcm9wcyB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8SHRtbD5cclxuICAgICAgICA8SGVhZD5cclxuXHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBpdGVtcHJvcD1cImltYWdlIHByaW1hcnlJbWFnZU9mUGFnZVwiIGNvbnRlbnQ9XCJhc3NldHMvaW1nL2NvcnQuanBnXCIgLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9XCJodHRwczovL3dpbGx5Y29yZG9uLnZlcmNlbC5hcHAvXCIgLz5cclxuXHJcbiAgICAgICAgICAgIHsvKiBHbG9iYWwgU2l0ZSBUYWcgKGd0YWcuanMpIC0gR29vZ2xlIEFuYWx5dGljcyAqL31cclxuICAgICAgICAgICAgPHNjcmlwdFxyXG4gICAgICAgICAgICBhc3luY1xyXG4gICAgICAgICAgICBzcmM9e2BodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPUctNjhEN1g3R1ZGUWB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHNjcmlwdFxyXG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xyXG4gICAgICAgICAgICAgIF9faHRtbDogYFxyXG4gICAgICAgICAgICB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTtcclxuICAgICAgICAgICAgZnVuY3Rpb24gZ3RhZygpe2RhdGFMYXllci5wdXNoKGFyZ3VtZW50cyk7fVxyXG4gICAgICAgICAgICBndGFnKCdqcycsIG5ldyBEYXRlKCkpO1xyXG4gICAgICAgICAgICBndGFnKCdjb25maWcnLCAnRy02OEQ3WDdHVkZRJywge1xyXG4gICAgICAgICAgICAgIHBhZ2VfcGF0aDogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIGAsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPGxpbmsgaHJlZj1cImFzc2V0cy9pbWcvZmF2aWNvbi5wbmdcIiByZWw9XCJpY29uXCIgLz5cclxuICAgICAgICAgICAgPGxpbmsgaHJlZj1cImFzc2V0cy9pbWcvYXBwbGUtdG91Y2gtaWNvbi5wbmdcIiByZWw9XCJhcHBsZS10b3VjaC1pY29uXCIgLz5cclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2FuczozMDAsMzAwaSw0MDAsNDAwaSw2MDAsNjAwaSw3MDAsNzAwaXxSYWxld2F5OjMwMCwzMDBpLDQwMCw0MDBpLDUwMCw1MDBpLDYwMCw2MDBpLDcwMCw3MDBpfFBvcHBpbnM6MzAwLDMwMGksNDAwLDQwMGksNTAwLDUwMGksNjAwLDYwMGksNzAwLDcwMGlcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cclxuXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJhc3NldHMvdmVuZG9yL2Jvb3RzdHJhcC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cclxuICAgICAgICAgICAgPGxpbmsgaHJlZj1cImFzc2V0cy92ZW5kb3IvaWNvZm9udC9pY29mb250Lm1pbi5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cclxuICAgICAgICAgICAgPGxpbmsgaHJlZj1cImFzc2V0cy92ZW5kb3IvYm94aWNvbnMvY3NzL2JveGljb25zLm1pbi5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cclxuICAgICAgICAgICAgPGxpbmsgaHJlZj1cImFzc2V0cy92ZW5kb3IvdmVub2JveC92ZW5vYm94LmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxyXG4gICAgICAgICAgICA8bGluayBocmVmPVwiYXNzZXRzL3ZlbmRvci9vd2wuY2Fyb3VzZWwvYXNzZXRzL293bC5jYXJvdXNlbC5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XHJcbiAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJhc3NldHMvdmVuZG9yL2Fvcy9hb3MuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGxpbmsgaHJlZj1cImFzc2V0cy9jc3Mvc3R5bGUuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly91bmljb25zLmljb25zY291dC5jb20vcmVsZWFzZS92NC4wLjAvY3NzL3RoaW5saW5lLmNzc1wiPjwvbGluaz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPGJvZHkgZGF0YS1tb2JpbGUtbmF2LXRyaWdnZXItYWxpZ25tZW50PVwicmlnaHRcIiBkYXRhLW1vYmlsZS1uYXYtYWxpZ249XCJsZWZ0XCIgICA+IFxyXG4gICAgICAgICAgPE1haW4gLz5cclxuICAgICAgICAgIDxOZXh0U2NyaXB0IC8+XHJcblxyXG5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICA8c2NyaXB0IHNyYz1cImFzc2V0cy92ZW5kb3IvanF1ZXJ5L2pxdWVyeS5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJhc3NldHMvdmVuZG9yL2Jvb3RzdHJhcC9qcy9ib290c3RyYXAuYnVuZGxlLm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgICAgICA8c2NyaXB0IHNyYz1cImFzc2V0cy92ZW5kb3IvanF1ZXJ5LmVhc2luZy9qcXVlcnkuZWFzaW5nLm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgICAgICA8c2NyaXB0IHNyYz1cImFzc2V0cy92ZW5kb3IvcGhwLWVtYWlsLWZvcm0vdmFsaWRhdGUuanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJhc3NldHMvdmVuZG9yL3dheXBvaW50cy9qcXVlcnkud2F5cG9pbnRzLm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgICAgICA8c2NyaXB0IHNyYz1cImFzc2V0cy92ZW5kb3IvY291bnRlcnVwL2NvdW50ZXJ1cC5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJhc3NldHMvdmVuZG9yL2lzb3RvcGUtbGF5b3V0L2lzb3RvcGUucGtnZC5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJhc3NldHMvdmVuZG9yL3Zlbm9ib3gvdmVub2JveC5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJhc3NldHMvdmVuZG9yL293bC5jYXJvdXNlbC9vd2wuY2Fyb3VzZWwubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiYXNzZXRzL3ZlbmRvci90eXBlZC5qcy90eXBlZC5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJhc3NldHMvdmVuZG9yL2Fvcy9hb3MuanNcIj48L3NjcmlwdD5cclxuXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiYXNzZXRzL2pzL21haW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgIFxyXG4gICAgICAgIDwvYm9keT5cclxuICAgICAgPC9IdG1sPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlEb2N1bWVudCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvY29uc3RhbnRzLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2RvY3VtZW50LWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC1tYW5hZ2VyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvdXRpbHMuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc2VydmVyXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9