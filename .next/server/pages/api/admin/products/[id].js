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
handler.put(async (req, res) => {
  await utils_db__WEBPACK_IMPORTED_MODULE_3__.default.connect();
  const product = await models_Product__WEBPACK_IMPORTED_MODULE_2__.default.findById(req.query.id);

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
    await utils_db__WEBPACK_IMPORTED_MODULE_3__.default.disconnect();
    res.send({
      message: "Product Updated Successfully"
    });
  } else {
    await utils_db__WEBPACK_IMPORTED_MODULE_3__.default.disconnect();
    res.status(404).send({
      message: "Product Not Found"
    });
  }
});
handler.delete(async (req, res) => {
  await utils_db__WEBPACK_IMPORTED_MODULE_3__.default.connect();
  const product = await models_Product__WEBPACK_IMPORTED_MODULE_2__.default.findById(req.query.id);

  if (product) {
    await product.remove();
    await utils_db__WEBPACK_IMPORTED_MODULE_3__.default.disconnect();
    res.send({
      message: 'Product Deleted'
    });
  } else {
    await utils_db__WEBPACK_IMPORTED_MODULE_3__.default.disconnect();
    res.status(404).send({
      message: 'Product Not Found'
    });
  }
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
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/admin/products/[id]/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cUMsRUFBQUE7QUFBdkIsQ0FBWDtBQUVBLGlFQUFlaEQsRUFBZixHQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBSUE7QUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFHOzs7Ozs7Ozs7O0FDM0VIOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb20tbmV4dGpzLy4vbW9kZWxzL1Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vZWNvbS1uZXh0anMvLi9wYWdlcy9hcGkvYWRtaW4vcHJvZHVjdHMvW2lkXS9pbmRleC5qcyIsIndlYnBhY2s6Ly9lY29tLW5leHRqcy8uL3V0aWxzL2F1dGguanMiLCJ3ZWJwYWNrOi8vZWNvbS1uZXh0anMvLi91dGlscy9kYi5qcyIsIndlYnBhY2s6Ly9lY29tLW5leHRqcy9leHRlcm5hbCBcImpzb253ZWJ0b2tlblwiIiwid2VicGFjazovL2Vjb20tbmV4dGpzL2V4dGVybmFsIFwibW9uZ29vc2VcIiIsIndlYnBhY2s6Ly9lY29tLW5leHRqcy9leHRlcm5hbCBcIm5leHQtY29ubmVjdFwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCByZXZpZXdTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxyXG4gIHtcclxuICAgIHVzZXI6IHsgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLCByZWY6ICdVc2VyJywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIG5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgcmF0aW5nOiB7IHR5cGU6IE51bWJlciwgZGVmYXVsdDogMCB9LFxyXG4gICAgY29tbWVudDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aW1lc3RhbXBzOiB0cnVlLFxyXG4gIH1cclxuKTtcclxuXHJcbmNvbnN0IHByb2R1Y3RTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxyXG4gIHtcclxuICAgIG5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgc2x1ZzogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB1bmlxdWU6IHRydWUgfSxcclxuICAgIGNhdGVnb3J5OiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIGltYWdlOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIHByaWNlOiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIGJyYW5kOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIHJhdGluZzogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlLCBkZWZhdWx0OiAwIH0sXHJcbiAgICBudW1SZXZpZXdzOiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUsIGRlZmF1bHQ6IDAgfSxcclxuICAgIGNvdW50SW5TdG9jazogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlLCBkZWZhdWx0OiAwIH0sXHJcbiAgICBkZXNjcmlwdGlvbjogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICByZXZpZXdzOiBbcmV2aWV3U2NoZW1hXSxcclxuICAgIGZlYXR1cmVkSW1hZ2U6IHsgdHlwZTogU3RyaW5nIH0sXHJcbiAgICBpc0ZlYXR1cmVkOiB7IHR5cGU6IEJvb2xlYW4sIHJlcXVpcmVkOiB0cnVlLCBkZWZhdWx0OiBmYWxzZSB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGltZXN0YW1wczogdHJ1ZSxcclxuICB9XHJcbik7XHJcblxyXG4vLyBwcm9kdWN0U2NoZW1hLnNldCgndG9KU09OJywge1xyXG4vLyAgIHRyYW5zZm9ybTogKGRvY3VtZW50LCByZXR1cm5lZE9iamVjdCkgPT4ge1xyXG4vLyAgICAgcmV0dXJuZWRPYmplY3QuaWQgPSByZXR1cm5lZE9iamVjdC5faWQudG9TdHJpbmcoKVxyXG4vLyAgICAgZGVsZXRlIHJldHVybmVkT2JqZWN0Ll9pZFxyXG4vLyAgICAgZGVsZXRlIHJldHVybmVkT2JqZWN0Ll9fdlxyXG4vLyAgIH1cclxuLy8gfSlcclxuXHJcbmNvbnN0IFByb2R1Y3QgPVxyXG4gIG1vbmdvb3NlLm1vZGVscy5Qcm9kdWN0IHx8IG1vbmdvb3NlLm1vZGVsKCdQcm9kdWN0JywgcHJvZHVjdFNjaGVtYSk7XHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3Q7XHJcblxyXG5cclxuXHJcbi8vIElmIGl0IGRvZXMgZXhpc3QsIHNldCBpdHMgdmFsdWUgZW4gUHJvZHVjdCwgb3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBtb2RlbC5cclxuLy9UbyBzdG9yZSB0aGUgZGF0ZSB3aGVuIGEgcHJvZHVjdCBpcyBjcmVhdGVkLiIsImltcG9ydCBuYyBmcm9tIFwibmV4dC1jb25uZWN0XCI7XHJcbmltcG9ydCB7IGlzQWRtaW4sIGlzQXV0aCB9IGZyb20gXCJ1dGlscy9hdXRoXCI7XHJcbmltcG9ydCBQcm9kdWN0IGZyb20gXCJtb2RlbHMvUHJvZHVjdFwiO1xyXG5pbXBvcnQgZGIgZnJvbSBcInV0aWxzL2RiXCI7XHJcblxyXG5jb25zdCBoYW5kbGVyID0gbmMoKTtcclxuaGFuZGxlci51c2UoaXNBdXRoLCBpc0FkbWluKTtcclxuXHJcbmhhbmRsZXIuZ2V0KGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIGF3YWl0IGRiLmNvbm5lY3QoKTtcclxuICBjb25zdCBwcm9kdWN0ID0gYXdhaXQgUHJvZHVjdC5maW5kQnlJZChyZXEucXVlcnkuaWQpO1xyXG4gIGF3YWl0IGRiLmRpc2Nvbm5lY3QoKTtcclxuICByZXMuc2VuZChwcm9kdWN0KTtcclxufSk7XHJcblxyXG5oYW5kbGVyLnB1dChhc3luYyAocmVxLCByZXMpID0+IHtcclxuICBhd2FpdCBkYi5jb25uZWN0KCk7XHJcbiAgY29uc3QgcHJvZHVjdCA9IGF3YWl0IFByb2R1Y3QuZmluZEJ5SWQocmVxLnF1ZXJ5LmlkKTtcclxuICBpZiAocHJvZHVjdCkge1xyXG4gICAgcHJvZHVjdC5uYW1lID0gcmVxLmJvZHkubmFtZTtcclxuICAgIHByb2R1Y3Quc2x1ZyA9IHJlcS5ib2R5LnNsdWc7XHJcbiAgICBwcm9kdWN0LnByaWNlID0gcmVxLmJvZHkucHJpY2U7XHJcbiAgICBwcm9kdWN0LmNhdGVnb3J5ID0gcmVxLmJvZHkuY2F0ZWdvcnk7XHJcbiAgICBwcm9kdWN0LmltYWdlID0gcmVxLmJvZHkuaW1hZ2U7XHJcbiAgICBwcm9kdWN0LmZlYXR1cmVkSW1hZ2UgPSByZXEuYm9keS5mZWF0dXJlZEltYWdlO1xyXG4gICAgcHJvZHVjdC5pc0ZlYXR1cmVkID0gcmVxLmJvZHkuaXNGZWF0dXJlZDtcclxuICAgIHByb2R1Y3QuYnJhbmQgPSByZXEuYm9keS5icmFuZDtcclxuICAgIHByb2R1Y3QuY291bnRJblN0b2NrID0gcmVxLmJvZHkuY291bnRJblN0b2NrO1xyXG4gICAgcHJvZHVjdC5kZXNjcmlwdGlvbiA9IHJlcS5ib2R5LmRlc2NyaXB0aW9uO1xyXG4gICAgYXdhaXQgcHJvZHVjdC5zYXZlKCk7XHJcbiAgICBhd2FpdCBkYi5kaXNjb25uZWN0KCk7XHJcbiAgICByZXMuc2VuZCh7IG1lc3NhZ2U6IFwiUHJvZHVjdCBVcGRhdGVkIFN1Y2Nlc3NmdWxseVwiIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBhd2FpdCBkYi5kaXNjb25uZWN0KCk7XHJcbiAgICByZXMuc3RhdHVzKDQwNCkuc2VuZCh7IG1lc3NhZ2U6IFwiUHJvZHVjdCBOb3QgRm91bmRcIiB9KTtcclxuICB9XHJcbn0pO1xyXG5cclxuaGFuZGxlci5kZWxldGUoYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbiAgYXdhaXQgZGIuY29ubmVjdCgpO1xyXG4gIGNvbnN0IHByb2R1Y3QgPSBhd2FpdCBQcm9kdWN0LmZpbmRCeUlkKHJlcS5xdWVyeS5pZCk7XHJcbiAgaWYgKHByb2R1Y3QpIHtcclxuICAgIGF3YWl0IHByb2R1Y3QucmVtb3ZlKCk7XHJcbiAgICBhd2FpdCBkYi5kaXNjb25uZWN0KCk7XHJcbiAgICByZXMuc2VuZCh7IG1lc3NhZ2U6ICdQcm9kdWN0IERlbGV0ZWQnIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBhd2FpdCBkYi5kaXNjb25uZWN0KCk7XHJcbiAgICByZXMuc3RhdHVzKDQwNCkuc2VuZCh7IG1lc3NhZ2U6ICdQcm9kdWN0IE5vdCBGb3VuZCcgfSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XHJcbiIsIi8vRm9yIHVzZXIgYXV0aGVudGljYXRpb24uXHJcblxyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XHJcblxyXG5jb25zdCBzaWduVG9rZW4gPSAodXNlcikgPT4ge1xyXG4gIHJldHVybiBqd3Quc2lnbihcclxuICAgIHtcclxuICAgICAgX2lkOiB1c2VyLl9pZCxcclxuICAgICAgbmFtZTogdXNlci5uYW1lLFxyXG4gICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgICAgaXNBZG1pbjogdXNlci5pc0FkbWluLFxyXG4gICAgfSxcclxuXHJcbiAgICBwcm9jZXNzLmVudi5KV1RfU0VDUkVULFxyXG4gICAge1xyXG4gICAgICBleHBpcmVzSW46ICczMGQnLFxyXG4gICAgfVxyXG4gICk7XHJcbn07XHJcblxyXG4vL01pZGRsZXdhcmUgdG8gdmFsaWRhdGUgaWYgdXNlciBpcyBhdXRoZW50aWNhdGVkIGJ5IHVzaW5nIGEgdG9rZW4gaWYgaXQgaXMgcHJvdmlkZWQgb24gdGhlIHJlcXVlc3QuXHJcbmNvbnN0IGlzQXV0aCA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gIGNvbnN0IHsgYXV0aG9yaXphdGlvbiB9ID0gcmVxLmhlYWRlcnM7XHJcbiAgaWYgKGF1dGhvcml6YXRpb24pIHtcclxuICAgIGNvbnN0IHRva2VuID0gYXV0aG9yaXphdGlvbi5zbGljZSg3LCBhdXRob3JpemF0aW9uLmxlbmd0aCk7Ly8gQmVhcmVyIHh4eCA9PiB4eHhcclxuICAgIGp3dC52ZXJpZnkodG9rZW4sIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQsIChlcnIsIGRlY29kZSkgPT4ge1xyXG4gICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgcmVzLnN0YXR1cyg0MDEpLnNlbmQoeyBtZXNzYWdlOiAnVG9rZW4gaXMgbm90IHZhbGlkJyB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXEudXNlciA9IGRlY29kZTsgLy8gdXNlciBwcm9wZXJ0eSBpcyBhZGRlZCB0byByZXEgYW5kIHRoZSBkZWNvZGVkIGRhdGEgaXMgYXNzaWduIHRvIGl0LlxyXG4gICAgICAgIG5leHQoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuc3RhdHVzKDQwMSkuc2VuZCh7IG1lc3NhZ2U6ICdUb2tlbiBpcyBub3Qgc3VwcGlsZWQnIH0pO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGlzQWRtaW4gPSBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcclxuICBpZiAocmVxLnVzZXIuaXNBZG1pbikge1xyXG4gICAgbmV4dCgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuc3RhdHVzKDQwMSkuc2VuZCh7IG1lc3NhZ2U6ICdVc2VyIGlzIG5vdCBhZG1pbicgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHsgc2lnblRva2VuLCBpc0F1dGgsIGlzQWRtaW4gfTsiLCIvLyByZXF1aXJlKCdkb3RlbnYnKS5jb25maWcoKVxyXG5pbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3QgY29ubmVjdGlvbiA9IHt9O1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gY29ubmVjdCgpIHtcclxuICBpZiAoY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCkge1xyXG4gICAgY29uc29sZS5sb2coJ2FscmVhZHkgY29ubmVjdGVkJyk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGlmIChtb25nb29zZS5jb25uZWN0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICBjb25uZWN0aW9uLmlzQ29ubmVjdGVkID0gbW9uZ29vc2UuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZTtcclxuICAgIGlmIChjb25uZWN0aW9uLmlzQ29ubmVjdGVkID09PSAxKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCd1c2UgcHJldmlvdXMgY29ubmVjdGlvbicpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBhd2FpdCBtb25nb29zZS5kaXNjb25uZWN0KCk7XHJcbiAgfVxyXG4gIGNvbnNvbGUubG9nKCdtZSBjb25lY3RhcmUnKVxyXG4gIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkksIHtcclxuICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuICAgIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZVxyXG4gIH0pLnRoZW4oKGRiKT0+e1xyXG4gICAgY29uc29sZS5sb2coJ25ldyBjb25uZWN0aW9uJyk7XHJcbiAgICBjb25uZWN0aW9uLmlzQ29ubmVjdGVkID0gZGIuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZTtcclxuICB9KVxyXG5cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZGlzY29ubmVjdCgpIHtcclxuICBpZiAoY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCkge1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgYXdhaXQgbW9uZ29vc2UuZGlzY29ubmVjdCgpO1xyXG4gICAgICBjb25uZWN0aW9uLmlzQ29ubmVjdGVkID0gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZygnbm90IGRpc2Nvbm5lY3RlZCcpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy9kYiByZXR1cm5zIGRhdGEgaW4gb3RoZXIgZm9ybWF0IHRoYXQgaXMgbm90IGEgamF2YXNjcmlwdCBkYXRhLCBzbyB3ZSBuZWVkIHRvIGNvbnZlcnQgdGhhdCBkYXRhIHRvIHN0cmluZy5cclxuZnVuY3Rpb24gY29udmVydERvY1RvT2JqKGRvYykge1xyXG4gIGRvYy5faWQgPSBkb2MuX2lkLnRvU3RyaW5nKCk7XHJcbiAgZG9jLmNyZWF0ZWRBdCA9IGRvYy5jcmVhdGVkQXQudG9TdHJpbmcoKTtcclxuICBkb2MudXBkYXRlZEF0ID0gZG9jLnVwZGF0ZWRBdC50b1N0cmluZygpO1xyXG4gIHJldHVybiBkb2M7XHJcbn1cclxuXHJcbmNvbnN0IGRiID0geyBjb25uZWN0LCBkaXNjb25uZWN0LCBjb252ZXJ0RG9jVG9PYmogfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRiO1xyXG5cclxuLy8gXHJcbi8vIGNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKVxyXG5cclxuLy8gY29uc3QgdXJsID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUklcclxuXHJcbi8vIGNvbnNvbGUubG9nKCdjb25uZWN0aW5nIHRvJywgdXJsKVxyXG5cclxuLy8gbW9uZ29vc2UuY29ubmVjdCh1cmwsIHsgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLCB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWUgfSlcclxuLy8gICAudGhlbihyZXN1bHQgPT4ge1xyXG4vLyAgICAgY29uc29sZS5sb2coJ2Nvbm5lY3RlZCB0byBNb25nb0RCJylcclxuLy8gICB9KVxyXG4vLyAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuLy8gICAgIGNvbnNvbGUubG9nKCdlcnJvciBjb25uZWN0aW5nIHRvIE1vbmdvREI6JywgZXJyb3IubWVzc2FnZSlcclxuLy8gICB9KVxyXG4gIFxyXG5cclxuXHJcbnsvKlxyXG4oMSkgY29ubmVjdGlvbnMgaXMgYW4gYXJyYXkgdGhhdCBjb250YWlucyBhbGwgcHJldmlvdXMgY29ubmVjdGlvbnMgdG8gdGhlIGRhdGFiYXNlXHJcblxyXG4oMikgSW4gcHJvZHVjdGlvbiBlbnZpcm9ubWVudCwgdGhlIGNvbm5lY3Rpb24gbXVzdCBiZSBkaXNjb25uZWN0ZWQgYWZ0ZXIgZWFjaCByZXNxdWVzdCB0byB0aGUgZGIuXHJcbiAgICBCdXQgaW4gZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnQgaXQncyBub3QgbmVjZXNzYXJ5IHRvIGRpc2Nvbm5lY3QgaW4gb3JkZXIgdG8gbm90IG92ZXIgY2hhcmdlIHJlc291cmNlcy5cclxuXHJcbiovfSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWNvbm5lY3RcIik7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmV2aWV3U2NoZW1hIiwiU2NoZW1hIiwidXNlciIsInR5cGUiLCJUeXBlcyIsIk9iamVjdElkIiwicmVmIiwicmVxdWlyZWQiLCJuYW1lIiwiU3RyaW5nIiwicmF0aW5nIiwiTnVtYmVyIiwiZGVmYXVsdCIsImNvbW1lbnQiLCJ0aW1lc3RhbXBzIiwicHJvZHVjdFNjaGVtYSIsInNsdWciLCJ1bmlxdWUiLCJjYXRlZ29yeSIsImltYWdlIiwicHJpY2UiLCJicmFuZCIsIm51bVJldmlld3MiLCJjb3VudEluU3RvY2siLCJkZXNjcmlwdGlvbiIsInJldmlld3MiLCJmZWF0dXJlZEltYWdlIiwiaXNGZWF0dXJlZCIsIkJvb2xlYW4iLCJQcm9kdWN0IiwibW9kZWxzIiwibW9kZWwiLCJuYyIsImlzQWRtaW4iLCJpc0F1dGgiLCJkYiIsImhhbmRsZXIiLCJ1c2UiLCJnZXQiLCJyZXEiLCJyZXMiLCJjb25uZWN0IiwicHJvZHVjdCIsImZpbmRCeUlkIiwicXVlcnkiLCJpZCIsImRpc2Nvbm5lY3QiLCJzZW5kIiwicHV0IiwiYm9keSIsInNhdmUiLCJtZXNzYWdlIiwic3RhdHVzIiwiZGVsZXRlIiwicmVtb3ZlIiwiand0Iiwic2lnblRva2VuIiwic2lnbiIsIl9pZCIsImVtYWlsIiwicHJvY2VzcyIsImVudiIsIkpXVF9TRUNSRVQiLCJleHBpcmVzSW4iLCJuZXh0IiwiYXV0aG9yaXphdGlvbiIsImhlYWRlcnMiLCJ0b2tlbiIsInNsaWNlIiwibGVuZ3RoIiwidmVyaWZ5IiwiZXJyIiwiZGVjb2RlIiwiY29ubmVjdGlvbiIsImlzQ29ubmVjdGVkIiwiY29uc29sZSIsImxvZyIsImNvbm5lY3Rpb25zIiwicmVhZHlTdGF0ZSIsIk1PTkdPREJfVVJJIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwidGhlbiIsImNvbnZlcnREb2NUb09iaiIsImRvYyIsInRvU3RyaW5nIiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0Il0sInNvdXJjZVJvb3QiOiIifQ==