"use strict";
(() => {
var exports = {};
exports.id = 5151;
exports.ids = [5151];
exports.modules = {

/***/ 4603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9303);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2898);
/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1908);
/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6420);




const handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()();
handler.use(_utils_auth__WEBPACK_IMPORTED_MODULE_1__/* .isAuth */ .$D, _utils_auth__WEBPACK_IMPORTED_MODULE_1__/* .isAdmin */ .GJ);
handler.get(async (req, res) => {
  await _utils_db__WEBPACK_IMPORTED_MODULE_3__/* .default.connect */ .Z.connect();
  const products = await _models_Product__WEBPACK_IMPORTED_MODULE_2__/* .default.find */ .Z.find({});
  await _utils_db__WEBPACK_IMPORTED_MODULE_3__/* .default.disconnect */ .Z.disconnect();
  res.send(products);
});
handler.post(async (req, res) => {
  await _utils_db__WEBPACK_IMPORTED_MODULE_3__/* .default.connect */ .Z.connect();
  const newProduct = new _models_Product__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z({
    name: 'sample name',
    slug: 'sample-slug-' + Math.random(),
    image: '/images/shirt1.jpg',
    price: 0,
    category: 'sample category',
    brand: 'sample brand',
    countInStock: 0,
    description: 'sample description',
    rating: 0,
    numReviews: 0
  });
  const product = await newProduct.save();
  await _utils_db__WEBPACK_IMPORTED_MODULE_3__/* .default.disconnect */ .Z.disconnect();
  res.send({
    message: 'Product Created',
    product
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);

/***/ }),

/***/ 9722:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

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
var __webpack_exports__ = __webpack_require__.X(0, [6420,2898,1908], () => (__webpack_exec__(4603)));
module.exports = __webpack_exports__;

})();