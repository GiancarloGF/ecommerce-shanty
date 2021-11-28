"use strict";
(() => {
var exports = {};
exports.id = "pages/api/admin/summary";
exports.ids = ["pages/api/admin/summary"];
exports.modules = {

/***/ "./models/Order.js":
/*!*************************!*\
  !*** ./models/Order.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const orderSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
  user: {
    type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.Types.ObjectId),
    ref: 'User',
    required: true
  },
  orderItems: [{
    name: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  }],
  shippingAddress: {
    fullName: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    postalCode: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    }
  },
  paymentMethod: {
    type: String,
    required: true
  },
  paymentResult: {
    id: String,
    status: String,
    email_address: String
  },
  itemsPrice: {
    type: Number,
    required: true
  },
  shippingPrice: {
    type: Number,
    required: true
  },
  taxPrice: {
    type: Number,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  },
  isPaid: {
    type: Boolean,
    required: true,
    default: false
  },
  isDelivered: {
    type: Boolean,
    required: true,
    default: false
  },
  paidAt: {
    type: Date
  },
  deliveredAt: {
    type: Date
  }
}, {
  timestamps: true
});
const Order = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Order) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Order', orderSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Order);

/***/ }),

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

/***/ "./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ "mongoose");
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  }
}, {
  timestamps: true
});
const User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.User) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('User', userSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);

/***/ }),

/***/ "./pages/api/admin/summary.js":
/*!************************************!*\
  !*** ./pages/api/admin/summary.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ "next-connect");
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var models_Order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! models/Order */ "./models/Order.js");
/* harmony import */ var models_Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! models/Product */ "./models/Product.js");
/* harmony import */ var models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! models/User */ "./models/User.js");
/* harmony import */ var utils_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/auth */ "./utils/auth.js");
/* harmony import */ var utils_db__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/db */ "./utils/db.js");
/* harmony import */ var utils_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/error */ "./utils/error.js");







const handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()({
  onError: utils_error__WEBPACK_IMPORTED_MODULE_6__.onError
});
handler.use(utils_auth__WEBPACK_IMPORTED_MODULE_4__.isAuth, utils_auth__WEBPACK_IMPORTED_MODULE_4__.isAdmin);
handler.get(async (req, res) => {
  await utils_db__WEBPACK_IMPORTED_MODULE_5__.default.connect();
  const ordersCount = await models_Order__WEBPACK_IMPORTED_MODULE_1__.default.countDocuments();
  const productsCount = await models_Product__WEBPACK_IMPORTED_MODULE_2__.default.countDocuments();
  const usersCount = await models_User__WEBPACK_IMPORTED_MODULE_3__.default.countDocuments();
  const ordersPriceGroup = await models_Order__WEBPACK_IMPORTED_MODULE_1__.default.aggregate([{
    $group: {
      _id: null,
      sales: {
        $sum: "$totalPrice"
      }
    }
  }]);
  const ordersPrice = ordersPriceGroup.length > 0 ? ordersPriceGroup[0].sales : 0;
  const salesData = await models_Order__WEBPACK_IMPORTED_MODULE_1__.default.aggregate([{
    $group: {
      _id: {
        $dateToString: {
          format: "%Y-%m",
          date: "$createdAt"
        }
      },
      totalSales: {
        $sum: "$totalPrice"
      }
    }
  }]);
  await utils_db__WEBPACK_IMPORTED_MODULE_5__.default.disconnect();
  res.send({
    ordersCount,
    productsCount,
    usersCount,
    ordersPrice,
    salesData
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
var __webpack_exports__ = (__webpack_exec__("./pages/api/admin/summary.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUhEOzs7Ozs7Ozs7Ozs7QUNWQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tLW5leHRqcy8uL21vZGVscy9PcmRlci5qcyIsIndlYnBhY2s6Ly9lY29tLW5leHRqcy8uL21vZGVscy9Qcm9kdWN0LmpzIiwid2VicGFjazovL2Vjb20tbmV4dGpzLy4vbW9kZWxzL1VzZXIuanMiLCJ3ZWJwYWNrOi8vZWNvbS1uZXh0anMvLi9wYWdlcy9hcGkvYWRtaW4vc3VtbWFyeS5qcyIsIndlYnBhY2s6Ly9lY29tLW5leHRqcy8uL3V0aWxzL2F1dGguanMiLCJ3ZWJwYWNrOi8vZWNvbS1uZXh0anMvLi91dGlscy9kYi5qcyIsIndlYnBhY2s6Ly9lY29tLW5leHRqcy8uL3V0aWxzL2Vycm9yLmpzIiwid2VicGFjazovL2Vjb20tbmV4dGpzL2V4dGVybmFsIFwianNvbndlYnRva2VuXCIiLCJ3ZWJwYWNrOi8vZWNvbS1uZXh0anMvZXh0ZXJuYWwgXCJtb25nb29zZVwiIiwid2VicGFjazovL2Vjb20tbmV4dGpzL2V4dGVybmFsIFwibmV4dC1jb25uZWN0XCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuXHJcbmNvbnN0IG9yZGVyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcclxuICB7XHJcbiAgICB1c2VyOiB7IHR5cGU6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCwgcmVmOiAnVXNlcicsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBvcmRlckl0ZW1zOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgICAgICBxdWFudGl0eTogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICAgICAgaW1hZ2U6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgICAgIHByaWNlOiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBzaGlwcGluZ0FkZHJlc3M6IHtcclxuICAgICAgZnVsbE5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgICBhZGRyZXNzOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgICAgY2l0eTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICAgIHBvc3RhbENvZGU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgICBjb3VudHJ5OiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIH0sXHJcbiAgICBwYXltZW50TWV0aG9kOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIHBheW1lbnRSZXN1bHQ6IHsgaWQ6IFN0cmluZywgc3RhdHVzOiBTdHJpbmcsIGVtYWlsX2FkZHJlc3M6IFN0cmluZyB9LFxyXG4gICAgaXRlbXNQcmljZTogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBzaGlwcGluZ1ByaWNlOiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIHRheFByaWNlOiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIHRvdGFsUHJpY2U6IHsgdHlwZTogTnVtYmVyLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgaXNQYWlkOiB7IHR5cGU6IEJvb2xlYW4sIHJlcXVpcmVkOiB0cnVlLCBkZWZhdWx0OiBmYWxzZSB9LFxyXG4gICAgaXNEZWxpdmVyZWQ6IHsgdHlwZTogQm9vbGVhbiwgcmVxdWlyZWQ6IHRydWUsIGRlZmF1bHQ6IGZhbHNlIH0sXHJcbiAgICBwYWlkQXQ6IHsgdHlwZTogRGF0ZSB9LFxyXG4gICAgZGVsaXZlcmVkQXQ6IHsgdHlwZTogRGF0ZSB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGltZXN0YW1wczogdHJ1ZSxcclxuICB9XHJcbik7XHJcblxyXG5jb25zdCBPcmRlciA9IG1vbmdvb3NlLm1vZGVscy5PcmRlciB8fCBtb25nb29zZS5tb2RlbCgnT3JkZXInLCBvcmRlclNjaGVtYSk7XHJcbmV4cG9ydCBkZWZhdWx0IE9yZGVyOyIsImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCBwcm9kdWN0U2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcclxuICB7XHJcbiAgICBuYW1lOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIHNsdWc6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgdW5pcXVlOiB0cnVlIH0sXHJcbiAgICBjYXRlZ29yeTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBpbWFnZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBwcmljZTogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBicmFuZDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICByYXRpbmc6IHsgdHlwZTogTnVtYmVyLCByZXF1aXJlZDogdHJ1ZSwgZGVmYXVsdDogMCB9LFxyXG4gICAgbnVtUmV2aWV3czogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlLCBkZWZhdWx0OiAwIH0sXHJcbiAgICBjb3VudEluU3RvY2s6IHsgdHlwZTogTnVtYmVyLCByZXF1aXJlZDogdHJ1ZSwgZGVmYXVsdDogMCB9LFxyXG4gICAgZGVzY3JpcHRpb246IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGltZXN0YW1wczogdHJ1ZSxcclxuICB9XHJcbik7XHJcblxyXG4vLyBwcm9kdWN0U2NoZW1hLnNldCgndG9KU09OJywge1xyXG4vLyAgIHRyYW5zZm9ybTogKGRvY3VtZW50LCByZXR1cm5lZE9iamVjdCkgPT4ge1xyXG4vLyAgICAgcmV0dXJuZWRPYmplY3QuaWQgPSByZXR1cm5lZE9iamVjdC5faWQudG9TdHJpbmcoKVxyXG4vLyAgICAgZGVsZXRlIHJldHVybmVkT2JqZWN0Ll9pZFxyXG4vLyAgICAgZGVsZXRlIHJldHVybmVkT2JqZWN0Ll9fdlxyXG4vLyAgIH1cclxuLy8gfSlcclxuXHJcbmNvbnN0IFByb2R1Y3QgPVxyXG4gIG1vbmdvb3NlLm1vZGVscy5Qcm9kdWN0IHx8IG1vbmdvb3NlLm1vZGVsKCdQcm9kdWN0JywgcHJvZHVjdFNjaGVtYSk7XHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3Q7XHJcblxyXG5cclxuXHJcbi8vIElmIGl0IGRvZXMgZXhpc3QsIHNldCBpdHMgdmFsdWUgZW4gUHJvZHVjdCwgb3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBtb2RlbC5cclxuLy9UbyBzdG9yZSB0aGUgZGF0ZSB3aGVuIGEgcHJvZHVjdCBpcyBjcmVhdGVkLiIsImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcclxuICB7XHJcbiAgICBuYW1lOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIGVtYWlsOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHVuaXF1ZTogdHJ1ZSB9LFxyXG4gICAgcGFzc3dvcmQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgaXNBZG1pbjogeyB0eXBlOiBCb29sZWFuLCByZXF1aXJlZDogdHJ1ZSwgZGVmYXVsdDogZmFsc2UgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpbWVzdGFtcHM6IHRydWUsXHJcbiAgfVxyXG4pO1xyXG5cclxuY29uc3QgVXNlciA9IG1vbmdvb3NlLm1vZGVscy5Vc2VyIHx8IG1vbmdvb3NlLm1vZGVsKCdVc2VyJywgdXNlclNjaGVtYSk7XHJcbmV4cG9ydCBkZWZhdWx0IFVzZXI7IiwiaW1wb3J0IG5jIGZyb20gXCJuZXh0LWNvbm5lY3RcIjtcclxuaW1wb3J0IE9yZGVyIGZyb20gXCJtb2RlbHMvT3JkZXJcIjtcclxuaW1wb3J0IFByb2R1Y3QgZnJvbSBcIm1vZGVscy9Qcm9kdWN0XCI7XHJcbmltcG9ydCBVc2VyIGZyb20gXCJtb2RlbHMvVXNlclwiO1xyXG5pbXBvcnQgeyBpc0F1dGgsIGlzQWRtaW4gfSBmcm9tIFwidXRpbHMvYXV0aFwiO1xyXG5pbXBvcnQgZGIgZnJvbSBcInV0aWxzL2RiXCI7XHJcbmltcG9ydCB7IG9uRXJyb3IgfSBmcm9tIFwidXRpbHMvZXJyb3JcIjtcclxuXHJcbmNvbnN0IGhhbmRsZXIgPSBuYyh7XHJcbiAgb25FcnJvcixcclxufSk7XHJcbmhhbmRsZXIudXNlKGlzQXV0aCwgaXNBZG1pbik7XHJcblxyXG5oYW5kbGVyLmdldChhc3luYyAocmVxLCByZXMpID0+IHtcclxuICBhd2FpdCBkYi5jb25uZWN0KCk7XHJcbiAgY29uc3Qgb3JkZXJzQ291bnQgPSBhd2FpdCBPcmRlci5jb3VudERvY3VtZW50cygpO1xyXG4gIGNvbnN0IHByb2R1Y3RzQ291bnQgPSBhd2FpdCBQcm9kdWN0LmNvdW50RG9jdW1lbnRzKCk7XHJcbiAgY29uc3QgdXNlcnNDb3VudCA9IGF3YWl0IFVzZXIuY291bnREb2N1bWVudHMoKTtcclxuICBjb25zdCBvcmRlcnNQcmljZUdyb3VwID0gYXdhaXQgT3JkZXIuYWdncmVnYXRlKFtcclxuICAgIHtcclxuICAgICAgJGdyb3VwOiB7XHJcbiAgICAgICAgX2lkOiBudWxsLFxyXG4gICAgICAgIHNhbGVzOiB7ICRzdW06IFwiJHRvdGFsUHJpY2VcIiB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICBdKTtcclxuXHJcbiAgY29uc3Qgb3JkZXJzUHJpY2UgPVxyXG4gICAgb3JkZXJzUHJpY2VHcm91cC5sZW5ndGggPiAwID8gb3JkZXJzUHJpY2VHcm91cFswXS5zYWxlcyA6IDA7XHJcbiAgY29uc3Qgc2FsZXNEYXRhID0gYXdhaXQgT3JkZXIuYWdncmVnYXRlKFtcclxuICAgIHtcclxuICAgICAgJGdyb3VwOiB7XHJcbiAgICAgICAgX2lkOiB7ICRkYXRlVG9TdHJpbmc6IHsgZm9ybWF0OiBcIiVZLSVtXCIsIGRhdGU6IFwiJGNyZWF0ZWRBdFwiIH0gfSxcclxuICAgICAgICB0b3RhbFNhbGVzOiB7ICRzdW06IFwiJHRvdGFsUHJpY2VcIiB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICBdKTtcclxuXHJcbiAgYXdhaXQgZGIuZGlzY29ubmVjdCgpO1xyXG4gIHJlcy5zZW5kKHsgb3JkZXJzQ291bnQsIHByb2R1Y3RzQ291bnQsIHVzZXJzQ291bnQsIG9yZGVyc1ByaWNlLCBzYWxlc0RhdGEgfSk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcclxuIiwiLy9Gb3IgdXNlciBhdXRoZW50aWNhdGlvbi5cclxuXHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcclxuXHJcbmNvbnN0IHNpZ25Ub2tlbiA9ICh1c2VyKSA9PiB7XHJcbiAgcmV0dXJuIGp3dC5zaWduKFxyXG4gICAge1xyXG4gICAgICBfaWQ6IHVzZXIuX2lkLFxyXG4gICAgICBuYW1lOiB1c2VyLm5hbWUsXHJcbiAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICBpc0FkbWluOiB1c2VyLmlzQWRtaW4sXHJcbiAgICB9LFxyXG5cclxuICAgIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQsXHJcbiAgICB7XHJcbiAgICAgIGV4cGlyZXNJbjogJzMwZCcsXHJcbiAgICB9XHJcbiAgKTtcclxufTtcclxuXHJcbi8vTWlkZGxld2FyZSB0byB2YWxpZGF0ZSBpZiB1c2VyIGlzIGF1dGhlbnRpY2F0ZWQgYnkgdXNpbmcgYSB0b2tlbiBpZiBpdCBpcyBwcm92aWRlZCBvbiB0aGUgcmVxdWVzdC5cclxuY29uc3QgaXNBdXRoID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgY29uc3QgeyBhdXRob3JpemF0aW9uIH0gPSByZXEuaGVhZGVycztcclxuICBpZiAoYXV0aG9yaXphdGlvbikge1xyXG4gICAgY29uc3QgdG9rZW4gPSBhdXRob3JpemF0aW9uLnNsaWNlKDcsIGF1dGhvcml6YXRpb24ubGVuZ3RoKTsvLyBCZWFyZXIgeHh4ID0+IHh4eFxyXG4gICAgand0LnZlcmlmeSh0b2tlbiwgcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCwgKGVyciwgZGVjb2RlKSA9PiB7XHJcbiAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICByZXMuc3RhdHVzKDQwMSkuc2VuZCh7IG1lc3NhZ2U6ICdUb2tlbiBpcyBub3QgdmFsaWQnIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlcS51c2VyID0gZGVjb2RlOyAvLyB1c2VyIHByb3BlcnR5IGlzIGFkZGVkIHRvIHJlcSBhbmQgdGhlIGRlY29kZWQgZGF0YSBpcyBhc3NpZ24gdG8gaXQuXHJcbiAgICAgICAgbmV4dCgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcy5zdGF0dXMoNDAxKS5zZW5kKHsgbWVzc2FnZTogJ1Rva2VuIGlzIG5vdCBzdXBwaWxlZCcgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgaXNBZG1pbiA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gIGlmIChyZXEudXNlci5pc0FkbWluKSB7XHJcbiAgICBuZXh0KCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcy5zdGF0dXMoNDAxKS5zZW5kKHsgbWVzc2FnZTogJ1VzZXIgaXMgbm90IGFkbWluJyB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgeyBzaWduVG9rZW4sIGlzQXV0aCwgaXNBZG1pbiB9OyIsIi8vIHJlcXVpcmUoJ2RvdGVudicpLmNvbmZpZygpXHJcbmltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCBjb25uZWN0aW9uID0ge307XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjb25uZWN0KCkge1xyXG4gIGlmIChjb25uZWN0aW9uLmlzQ29ubmVjdGVkKSB7XHJcbiAgICBjb25zb2xlLmxvZygnYWxyZWFkeSBjb25uZWN0ZWQnKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgaWYgKG1vbmdvb3NlLmNvbm5lY3Rpb25zLmxlbmd0aCA+IDApIHtcclxuICAgIGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPSBtb25nb29zZS5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlO1xyXG4gICAgaWYgKGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPT09IDEpIHtcclxuICAgICAgY29uc29sZS5sb2coJ3VzZSBwcmV2aW91cyBjb25uZWN0aW9uJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGF3YWl0IG1vbmdvb3NlLmRpc2Nvbm5lY3QoKTtcclxuICB9XHJcbiAgY29uc29sZS5sb2coJ21lIGNvbmVjdGFyZScpXHJcbiAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSSSwge1xyXG4gICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxyXG4gICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlXHJcbiAgfSkudGhlbigoZGIpPT57XHJcbiAgICBjb25zb2xlLmxvZygnbmV3IGNvbm5lY3Rpb24nKTtcclxuICAgIGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPSBkYi5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlO1xyXG4gIH0pXHJcblxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBkaXNjb25uZWN0KCkge1xyXG4gIGlmIChjb25uZWN0aW9uLmlzQ29ubmVjdGVkKSB7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICBhd2FpdCBtb25nb29zZS5kaXNjb25uZWN0KCk7XHJcbiAgICAgIGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPSBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdub3QgZGlzY29ubmVjdGVkJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vL2RiIHJldHVybnMgZGF0YSBpbiBvdGhlciBmb3JtYXQgdGhhdCBpcyBub3QgYSBqYXZhc2NyaXB0IGRhdGEsIHNvIHdlIG5lZWQgdG8gY29udmVydCB0aGF0IGRhdGEgdG8gc3RyaW5nLlxyXG5mdW5jdGlvbiBjb252ZXJ0RG9jVG9PYmooZG9jKSB7XHJcbiAgZG9jLl9pZCA9IGRvYy5faWQudG9TdHJpbmcoKTtcclxuICBkb2MuY3JlYXRlZEF0ID0gZG9jLmNyZWF0ZWRBdC50b1N0cmluZygpO1xyXG4gIGRvYy51cGRhdGVkQXQgPSBkb2MudXBkYXRlZEF0LnRvU3RyaW5nKCk7XHJcbiAgcmV0dXJuIGRvYztcclxufVxyXG5cclxuY29uc3QgZGIgPSB7IGNvbm5lY3QsIGRpc2Nvbm5lY3QsIGNvbnZlcnREb2NUb09iaiB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGI7XHJcblxyXG4vLyBcclxuLy8gY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpXHJcblxyXG4vLyBjb25zdCB1cmwgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSVxyXG5cclxuLy8gY29uc29sZS5sb2coJ2Nvbm5lY3RpbmcgdG8nLCB1cmwpXHJcblxyXG4vLyBtb25nb29zZS5jb25uZWN0KHVybCwgeyB1c2VOZXdVcmxQYXJzZXI6IHRydWUsIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSB9KVxyXG4vLyAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbi8vICAgICBjb25zb2xlLmxvZygnY29ubmVjdGVkIHRvIE1vbmdvREInKVxyXG4vLyAgIH0pXHJcbi8vICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4vLyAgICAgY29uc29sZS5sb2coJ2Vycm9yIGNvbm5lY3RpbmcgdG8gTW9uZ29EQjonLCBlcnJvci5tZXNzYWdlKVxyXG4vLyAgIH0pXHJcbiAgXHJcblxyXG5cclxuey8qXHJcbigxKSBjb25uZWN0aW9ucyBpcyBhbiBhcnJheSB0aGF0IGNvbnRhaW5zIGFsbCBwcmV2aW91cyBjb25uZWN0aW9ucyB0byB0aGUgZGF0YWJhc2VcclxuXHJcbigyKSBJbiBwcm9kdWN0aW9uIGVudmlyb25tZW50LCB0aGUgY29ubmVjdGlvbiBtdXN0IGJlIGRpc2Nvbm5lY3RlZCBhZnRlciBlYWNoIHJlc3F1ZXN0IHRvIHRoZSBkYi5cclxuICAgIEJ1dCBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudCBpdCdzIG5vdCBuZWNlc3NhcnkgdG8gZGlzY29ubmVjdCBpbiBvcmRlciB0byBub3Qgb3ZlciBjaGFyZ2UgcmVzb3VyY2VzLlxyXG5cclxuKi99IiwiXHJcbmltcG9ydCBkYiBmcm9tICcuL2RiJztcclxuXHJcbmNvbnN0IGdldEVycm9yID0gKGVycikgPT5cclxuICBlcnIucmVzcG9uc2UgJiYgZXJyLnJlc3BvbnNlLmRhdGEgJiYgZXJyLnJlc3BvbnNlLmRhdGEubWVzc2FnZVxyXG4gICAgPyBlcnIucmVzcG9uc2UuZGF0YS5tZXNzYWdlXHJcbiAgICA6IGVyci5tZXNzYWdlO1xyXG5cclxuXHJcbi8vVG8gaGFuZGxlIGVycm9zIGluIG1pZGRsZXdhcmUgaW4gYmFja2VuZC5cclxuY29uc3Qgb25FcnJvciA9IGFzeW5jIChlcnIsIHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgYXdhaXQgZGIuZGlzY29ubmVjdCgpO1xyXG4gIHJlcy5zdGF0dXMoNTAwKS5zZW5kKHsgbWVzc2FnZTogZXJyLnRvU3RyaW5nKCkgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBnZXRFcnJvciwgb25FcnJvciB9OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWNvbm5lY3RcIik7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwib3JkZXJTY2hlbWEiLCJTY2hlbWEiLCJ1c2VyIiwidHlwZSIsIlR5cGVzIiwiT2JqZWN0SWQiLCJyZWYiLCJyZXF1aXJlZCIsIm9yZGVySXRlbXMiLCJuYW1lIiwiU3RyaW5nIiwicXVhbnRpdHkiLCJOdW1iZXIiLCJpbWFnZSIsInByaWNlIiwic2hpcHBpbmdBZGRyZXNzIiwiZnVsbE5hbWUiLCJhZGRyZXNzIiwiY2l0eSIsInBvc3RhbENvZGUiLCJjb3VudHJ5IiwicGF5bWVudE1ldGhvZCIsInBheW1lbnRSZXN1bHQiLCJpZCIsInN0YXR1cyIsImVtYWlsX2FkZHJlc3MiLCJpdGVtc1ByaWNlIiwic2hpcHBpbmdQcmljZSIsInRheFByaWNlIiwidG90YWxQcmljZSIsImlzUGFpZCIsIkJvb2xlYW4iLCJkZWZhdWx0IiwiaXNEZWxpdmVyZWQiLCJwYWlkQXQiLCJEYXRlIiwiZGVsaXZlcmVkQXQiLCJ0aW1lc3RhbXBzIiwiT3JkZXIiLCJtb2RlbHMiLCJtb2RlbCIsInByb2R1Y3RTY2hlbWEiLCJzbHVnIiwidW5pcXVlIiwiY2F0ZWdvcnkiLCJicmFuZCIsInJhdGluZyIsIm51bVJldmlld3MiLCJjb3VudEluU3RvY2siLCJkZXNjcmlwdGlvbiIsIlByb2R1Y3QiLCJ1c2VyU2NoZW1hIiwiZW1haWwiLCJwYXNzd29yZCIsImlzQWRtaW4iLCJVc2VyIiwibmMiLCJpc0F1dGgiLCJkYiIsIm9uRXJyb3IiLCJoYW5kbGVyIiwidXNlIiwiZ2V0IiwicmVxIiwicmVzIiwiY29ubmVjdCIsIm9yZGVyc0NvdW50IiwiY291bnREb2N1bWVudHMiLCJwcm9kdWN0c0NvdW50IiwidXNlcnNDb3VudCIsIm9yZGVyc1ByaWNlR3JvdXAiLCJhZ2dyZWdhdGUiLCIkZ3JvdXAiLCJfaWQiLCJzYWxlcyIsIiRzdW0iLCJvcmRlcnNQcmljZSIsImxlbmd0aCIsInNhbGVzRGF0YSIsIiRkYXRlVG9TdHJpbmciLCJmb3JtYXQiLCJkYXRlIiwidG90YWxTYWxlcyIsImRpc2Nvbm5lY3QiLCJzZW5kIiwiand0Iiwic2lnblRva2VuIiwic2lnbiIsInByb2Nlc3MiLCJlbnYiLCJKV1RfU0VDUkVUIiwiZXhwaXJlc0luIiwibmV4dCIsImF1dGhvcml6YXRpb24iLCJoZWFkZXJzIiwidG9rZW4iLCJzbGljZSIsInZlcmlmeSIsImVyciIsImRlY29kZSIsIm1lc3NhZ2UiLCJjb25uZWN0aW9uIiwiaXNDb25uZWN0ZWQiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIiwiTU9OR09EQl9VUkkiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJ0aGVuIiwiY29udmVydERvY1RvT2JqIiwiZG9jIiwidG9TdHJpbmciLCJjcmVhdGVkQXQiLCJ1cGRhdGVkQXQiLCJnZXRFcnJvciIsInJlc3BvbnNlIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=