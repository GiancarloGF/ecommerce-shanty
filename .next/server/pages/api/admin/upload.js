"use strict";
(() => {
var exports = {};
exports.id = 430;
exports.ids = [430];
exports.modules = {

/***/ 9410:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "config": () => (/* binding */ config),
  "default": () => (/* binding */ admin_upload)
});

// EXTERNAL MODULE: external "next-connect"
var external_next_connect_ = __webpack_require__(9303);
var external_next_connect_default = /*#__PURE__*/__webpack_require__.n(external_next_connect_);
// EXTERNAL MODULE: ./utils/auth.js
var auth = __webpack_require__(2898);
// EXTERNAL MODULE: ./utils/error.js
var error = __webpack_require__(9873);
;// CONCATENATED MODULE: external "multer"
const external_multer_namespaceObject = require("multer");
var external_multer_default = /*#__PURE__*/__webpack_require__.n(external_multer_namespaceObject);
;// CONCATENATED MODULE: external "cloudinary"
const external_cloudinary_namespaceObject = require("cloudinary");
;// CONCATENATED MODULE: external "streamifier"
const external_streamifier_namespaceObject = require("streamifier");
var external_streamifier_default = /*#__PURE__*/__webpack_require__.n(external_streamifier_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/admin/upload.js






external_cloudinary_namespaceObject.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});
const config = {
  api: {
    bodyParser: false
  }
};
const handler = external_next_connect_default()({
  onError: error/* onError */.q
});
const upload = external_multer_default()();
handler.use(auth/* isAuth */.$D, auth/* isAdmin */.GJ, upload.single('file'));
handler.post(async (req, res) => {
  const streamUpload = req => {
    return new Promise((resolve, reject) => {
      const stream = external_cloudinary_namespaceObject.v2.uploader.upload_stream((error, result) => {
        if (result) {
          resolve(result);
        } else {
          reject(error);
        }
      });
      external_streamifier_default().createReadStream(req.file.buffer).pipe(stream);
    });
  };

  const result = await streamUpload(req);
  res.send(result);
});
/* harmony default export */ const admin_upload = (handler);

/***/ }),

/***/ 9873:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ getError),
/* harmony export */   "q": () => (/* binding */ onError)
/* harmony export */ });
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6420);


const getError = err => err.response && err.response.data && err.response.data.message ? err.response.data.message : err.message; //To handle erros in middleware in backend.


const onError = async (err, req, res, next) => {
  await _db__WEBPACK_IMPORTED_MODULE_0__/* .default.disconnect */ .Z.disconnect();
  res.status(500).send({
    message: err.toString()
  });
};



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
var __webpack_exports__ = __webpack_require__.X(0, [6420,2898], () => (__webpack_exec__(9410)));
module.exports = __webpack_exports__;

})();