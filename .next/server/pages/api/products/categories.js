"use strict";
(() => {
var exports = {};
exports.id = "pages/api/products/categories";
exports.ids = ["pages/api/products/categories"];
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

/***/ "./pages/api/products/categories.js":
/*!******************************************!*\
  !*** ./pages/api/products/categories.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ "next-connect");
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/Product */ "./models/Product.js");
/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/db */ "./utils/db.js");



const handler = next_connect__WEBPACK_IMPORTED_MODULE_0___default()();
handler.get(async (req, res) => {
  await _utils_db__WEBPACK_IMPORTED_MODULE_2__.default.connect();
  const categories = await _models_Product__WEBPACK_IMPORTED_MODULE_1__.default.find().distinct('category');
  await _utils_db__WEBPACK_IMPORTED_MODULE_2__.default.disconnect();
  res.send(categories);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/products/categories.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bmV4dGpzLy4vbW9kZWxzL1Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vZWNvbS1uZXh0anMvLi9wYWdlcy9hcGkvcHJvZHVjdHMvY2F0ZWdvcmllcy5qcyIsIndlYnBhY2s6Ly9lY29tLW5leHRqcy8uL3V0aWxzL2RiLmpzIiwid2VicGFjazovL2Vjb20tbmV4dGpzL2V4dGVybmFsIFwibW9uZ29vc2VcIiIsIndlYnBhY2s6Ly9lY29tLW5leHRqcy9leHRlcm5hbCBcIm5leHQtY29ubmVjdFwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCByZXZpZXdTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxyXG4gIHtcclxuICAgIHVzZXI6IHsgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLCByZWY6ICdVc2VyJywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIG5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgcmF0aW5nOiB7IHR5cGU6IE51bWJlciwgZGVmYXVsdDogMCB9LFxyXG4gICAgY29tbWVudDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aW1lc3RhbXBzOiB0cnVlLFxyXG4gIH1cclxuKTtcclxuXHJcbmNvbnN0IHByb2R1Y3RTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxyXG4gIHtcclxuICAgIG5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgc2x1ZzogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB1bmlxdWU6IHRydWUgfSxcclxuICAgIGNhdGVnb3J5OiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIGltYWdlOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIHByaWNlOiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIGJyYW5kOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgIHJhdGluZzogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlLCBkZWZhdWx0OiAwIH0sXHJcbiAgICBudW1SZXZpZXdzOiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUsIGRlZmF1bHQ6IDAgfSxcclxuICAgIGNvdW50SW5TdG9jazogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlLCBkZWZhdWx0OiAwIH0sXHJcbiAgICBkZXNjcmlwdGlvbjogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICByZXZpZXdzOiBbcmV2aWV3U2NoZW1hXSxcclxuICAgIGZlYXR1cmVkSW1hZ2U6IHsgdHlwZTogU3RyaW5nIH0sXHJcbiAgICBpc0ZlYXR1cmVkOiB7IHR5cGU6IEJvb2xlYW4sIHJlcXVpcmVkOiB0cnVlLCBkZWZhdWx0OiBmYWxzZSB9LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGltZXN0YW1wczogdHJ1ZSxcclxuICB9XHJcbik7XHJcblxyXG4vLyBwcm9kdWN0U2NoZW1hLnNldCgndG9KU09OJywge1xyXG4vLyAgIHRyYW5zZm9ybTogKGRvY3VtZW50LCByZXR1cm5lZE9iamVjdCkgPT4ge1xyXG4vLyAgICAgcmV0dXJuZWRPYmplY3QuaWQgPSByZXR1cm5lZE9iamVjdC5faWQudG9TdHJpbmcoKVxyXG4vLyAgICAgZGVsZXRlIHJldHVybmVkT2JqZWN0Ll9pZFxyXG4vLyAgICAgZGVsZXRlIHJldHVybmVkT2JqZWN0Ll9fdlxyXG4vLyAgIH1cclxuLy8gfSlcclxuXHJcbmNvbnN0IFByb2R1Y3QgPVxyXG4gIG1vbmdvb3NlLm1vZGVscy5Qcm9kdWN0IHx8IG1vbmdvb3NlLm1vZGVsKCdQcm9kdWN0JywgcHJvZHVjdFNjaGVtYSk7XHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3Q7XHJcblxyXG5cclxuXHJcbi8vIElmIGl0IGRvZXMgZXhpc3QsIHNldCBpdHMgdmFsdWUgZW4gUHJvZHVjdCwgb3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBtb2RlbC5cclxuLy9UbyBzdG9yZSB0aGUgZGF0ZSB3aGVuIGEgcHJvZHVjdCBpcyBjcmVhdGVkLiIsImltcG9ydCBuYyBmcm9tICduZXh0LWNvbm5lY3QnO1xyXG5pbXBvcnQgUHJvZHVjdCBmcm9tICcuLi8uLi8uLi9tb2RlbHMvUHJvZHVjdCc7XHJcbmltcG9ydCBkYiBmcm9tICcuLi8uLi8uLi91dGlscy9kYic7XHJcblxyXG5jb25zdCBoYW5kbGVyID0gbmMoKTtcclxuXHJcbmhhbmRsZXIuZ2V0KGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gIGF3YWl0IGRiLmNvbm5lY3QoKTtcclxuICBjb25zdCBjYXRlZ29yaWVzID0gYXdhaXQgUHJvZHVjdC5maW5kKCkuZGlzdGluY3QoJ2NhdGVnb3J5Jyk7XHJcbiAgYXdhaXQgZGIuZGlzY29ubmVjdCgpO1xyXG4gIHJlcy5zZW5kKGNhdGVnb3JpZXMpO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7IiwiLy8gcmVxdWlyZSgnZG90ZW52JykuY29uZmlnKClcclxuaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuXHJcbmNvbnN0IGNvbm5lY3Rpb24gPSB7fTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGNvbm5lY3QoKSB7XHJcbiAgaWYgKGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQpIHtcclxuICAgIGNvbnNvbGUubG9nKCdhbHJlYWR5IGNvbm5lY3RlZCcpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBpZiAobW9uZ29vc2UuY29ubmVjdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCA9IG1vbmdvb3NlLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGU7XHJcbiAgICBpZiAoY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCA9PT0gMSkge1xyXG4gICAgICBjb25zb2xlLmxvZygndXNlIHByZXZpb3VzIGNvbm5lY3Rpb24nKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgYXdhaXQgbW9uZ29vc2UuZGlzY29ubmVjdCgpO1xyXG4gIH1cclxuICBjb25zb2xlLmxvZygnbWUgY29uZWN0YXJlJylcclxuICBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJLCB7XHJcbiAgICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXHJcbiAgICB1c2VVbmlmaWVkVG9wb2xvZ3k6IHRydWVcclxuICB9KS50aGVuKChkYik9PntcclxuICAgIGNvbnNvbGUubG9nKCduZXcgY29ubmVjdGlvbicpO1xyXG4gICAgY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCA9IGRiLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGU7XHJcbiAgfSlcclxuXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGRpc2Nvbm5lY3QoKSB7XHJcbiAgaWYgKGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQpIHtcclxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgIGF3YWl0IG1vbmdvb3NlLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgY29ubmVjdGlvbi5pc0Nvbm5lY3RlZCA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coJ25vdCBkaXNjb25uZWN0ZWQnKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vZGIgcmV0dXJucyBkYXRhIGluIG90aGVyIGZvcm1hdCB0aGF0IGlzIG5vdCBhIGphdmFzY3JpcHQgZGF0YSwgc28gd2UgbmVlZCB0byBjb252ZXJ0IHRoYXQgZGF0YSB0byBzdHJpbmcuXHJcbmZ1bmN0aW9uIGNvbnZlcnREb2NUb09iaihkb2MpIHtcclxuICBkb2MuX2lkID0gZG9jLl9pZC50b1N0cmluZygpO1xyXG4gIGRvYy5jcmVhdGVkQXQgPSBkb2MuY3JlYXRlZEF0LnRvU3RyaW5nKCk7XHJcbiAgZG9jLnVwZGF0ZWRBdCA9IGRvYy51cGRhdGVkQXQudG9TdHJpbmcoKTtcclxuICByZXR1cm4gZG9jO1xyXG59XHJcblxyXG5jb25zdCBkYiA9IHsgY29ubmVjdCwgZGlzY29ubmVjdCwgY29udmVydERvY1RvT2JqIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkYjtcclxuXHJcbi8vIFxyXG4vLyBjb25zdCBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJylcclxuXHJcbi8vIGNvbnN0IHVybCA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJXHJcblxyXG4vLyBjb25zb2xlLmxvZygnY29ubmVjdGluZyB0bycsIHVybClcclxuXHJcbi8vIG1vbmdvb3NlLmNvbm5lY3QodXJsLCB7IHVzZU5ld1VybFBhcnNlcjogdHJ1ZSwgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlIH0pXHJcbi8vICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuLy8gICAgIGNvbnNvbGUubG9nKCdjb25uZWN0ZWQgdG8gTW9uZ29EQicpXHJcbi8vICAgfSlcclxuLy8gICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbi8vICAgICBjb25zb2xlLmxvZygnZXJyb3IgY29ubmVjdGluZyB0byBNb25nb0RCOicsIGVycm9yLm1lc3NhZ2UpXHJcbi8vICAgfSlcclxuICBcclxuXHJcblxyXG57LypcclxuKDEpIGNvbm5lY3Rpb25zIGlzIGFuIGFycmF5IHRoYXQgY29udGFpbnMgYWxsIHByZXZpb3VzIGNvbm5lY3Rpb25zIHRvIHRoZSBkYXRhYmFzZVxyXG5cclxuKDIpIEluIHByb2R1Y3Rpb24gZW52aXJvbm1lbnQsIHRoZSBjb25uZWN0aW9uIG11c3QgYmUgZGlzY29ubmVjdGVkIGFmdGVyIGVhY2ggcmVzcXVlc3QgdG8gdGhlIGRiLlxyXG4gICAgQnV0IGluIGRldmVsb3BtZW50IGVudmlyb25tZW50IGl0J3Mgbm90IG5lY2Vzc2FyeSB0byBkaXNjb25uZWN0IGluIG9yZGVyIHRvIG5vdCBvdmVyIGNoYXJnZSByZXNvdXJjZXMuXHJcblxyXG4qL30iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb29zZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWNvbm5lY3RcIik7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmV2aWV3U2NoZW1hIiwiU2NoZW1hIiwidXNlciIsInR5cGUiLCJUeXBlcyIsIk9iamVjdElkIiwicmVmIiwicmVxdWlyZWQiLCJuYW1lIiwiU3RyaW5nIiwicmF0aW5nIiwiTnVtYmVyIiwiZGVmYXVsdCIsImNvbW1lbnQiLCJ0aW1lc3RhbXBzIiwicHJvZHVjdFNjaGVtYSIsInNsdWciLCJ1bmlxdWUiLCJjYXRlZ29yeSIsImltYWdlIiwicHJpY2UiLCJicmFuZCIsIm51bVJldmlld3MiLCJjb3VudEluU3RvY2siLCJkZXNjcmlwdGlvbiIsInJldmlld3MiLCJmZWF0dXJlZEltYWdlIiwiaXNGZWF0dXJlZCIsIkJvb2xlYW4iLCJQcm9kdWN0IiwibW9kZWxzIiwibW9kZWwiLCJuYyIsImRiIiwiaGFuZGxlciIsImdldCIsInJlcSIsInJlcyIsImNvbm5lY3QiLCJjYXRlZ29yaWVzIiwiZmluZCIsImRpc3RpbmN0IiwiZGlzY29ubmVjdCIsInNlbmQiLCJjb25uZWN0aW9uIiwiaXNDb25uZWN0ZWQiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdGlvbnMiLCJsZW5ndGgiLCJyZWFkeVN0YXRlIiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwidXNlTmV3VXJsUGFyc2VyIiwidXNlVW5pZmllZFRvcG9sb2d5IiwidGhlbiIsImNvbnZlcnREb2NUb09iaiIsImRvYyIsIl9pZCIsInRvU3RyaW5nIiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0Il0sInNvdXJjZVJvb3QiOiIifQ==