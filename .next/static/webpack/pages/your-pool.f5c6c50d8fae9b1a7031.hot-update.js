/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/your-pool",{

/***/ "./pages/PufferCard.js":
/*!*****************************!*\
  !*** ./pages/PufferCard.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PufferCard; }\n/* harmony export */ });\n/* harmony import */ var _Users_corbinfraser_Documents_GitHub_poolside_puffers_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_corbinfraser_Documents_GitHub_poolside_puffers_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_corbinfraser_Documents_GitHub_poolside_puffers_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_corbinfraser_Documents_GitHub_poolside_puffers_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/corbinfraser/Documents/GitHub/poolside-puffers/pages/PufferCard.js\",\n    _s = $RefreshSig$();\n\n\nfunction PufferCard(_ref) {\n  _s();\n\n  var pufferContract = _ref.pufferContract,\n      walletAddress = _ref.walletAddress;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),\n      pufferCardData = _useState[0],\n      setPufferCardData = _useState[1];\n\n  function renderCards() {\n    var _this = this;\n\n    var pufferList = [];\n\n    if (pufferCardData.length == 0) {\n      pufferList.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"puffer flex flex-col\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h3\", {\n          className: \"Poppitandfinchsans text-center text-4xl text-black\",\n          children: \"Searching...\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 17\n      }, this));\n    }\n\n    for (var i = 0; i < pufferCardData.length; i++) {\n      console.log(pufferCardData);\n      var obj = pufferCardData[i];\n      var attributes = obj.attributes;\n      pufferList.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"puffer flex flex-col\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n          className: \"rare\",\n          children: attributes.map(function (attributes) {\n            if (attributes.value.indexOf(\"Animated\") >= 0) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n                src: \"images/diamond.png\",\n                alt: \"rare\",\n                className: \"diamond\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 26,\n                columnNumber: 36\n              }, _this);\n            }\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n          src: obj.image,\n          alt: obj.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h3\", {\n          className: \"Poppitandfinchsans text-center text-4xl text-black\",\n          children: obj.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n          className: \"Poppitandfinchsans text-center text-black\",\n          children: \"Traits:\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"ul\", {\n          className: \"pufferAttributes \",\n          children: attributes.map(function (attributes) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"li\", {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n                children: [attributes.trait_type, \":\"]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 35,\n                columnNumber: 40\n              }, _this), \" \", attributes.value]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 35,\n              columnNumber: 36\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 17\n      }, this));\n    }\n\n    return pufferList;\n  }\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)( /*#__PURE__*/(0,_Users_corbinfraser_Documents_GitHub_poolside_puffers_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_corbinfraser_Documents_GitHub_poolside_puffers_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n    var bal, make_range, CHUNK_SIZE, c, r, ids, objs, attrs;\n    return _Users_corbinfraser_Documents_GitHub_poolside_puffers_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return pufferContract.methods.balanceOf(walletAddress).call();\n\n          case 2:\n            bal = _context.sent;\n\n            make_range = function make_range(s, e) {\n              return Array(e - s + 1).fill().map(function (_, i) {\n                return s + i;\n              });\n            };\n\n            CHUNK_SIZE = 10; // in case we have tooo many\n            // const tokens = [];\n\n            c = 0;\n\n          case 6:\n            if (!(c < bal)) {\n              _context.next = 30;\n              break;\n            }\n\n            r = make_range(c, Math.min(bal - 1, c + CHUNK_SIZE));\n            console.log(r);\n            _context.prev = 9;\n            _context.next = 12;\n            return Promise.all(r.map(function (i) {\n              return pufferContract.methods.tokenOfOwnerByIndex(walletAddress, i).call();\n            }));\n\n          case 12:\n            ids = _context.sent;\n            console.log(ids);\n            _context.next = 16;\n            return Promise.all(ids.map(function (id) {\n              return pufferContract.methods.tokenURI(Number.parseInt(id, 10)).call();\n            }));\n\n          case 16:\n            objs = _context.sent;\n            console.log(objs); // switch attrs to this once cors headers have been resolved on demopoolsidepuffers.vercel.app\n            // const attrs = await Promise.all(objs.map((obj) =>\n            //   fetch(obj).then((res) => res.json())\n            // ));\n            // console.log(attrs);\n\n            _context.next = 20;\n            return Promise.all(ids.map(function (id) {\n              return fetch(\"/api/\".concat(id)).then(function (res) {\n                return res.json();\n              });\n            }));\n\n          case 20:\n            attrs = _context.sent;\n            setPufferCardData(attrs);\n            _context.next = 27;\n            break;\n\n          case 24:\n            _context.prev = 24;\n            _context.t0 = _context[\"catch\"](9);\n            console.error(_context.t0);\n\n          case 27:\n            c += CHUNK_SIZE;\n            _context.next = 6;\n            break;\n\n          case 30:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[9, 24]]);\n  })), []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    id: \"puffer-pool\",\n    className: \"flex flex-wrap justify-center\",\n    children: renderCards()\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 86,\n    columnNumber: 13\n  }, this);\n}\n\n_s(PufferCard, \"cygWhJyHfs0iPZkvilqk+DWsbnE=\");\n\n_c = PufferCard;\n\nvar _c;\n\n$RefreshReg$(_c, \"PufferCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvUHVmZmVyQ2FyZC5qcz9hN2EzIl0sIm5hbWVzIjpbIlB1ZmZlckNhcmQiLCJwdWZmZXJDb250cmFjdCIsIndhbGxldEFkZHJlc3MiLCJ1c2VTdGF0ZSIsInB1ZmZlckNhcmREYXRhIiwic2V0UHVmZmVyQ2FyZERhdGEiLCJyZW5kZXJDYXJkcyIsInB1ZmZlckxpc3QiLCJsZW5ndGgiLCJwdXNoIiwiaSIsImNvbnNvbGUiLCJsb2ciLCJvYmoiLCJhdHRyaWJ1dGVzIiwibWFwIiwidmFsdWUiLCJpbmRleE9mIiwiaW1hZ2UiLCJuYW1lIiwidHJhaXRfdHlwZSIsInVzZUVmZmVjdCIsIm1ldGhvZHMiLCJiYWxhbmNlT2YiLCJjYWxsIiwiYmFsIiwibWFrZV9yYW5nZSIsInMiLCJlIiwiQXJyYXkiLCJmaWxsIiwiXyIsIkNIVU5LX1NJWkUiLCJjIiwiciIsIk1hdGgiLCJtaW4iLCJQcm9taXNlIiwiYWxsIiwidG9rZW5PZk93bmVyQnlJbmRleCIsImlkcyIsImlkIiwidG9rZW5VUkkiLCJOdW1iZXIiLCJwYXJzZUludCIsIm9ianMiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiYXR0cnMiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsVUFBVCxPQUFxRDtBQUFBOztBQUFBLE1BQS9CQyxjQUErQixRQUEvQkEsY0FBK0I7QUFBQSxNQUFoQkMsYUFBZ0IsUUFBaEJBLGFBQWdCOztBQUFBLGtCQUNwQkMsK0NBQVEsQ0FBQyxFQUFELENBRFk7QUFBQSxNQUN6REMsY0FEeUQ7QUFBQSxNQUN6Q0MsaUJBRHlDOztBQUdoRSxXQUFTQyxXQUFULEdBQXVCO0FBQUE7O0FBQ25CLFFBQU1DLFVBQVUsR0FBRyxFQUFuQjs7QUFFQSxRQUFJSCxjQUFjLENBQUNJLE1BQWYsSUFBeUIsQ0FBN0IsRUFBZ0M7QUFDNUJELGdCQUFVLENBQUNFLElBQVgsZUFDSTtBQUFLLGlCQUFT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QU8sQ0FBQ3dDLEtBQVI7O0FBakNEO0FBTWtCbEIsYUFBQyxJQUFJRCxVQU52QjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBRixJQXFDTixFQXJDTSxDQUFUO0FBdUNBLHNCQUFRO0FBQUssTUFBRSxFQUFDLGFBQVI7QUFBc0IsYUFBUyxFQUFDLCtCQUFoQztBQUFBLGNBQWlFMUIsV0FBVztBQUE1RTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVI7QUFDSDs7R0FwRnVCTixVOztLQUFBQSxVIiwiZmlsZSI6Ii4vcGFnZXMvUHVmZmVyQ2FyZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFB1ZmZlckNhcmQoeyBwdWZmZXJDb250cmFjdCx3YWxsZXRBZGRyZXNzfSkge1xuICAgIGNvbnN0IFtwdWZmZXJDYXJkRGF0YSwgc2V0UHVmZmVyQ2FyZERhdGFdID0gdXNlU3RhdGUoW10pXG5cbiAgICBmdW5jdGlvbiByZW5kZXJDYXJkcygpIHtcbiAgICAgICAgY29uc3QgcHVmZmVyTGlzdCA9IFtdO1xuXG4gICAgICAgIGlmIChwdWZmZXJDYXJkRGF0YS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgcHVmZmVyTGlzdC5wdXNoKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVmZmVyIGZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIlBvcHBpdGFuZGZpbmNoc2FucyB0ZXh0LWNlbnRlciB0ZXh0LTR4bCB0ZXh0LWJsYWNrXCI+U2VhcmNoaW5nLi4uPC9oMz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHB1ZmZlckNhcmREYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwdWZmZXJDYXJkRGF0YSk7XG4gICAgICAgICAgICB2YXIgb2JqID0gcHVmZmVyQ2FyZERhdGFbaV07XG4gICAgICAgICAgICB2YXIgYXR0cmlidXRlcyA9IG9iai5hdHRyaWJ1dGVzO1xuICAgICAgICAgICAgcHVmZmVyTGlzdC5wdXNoKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVmZmVyIGZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXJlXCI+XG4gICAgICAgICAgICAgICAgICAgIHthdHRyaWJ1dGVzLm1hcCgoYXR0cmlidXRlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZXMudmFsdWUuaW5kZXhPZihcIkFuaW1hdGVkXCIpID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGltZyBzcmM9XCJpbWFnZXMvZGlhbW9uZC5wbmdcIiBhbHQ9XCJyYXJlXCIgY2xhc3NOYW1lPVwiZGlhbW9uZFwiPjwvaW1nPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtvYmouaW1hZ2V9IGFsdD17b2JqLm5hbWV9PjwvaW1nPlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiUG9wcGl0YW5kZmluY2hzYW5zIHRleHQtY2VudGVyIHRleHQtNHhsIHRleHQtYmxhY2tcIj57b2JqLm5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiUG9wcGl0YW5kZmluY2hzYW5zIHRleHQtY2VudGVyIHRleHQtYmxhY2tcIj5UcmFpdHM6PC9wPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicHVmZmVyQXR0cmlidXRlcyBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHthdHRyaWJ1dGVzLm1hcCgoYXR0cmlidXRlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGk+PHNwYW4+e2F0dHJpYnV0ZXMudHJhaXRfdHlwZX06PC9zcGFuPiB7YXR0cmlidXRlcy52YWx1ZX08L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHB1ZmZlckxpc3Q7XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCBhc3luYygpID0+IHtcbiAgICAgICAgY29uc3QgYmFsID0gYXdhaXQgcHVmZmVyQ29udHJhY3QubWV0aG9kcy5iYWxhbmNlT2Yod2FsbGV0QWRkcmVzcykuY2FsbCgpO1xuICAgICAgICBjb25zdCBtYWtlX3JhbmdlID0gKHMsIGUpID0+IEFycmF5KGUgLSBzICsgMSkuZmlsbCgpLm1hcCgoXywgaSkgPT4gcyArIGkpO1xuICAgICAgICBjb25zdCBDSFVOS19TSVpFID0gMTA7IC8vIGluIGNhc2Ugd2UgaGF2ZSB0b29vIG1hbnlcblxuICAgICAgICAvLyBjb25zdCB0b2tlbnMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBiYWw7IGMgKz0gQ0hVTktfU0laRSkge1xuICAgICAgICAgICAgY29uc3QgciA9IG1ha2VfcmFuZ2UoYywgTWF0aC5taW4oYmFsIC0gMSwgYyArIENIVU5LX1NJWkUpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHIpO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkcyA9IGF3YWl0IFByb21pc2UuYWxsKHIubWFwKChpKSA9PlxuICAgICAgICAgICAgICAgICAgICBwdWZmZXJDb250cmFjdC5tZXRob2RzLnRva2VuT2ZPd25lckJ5SW5kZXgod2FsbGV0QWRkcmVzcywgaSkuY2FsbCgpXG4gICAgICAgICAgICAgICAgKSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaWRzKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IG9ianMgPSBhd2FpdCBQcm9taXNlLmFsbChpZHMubWFwKChpZCkgPT5cbiAgICAgICAgICAgICAgICAgICAgcHVmZmVyQ29udHJhY3QubWV0aG9kcy50b2tlblVSSShOdW1iZXIucGFyc2VJbnQoaWQsIDEwKSkuY2FsbCgpXG4gICAgICAgICAgICAgICAgKSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cob2Jqcyk7XG5cbiAgICAgICAgICAgICAgICAvLyBzd2l0Y2ggYXR0cnMgdG8gdGhpcyBvbmNlIGNvcnMgaGVhZGVycyBoYXZlIGJlZW4gcmVzb2x2ZWQgb24gZGVtb3Bvb2xzaWRlcHVmZmVycy52ZXJjZWwuYXBwXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgYXR0cnMgPSBhd2FpdCBQcm9taXNlLmFsbChvYmpzLm1hcCgob2JqKSA9PlxuICAgICAgICAgICAgICAgIC8vICAgZmV0Y2gob2JqKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAgICAgLy8gKSk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYXR0cnMpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgYXR0cnMgPSBhd2FpdCBQcm9taXNlLmFsbChpZHMubWFwKChpZCkgPT5cbiAgICAgICAgICAgICAgICAgICAgZmV0Y2goYC9hcGkvJHtpZH1gKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAgICAgKSk7XG5cbiAgICAgICAgICAgICAgICBzZXRQdWZmZXJDYXJkRGF0YShhdHRycyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuICg8ZGl2IGlkPVwicHVmZmVyLXBvb2xcIiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlclwiPntyZW5kZXJDYXJkcygpfTwvZGl2Pik7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/PufferCard.js\n");

/***/ })

});