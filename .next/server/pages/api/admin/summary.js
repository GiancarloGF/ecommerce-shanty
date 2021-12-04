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
    },
    location: {
      lat: String,
      lng: String,
      address: String,
      name: String,
      vicinity: String,
      googleAddressId: String
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb20tbmV4dGpzLy4vbW9kZWxzL09yZGVyLmpzIiwid2VicGFjazovL2Vjb20tbmV4dGpzLy4vbW9kZWxzL1Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vZWNvbS1uZXh0anMvLi9tb2RlbHMvVXNlci5qcyIsIndlYnBhY2s6Ly9lY29tLW5leHRqcy8uL3BhZ2VzL2FwaS9hZG1pbi9zdW1tYXJ5LmpzIiwid2VicGFjazovL2Vjb20tbmV4dGpzLy4vdXRpbHMvYXV0aC5qcyIsIndlYnBhY2s6Ly9lY29tLW5leHRqcy8uL3V0aWxzL2RiLmpzIiwid2VicGFjazovL2Vjb20tbmV4dGpzLy4vdXRpbHMvZXJyb3IuanMiLCJ3ZWJwYWNrOi8vZWNvbS1uZXh0anMvZXh0ZXJuYWwgXCJqc29ud2VidG9rZW5cIiIsIndlYnBhY2s6Ly9lY29tLW5leHRqcy9leHRlcm5hbCBcIm1vbmdvb3NlXCIiLCJ3ZWJwYWNrOi8vZWNvbS1uZXh0anMvZXh0ZXJuYWwgXCJuZXh0LWNvbm5lY3RcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuY29uc3Qgb3JkZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxyXG4gIHtcclxuICAgIHVzZXI6IHsgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLCByZWY6ICdVc2VyJywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIG9yZGVySXRlbXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgICAgIHF1YW50aXR5OiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgICAgICBpbWFnZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICAgICAgcHJpY2U6IHsgdHlwZTogTnVtYmVyLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIHNoaXBwaW5nQWRkcmVzczoge1xyXG4gICAgICBmdWxsTmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICAgIGFkZHJlc3M6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgICBjaXR5OiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgICAgcG9zdGFsQ29kZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICAgIGNvdW50cnk6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgICBsb2NhdGlvbjoge1xyXG4gICAgICAgIGxhdDogU3RyaW5nLFxyXG4gICAgICAgIGxuZzogU3RyaW5nLFxyXG4gICAgICAgIGFkZHJlc3M6IFN0cmluZyxcclxuICAgICAgICBuYW1lOiBTdHJpbmcsXHJcbiAgICAgICAgdmljaW5pdHk6IFN0cmluZyxcclxuICAgICAgICBnb29nbGVBZGRyZXNzSWQ6IFN0cmluZyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBwYXltZW50TWV0aG9kOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIHBheW1lbnRSZXN1bHQ6IHsgaWQ6IFN0cmluZywgc3RhdHVzOiBTdHJpbmcsIGVtYWlsX2FkZHJlc3M6IFN0cmluZyB9LFxyXG4gICAgaXRlbXNQcmljZTogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBzaGlwcGluZ1ByaWNlOiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIHRheFByaWNlOiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIHRvdGFsUHJpY2U6IHsgdHlwZTogTnVtYmVyLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgaXNQYWlkOiB7IHR5cGU6IEJvb2xlYW4sIHJlcXVpcmVkOiB0cnVlLCBkZWZhdWx0OiBmYWxzZSB9LFxyXG4gICAgaXNEZWxpdmVyZWQ6IHsgdHlwZTogQm9vbGVhbiwgcmVxdWlyZWQ6IHRydWUsIGRlZmF1bHQ6IGZhbHNlIH0sXHJcbiAgICBwYWlkQXQ6IHsgdHlwZTogRGF0ZSB9LFxyXG4gICAgZGVsaXZlcmVkQXQ6IHsgdHlwZTogRGF0ZSB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGltZXN0YW1wczogdHJ1ZSxcclxuICB9XHJcbik7XHJcblxyXG5jb25zdCBPcmRlciA9IG1vbmdvb3NlLm1vZGVscy5PcmRlciB8fCBtb25nb29zZS5tb2RlbCgnT3JkZXInLCBvcmRlclNjaGVtYSk7XHJcbmV4cG9ydCBkZWZhdWx0IE9yZGVyOyIsImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCByZXZpZXdTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxyXG4gIHtcclxuICAgIHVzZXI6IHsgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLCByZWY6ICdVc2VyJywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIG5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgcmF0aW5nOiB7IHR5cGU6IE51bWJlciwgZGVmYXVsdDogMCB9LFxyXG4gICAgY29tbWVudDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aW1lc3RhbXBzOiB0cnVlLFxyXG4gIH1cclxuKTtcclxuXHJcbmNvbnN0IHByb2R1Y3RTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxyXG4gIHtcclxuICAgIG5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgc2x1ZzogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB1bmlxdWU6IHRydWUgfSxcclxuICAgIGNhdGVnb3J5OiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIGltYWdlOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIHByaWNlOiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIGJyYW5kOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIHJhdGluZzogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlLCBkZWZhdWx0OiAwIH0sXHJcbiAgICBudW1SZXZpZXdzOiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUsIGRlZmF1bHQ6IDAgfSxcclxuICAgIGNvdW50SW5TdG9jazogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlLCBkZWZhdWx0OiAwIH0sXHJcbiAgICBkZXNjcmlwdGlvbjogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICByZXZpZXdzOiBbcmV2aWV3U2NoZW1hXSxcclxuICAgIGZlYXR1cmVkSW1hZ2U6IHsgdHlwZTogU3RyaW5nIH0sXHJcbiAgICBpc0ZlYXR1cmVkOiB7IHR5cGU6IEJvb2xlYW4sIHJlcXVpcmVkOiB0cnVlLCBkZWZhdWx0OiBmYWxzZSB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGltZXN0YW1wczogdHJ1ZSxcclxuICB9XHJcbik7XHJcblxyXG4vLyBwcm9kdWN0U2NoZW1hLnNldCgndG9KU09OJywge1xyXG4vLyAgIHRyYW5zZm9ybTogKGRvY3VtZW50LCByZXR1cm5lZE9iamVjdCkgPT4ge1xyXG4vLyAgICAgcmV0dXJuZWRPYmplY3QuaWQgPSByZXR1cm5lZE9iamVjdC5faWQudG9TdHJpbmcoKVxyXG4vLyAgICAgZGVsZXRlIHJldHVybmVkT2JqZWN0Ll9pZFxyXG4vLyAgICAgZGVsZXRlIHJldHVybmVkT2JqZWN0Ll9fdlxyXG4vLyAgIH1cclxuLy8gfSlcclxuXHJcbmNvbnN0IFByb2R1Y3QgPVxyXG4gIG1vbmdvb3NlLm1vZGVscy5Qcm9kdWN0IHx8IG1vbmdvb3NlLm1vZGVsKCdQcm9kdWN0JywgcHJvZHVjdFNjaGVtYSk7XHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3Q7XHJcblxyXG5cclxuXHJcbi8vIElmIGl0IGRvZXMgZXhpc3QsIHNldCBpdHMgdmFsdWUgZW4gUHJvZHVjdCwgb3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBtb2RlbC5cclxuLy9UbyBzdG9yZSB0aGUgZGF0ZSB3aGVuIGEgcHJvZHVjdCBpcyBjcmVhdGVkLiIsImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYShcclxuICB7XHJcbiAgICBuYW1lOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIGVtYWlsOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHVuaXF1ZTogdHJ1ZSB9LFxyXG4gICAgcGFzc3dvcmQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgaXNBZG1pbjogeyB0eXBlOiBCb29sZWFuLCByZXF1aXJlZDogdHJ1ZSwgZGVmYXVsdDogZmFsc2UgfSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpbWVzdGFtcHM6IHRydWUsXHJcbiAgfVxyXG4pO1xyXG5cclxuY29uc3QgVXNlciA9IG1vbmdvb3NlLm1vZGVscy5Vc2VyIHx8IG1vbmdvb3NlLm1vZGVsKCdVc2VyJywgdXNlclNjaGVtYSk7XHJcbmV4cG9ydCBkZWZhdWx0IFVzZXI7IiwiaW1wb3J0IG5jIGZyb20gXCJuZXh0LWNvbm5lY3RcIjtcclxuaW1wb3J0IE9yZGVyIGZyb20gXCJtb2RlbHMvT3JkZXJcIjtcclxuaW1wb3J0IFByb2R1Y3QgZnJvbSBcIm1vZGVscy9Qcm9kdWN0XCI7XHJcbmltcG9ydCBVc2VyIGZyb20gXCJtb2RlbHMvVXNlclwiO1xyXG5pbXBvcnQgeyBpc0F1dGgsIGlzQWRtaW4gfSBmcm9tIFwidXRpbHMvYXV0aFwiO1xyXG5pbXBvcnQgZGIgZnJvbSBcInV0aWxzL2RiXCI7XHJcbmltcG9ydCB7IG9uRXJyb3IgfSBmcm9tIFwidXRpbHMvZXJyb3JcIjtcclxuXHJcbmNvbnN0IGhhbmRsZXIgPSBuYyh7XHJcbiAgb25FcnJvcixcclxufSk7XHJcbmhhbmRsZXIudXNlKGlzQXV0aCwgaXNBZG1pbik7XHJcblxyXG5oYW5kbGVyLmdldChhc3luYyAocmVxLCByZXMpID0+IHtcclxuICBhd2FpdCBkYi5jb25uZWN0KCk7XHJcbiAgY29uc3Qgb3JkZXJzQ291bnQgPSBhd2FpdCBPcmRlci5jb3VudERvY3VtZW50cygpO1xyXG4gIGNvbnN0IHByb2R1Y3RzQ291bnQgPSBhd2FpdCBQcm9kdWN0LmNvdW50RG9jdW1lbnRzKCk7XHJcbiAgY29uc3QgdXNlcnNDb3VudCA9IGF3YWl0IFVzZXIuY291bnREb2N1bWVudHMoKTtcclxuICBjb25zdCBvcmRlcnNQcmljZUdyb3VwID0gYXdhaXQgT3JkZXIuYWdncmVnYXRlKFtcclxuICAgIHtcclxuICAgICAgJGdyb3VwOiB7XHJcbiAgICAgICAgX2lkOiBudWxsLFxyXG4gICAgICAgIHNhbGVzOiB7ICRzdW06IFwiJHRvdGFsUHJpY2VcIiB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICBdKTtcclxuXHJcbiAgY29uc3Qgb3JkZXJzUHJpY2UgPVxyXG4gICAgb3JkZXJzUHJpY2VHcm91cC5sZW5ndGggPiAwID8gb3JkZXJzUHJpY2VHcm91cFswXS5zYWxlcyA6IDA7XHJcbiAgY29uc3Qgc2FsZXNEYXRhID0gYXdhaXQgT3JkZXIuYWdncmVnYXRlKFtcclxuICAgIHtcclxuICAgICAgJGdyb3VwOiB7XHJcbiAgICAgICAgX2lkOiB7ICRkYXRlVG9TdHJpbmc6IHsgZm9ybWF0OiBcIiVZLSVtXCIsIGRhdGU6IFwiJGNyZWF0ZWRBdFwiIH0gfSxcclxuICAgICAgICB0b3RhbFNhbGVzOiB7ICRzdW06IFwiJHRvdGFsUHJpY2VcIiB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICBdKTtcclxuXHJcbiAgYXdhaXQgZGIuZGlzY29ubmVjdCgpO1xyXG4gIHJlcy5zZW5kKHsgb3JkZXJzQ291bnQsIHByb2R1Y3RzQ291bnQsIHVzZXJzQ291bnQsIG9yZGVyc1ByaWNlLCBzYWxlc0RhdGEgfSk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcclxuIiwiLy9Gb3IgdXNlciBhdXRoZW50aWNhdGlvbi5cclxuXHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcclxuXHJcbmNvbnN0IHNpZ25Ub2tlbiA9ICh1c2VyKSA9PiB7XHJcbiAgcmV0dXJuIGp3dC5zaWduKFxyXG4gICAge1xyXG4gICAgICBfaWQ6IHVzZXIuX2lkLFxyXG4gICAgICBuYW1lOiB1c2VyLm5hbWUsXHJcbiAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICBpc0FkbWluOiB1c2VyLmlzQWRtaW4sXHJcbiAgICB9LFxyXG5cclxuICAgIHByb2Nlc3MuZW52LkpXVF9TRUNSRVQsXHJcbiAgICB7XHJcbiAgICAgIGV4cGlyZXNJbjogJzMwZCcsXHJcbiAgICB9XHJcbiAgKTtcclxufTtcclxuXHJcbi8vTWlkZGxld2FyZSB0byB2YWxpZGF0ZSBpZiB1c2VyIGlzIGF1dGhlbnRpY2F0ZWQgYnkgdXNpbmcgYSB0b2tlbiBpZiBpdCBpcyBwcm92aWRlZCBvbiB0aGUgcmVxdWVzdC5cclxuY29uc3QgaXNBdXRoID0gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgY29uc3QgeyBhdXRob3JpemF0aW9uIH0gPSByZXEuaGVhZGVycztcclxuICBpZiAoYXV0aG9yaXphdGlvbikge1xyXG4gICAgY29uc3QgdG9rZW4gPSBhdXRob3JpemF0aW9uLnNsaWNlKDcsIGF1dGhvcml6YXRpb24ubGVuZ3RoKTsvLyBCZWFyZXIgeHh4ID0+IHh4eFxyXG4gICAgand0LnZlcmlmeSh0b2tlbiwgcHJvY2Vzcy5lbnYuSldUX1NFQ1JFVCwgKGVyciwgZGVjb2RlKSA9PiB7XHJcbiAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICByZXMuc3RhdHVzKDQwMSkuc2VuZCh7IG1lc3NhZ2U6ICdUb2tlbiBpcyBub3QgdmFsaWQnIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlcS51c2VyID0gZGVjb2RlOyAvLyB1c2VyIHByb3BlcnR5IGlzIGFkZGVkIHRvIHJlcSBhbmQgdGhlIGRlY29kZWQgZGF0YSBpcyBhc3NpZ24gdG8gaXQuXHJcbiAgICAgICAgbmV4dCgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcy5zdGF0dXMoNDAxKS5zZW5kKHsgbWVzc2FnZTogJ1Rva2VuIGlzIG5vdCBzdXBwaWxlZCcgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgaXNBZG1pbiA9IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xyXG4gIGlmIChyZXEudXNlci5pc0FkbWluKSB7XHJcbiAgICBuZXh0KCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcy5zdGF0dXMoNDAxKS5zZW5kKHsgbWVzc2FnZTogJ1VzZXIgaXMgbm90IGFkbWluJyB9KTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgeyBzaWduVG9rZW4sIGlzQXV0aCwgaXNBZG1pbiB9OyIsIi8vIHJlcXVpcmUoJ2RvdGVudicpLmNvbmZpZygpXHJcbmltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCBjb25uZWN0aW9uID0ge307XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjb25uZWN0KCkge1xyXG4gIGlmIChjb25uZWN0aW9uLmlzQ29ubmVjdGVkKSB7XHJcbiAgICBjb25zb2xlLmxvZygnYWxyZWFkeSBjb25uZWN0ZWQnKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgaWYgKG1vbmdvb3NlLmNvbm5lY3Rpb25zLmxlbmd0aCA+IDApIHtcclxuICAgIGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPSBtb25nb29zZS5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlO1xyXG4gICAgaWYgKGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPT09IDEpIHtcclxuICAgICAgY29uc29sZS5sb2coJ3VzZSBwcmV2aW91cyBjb25uZWN0aW9uJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGF3YWl0IG1vbmdvb3NlLmRpc2Nvbm5lY3QoKTtcclxuICB9XHJcbiAgY29uc29sZS5sb2coJ21lIGNvbmVjdGFyZScpXHJcbiAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSSSwge1xyXG4gICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxyXG4gICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlXHJcbiAgfSkudGhlbigoZGIpPT57XHJcbiAgICBjb25zb2xlLmxvZygnbmV3IGNvbm5lY3Rpb24nKTtcclxuICAgIGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPSBkYi5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlO1xyXG4gIH0pXHJcblxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBkaXNjb25uZWN0KCkge1xyXG4gIGlmIChjb25uZWN0aW9uLmlzQ29ubmVjdGVkKSB7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICBhd2FpdCBtb25nb29zZS5kaXNjb25uZWN0KCk7XHJcbiAgICAgIGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPSBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdub3QgZGlzY29ubmVjdGVkJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vL2RiIHJldHVybnMgZGF0YSBpbiBvdGhlciBmb3JtYXQgdGhhdCBpcyBub3QgYSBqYXZhc2NyaXB0IGRhdGEsIHNvIHdlIG5lZWQgdG8gY29udmVydCB0aGF0IGRhdGEgdG8gc3RyaW5nLlxyXG5mdW5jdGlvbiBjb252ZXJ0RG9jVG9PYmooZG9jKSB7XHJcbiAgZG9jLl9pZCA9IGRvYy5faWQudG9TdHJpbmcoKTtcclxuICBkb2MuY3JlYXRlZEF0ID0gZG9jLmNyZWF0ZWRBdC50b1N0cmluZygpO1xyXG4gIGRvYy51cGRhdGVkQXQgPSBkb2MudXBkYXRlZEF0LnRvU3RyaW5nKCk7XHJcbiAgcmV0dXJuIGRvYztcclxufVxyXG5cclxuY29uc3QgZGIgPSB7IGNvbm5lY3QsIGRpc2Nvbm5lY3QsIGNvbnZlcnREb2NUb09iaiB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGI7XHJcblxyXG4vLyBcclxuLy8gY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpXHJcblxyXG4vLyBjb25zdCB1cmwgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSVxyXG5cclxuLy8gY29uc29sZS5sb2coJ2Nvbm5lY3RpbmcgdG8nLCB1cmwpXHJcblxyXG4vLyBtb25nb29zZS5jb25uZWN0KHVybCwgeyB1c2VOZXdVcmxQYXJzZXI6IHRydWUsIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSB9KVxyXG4vLyAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbi8vICAgICBjb25zb2xlLmxvZygnY29ubmVjdGVkIHRvIE1vbmdvREInKVxyXG4vLyAgIH0pXHJcbi8vICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4vLyAgICAgY29uc29sZS5sb2coJ2Vycm9yIGNvbm5lY3RpbmcgdG8gTW9uZ29EQjonLCBlcnJvci5tZXNzYWdlKVxyXG4vLyAgIH0pXHJcbiAgXHJcblxyXG5cclxuey8qXHJcbigxKSBjb25uZWN0aW9ucyBpcyBhbiBhcnJheSB0aGF0IGNvbnRhaW5zIGFsbCBwcmV2aW91cyBjb25uZWN0aW9ucyB0byB0aGUgZGF0YWJhc2VcclxuXHJcbigyKSBJbiBwcm9kdWN0aW9uIGVudmlyb25tZW50LCB0aGUgY29ubmVjdGlvbiBtdXN0IGJlIGRpc2Nvbm5lY3RlZCBhZnRlciBlYWNoIHJlc3F1ZXN0IHRvIHRoZSBkYi5cclxuICAgIEJ1dCBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudCBpdCdzIG5vdCBuZWNlc3NhcnkgdG8gZGlzY29ubmVjdCBpbiBvcmRlciB0byBub3Qgb3ZlciBjaGFyZ2UgcmVzb3VyY2VzLlxyXG5cclxuKi99IiwiXHJcbmltcG9ydCBkYiBmcm9tICcuL2RiJztcclxuXHJcbmNvbnN0IGdldEVycm9yID0gKGVycikgPT5cclxuICBlcnIucmVzcG9uc2UgJiYgZXJyLnJlc3BvbnNlLmRhdGEgJiYgZXJyLnJlc3BvbnNlLmRhdGEubWVzc2FnZVxyXG4gICAgPyBlcnIucmVzcG9uc2UuZGF0YS5tZXNzYWdlXHJcbiAgICA6IGVyci5tZXNzYWdlO1xyXG5cclxuXHJcbi8vVG8gaGFuZGxlIGVycm9zIGluIG1pZGRsZXdhcmUgaW4gYmFja2VuZC5cclxuY29uc3Qgb25FcnJvciA9IGFzeW5jIChlcnIsIHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgYXdhaXQgZGIuZGlzY29ubmVjdCgpO1xyXG4gIHJlcy5zdGF0dXMoNTAwKS5zZW5kKHsgbWVzc2FnZTogZXJyLnRvU3RyaW5nKCkgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBnZXRFcnJvciwgb25FcnJvciB9OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzb253ZWJ0b2tlblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWNvbm5lY3RcIik7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwib3JkZXJTY2hlbWEiLCJTY2hlbWEiLCJ1c2VyIiwidHlwZSIsIlR5cGVzIiwiT2JqZWN0SWQiLCJyZWYiLCJyZXF1aXJlZCIsIm9yZGVySXRlbXMiLCJuYW1lIiwiU3RyaW5nIiwicXVhbnRpdHkiLCJOdW1iZXIiLCJpbWFnZSIsInByaWNlIiwic2hpcHBpbmdBZGRyZXNzIiwiZnVsbE5hbWUiLCJhZGRyZXNzIiwiY2l0eSIsInBvc3RhbENvZGUiLCJjb3VudHJ5IiwibG9jYXRpb24iLCJsYXQiLCJsbmciLCJ2aWNpbml0eSIsImdvb2dsZUFkZHJlc3NJZCIsInBheW1lbnRNZXRob2QiLCJwYXltZW50UmVzdWx0IiwiaWQiLCJzdGF0dXMiLCJlbWFpbF9hZGRyZXNzIiwiaXRlbXNQcmljZSIsInNoaXBwaW5nUHJpY2UiLCJ0YXhQcmljZSIsInRvdGFsUHJpY2UiLCJpc1BhaWQiLCJCb29sZWFuIiwiZGVmYXVsdCIsImlzRGVsaXZlcmVkIiwicGFpZEF0IiwiRGF0ZSIsImRlbGl2ZXJlZEF0IiwidGltZXN0YW1wcyIsIk9yZGVyIiwibW9kZWxzIiwibW9kZWwiLCJyZXZpZXdTY2hlbWEiLCJyYXRpbmciLCJjb21tZW50IiwicHJvZHVjdFNjaGVtYSIsInNsdWciLCJ1bmlxdWUiLCJjYXRlZ29yeSIsImJyYW5kIiwibnVtUmV2aWV3cyIsImNvdW50SW5TdG9jayIsImRlc2NyaXB0aW9uIiwicmV2aWV3cyIsImZlYXR1cmVkSW1hZ2UiLCJpc0ZlYXR1cmVkIiwiUHJvZHVjdCIsInVzZXJTY2hlbWEiLCJlbWFpbCIsInBhc3N3b3JkIiwiaXNBZG1pbiIsIlVzZXIiLCJuYyIsImlzQXV0aCIsImRiIiwib25FcnJvciIsImhhbmRsZXIiLCJ1c2UiLCJnZXQiLCJyZXEiLCJyZXMiLCJjb25uZWN0Iiwib3JkZXJzQ291bnQiLCJjb3VudERvY3VtZW50cyIsInByb2R1Y3RzQ291bnQiLCJ1c2Vyc0NvdW50Iiwib3JkZXJzUHJpY2VHcm91cCIsImFnZ3JlZ2F0ZSIsIiRncm91cCIsIl9pZCIsInNhbGVzIiwiJHN1bSIsIm9yZGVyc1ByaWNlIiwibGVuZ3RoIiwic2FsZXNEYXRhIiwiJGRhdGVUb1N0cmluZyIsImZvcm1hdCIsImRhdGUiLCJ0b3RhbFNhbGVzIiwiZGlzY29ubmVjdCIsInNlbmQiLCJqd3QiLCJzaWduVG9rZW4iLCJzaWduIiwicHJvY2VzcyIsImVudiIsIkpXVF9TRUNSRVQiLCJleHBpcmVzSW4iLCJuZXh0IiwiYXV0aG9yaXphdGlvbiIsImhlYWRlcnMiLCJ0b2tlbiIsInNsaWNlIiwidmVyaWZ5IiwiZXJyIiwiZGVjb2RlIiwibWVzc2FnZSIsImNvbm5lY3Rpb24iLCJpc0Nvbm5lY3RlZCIsImNvbnNvbGUiLCJsb2ciLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJNT05HT0RCX1VSSSIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsInRoZW4iLCJjb252ZXJ0RG9jVG9PYmoiLCJkb2MiLCJ0b1N0cmluZyIsImNyZWF0ZWRBdCIsInVwZGF0ZWRBdCIsImdldEVycm9yIiwicmVzcG9uc2UiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==