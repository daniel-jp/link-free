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
exports.id = "pages/api/discover/popular";
exports.ids = ["pages/api/discover/popular"];
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

/***/ "(api)/./models/Profile.js":
/*!***************************!*\
  !*** ./models/Profile.js ***!
  \***************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nconst _interopRequireDefault = (__webpack_require__(/*! @swc/helpers/lib/_interop_require_default.js */ \"(api)/./node_modules/@swc/helpers/lib/_interop_require_default.js\")[\"default\"]);\nconst _mongoose = /*#__PURE__*/ _interopRequireDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\nconst ProfileSchema = new _mongoose.default.Schema({\n    username: String,\n    views: {\n        type: Number,\n        default: 0\n    },\n    links: {\n        default: [],\n        type: [\n            {\n                type: _mongoose.default.Schema.Types.ObjectId,\n                ref: \"Link\"\n            }\n        ]\n    }\n});\nmodule.exports = _mongoose.default.models.Profile || _mongoose.default.model(\"Profile\", ProfileSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvUHJvZmlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7MkVBQXFCLDBCQUFVO0FBRS9CLE1BQU1BLGdCQUFnQixJQUFJQyxpQkFBUSxDQUFDQyxNQUFNLENBQUM7SUFDeENDLFVBQVVDO0lBQ1ZDLE9BQU87UUFDTEMsTUFBTUM7UUFDTkMsU0FBUztJQUNYO0lBQ0FDLE9BQU87UUFDTEQsU0FBUyxFQUFFO1FBQ1hGLE1BQU07WUFBQztnQkFBRUEsTUFBTUwsaUJBQVEsQ0FBQ0MsTUFBTSxDQUFDUSxLQUFLLENBQUNDLFFBQVE7Z0JBQUVDLEtBQUs7WUFBTztTQUFFO0lBQy9EO0FBQ0Y7QUFFQUMsT0FBT0MsT0FBTyxHQUNaYixpQkFBUSxDQUFDYyxNQUFNLENBQUNDLE9BQU8sSUFBSWYsaUJBQVEsQ0FBQ2dCLEtBQUssQ0FBQyxXQUFXakIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saW5rZnJlZS8uL21vZGVscy9Qcm9maWxlLmpzPzQ0NDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCBQcm9maWxlU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gIHVzZXJuYW1lOiBTdHJpbmcsXG4gIHZpZXdzOiB7XG4gICAgdHlwZTogTnVtYmVyLFxuICAgIGRlZmF1bHQ6IDAsXG4gIH0sXG4gIGxpbmtzOiB7XG4gICAgZGVmYXVsdDogW10sXG4gICAgdHlwZTogW3sgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLCByZWY6IFwiTGlua1wiIH1dLFxuICB9LFxufSk7XG5cbm1vZHVsZS5leHBvcnRzID1cbiAgbW9uZ29vc2UubW9kZWxzLlByb2ZpbGUgfHwgbW9uZ29vc2UubW9kZWwoXCJQcm9maWxlXCIsIFByb2ZpbGVTY2hlbWEpO1xuIl0sIm5hbWVzIjpbIlByb2ZpbGVTY2hlbWEiLCJtb25nb29zZSIsIlNjaGVtYSIsInVzZXJuYW1lIiwiU3RyaW5nIiwidmlld3MiLCJ0eXBlIiwiTnVtYmVyIiwiZGVmYXVsdCIsImxpbmtzIiwiVHlwZXMiLCJPYmplY3RJZCIsInJlZiIsIm1vZHVsZSIsImV4cG9ydHMiLCJtb2RlbHMiLCJQcm9maWxlIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./models/Profile.js\n");

/***/ }),

/***/ "(api)/./pages/api/discover/popular.js":
/*!***************************************!*\
  !*** ./pages/api/discover/popular.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _config_mongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/mongo */ \"(api)/./config/mongo.js\");\n/* harmony import */ var _config_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config/logger */ \"(api)/./config/logger.js\");\n/* harmony import */ var _models_Profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/Profile */ \"(api)/./models/Profile.js\");\n/* harmony import */ var _models_Profile__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_models_Profile__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_profiles_loadProfiles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/profiles/loadProfiles */ \"(api)/./services/profiles/loadProfiles.js\");\n\n\n\n\nasync function handler(req, res) {\n    await (0,_config_mongo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    let profiles = [];\n    try {\n        profiles = await _models_Profile__WEBPACK_IMPORTED_MODULE_2___default().find({\n            username: {\n                $nin: process.env.SHADOWBAN.split(\",\")\n            }\n        }).sort({\n            views: -1\n        }).limit(20);\n    } catch (e) {\n        _config_logger__WEBPACK_IMPORTED_MODULE_1__[\"default\"].error(e, \"failed to load profiles\");\n    }\n    if (profiles.length === 0) {\n        return res.status(404).json([]);\n    }\n    const profilesWithStats = await (0,_services_profiles_loadProfiles__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(profiles.map((profile)=>profile._doc));\n    const selectedPopularProfiles = profilesWithStats.slice(0, 5);\n    res.status(200).json(selectedPopularProfiles);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZGlzY292ZXIvcG9wdWxhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBaUQ7QUFDTDtBQUNFO0FBQ3FCO0FBRXBELGVBQWVJLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLE1BQU1OLHlEQUFZQTtJQUVsQixJQUFJTyxXQUFXLEVBQUU7SUFDakIsSUFBSTtRQUNGQSxXQUFXLE1BQU1MLDJEQUFZLENBQUM7WUFDNUJPLFVBQVU7Z0JBQUVDLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0MsU0FBUyxDQUFDQyxLQUFLLENBQUM7WUFBSztRQUNyRCxHQUNHQyxJQUFJLENBQUM7WUFBRUMsT0FBTyxDQUFDO1FBQUUsR0FDakJDLEtBQUssQ0FBQztJQUNYLEVBQUUsT0FBT0MsR0FBRztRQUNWakIsNERBQVksQ0FBQ2lCLEdBQUc7SUFDbEI7SUFFQSxJQUFJWCxTQUFTYSxNQUFNLEtBQUssR0FBRztRQUN6QixPQUFPZCxJQUFJZSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDLEVBQUU7SUFDaEMsQ0FBQztJQUVELE1BQU1DLG9CQUFvQixNQUFNcEIsMkVBQVlBLENBQzFDSSxTQUFTaUIsR0FBRyxDQUFDLENBQUNDLFVBQVlBLFFBQVFDLElBQUk7SUFHeEMsTUFBTUMsMEJBQTBCSixrQkFBa0JLLEtBQUssQ0FBQyxHQUFHO0lBQzNEdEIsSUFBSWUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0s7QUFDdkIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xpbmtmcmVlLy4vcGFnZXMvYXBpL2Rpc2NvdmVyL3BvcHVsYXIuanM/NTQzZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29ubmVjdE1vbmdvIGZyb20gXCIuLi8uLi8uLi9jb25maWcvbW9uZ29cIjtcbmltcG9ydCBsb2dnZXIgZnJvbSBcIi4uLy4uLy4uL2NvbmZpZy9sb2dnZXJcIjtcbmltcG9ydCBQcm9maWxlIGZyb20gXCIuLi8uLi8uLi9tb2RlbHMvUHJvZmlsZVwiO1xuaW1wb3J0IGxvYWRQcm9maWxlcyBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvcHJvZmlsZXMvbG9hZFByb2ZpbGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgYXdhaXQgY29ubmVjdE1vbmdvKCk7XG5cbiAgbGV0IHByb2ZpbGVzID0gW107XG4gIHRyeSB7XG4gICAgcHJvZmlsZXMgPSBhd2FpdCBQcm9maWxlLmZpbmQoe1xuICAgICAgdXNlcm5hbWU6IHsgJG5pbjogcHJvY2Vzcy5lbnYuU0hBRE9XQkFOLnNwbGl0KFwiLFwiKSB9LFxuICAgIH0pXG4gICAgICAuc29ydCh7IHZpZXdzOiAtMSB9KVxuICAgICAgLmxpbWl0KDIwKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGxvZ2dlci5lcnJvcihlLCBcImZhaWxlZCB0byBsb2FkIHByb2ZpbGVzXCIpO1xuICB9XG5cbiAgaWYgKHByb2ZpbGVzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNCkuanNvbihbXSk7XG4gIH1cblxuICBjb25zdCBwcm9maWxlc1dpdGhTdGF0cyA9IGF3YWl0IGxvYWRQcm9maWxlcyhcbiAgICBwcm9maWxlcy5tYXAoKHByb2ZpbGUpID0+IHByb2ZpbGUuX2RvYylcbiAgKTtcblxuICBjb25zdCBzZWxlY3RlZFBvcHVsYXJQcm9maWxlcyA9IHByb2ZpbGVzV2l0aFN0YXRzLnNsaWNlKDAsIDUpO1xuICByZXMuc3RhdHVzKDIwMCkuanNvbihzZWxlY3RlZFBvcHVsYXJQcm9maWxlcyk7XG59XG4iXSwibmFtZXMiOlsiY29ubmVjdE1vbmdvIiwibG9nZ2VyIiwiUHJvZmlsZSIsImxvYWRQcm9maWxlcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJwcm9maWxlcyIsImZpbmQiLCJ1c2VybmFtZSIsIiRuaW4iLCJwcm9jZXNzIiwiZW52IiwiU0hBRE9XQkFOIiwic3BsaXQiLCJzb3J0Iiwidmlld3MiLCJsaW1pdCIsImUiLCJlcnJvciIsImxlbmd0aCIsInN0YXR1cyIsImpzb24iLCJwcm9maWxlc1dpdGhTdGF0cyIsIm1hcCIsInByb2ZpbGUiLCJfZG9jIiwic2VsZWN0ZWRQb3B1bGFyUHJvZmlsZXMiLCJzbGljZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/discover/popular.js\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/discover/popular.js"));
module.exports = __webpack_exports__;

})();