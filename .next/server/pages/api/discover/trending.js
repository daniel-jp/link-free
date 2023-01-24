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
exports.id = "pages/api/discover/trending";
exports.ids = ["pages/api/discover/trending"];
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

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

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

/***/ "(api)/./models/ProfileStats.js":
/*!********************************!*\
  !*** ./models/ProfileStats.js ***!
  \********************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nconst _interopRequireDefault = (__webpack_require__(/*! @swc/helpers/lib/_interop_require_default.js */ \"(api)/./node_modules/@swc/helpers/lib/_interop_require_default.js\")[\"default\"]);\nconst _mongoose = /*#__PURE__*/ _interopRequireDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\nconst profileStatsSchema = new _mongoose.default.Schema({\n    username: {\n        type: String,\n        required: true\n    },\n    views: {\n        type: Number,\n        default: 0\n    },\n    date: {\n        type: Date,\n        default: new Date(new Date().toLocaleDateString())\n    },\n    profile: {\n        type: _mongoose.default.Schema.Types.ObjectId,\n        ref: \"profile\"\n    }\n});\nmodule.exports = _mongoose.default.models.ProfileStats || _mongoose.default.model(\"ProfileStats\", profileStatsSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvUHJvZmlsZVN0YXRzLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBOzs7OzsyRUFBcUIsMEJBQVU7QUFFL0IsTUFBTUEscUJBQXFCLElBQUlDLGlCQUFRLENBQUNDLE1BQU0sQ0FBQztJQUM3Q0MsVUFBVTtRQUNSQyxNQUFNQztRQUNOQyxVQUFVLElBQUk7SUFDaEI7SUFDQUMsT0FBTztRQUNMSCxNQUFNSTtRQUNOQyxTQUFTO0lBQ1g7SUFDQUMsTUFBTTtRQUNKTixNQUFNTztRQUNORixTQUFTLElBQUlFLEtBQUssSUFBSUEsT0FBT0Msa0JBQWtCO0lBQ2pEO0lBQ0FDLFNBQVM7UUFDUFQsTUFBTUgsaUJBQVEsQ0FBQ0MsTUFBTSxDQUFDWSxLQUFLLENBQUNDLFFBQVE7UUFDcENDLEtBQUs7SUFDUDtBQUNGO0FBRUFDLE9BQU9DLE9BQU8sR0FDWmpCLGlCQUFRLENBQUNrQixNQUFNLENBQUNDLFlBQVksSUFDNUJuQixpQkFBUSxDQUFDb0IsS0FBSyxDQUFDLGdCQUFnQnJCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGlua2ZyZWUvLi9tb2RlbHMvUHJvZmlsZVN0YXRzLmpzP2YyODciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCBwcm9maWxlU3RhdHNTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgdXNlcm5hbWU6IHtcbiAgICB0eXBlOiBTdHJpbmcsXG4gICAgcmVxdWlyZWQ6IHRydWUsXG4gIH0sXG4gIHZpZXdzOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IDAsXG4gIH0sXG4gIGRhdGU6IHtcbiAgICB0eXBlOiBEYXRlLFxuICAgIGRlZmF1bHQ6IG5ldyBEYXRlKG5ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKCkpLFxuICB9LFxuICBwcm9maWxlOiB7XG4gICAgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLFxuICAgIHJlZjogXCJwcm9maWxlXCIsXG4gIH0sXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPVxuICBtb25nb29zZS5tb2RlbHMuUHJvZmlsZVN0YXRzIHx8XG4gIG1vbmdvb3NlLm1vZGVsKFwiUHJvZmlsZVN0YXRzXCIsIHByb2ZpbGVTdGF0c1NjaGVtYSk7XG4iXSwibmFtZXMiOlsicHJvZmlsZVN0YXRzU2NoZW1hIiwibW9uZ29vc2UiLCJTY2hlbWEiLCJ1c2VybmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInZpZXdzIiwiTnVtYmVyIiwiZGVmYXVsdCIsImRhdGUiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwicHJvZmlsZSIsIlR5cGVzIiwiT2JqZWN0SWQiLCJyZWYiLCJtb2R1bGUiLCJleHBvcnRzIiwibW9kZWxzIiwiUHJvZmlsZVN0YXRzIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./models/ProfileStats.js\n");

/***/ }),

/***/ "(api)/./pages/api/discover/trending.js":
/*!****************************************!*\
  !*** ./pages/api/discover/trending.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _config_mongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/mongo */ \"(api)/./config/mongo.js\");\n/* harmony import */ var _config_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config/logger */ \"(api)/./config/logger.js\");\n/* harmony import */ var _models_ProfileStats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/ProfileStats */ \"(api)/./models/ProfileStats.js\");\n/* harmony import */ var _models_ProfileStats__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_models_ProfileStats__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_profiles_loadProfiles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/profiles/loadProfiles */ \"(api)/./services/profiles/loadProfiles.js\");\n\n\n\n\nasync function handler(req, res) {\n    await (0,_config_mongo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    let getProfiles = [];\n    try {\n        getProfiles = await _models_ProfileStats__WEBPACK_IMPORTED_MODULE_2___default().aggregate([\n            {\n                $match: {\n                    date: {\n                        $gte: new Date(new Date().setDate(new Date().getDate() - 1))\n                    },\n                    username: {\n                        $nin: process.env.SHADOWBAN.split(\",\")\n                    }\n                }\n            },\n            {\n                $group: {\n                    _id: \"$profile\",\n                    username: {\n                        $first: \"$username\"\n                    },\n                    views: {\n                        $sum: \"$views\"\n                    }\n                }\n            },\n            {\n                $sort: {\n                    views: -1\n                }\n            },\n            {\n                $limit: 20\n            }\n        ]);\n    } catch (e) {\n        _config_logger__WEBPACK_IMPORTED_MODULE_1__[\"default\"].error(e, \"failed to load profile stats\");\n    }\n    // check for db results\n    if (getProfiles.length === 0) {\n        return res.status(404).json([]);\n    }\n    // merge profiles with their profile views if set to public\n    const profiles = await (0,_services_profiles_loadProfiles__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(getProfiles);\n    const slicedProfiles = profiles.slice(0, 5);\n    res.status(200).json(slicedProfiles);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZGlzY292ZXIvdHJlbmRpbmcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWlEO0FBQ0w7QUFDWTtBQUNXO0FBRXBELGVBQWVJLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLE1BQU1OLHlEQUFZQTtJQUVsQixJQUFJTyxjQUFjLEVBQUU7SUFDcEIsSUFBSTtRQUNGQSxjQUFjLE1BQU1MLHFFQUFzQixDQUFDO1lBQ3pDO2dCQUNFTyxRQUFRO29CQUNOQyxNQUFNO3dCQUNKQyxNQUFNLElBQUlDLEtBQUssSUFBSUEsT0FBT0MsT0FBTyxDQUFDLElBQUlELE9BQU9FLE9BQU8sS0FBSztvQkFDM0Q7b0JBQ0FDLFVBQVU7d0JBQUVDLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0MsU0FBUyxDQUFDQyxLQUFLLENBQUM7b0JBQUs7Z0JBQ3JEO1lBQ0Y7WUFDQTtnQkFDRUMsUUFBUTtvQkFDTkMsS0FBSztvQkFDTFAsVUFBVTt3QkFBRVEsUUFBUTtvQkFBWTtvQkFDaENDLE9BQU87d0JBQ0xDLE1BQU07b0JBQ1I7Z0JBQ0Y7WUFDRjtZQUNBO2dCQUNFQyxPQUFPO29CQUNMRixPQUFPLENBQUM7Z0JBQ1Y7WUFDRjtZQUNBO2dCQUNFRyxRQUFRO1lBQ1Y7U0FDRDtJQUNILEVBQUUsT0FBT0MsR0FBRztRQUNWM0IsNERBQVksQ0FBQzJCLEdBQUc7SUFDbEI7SUFFQSx1QkFBdUI7SUFDdkIsSUFBSXJCLFlBQVl1QixNQUFNLEtBQUssR0FBRztRQUM1QixPQUFPeEIsSUFBSXlCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUMsRUFBRTtJQUNoQyxDQUFDO0lBRUQsMkRBQTJEO0lBQzNELE1BQU1DLFdBQVcsTUFBTTlCLDJFQUFZQSxDQUFDSTtJQUVwQyxNQUFNMkIsaUJBQWlCRCxTQUFTRSxLQUFLLENBQUMsR0FBRztJQUN6QzdCLElBQUl5QixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDRTtBQUN2QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGlua2ZyZWUvLi9wYWdlcy9hcGkvZGlzY292ZXIvdHJlbmRpbmcuanM/ZTBmNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29ubmVjdE1vbmdvIGZyb20gXCIuLi8uLi8uLi9jb25maWcvbW9uZ29cIjtcbmltcG9ydCBsb2dnZXIgZnJvbSBcIi4uLy4uLy4uL2NvbmZpZy9sb2dnZXJcIjtcbmltcG9ydCBQcm9maWxlU3RhdHMgZnJvbSBcIi4uLy4uLy4uL21vZGVscy9Qcm9maWxlU3RhdHNcIjtcbmltcG9ydCBsb2FkUHJvZmlsZXMgZnJvbSBcIi4uLy4uLy4uL3NlcnZpY2VzL3Byb2ZpbGVzL2xvYWRQcm9maWxlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGF3YWl0IGNvbm5lY3RNb25nbygpO1xuXG4gIGxldCBnZXRQcm9maWxlcyA9IFtdO1xuICB0cnkge1xuICAgIGdldFByb2ZpbGVzID0gYXdhaXQgUHJvZmlsZVN0YXRzLmFnZ3JlZ2F0ZShbXG4gICAgICB7XG4gICAgICAgICRtYXRjaDoge1xuICAgICAgICAgIGRhdGU6IHtcbiAgICAgICAgICAgICRndGU6IG5ldyBEYXRlKG5ldyBEYXRlKCkuc2V0RGF0ZShuZXcgRGF0ZSgpLmdldERhdGUoKSAtIDEpKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHVzZXJuYW1lOiB7ICRuaW46IHByb2Nlc3MuZW52LlNIQURPV0JBTi5zcGxpdChcIixcIikgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICRncm91cDoge1xuICAgICAgICAgIF9pZDogXCIkcHJvZmlsZVwiLFxuICAgICAgICAgIHVzZXJuYW1lOiB7ICRmaXJzdDogXCIkdXNlcm5hbWVcIiB9LFxuICAgICAgICAgIHZpZXdzOiB7XG4gICAgICAgICAgICAkc3VtOiBcIiR2aWV3c1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAkc29ydDoge1xuICAgICAgICAgIHZpZXdzOiAtMSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICRsaW1pdDogMjAsXG4gICAgICB9LFxuICAgIF0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgbG9nZ2VyLmVycm9yKGUsIFwiZmFpbGVkIHRvIGxvYWQgcHJvZmlsZSBzdGF0c1wiKTtcbiAgfVxuXG4gIC8vIGNoZWNrIGZvciBkYiByZXN1bHRzXG4gIGlmIChnZXRQcm9maWxlcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oW10pO1xuICB9XG5cbiAgLy8gbWVyZ2UgcHJvZmlsZXMgd2l0aCB0aGVpciBwcm9maWxlIHZpZXdzIGlmIHNldCB0byBwdWJsaWNcbiAgY29uc3QgcHJvZmlsZXMgPSBhd2FpdCBsb2FkUHJvZmlsZXMoZ2V0UHJvZmlsZXMpO1xuXG4gIGNvbnN0IHNsaWNlZFByb2ZpbGVzID0gcHJvZmlsZXMuc2xpY2UoMCwgNSk7XG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHNsaWNlZFByb2ZpbGVzKTtcbn1cbiJdLCJuYW1lcyI6WyJjb25uZWN0TW9uZ28iLCJsb2dnZXIiLCJQcm9maWxlU3RhdHMiLCJsb2FkUHJvZmlsZXMiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiZ2V0UHJvZmlsZXMiLCJhZ2dyZWdhdGUiLCIkbWF0Y2giLCJkYXRlIiwiJGd0ZSIsIkRhdGUiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsInVzZXJuYW1lIiwiJG5pbiIsInByb2Nlc3MiLCJlbnYiLCJTSEFET1dCQU4iLCJzcGxpdCIsIiRncm91cCIsIl9pZCIsIiRmaXJzdCIsInZpZXdzIiwiJHN1bSIsIiRzb3J0IiwiJGxpbWl0IiwiZSIsImVycm9yIiwibGVuZ3RoIiwic3RhdHVzIiwianNvbiIsInByb2ZpbGVzIiwic2xpY2VkUHJvZmlsZXMiLCJzbGljZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/discover/trending.js\n");

/***/ }),

/***/ "(api)/./services/profiles/loadProfiles.js":
/*!*******************************************!*\
  !*** ./services/profiles/loadProfiles.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadProfiles)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/logger */ \"(api)/./config/logger.js\");\n\n\n\nfunction loadProfiles(profiles) {\n    const directoryPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"data\");\n    const users = profiles.flatMap((profile)=>{\n        const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(directoryPath, `${profile.username}.json`);\n        try {\n            const json = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(filePath, \"utf8\"));\n            return {\n                ...profile,\n                name: json.name,\n                bio: json.bio,\n                displayStatsPublic: json.displayStatsPublic,\n                avatar: json.avatar,\n                tags: json.tags\n            };\n        } catch (e) {\n            _config_logger__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error(e, `failed loading profile in: ${filePath}`);\n            return [];\n        }\n    });\n    return users;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zZXJ2aWNlcy9wcm9maWxlcy9sb2FkUHJvZmlsZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW9CO0FBQ0k7QUFFaUI7QUFFMUIsU0FBU0csYUFBYUMsUUFBUSxFQUFFO0lBQzNDLE1BQU1DLGdCQUFnQkosZ0RBQVMsQ0FBQ00sUUFBUUMsR0FBRyxJQUFJO0lBRS9DLE1BQU1DLFFBQVFMLFNBQVNNLE9BQU8sQ0FBQyxDQUFDQyxVQUFZO1FBQ3hDLE1BQU1DLFdBQVdYLGdEQUFTLENBQUNJLGVBQWUsQ0FBQyxFQUFFTSxRQUFRRSxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQ3BFLElBQUk7WUFDQSxNQUFNQyxPQUFPQyxLQUFLQyxLQUFLLENBQUNoQixzREFBZSxDQUFDWSxVQUFVO1lBQ2xELE9BQU87Z0JBQ0gsR0FBR0QsT0FBTztnQkFDVk8sTUFBTUosS0FBS0ksSUFBSTtnQkFDZkMsS0FBS0wsS0FBS0ssR0FBRztnQkFDYkMsb0JBQW9CTixLQUFLTSxrQkFBa0I7Z0JBQzNDQyxRQUFRUCxLQUFLTyxNQUFNO2dCQUNuQkMsTUFBTVIsS0FBS1EsSUFBSTtZQUVuQjtRQUNKLEVBQUUsT0FBT0MsR0FBRztZQUNSckIsNERBQVksQ0FBQ3FCLEdBQUcsQ0FBQywyQkFBMkIsRUFBRVgsU0FBUyxDQUFDO1lBQ3hELE9BQU8sRUFBRTtRQUNiO0lBQ0o7SUFFQSxPQUFPSDtBQUNYLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saW5rZnJlZS8uL3NlcnZpY2VzL3Byb2ZpbGVzL2xvYWRQcm9maWxlcy5qcz8wOGY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuaW1wb3J0IGxvZ2dlciBmcm9tICcuLi8uLi9jb25maWcvbG9nZ2VyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZFByb2ZpbGVzKHByb2ZpbGVzKSB7XG4gICAgY29uc3QgZGlyZWN0b3J5UGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBcImRhdGFcIik7XG5cbiAgICBjb25zdCB1c2VycyA9IHByb2ZpbGVzLmZsYXRNYXAoKHByb2ZpbGUpID0+IHtcbiAgICAgICAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4oZGlyZWN0b3J5UGF0aCwgYCR7cHJvZmlsZS51c2VybmFtZX0uanNvbmApO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QganNvbiA9IEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKGZpbGVQYXRoLCBcInV0ZjhcIikpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5wcm9maWxlLFxuICAgICAgICAgICAgICAgIG5hbWU6IGpzb24ubmFtZSxcbiAgICAgICAgICAgICAgICBiaW86IGpzb24uYmlvLFxuICAgICAgICAgICAgICAgIGRpc3BsYXlTdGF0c1B1YmxpYzoganNvbi5kaXNwbGF5U3RhdHNQdWJsaWMsXG4gICAgICAgICAgICAgICAgYXZhdGFyOiBqc29uLmF2YXRhcixcbiAgICAgICAgICAgICAgICB0YWdzOiBqc29uLnRhZ3MsXG5cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGxvZ2dlci5lcnJvcihlLCBgZmFpbGVkIGxvYWRpbmcgcHJvZmlsZSBpbjogJHtmaWxlUGF0aH1gKTtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHVzZXJzO1xufSJdLCJuYW1lcyI6WyJmcyIsInBhdGgiLCJsb2dnZXIiLCJsb2FkUHJvZmlsZXMiLCJwcm9maWxlcyIsImRpcmVjdG9yeVBhdGgiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsInVzZXJzIiwiZmxhdE1hcCIsInByb2ZpbGUiLCJmaWxlUGF0aCIsInVzZXJuYW1lIiwianNvbiIsIkpTT04iLCJwYXJzZSIsInJlYWRGaWxlU3luYyIsIm5hbWUiLCJiaW8iLCJkaXNwbGF5U3RhdHNQdWJsaWMiLCJhdmF0YXIiLCJ0YWdzIiwiZSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./services/profiles/loadProfiles.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/discover/trending.js"));
module.exports = __webpack_exports__;

})();