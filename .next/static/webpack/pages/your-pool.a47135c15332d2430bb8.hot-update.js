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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PufferCard; }\n/* harmony export */ });\n/* harmony import */ var _Users_corbinfraser_Documents_GitHub_poolside_puffers_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_corbinfraser_Documents_GitHub_poolside_puffers_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_corbinfraser_Documents_GitHub_poolside_puffers_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_corbinfraser_Documents_GitHub_poolside_puffers_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/corbinfraser/Documents/GitHub/poolside-puffers/pages/PufferCard.js\",\n    _s = $RefreshSig$();\n\n\nfunction PufferCard(_ref) {\n  _s();\n\n  var pufferContract = _ref.pufferContract,\n      walletAddress = _ref.walletAddress;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),\n      pufferCardData = _useState[0],\n      setPufferCardData = _useState[1];\n\n  function renderCards() {\n    var _this = this;\n\n    var pufferList = [];\n\n    if (pufferCardData.length == 0) {\n      pufferList.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"puffer flex flex-col\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n          src: \"images/loading.gif\",\n          alt: \"loading\",\n          className: \"loading\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h2\", {\n          className: \"Poppitandfinchsans text-center text-2xl text-black\",\n          children: \"Searching Blockchain...\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 17\n      }, this));\n    }\n\n    for (var i = 0; i < pufferCardData.length; i++) {\n      console.log(pufferCardData);\n      var obj = pufferCardData[i];\n      var attributes = obj.attributes;\n      pufferList.push( /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        className: \"puffer flex flex-col\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n          className: \"rare\",\n          children: attributes.map(function (attributes) {\n            for (var i = 0, j = attributes.length; i < j; i++) {\n              if (obj[json[i]]) {\n                obj[json[i]]++;\n              } else {\n                obj[json[i]] = 1;\n              }\n            }\n\n            console.log(obj);\n\n            if (attributes.value.indexOf(\"Animated\") >= 0) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n                  src: \"images/diamond.png\",\n                  alt: \"rare\",\n                  className: \"diamond\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 45,\n                  columnNumber: 42\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n                  src: \"images/diamond.png\",\n                  alt: \"rare\",\n                  className: \"diamond\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 45,\n                  columnNumber: 109\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 45,\n                columnNumber: 36\n              }, _this);\n            }\n\n            if (attributes.value.indexOf(\"Ripped\") >= 0) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n                src: \"images/diamond.png\",\n                alt: \"rare\",\n                className: \"diamond\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 48,\n                columnNumber: 36\n              }, _this);\n            }\n\n            if (attributes.value.indexOf(\"Cigarette\") >= 0) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n                src: \"images/diamond.png\",\n                alt: \"rare\",\n                className: \"diamond\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 51,\n                columnNumber: 36\n              }, _this);\n            }\n\n            if (attributes.value.indexOf(\"Joint\") >= 0) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n                src: \"images/diamond.png\",\n                alt: \"rare\",\n                className: \"diamond\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 54,\n                columnNumber: 36\n              }, _this);\n            }\n\n            if (attributes.value.indexOf(\"Pool Animated\") >= 0) {\n              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n                  src: \"images/diamond.png\",\n                  alt: \"rare\",\n                  className: \"diamond\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 57,\n                  columnNumber: 42\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n                  src: \"images/diamond.png\",\n                  alt: \"rare\",\n                  className: \"diamond\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 57,\n                  columnNumber: 109\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n                  src: \"images/diamond.png\",\n                  alt: \"rare\",\n                  className: \"diamond\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 57,\n                  columnNumber: 176\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 57,\n                columnNumber: 36\n              }, _this);\n            }\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"img\", {\n          src: obj.image,\n          alt: obj.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"h3\", {\n          className: \"Poppitandfinchsans text-center text-4xl text-black\",\n          children: obj.name\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"p\", {\n          className: \"Poppitandfinchsans text-center text-black\",\n          children: \"Traits:\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 21\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"ul\", {\n          className: \"pufferAttributes \",\n          children: attributes.map(function (attributes) {\n            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"li\", {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n                children: [attributes.trait_type, \":\"]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 67,\n                columnNumber: 40\n              }, _this), \" \", attributes.value]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 67,\n              columnNumber: 36\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 17\n      }, this));\n    }\n\n    return pufferList;\n  }\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)( /*#__PURE__*/(0,_Users_corbinfraser_Documents_GitHub_poolside_puffers_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_Users_corbinfraser_Documents_GitHub_poolside_puffers_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n    var bal, make_range, CHUNK_SIZE, c, r, ids, objs, attrs;\n    return _Users_corbinfraser_Documents_GitHub_poolside_puffers_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return pufferContract.methods.balanceOf(walletAddress).call();\n\n          case 2:\n            bal = _context.sent;\n\n            make_range = function make_range(s, e) {\n              return Array(e - s + 1).fill().map(function (_, i) {\n                return s + i;\n              });\n            };\n\n            CHUNK_SIZE = 10; // in case we have tooo many\n            // const tokens = [];\n\n            c = 0;\n\n          case 6:\n            if (!(c < bal)) {\n              _context.next = 30;\n              break;\n            }\n\n            r = make_range(c, Math.min(bal - 1, c + CHUNK_SIZE));\n            console.log(r);\n            _context.prev = 9;\n            _context.next = 12;\n            return Promise.all(r.map(function (i) {\n              return pufferContract.methods.tokenOfOwnerByIndex(walletAddress, i).call();\n            }));\n\n          case 12:\n            ids = _context.sent;\n            console.log(ids);\n            _context.next = 16;\n            return Promise.all(ids.map(function (id) {\n              return pufferContract.methods.tokenURI(Number.parseInt(id, 10)).call();\n            }));\n\n          case 16:\n            objs = _context.sent;\n            console.log(objs); // switch attrs to this once cors headers have been resolved on demopoolsidepuffers.vercel.app\n            // const attrs = await Promise.all(objs.map((obj) =>\n            //   fetch(obj).then((res) => res.json())\n            // ));\n            // console.log(attrs);\n\n            _context.next = 20;\n            return Promise.all(ids.map(function (id) {\n              return fetch(\"/api/\".concat(id)).then(function (res) {\n                return res.json();\n              });\n            }));\n\n          case 20:\n            attrs = _context.sent;\n            setPufferCardData(attrs);\n            _context.next = 27;\n            break;\n\n          case 24:\n            _context.prev = 24;\n            _context.t0 = _context[\"catch\"](9);\n            console.error(_context.t0);\n\n          case 27:\n            c += CHUNK_SIZE;\n            _context.next = 6;\n            break;\n\n          case 30:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[9, 24]]);\n  })), []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    id: \"puffer-pool\",\n    className: \"flex flex-wrap justify-center\",\n    children: renderCards()\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 118,\n    columnNumber: 13\n  }, this);\n}\n\n_s(PufferCard, \"cygWhJyHfs0iPZkvilqk+DWsbnE=\");\n\n_c = PufferCard;\n\nvar _c;\n\n$RefreshReg$(_c, \"PufferCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvUHVmZmVyQ2FyZC5qcz9hN2EzIl0sIm5hbWVzIjpbIlB1ZmZlckNhcmQiLCJwdWZmZXJDb250cmFjdCIsIndhbGxldEFkZHJlc3MiLCJ1c2VTdGF0ZSIsInB1ZmZlckNhcmREYXRhIiwic2V0UHVmZmVyQ2FyZERhdGEiLCJyZW5kZXJDYXJkcyIsInB1ZmZlckxpc3QiLCJsZW5ndGgiLCJwdXNoIiwiaSIsImNvbnNvbGUiLCJsb2ciLCJvYmoiLCJhdHRyaWJ1dGVzIiwibWFwIiwiaiIsImpzb24iLCJ2YWx1ZSIsImluZGV4T2YiLCJpbWFnZSIsIm5hbWUiLCJ0cmFpdF90eXBlIiwidXNlRWZmZWN0IiwibWV0aG9kcyIsImJhbGFuY2VPZiIsImNhbGwiLCJiYWwiLCJtYWtlX3JhbmdlIiwicyIsImUiLCJBcnJheSIsImZpbGwiLCJfIiwiQ0hVTktfU0laRSIsImMiLCJyIiwiTWF0aCIsIm1pbiIsIlByb21pc2UiLCJhbGwiLCJ0b2tlbk9mT3duZXJCeUluZGV4IiwiaWRzIiwiaWQiLCJ0b2tlblVSSSIsIk51bWJlciIsInBhcnNlSW50Iiwib2JqcyIsImZldGNoIiwidGhlbiIsInJlcyIsImF0dHJzIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLFVBQVQsT0FBcUQ7QUFBQTs7QUFBQSxNQUEvQkMsY0FBK0IsUUFBL0JBLGNBQStCO0FBQUEsTUFBaEJDLGFBQWdCLFFBQWhCQSxhQUFnQjs7QUFBQSxrQkFDcEJDLCtDQUFRLENBQUMsRUFBRCxDQURZO0FBQUEsTUFDekRDLGNBRHlEO0FBQUEsTUFDekNDLGlCQUR5Qzs7QUFJaEUsV0FBU0MsV0FBVCxHQUF1QjtBQUFBOztBQUNuQixRQUFNQyxVQUFVLEdBQUcsRUFBbkI7O0FBRUEsUUFBSUgsY0FBYyxDQUFDSSxNQUFmLElBQXlCLENBQTdCLEVBQWdDO0FBQzVCRCxnQkFBVSxDQUFDRSxJQUFYLGVBQ0k7QUFBSyxp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dUJOLFU7O0tBQUFBLFUiLCJmaWxlIjoiLi9wYWdlcy9QdWZmZXJDYXJkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHVmZmVyQ2FyZCh7IHB1ZmZlckNvbnRyYWN0LHdhbGxldEFkZHJlc3N9KSB7XG4gICAgY29uc3QgW3B1ZmZlckNhcmREYXRhLCBzZXRQdWZmZXJDYXJkRGF0YV0gPSB1c2VTdGF0ZShbXSlcblxuXG4gICAgZnVuY3Rpb24gcmVuZGVyQ2FyZHMoKSB7XG4gICAgICAgIGNvbnN0IHB1ZmZlckxpc3QgPSBbXTtcblxuICAgICAgICBpZiAocHVmZmVyQ2FyZERhdGEubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHB1ZmZlckxpc3QucHVzaChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1ZmZlciBmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2xvYWRpbmcuZ2lmXCIgYWx0PVwibG9hZGluZ1wiIGNsYXNzTmFtZT1cImxvYWRpbmdcIj48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIlBvcHBpdGFuZGZpbmNoc2FucyB0ZXh0LWNlbnRlciB0ZXh0LTJ4bCB0ZXh0LWJsYWNrXCI+U2VhcmNoaW5nIEJsb2NrY2hhaW4uLi48L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwdWZmZXJDYXJkRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocHVmZmVyQ2FyZERhdGEpO1xuICAgICAgICAgICAgdmFyIG9iaiA9IHB1ZmZlckNhcmREYXRhW2ldO1xuICAgICAgICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBvYmouYXR0cmlidXRlcztcblxuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgcHVmZmVyTGlzdC5wdXNoKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVmZmVyIGZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXJlXCI+XG4gICAgICAgICAgICAgICAgICAgIHthdHRyaWJ1dGVzLm1hcCgoYXR0cmlidXRlcykgPT4ge1xuXG5mb3IgKHZhciBpID0gMCwgaiA9IGF0dHJpYnV0ZXMubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG4gICAgaWYgKG9ialtqc29uW2ldXSkge1xuICAgICAgb2JqW2pzb25baV1dKys7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgb2JqW2pzb25baV1dID0gMTtcbiAgICB9IFxuICB9XG4gIFxuICBjb25zb2xlLmxvZyhvYmopO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVzLnZhbHVlLmluZGV4T2YoXCJBbmltYXRlZFwiKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuPjxpbWcgc3JjPVwiaW1hZ2VzL2RpYW1vbmQucG5nXCIgYWx0PVwicmFyZVwiIGNsYXNzTmFtZT1cImRpYW1vbmRcIj48L2ltZz48aW1nIHNyYz1cImltYWdlcy9kaWFtb25kLnBuZ1wiIGFsdD1cInJhcmVcIiBjbGFzc05hbWU9XCJkaWFtb25kXCI+PC9pbWc+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZXMudmFsdWUuaW5kZXhPZihcIlJpcHBlZFwiKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxpbWcgc3JjPVwiaW1hZ2VzL2RpYW1vbmQucG5nXCIgYWx0PVwicmFyZVwiIGNsYXNzTmFtZT1cImRpYW1vbmRcIj48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVzLnZhbHVlLmluZGV4T2YoXCJDaWdhcmV0dGVcIikgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8aW1nIHNyYz1cImltYWdlcy9kaWFtb25kLnBuZ1wiIGFsdD1cInJhcmVcIiBjbGFzc05hbWU9XCJkaWFtb25kXCI+PC9pbWc+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0cmlidXRlcy52YWx1ZS5pbmRleE9mKFwiSm9pbnRcIikgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8aW1nIHNyYz1cImltYWdlcy9kaWFtb25kLnBuZ1wiIGFsdD1cInJhcmVcIiBjbGFzc05hbWU9XCJkaWFtb25kXCI+PC9pbWc+XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0cmlidXRlcy52YWx1ZS5pbmRleE9mKFwiUG9vbCBBbmltYXRlZFwiKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxzcGFuPjxpbWcgc3JjPVwiaW1hZ2VzL2RpYW1vbmQucG5nXCIgYWx0PVwicmFyZVwiIGNsYXNzTmFtZT1cImRpYW1vbmRcIj48L2ltZz48aW1nIHNyYz1cImltYWdlcy9kaWFtb25kLnBuZ1wiIGFsdD1cInJhcmVcIiBjbGFzc05hbWU9XCJkaWFtb25kXCI+PC9pbWc+PGltZyBzcmM9XCJpbWFnZXMvZGlhbW9uZC5wbmdcIiBhbHQ9XCJyYXJlXCIgY2xhc3NOYW1lPVwiZGlhbW9uZFwiPjwvaW1nPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17b2JqLmltYWdlfSBhbHQ9e29iai5uYW1lfT48L2ltZz5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIlBvcHBpdGFuZGZpbmNoc2FucyB0ZXh0LWNlbnRlciB0ZXh0LTR4bCB0ZXh0LWJsYWNrXCI+e29iai5uYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlBvcHBpdGFuZGZpbmNoc2FucyB0ZXh0LWNlbnRlciB0ZXh0LWJsYWNrXCI+VHJhaXRzOjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInB1ZmZlckF0dHJpYnV0ZXMgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YXR0cmlidXRlcy5tYXAoKGF0dHJpYnV0ZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpPjxzcGFuPnthdHRyaWJ1dGVzLnRyYWl0X3R5cGV9Ojwvc3Bhbj4ge2F0dHJpYnV0ZXMudmFsdWV9PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwdWZmZXJMaXN0O1xuICAgIH1cblxuICAgIHVzZUVmZmVjdCggYXN5bmMoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJhbCA9IGF3YWl0IHB1ZmZlckNvbnRyYWN0Lm1ldGhvZHMuYmFsYW5jZU9mKHdhbGxldEFkZHJlc3MpLmNhbGwoKTtcbiAgICAgICAgY29uc3QgbWFrZV9yYW5nZSA9IChzLCBlKSA9PiBBcnJheShlIC0gcyArIDEpLmZpbGwoKS5tYXAoKF8sIGkpID0+IHMgKyBpKTtcbiAgICAgICAgY29uc3QgQ0hVTktfU0laRSA9IDEwOyAvLyBpbiBjYXNlIHdlIGhhdmUgdG9vbyBtYW55XG5cbiAgICAgICAgLy8gY29uc3QgdG9rZW5zID0gW107XG4gICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgYmFsOyBjICs9IENIVU5LX1NJWkUpIHtcbiAgICAgICAgICAgIGNvbnN0IHIgPSBtYWtlX3JhbmdlKGMsIE1hdGgubWluKGJhbCAtIDEsIGMgKyBDSFVOS19TSVpFKSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyKTtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZHMgPSBhd2FpdCBQcm9taXNlLmFsbChyLm1hcCgoaSkgPT5cbiAgICAgICAgICAgICAgICAgICAgcHVmZmVyQ29udHJhY3QubWV0aG9kcy50b2tlbk9mT3duZXJCeUluZGV4KHdhbGxldEFkZHJlc3MsIGkpLmNhbGwoKVxuICAgICAgICAgICAgICAgICkpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGlkcyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBvYmpzID0gYXdhaXQgUHJvbWlzZS5hbGwoaWRzLm1hcCgoaWQpID0+XG4gICAgICAgICAgICAgICAgICAgIHB1ZmZlckNvbnRyYWN0Lm1ldGhvZHMudG9rZW5VUkkoTnVtYmVyLnBhcnNlSW50KGlkLCAxMCkpLmNhbGwoKVxuICAgICAgICAgICAgICAgICkpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG9ianMpO1xuXG4gICAgICAgICAgICAgICAgLy8gc3dpdGNoIGF0dHJzIHRvIHRoaXMgb25jZSBjb3JzIGhlYWRlcnMgaGF2ZSBiZWVuIHJlc29sdmVkIG9uIGRlbW9wb29sc2lkZXB1ZmZlcnMudmVyY2VsLmFwcFxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IGF0dHJzID0gYXdhaXQgUHJvbWlzZS5hbGwob2Jqcy5tYXAoKG9iaikgPT5cbiAgICAgICAgICAgICAgICAvLyAgIGZldGNoKG9iaikudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgICAgIC8vICkpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGF0dHJzKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJzID0gYXdhaXQgUHJvbWlzZS5hbGwoaWRzLm1hcCgoaWQpID0+XG4gICAgICAgICAgICAgICAgICAgIGZldGNoKGAvYXBpLyR7aWR9YCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgICAgICkpO1xuXG4gICAgICAgICAgICAgICAgc2V0UHVmZmVyQ2FyZERhdGEoYXR0cnMpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH0sIFtdKTtcblxuICAgIHJldHVybiAoPGRpdiBpZD1cInB1ZmZlci1wb29sXCIgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXJcIj57cmVuZGVyQ2FyZHMoKX08L2Rpdj4pO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/PufferCard.js\n");

/***/ })

});