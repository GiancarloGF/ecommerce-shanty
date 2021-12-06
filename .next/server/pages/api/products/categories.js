"use strict";
(() => {
var exports = {};
exports.id = 7093;
exports.ids = [7093];
exports.modules = {

/***/ 133:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9303);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1908);
/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6420);



const handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()();
handler.get(async (req, res) => {
  await _utils_db__WEBPACK_IMPORTED_MODULE_2__/* .default.connect */ .Z.connect();
  const categories = await _models_Product__WEBPACK_IMPORTED_MODULE_1__/* .default.find */ .Z.find().distinct('category');
  await _utils_db__WEBPACK_IMPORTED_MODULE_2__/* .default.disconnect */ .Z.disconnect();
  res.send(categories);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);

/***/ }),

/***/ 5619:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 9303:
/***/ ((module) => {

module.exports = require("next-connect");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6420,1908], () => (__webpack_exec__(133)));
module.exports = __webpack_exports__;

})();