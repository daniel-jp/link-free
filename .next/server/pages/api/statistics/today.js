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
exports.id = "pages/api/statistics/today";
exports.ids = ["pages/api/statistics/today"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "pino":
/*!***********************!*\
  !*** external "pino" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("pino");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./node_modules/@swc/helpers/lib/_interop_require_default.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@swc/helpers/lib/_interop_require_default.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"default\", ({\n    enumerable: true,\n    get: function() {\n        return _interopRequireDefault;\n    }\n}));\nfunction _interopRequireDefault(obj) {\n    return obj && obj.__esModule ? obj : {\n        default: obj\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2xpYi9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRiwyQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGlua2ZyZWUvLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2xpYi9faW50ZXJvcF9yZXF1aXJlX2RlZmF1bHQuanM/OTE2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImRlZmF1bHRcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7XG4gICAgfVxufSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./node_modules/@swc/helpers/lib/_interop_require_default.js\n");

/***/ }),

/***/ "(api)/./config/logger.js":
/*!**************************!*\
  !*** ./config/logger.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var pino__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pino */ \"pino\");\n/* harmony import */ var pino__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pino__WEBPACK_IMPORTED_MODULE_0__);\n\nconst config = {\n    transport: {\n        target: \"pino-pretty\",\n        options: {\n            colorize: true\n        }\n    }\n};\nconst logger = pino__WEBPACK_IMPORTED_MODULE_0__.pino( true ? config : 0);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logger);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcvbG9nZ2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFtQztBQUVuQyxNQUFNQyxTQUFTO0lBQ2JDLFdBQVc7UUFDVEMsUUFBUTtRQUNSQyxTQUFTO1lBQ1BDLFVBQVUsSUFBSTtRQUNoQjtJQUNGO0FBQ0Y7QUFFQSxNQUFNQyxTQUFTTixzQ0FBZSxDQUM1QlEsS0FBc0MsR0FBR1AsU0FBUyxDQUFFO0FBR3RELGlFQUFlSyxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGlua2ZyZWUvLi9jb25maWcvbG9nZ2VyLmpzP2YxMTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUGlub0xvZ2dlciBmcm9tIFwicGlub1wiO1xuXG5jb25zdCBjb25maWcgPSB7XG4gIHRyYW5zcG9ydDoge1xuICAgIHRhcmdldDogXCJwaW5vLXByZXR0eVwiLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGNvbG9yaXplOiB0cnVlLFxuICAgIH0sXG4gIH0sXG59O1xuXG5jb25zdCBsb2dnZXIgPSBQaW5vTG9nZ2VyLnBpbm8oXG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgPyBjb25maWcgOiB7fVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgbG9nZ2VyO1xuIl0sIm5hbWVzIjpbIlBpbm9Mb2dnZXIiLCJjb25maWciLCJ0cmFuc3BvcnQiLCJ0YXJnZXQiLCJvcHRpb25zIiwiY29sb3JpemUiLCJsb2dnZXIiLCJwaW5vIiwicHJvY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./config/logger.js\n");

/***/ }),

/***/ "(api)/./config/mongo.js":
/*!*************************!*\
  !*** ./config/mongo.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/logger */ \"(api)/./config/logger.js\");\n\n\n\nlet hasConnection = false;\nconst connectMongo = async ()=>{\n    if (!process.env.LINKFREE_MONGO_CONNECTION_STRING) {\n        throw new Error(\"Please define the LINKFREE_MONGO_CONNECTION_STRING environment variable (if local add to .env file)\");\n    }\n    if (hasConnection) {\n        return;\n    }\n    try {\n        // DigitalOcean Apps has cert as environment variable but Mongo needs a file path\n        // Write Mongo cert file to disk\n        if (process.env.CA_CERT) {\n            fs__WEBPACK_IMPORTED_MODULE_1__.writeFileSync(\"cert.pem\", process.env.CA_CERT);\n        }\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.LINKFREE_MONGO_CONNECTION_STRING);\n        hasConnection = true;\n        _config_logger__WEBPACK_IMPORTED_MODULE_2__[\"default\"].info(\"MongoDB connected\");\n    } catch (e) {\n        hasConnection = false;\n        _config_logger__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error(e, \"DB connection failed\");\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectMongo);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcvbW9uZ28uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWdDO0FBQ1A7QUFFYTtBQUV0QyxJQUFJRyxnQkFBZ0IsS0FBSztBQUN6QixNQUFNQyxlQUFlLFVBQVk7SUFDL0IsSUFBSSxDQUFDQyxRQUFRQyxHQUFHLENBQUNDLGdDQUFnQyxFQUFFO1FBQ2pELE1BQU0sSUFBSUMsTUFDUix1R0FDQTtJQUNKLENBQUM7SUFFRCxJQUFJTCxlQUFlO1FBQ2pCO0lBQ0YsQ0FBQztJQUNELElBQUk7UUFDRixpRkFBaUY7UUFDakYsZ0NBQWdDO1FBQ2hDLElBQUlFLFFBQVFDLEdBQUcsQ0FBQ0csT0FBTyxFQUFFO1lBQ3ZCUiw2Q0FBZ0IsQ0FBQyxZQUFZSSxRQUFRQyxHQUFHLENBQUNHLE9BQU87UUFDbEQsQ0FBQztRQUVELE1BQU1ULHVEQUFnQixDQUFDSyxRQUFRQyxHQUFHLENBQUNDLGdDQUFnQztRQUNuRUosZ0JBQWdCLElBQUk7UUFDcEJELDJEQUFXLENBQUM7SUFDZCxFQUFFLE9BQU9XLEdBQUc7UUFDVlYsZ0JBQWdCLEtBQUs7UUFDckJELDREQUFZLENBQUNXLEdBQUc7SUFDbEI7QUFDRjtBQUVBLGlFQUFlVCxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGlua2ZyZWUvLi9jb25maWcvbW9uZ28uanM/ZTk5NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5pbXBvcnQgKiBhcyBmcyBmcm9tIFwiZnNcIjtcblxuaW1wb3J0IGxvZ2dlciBmcm9tIFwiLi4vY29uZmlnL2xvZ2dlclwiO1xuXG5sZXQgaGFzQ29ubmVjdGlvbiA9IGZhbHNlO1xuY29uc3QgY29ubmVjdE1vbmdvID0gYXN5bmMgKCkgPT4ge1xuICBpZiAoIXByb2Nlc3MuZW52LkxJTktGUkVFX01PTkdPX0NPTk5FQ1RJT05fU1RSSU5HKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgXCJQbGVhc2UgZGVmaW5lIHRoZSBMSU5LRlJFRV9NT05HT19DT05ORUNUSU9OX1NUUklORyBlbnZpcm9ubWVudCB2YXJpYWJsZSAoaWYgbG9jYWwgYWRkIHRvIC5lbnYgZmlsZSlcIlxuICAgICk7XG4gIH1cblxuICBpZiAoaGFzQ29ubmVjdGlvbikge1xuICAgIHJldHVybjtcbiAgfVxuICB0cnkge1xuICAgIC8vIERpZ2l0YWxPY2VhbiBBcHBzIGhhcyBjZXJ0IGFzIGVudmlyb25tZW50IHZhcmlhYmxlIGJ1dCBNb25nbyBuZWVkcyBhIGZpbGUgcGF0aFxuICAgIC8vIFdyaXRlIE1vbmdvIGNlcnQgZmlsZSB0byBkaXNrXG4gICAgaWYgKHByb2Nlc3MuZW52LkNBX0NFUlQpIHtcbiAgICAgIGZzLndyaXRlRmlsZVN5bmMoXCJjZXJ0LnBlbVwiLCBwcm9jZXNzLmVudi5DQV9DRVJUKTtcbiAgICB9XG5cbiAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52LkxJTktGUkVFX01PTkdPX0NPTk5FQ1RJT05fU1RSSU5HKTtcbiAgICBoYXNDb25uZWN0aW9uID0gdHJ1ZTtcbiAgICBsb2dnZXIuaW5mbyhcIk1vbmdvREIgY29ubmVjdGVkXCIpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgaGFzQ29ubmVjdGlvbiA9IGZhbHNlO1xuICAgIGxvZ2dlci5lcnJvcihlLCBcIkRCIGNvbm5lY3Rpb24gZmFpbGVkXCIpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0TW9uZ287XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJmcyIsImxvZ2dlciIsImhhc0Nvbm5lY3Rpb24iLCJjb25uZWN0TW9uZ28iLCJwcm9jZXNzIiwiZW52IiwiTElOS0ZSRUVfTU9OR09fQ09OTkVDVElPTl9TVFJJTkciLCJFcnJvciIsIkNBX0NFUlQiLCJ3cml0ZUZpbGVTeW5jIiwiY29ubmVjdCIsImluZm8iLCJlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./config/mongo.js\n");

/***/ }),

/***/ "(api)/./models/Stats.js":
/*!*************************!*\
  !*** ./models/Stats.js ***!
  \*************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nconst _interopRequireDefault = (__webpack_require__(/*! @swc/helpers/lib/_interop_require_default.js */ \"(api)/./node_modules/@swc/helpers/lib/_interop_require_default.js\")[\"default\"]);\nconst _mongoose = /*#__PURE__*/ _interopRequireDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\nconst StatsSchema = new _mongoose.default.Schema({\n    views: {\n        type: Number,\n        default: 0\n    },\n    clicks: {\n        type: Number,\n        default: 0\n    },\n    users: {\n        type: Number,\n        default: 0\n    },\n    date: {\n        type: Date,\n        default: new Date(new Date().toLocaleDateString())\n    }\n});\nmodule.exports = _mongoose.default.models.Stats || _mongoose.default.model(\"Stats\", StatsSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvU3RhdHMuanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OzJFQUFxQiwwQkFBVTtBQUUvQixNQUFNQSxjQUFjLElBQUlDLGlCQUFRLENBQUNDLE1BQU0sQ0FBQztJQUN0Q0MsT0FBTztRQUNMQyxNQUFNQztRQUNOQyxTQUFTO0lBQ1g7SUFDQUMsUUFBUTtRQUNOSCxNQUFNQztRQUNOQyxTQUFTO0lBQ1g7SUFDQUUsT0FBTztRQUNMSixNQUFNQztRQUNOQyxTQUFTO0lBQ1g7SUFDQUcsTUFBTTtRQUNKTCxNQUFNTTtRQUNOSixTQUFTLElBQUlJLEtBQUssSUFBSUEsT0FBT0Msa0JBQWtCO0lBQ2pEO0FBQ0Y7QUFFQUMsT0FBT0MsT0FBTyxHQUFHWixpQkFBUSxDQUFDYSxNQUFNLENBQUNDLEtBQUssSUFBSWQsaUJBQVEsQ0FBQ2UsS0FBSyxDQUFDLFNBQVNoQiIsInNvdXJjZXMiOlsid2VicGFjazovL2xpbmtmcmVlLy4vbW9kZWxzL1N0YXRzLmpzPzU3MjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCBTdGF0c1NjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICB2aWV3czoge1xuICAgIHR5cGU6IE51bWJlcixcbiAgICBkZWZhdWx0OiAwLFxuICB9LFxuICBjbGlja3M6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogMCxcbiAgfSxcbiAgdXNlcnM6IHtcbiAgICB0eXBlOiBOdW1iZXIsXG4gICAgZGVmYXVsdDogMCxcbiAgfSxcbiAgZGF0ZToge1xuICAgIHR5cGU6IERhdGUsXG4gICAgZGVmYXVsdDogbmV3IERhdGUobmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoKSksXG4gIH0sXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBtb25nb29zZS5tb2RlbHMuU3RhdHMgfHwgbW9uZ29vc2UubW9kZWwoXCJTdGF0c1wiLCBTdGF0c1NjaGVtYSk7XG4iXSwibmFtZXMiOlsiU3RhdHNTY2hlbWEiLCJtb25nb29zZSIsIlNjaGVtYSIsInZpZXdzIiwidHlwZSIsIk51bWJlciIsImRlZmF1bHQiLCJjbGlja3MiLCJ1c2VycyIsImRhdGUiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwibW9kdWxlIiwiZXhwb3J0cyIsIm1vZGVscyIsIlN0YXRzIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./models/Stats.js\n");

/***/ }),

/***/ "(api)/./pages/api/statistics/today.js":
/*!***************************************!*\
  !*** ./pages/api/statistics/today.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _config_mongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/mongo */ \"(api)/./config/mongo.js\");\n/* harmony import */ var _config_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config/logger */ \"(api)/./config/logger.js\");\n/* harmony import */ var _models_Stats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/Stats */ \"(api)/./models/Stats.js\");\n/* harmony import */ var _models_Stats__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_models_Stats__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nasync function handler(req, res) {\n    await (0,_config_mongo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    const date = new Date();\n    date.setHours(1, 0, 0, 0);\n    let statsToday;\n    try {\n        statsToday = await _models_Stats__WEBPACK_IMPORTED_MODULE_2___default().findOne({\n            date\n        });\n    } catch (e) {\n        _config_logger__WEBPACK_IMPORTED_MODULE_1__[\"default\"].error(e, \"failed to load stats\");\n    }\n    if (!statsToday) {\n        statsToday = {\n            views: 0,\n            clicks: 0,\n            users: 0\n        };\n    }\n    res.status(200).json({\n        views: statsToday.views || 0,\n        clicks: statsToday.clicks || 0,\n        users: statsToday.users || 0\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3RhdGlzdGljcy90b2RheS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFpRDtBQUNMO0FBRUY7QUFFM0IsZUFBZUcsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsTUFBTUwseURBQVlBO0lBQ2xCLE1BQU1NLE9BQU8sSUFBSUM7SUFDakJELEtBQUtFLFFBQVEsQ0FBQyxHQUFHLEdBQUcsR0FBRztJQUV2QixJQUFJQztJQUNKLElBQUk7UUFDRkEsYUFBYSxNQUFNUCw0REFBYSxDQUFDO1lBQy9CSTtRQUNGO0lBQ0YsRUFBRSxPQUFPSyxHQUFHO1FBQ1ZWLDREQUFZLENBQUNVLEdBQUc7SUFDbEI7SUFFQSxJQUFJLENBQUNGLFlBQVk7UUFDZkEsYUFBYTtZQUNYSSxPQUFPO1lBQ1BDLFFBQVE7WUFDUkMsT0FBTztRQUNUO0lBQ0YsQ0FBQztJQUVEVixJQUFJVyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQ25CSixPQUFPSixXQUFXSSxLQUFLLElBQUk7UUFDM0JDLFFBQVFMLFdBQVdLLE1BQU0sSUFBSTtRQUM3QkMsT0FBT04sV0FBV00sS0FBSyxJQUFJO0lBQzdCO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xpbmtmcmVlLy4vcGFnZXMvYXBpL3N0YXRpc3RpY3MvdG9kYXkuanM/YWRhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29ubmVjdE1vbmdvIGZyb20gXCIuLi8uLi8uLi9jb25maWcvbW9uZ29cIjtcbmltcG9ydCBsb2dnZXIgZnJvbSBcIi4uLy4uLy4uL2NvbmZpZy9sb2dnZXJcIjtcblxuaW1wb3J0IFN0YXRzIGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvU3RhdHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBhd2FpdCBjb25uZWN0TW9uZ28oKTtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGRhdGUuc2V0SG91cnMoMSwgMCwgMCwgMCk7XG5cbiAgbGV0IHN0YXRzVG9kYXk7XG4gIHRyeSB7XG4gICAgc3RhdHNUb2RheSA9IGF3YWl0IFN0YXRzLmZpbmRPbmUoe1xuICAgICAgZGF0ZSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGxvZ2dlci5lcnJvcihlLCBcImZhaWxlZCB0byBsb2FkIHN0YXRzXCIpO1xuICB9XG5cbiAgaWYgKCFzdGF0c1RvZGF5KSB7XG4gICAgc3RhdHNUb2RheSA9IHtcbiAgICAgIHZpZXdzOiAwLFxuICAgICAgY2xpY2tzOiAwLFxuICAgICAgdXNlcnM6IDAsXG4gICAgfTtcbiAgfVxuXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICB2aWV3czogc3RhdHNUb2RheS52aWV3cyB8fCAwLFxuICAgIGNsaWNrczogc3RhdHNUb2RheS5jbGlja3MgfHwgMCxcbiAgICB1c2Vyczogc3RhdHNUb2RheS51c2VycyB8fCAwLFxuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJjb25uZWN0TW9uZ28iLCJsb2dnZXIiLCJTdGF0cyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJkYXRlIiwiRGF0ZSIsInNldEhvdXJzIiwic3RhdHNUb2RheSIsImZpbmRPbmUiLCJlIiwiZXJyb3IiLCJ2aWV3cyIsImNsaWNrcyIsInVzZXJzIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/statistics/today.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/statistics/today.js"));
module.exports = __webpack_exports__;

})();