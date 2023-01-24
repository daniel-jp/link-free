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
exports.id = "pages/api/discover/tags";
exports.ids = ["pages/api/discover/tags"];
exports.modules = {

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

/***/ "(api)/./config/logger.js":
/*!**************************!*\
  !*** ./config/logger.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var pino__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pino */ \"pino\");\n/* harmony import */ var pino__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pino__WEBPACK_IMPORTED_MODULE_0__);\n\nconst config = {\n    transport: {\n        target: \"pino-pretty\",\n        options: {\n            colorize: true\n        }\n    }\n};\nconst logger = pino__WEBPACK_IMPORTED_MODULE_0__.pino( true ? config : 0);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (logger);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9jb25maWcvbG9nZ2VyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFtQztBQUVuQyxNQUFNQyxTQUFTO0lBQ2JDLFdBQVc7UUFDVEMsUUFBUTtRQUNSQyxTQUFTO1lBQ1BDLFVBQVUsSUFBSTtRQUNoQjtJQUNGO0FBQ0Y7QUFFQSxNQUFNQyxTQUFTTixzQ0FBZSxDQUM1QlEsS0FBc0MsR0FBR1AsU0FBUyxDQUFFO0FBR3RELGlFQUFlSyxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGlua2ZyZWUvLi9jb25maWcvbG9nZ2VyLmpzP2YxMTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUGlub0xvZ2dlciBmcm9tIFwicGlub1wiO1xuXG5jb25zdCBjb25maWcgPSB7XG4gIHRyYW5zcG9ydDoge1xuICAgIHRhcmdldDogXCJwaW5vLXByZXR0eVwiLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIGNvbG9yaXplOiB0cnVlLFxuICAgIH0sXG4gIH0sXG59O1xuXG5jb25zdCBsb2dnZXIgPSBQaW5vTG9nZ2VyLnBpbm8oXG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgPyBjb25maWcgOiB7fVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgbG9nZ2VyO1xuIl0sIm5hbWVzIjpbIlBpbm9Mb2dnZXIiLCJjb25maWciLCJ0cmFuc3BvcnQiLCJ0YXJnZXQiLCJvcHRpb25zIiwiY29sb3JpemUiLCJsb2dnZXIiLCJwaW5vIiwicHJvY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./config/logger.js\n");

/***/ }),

/***/ "(api)/./pages/api/discover/tags.js":
/*!************************************!*\
  !*** ./pages/api/discover/tags.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _services_profiles_findAllBasic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/profiles/findAllBasic */ \"(api)/./services/profiles/findAllBasic.js\");\n\nasync function handler(req, res) {\n    const profiles = (0,_services_profiles_findAllBasic__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    const tags = profiles.flatMap((profile)=>profile.tags && profile.tags.length ? profile.tags : []);\n    const reducedTags = tags.reduce((allTags, name)=>{\n        const currCount = allTags[name] ?? 0;\n        return {\n            ...allTags,\n            [name]: currCount + 1\n        };\n    }, {});\n    const tagsSorted = Object.entries(reducedTags).map((item)=>({\n            name: item[0],\n            total: item[1]\n        })).sort((a, b)=>b.total - a.total);\n    res.status(200).json(tagsSorted);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZGlzY292ZXIvdGFncy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFtRTtBQUVwRCxlQUFlQyxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxNQUFNQyxXQUFXSiwyRUFBWUE7SUFFN0IsTUFBTUssT0FBT0QsU0FBU0UsT0FBTyxDQUFDLENBQUNDLFVBQzdCQSxRQUFRRixJQUFJLElBQUlFLFFBQVFGLElBQUksQ0FBQ0csTUFBTSxHQUFHRCxRQUFRRixJQUFJLEdBQUcsRUFBRTtJQUd6RCxNQUFNSSxjQUFjSixLQUFLSyxNQUFNLENBQUMsQ0FBQ0MsU0FBU0MsT0FBUztRQUNqRCxNQUFNQyxZQUFZRixPQUFPLENBQUNDLEtBQUssSUFBSTtRQUNuQyxPQUFPO1lBQ0wsR0FBR0QsT0FBTztZQUNWLENBQUNDLEtBQUssRUFBRUMsWUFBWTtRQUN0QjtJQUNGLEdBQUcsQ0FBQztJQUVKLE1BQU1DLGFBQWFDLE9BQU9DLE9BQU8sQ0FBQ1AsYUFDL0JRLEdBQUcsQ0FBQyxDQUFDQyxPQUFVO1lBQ2ROLE1BQU1NLElBQUksQ0FBQyxFQUFFO1lBQ2JDLE9BQU9ELElBQUksQ0FBQyxFQUFFO1FBQ2hCLElBQ0NFLElBQUksQ0FBQyxDQUFDQyxHQUFHQyxJQUFNQSxFQUFFSCxLQUFLLEdBQUdFLEVBQUVGLEtBQUs7SUFFbkNoQixJQUFJb0IsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ1Y7QUFDdkIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xpbmtmcmVlLy4vcGFnZXMvYXBpL2Rpc2NvdmVyL3RhZ3MuanM/OGEzMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmluZEFsbEJhc2ljIGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9wcm9maWxlcy9maW5kQWxsQmFzaWNcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBjb25zdCBwcm9maWxlcyA9IGZpbmRBbGxCYXNpYygpO1xuXG4gIGNvbnN0IHRhZ3MgPSBwcm9maWxlcy5mbGF0TWFwKChwcm9maWxlKSA9PlxuICAgIHByb2ZpbGUudGFncyAmJiBwcm9maWxlLnRhZ3MubGVuZ3RoID8gcHJvZmlsZS50YWdzIDogW11cbiAgKTtcblxuICBjb25zdCByZWR1Y2VkVGFncyA9IHRhZ3MucmVkdWNlKChhbGxUYWdzLCBuYW1lKSA9PiB7XG4gICAgY29uc3QgY3VyckNvdW50ID0gYWxsVGFnc1tuYW1lXSA/PyAwO1xuICAgIHJldHVybiB7XG4gICAgICAuLi5hbGxUYWdzLFxuICAgICAgW25hbWVdOiBjdXJyQ291bnQgKyAxLFxuICAgIH07XG4gIH0sIHt9KTtcblxuICBjb25zdCB0YWdzU29ydGVkID0gT2JqZWN0LmVudHJpZXMocmVkdWNlZFRhZ3MpXG4gICAgLm1hcCgoaXRlbSkgPT4gKHtcbiAgICAgIG5hbWU6IGl0ZW1bMF0sXG4gICAgICB0b3RhbDogaXRlbVsxXSxcbiAgICB9KSlcbiAgICAuc29ydCgoYSwgYikgPT4gYi50b3RhbCAtIGEudG90YWwpO1xuXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHRhZ3NTb3J0ZWQpO1xufVxuIl0sIm5hbWVzIjpbImZpbmRBbGxCYXNpYyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJwcm9maWxlcyIsInRhZ3MiLCJmbGF0TWFwIiwicHJvZmlsZSIsImxlbmd0aCIsInJlZHVjZWRUYWdzIiwicmVkdWNlIiwiYWxsVGFncyIsIm5hbWUiLCJjdXJyQ291bnQiLCJ0YWdzU29ydGVkIiwiT2JqZWN0IiwiZW50cmllcyIsIm1hcCIsIml0ZW0iLCJ0b3RhbCIsInNvcnQiLCJhIiwiYiIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/discover/tags.js\n");

/***/ }),

/***/ "(api)/./services/profiles/findAllBasic.js":
/*!*******************************************!*\
  !*** ./services/profiles/findAllBasic.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ findAllBasic)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config/logger */ \"(api)/./config/logger.js\");\n\n\n\nfunction findAllBasic() {\n    const directoryPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"data\");\n    let files = [];\n    try {\n        files = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(directoryPath).filter((item)=>item.includes(\"json\"));\n    } catch (e) {\n        _config_logger__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error(e, \"failed to list profiles\");\n    }\n    const users = files.flatMap((file)=>{\n        const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(directoryPath, file);\n        try {\n            const json = JSON.parse(fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(filePath, \"utf8\"));\n            return {\n                name: json.name,\n                bio: json.bio,\n                displayStatsPublic: json.displayStatsPublic,\n                avatar: json.avatar,\n                tags: json.tags,\n                username: file.split(\".\")[0]\n            };\n        } catch (e) {\n            _config_logger__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error(e, `failed loading profile in: ${filePath}`);\n            return [];\n        }\n    });\n    return users;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zZXJ2aWNlcy9wcm9maWxlcy9maW5kQWxsQmFzaWMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW9CO0FBQ0k7QUFFaUI7QUFFMUIsU0FBU0csZUFBZTtJQUNuQyxNQUFNQyxnQkFBZ0JILGdEQUFTLENBQUNLLFFBQVFDLEdBQUcsSUFBSTtJQUUvQyxJQUFJQyxRQUFRLEVBQUU7SUFDZCxJQUFJO1FBQ0FBLFFBQVFSLHFEQUNRLENBQUNJLGVBQ1pNLE1BQU0sQ0FBQyxDQUFDQyxPQUFTQSxLQUFLQyxRQUFRLENBQUM7SUFDeEMsRUFBRSxPQUFPQyxHQUFHO1FBQ1JYLDREQUFZLENBQUNXLEdBQUc7SUFDcEI7SUFFQSxNQUFNRSxRQUFRUCxNQUFNUSxPQUFPLENBQUMsQ0FBQ0MsT0FBUztRQUNsQyxNQUFNQyxXQUFXakIsZ0RBQVMsQ0FBQ0csZUFBZWE7UUFDMUMsSUFBSTtZQUNBLE1BQU1FLE9BQU9DLEtBQUtDLEtBQUssQ0FBQ3JCLHNEQUFlLENBQUNrQixVQUFVO1lBQ2xELE9BQU87Z0JBQ0hLLE1BQU1KLEtBQUtJLElBQUk7Z0JBQ2ZDLEtBQUtMLEtBQUtLLEdBQUc7Z0JBQ2JDLG9CQUFvQk4sS0FBS00sa0JBQWtCO2dCQUMzQ0MsUUFBUVAsS0FBS08sTUFBTTtnQkFDbkJDLE1BQU1SLEtBQUtRLElBQUk7Z0JBQ2ZDLFVBQVVYLEtBQUtZLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNoQztRQUNKLEVBQUUsT0FBT2hCLEdBQUc7WUFDUlgsNERBQVksQ0FBQ1csR0FBRyxDQUFDLDJCQUEyQixFQUFFSyxTQUFTLENBQUM7WUFDeEQsT0FBTyxFQUFFO1FBQ2I7SUFDSjtJQUVBLE9BQU9IO0FBQ1gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xpbmtmcmVlLy4vc2VydmljZXMvcHJvZmlsZXMvZmluZEFsbEJhc2ljLmpzPzc0OTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG5pbXBvcnQgbG9nZ2VyIGZyb20gJy4uLy4uL2NvbmZpZy9sb2dnZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaW5kQWxsQmFzaWMoKSB7XG4gICAgY29uc3QgZGlyZWN0b3J5UGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBcImRhdGFcIik7XG5cbiAgICBsZXQgZmlsZXMgPSBbXTtcbiAgICB0cnkge1xuICAgICAgICBmaWxlcyA9IGZzXG4gICAgICAgICAgICAucmVhZGRpclN5bmMoZGlyZWN0b3J5UGF0aClcbiAgICAgICAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaW5jbHVkZXMoXCJqc29uXCIpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGxvZ2dlci5lcnJvcihlLCBcImZhaWxlZCB0byBsaXN0IHByb2ZpbGVzXCIpO1xuICAgIH1cblxuICAgIGNvbnN0IHVzZXJzID0gZmlsZXMuZmxhdE1hcCgoZmlsZSkgPT4ge1xuICAgICAgICBjb25zdCBmaWxlUGF0aCA9IHBhdGguam9pbihkaXJlY3RvcnlQYXRoLCBmaWxlKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhmaWxlUGF0aCwgXCJ1dGY4XCIpKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbmFtZToganNvbi5uYW1lLFxuICAgICAgICAgICAgICAgIGJpbzoganNvbi5iaW8sXG4gICAgICAgICAgICAgICAgZGlzcGxheVN0YXRzUHVibGljOiBqc29uLmRpc3BsYXlTdGF0c1B1YmxpYyxcbiAgICAgICAgICAgICAgICBhdmF0YXI6IGpzb24uYXZhdGFyLFxuICAgICAgICAgICAgICAgIHRhZ3M6IGpzb24udGFncyxcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogZmlsZS5zcGxpdChcIi5cIilbMF0sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBsb2dnZXIuZXJyb3IoZSwgYGZhaWxlZCBsb2FkaW5nIHByb2ZpbGUgaW46ICR7ZmlsZVBhdGh9YCk7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB1c2Vycztcbn0iXSwibmFtZXMiOlsiZnMiLCJwYXRoIiwibG9nZ2VyIiwiZmluZEFsbEJhc2ljIiwiZGlyZWN0b3J5UGF0aCIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwiZmlsZXMiLCJyZWFkZGlyU3luYyIsImZpbHRlciIsIml0ZW0iLCJpbmNsdWRlcyIsImUiLCJlcnJvciIsInVzZXJzIiwiZmxhdE1hcCIsImZpbGUiLCJmaWxlUGF0aCIsImpzb24iLCJKU09OIiwicGFyc2UiLCJyZWFkRmlsZVN5bmMiLCJuYW1lIiwiYmlvIiwiZGlzcGxheVN0YXRzUHVibGljIiwiYXZhdGFyIiwidGFncyIsInVzZXJuYW1lIiwic3BsaXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./services/profiles/findAllBasic.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/discover/tags.js"));
module.exports = __webpack_exports__;

})();