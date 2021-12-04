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

const reviewSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
  user: {
    type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.Types.ObjectId),
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    default: 0
  },
  comment: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
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
  },
  reviews: [reviewSchema],
  featuredImage: {
    type: String
  },
  isFeatured: {
    type: Boolean,
    required: true,
    default: false
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

/***/ "./pages/api/admin/products/index.js":
/*!*******************************************!*\
  !*** ./pages/api/admin/products/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ "next-connect");
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils/auth */ "./utils/auth.js");
/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../models/Product */ "./models/Product.js");
/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utils/db */ "./utils/db.js");




const handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()();
handler.use(_utils_auth__WEBPACK_IMPORTED_MODULE_1__.isAuth, _utils_auth__WEBPACK_IMPORTED_MODULE_1__.isAdmin);
handler.get(async (req, res) => {
  await _utils_db__WEBPACK_IMPORTED_MODULE_3__.default.connect();
  const products = await _models_Product__WEBPACK_IMPORTED_MODULE_2__.default.find({});
  await _utils_db__WEBPACK_IMPORTED_MODULE_3__.default.disconnect();
  res.send(products);
});
handler.post(async (req, res) => {
  await _utils_db__WEBPACK_IMPORTED_MODULE_3__.default.connect();
  const newProduct = new _models_Product__WEBPACK_IMPORTED_MODULE_2__.default({
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
  await _utils_db__WEBPACK_IMPORTED_MODULE_3__.default.disconnect();
  res.send({
    message: 'Product Created',
    product
  });
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
var __webpack_exports__ = (__webpack_exec__("./pages/api/admin/products/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUlBO0FBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBRzs7Ozs7Ozs7OztBQzNFSDs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tLW5leHRqcy8uL21vZGVscy9Qcm9kdWN0LmpzIiwid2VicGFjazovL2Vjb20tbmV4dGpzLy4vcGFnZXMvYXBpL2FkbWluL3Byb2R1Y3RzL2luZGV4LmpzIiwid2VicGFjazovL2Vjb20tbmV4dGpzLy4vdXRpbHMvYXV0aC5qcyIsIndlYnBhY2s6Ly9lY29tLW5leHRqcy8uL3V0aWxzL2RiLmpzIiwid2VicGFjazovL2Vjb20tbmV4dGpzL2V4dGVybmFsIFwianNvbndlYnRva2VuXCIiLCJ3ZWJwYWNrOi8vZWNvbS1uZXh0anMvZXh0ZXJuYWwgXCJtb25nb29zZVwiIiwid2VicGFjazovL2Vjb20tbmV4dGpzL2V4dGVybmFsIFwibmV4dC1jb25uZWN0XCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuXHJcbmNvbnN0IHJldmlld1NjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXHJcbiAge1xyXG4gICAgdXNlcjogeyB0eXBlOiBtb25nb29zZS5TY2hlbWEuVHlwZXMuT2JqZWN0SWQsIHJlZjogJ1VzZXInLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgbmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICByYXRpbmc6IHsgdHlwZTogTnVtYmVyLCBkZWZhdWx0OiAwIH0sXHJcbiAgICBjb21tZW50OiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpbWVzdGFtcHM6IHRydWUsXHJcbiAgfVxyXG4pO1xyXG5cclxuY29uc3QgcHJvZHVjdFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXHJcbiAge1xyXG4gICAgbmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBzbHVnOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHVuaXF1ZTogdHJ1ZSB9LFxyXG4gICAgY2F0ZWdvcnk6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgaW1hZ2U6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgcHJpY2U6IHsgdHlwZTogTnVtYmVyLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgYnJhbmQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgcmF0aW5nOiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUsIGRlZmF1bHQ6IDAgfSxcclxuICAgIG51bVJldmlld3M6IHsgdHlwZTogTnVtYmVyLCByZXF1aXJlZDogdHJ1ZSwgZGVmYXVsdDogMCB9LFxyXG4gICAgY291bnRJblN0b2NrOiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUsIGRlZmF1bHQ6IDAgfSxcclxuICAgIGRlc2NyaXB0aW9uOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIHJldmlld3M6IFtyZXZpZXdTY2hlbWFdLFxyXG4gICAgZmVhdHVyZWRJbWFnZTogeyB0eXBlOiBTdHJpbmcgfSxcclxuICAgIGlzRmVhdHVyZWQ6IHsgdHlwZTogQm9vbGVhbiwgcmVxdWlyZWQ6IHRydWUsIGRlZmF1bHQ6IGZhbHNlIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aW1lc3RhbXBzOiB0cnVlLFxyXG4gIH1cclxuKTtcclxuXHJcbi8vIHByb2R1Y3RTY2hlbWEuc2V0KCd0b0pTT04nLCB7XHJcbi8vICAgdHJhbnNmb3JtOiAoZG9jdW1lbnQsIHJldHVybmVkT2JqZWN0KSA9PiB7XHJcbi8vICAgICByZXR1cm5lZE9iamVjdC5pZCA9IHJldHVybmVkT2JqZWN0Ll9pZC50b1N0cmluZygpXHJcbi8vICAgICBkZWxldGUgcmV0dXJuZWRPYmplY3QuX2lkXHJcbi8vICAgICBkZWxldGUgcmV0dXJuZWRPYmplY3QuX192XHJcbi8vICAgfVxyXG4vLyB9KVxyXG5cclxuY29uc3QgUHJvZHVjdCA9XHJcbiAgbW9uZ29vc2UubW9kZWxzLlByb2R1Y3QgfHwgbW9uZ29vc2UubW9kZWwoJ1Byb2R1Y3QnLCBwcm9kdWN0U2NoZW1hKTtcclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdDtcclxuXHJcblxyXG5cclxuLy8gSWYgaXQgZG9lcyBleGlzdCwgc2V0IGl0cyB2YWx1ZSBlbiBQcm9kdWN0LCBvdGhlcndpc2UgY3JlYXRlIGEgbmV3IG1vZGVsLlxyXG4vL1RvIHN0b3JlIHRoZSBkYXRlIHdoZW4gYSBwcm9kdWN0IGlzIGNyZWF0ZWQuIiwiaW1wb3J0IG5jIGZyb20gJ25leHQtY29ubmVjdCc7XHJcbmltcG9ydCB7IGlzQWRtaW4sIGlzQXV0aCB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWxzL2F1dGgnO1xyXG5pbXBvcnQgUHJvZHVjdCBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbHMvUHJvZHVjdCc7XHJcbmltcG9ydCBkYiBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9kYic7XHJcblxyXG5jb25zdCBoYW5kbGVyID0gbmMoKTtcclxuaGFuZGxlci51c2UoaXNBdXRoLCBpc0FkbWluKTtcclxuXHJcbmhhbmRsZXIuZ2V0KGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIGF3YWl0IGRiLmNvbm5lY3QoKTtcclxuICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IFByb2R1Y3QuZmluZCh7fSk7XHJcbiAgYXdhaXQgZGIuZGlzY29ubmVjdCgpO1xyXG4gIHJlcy5zZW5kKHByb2R1Y3RzKTtcclxufSk7XHJcblxyXG5oYW5kbGVyLnBvc3QoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgYXdhaXQgZGIuY29ubmVjdCgpO1xyXG4gIGNvbnN0IG5ld1Byb2R1Y3QgPSBuZXcgUHJvZHVjdCh7XHJcbiAgICBuYW1lOiAnc2FtcGxlIG5hbWUnLFxyXG4gICAgc2x1ZzogJ3NhbXBsZS1zbHVnLScgKyBNYXRoLnJhbmRvbSgpLFxyXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL3NoaXJ0MS5qcGcnLFxyXG4gICAgcHJpY2U6IDAsXHJcbiAgICBjYXRlZ29yeTogJ3NhbXBsZSBjYXRlZ29yeScsXHJcbiAgICBicmFuZDogJ3NhbXBsZSBicmFuZCcsXHJcbiAgICBjb3VudEluU3RvY2s6IDAsXHJcbiAgICBkZXNjcmlwdGlvbjogJ3NhbXBsZSBkZXNjcmlwdGlvbicsXHJcbiAgICByYXRpbmc6IDAsXHJcbiAgICBudW1SZXZpZXdzOiAwLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBwcm9kdWN0ID0gYXdhaXQgbmV3UHJvZHVjdC5zYXZlKCk7XHJcbiAgYXdhaXQgZGIuZGlzY29ubmVjdCgpO1xyXG4gIHJlcy5zZW5kKHsgbWVzc2FnZTogJ1Byb2R1Y3QgQ3JlYXRlZCcsIHByb2R1Y3QgfSk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjsiLCIvL0ZvciB1c2VyIGF1dGhlbnRpY2F0aW9uLlxyXG5cclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xyXG5cclxuY29uc3Qgc2lnblRva2VuID0gKHVzZXIpID0+IHtcclxuICByZXR1cm4gand0LnNpZ24oXHJcbiAgICB7XHJcbiAgICAgIF9pZDogdXNlci5faWQsXHJcbiAgICAgIG5hbWU6IHVzZXIubmFtZSxcclxuICAgICAgZW1haWw6IHVzZXIuZW1haWwsXHJcbiAgICAgIGlzQWRtaW46IHVzZXIuaXNBZG1pbixcclxuICAgIH0sXHJcblxyXG4gICAgcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCxcclxuICAgIHtcclxuICAgICAgZXhwaXJlc0luOiAnMzBkJyxcclxuICAgIH1cclxuICApO1xyXG59O1xyXG5cclxuLy9NaWRkbGV3YXJlIHRvIHZhbGlkYXRlIGlmIHVzZXIgaXMgYXV0aGVudGljYXRlZCBieSB1c2luZyBhIHRva2VuIGlmIGl0IGlzIHByb3ZpZGVkIG9uIHRoZSByZXF1ZXN0LlxyXG5jb25zdCBpc0F1dGggPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcclxuICBjb25zdCB7IGF1dGhvcml6YXRpb24gfSA9IHJlcS5oZWFkZXJzO1xyXG4gIGlmIChhdXRob3JpemF0aW9uKSB7XHJcbiAgICBjb25zdCB0b2tlbiA9IGF1dGhvcml6YXRpb24uc2xpY2UoNywgYXV0aG9yaXphdGlvbi5sZW5ndGgpOy8vIEJlYXJlciB4eHggPT4geHh4XHJcbiAgICBqd3QudmVyaWZ5KHRva2VuLCBwcm9jZXNzLmVudi5KV1RfU0VDUkVULCAoZXJyLCBkZWNvZGUpID0+IHtcclxuICAgICAgaWYgKGVycikge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNDAxKS5zZW5kKHsgbWVzc2FnZTogJ1Rva2VuIGlzIG5vdCB2YWxpZCcgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVxLnVzZXIgPSBkZWNvZGU7IC8vIHVzZXIgcHJvcGVydHkgaXMgYWRkZWQgdG8gcmVxIGFuZCB0aGUgZGVjb2RlZCBkYXRhIGlzIGFzc2lnbiB0byBpdC5cclxuICAgICAgICBuZXh0KCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICB9IGVsc2Uge1xyXG4gICAgcmVzLnN0YXR1cyg0MDEpLnNlbmQoeyBtZXNzYWdlOiAnVG9rZW4gaXMgbm90IHN1cHBpbGVkJyB9KTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBpc0FkbWluID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgaWYgKHJlcS51c2VyLmlzQWRtaW4pIHtcclxuICAgIG5leHQoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmVzLnN0YXR1cyg0MDEpLnNlbmQoeyBtZXNzYWdlOiAnVXNlciBpcyBub3QgYWRtaW4nIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCB7IHNpZ25Ub2tlbiwgaXNBdXRoLCBpc0FkbWluIH07IiwiLy8gcmVxdWlyZSgnZG90ZW52JykuY29uZmlnKClcclxuaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuXHJcbmNvbnN0IGNvbm5lY3Rpb24gPSB7fTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGNvbm5lY3QoKSB7XHJcbiAgaWYgKGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQpIHtcclxuICAgIGNvbnNvbGUubG9nKCdhbHJlYWR5IGNvbm5lY3RlZCcpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBpZiAobW9uZ29vc2UuY29ubmVjdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCA9IG1vbmdvb3NlLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGU7XHJcbiAgICBpZiAoY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCA9PT0gMSkge1xyXG4gICAgICBjb25zb2xlLmxvZygndXNlIHByZXZpb3VzIGNvbm5lY3Rpb24nKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgYXdhaXQgbW9uZ29vc2UuZGlzY29ubmVjdCgpO1xyXG4gIH1cclxuICBjb25zb2xlLmxvZygnbWUgY29uZWN0YXJlJylcclxuICBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJLCB7XHJcbiAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbiAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWVcclxuICB9KS50aGVuKChkYik9PntcclxuICAgIGNvbnNvbGUubG9nKCduZXcgY29ubmVjdGlvbicpO1xyXG4gICAgY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCA9IGRiLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGU7XHJcbiAgfSlcclxuXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGRpc2Nvbm5lY3QoKSB7XHJcbiAgaWYgKGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQpIHtcclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgIGF3YWl0IG1vbmdvb3NlLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coJ25vdCBkaXNjb25uZWN0ZWQnKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vZGIgcmV0dXJucyBkYXRhIGluIG90aGVyIGZvcm1hdCB0aGF0IGlzIG5vdCBhIGphdmFzY3JpcHQgZGF0YSwgc28gd2UgbmVlZCB0byBjb252ZXJ0IHRoYXQgZGF0YSB0byBzdHJpbmcuXHJcbmZ1bmN0aW9uIGNvbnZlcnREb2NUb09iaihkb2MpIHtcclxuICBkb2MuX2lkID0gZG9jLl9pZC50b1N0cmluZygpO1xyXG4gIGRvYy5jcmVhdGVkQXQgPSBkb2MuY3JlYXRlZEF0LnRvU3RyaW5nKCk7XHJcbiAgZG9jLnVwZGF0ZWRBdCA9IGRvYy51cGRhdGVkQXQudG9TdHJpbmcoKTtcclxuICByZXR1cm4gZG9jO1xyXG59XHJcblxyXG5jb25zdCBkYiA9IHsgY29ubmVjdCwgZGlzY29ubmVjdCwgY29udmVydERvY1RvT2JqIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYjtcclxuXHJcbi8vIFxyXG4vLyBjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJylcclxuXHJcbi8vIGNvbnN0IHVybCA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJXHJcblxyXG4vLyBjb25zb2xlLmxvZygnY29ubmVjdGluZyB0bycsIHVybClcclxuXHJcbi8vIG1vbmdvb3NlLmNvbm5lY3QodXJsLCB7IHVzZU5ld1VybFBhcnNlcjogdHJ1ZSwgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlIH0pXHJcbi8vICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuLy8gICAgIGNvbnNvbGUubG9nKCdjb25uZWN0ZWQgdG8gTW9uZ29EQicpXHJcbi8vICAgfSlcclxuLy8gICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbi8vICAgICBjb25zb2xlLmxvZygnZXJyb3IgY29ubmVjdGluZyB0byBNb25nb0RCOicsIGVycm9yLm1lc3NhZ2UpXHJcbi8vICAgfSlcclxuICBcclxuXHJcblxyXG57LypcclxuKDEpIGNvbm5lY3Rpb25zIGlzIGFuIGFycmF5IHRoYXQgY29udGFpbnMgYWxsIHByZXZpb3VzIGNvbm5lY3Rpb25zIHRvIHRoZSBkYXRhYmFzZVxyXG5cclxuKDIpIEluIHByb2R1Y3Rpb24gZW52aXJvbm1lbnQsIHRoZSBjb25uZWN0aW9uIG11c3QgYmUgZGlzY29ubmVjdGVkIGFmdGVyIGVhY2ggcmVzcXVlc3QgdG8gdGhlIGRiLlxyXG4gICAgQnV0IGluIGRldmVsb3BtZW50IGVudmlyb25tZW50IGl0J3Mgbm90IG5lY2Vzc2FyeSB0byBkaXNjb25uZWN0IGluIG9yZGVyIHRvIG5vdCBvdmVyIGNoYXJnZSByZXNvdXJjZXMuXHJcblxyXG4qL30iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqc29ud2VidG9rZW5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1jb25uZWN0XCIpOyJdLCJuYW1lcyI6WyJtb25nb29zZSIsInJldmlld1NjaGVtYSIsIlNjaGVtYSIsInVzZXIiLCJ0eXBlIiwiVHlwZXMiLCJPYmplY3RJZCIsInJlZiIsInJlcXVpcmVkIiwibmFtZSIsIlN0cmluZyIsInJhdGluZyIsIk51bWJlciIsImRlZmF1bHQiLCJjb21tZW50IiwidGltZXN0YW1wcyIsInByb2R1Y3RTY2hlbWEiLCJzbHVnIiwidW5pcXVlIiwiY2F0ZWdvcnkiLCJpbWFnZSIsInByaWNlIiwiYnJhbmQiLCJudW1SZXZpZXdzIiwiY291bnRJblN0b2NrIiwiZGVzY3JpcHRpb24iLCJyZXZpZXdzIiwiZmVhdHVyZWRJbWFnZSIsImlzRmVhdHVyZWQiLCJCb29sZWFuIiwiUHJvZHVjdCIsIm1vZGVscyIsIm1vZGVsIiwibmMiLCJpc0FkbWluIiwiaXNBdXRoIiwiZGIiLCJoYW5kbGVyIiwidXNlIiwiZ2V0IiwicmVxIiwicmVzIiwiY29ubmVjdCIsInByb2R1Y3RzIiwiZmluZCIsImRpc2Nvbm5lY3QiLCJzZW5kIiwicG9zdCIsIm5ld1Byb2R1Y3QiLCJNYXRoIiwicmFuZG9tIiwicHJvZHVjdCIsInNhdmUiLCJtZXNzYWdlIiwiand0Iiwic2lnblRva2VuIiwic2lnbiIsIl9pZCIsImVtYWlsIiwicHJvY2VzcyIsImVudiIsIkpXVF9TRUNSRVQiLCJleHBpcmVzSW4iLCJuZXh0IiwiYXV0aG9yaXphdGlvbiIsImhlYWRlcnMiLCJ0b2tlbiIsInNsaWNlIiwibGVuZ3RoIiwidmVyaWZ5IiwiZXJyIiwiZGVjb2RlIiwic3RhdHVzIiwiY29ubmVjdGlvbiIsImlzQ29ubmVjdGVkIiwiY29uc29sZSIsImxvZyIsImNvbm5lY3Rpb25zIiwicmVhZHlTdGF0ZSIsIk1PTkdPREJfVVJJIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwidGhlbiIsImNvbnZlcnREb2NUb09iaiIsImRvYyIsInRvU3RyaW5nIiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0Il0sInNvdXJjZVJvb3QiOiIifQ==