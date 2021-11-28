"use strict";
(() => {
var exports = {};
exports.id = "pages/api/admin/products";
exports.ids = ["pages/api/admin/products"];
exports.modules = {

/***/ "./models/Product.js":
/*!***************************!*\
  !*** ./models/Product.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const productSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
  name: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  category: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    default: 0
  },
  numReviews: {
    type: Number,
    required: true,
    default: 0
  },
  countInStock: {
    type: Number,
    required: true,
    default: 0
  },
  description: {
    type: String,
    required: true
  }
}, {
  timestamps: true
}); // productSchema.set('toJSON', {
//   transform: (document, returnedObject) => {
//     returnedObject.id = returnedObject._id.toString()
//     delete returnedObject._id
//     delete returnedObject.__v
//   }
// })

const Product = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Product) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Product', productSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product); // If it does exist, set its value en Product, otherwise create a new model.
//To store the date when a product is created.

/***/ }),

/***/ "./pages/api/admin/products.js":
/*!*************************************!*\
  !*** ./pages/api/admin/products.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ "next-connect");
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var models_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! models/Product */ "./models/Product.js");
/* harmony import */ var utils_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/auth */ "./utils/auth.js");
/* harmony import */ var utils_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/db */ "./utils/db.js");
/* harmony import */ var utils_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/error */ "./utils/error.js");





const handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()({
  onError: utils_error__WEBPACK_IMPORTED_MODULE_4__.onError
});
handler.use(utils_auth__WEBPACK_IMPORTED_MODULE_2__.isAuth, utils_auth__WEBPACK_IMPORTED_MODULE_2__.isAdmin);
handler.get(async (req, res) => {
  await utils_db__WEBPACK_IMPORTED_MODULE_3__.default.connect();
  const products = await models_Product__WEBPACK_IMPORTED_MODULE_1__.default.find({});
  await utils_db__WEBPACK_IMPORTED_MODULE_3__.default.disconnect();
  res.send(products);
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

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("next-connect");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/admin/products.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NEIsR0FBUCxFQUFZeEIsR0FBWixFQUFpQkMsR0FBakIsRUFBc0JnQixJQUF0QixLQUErQjtBQUM3QyxRQUFNdEIsbURBQUEsRUFBTjtBQUNBTSxFQUFBQSxHQUFHLENBQUN5QixNQUFKLENBQVcsR0FBWCxFQUFnQnBCLElBQWhCLENBQXFCO0FBQUVxQixJQUFBQSxPQUFPLEVBQUVILEdBQUcsQ0FBQ2dCLFFBQUo7QUFBWCxHQUFyQjtBQUNELENBSEQ7Ozs7Ozs7Ozs7OztBQ1ZBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb20tbmV4dGpzLy4vbW9kZWxzL1Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vZWNvbS1uZXh0anMvLi9wYWdlcy9hcGkvYWRtaW4vcHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vZWNvbS1uZXh0anMvLi91dGlscy9hdXRoLmpzIiwid2VicGFjazovL2Vjb20tbmV4dGpzLy4vdXRpbHMvZGIuanMiLCJ3ZWJwYWNrOi8vZWNvbS1uZXh0anMvLi91dGlscy9lcnJvci5qcyIsIndlYnBhY2s6Ly9lY29tLW5leHRqcy9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovL2Vjb20tbmV4dGpzL2V4dGVybmFsIFwibW9uZ29vc2VcIiIsIndlYnBhY2s6Ly9lY29tLW5leHRqcy9leHRlcm5hbCBcIm5leHQtY29ubmVjdFwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCBwcm9kdWN0U2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcclxuICB7XHJcbiAgICBuYW1lOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIHNsdWc6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgdW5pcXVlOiB0cnVlIH0sXHJcbiAgICBjYXRlZ29yeTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBpbWFnZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBwcmljZTogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBicmFuZDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICByYXRpbmc6IHsgdHlwZTogTnVtYmVyLCByZXF1aXJlZDogdHJ1ZSwgZGVmYXVsdDogMCB9LFxyXG4gICAgbnVtUmV2aWV3czogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlLCBkZWZhdWx0OiAwIH0sXHJcbiAgICBjb3VudEluU3RvY2s6IHsgdHlwZTogTnVtYmVyLCByZXF1aXJlZDogdHJ1ZSwgZGVmYXVsdDogMCB9LFxyXG4gICAgZGVzY3JpcHRpb246IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGltZXN0YW1wczogdHJ1ZSxcclxuICB9XHJcbik7XHJcblxyXG4vLyBwcm9kdWN0U2NoZW1hLnNldCgndG9KU09OJywge1xyXG4vLyAgIHRyYW5zZm9ybTogKGRvY3VtZW50LCByZXR1cm5lZE9iamVjdCkgPT4ge1xyXG4vLyAgICAgcmV0dXJuZWRPYmplY3QuaWQgPSByZXR1cm5lZE9iamVjdC5faWQudG9TdHJpbmcoKVxyXG4vLyAgICAgZGVsZXRlIHJldHVybmVkT2JqZWN0Ll9pZFxyXG4vLyAgICAgZGVsZXRlIHJldHVybmVkT2JqZWN0Ll9fdlxyXG4vLyAgIH1cclxuLy8gfSlcclxuXHJcbmNvbnN0IFByb2R1Y3QgPVxyXG4gIG1vbmdvb3NlLm1vZGVscy5Qcm9kdWN0IHx8IG1vbmdvb3NlLm1vZGVsKCdQcm9kdWN0JywgcHJvZHVjdFNjaGVtYSk7XHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3Q7XHJcblxyXG5cclxuXHJcbi8vIElmIGl0IGRvZXMgZXhpc3QsIHNldCBpdHMgdmFsdWUgZW4gUHJvZHVjdCwgb3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBtb2RlbC5cclxuLy9UbyBzdG9yZSB0aGUgZGF0ZSB3aGVuIGEgcHJvZHVjdCBpcyBjcmVhdGVkLiIsImltcG9ydCBuYyBmcm9tIFwibmV4dC1jb25uZWN0XCI7XHJcbmltcG9ydCBQcm9kdWN0IGZyb20gXCJtb2RlbHMvUHJvZHVjdFwiO1xyXG5pbXBvcnQgeyBpc0F1dGgsIGlzQWRtaW4gfSBmcm9tIFwidXRpbHMvYXV0aFwiO1xyXG5pbXBvcnQgZGIgZnJvbSBcInV0aWxzL2RiXCI7XHJcbmltcG9ydCB7IG9uRXJyb3IgfSBmcm9tIFwidXRpbHMvZXJyb3JcIjtcclxuXHJcbmNvbnN0IGhhbmRsZXIgPSBuYyh7XHJcbiAgb25FcnJvcixcclxufSk7XHJcbmhhbmRsZXIudXNlKGlzQXV0aCwgaXNBZG1pbik7XHJcblxyXG5oYW5kbGVyLmdldChhc3luYyAocmVxLCByZXMpID0+IHtcclxuICBhd2FpdCBkYi5jb25uZWN0KCk7XHJcbiAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBQcm9kdWN0LmZpbmQoe30pO1xyXG4gIGF3YWl0IGRiLmRpc2Nvbm5lY3QoKTtcclxuICByZXMuc2VuZChwcm9kdWN0cyk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcclxuIiwiLy9Gb3IgdXNlciBhdXRoZW50aWNhdGlvbi5cclxuXHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcclxuXHJcbmNvbnN0IHNpZ25Ub2tlbiA9ICh1c2VyKSA9PiB7XHJcbiAgcmV0dXJuIGp3dC5zaWduKFxyXG4gICAge1xyXG4gICAgICBfaWQ6IHVzZXIuX2lkLFxyXG4gICAgICBuYW1lOiB1c2VyLm5hbWUsXHJcbiAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICBpc0FkbWluOiB1c2VyLmlzQWRtaW4sXHJcbiAgICB9LFxyXG5cclxuICAgIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQsXHJcbiAgICB7XHJcbiAgICAgIGV4cGlyZXNJbjogJzMwZCcsXHJcbiAgICB9XHJcbiAgKTtcclxufTtcclxuXHJcbi8vTWlkZGxld2FyZSB0byB2YWxpZGF0ZSBpZiB1c2VyIGlzIGF1dGhlbnRpY2F0ZWQgYnkgdXNpbmcgYSB0b2tlbiBpZiBpdCBpcyBwcm92aWRlZCBvbiB0aGUgcmVxdWVzdC5cclxuY29uc3QgaXNBdXRoID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgY29uc3QgeyBhdXRob3JpemF0aW9uIH0gPSByZXEuaGVhZGVycztcclxuICBpZiAoYXV0aG9yaXphdGlvbikge1xyXG4gICAgY29uc3QgdG9rZW4gPSBhdXRob3JpemF0aW9uLnNsaWNlKDcsIGF1dGhvcml6YXRpb24ubGVuZ3RoKTsvLyBCZWFyZXIgeHh4ID0+IHh4eFxyXG4gICAgand0LnZlcmlmeSh0b2tlbiwgcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCwgKGVyciwgZGVjb2RlKSA9PiB7XHJcbiAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICByZXMuc3RhdHVzKDQwMSkuc2VuZCh7IG1lc3NhZ2U6ICdUb2tlbiBpcyBub3QgdmFsaWQnIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlcS51c2VyID0gZGVjb2RlOyAvLyB1c2VyIHByb3BlcnR5IGlzIGFkZGVkIHRvIHJlcSBhbmQgdGhlIGRlY29kZWQgZGF0YSBpcyBhc3NpZ24gdG8gaXQuXHJcbiAgICAgICAgbmV4dCgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcy5zdGF0dXMoNDAxKS5zZW5kKHsgbWVzc2FnZTogJ1Rva2VuIGlzIG5vdCBzdXBwaWxlZCcgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgaXNBZG1pbiA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gIGlmIChyZXEudXNlci5pc0FkbWluKSB7XHJcbiAgICBuZXh0KCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcy5zdGF0dXMoNDAxKS5zZW5kKHsgbWVzc2FnZTogJ1VzZXIgaXMgbm90IGFkbWluJyB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgeyBzaWduVG9rZW4sIGlzQXV0aCwgaXNBZG1pbiB9OyIsIi8vIHJlcXVpcmUoJ2RvdGVudicpLmNvbmZpZygpXHJcbmltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCBjb25uZWN0aW9uID0ge307XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjb25uZWN0KCkge1xyXG4gIGlmIChjb25uZWN0aW9uLmlzQ29ubmVjdGVkKSB7XHJcbiAgICBjb25zb2xlLmxvZygnYWxyZWFkeSBjb25uZWN0ZWQnKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgaWYgKG1vbmdvb3NlLmNvbm5lY3Rpb25zLmxlbmd0aCA+IDApIHtcclxuICAgIGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPSBtb25nb29zZS5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlO1xyXG4gICAgaWYgKGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPT09IDEpIHtcclxuICAgICAgY29uc29sZS5sb2coJ3VzZSBwcmV2aW91cyBjb25uZWN0aW9uJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGF3YWl0IG1vbmdvb3NlLmRpc2Nvbm5lY3QoKTtcclxuICB9XHJcbiAgY29uc29sZS5sb2coJ21lIGNvbmVjdGFyZScpXHJcbiAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSSSwge1xyXG4gICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxyXG4gICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlXHJcbiAgfSkudGhlbigoZGIpPT57XHJcbiAgICBjb25zb2xlLmxvZygnbmV3IGNvbm5lY3Rpb24nKTtcclxuICAgIGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPSBkYi5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlO1xyXG4gIH0pXHJcblxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBkaXNjb25uZWN0KCkge1xyXG4gIGlmIChjb25uZWN0aW9uLmlzQ29ubmVjdGVkKSB7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICBhd2FpdCBtb25nb29zZS5kaXNjb25uZWN0KCk7XHJcbiAgICAgIGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPSBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdub3QgZGlzY29ubmVjdGVkJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vL2RiIHJldHVybnMgZGF0YSBpbiBvdGhlciBmb3JtYXQgdGhhdCBpcyBub3QgYSBqYXZhc2NyaXB0IGRhdGEsIHNvIHdlIG5lZWQgdG8gY29udmVydCB0aGF0IGRhdGEgdG8gc3RyaW5nLlxyXG5mdW5jdGlvbiBjb252ZXJ0RG9jVG9PYmooZG9jKSB7XHJcbiAgZG9jLl9pZCA9IGRvYy5faWQudG9TdHJpbmcoKTtcclxuICBkb2MuY3JlYXRlZEF0ID0gZG9jLmNyZWF0ZWRBdC50b1N0cmluZygpO1xyXG4gIGRvYy51cGRhdGVkQXQgPSBkb2MudXBkYXRlZEF0LnRvU3RyaW5nKCk7XHJcbiAgcmV0dXJuIGRvYztcclxufVxyXG5cclxuY29uc3QgZGIgPSB7IGNvbm5lY3QsIGRpc2Nvbm5lY3QsIGNvbnZlcnREb2NUb09iaiB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGI7XHJcblxyXG4vLyBcclxuLy8gY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpXHJcblxyXG4vLyBjb25zdCB1cmwgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSVxyXG5cclxuLy8gY29uc29sZS5sb2coJ2Nvbm5lY3RpbmcgdG8nLCB1cmwpXHJcblxyXG4vLyBtb25nb29zZS5jb25uZWN0KHVybCwgeyB1c2VOZXdVcmxQYXJzZXI6IHRydWUsIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSB9KVxyXG4vLyAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbi8vICAgICBjb25zb2xlLmxvZygnY29ubmVjdGVkIHRvIE1vbmdvREInKVxyXG4vLyAgIH0pXHJcbi8vICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4vLyAgICAgY29uc29sZS5sb2coJ2Vycm9yIGNvbm5lY3RpbmcgdG8gTW9uZ29EQjonLCBlcnJvci5tZXNzYWdlKVxyXG4vLyAgIH0pXHJcbiAgXHJcblxyXG5cclxuey8qXHJcbigxKSBjb25uZWN0aW9ucyBpcyBhbiBhcnJheSB0aGF0IGNvbnRhaW5zIGFsbCBwcmV2aW91cyBjb25uZWN0aW9ucyB0byB0aGUgZGF0YWJhc2VcclxuXHJcbigyKSBJbiBwcm9kdWN0aW9uIGVudmlyb25tZW50LCB0aGUgY29ubmVjdGlvbiBtdXN0IGJlIGRpc2Nvbm5lY3RlZCBhZnRlciBlYWNoIHJlc3F1ZXN0IHRvIHRoZSBkYi5cclxuICAgIEJ1dCBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudCBpdCdzIG5vdCBuZWNlc3NhcnkgdG8gZGlzY29ubmVjdCBpbiBvcmRlciB0byBub3Qgb3ZlciBjaGFyZ2UgcmVzb3VyY2VzLlxyXG5cclxuKi99IiwiXHJcbmltcG9ydCBkYiBmcm9tICcuL2RiJztcclxuXHJcbmNvbnN0IGdldEVycm9yID0gKGVycikgPT5cclxuICBlcnIucmVzcG9uc2UgJiYgZXJyLnJlc3BvbnNlLmRhdGEgJiYgZXJyLnJlc3BvbnNlLmRhdGEubWVzc2FnZVxyXG4gICAgPyBlcnIucmVzcG9uc2UuZGF0YS5tZXNzYWdlXHJcbiAgICA6IGVyci5tZXNzYWdlO1xyXG5cclxuXHJcbi8vVG8gaGFuZGxlIGVycm9zIGluIG1pZGRsZXdhcmUgaW4gYmFja2VuZC5cclxuY29uc3Qgb25FcnJvciA9IGFzeW5jIChlcnIsIHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgYXdhaXQgZGIuZGlzY29ubmVjdCgpO1xyXG4gIHJlcy5zdGF0dXMoNTAwKS5zZW5kKHsgbWVzc2FnZTogZXJyLnRvU3RyaW5nKCkgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBnZXRFcnJvciwgb25FcnJvciB9OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWNvbm5lY3RcIik7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicHJvZHVjdFNjaGVtYSIsIlNjaGVtYSIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJzbHVnIiwidW5pcXVlIiwiY2F0ZWdvcnkiLCJpbWFnZSIsInByaWNlIiwiTnVtYmVyIiwiYnJhbmQiLCJyYXRpbmciLCJkZWZhdWx0IiwibnVtUmV2aWV3cyIsImNvdW50SW5TdG9jayIsImRlc2NyaXB0aW9uIiwidGltZXN0YW1wcyIsIlByb2R1Y3QiLCJtb2RlbHMiLCJtb2RlbCIsIm5jIiwiaXNBdXRoIiwiaXNBZG1pbiIsImRiIiwib25FcnJvciIsImhhbmRsZXIiLCJ1c2UiLCJnZXQiLCJyZXEiLCJyZXMiLCJjb25uZWN0IiwicHJvZHVjdHMiLCJmaW5kIiwiZGlzY29ubmVjdCIsInNlbmQiLCJqd3QiLCJzaWduVG9rZW4iLCJ1c2VyIiwic2lnbiIsIl9pZCIsImVtYWlsIiwicHJvY2VzcyIsImVudiIsIkpXVF9TRUNSRVQiLCJleHBpcmVzSW4iLCJuZXh0IiwiYXV0aG9yaXphdGlvbiIsImhlYWRlcnMiLCJ0b2tlbiIsInNsaWNlIiwibGVuZ3RoIiwidmVyaWZ5IiwiZXJyIiwiZGVjb2RlIiwic3RhdHVzIiwibWVzc2FnZSIsImNvbm5lY3Rpb24iLCJpc0Nvbm5lY3RlZCIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJNT05HT0RCX1VSSSIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsInRoZW4iLCJjb252ZXJ0RG9jVG9PYmoiLCJkb2MiLCJ0b1N0cmluZyIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsImdldEVycm9yIiwicmVzcG9uc2UiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==