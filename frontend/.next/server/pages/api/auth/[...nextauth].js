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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].js":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].js ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);\naxios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        })\n    ],\n    callbacks: {\n        async signIn ({ user , account , profile  }) {\n            if (account.provider === \"google\") {\n                const accessToken = account.access_token;\n                const idToken = account.id_token;\n                try {\n                    const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(`${process.env.DJANGO_URL}/api/social/login/google/`, {\n                        access_token: accessToken,\n                        id_token: idToken\n                    });\n                    const { access_token  } = response.data;\n                    user.accessToken = access_token;\n                    return true;\n                } catch (error) {\n                    return false;\n                }\n            }\n            return false;\n        },\n        async jwt ({ token , user , account , profile , isNewUser  }) {\n            if (user) {\n                const { accessToken  } = user;\n                token.accessToken = accessToken;\n            }\n            return token;\n        },\n        async session ({ session , token , user  }) {\n            session.accessToken = token.accessToken;\n            return session;\n        }\n    },\n    pages: {\n        signIn: \"/auth/signin\"\n    }\n}));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDdUI7QUFDOUI7QUFFekIsaUVBQWVBLGdEQUFRQSxDQUFDO0lBQ3BCRyxXQUFXO1FBQ1BGLGlFQUFjQSxDQUFDO1lBQ1hHLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ0MsZ0JBQWdCO1lBQ3RDQyxjQUFjSCxRQUFRQyxHQUFHLENBQUNHLG9CQUFvQjtRQUNsRDtLQUNIO0lBQ0RDLFdBQVc7UUFDUCxNQUFNQyxRQUFPLEVBQUVDLEtBQUksRUFBRUMsUUFBTyxFQUFFQyxRQUFPLEVBQUUsRUFBRTtZQUNyQyxJQUFJRCxRQUFRRSxRQUFRLEtBQUssVUFBVTtnQkFDL0IsTUFBTUMsY0FBY0gsUUFBUUksWUFBWTtnQkFDeEMsTUFBTUMsVUFBVUwsUUFBUU0sUUFBUTtnQkFFaEMsSUFBSTtvQkFDQSxNQUFNQyxXQUFXLE1BQU1sQixrREFBVSxDQUM3QixDQUFDLEVBQUVHLFFBQVFDLEdBQUcsQ0FBQ2dCLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQyxFQUNwRDt3QkFDSUwsY0FBY0Q7d0JBQ2RHLFVBQVVEO29CQUNkO29CQUdKLE1BQU0sRUFBRUQsYUFBWSxFQUFFLEdBQUdHLFNBQVNHLElBQUk7b0JBQ3RDWCxLQUFLSSxXQUFXLEdBQUdDO29CQUVuQixPQUFPLElBQUk7Z0JBQ2YsRUFBRSxPQUFPTyxPQUFPO29CQUNaLE9BQU8sS0FBSztnQkFDaEI7WUFDSixDQUFDO1lBQ0QsT0FBTyxLQUFLO1FBQ2hCO1FBRUEsTUFBTUMsS0FBSSxFQUFFQyxNQUFLLEVBQUVkLEtBQUksRUFBRUMsUUFBTyxFQUFFQyxRQUFPLEVBQUVhLFVBQVMsRUFBRSxFQUFFO1lBQ3BELElBQUlmLE1BQU07Z0JBQ04sTUFBTSxFQUFFSSxZQUFXLEVBQUUsR0FBR0o7Z0JBRXhCYyxNQUFNVixXQUFXLEdBQUdBO1lBQ3hCLENBQUM7WUFFRCxPQUFPVTtRQUNYO1FBRUEsTUFBTUUsU0FBUSxFQUFFQSxRQUFPLEVBQUVGLE1BQUssRUFBRWQsS0FBSSxFQUFFLEVBQUU7WUFFcENnQixRQUFRWixXQUFXLEdBQUdVLE1BQU1WLFdBQVc7WUFDdkMsT0FBT1k7UUFDWDtJQUNKO0lBQ0FDLE9BQU87UUFDSGxCLFFBQVE7SUFDWjtBQUNKLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWJsb2ctdHV0b3JpYWwvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz83OGFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tICduZXh0LWF1dGgnXG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBHb29nbGVQcm92aWRlcih7XG4gICAgICAgICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCxcbiAgICAgICAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQsXG4gICAgICAgIH0pLFxuICAgIF0sXG4gICAgY2FsbGJhY2tzOiB7XG4gICAgICAgIGFzeW5jIHNpZ25Jbih7IHVzZXIsIGFjY291bnQsIHByb2ZpbGUgfSkge1xuICAgICAgICAgICAgaWYgKGFjY291bnQucHJvdmlkZXIgPT09ICdnb29nbGUnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYWNjZXNzVG9rZW4gPSBhY2NvdW50LmFjY2Vzc190b2tlbjtcbiAgICAgICAgICAgICAgICBjb25zdCBpZFRva2VuID0gYWNjb3VudC5pZF90b2tlbjtcblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcbiAgICAgICAgICAgICAgICAgICAgICAgIGAke3Byb2Nlc3MuZW52LkRKQU5HT19VUkx9L2FwaS9zb2NpYWwvbG9naW4vZ29vZ2xlL2AsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXNzX3Rva2VuOiBhY2Nlc3NUb2tlbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZF90b2tlbjogaWRUb2tlbixcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgYWNjZXNzX3Rva2VuIH0gPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICB1c2VyLmFjY2Vzc1Rva2VuID0gYWNjZXNzX3Rva2VuO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH0sXG5cbiAgICAgICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIsIGFjY291bnQsIHByb2ZpbGUsIGlzTmV3VXNlciB9KSB7XG4gICAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgYWNjZXNzVG9rZW4gfSA9IHVzZXJcblxuICAgICAgICAgICAgICAgIHRva2VuLmFjY2Vzc1Rva2VuID0gYWNjZXNzVG9rZW5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRva2VuXG4gICAgICAgIH0sXG5cbiAgICAgICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuLCB1c2VyIH0pIHtcblxuICAgICAgICAgICAgc2Vzc2lvbi5hY2Nlc3NUb2tlbiA9IHRva2VuLmFjY2Vzc1Rva2VuXG4gICAgICAgICAgICByZXR1cm4gc2Vzc2lvblxuICAgICAgICB9LFxuICAgIH0sXG4gICAgcGFnZXM6IHtcbiAgICAgICAgc2lnbkluOiAnL2F1dGgvc2lnbmluJyxcbiAgICB9LFxufSlcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkdvb2dsZVByb3ZpZGVyIiwiYXhpb3MiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiLCJjYWxsYmFja3MiLCJzaWduSW4iLCJ1c2VyIiwiYWNjb3VudCIsInByb2ZpbGUiLCJwcm92aWRlciIsImFjY2Vzc1Rva2VuIiwiYWNjZXNzX3Rva2VuIiwiaWRUb2tlbiIsImlkX3Rva2VuIiwicmVzcG9uc2UiLCJwb3N0IiwiREpBTkdPX1VSTCIsImRhdGEiLCJlcnJvciIsImp3dCIsInRva2VuIiwiaXNOZXdVc2VyIiwic2Vzc2lvbiIsInBhZ2VzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();