"use strict";
(() => {
var exports = {};
exports.id = "pages/api/admin/upload";
exports.ids = ["pages/api/admin/upload"];
exports.modules = {

/***/ "./pages/api/admin/upload.js":
/*!***********************************!*\
  !*** ./pages/api/admin/upload.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ "next-connect");
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/auth */ "./utils/auth.js");
/* harmony import */ var _utils_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/error */ "./utils/error.js");
/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! multer */ "multer");
/* harmony import */ var multer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(multer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cloudinary */ "cloudinary");
/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cloudinary__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var streamifier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! streamifier */ "streamifier");
/* harmony import */ var streamifier__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(streamifier__WEBPACK_IMPORTED_MODULE_5__);






cloudinary__WEBPACK_IMPORTED_MODULE_4__.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});
const config = {
  api: {
    bodyParser: false
  }
};
const handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()({
  onError: _utils_error__WEBPACK_IMPORTED_MODULE_2__.onError
});
const upload = multer__WEBPACK_IMPORTED_MODULE_3___default()();
handler.use(_utils_auth__WEBPACK_IMPORTED_MODULE_1__.isAuth, _utils_auth__WEBPACK_IMPORTED_MODULE_1__.isAdmin, upload.single('file'));
handler.post(async (req, res) => {
  const streamUpload = req => {
    return new Promise((resolve, reject) => {
      const stream = cloudinary__WEBPACK_IMPORTED_MODULE_4__.v2.uploader.upload_stream((error, result) => {
        if (result) {
          resolve(result);
        } else {
          reject(error);
        }
      });
      streamifier__WEBPACK_IMPORTED_MODULE_5___default().createReadStream(req.file.buffer).pipe(stream);
    });
  };

  const result = await streamUpload(req);
  res.send(result);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);

/***/ }),

/***/ "./utils/auth.js":
/*!***********************!*\
  !*** ./utils/auth.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "signToken": () => (/* binding */ signToken),
/* harmony export */   "isAuth": () => (/* binding */ isAuth),
/* harmony export */   "isAdmin": () => (/* binding */ isAdmin)
/* harmony export */ });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
//For user authentication.


const signToken = user => {
  return jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin
  }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  });
}; //Middleware to validate if user is authenticated by using a token if it is provided on the request.


const isAuth = async (req, res, next) => {
  const {
    authorization
  } = req.headers;

  if (authorization) {
    const token = authorization.slice(7, authorization.length); // Bearer xxx => xxx

    jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        res.status(401).send({
          message: 'Token is not valid'
        });
      } else {
        req.user = decode; // user property is added to req and the decoded data is assign to it.

        next();
      }
    });
  } else {
    res.status(401).send({
      message: 'Token is not suppiled'
    });
  }
};

const isAdmin = async (req, res, next) => {
  if (req.user.isAdmin) {
    next();
  } else {
    res.status(401).send({
      message: 'User is not admin'
    });
  }
};



/***/ }),

/***/ "./utils/db.js":
/*!*********************!*\
  !*** ./utils/db.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
// require('dotenv').config()

const connection = {};

async function connect() {
  if (connection.isConnected) {
    console.log('already connected');
    return;
  }

  if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections.length) > 0) {
    connection.isConnected = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState);

    if (connection.isConnected === 1) {
      console.log('use previous connection');
      return;
    }

    await mongoose__WEBPACK_IMPORTED_MODULE_0___default().disconnect();
  }

  console.log('me conectare');
  await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(db => {
    console.log('new connection');
    connection.isConnected = db.connections[0].readyState;
  });
}

async function disconnect() {
  if (connection.isConnected) {
    if (false) {} else {
      console.log('not disconnected');
    }
  }
} //db returns data in other format that is not a javascript data, so we need to convert that data to string.


function convertDocToObj(doc) {
  doc._id = doc._id.toString();
  doc.createdAt = doc.createdAt.toString();
  doc.updatedAt = doc.updatedAt.toString();
  return doc;
}

const db = {
  connect,
  disconnect,
  convertDocToObj
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db); // 
// const mongoose = require('mongoose')
// const url = process.env.MONGODB_URI
// console.log('connecting to', url)
// mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(result => {
//     console.log('connected to MongoDB')
//   })
//   .catch((error) => {
//     console.log('error connecting to MongoDB:', error.message)
//   })

{
  /*
  (1) connections is an array that contains all previous connections to the database
  
  (2) In production environment, the connection must be disconnected after each resquest to the db.
     But in development environment it's not necessary to disconnect in order to not over charge resources.
  
  */
}

/***/ }),

/***/ "./utils/error.js":
/*!************************!*\
  !*** ./utils/error.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getError": () => (/* binding */ getError),
/* harmony export */   "onError": () => (/* binding */ onError)
/* harmony export */ });
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db */ "./utils/db.js");


const getError = err => err.response && err.response.data && err.response.data.message ? err.response.data.message : err.message; //To handle erros in middleware in backend.


const onError = async (err, req, res, next) => {
  await _db__WEBPACK_IMPORTED_MODULE_0__.default.disconnect();
  res.status(500).send({
    message: err.toString()
  });
};



/***/ }),

/***/ "cloudinary":
/*!*****************************!*\
  !*** external "cloudinary" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("cloudinary");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("multer");

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("next-connect");

/***/ }),

/***/ "streamifier":
/*!******************************!*\
  !*** external "streamifier" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("streamifier");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/admin/upload.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvYXBpL2FkbWluL3VwbG9hZC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFNLGlEQUFBLENBQWtCO0FBQ2RHLEVBQUFBLFVBQVUsRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLHFCQURWO0FBRWRDLEVBQUFBLE9BQU8sRUFBRUgsT0FBTyxDQUFDQyxHQUFSLENBQVlHLGtCQUZQO0FBR2RDLEVBQUFBLFVBQVUsRUFBRUwsT0FBTyxDQUFDQyxHQUFSLENBQVlLO0FBSFYsQ0FBbEI7QUFNTyxNQUFNUixNQUFNLEdBQUc7QUFDbEJTLEVBQUFBLEdBQUcsRUFBRTtBQUNEQyxJQUFBQSxVQUFVLEVBQUU7QUFEWDtBQURhLENBQWY7QUFNUCxNQUFNQyxPQUFPLEdBQUduQixtREFBVyxDQUFDO0FBQUVHLEVBQUFBLE9BQU9BLG1EQUFBQTtBQUFULENBQUQsQ0FBM0I7QUFDQSxNQUFNaUIsTUFBTSxHQUFHaEIsNkNBQU0sRUFBckI7QUFFQWUsT0FBTyxDQUFDRSxHQUFSLENBQVlwQiwrQ0FBWixFQUFvQkMsZ0RBQXBCLEVBQTZCa0IsTUFBTSxDQUFDRSxNQUFQLENBQWMsTUFBZCxDQUE3QjtBQUNBSCxPQUFPLENBQUNJLElBQVIsQ0FBYSxPQUFPQyxHQUFQLEVBQVlDLEdBQVosS0FBb0I7QUFDN0IsUUFBTUMsWUFBWSxHQUFJRixHQUFELElBQVM7QUFDMUIsV0FBTyxJQUFJRyxPQUFKLENBQVksQ0FBQ0MsT0FBRCxFQUFVQyxNQUFWLEtBQXFCO0FBQ3BDLFlBQU1DLE1BQU0sR0FBR3hCLGlFQUFBLENBQWtDLENBQUMyQixLQUFELEVBQVFDLE1BQVIsS0FBbUI7QUFDaEUsWUFBSUEsTUFBSixFQUFZO0FBQ1JOLFVBQUFBLE9BQU8sQ0FBQ00sTUFBRCxDQUFQO0FBQ0gsU0FGRCxNQUVPO0FBQ0hMLFVBQUFBLE1BQU0sQ0FBQ0ksS0FBRCxDQUFOO0FBQ0g7QUFDSixPQU5jLENBQWY7QUFPQTFCLE1BQUFBLG1FQUFBLENBQTZCaUIsR0FBRyxDQUFDWSxJQUFKLENBQVNDLE1BQXRDLEVBQThDQyxJQUE5QyxDQUFtRFIsTUFBbkQ7QUFDSCxLQVRNLENBQVA7QUFVSCxHQVhEOztBQVlBLFFBQU1JLE1BQU0sR0FBRyxNQUFNUixZQUFZLENBQUNGLEdBQUQsQ0FBakM7QUFDQUMsRUFBQUEsR0FBRyxDQUFDYyxJQUFKLENBQVNMLE1BQVQ7QUFDSCxDQWZEO0FBaUJBLGlFQUFlZixPQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7QUFFQTs7QUFFQSxNQUFNc0IsU0FBUyxHQUFJQyxJQUFELElBQVU7QUFDMUIsU0FBT0Ysd0RBQUEsQ0FDTDtBQUNFSSxJQUFBQSxHQUFHLEVBQUVGLElBQUksQ0FBQ0UsR0FEWjtBQUVFQyxJQUFBQSxJQUFJLEVBQUVILElBQUksQ0FBQ0csSUFGYjtBQUdFQyxJQUFBQSxLQUFLLEVBQUVKLElBQUksQ0FBQ0ksS0FIZDtBQUlFNUMsSUFBQUEsT0FBTyxFQUFFd0MsSUFBSSxDQUFDeEM7QUFKaEIsR0FESyxFQVFMUSxPQUFPLENBQUNDLEdBQVIsQ0FBWW9DLFVBUlAsRUFTTDtBQUNFQyxJQUFBQSxTQUFTLEVBQUU7QUFEYixHQVRLLENBQVA7QUFhRCxDQWRELEVBZ0JBOzs7QUFDQSxNQUFNL0MsTUFBTSxHQUFHLE9BQU91QixHQUFQLEVBQVlDLEdBQVosRUFBaUJ3QixJQUFqQixLQUEwQjtBQUN2QyxRQUFNO0FBQUVDLElBQUFBO0FBQUYsTUFBb0IxQixHQUFHLENBQUMyQixPQUE5Qjs7QUFDQSxNQUFJRCxhQUFKLEVBQW1CO0FBQ2pCLFVBQU1FLEtBQUssR0FBR0YsYUFBYSxDQUFDRyxLQUFkLENBQW9CLENBQXBCLEVBQXVCSCxhQUFhLENBQUNJLE1BQXJDLENBQWQsQ0FEaUIsQ0FDMEM7O0FBQzNEZCxJQUFBQSwwREFBQSxDQUFXWSxLQUFYLEVBQWtCMUMsT0FBTyxDQUFDQyxHQUFSLENBQVlvQyxVQUE5QixFQUEwQyxDQUFDUyxHQUFELEVBQU1DLE1BQU4sS0FBaUI7QUFDekQsVUFBSUQsR0FBSixFQUFTO0FBQ1AvQixRQUFBQSxHQUFHLENBQUNpQyxNQUFKLENBQVcsR0FBWCxFQUFnQm5CLElBQWhCLENBQXFCO0FBQUVvQixVQUFBQSxPQUFPLEVBQUU7QUFBWCxTQUFyQjtBQUNELE9BRkQsTUFFTztBQUNMbkMsUUFBQUEsR0FBRyxDQUFDa0IsSUFBSixHQUFXZSxNQUFYLENBREssQ0FDYzs7QUFDbkJSLFFBQUFBLElBQUk7QUFDTDtBQUNGLEtBUEQ7QUFTRCxHQVhELE1BV087QUFDTHhCLElBQUFBLEdBQUcsQ0FBQ2lDLE1BQUosQ0FBVyxHQUFYLEVBQWdCbkIsSUFBaEIsQ0FBcUI7QUFBRW9CLE1BQUFBLE9BQU8sRUFBRTtBQUFYLEtBQXJCO0FBQ0Q7QUFDRixDQWhCRDs7QUFrQkEsTUFBTXpELE9BQU8sR0FBRyxPQUFPc0IsR0FBUCxFQUFZQyxHQUFaLEVBQWlCd0IsSUFBakIsS0FBMEI7QUFDeEMsTUFBSXpCLEdBQUcsQ0FBQ2tCLElBQUosQ0FBU3hDLE9BQWIsRUFBc0I7QUFDcEIrQyxJQUFBQSxJQUFJO0FBQ0wsR0FGRCxNQUVPO0FBQ0x4QixJQUFBQSxHQUFHLENBQUNpQyxNQUFKLENBQVcsR0FBWCxFQUFnQm5CLElBQWhCLENBQXFCO0FBQUVvQixNQUFBQSxPQUFPLEVBQUU7QUFBWCxLQUFyQjtBQUNEO0FBQ0YsQ0FORDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQ0E7QUFFQSxNQUFNRSxVQUFVLEdBQUcsRUFBbkI7O0FBRUEsZUFBZUMsT0FBZixHQUF5QjtBQUN2QixNQUFJRCxVQUFVLENBQUNFLFdBQWYsRUFBNEI7QUFDMUJDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaO0FBQ0E7QUFDRDs7QUFDRCxNQUFJTCxvRUFBQSxHQUE4QixDQUFsQyxFQUFxQztBQUNuQ0MsSUFBQUEsVUFBVSxDQUFDRSxXQUFYLEdBQXlCSCwyRUFBekI7O0FBQ0EsUUFBSUMsVUFBVSxDQUFDRSxXQUFYLEtBQTJCLENBQS9CLEVBQWtDO0FBQ2hDQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx5QkFBWjtBQUNBO0FBQ0Q7O0FBQ0QsVUFBTUwsMERBQUEsRUFBTjtBQUNEOztBQUNESSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaO0FBQ0EsUUFBTUwsdURBQUEsQ0FBaUJsRCxPQUFPLENBQUNDLEdBQVIsQ0FBWTBELFdBQTdCLEVBQTBDO0FBQzlDQyxJQUFBQSxlQUFlLEVBQUUsSUFENkI7QUFFOUNDLElBQUFBLGtCQUFrQixFQUFFO0FBRjBCLEdBQTFDLEVBR0hDLElBSEcsQ0FHR0MsRUFBRCxJQUFNO0FBQ1pULElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaO0FBQ0FKLElBQUFBLFVBQVUsQ0FBQ0UsV0FBWCxHQUF5QlUsRUFBRSxDQUFDUCxXQUFILENBQWUsQ0FBZixFQUFrQkMsVUFBM0M7QUFDRCxHQU5LLENBQU47QUFRRDs7QUFFRCxlQUFlQyxVQUFmLEdBQTRCO0FBQzFCLE1BQUlQLFVBQVUsQ0FBQ0UsV0FBZixFQUE0QjtBQUMxQixlQUEyQyxFQUEzQyxNQUdPO0FBQ0xDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaO0FBQ0Q7QUFDRjtBQUNGLEVBRUQ7OztBQUNBLFNBQVNTLGVBQVQsQ0FBeUJDLEdBQXpCLEVBQThCO0FBQzVCQSxFQUFBQSxHQUFHLENBQUMvQixHQUFKLEdBQVUrQixHQUFHLENBQUMvQixHQUFKLENBQVFnQyxRQUFSLEVBQVY7QUFDQUQsRUFBQUEsR0FBRyxDQUFDRSxTQUFKLEdBQWdCRixHQUFHLENBQUNFLFNBQUosQ0FBY0QsUUFBZCxFQUFoQjtBQUNBRCxFQUFBQSxHQUFHLENBQUNHLFNBQUosR0FBZ0JILEdBQUcsQ0FBQ0csU0FBSixDQUFjRixRQUFkLEVBQWhCO0FBQ0EsU0FBT0QsR0FBUDtBQUNEOztBQUVELE1BQU1GLEVBQUUsR0FBRztBQUFFWCxFQUFBQSxPQUFGO0FBQVdNLEVBQUFBLFVBQVg7QUFBdUJNLEVBQUFBO0FBQXZCLENBQVg7QUFFQSxpRUFBZUQsRUFBZixHQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUE7QUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFHOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUVIOztBQUVBLE1BQU1NLFFBQVEsR0FBSXZCLEdBQUQsSUFDZkEsR0FBRyxDQUFDd0IsUUFBSixJQUFnQnhCLEdBQUcsQ0FBQ3dCLFFBQUosQ0FBYUMsSUFBN0IsSUFBcUN6QixHQUFHLENBQUN3QixRQUFKLENBQWFDLElBQWIsQ0FBa0J0QixPQUF2RCxHQUNJSCxHQUFHLENBQUN3QixRQUFKLENBQWFDLElBQWIsQ0FBa0J0QixPQUR0QixHQUVJSCxHQUFHLENBQUNHLE9BSFYsRUFNQTs7O0FBQ0EsTUFBTXhELE9BQU8sR0FBRyxPQUFPcUQsR0FBUCxFQUFZaEMsR0FBWixFQUFpQkMsR0FBakIsRUFBc0J3QixJQUF0QixLQUErQjtBQUM3QyxRQUFNd0IsbURBQUEsRUFBTjtBQUNBaEQsRUFBQUEsR0FBRyxDQUFDaUMsTUFBSixDQUFXLEdBQVgsRUFBZ0JuQixJQUFoQixDQUFxQjtBQUFFb0IsSUFBQUEsT0FBTyxFQUFFSCxHQUFHLENBQUNvQixRQUFKO0FBQVgsR0FBckI7QUFDRCxDQUhEOzs7Ozs7Ozs7Ozs7QUNWQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tLW5leHRqcy8uL3BhZ2VzL2FwaS9hZG1pbi91cGxvYWQuanMiLCJ3ZWJwYWNrOi8vZWNvbS1uZXh0anMvLi91dGlscy9hdXRoLmpzIiwid2VicGFjazovL2Vjb20tbmV4dGpzLy4vdXRpbHMvZGIuanMiLCJ3ZWJwYWNrOi8vZWNvbS1uZXh0anMvLi91dGlscy9lcnJvci5qcyIsIndlYnBhY2s6Ly9lY29tLW5leHRqcy9leHRlcm5hbCBcImNsb3VkaW5hcnlcIiIsIndlYnBhY2s6Ly9lY29tLW5leHRqcy9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovL2Vjb20tbmV4dGpzL2V4dGVybmFsIFwibW9uZ29vc2VcIiIsIndlYnBhY2s6Ly9lY29tLW5leHRqcy9leHRlcm5hbCBcIm11bHRlclwiIiwid2VicGFjazovL2Vjb20tbmV4dGpzL2V4dGVybmFsIFwibmV4dC1jb25uZWN0XCIiLCJ3ZWJwYWNrOi8vZWNvbS1uZXh0anMvZXh0ZXJuYWwgXCJzdHJlYW1pZmllclwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBuZXh0Q29ubmVjdCBmcm9tICduZXh0LWNvbm5lY3QnO1xyXG5pbXBvcnQgeyBpc0F1dGgsIGlzQWRtaW4gfSBmcm9tICcuLi8uLi8uLi91dGlscy9hdXRoJztcclxuaW1wb3J0IHsgb25FcnJvciB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2Vycm9yJztcclxuaW1wb3J0IG11bHRlciBmcm9tICdtdWx0ZXInO1xyXG5pbXBvcnQgeyB2MiBhcyBjbG91ZGluYXJ5IH0gZnJvbSAnY2xvdWRpbmFyeSc7XHJcbmltcG9ydCBzdHJlYW1pZmllciBmcm9tICdzdHJlYW1pZmllcic7XHJcblxyXG5jbG91ZGluYXJ5LmNvbmZpZyh7XHJcbiAgICBjbG91ZF9uYW1lOiBwcm9jZXNzLmVudi5DTE9VRElOQVJZX0NMT1VEX05BTUUsXHJcbiAgICBhcGlfa2V5OiBwcm9jZXNzLmVudi5DTE9VRElOQVJZX0FQSV9LRVksXHJcbiAgICBhcGlfc2VjcmV0OiBwcm9jZXNzLmVudi5DTE9VRElOQVJZX0FQSV9TRUNSRVQsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcclxuICAgIGFwaToge1xyXG4gICAgICAgIGJvZHlQYXJzZXI6IGZhbHNlLFxyXG4gICAgfSxcclxufTtcclxuXHJcbmNvbnN0IGhhbmRsZXIgPSBuZXh0Q29ubmVjdCh7IG9uRXJyb3IgfSk7XHJcbmNvbnN0IHVwbG9hZCA9IG11bHRlcigpO1xyXG5cclxuaGFuZGxlci51c2UoaXNBdXRoLCBpc0FkbWluLCB1cGxvYWQuc2luZ2xlKCdmaWxlJykpO1xyXG5oYW5kbGVyLnBvc3QoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgICBjb25zdCBzdHJlYW1VcGxvYWQgPSAocmVxKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3RyZWFtID0gY2xvdWRpbmFyeS51cGxvYWRlci51cGxvYWRfc3RyZWFtKChlcnJvciwgcmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc3RyZWFtaWZpZXIuY3JlYXRlUmVhZFN0cmVhbShyZXEuZmlsZS5idWZmZXIpLnBpcGUoc3RyZWFtKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzdHJlYW1VcGxvYWQocmVxKTtcclxuICAgIHJlcy5zZW5kKHJlc3VsdCk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjsiLCIvL0ZvciB1c2VyIGF1dGhlbnRpY2F0aW9uLlxyXG5cclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xyXG5cclxuY29uc3Qgc2lnblRva2VuID0gKHVzZXIpID0+IHtcclxuICByZXR1cm4gand0LnNpZ24oXHJcbiAgICB7XHJcbiAgICAgIF9pZDogdXNlci5faWQsXHJcbiAgICAgIG5hbWU6IHVzZXIubmFtZSxcclxuICAgICAgZW1haWw6IHVzZXIuZW1haWwsXHJcbiAgICAgIGlzQWRtaW46IHVzZXIuaXNBZG1pbixcclxuICAgIH0sXHJcblxyXG4gICAgcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCxcclxuICAgIHtcclxuICAgICAgZXhwaXJlc0luOiAnMzBkJyxcclxuICAgIH1cclxuICApO1xyXG59O1xyXG5cclxuLy9NaWRkbGV3YXJlIHRvIHZhbGlkYXRlIGlmIHVzZXIgaXMgYXV0aGVudGljYXRlZCBieSB1c2luZyBhIHRva2VuIGlmIGl0IGlzIHByb3ZpZGVkIG9uIHRoZSByZXF1ZXN0LlxyXG5jb25zdCBpc0F1dGggPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcclxuICBjb25zdCB7IGF1dGhvcml6YXRpb24gfSA9IHJlcS5oZWFkZXJzO1xyXG4gIGlmIChhdXRob3JpemF0aW9uKSB7XHJcbiAgICBjb25zdCB0b2tlbiA9IGF1dGhvcml6YXRpb24uc2xpY2UoNywgYXV0aG9yaXphdGlvbi5sZW5ndGgpOy8vIEJlYXJlciB4eHggPT4geHh4XHJcbiAgICBqd3QudmVyaWZ5KHRva2VuLCBwcm9jZXNzLmVudi5KV1RfU0VDUkVULCAoZXJyLCBkZWNvZGUpID0+IHtcclxuICAgICAgaWYgKGVycikge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAxKS5zZW5kKHsgbWVzc2FnZTogJ1Rva2VuIGlzIG5vdCB2YWxpZCcgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVxLnVzZXIgPSBkZWNvZGU7IC8vIHVzZXIgcHJvcGVydHkgaXMgYWRkZWQgdG8gcmVxIGFuZCB0aGUgZGVjb2RlZCBkYXRhIGlzIGFzc2lnbiB0byBpdC5cclxuICAgICAgICBuZXh0KCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICB9IGVsc2Uge1xyXG4gICAgcmVzLnN0YXR1cyg0MDEpLnNlbmQoeyBtZXNzYWdlOiAnVG9rZW4gaXMgbm90IHN1cHBpbGVkJyB9KTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBpc0FkbWluID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgaWYgKHJlcS51c2VyLmlzQWRtaW4pIHtcclxuICAgIG5leHQoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmVzLnN0YXR1cyg0MDEpLnNlbmQoeyBtZXNzYWdlOiAnVXNlciBpcyBub3QgYWRtaW4nIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCB7IHNpZ25Ub2tlbiwgaXNBdXRoLCBpc0FkbWluIH07IiwiLy8gcmVxdWlyZSgnZG90ZW52JykuY29uZmlnKClcclxuaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuXHJcbmNvbnN0IGNvbm5lY3Rpb24gPSB7fTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGNvbm5lY3QoKSB7XHJcbiAgaWYgKGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQpIHtcclxuICAgIGNvbnNvbGUubG9nKCdhbHJlYWR5IGNvbm5lY3RlZCcpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBpZiAobW9uZ29vc2UuY29ubmVjdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCA9IG1vbmdvb3NlLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGU7XHJcbiAgICBpZiAoY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCA9PT0gMSkge1xyXG4gICAgICBjb25zb2xlLmxvZygndXNlIHByZXZpb3VzIGNvbm5lY3Rpb24nKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgYXdhaXQgbW9uZ29vc2UuZGlzY29ubmVjdCgpO1xyXG4gIH1cclxuICBjb25zb2xlLmxvZygnbWUgY29uZWN0YXJlJylcclxuICBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJLCB7XHJcbiAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbiAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWVcclxuICB9KS50aGVuKChkYik9PntcclxuICAgIGNvbnNvbGUubG9nKCduZXcgY29ubmVjdGlvbicpO1xyXG4gICAgY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCA9IGRiLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGU7XHJcbiAgfSlcclxuXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGRpc2Nvbm5lY3QoKSB7XHJcbiAgaWYgKGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQpIHtcclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgIGF3YWl0IG1vbmdvb3NlLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coJ25vdCBkaXNjb25uZWN0ZWQnKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vZGIgcmV0dXJucyBkYXRhIGluIG90aGVyIGZvcm1hdCB0aGF0IGlzIG5vdCBhIGphdmFzY3JpcHQgZGF0YSwgc28gd2UgbmVlZCB0byBjb252ZXJ0IHRoYXQgZGF0YSB0byBzdHJpbmcuXHJcbmZ1bmN0aW9uIGNvbnZlcnREb2NUb09iaihkb2MpIHtcclxuICBkb2MuX2lkID0gZG9jLl9pZC50b1N0cmluZygpO1xyXG4gIGRvYy5jcmVhdGVkQXQgPSBkb2MuY3JlYXRlZEF0LnRvU3RyaW5nKCk7XHJcbiAgZG9jLnVwZGF0ZWRBdCA9IGRvYy51cGRhdGVkQXQudG9TdHJpbmcoKTtcclxuICByZXR1cm4gZG9jO1xyXG59XHJcblxyXG5jb25zdCBkYiA9IHsgY29ubmVjdCwgZGlzY29ubmVjdCwgY29udmVydERvY1RvT2JqIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYjtcclxuXHJcbi8vIFxyXG4vLyBjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJylcclxuXHJcbi8vIGNvbnN0IHVybCA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJXHJcblxyXG4vLyBjb25zb2xlLmxvZygnY29ubmVjdGluZyB0bycsIHVybClcclxuXHJcbi8vIG1vbmdvb3NlLmNvbm5lY3QodXJsLCB7IHVzZU5ld1VybFBhcnNlcjogdHJ1ZSwgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlIH0pXHJcbi8vICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuLy8gICAgIGNvbnNvbGUubG9nKCdjb25uZWN0ZWQgdG8gTW9uZ29EQicpXHJcbi8vICAgfSlcclxuLy8gICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbi8vICAgICBjb25zb2xlLmxvZygnZXJyb3IgY29ubmVjdGluZyB0byBNb25nb0RCOicsIGVycm9yLm1lc3NhZ2UpXHJcbi8vICAgfSlcclxuICBcclxuXHJcblxyXG57LypcclxuKDEpIGNvbm5lY3Rpb25zIGlzIGFuIGFycmF5IHRoYXQgY29udGFpbnMgYWxsIHByZXZpb3VzIGNvbm5lY3Rpb25zIHRvIHRoZSBkYXRhYmFzZVxyXG5cclxuKDIpIEluIHByb2R1Y3Rpb24gZW52aXJvbm1lbnQsIHRoZSBjb25uZWN0aW9uIG11c3QgYmUgZGlzY29ubmVjdGVkIGFmdGVyIGVhY2ggcmVzcXVlc3QgdG8gdGhlIGRiLlxyXG4gICAgQnV0IGluIGRldmVsb3BtZW50IGVudmlyb25tZW50IGl0J3Mgbm90IG5lY2Vzc2FyeSB0byBkaXNjb25uZWN0IGluIG9yZGVyIHRvIG5vdCBvdmVyIGNoYXJnZSByZXNvdXJjZXMuXHJcblxyXG4qL30iLCJcclxuaW1wb3J0IGRiIGZyb20gJy4vZGInO1xyXG5cclxuY29uc3QgZ2V0RXJyb3IgPSAoZXJyKSA9PlxyXG4gIGVyci5yZXNwb25zZSAmJiBlcnIucmVzcG9uc2UuZGF0YSAmJiBlcnIucmVzcG9uc2UuZGF0YS5tZXNzYWdlXHJcbiAgICA/IGVyci5yZXNwb25zZS5kYXRhLm1lc3NhZ2VcclxuICAgIDogZXJyLm1lc3NhZ2U7XHJcblxyXG5cclxuLy9UbyBoYW5kbGUgZXJyb3MgaW4gbWlkZGxld2FyZSBpbiBiYWNrZW5kLlxyXG5jb25zdCBvbkVycm9yID0gYXN5bmMgKGVyciwgcmVxLCByZXMsIG5leHQpID0+IHtcclxuICBhd2FpdCBkYi5kaXNjb25uZWN0KCk7XHJcbiAgcmVzLnN0YXR1cyg1MDApLnNlbmQoeyBtZXNzYWdlOiBlcnIudG9TdHJpbmcoKSB9KTtcclxufTtcclxuXHJcbmV4cG9ydCB7IGdldEVycm9yLCBvbkVycm9yIH07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xvdWRpbmFyeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibXVsdGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtY29ubmVjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHJlYW1pZmllclwiKTsiXSwibmFtZXMiOlsibmV4dENvbm5lY3QiLCJpc0F1dGgiLCJpc0FkbWluIiwib25FcnJvciIsIm11bHRlciIsInYyIiwiY2xvdWRpbmFyeSIsInN0cmVhbWlmaWVyIiwiY29uZmlnIiwiY2xvdWRfbmFtZSIsInByb2Nlc3MiLCJlbnYiLCJDTE9VRElOQVJZX0NMT1VEX05BTUUiLCJhcGlfa2V5IiwiQ0xPVURJTkFSWV9BUElfS0VZIiwiYXBpX3NlY3JldCIsIkNMT1VESU5BUllfQVBJX1NFQ1JFVCIsImFwaSIsImJvZHlQYXJzZXIiLCJoYW5kbGVyIiwidXBsb2FkIiwidXNlIiwic2luZ2xlIiwicG9zdCIsInJlcSIsInJlcyIsInN0cmVhbVVwbG9hZCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic3RyZWFtIiwidXBsb2FkZXIiLCJ1cGxvYWRfc3RyZWFtIiwiZXJyb3IiLCJyZXN1bHQiLCJjcmVhdGVSZWFkU3RyZWFtIiwiZmlsZSIsImJ1ZmZlciIsInBpcGUiLCJzZW5kIiwiand0Iiwic2lnblRva2VuIiwidXNlciIsInNpZ24iLCJfaWQiLCJuYW1lIiwiZW1haWwiLCJKV1RfU0VDUkVUIiwiZXhwaXJlc0luIiwibmV4dCIsImF1dGhvcml6YXRpb24iLCJoZWFkZXJzIiwidG9rZW4iLCJzbGljZSIsImxlbmd0aCIsInZlcmlmeSIsImVyciIsImRlY29kZSIsInN0YXR1cyIsIm1lc3NhZ2UiLCJtb25nb29zZSIsImNvbm5lY3Rpb24iLCJjb25uZWN0IiwiaXNDb25uZWN0ZWQiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIiwiZGlzY29ubmVjdCIsIk1PTkdPREJfVVJJIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwidGhlbiIsImRiIiwiY29udmVydERvY1RvT2JqIiwiZG9jIiwidG9TdHJpbmciLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJnZXRFcnJvciIsInJlc3BvbnNlIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=