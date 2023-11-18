"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/posts/[id]";
exports.ids = ["pages/posts/[id]"];
exports.modules = {

/***/ "./src/lib/posts.js":
/*!**************************!*\
  !*** ./src/lib/posts.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAllPostIds\": () => (/* binding */ getAllPostIds),\n/* harmony export */   \"getAllPostsData\": () => (/* binding */ getAllPostsData),\n/* harmony export */   \"getPostData\": () => (/* binding */ getPostData)\n/* harmony export */ });\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);\n\n// API server URL\n// const SERVERURL = \"http://127.0.0.1:8000/\";\n// const SERVERURL = \"http://localhost:8000/\";\nconst SERVERURL = \"http://backend:8000/\";\n// 投稿一覧を取得\nasync function getAllPostsData() {\n    const res = await node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(new URL(`${SERVERURL}api/post/`));\n    const posts = await res.json();\n    return posts;\n}\n// 投稿一覧のIDを取得\nasync function getAllPostIds() {\n    const res = await node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(new URL(`${SERVERURL}api/post/`));\n    const posts = await res.json();\n    return posts.map((post)=>{\n        return {\n            params: {\n                id: String(post.id)\n            }\n        };\n    });\n}\n// 投稿詳細を取得\nasync function getPostData(id) {\n    const res = await node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(new URL(`${SERVERURL}api/post/${id}/`));\n    const post = await res.json();\n    return post;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL3Bvc3RzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQStCO0FBRS9CLGlCQUFpQjtBQUNqQiw4Q0FBOEM7QUFDOUMsOENBQThDO0FBQzlDLE1BQU1DLFlBQVk7QUFFbEIsVUFBVTtBQUNILGVBQWVDLGtCQUFrQjtJQUNwQyxNQUFNQyxNQUFNLE1BQU1ILGlEQUFLQSxDQUFDLElBQUlJLElBQUksQ0FBQyxFQUFFSCxVQUFVLFNBQVMsQ0FBQztJQUN2RCxNQUFNSSxRQUFRLE1BQU1GLElBQUlHLElBQUk7SUFDNUIsT0FBT0Q7QUFDWCxDQUFDO0FBR0QsYUFBYTtBQUNOLGVBQWVFLGdCQUFnQjtJQUNsQyxNQUFNSixNQUFNLE1BQU1ILGlEQUFLQSxDQUFDLElBQUlJLElBQUksQ0FBQyxFQUFFSCxVQUFVLFNBQVMsQ0FBQztJQUN2RCxNQUFNSSxRQUFRLE1BQU1GLElBQUlHLElBQUk7SUFDNUIsT0FBT0QsTUFBTUcsR0FBRyxDQUFDLENBQUNDLE9BQVM7UUFDdkIsT0FBTztZQUNIQyxRQUFRO2dCQUNKQyxJQUFJQyxPQUFPSCxLQUFLRSxFQUFFO1lBQ3RCO1FBQ0o7SUFDSjtBQUNKLENBQUM7QUFHRCxVQUFVO0FBQ0gsZUFBZUUsWUFBWUYsRUFBRSxFQUFFO0lBQ2xDLE1BQU1SLE1BQU0sTUFBTUgsaURBQUtBLENBQUMsSUFBSUksSUFBSSxDQUFDLEVBQUVILFVBQVUsU0FBUyxFQUFFVSxHQUFHLENBQUMsQ0FBQztJQUM3RCxNQUFNRixPQUFPLE1BQU1OLElBQUlHLElBQUk7SUFDM0IsT0FBT0c7QUFDWCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1ibG9nLXR1dG9yaWFsLy4vc3JjL2xpYi9wb3N0cy5qcz84ZmZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tIFwibm9kZS1mZXRjaFwiO1xuXG4vLyBBUEkgc2VydmVyIFVSTFxuLy8gY29uc3QgU0VSVkVSVVJMID0gXCJodHRwOi8vMTI3LjAuMC4xOjgwMDAvXCI7XG4vLyBjb25zdCBTRVJWRVJVUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9cIjtcbmNvbnN0IFNFUlZFUlVSTCA9IFwiaHR0cDovL2JhY2tlbmQ6ODAwMC9cIjtcblxuLy8g5oqV56i/5LiA6Kan44KS5Y+W5b6XXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsUG9zdHNEYXRhKCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKG5ldyBVUkwoYCR7U0VSVkVSVVJMfWFwaS9wb3N0L2ApKTtcbiAgICBjb25zdCBwb3N0cyA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgcmV0dXJuIHBvc3RzO1xufVxuXG5cbi8vIOaKleeov+S4gOimp+OBrklE44KS5Y+W5b6XXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QWxsUG9zdElkcygpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChuZXcgVVJMKGAke1NFUlZFUlVSTH1hcGkvcG9zdC9gKSk7XG4gICAgY29uc3QgcG9zdHMgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIHJldHVybiBwb3N0cy5tYXAoKHBvc3QpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIGlkOiBTdHJpbmcocG9zdC5pZCksXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH0pO1xufVxuXG5cbi8vIOaKleeov+ips+e0sOOCkuWPluW+l1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc3REYXRhKGlkKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2gobmV3IFVSTChgJHtTRVJWRVJVUkx9YXBpL3Bvc3QvJHtpZH0vYCkpO1xuICAgIGNvbnN0IHBvc3QgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIHJldHVybiBwb3N0O1xufSJdLCJuYW1lcyI6WyJmZXRjaCIsIlNFUlZFUlVSTCIsImdldEFsbFBvc3RzRGF0YSIsInJlcyIsIlVSTCIsInBvc3RzIiwianNvbiIsImdldEFsbFBvc3RJZHMiLCJtYXAiLCJwb3N0IiwicGFyYW1zIiwiaWQiLCJTdHJpbmciLCJnZXRQb3N0RGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/lib/posts.js\n");

/***/ }),

/***/ "./src/pages/posts/[id].js":
/*!*********************************!*\
  !*** ./src/pages/posts/[id].js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PostData),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_posts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/posts */ \"./src/lib/posts.js\");\n\n\n\nfunction PostData({ post  }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    if (router.isFallback || !post) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/var/www/firstme-app/src/pages/posts/[id].js\",\n            lineNumber: 8,\n            columnNumber: 16\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"space-y-5 w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center flex-col items-center mb-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-3xl mb-3 font-bold\",\n                        children: post.title\n                    }, void 0, false, {\n                        fileName: \"/var/www/firstme-app/src/pages/posts/[id].js\",\n                        lineNumber: 14,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mb-3\",\n                        children: post.created_at\n                    }, void 0, false, {\n                        fileName: \"/var/www/firstme-app/src/pages/posts/[id].js\",\n                        lineNumber: 15,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border w-14\"\n                    }, void 0, false, {\n                        fileName: \"/var/www/firstme-app/src/pages/posts/[id].js\",\n                        lineNumber: 16,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/var/www/firstme-app/src/pages/posts/[id].js\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"Whitespace-pre-wrap\",\n                children: post.content\n            }, void 0, false, {\n                fileName: \"/var/www/firstme-app/src/pages/posts/[id].js\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/var/www/firstme-app/src/pages/posts/[id].js\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, this);\n}\n// 投稿一覧のIDを取得\nasync function getStaticPaths() {\n    const paths = await (0,_lib_posts__WEBPACK_IMPORTED_MODULE_2__.getAllPostIds)();\n    return {\n        paths,\n        fallback: true\n    };\n}\n// 投稿詳細のデータを取得\nasync function getStaticProps({ params  }) {\n    const post = await (0,_lib_posts__WEBPACK_IMPORTED_MODULE_2__.getPostData)(params.id);\n    return {\n        props: {\n            post\n        },\n        revalidate: 3\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcG9zdHMvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBd0M7QUFDcUI7QUFFOUMsU0FBU0csU0FBUyxFQUFFQyxLQUFJLEVBQUUsRUFBRTtJQUN2QyxNQUFNQyxTQUFTTCxzREFBU0E7SUFFeEIsSUFBSUssT0FBT0MsVUFBVSxJQUFJLENBQUNGLE1BQU07UUFDNUIscUJBQU8sOERBQUNHO3NCQUFJOzs7Ozs7SUFDaEIsQ0FBQztJQUVELHFCQUNJLDhEQUFDQTtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDQzt3QkFBR0QsV0FBVTtrQ0FBMkJKLEtBQUtNLEtBQUs7Ozs7OztrQ0FDbkQsOERBQUNDO3dCQUFFSCxXQUFVO2tDQUFRSixLQUFLUSxVQUFVOzs7Ozs7a0NBQ3BDLDhEQUFDTDt3QkFBSUMsV0FBVTs7Ozs7Ozs7Ozs7OzBCQUV2Qiw4REFBQ0c7Z0JBQUVILFdBQVU7MEJBQXVCSixLQUFLUyxPQUFPOzs7Ozs7Ozs7Ozs7QUFHeEQsQ0FBQztBQUVELGFBQWE7QUFDTixlQUFlQyxpQkFBaUI7SUFDbkMsTUFBTUMsUUFBUSxNQUFNZCx5REFBYUE7SUFFakMsT0FBTztRQUNIYztRQUNBQyxVQUFVLElBQUk7SUFDbEI7QUFDSixDQUFDO0FBRUQsY0FBYztBQUNQLGVBQWVDLGVBQWUsRUFBRUMsT0FBTSxFQUFFLEVBQUU7SUFDN0MsTUFBTWQsT0FBTyxNQUFNRix1REFBV0EsQ0FBQ2dCLE9BQU9DLEVBQUU7SUFDeEMsT0FBTztRQUNIQyxPQUFPO1lBQ0hoQjtRQUNKO1FBQ0FpQixZQUFZO0lBQ2hCO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtYmxvZy10dXRvcmlhbC8uL3NyYy9wYWdlcy9wb3N0cy9baWRdLmpzPzRjNDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBnZXRBbGxQb3N0SWRzLCBnZXRQb3N0RGF0YSB9IGZyb20gXCIuLi8uLi9saWIvcG9zdHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdERhdGEoeyBwb3N0IH0pIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIGlmIChyb3V0ZXIuaXNGYWxsYmFjayB8fCAhcG9zdCkge1xuICAgICAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS01IHctZnVsbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBtYi01XCI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIG1iLTMgZm9udC1ib2xkXCI+e3Bvc3QudGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0zXCI+e3Bvc3QuY3JlYXRlZF9hdH08L3A+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgdy0xNFwiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIldoaXRlc3BhY2UtcHJlLXdyYXBcIj57cG9zdC5jb250ZW50fTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuLy8g5oqV56i/5LiA6Kan44GuSUTjgpLlj5blvpdcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgICBjb25zdCBwYXRocyA9IGF3YWl0IGdldEFsbFBvc3RJZHMoKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHBhdGhzLFxuICAgICAgICBmYWxsYmFjazogdHJ1ZSxcbiAgICB9O1xufVxuXG4vLyDmipXnqL/oqbPntLDjga7jg4fjg7zjgr/jgpLlj5blvpdcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG4gICAgY29uc3QgcG9zdCA9IGF3YWl0IGdldFBvc3REYXRhKHBhcmFtcy5pZCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHBvc3QsXG4gICAgICAgIH0sXG4gICAgICAgIHJldmFsaWRhdGU6IDMsXG4gICAgfTtcbn0iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiZ2V0QWxsUG9zdElkcyIsImdldFBvc3REYXRhIiwiUG9zdERhdGEiLCJwb3N0Iiwicm91dGVyIiwiaXNGYWxsYmFjayIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwidGl0bGUiLCJwIiwiY3JlYXRlZF9hdCIsImNvbnRlbnQiLCJnZXRTdGF0aWNQYXRocyIsInBhdGhzIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsInBhcmFtcyIsImlkIiwicHJvcHMiLCJyZXZhbGlkYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/posts/[id].js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("node-fetch");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/posts/[id].js"));
module.exports = __webpack_exports__;

})();