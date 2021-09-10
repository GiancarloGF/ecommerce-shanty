"use strict";
(() => {
var exports = {};
exports.id = "pages/api/admin/products/[id]";
exports.ids = ["pages/api/admin/products/[id]"];
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

/***/ "./pages/api/admin/products/[id]/index.js":
/*!************************************************!*\
  !*** ./pages/api/admin/products/[id]/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ "next-connect");
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/auth */ "./utils/auth.js");
/* harmony import */ var models_Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! models/Product */ "./models/Product.js");
/* harmony import */ var utils_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/db */ "./utils/db.js");




const handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()();
handler.use(utils_auth__WEBPACK_IMPORTED_MODULE_1__.isAuth, utils_auth__WEBPACK_IMPORTED_MODULE_1__.isAdmin);
handler.get(async (req, res) => {
  await utils_db__WEBPACK_IMPORTED_MODULE_3__.default.connect();
  const product = await models_Product__WEBPACK_IMPORTED_MODULE_2__.default.findById(req.query.id);
  await utils_db__WEBPACK_IMPORTED_MODULE_3__.default.disconnect();
  res.send(product);
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
}; //Middleware to get data from token if it is provided on request.


const isAuth = async (req, res, next) => {
  const {
    authorization
  } = req.headers;

  if (authorization) {
    // Bearer xxx => xxx
    const token = authorization.slice(7, authorization.length);
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
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/admin/products/[id]/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRRDs7QUFFRCxlQUFlNUIsVUFBZixHQUE0QjtBQUMxQixNQUFJdUIsVUFBVSxDQUFDQyxXQUFmLEVBQTRCO0FBQzFCLGVBQTJDLEVBQTNDLE1BR087QUFDTEMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7QUFDRDtBQUNGO0FBQ0YsRUFFRDs7O0FBQ0EsU0FBU08sZUFBVCxDQUF5QkMsR0FBekIsRUFBOEI7QUFDNUJBLEVBQUFBLEdBQUcsQ0FBQzVCLEdBQUosR0FBVTRCLEdBQUcsQ0FBQzVCLEdBQUosQ0FBUTZCLFFBQVIsRUFBVjtBQUNBRCxFQUFBQSxHQUFHLENBQUNFLFNBQUosR0FBZ0JGLEdBQUcsQ0FBQ0UsU0FBSixDQUFjRCxRQUFkLEVBQWhCO0FBQ0FELEVBQUFBLEdBQUcsQ0FBQ0csU0FBSixHQUFnQkgsR0FBRyxDQUFDRyxTQUFKLENBQWNGLFFBQWQsRUFBaEI7QUFDQSxTQUFPRCxHQUFQO0FBQ0Q7O0FBRUQsTUFBTTdDLEVBQUUsR0FBRztBQUFFTSxFQUFBQSxPQUFGO0FBQVdLLEVBQUFBLFVBQVg7QUFBdUJpQyxFQUFBQTtBQUF2QixDQUFYO0FBRUEsaUVBQWU1QyxFQUFmLEdBRUE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQTtBQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUc7Ozs7Ozs7Ozs7QUMzRUg7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbS1uZXh0anMvLi9tb2RlbHMvUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly9lY29tLW5leHRqcy8uL3BhZ2VzL2FwaS9hZG1pbi9wcm9kdWN0cy9baWRdL2luZGV4LmpzIiwid2VicGFjazovL2Vjb20tbmV4dGpzLy4vdXRpbHMvYXV0aC5qcyIsIndlYnBhY2s6Ly9lY29tLW5leHRqcy8uL3V0aWxzL2RiLmpzIiwid2VicGFjazovL2Vjb20tbmV4dGpzL2V4dGVybmFsIFwianNvbndlYnRva2VuXCIiLCJ3ZWJwYWNrOi8vZWNvbS1uZXh0anMvZXh0ZXJuYWwgXCJtb25nb29zZVwiIiwid2VicGFjazovL2Vjb20tbmV4dGpzL2V4dGVybmFsIFwibmV4dC1jb25uZWN0XCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuXHJcbmNvbnN0IHByb2R1Y3RTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxyXG4gIHtcclxuICAgIG5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgc2x1ZzogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB1bmlxdWU6IHRydWUgfSxcclxuICAgIGNhdGVnb3J5OiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIGltYWdlOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIHByaWNlOiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIGJyYW5kOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIHJhdGluZzogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlLCBkZWZhdWx0OiAwIH0sXHJcbiAgICBudW1SZXZpZXdzOiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUsIGRlZmF1bHQ6IDAgfSxcclxuICAgIGNvdW50SW5TdG9jazogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlLCBkZWZhdWx0OiAwIH0sXHJcbiAgICBkZXNjcmlwdGlvbjogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aW1lc3RhbXBzOiB0cnVlLFxyXG4gIH1cclxuKTtcclxuXHJcbi8vIHByb2R1Y3RTY2hlbWEuc2V0KCd0b0pTT04nLCB7XHJcbi8vICAgdHJhbnNmb3JtOiAoZG9jdW1lbnQsIHJldHVybmVkT2JqZWN0KSA9PiB7XHJcbi8vICAgICByZXR1cm5lZE9iamVjdC5pZCA9IHJldHVybmVkT2JqZWN0Ll9pZC50b1N0cmluZygpXHJcbi8vICAgICBkZWxldGUgcmV0dXJuZWRPYmplY3QuX2lkXHJcbi8vICAgICBkZWxldGUgcmV0dXJuZWRPYmplY3QuX192XHJcbi8vICAgfVxyXG4vLyB9KVxyXG5cclxuY29uc3QgUHJvZHVjdCA9XHJcbiAgbW9uZ29vc2UubW9kZWxzLlByb2R1Y3QgfHwgbW9uZ29vc2UubW9kZWwoJ1Byb2R1Y3QnLCBwcm9kdWN0U2NoZW1hKTtcclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdDtcclxuXHJcblxyXG5cclxuLy8gSWYgaXQgZG9lcyBleGlzdCwgc2V0IGl0cyB2YWx1ZSBlbiBQcm9kdWN0LCBvdGhlcndpc2UgY3JlYXRlIGEgbmV3IG1vZGVsLlxyXG4vL1RvIHN0b3JlIHRoZSBkYXRlIHdoZW4gYSBwcm9kdWN0IGlzIGNyZWF0ZWQuIiwiaW1wb3J0IG5jIGZyb20gJ25leHQtY29ubmVjdCc7XHJcbmltcG9ydCB7IGlzQWRtaW4sIGlzQXV0aCB9IGZyb20gJ3V0aWxzL2F1dGgnO1xyXG5pbXBvcnQgUHJvZHVjdCBmcm9tICdtb2RlbHMvUHJvZHVjdCc7XHJcbmltcG9ydCBkYiBmcm9tICd1dGlscy9kYic7XHJcblxyXG5jb25zdCBoYW5kbGVyID0gbmMoKTtcclxuaGFuZGxlci51c2UoaXNBdXRoLCBpc0FkbWluKTtcclxuXHJcbmhhbmRsZXIuZ2V0KGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIGF3YWl0IGRiLmNvbm5lY3QoKTtcclxuICBjb25zdCBwcm9kdWN0ID0gYXdhaXQgUHJvZHVjdC5maW5kQnlJZChyZXEucXVlcnkuaWQpO1xyXG4gIGF3YWl0IGRiLmRpc2Nvbm5lY3QoKTtcclxuICByZXMuc2VuZChwcm9kdWN0KTtcclxufSk7XHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7IiwiLy9Gb3IgdXNlciBhdXRoZW50aWNhdGlvbi5cclxuXHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcclxuXHJcbmNvbnN0IHNpZ25Ub2tlbiA9ICh1c2VyKSA9PiB7XHJcbiAgcmV0dXJuIGp3dC5zaWduKFxyXG4gICAge1xyXG4gICAgICBfaWQ6IHVzZXIuX2lkLFxyXG4gICAgICBuYW1lOiB1c2VyLm5hbWUsXHJcbiAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICBpc0FkbWluOiB1c2VyLmlzQWRtaW4sXHJcbiAgICB9LFxyXG5cclxuICAgIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQsXHJcbiAgICB7XHJcbiAgICAgIGV4cGlyZXNJbjogJzMwZCcsXHJcbiAgICB9XHJcbiAgKTtcclxufTtcclxuXHJcbi8vTWlkZGxld2FyZSB0byBnZXQgZGF0YSBmcm9tIHRva2VuIGlmIGl0IGlzIHByb3ZpZGVkIG9uIHJlcXVlc3QuXHJcbmNvbnN0IGlzQXV0aCA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gIGNvbnN0IHsgYXV0aG9yaXphdGlvbiB9ID0gcmVxLmhlYWRlcnM7XHJcbiAgaWYgKGF1dGhvcml6YXRpb24pIHtcclxuICAgIC8vIEJlYXJlciB4eHggPT4geHh4XHJcbiAgICBjb25zdCB0b2tlbiA9IGF1dGhvcml6YXRpb24uc2xpY2UoNywgYXV0aG9yaXphdGlvbi5sZW5ndGgpO1xyXG4gICAgand0LnZlcmlmeSh0b2tlbiwgcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCwgKGVyciwgZGVjb2RlKSA9PiB7XHJcbiAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICByZXMuc3RhdHVzKDQwMSkuc2VuZCh7IG1lc3NhZ2U6ICdUb2tlbiBpcyBub3QgdmFsaWQnIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlcS51c2VyID0gZGVjb2RlOyAvLyB1c2VyIHByb3BlcnR5IGlzIGFkZGVkIHRvIHJlcSBhbmQgdGhlIGRlY29kZWQgZGF0YSBpcyBhc3NpZ24gdG8gaXQuXHJcbiAgICAgICAgbmV4dCgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcy5zdGF0dXMoNDAxKS5zZW5kKHsgbWVzc2FnZTogJ1Rva2VuIGlzIG5vdCBzdXBwaWxlZCcgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgaXNBZG1pbiA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gIGlmIChyZXEudXNlci5pc0FkbWluKSB7XHJcbiAgICBuZXh0KCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcy5zdGF0dXMoNDAxKS5zZW5kKHsgbWVzc2FnZTogJ1VzZXIgaXMgbm90IGFkbWluJyB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgeyBzaWduVG9rZW4sIGlzQXV0aCwgaXNBZG1pbiB9OyIsIi8vIHJlcXVpcmUoJ2RvdGVudicpLmNvbmZpZygpXHJcbmltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCBjb25uZWN0aW9uID0ge307XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjb25uZWN0KCkge1xyXG4gIGlmIChjb25uZWN0aW9uLmlzQ29ubmVjdGVkKSB7XHJcbiAgICBjb25zb2xlLmxvZygnYWxyZWFkeSBjb25uZWN0ZWQnKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgaWYgKG1vbmdvb3NlLmNvbm5lY3Rpb25zLmxlbmd0aCA+IDApIHtcclxuICAgIGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPSBtb25nb29zZS5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlO1xyXG4gICAgaWYgKGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPT09IDEpIHtcclxuICAgICAgY29uc29sZS5sb2coJ3VzZSBwcmV2aW91cyBjb25uZWN0aW9uJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGF3YWl0IG1vbmdvb3NlLmRpc2Nvbm5lY3QoKTtcclxuICB9XHJcbiAgY29uc29sZS5sb2coJ21lIGNvbmVjdGFyZScpXHJcbiAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSSSwge1xyXG4gICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxyXG4gICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlXHJcbiAgfSkudGhlbigoZGIpPT57XHJcbiAgICBjb25zb2xlLmxvZygnbmV3IGNvbm5lY3Rpb24nKTtcclxuICAgIGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPSBkYi5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlO1xyXG4gIH0pXHJcblxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBkaXNjb25uZWN0KCkge1xyXG4gIGlmIChjb25uZWN0aW9uLmlzQ29ubmVjdGVkKSB7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICBhd2FpdCBtb25nb29zZS5kaXNjb25uZWN0KCk7XHJcbiAgICAgIGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPSBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdub3QgZGlzY29ubmVjdGVkJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vL2RiIHJldHVybnMgZGF0YSBpbiBvdGhlciBmb3JtYXQgdGhhdCBpcyBub3QgYSBqYXZhc2NyaXB0IGRhdGEsIHNvIHdlIG5lZWQgdG8gY29udmVydCB0aGF0IGRhdGEgdG8gc3RyaW5nLlxyXG5mdW5jdGlvbiBjb252ZXJ0RG9jVG9PYmooZG9jKSB7XHJcbiAgZG9jLl9pZCA9IGRvYy5faWQudG9TdHJpbmcoKTtcclxuICBkb2MuY3JlYXRlZEF0ID0gZG9jLmNyZWF0ZWRBdC50b1N0cmluZygpO1xyXG4gIGRvYy51cGRhdGVkQXQgPSBkb2MudXBkYXRlZEF0LnRvU3RyaW5nKCk7XHJcbiAgcmV0dXJuIGRvYztcclxufVxyXG5cclxuY29uc3QgZGIgPSB7IGNvbm5lY3QsIGRpc2Nvbm5lY3QsIGNvbnZlcnREb2NUb09iaiB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGI7XHJcblxyXG4vLyBcclxuLy8gY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpXHJcblxyXG4vLyBjb25zdCB1cmwgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSVxyXG5cclxuLy8gY29uc29sZS5sb2coJ2Nvbm5lY3RpbmcgdG8nLCB1cmwpXHJcblxyXG4vLyBtb25nb29zZS5jb25uZWN0KHVybCwgeyB1c2VOZXdVcmxQYXJzZXI6IHRydWUsIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSB9KVxyXG4vLyAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbi8vICAgICBjb25zb2xlLmxvZygnY29ubmVjdGVkIHRvIE1vbmdvREInKVxyXG4vLyAgIH0pXHJcbi8vICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4vLyAgICAgY29uc29sZS5sb2coJ2Vycm9yIGNvbm5lY3RpbmcgdG8gTW9uZ29EQjonLCBlcnJvci5tZXNzYWdlKVxyXG4vLyAgIH0pXHJcbiAgXHJcblxyXG5cclxuey8qXHJcbigxKSBjb25uZWN0aW9ucyBpcyBhbiBhcnJheSB0aGF0IGNvbnRhaW5zIGFsbCBwcmV2aW91cyBjb25uZWN0aW9ucyB0byB0aGUgZGF0YWJhc2VcclxuXHJcbigyKSBJbiBwcm9kdWN0aW9uIGVudmlyb25tZW50LCB0aGUgY29ubmVjdGlvbiBtdXN0IGJlIGRpc2Nvbm5lY3RlZCBhZnRlciBlYWNoIHJlc3F1ZXN0IHRvIHRoZSBkYi5cclxuICAgIEJ1dCBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudCBpdCdzIG5vdCBuZWNlc3NhcnkgdG8gZGlzY29ubmVjdCBpbiBvcmRlciB0byBub3Qgb3ZlciBjaGFyZ2UgcmVzb3VyY2VzLlxyXG5cclxuKi99IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianNvbndlYnRva2VuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtY29ubmVjdFwiKTsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJwcm9kdWN0U2NoZW1hIiwiU2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInNsdWciLCJ1bmlxdWUiLCJjYXRlZ29yeSIsImltYWdlIiwicHJpY2UiLCJOdW1iZXIiLCJicmFuZCIsInJhdGluZyIsImRlZmF1bHQiLCJudW1SZXZpZXdzIiwiY291bnRJblN0b2NrIiwiZGVzY3JpcHRpb24iLCJ0aW1lc3RhbXBzIiwiUHJvZHVjdCIsIm1vZGVscyIsIm1vZGVsIiwibmMiLCJpc0FkbWluIiwiaXNBdXRoIiwiZGIiLCJoYW5kbGVyIiwidXNlIiwiZ2V0IiwicmVxIiwicmVzIiwiY29ubmVjdCIsInByb2R1Y3QiLCJmaW5kQnlJZCIsInF1ZXJ5IiwiaWQiLCJkaXNjb25uZWN0Iiwic2VuZCIsImp3dCIsInNpZ25Ub2tlbiIsInVzZXIiLCJzaWduIiwiX2lkIiwiZW1haWwiLCJwcm9jZXNzIiwiZW52IiwiSldUX1NFQ1JFVCIsImV4cGlyZXNJbiIsIm5leHQiLCJhdXRob3JpemF0aW9uIiwiaGVhZGVycyIsInRva2VuIiwic2xpY2UiLCJsZW5ndGgiLCJ2ZXJpZnkiLCJlcnIiLCJkZWNvZGUiLCJzdGF0dXMiLCJtZXNzYWdlIiwiY29ubmVjdGlvbiIsImlzQ29ubmVjdGVkIiwiY29uc29sZSIsImxvZyIsImNvbm5lY3Rpb25zIiwicmVhZHlTdGF0ZSIsIk1PTkdPREJfVVJJIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwidGhlbiIsImNvbnZlcnREb2NUb09iaiIsImRvYyIsInRvU3RyaW5nIiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0Il0sInNvdXJjZVJvb3QiOiIifQ==