"use strict";
(() => {
var exports = {};
exports.id = 4373;
exports.ids = [4373];
exports.modules = {

/***/ 8964:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9303);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2898);
/* harmony import */ var models_Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1908);
/* harmony import */ var utils_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6420);




const handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()();
handler.use(utils_auth__WEBPACK_IMPORTED_MODULE_1__/* .isAuth */ .$D, utils_auth__WEBPACK_IMPORTED_MODULE_1__/* .isAdmin */ .GJ);
handler.get(async (req, res) => {
  await utils_db__WEBPACK_IMPORTED_MODULE_3__/* .default.connect */ .Z.connect();
  const product = await models_Product__WEBPACK_IMPORTED_MODULE_2__/* .default.findById */ .Z.findById(req.query.id);
  await utils_db__WEBPACK_IMPORTED_MODULE_3__/* .default.disconnect */ .Z.disconnect();
  res.send(product);
});
handler.put(async (req, res) => {
  await utils_db__WEBPACK_IMPORTED_MODULE_3__/* .default.connect */ .Z.connect();
  const product = await models_Product__WEBPACK_IMPORTED_MODULE_2__/* .default.findById */ .Z.findById(req.query.id);

  if (product) {
    product.name = req.body.name;
    product.slug = req.body.slug;
    product.price = req.body.price;
    product.category = req.body.category;
    product.image = req.body.image;
    product.featuredImage = req.body.featuredImage;
    product.isFeatured = req.body.isFeatured;
    product.brand = req.body.brand;
    product.countInStock = req.body.countInStock;
    product.description = req.body.description;
    await product.save();
    await utils_db__WEBPACK_IMPORTED_MODULE_3__/* .default.disconnect */ .Z.disconnect();
    res.send({
      message: "Product Updated Successfully"
    });
  } else {
    await utils_db__WEBPACK_IMPORTED_MODULE_3__/* .default.disconnect */ .Z.disconnect();
    res.status(404).send({
      message: "Product Not Found"
    });
  }
});
handler.delete(async (req, res) => {
  await utils_db__WEBPACK_IMPORTED_MODULE_3__/* .default.connect */ .Z.connect();
  const product = await models_Product__WEBPACK_IMPORTED_MODULE_2__/* .default.findById */ .Z.findById(req.query.id);

  if (product) {
    await product.remove();
    await utils_db__WEBPACK_IMPORTED_MODULE_3__/* .default.disconnect */ .Z.disconnect();
    res.send({
      message: 'Product Deleted'
    });
  } else {
    await utils_db__WEBPACK_IMPORTED_MODULE_3__/* .default.disconnect */ .Z.disconnect();
    res.status(404).send({
      message: 'Product Not Found'
    });
  }
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
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [6420,2898,1908], () => (__webpack_exec__(8964)));
module.exports = __webpack_exports__;

})();