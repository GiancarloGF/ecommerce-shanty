(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @paypal/react-paypal-js */ "@paypal/react-paypal-js");
/* harmony import */ var _paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! notistack */ "notistack");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var utils_Store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/Store */ "./utils/Store.js");

var _jsxFileName = "C:\\Users\\USER\\Documents\\GitHub\\ecommerce-shanty\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function MyApp({
  Component,
  pageProps
}) {
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    //Fixing issue when render style (1)
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(notistack__WEBPACK_IMPORTED_MODULE_2__.SnackbarProvider, {
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'center'
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(utils_Store__WEBPACK_IMPORTED_MODULE_5__.StoreProvider, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_paypal_react_paypal_js__WEBPACK_IMPORTED_MODULE_1__.PayPalScriptProvider, {
        deferLoading: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);
{
  /*   COMMENTS
  
  (1) When styling with MUI, style is aplied, but when refresing the page, styles were gone.
     To fix this issue, a DOM element is removed.
     This step is related with pages/_document.js -> (1)
  
  
  
  */
}

/***/ }),

/***/ "./utils/Store.js":
/*!************************!*\
  !*** ./utils/Store.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Store": () => (/* binding */ Store),
/* harmony export */   "StoreProvider": () => (/* binding */ StoreProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\USER\\Documents\\GitHub\\ecommerce-shanty\\utils\\Store.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const Store = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)(); // console.log(Cookies.get("shippingAddress"))
// console.log((JSON.parse(Cookies.get("shippingAddress"))))

const initialState = {
  darkMode: js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get("darkMode") === "ON" ? true : false,
  cart: {
    cartItems: js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get("cartItems") ? JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get("cartItems")) : [],
    shippingAddress: js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get("shippingAddress") ? js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get("shippingAddress") : {
      location: {}
    },
    paymentMethod: js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get("paymentMethod") ? js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get("paymentMethod") : ""
  },
  userInfo: js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get("userInfo") ? JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get("userInfo")) : null
};

function reducer(state, action) {
  switch (action.type) {
    case "DARK_MODE_ON":
      return _objectSpread(_objectSpread({}, state), {}, {
        darkMode: true
      });

    case "DARK_MODE_OFF":
      return _objectSpread(_objectSpread({}, state), {}, {
        darkMode: false
      });

    case "CART_ADD_ITEM":
      {
        const newItem = action.payload; // New product to adding.

        const existItem = state.cart.cartItems.find( //Returns the product if it exist in the cartItems. Otherwise, undefined is returned.
        item => item._id === newItem._id); //CartItems is updated.

        const cartItems = existItem ? //If the item already exist in cartItems, then the item is  updated only (not added).
        state.cart.cartItems.map(item => item.name === existItem.name ? newItem : item) : //If the item not exist in cartItems, then the item is added and cartItem is updated (increase its length)
        [...state.cart.cartItems, newItem];
        js_cookie__WEBPACK_IMPORTED_MODULE_1___default().set("cartItems", JSON.stringify(cartItems));
        return _objectSpread(_objectSpread({}, state), {}, {
          cart: _objectSpread(_objectSpread({}, state.cart), {}, {
            cartItems
          })
        }); //Updated state.
      }

    case "CART_REMOVE_ITEM":
      {
        const cartItems = state.cart.cartItems.filter(item => item._id !== action.payload._id);
        js_cookie__WEBPACK_IMPORTED_MODULE_1___default().set("cartItems", JSON.stringify(cartItems));
        return _objectSpread(_objectSpread({}, state), {}, {
          cart: _objectSpread(_objectSpread({}, state.cart), {}, {
            cartItems
          })
        });
      }

    case "CART_CLEAR":
      return _objectSpread(_objectSpread({}, state), {}, {
        cart: _objectSpread(_objectSpread({}, state.cart), {}, {
          cartItems: []
        })
      });

    case "SAVE_SHIPPING_ADDRESS":
      return _objectSpread(_objectSpread({}, state), {}, {
        cart: _objectSpread(_objectSpread({}, state.cart), {}, {
          shippingAddress: _objectSpread(_objectSpread({}, state.cart.shippingAddress), action.payload)
        })
      });

    case 'SAVE_SHIPPING_ADDRESS_MAP_LOCATION':
      return _objectSpread(_objectSpread({}, state), {}, {
        cart: _objectSpread(_objectSpread({}, state.cart), {}, {
          shippingAddress: _objectSpread(_objectSpread({}, state.cart.shippingAddress), {}, {
            location: action.payload
          })
        })
      });

    case "SAVE_PAYMENT_METHOD":
      return _objectSpread(_objectSpread({}, state), {}, {
        cart: _objectSpread(_objectSpread({}, state.cart), {}, {
          paymentMethod: action.payload
        })
      });

    case "USER_LOGIN":
      return _objectSpread(_objectSpread({}, state), {}, {
        userInfo: action.payload
      });

    case "USER_LOGOUT":
      return _objectSpread(_objectSpread({}, state), {}, {
        userInfo: null,
        cart: {
          cartItems: [],
          shippingAddress: {
            location: {}
          },
          paymentMethod: ''
        }
      });

    default:
      return state;
  }
}

function StoreProvider(props) {
  const {
    0: state,
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useReducer)(reducer, initialState);
  const value = {
    state,
    dispatch
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Store.Provider, {
    value: value,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 114,
    columnNumber: 10
  }, this);
}

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@paypal/react-paypal-js":
/*!******************************************!*\
  !*** external "@paypal/react-paypal-js" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@paypal/react-paypal-js");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("js-cookie");

/***/ }),

/***/ "notistack":
/*!****************************!*\
  !*** external "notistack" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("notistack");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFQO0FBQWdCLFNBQUssRUFBRUMsS0FBdkI7QUFBQSxjQUErQkYsS0FBSyxDQUFDRztBQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FFbEhEOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbS1uZXh0anMvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL2Vjb20tbmV4dGpzLy4vdXRpbHMvU3RvcmUuanMiLCJ3ZWJwYWNrOi8vZWNvbS1uZXh0anMvLi9zdHlsZXMvZ2xvYmFscy5jc3MiLCJ3ZWJwYWNrOi8vZWNvbS1uZXh0anMvZXh0ZXJuYWwgXCJAcGF5cGFsL3JlYWN0LXBheXBhbC1qc1wiIiwid2VicGFjazovL2Vjb20tbmV4dGpzL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vZWNvbS1uZXh0anMvZXh0ZXJuYWwgXCJub3Rpc3RhY2tcIiIsIndlYnBhY2s6Ly9lY29tLW5leHRqcy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZWNvbS1uZXh0anMvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYXlQYWxTY3JpcHRQcm92aWRlciB9IGZyb20gJ0BwYXlwYWwvcmVhY3QtcGF5cGFsLWpzJztcclxuaW1wb3J0IHsgU25hY2tiYXJQcm92aWRlciB9IGZyb20gJ25vdGlzdGFjayc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xyXG5pbXBvcnQgeyBTdG9yZVByb3ZpZGVyIH0gZnJvbSAndXRpbHMvU3RvcmUnO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAvL0ZpeGluZyBpc3N1ZSB3aGVuIHJlbmRlciBzdHlsZSAoMSlcclxuICAgIGNvbnN0IGpzc1N0eWxlcz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanNzLXNlcnZlci1zaWRlJyk7XHJcbiAgICBpZihqc3NTdHlsZXMpe1xyXG4gICAgICBqc3NTdHlsZXMucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChqc3NTdHlsZXMpO1xyXG4gICAgfVxyXG4gIH0sW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFNuYWNrYmFyUHJvdmlkZXIgYW5jaG9yT3JpZ2luPXt7IHZlcnRpY2FsOiAndG9wJywgaG9yaXpvbnRhbDogJ2NlbnRlcicgfX0+XHJcbiAgICAgIDxTdG9yZVByb3ZpZGVyPlxyXG4gICAgICA8UGF5UGFsU2NyaXB0UHJvdmlkZXIgZGVmZXJMb2FkaW5nPXt0cnVlfT5cclxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICA8L1BheVBhbFNjcmlwdFByb3ZpZGVyPlxyXG4gICAgICA8L1N0b3JlUHJvdmlkZXI+XHJcbiAgICA8L1NuYWNrYmFyUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcblxyXG5cclxuXHJcbnsvKiAgIENPTU1FTlRTXHJcblxyXG4oMSkgV2hlbiBzdHlsaW5nIHdpdGggTVVJLCBzdHlsZSBpcyBhcGxpZWQsIGJ1dCB3aGVuIHJlZnJlc2luZyB0aGUgcGFnZSwgc3R5bGVzIHdlcmUgZ29uZS5cclxuICAgIFRvIGZpeCB0aGlzIGlzc3VlLCBhIERPTSBlbGVtZW50IGlzIHJlbW92ZWQuXHJcbiAgICBUaGlzIHN0ZXAgaXMgcmVsYXRlZCB3aXRoIHBhZ2VzL19kb2N1bWVudC5qcyAtPiAoMSlcclxuXHJcblxyXG5cclxuKi99XHJcbiIsImltcG9ydCBDb29raWVzIGZyb20gXCJqcy1jb29raWVcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBTdG9yZSA9IGNyZWF0ZUNvbnRleHQoKTtcclxuLy8gY29uc29sZS5sb2coQ29va2llcy5nZXQoXCJzaGlwcGluZ0FkZHJlc3NcIikpXHJcbi8vIGNvbnNvbGUubG9nKChKU09OLnBhcnNlKENvb2tpZXMuZ2V0KFwic2hpcHBpbmdBZGRyZXNzXCIpKSkpXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBkYXJrTW9kZTogQ29va2llcy5nZXQoXCJkYXJrTW9kZVwiKSA9PT0gXCJPTlwiID8gdHJ1ZSA6IGZhbHNlLFxyXG4gIGNhcnQ6IHtcclxuICAgIGNhcnRJdGVtczogQ29va2llcy5nZXQoXCJjYXJ0SXRlbXNcIilcclxuICAgICAgPyBKU09OLnBhcnNlKENvb2tpZXMuZ2V0KFwiY2FydEl0ZW1zXCIpKVxyXG4gICAgICA6IFtdLFxyXG4gICAgc2hpcHBpbmdBZGRyZXNzOiBDb29raWVzLmdldChcInNoaXBwaW5nQWRkcmVzc1wiKVxyXG4gICAgICA/IENvb2tpZXMuZ2V0KFwic2hpcHBpbmdBZGRyZXNzXCIpXHJcbiAgICAgIDogeyBsb2NhdGlvbjoge30gfSxcclxuICAgIHBheW1lbnRNZXRob2Q6IENvb2tpZXMuZ2V0KFwicGF5bWVudE1ldGhvZFwiKVxyXG4gICAgICA/IENvb2tpZXMuZ2V0KFwicGF5bWVudE1ldGhvZFwiKVxyXG4gICAgICA6IFwiXCIsXHJcbiAgfSxcclxuICB1c2VySW5mbzogQ29va2llcy5nZXQoXCJ1c2VySW5mb1wiKVxyXG4gICAgPyBKU09OLnBhcnNlKENvb2tpZXMuZ2V0KFwidXNlckluZm9cIikpXHJcbiAgICA6IG51bGwsXHJcbn07XHJcblxyXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFwiREFSS19NT0RFX09OXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBkYXJrTW9kZTogdHJ1ZSB9O1xyXG4gICAgY2FzZSBcIkRBUktfTU9ERV9PRkZcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGRhcmtNb2RlOiBmYWxzZSB9O1xyXG5cclxuICAgIGNhc2UgXCJDQVJUX0FERF9JVEVNXCI6IHtcclxuICAgICAgY29uc3QgbmV3SXRlbSA9IGFjdGlvbi5wYXlsb2FkOyAvLyBOZXcgcHJvZHVjdCB0byBhZGRpbmcuXHJcbiAgICAgIGNvbnN0IGV4aXN0SXRlbSA9IHN0YXRlLmNhcnQuY2FydEl0ZW1zLmZpbmQoXHJcbiAgICAgICAgLy9SZXR1cm5zIHRoZSBwcm9kdWN0IGlmIGl0IGV4aXN0IGluIHRoZSBjYXJ0SXRlbXMuIE90aGVyd2lzZSwgdW5kZWZpbmVkIGlzIHJldHVybmVkLlxyXG4gICAgICAgIChpdGVtKSA9PiBpdGVtLl9pZCA9PT0gbmV3SXRlbS5faWRcclxuICAgICAgKTtcclxuICAgICAgLy9DYXJ0SXRlbXMgaXMgdXBkYXRlZC5cclxuICAgICAgY29uc3QgY2FydEl0ZW1zID0gZXhpc3RJdGVtXHJcbiAgICAgICAgPyAvL0lmIHRoZSBpdGVtIGFscmVhZHkgZXhpc3QgaW4gY2FydEl0ZW1zLCB0aGVuIHRoZSBpdGVtIGlzICB1cGRhdGVkIG9ubHkgKG5vdCBhZGRlZCkuXHJcbiAgICAgICAgc3RhdGUuY2FydC5jYXJ0SXRlbXMubWFwKChpdGVtKSA9PlxyXG4gICAgICAgICAgaXRlbS5uYW1lID09PSBleGlzdEl0ZW0ubmFtZSA/IG5ld0l0ZW0gOiBpdGVtXHJcbiAgICAgICAgKVxyXG4gICAgICAgIDogLy9JZiB0aGUgaXRlbSBub3QgZXhpc3QgaW4gY2FydEl0ZW1zLCB0aGVuIHRoZSBpdGVtIGlzIGFkZGVkIGFuZCBjYXJ0SXRlbSBpcyB1cGRhdGVkIChpbmNyZWFzZSBpdHMgbGVuZ3RoKVxyXG4gICAgICAgIFsuLi5zdGF0ZS5jYXJ0LmNhcnRJdGVtcywgbmV3SXRlbV07XHJcblxyXG4gICAgICBDb29raWVzLnNldChcImNhcnRJdGVtc1wiLCBKU09OLnN0cmluZ2lmeShjYXJ0SXRlbXMpKTtcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNhcnQ6IHsgLi4uc3RhdGUuY2FydCwgY2FydEl0ZW1zIH0gfTsgLy9VcGRhdGVkIHN0YXRlLlxyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgXCJDQVJUX1JFTU9WRV9JVEVNXCI6IHtcclxuICAgICAgY29uc3QgY2FydEl0ZW1zID0gc3RhdGUuY2FydC5jYXJ0SXRlbXMuZmlsdGVyKFxyXG4gICAgICAgIChpdGVtKSA9PiBpdGVtLl9pZCAhPT0gYWN0aW9uLnBheWxvYWQuX2lkXHJcbiAgICAgICk7XHJcbiAgICAgIENvb2tpZXMuc2V0KFwiY2FydEl0ZW1zXCIsIEpTT04uc3RyaW5naWZ5KGNhcnRJdGVtcykpO1xyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2FydDogeyAuLi5zdGF0ZS5jYXJ0LCBjYXJ0SXRlbXMgfSB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNhc2UgXCJDQVJUX0NMRUFSXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjYXJ0OiB7IC4uLnN0YXRlLmNhcnQsIGNhcnRJdGVtczogW10gfSB9O1xyXG5cclxuICAgIGNhc2UgXCJTQVZFX1NISVBQSU5HX0FERFJFU1NcIjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjYXJ0OiB7XHJcbiAgICAgICAgICAuLi5zdGF0ZS5jYXJ0LFxyXG4gICAgICAgICAgc2hpcHBpbmdBZGRyZXNzOiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLmNhcnQuc2hpcHBpbmdBZGRyZXNzLFxyXG4gICAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgJ1NBVkVfU0hJUFBJTkdfQUREUkVTU19NQVBfTE9DQVRJT04nOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNhcnQ6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLmNhcnQsXHJcbiAgICAgICAgICBzaGlwcGluZ0FkZHJlc3M6IHtcclxuICAgICAgICAgICAgLi4uc3RhdGUuY2FydC5zaGlwcGluZ0FkZHJlc3MsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuXHJcbiAgICBjYXNlIFwiU0FWRV9QQVlNRU5UX01FVEhPRFwiOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNhcnQ6IHsgLi4uc3RhdGUuY2FydCwgcGF5bWVudE1ldGhvZDogYWN0aW9uLnBheWxvYWQgfSxcclxuICAgICAgfTtcclxuXHJcbiAgICBjYXNlIFwiVVNFUl9MT0dJTlwiOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdXNlckluZm86IGFjdGlvbi5wYXlsb2FkIH07XHJcblxyXG4gICAgY2FzZSBcIlVTRVJfTE9HT1VUXCI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdXNlckluZm86IG51bGwsXHJcbiAgICAgICAgY2FydDoge1xyXG4gICAgICAgICAgY2FydEl0ZW1zOiBbXSxcclxuICAgICAgICAgIHNoaXBwaW5nQWRkcmVzczogeyBsb2NhdGlvbjoge30gfSxcclxuICAgICAgICAgIHBheW1lbnRNZXRob2Q6ICcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcblxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFN0b3JlUHJvdmlkZXIocHJvcHMpIHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcclxuICBjb25zdCB2YWx1ZSA9IHsgc3RhdGUsIGRpc3BhdGNoIH07XHJcbiAgcmV0dXJuIDxTdG9yZS5Qcm92aWRlciB2YWx1ZT17dmFsdWV9Pntwcm9wcy5jaGlsZHJlbn08L1N0b3JlLlByb3ZpZGVyPjtcclxufVxyXG4iLCIiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcGF5cGFsL3JlYWN0LXBheXBhbC1qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm90aXN0YWNrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiUGF5UGFsU2NyaXB0UHJvdmlkZXIiLCJTbmFja2JhclByb3ZpZGVyIiwidXNlRWZmZWN0IiwiU3RvcmVQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwianNzU3R5bGVzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGFyZW50RWxlbWVudCIsInJlbW92ZUNoaWxkIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwiQ29va2llcyIsImNyZWF0ZUNvbnRleHQiLCJ1c2VSZWR1Y2VyIiwiU3RvcmUiLCJpbml0aWFsU3RhdGUiLCJkYXJrTW9kZSIsImdldCIsImNhcnQiLCJjYXJ0SXRlbXMiLCJKU09OIiwicGFyc2UiLCJzaGlwcGluZ0FkZHJlc3MiLCJsb2NhdGlvbiIsInBheW1lbnRNZXRob2QiLCJ1c2VySW5mbyIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJuZXdJdGVtIiwicGF5bG9hZCIsImV4aXN0SXRlbSIsImZpbmQiLCJpdGVtIiwiX2lkIiwibWFwIiwibmFtZSIsInNldCIsInN0cmluZ2lmeSIsImZpbHRlciIsInByb3BzIiwiZGlzcGF0Y2giLCJ2YWx1ZSIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==