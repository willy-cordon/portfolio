(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Initial.js":
/*!*******************************!*\
  !*** ./components/Initial.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _partials_words__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./partials/words */ "./components/partials/words.js");


var _jsxFileName = "D:\\proyectsPrivate\\portfolio\\components\\Initial.js";
// filename: Typing.js
// React version: "^16.12.0"
 // Import the desired words



class Typing extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
  componentDidMount() {
    const options = {
      strings: _partials_words__WEBPACK_IMPORTED_MODULE_2__.default,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      cursorChar: "|"
    }; // this.el refers to the <span> in the render() method

    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    // Please don't forget to cleanup animation layer
    this.typed.destroy();
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
        id: "hero",
        className: "d-flex flex-column justify-content-center",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "container",
          "data-aos": "zoom-in",
          "data-aos-delay": "100",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            className: "text-white",
            children: "Willy Cordon"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "text-white",
            children: ["I'm ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              style: {
                whiteSpace: "pre"
              },
              ref: el => {
                this.el = el;
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 47
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "social-links",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              className: "twitter text-white",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "bx bxl-twitter"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 64
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              className: "facebook text-white",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "bx bxl-facebook"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 65
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              className: "instagram text-white",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "bx bxl-instagram"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 66
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              className: "github text-white",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "bx bxl-github"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 63
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              className: "linkedin text-white",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "bx bxl-linkedin"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 65
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this)
    }, void 0, false);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Typing);

/***/ }),

/***/ "./components/Main.js":
/*!****************************!*\
  !*** ./components/Main.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Initial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Initial */ "./components/Initial.js");

var _jsxFileName = "D:\\proyectsPrivate\\portfolio\\components\\Main.js";



const Main = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Initial__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./components/partials/words.js":
/*!**************************************!*\
  !*** ./components/partials/words.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// filename: words.js
const words = ['Javascript Consultant', 'Cloud Architect', 'Open source contributor'];
/* harmony default export */ __webpack_exports__["default"] = (words);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layouts_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layouts/Layout */ "./components/layouts/Layout.js");
/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Main */ "./components/Main.js");

var _jsxFileName = "D:\\proyectsPrivate\\portfolio\\pages\\index.js";




const index = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_Layout__WEBPACK_IMPORTED_MODULE_2__.default, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Main__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_layouts_Layout_js"], function() { return __webpack_exec__("./pages/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9jb21wb25lbnRzL0luaXRpYWwuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vY29tcG9uZW50cy9NYWluLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL2NvbXBvbmVudHMvcGFydGlhbHMvd29yZHMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL3BvcnRmb2xpby9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3BvcnRmb2xpby9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiVHlwaW5nIiwiUmVhY3QiLCJjb21wb25lbnREaWRNb3VudCIsIm9wdGlvbnMiLCJzdHJpbmdzIiwid29yZHMiLCJ0eXBlU3BlZWQiLCJiYWNrU3BlZWQiLCJsb29wIiwiY3Vyc29yQ2hhciIsInR5cGVkIiwiVHlwZWQiLCJlbCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZGVzdHJveSIsInJlbmRlciIsIndoaXRlU3BhY2UiLCJNYWluIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7O0FBQ0E7O0FBQ0EsTUFBTUEsTUFBTixTQUFxQkMsd0RBQXJCLENBQXFDO0FBQ25DQyxtQkFBaUIsR0FBRztBQUNsQixVQUFNQyxPQUFPLEdBQUc7QUFDZEMsYUFBTyxFQUFFQyxvREFESztBQUVk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LEdBQUcsTUFBTTtBQUNoQixzQkFDSTtBQUFBLDJCQUNJLDhEQUFDLCtEQUFEO0FBQUEsNkJBQ0ksOERBQUMscURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFPSCxDQVJEOztBQVVBLCtEQUFlQSxLQUFmLEU7Ozs7Ozs7Ozs7O0FDZEEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmaWxlbmFtZTogVHlwaW5nLmpzXHJcbi8vIFJlYWN0IHZlcnNpb246IFwiXjE2LjEyLjBcIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbi8vIEltcG9ydCB0aGUgZGVzaXJlZCB3b3Jkc1xyXG5pbXBvcnQgd29yZHMgZnJvbSBcIi4vcGFydGlhbHMvd29yZHNcIjtcclxuY2xhc3MgVHlwaW5nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgIHN0cmluZ3M6IHdvcmRzLFxyXG4gICAgICB0eXBlU3BlZWQ6IDUwLFxyXG4gICAgICBiYWNrU3BlZWQ6IDUwLFxyXG4gICAgICBsb29wOiB0cnVlLFxyXG4gICAgICBjdXJzb3JDaGFyOiBcInxcIixcclxuICAgIH07XHJcbiAgICAvLyB0aGlzLmVsIHJlZmVycyB0byB0aGUgPHNwYW4+IGluIHRoZSByZW5kZXIoKSBtZXRob2RcclxuICAgIHRoaXMudHlwZWQgPSBuZXcgVHlwZWQodGhpcy5lbCwgb3B0aW9ucyk7XHJcbiAgfVxyXG5jb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgIC8vIFBsZWFzZSBkb24ndCBmb3JnZXQgdG8gY2xlYW51cCBhbmltYXRpb24gbGF5ZXJcclxuICAgIHRoaXMudHlwZWQuZGVzdHJveSgpO1xyXG4gIH1cclxuICBcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxzZWN0aW9uIGlkPVwiaGVyb1wiIGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIGRhdGEtYW9zPVwiem9vbS1pblwiIGRhdGEtYW9zLWRlbGF5PVwiMTAwXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPldpbGx5IENvcmRvbjwvaDE+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+SSdtIDxzcGFuXHJcbiAgICAgICAgICBzdHlsZT17eyB3aGl0ZVNwYWNlOiBcInByZVwiIH19XHJcbiAgICAgICAgICByZWY9eyhlbCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmVsID0gZWw7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+PC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwtbGlua3NcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInR3aXR0ZXIgdGV4dC13aGl0ZVwiPjxpIGNsYXNzTmFtZT1cImJ4IGJ4bC10d2l0dGVyXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImZhY2Vib29rIHRleHQtd2hpdGVcIj48aSBjbGFzc05hbWU9XCJieCBieGwtZmFjZWJvb2tcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiaW5zdGFncmFtIHRleHQtd2hpdGVcIj48aSBjbGFzc05hbWU9XCJieCBieGwtaW5zdGFncmFtXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImdpdGh1YiB0ZXh0LXdoaXRlXCI+PGkgY2xhc3NOYW1lPVwiYnggYnhsLWdpdGh1YlwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJsaW5rZWRpbiB0ZXh0LXdoaXRlXCI+PGkgY2xhc3NOYW1lPVwiYnggYnhsLWxpbmtlZGluXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgXHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVHlwaW5nOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEluaXRpYWwgZnJvbSAnLi9Jbml0aWFsJ1xyXG5cclxuY29uc3QgTWFpbiA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEluaXRpYWw+PC9Jbml0aWFsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYWluXHJcbiIsIi8vIGZpbGVuYW1lOiB3b3Jkcy5qc1xyXG5jb25zdCB3b3JkcyA9IFtcclxuICAgICdKYXZhc2NyaXB0IENvbnN1bHRhbnQnLFxyXG4gICAgJ0Nsb3VkIEFyY2hpdGVjdCcsXHJcbiAgICAnT3BlbiBzb3VyY2UgY29udHJpYnV0b3InXHJcbiAgXVxyXG4gIGV4cG9ydCBkZWZhdWx0IHdvcmRzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0cy9MYXlvdXQnXHJcbmltcG9ydCBNYWluIGZyb20gJy4uL2NvbXBvbmVudHMvTWFpbidcclxuXHJcbmNvbnN0IGluZGV4ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPE1haW4+PC9NYWluPlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXhcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=