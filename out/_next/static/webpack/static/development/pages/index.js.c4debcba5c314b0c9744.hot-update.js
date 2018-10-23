webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Members.tsx":
/*!********************************!*\
  !*** ./components/Members.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "./node_modules/react-emotion/dist/index.esm.js");
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Section */ "./components/Section.tsx");
/* harmony import */ var _lib_members_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/members.json */ "./lib/members.json");
var _lib_members_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../lib/members.json */ "./lib/members.json", 1);
var _jsxFileName = "/home/ian/proj/defi/site/components/Members.tsx";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var Members = function Members(_ref) {
  var className = _ref.className;
  var categories = Object.entries(_lib_members_json__WEBPACK_IMPORTED_MODULE_3__.categories).sort(function (a, b) {
    return a < b ? -1 : 1;
  });
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_Section__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Members"), categories.map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        header = _ref3[0],
        catMembers = _ref3[1];

    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Category, {
      header: header,
      members: catMembers,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["default"])(Members, {
  target: "ebj7umv0"
})("/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lhbi9wcm9qL2RlZmkvc2l0ZS9jb21wb25lbnRzL01lbWJlcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9COEIiLCJmaWxlIjoiL2hvbWUvaWFuL3Byb2ovZGVmaS9zaXRlL2NvbXBvbmVudHMvTWVtYmVycy50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHN0eWxlZCBmcm9tIFwicmVhY3QtZW1vdGlvblwiO1xuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4vU2VjdGlvblwiO1xuaW1wb3J0IG1lbWJlcnMgZnJvbSBcIi4uL2xpYi9tZW1iZXJzLmpzb25cIjtcblxuY29uc3QgTWVtYmVycyA9ICh7IGNsYXNzTmFtZSB9OiB7IGNsYXNzTmFtZT86IHN0cmluZyB9KSA9PiB7XG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBPYmplY3QuZW50cmllcyhtZW1iZXJzLmNhdGVnb3JpZXMpLnNvcnQoXG4gICAgKGEsIGIpID0+IChhIDwgYiA/IC0xIDogMSlcbiAgKTtcbiAgcmV0dXJuIChcbiAgICA8U2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICA8aDI+TWVtYmVyczwvaDI+XG4gICAgICB7Y2F0ZWdvcmllcy5tYXAoKFtoZWFkZXIsIGNhdE1lbWJlcnNdKSA9PiAoXG4gICAgICAgIDxDYXRlZ29yeSBoZWFkZXI9e2hlYWRlcn0gbWVtYmVycz17Y2F0TWVtYmVyc30gLz5cbiAgICAgICkpfVxuICAgIDwvU2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlZChNZW1iZXJzKWBgO1xuIl19 */"));

/***/ })

})
//# sourceMappingURL=index.js.c4debcba5c314b0c9744.hot-update.js.map