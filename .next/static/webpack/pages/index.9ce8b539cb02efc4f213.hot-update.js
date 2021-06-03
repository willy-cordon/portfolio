self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Initial.js":
/*!*******************************!*\
  !*** ./components/Initial.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_proyectsPrivate_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_proyectsPrivate_portfolio_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_proyectsPrivate_portfolio_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var D_proyectsPrivate_portfolio_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var D_proyectsPrivate_portfolio_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _partials_words__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./partials/words */ "./components/partials/words.js");
/* module decorator */ module = __webpack_require__.hmd(module);







var _jsxFileName = "D:\\proyectsPrivate\\portfolio\\components\\Initial.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,D_proyectsPrivate_portfolio_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,D_proyectsPrivate_portfolio_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,D_proyectsPrivate_portfolio_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

// filename: Typing.js
// React version: "^16.12.0"
 // Import the desired words



var Typing = /*#__PURE__*/function (_React$Component) {
  (0,D_proyectsPrivate_portfolio_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.default)(Typing, _React$Component);

  var _super = _createSuper(Typing);

  function Typing() {
    (0,D_proyectsPrivate_portfolio_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, Typing);

    return _super.apply(this, arguments);
  }

  (0,D_proyectsPrivate_portfolio_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(Typing, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var options = {
        strings: _partials_words__WEBPACK_IMPORTED_MODULE_7__.default,
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
        cursorChar: "|"
      }; // this.el refers to the <span> in the render() method

      this.typed = new Typed(this.el, options);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // Please don't forget to cleanup animation layer
      this.typed.destroy();
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

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
                ref: function ref(el) {
                  _this.el = el;
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
                className: "google-plus text-white",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                  className: "bx bxl-skype"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 39,
                  columnNumber: 68
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
  }]);

  return Typing;
}((react__WEBPACK_IMPORTED_MODULE_6___default().Component));

/* harmony default export */ __webpack_exports__["default"] = (Typing);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Jbml0aWFsLmpzIl0sIm5hbWVzIjpbIlR5cGluZyIsIm9wdGlvbnMiLCJzdHJpbmdzIiwid29yZHMiLCJ0eXBlU3BlZWQiLCJiYWNrU3BlZWQiLCJsb29wIiwiY3Vyc29yQ2hhciIsInR5cGVkIiwiVHlwZWQiLCJlbCIsImRlc3Ryb3kiLCJ3aGl0ZVNwYWNlIiwiUmVhY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7O0FBQ0E7O0lBQ01BLE07Ozs7Ozs7Ozs7Ozs7d0NBQ2dCO0FBQ2xCLFVBQU1DLE9BQU8sR0FBRztBQUNkQyxlQUFPLEVBQUVDLG9EQURLO0FBRWRDLGlCQUFTLEVBQUUsRUFGRztBQUdkQyxpQkFBUyxFQUFFLEVBSEc7QUFJZEMsWUFBSSxFQUFFLElBSlE7QUFLZEMsa0JBQVUsRUFBRTtBQUxFLE9BQWhCLENBRGtCLENBUWxCOztBQUNBLFdBQUtDLEtBQUwsR0FBYSxJQUFJQyxLQUFKLENBQVUsS0FBS0MsRUFBZixFQUFtQlQsT0FBbkIsQ0FBYjtBQUNEOzs7MkNBQ29CO0FBQ25CO0FBQ0EsV0FBS08sS0FBTCxDQUFXRyxPQUFYO0FBQ0Q7Ozs2QkFFUTtBQUFBOztBQUNQLDBCQUNFO0FBQUEsK0JBQ0U7QUFBUyxZQUFFLEVBQUMsTUFBWjtBQUFtQixtQkFBUyxFQUFDLDJDQUE3QjtBQUFBLGlDQUNRO0FBQUsscUJBQVMsRUFBQyxXQUFmO0FBQTJCLHdCQUFTLFNBQXBDO0FBQThDLDhCQUFlLEtBQTdEO0FBQUEsb0NBQ0E7QUFBSSx1QkFBUyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREEsZUFFQTtBQUFHLHVCQUFTLEVBQUMsWUFBYjtBQUFBLDhDQUE4QjtBQUNwQyxxQkFBSyxFQUFFO0FBQUVDLDRCQUFVLEVBQUU7QUFBZCxpQkFENkI7QUFFcEMsbUJBQUcsRUFBRSxhQUFDRixFQUFELEVBQVE7QUFDWCx1QkFBSSxDQUFDQSxFQUFMLEdBQVVBLEVBQVY7QUFDRDtBQUptQztBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkEsZUFRQTtBQUFLLHVCQUFTLEVBQUMsY0FBZjtBQUFBLHNDQUNJO0FBQUcsb0JBQUksRUFBQyxHQUFSO0FBQVkseUJBQVMsRUFBQyxvQkFBdEI7QUFBQSx1Q0FBMkM7QUFBRywyQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURKLGVBRUk7QUFBRyxvQkFBSSxFQUFDLEdBQVI7QUFBWSx5QkFBUyxFQUFDLHFCQUF0QjtBQUFBLHVDQUE0QztBQUFHLDJCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRkosZUFHSTtBQUFHLG9CQUFJLEVBQUMsR0FBUjtBQUFZLHlCQUFTLEVBQUMsc0JBQXRCO0FBQUEsdUNBQTZDO0FBQUcsMkJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFISixlQUlJO0FBQUcsb0JBQUksRUFBQyxHQUFSO0FBQVkseUJBQVMsRUFBQyx3QkFBdEI7QUFBQSx1Q0FBK0M7QUFBRywyQkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUpKLGVBS0k7QUFBRyxvQkFBSSxFQUFDLEdBQVI7QUFBWSx5QkFBUyxFQUFDLHFCQUF0QjtBQUFBLHVDQUE0QztBQUFHLDJCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERix1QkFERjtBQXdCRDs7OztFQTFDa0JHLHdEOztBQTRDckIsK0RBQWViLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWNlOGI1MzljYjAyZWZjNGYyMTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGZpbGVuYW1lOiBUeXBpbmcuanNcclxuLy8gUmVhY3QgdmVyc2lvbjogXCJeMTYuMTIuMFwiXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuLy8gSW1wb3J0IHRoZSBkZXNpcmVkIHdvcmRzXHJcbmltcG9ydCB3b3JkcyBmcm9tIFwiLi9wYXJ0aWFscy93b3Jkc1wiO1xyXG5jbGFzcyBUeXBpbmcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgc3RyaW5nczogd29yZHMsXHJcbiAgICAgIHR5cGVTcGVlZDogNTAsXHJcbiAgICAgIGJhY2tTcGVlZDogNTAsXHJcbiAgICAgIGxvb3A6IHRydWUsXHJcbiAgICAgIGN1cnNvckNoYXI6IFwifFwiLFxyXG4gICAgfTtcclxuICAgIC8vIHRoaXMuZWwgcmVmZXJzIHRvIHRoZSA8c3Bhbj4gaW4gdGhlIHJlbmRlcigpIG1ldGhvZFxyXG4gICAgdGhpcy50eXBlZCA9IG5ldyBUeXBlZCh0aGlzLmVsLCBvcHRpb25zKTtcclxuICB9XHJcbmNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgLy8gUGxlYXNlIGRvbid0IGZvcmdldCB0byBjbGVhbnVwIGFuaW1hdGlvbiBsYXllclxyXG4gICAgdGhpcy50eXBlZC5kZXN0cm95KCk7XHJcbiAgfVxyXG4gIFxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPHNlY3Rpb24gaWQ9XCJoZXJvXCIgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgZGF0YS1hb3M9XCJ6b29tLWluXCIgZGF0YS1hb3MtZGVsYXk9XCIxMDBcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+V2lsbHkgQ29yZG9uPC9oMT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5JJ20gPHNwYW5cclxuICAgICAgICAgIHN0eWxlPXt7IHdoaXRlU3BhY2U6IFwicHJlXCIgfX1cclxuICAgICAgICAgIHJlZj17KGVsKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZWwgPSBlbDtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz48L3A+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1saW5rc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwidHdpdHRlciB0ZXh0LXdoaXRlXCI+PGkgY2xhc3NOYW1lPVwiYnggYnhsLXR3aXR0ZXJcIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZmFjZWJvb2sgdGV4dC13aGl0ZVwiPjxpIGNsYXNzTmFtZT1cImJ4IGJ4bC1mYWNlYm9va1wiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJpbnN0YWdyYW0gdGV4dC13aGl0ZVwiPjxpIGNsYXNzTmFtZT1cImJ4IGJ4bC1pbnN0YWdyYW1cIj48L2k+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZ29vZ2xlLXBsdXMgdGV4dC13aGl0ZVwiPjxpIGNsYXNzTmFtZT1cImJ4IGJ4bC1za3lwZVwiPjwvaT48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJsaW5rZWRpbiB0ZXh0LXdoaXRlXCI+PGkgY2xhc3NOYW1lPVwiYnggYnhsLWxpbmtlZGluXCI+PC9pPjwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgXHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVHlwaW5nOyJdLCJzb3VyY2VSb290IjoiIn0=