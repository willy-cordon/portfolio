(function() {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

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
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-ga */ "react-ga");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\proyectsPrivate\\portfolio\\pages\\_document.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const injectGA = () => {
  if (true) {
    return;
  }

  window.dataLayer = window.dataLayer || [];

  function gtag() {
    window.dataLayer.push(arguments);
  }

  gtag("js", new Date());
  gtag("config", "G-TJYD2HCCX7");
};

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
          lineNumber: 28,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
          property: "og:image",
          itemprop: "image primaryImageOfPage",
          content: "assets/img/cort.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
          property: "og:url",
          content: "https://willycordon.vercel.app/"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
          async: true,
          src: "https://www.googletagmanager.com/gtag/js?id=G-TJYD2HCCX7"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
          children: injectGA()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
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
        lineNumber: 26,
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
      lineNumber: 25,
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

/***/ "react-ga":
/*!***************************!*\
  !*** external "react-ga" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-ga");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9wYWdlcy9fZG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9jb25zdGFudHMuanNcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2RvY3VtZW50LWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQtbWFuYWdlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovL3BvcnRmb2xpby9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMuanNcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovL3BvcnRmb2xpby9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL2V4dGVybmFsIFwicmVhY3QtZ2FcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3NlcnZlclwiIl0sIm5hbWVzIjpbImluamVjdEdBIiwid2luZG93IiwiZGF0YUxheWVyIiwiZ3RhZyIsInB1c2giLCJhcmd1bWVudHMiLCJEYXRlIiwiTXlEb2N1bWVudCIsIkRvY3VtZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiaW5p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Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsNEU7Ozs7Ozs7Ozs7O0FDQUEsbUU7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvX2RvY3VtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERvY3VtZW50LCB7IEh0bWwsIEhlYWQsIE1haW4sIE5leHRTY3JpcHQgfSBmcm9tICduZXh0L2RvY3VtZW50J1xyXG5pbXBvcnQgUmVhY3RHQSBmcm9tICdyZWFjdC1nYSc7XHJcblxyXG5jb25zdCBpbmplY3RHQSA9ICgpID0+IHtcclxuICBpZiAodHlwZW9mIHdpbmRvdyA9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgcmV0dXJuO1xyXG4gIH1cclxuICB3aW5kb3cuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciB8fCBbXTtcclxuICBmdW5jdGlvbiBndGFnKCkge1xyXG4gIHdpbmRvdy5kYXRhTGF5ZXIucHVzaChhcmd1bWVudHMpO1xyXG4gIH1cclxuICBndGFnKFwianNcIiwgbmV3IERhdGUoKSk7XHJcbiAgXHJcbiAgZ3RhZyhcImNvbmZpZ1wiLCBcIkctVEpZRDJIQ0NYN1wiKTtcclxuICB9O1xyXG5cclxuY2xhc3MgTXlEb2N1bWVudCBleHRlbmRzIERvY3VtZW50IHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGN0eCkge1xyXG4gICAgY29uc3QgaW5pdGlhbFByb3BzID0gYXdhaXQgRG9jdW1lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eClcclxuICAgIHJldHVybiB7IC4uLmluaXRpYWxQcm9wcyB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8SHRtbD5cclxuICAgICAgICA8SGVhZD5cclxuXHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBpdGVtcHJvcD1cImltYWdlIHByaW1hcnlJbWFnZU9mUGFnZVwiIGNvbnRlbnQ9XCJhc3NldHMvaW1nL2NvcnQuanBnXCIgLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9XCJodHRwczovL3dpbGx5Y29yZG9uLnZlcmNlbC5hcHAvXCIgLz5cclxuXHJcbiAgICAgICBcclxuICAgICAgICAgIHsvKiBHbG9iYWwgc2l0ZSB0YWcgKGd0YWcuanMpIC0gR29vZ2xlIEFuYWx5dGljcyAqL31cclxuICAgICAgICAgIDxzY3JpcHQgYXN5bmMgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xldGFnbWFuYWdlci5jb20vZ3RhZy9qcz9pZD1HLVRKWUQySENDWDdcIj48L3NjcmlwdD5cclxuICAgICAgICAgIDxzY3JpcHQ+e2luamVjdEdBKCl9PC9zY3JpcHQ+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJhc3NldHMvaW1nL2Zhdmljb24ucG5nXCIgcmVsPVwiaWNvblwiIC8+XHJcbiAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJhc3NldHMvaW1nL2FwcGxlLXRvdWNoLWljb24ucG5nXCIgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIC8+XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PcGVuK1NhbnM6MzAwLDMwMGksNDAwLDQwMGksNjAwLDYwMGksNzAwLDcwMGl8UmFsZXdheTozMDAsMzAwaSw0MDAsNDAwaSw1MDAsNTAwaSw2MDAsNjAwaSw3MDAsNzAwaXxQb3BwaW5zOjMwMCwzMDBpLDQwMCw0MDBpLDUwMCw1MDBpLDYwMCw2MDBpLDcwMCw3MDBpXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XHJcblxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICA8bGluayBocmVmPVwiYXNzZXRzL3ZlbmRvci9ib290c3RyYXAvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XHJcbiAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJhc3NldHMvdmVuZG9yL2ljb2ZvbnQvaWNvZm9udC5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XHJcbiAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJhc3NldHMvdmVuZG9yL2JveGljb25zL2Nzcy9ib3hpY29ucy5taW4uY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XHJcbiAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJhc3NldHMvdmVuZG9yL3Zlbm9ib3gvdmVub2JveC5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cclxuICAgICAgICAgICAgPGxpbmsgaHJlZj1cImFzc2V0cy92ZW5kb3Ivb3dsLmNhcm91c2VsL2Fzc2V0cy9vd2wuY2Fyb3VzZWwubWluLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxyXG4gICAgICAgICAgICA8bGluayBocmVmPVwiYXNzZXRzL3ZlbmRvci9hb3MvYW9zLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxsaW5rIGhyZWY9XCJhc3NldHMvY3NzL3N0eWxlLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxyXG4gICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vdW5pY29ucy5pY29uc2NvdXQuY29tL3JlbGVhc2UvdjQuMC4wL2Nzcy90aGlubGluZS5jc3NcIj48L2xpbms+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxib2R5IGRhdGEtbW9iaWxlLW5hdi10cmlnZ2VyLWFsaWdubWVudD1cInJpZ2h0XCIgZGF0YS1tb2JpbGUtbmF2LWFsaWduPVwibGVmdFwiICAgPiBcclxuICAgICAgICAgIDxNYWluIC8+XHJcbiAgICAgICAgICA8TmV4dFNjcmlwdCAvPlxyXG5cclxuXHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJhc3NldHMvdmVuZG9yL2pxdWVyeS9qcXVlcnkubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiYXNzZXRzL3ZlbmRvci9ib290c3RyYXAvanMvYm9vdHN0cmFwLmJ1bmRsZS5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJhc3NldHMvdmVuZG9yL2pxdWVyeS5lYXNpbmcvanF1ZXJ5LmVhc2luZy5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJhc3NldHMvdmVuZG9yL3BocC1lbWFpbC1mb3JtL3ZhbGlkYXRlLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiYXNzZXRzL3ZlbmRvci93YXlwb2ludHMvanF1ZXJ5LndheXBvaW50cy5taW4uanNcIj48L3NjcmlwdD5cclxuICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJhc3NldHMvdmVuZG9yL2NvdW50ZXJ1cC9jb3VudGVydXAubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiYXNzZXRzL3ZlbmRvci9pc290b3BlLWxheW91dC9pc290b3BlLnBrZ2QubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiYXNzZXRzL3ZlbmRvci92ZW5vYm94L3Zlbm9ib3gubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiYXNzZXRzL3ZlbmRvci9vd2wuY2Fyb3VzZWwvb3dsLmNhcm91c2VsLm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgICAgICA8c2NyaXB0IHNyYz1cImFzc2V0cy92ZW5kb3IvdHlwZWQuanMvdHlwZWQubWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgIDxzY3JpcHQgc3JjPVwiYXNzZXRzL3ZlbmRvci9hb3MvYW9zLmpzXCI+PC9zY3JpcHQ+XHJcblxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICA8c2NyaXB0IHNyYz1cImFzc2V0cy9qcy9tYWluLmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgICBcclxuICAgICAgICA8L2JvZHk+XHJcbiAgICAgIDwvSHRtbD5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15RG9jdW1lbnQiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2NvbnN0YW50cy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9kb2N1bWVudC1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQtbWFuYWdlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2dldC1wYWdlLWZpbGVzLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL3V0aWxzLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZ2FcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zZXJ2ZXJcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=