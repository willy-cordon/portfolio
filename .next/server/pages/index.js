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
            children: ["Soy ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
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
              href: "https://www.facebook.com/people/Willy-Cordon/100025864328373/",
              className: "facebook text-white",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "bx bxl-facebook"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 125
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "https://www.instagram.com/willy.cordon/",
              className: "instagram text-white",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "bx bxl-instagram"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 104
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "https://github.com/willy-cordon",
              className: "github text-white",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "bx bxl-github"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 93
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 21
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "https://www.linkedin.com/in/willycordon93",
              className: "linkedin text-white",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "bx bxl-linkedin"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 105
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
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
const words = ['Programador web', 'Emprendedor', 'Freelance', 'Cafeinomano'];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9jb21wb25lbnRzL0luaXRpYWwuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vY29tcG9uZW50cy9NYWluLmpzIiwid2VicGFjazovL3BvcnRmb2xpby8uL2NvbXBvbmVudHMvcGFydGlhbHMvd29yZHMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL3BvcnRmb2xpby9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3BvcnRmb2xpby9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiVHlwaW5nIiwiUmVhY3QiLCJjb21wb25lbnREaWRNb3VudCIsIm9wdGlvbnMiLCJzdHJpbmdzIiwid29yZHMiLCJ0eXBlU3BlZWQiLCJiYWNrU3BlZWQiLCJsb29wIiwiY3Vyc29yQ2hhciIsInR5cGVkIiwiVHlwZWQiLCJlbCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiZGVzdHJveSIsInJlbmRlciIsIndoaXRlU3BhY2UiLCJNYWluIiwiaW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7O0FBQ0E7O0FBQ0EsTUFBTUEsTUFBTixTQUFxQkMsd0RBQXJCLENBQXFDO0FBQ25DQyxtQkFBaUIsR0FBRztBQUNsQixVQUFNQyxPQUFPLEdBQUc7QUFDZEMsYUFBTyxFQUFFQyxvREFESztBQUVk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O0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQU9ILENBUkQ7O0FBVUEsK0RBQWVBLEtBQWYsRTs7Ozs7Ozs7Ozs7QUNkQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGZpbGVuYW1lOiBUeXBpbmcuanNcclxuLy8gUmVhY3QgdmVyc2lvbjogXCJeMTYuMTIuMFwiXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuLy8gSW1wb3J0IHRoZSBkZXNpcmVkIHdvcmRzXHJcbmltcG9ydCB3b3JkcyBmcm9tIFwiLi9wYXJ0aWFscy93b3Jkc1wiO1xyXG5jbGFzcyBUeXBpbmcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgc3RyaW5nczogd29yZHMsXHJcbiAgICAgIHR5cGVTcGVlZDogNTAsXHJcbiAgICAgIGJhY2tTcGVlZDogNTAsXHJcbiAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgIGN1cnNvckNoYXI6IFwifFwiLFxyXG4gICAgfTtcclxuICAgIC8vIHRoaXMuZWwgcmVmZXJzIHRvIHRoZSA8c3Bhbj4gaW4gdGhlIHJlbmRlcigpIG1ldGhvZFxyXG4gICAgdGhpcy50eXBlZCA9IG5ldyBUeXBlZCh0aGlzLmVsLCBvcHRpb25zKTtcclxuICB9XHJcbmNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgLy8gUGxlYXNlIGRvbid0IGZvcmdldCB0byBjbGVhbnVwIGFuaW1hdGlvbiBsYXllclxyXG4gICAgdGhpcy50eXBlZC5kZXN0cm95KCk7XHJcbiAgfVxyXG4gIFxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJoZXJvXCIgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgZGF0YS1hb3M9XCJ6b29tLWluXCIgZGF0YS1hb3MtZGVsYXk9XCIxMDBcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+V2lsbHkgQ29yZG9uPC9oMT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5Tb3kgPHNwYW5cclxuICAgICAgICAgIHN0eWxlPXt7IHdoaXRlU3BhY2U6IFwicHJlXCIgfX1cclxuICAgICAgICAgIHJlZj17KGVsKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZWwgPSBlbDtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz48L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1saW5rc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vcGVvcGxlL1dpbGx5LUNvcmRvbi8xMDAwMjU4NjQzMjgzNzMvXCIgY2xhc3NOYW1lPVwiZmFjZWJvb2sgdGV4dC13aGl0ZVwiPjxpIGNsYXNzTmFtZT1cImJ4IGJ4bC1mYWNlYm9va1wiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vd2lsbHkuY29yZG9uL1wiIGNsYXNzTmFtZT1cImluc3RhZ3JhbSB0ZXh0LXdoaXRlXCI+PGkgY2xhc3NOYW1lPVwiYnggYnhsLWluc3RhZ3JhbVwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS93aWxseS1jb3Jkb25cIiBjbGFzc05hbWU9XCJnaXRodWIgdGV4dC13aGl0ZVwiPjxpIGNsYXNzTmFtZT1cImJ4IGJ4bC1naXRodWJcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vd2lsbHljb3Jkb245M1wiIGNsYXNzTmFtZT1cImxpbmtlZGluIHRleHQtd2hpdGVcIj48aSBjbGFzc05hbWU9XCJieCBieGwtbGlua2VkaW5cIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgICBcclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBUeXBpbmc7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSW5pdGlhbCBmcm9tICcuL0luaXRpYWwnXHJcblxyXG5jb25zdCBNYWluID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SW5pdGlhbD48L0luaXRpYWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5cclxuIiwiLy8gZmlsZW5hbWU6IHdvcmRzLmpzXHJcbmNvbnN0IHdvcmRzID0gW1xyXG4gICAgJ1Byb2dyYW1hZG9yIHdlYicsXHJcbiAgICAnRW1wcmVuZGVkb3InLFxyXG4gICAgJ0ZyZWVsYW5jZScsXHJcbiAgICAnQ2FmZWlub21hbm8nXHJcbiAgXVxyXG4gIGV4cG9ydCBkZWZhdWx0IHdvcmRzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0cy9MYXlvdXQnXHJcbmltcG9ydCBNYWluIGZyb20gJy4uL2NvbXBvbmVudHMvTWFpbidcclxuXHJcbmNvbnN0IGluZGV4ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPE1haW4+PC9NYWluPlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXhcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=