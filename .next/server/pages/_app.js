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



console.log(typeof js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get("userInfo"));
console.log(typeof JSON.parse("[]"));
console.log(js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get("userInfo"));
const Store = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();
const initialState = {
  darkMode: js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get("darkMode") === "ON" ? true : false,
  cart: {
    cartItems: js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get("cartItems") ? JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get("cartItems")) : [],
    shippingAddress: js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get("shippingAddress") ? JSON.parse(js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get("shippingAddress")) : {},
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
          shippingAddress: action.payload
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
          shippingAddress: {},
          paymentMethod: ""
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
    lineNumber: 94,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFQO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBRTlGRDs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb20tbmV4dGpzLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9lY29tLW5leHRqcy8uL3V0aWxzL1N0b3JlLmpzIiwid2VicGFjazovL2Vjb20tbmV4dGpzLy4vc3R5bGVzL2dsb2JhbHMuY3NzIiwid2VicGFjazovL2Vjb20tbmV4dGpzL2V4dGVybmFsIFwiQHBheXBhbC9yZWFjdC1wYXlwYWwtanNcIiIsIndlYnBhY2s6Ly9lY29tLW5leHRqcy9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovL2Vjb20tbmV4dGpzL2V4dGVybmFsIFwibm90aXN0YWNrXCIiLCJ3ZWJwYWNrOi8vZWNvbS1uZXh0anMvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2Vjb20tbmV4dGpzL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGF5UGFsU2NyaXB0UHJvdmlkZXIgfSBmcm9tICdAcGF5cGFsL3JlYWN0LXBheXBhbC1qcyc7XHJcbmltcG9ydCB7IFNuYWNrYmFyUHJvdmlkZXIgfSBmcm9tICdub3Rpc3RhY2snO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcclxuaW1wb3J0IHsgU3RvcmVQcm92aWRlciB9IGZyb20gJ3V0aWxzL1N0b3JlJztcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgLy9GaXhpbmcgaXNzdWUgd2hlbiByZW5kZXIgc3R5bGUgKDEpXHJcbiAgICBjb25zdCBqc3NTdHlsZXM9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzcy1zZXJ2ZXItc2lkZScpO1xyXG4gICAgaWYoanNzU3R5bGVzKXtcclxuICAgICAganNzU3R5bGVzLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoanNzU3R5bGVzKTtcclxuICAgIH1cclxuICB9LFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTbmFja2JhclByb3ZpZGVyIGFuY2hvck9yaWdpbj17eyB2ZXJ0aWNhbDogJ3RvcCcsIGhvcml6b250YWw6ICdjZW50ZXInIH19PlxyXG4gICAgICA8U3RvcmVQcm92aWRlcj5cclxuICAgICAgPFBheVBhbFNjcmlwdFByb3ZpZGVyIGRlZmVyTG9hZGluZz17dHJ1ZX0+XHJcbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgPC9QYXlQYWxTY3JpcHRQcm92aWRlcj5cclxuICAgICAgPC9TdG9yZVByb3ZpZGVyPlxyXG4gICAgPC9TbmFja2JhclByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG5cclxuXHJcblxyXG57LyogICBDT01NRU5UU1xyXG5cclxuKDEpIFdoZW4gc3R5bGluZyB3aXRoIE1VSSwgc3R5bGUgaXMgYXBsaWVkLCBidXQgd2hlbiByZWZyZXNpbmcgdGhlIHBhZ2UsIHN0eWxlcyB3ZXJlIGdvbmUuXHJcbiAgICBUbyBmaXggdGhpcyBpc3N1ZSwgYSBET00gZWxlbWVudCBpcyByZW1vdmVkLlxyXG4gICAgVGhpcyBzdGVwIGlzIHJlbGF0ZWQgd2l0aCBwYWdlcy9fZG9jdW1lbnQuanMgLT4gKDEpXHJcblxyXG5cclxuXHJcbiovfVxyXG4iLCJpbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVJlZHVjZXIgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnNvbGUubG9nKHR5cGVvZiBDb29raWVzLmdldChcInVzZXJJbmZvXCIpKTtcclxuY29uc29sZS5sb2codHlwZW9mIEpTT04ucGFyc2UoXCJbXVwiKSk7XHJcbmNvbnNvbGUubG9nKENvb2tpZXMuZ2V0KFwidXNlckluZm9cIikpO1xyXG5leHBvcnQgY29uc3QgU3RvcmUgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgZGFya01vZGU6IENvb2tpZXMuZ2V0KFwiZGFya01vZGVcIikgPT09IFwiT05cIiA/IHRydWUgOiBmYWxzZSxcclxuICBjYXJ0OiB7XHJcbiAgICBjYXJ0SXRlbXM6IENvb2tpZXMuZ2V0KFwiY2FydEl0ZW1zXCIpXHJcbiAgICAgID8gSlNPTi5wYXJzZShDb29raWVzLmdldChcImNhcnRJdGVtc1wiKSlcclxuICAgICAgOiBbXSxcclxuICAgIHNoaXBwaW5nQWRkcmVzczogQ29va2llcy5nZXQoXCJzaGlwcGluZ0FkZHJlc3NcIilcclxuICAgICAgPyBKU09OLnBhcnNlKENvb2tpZXMuZ2V0KFwic2hpcHBpbmdBZGRyZXNzXCIpKVxyXG4gICAgICA6IHt9LFxyXG4gICAgcGF5bWVudE1ldGhvZDogQ29va2llcy5nZXQoXCJwYXltZW50TWV0aG9kXCIpXHJcbiAgICAgID8gQ29va2llcy5nZXQoXCJwYXltZW50TWV0aG9kXCIpXHJcbiAgICAgIDogXCJcIixcclxuICB9LFxyXG4gIHVzZXJJbmZvOiBDb29raWVzLmdldChcInVzZXJJbmZvXCIpXHJcbiAgICA/IEpTT04ucGFyc2UoQ29va2llcy5nZXQoXCJ1c2VySW5mb1wiKSlcclxuICAgIDogbnVsbCxcclxufTtcclxuXHJcbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgXCJEQVJLX01PREVfT05cIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGRhcmtNb2RlOiB0cnVlIH07XHJcbiAgICBjYXNlIFwiREFSS19NT0RFX09GRlwiOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZGFya01vZGU6IGZhbHNlIH07XHJcblxyXG4gICAgY2FzZSBcIkNBUlRfQUREX0lURU1cIjoge1xyXG4gICAgICBjb25zdCBuZXdJdGVtID0gYWN0aW9uLnBheWxvYWQ7IC8vIE5ldyBwcm9kdWN0IHRvIGFkZGluZy5cclxuICAgICAgY29uc3QgZXhpc3RJdGVtID0gc3RhdGUuY2FydC5jYXJ0SXRlbXMuZmluZChcclxuICAgICAgICAvL1JldHVybnMgdGhlIHByb2R1Y3QgaWYgaXQgZXhpc3QgaW4gdGhlIGNhcnRJdGVtcy4gT3RoZXJ3aXNlLCB1bmRlZmluZWQgaXMgcmV0dXJuZWQuXHJcbiAgICAgICAgKGl0ZW0pID0+IGl0ZW0uX2lkID09PSBuZXdJdGVtLl9pZFxyXG4gICAgICApO1xyXG4gICAgICAvL0NhcnRJdGVtcyBpcyB1cGRhdGVkLlxyXG4gICAgICBjb25zdCBjYXJ0SXRlbXMgPSBleGlzdEl0ZW1cclxuICAgICAgICA/IC8vSWYgdGhlIGl0ZW0gYWxyZWFkeSBleGlzdCBpbiBjYXJ0SXRlbXMsIHRoZW4gdGhlIGl0ZW0gaXMgIHVwZGF0ZWQgb25seSAobm90IGFkZGVkKS5cclxuICAgICAgICAgIHN0YXRlLmNhcnQuY2FydEl0ZW1zLm1hcCgoaXRlbSkgPT5cclxuICAgICAgICAgICAgaXRlbS5uYW1lID09PSBleGlzdEl0ZW0ubmFtZSA/IG5ld0l0ZW0gOiBpdGVtXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgOiAvL0lmIHRoZSBpdGVtIG5vdCBleGlzdCBpbiBjYXJ0SXRlbXMsIHRoZW4gdGhlIGl0ZW0gaXMgYWRkZWQgYW5kIGNhcnRJdGVtIGlzIHVwZGF0ZWQgKGluY3JlYXNlIGl0cyBsZW5ndGgpXHJcbiAgICAgICAgICBbLi4uc3RhdGUuY2FydC5jYXJ0SXRlbXMsIG5ld0l0ZW1dO1xyXG5cclxuICAgICAgQ29va2llcy5zZXQoXCJjYXJ0SXRlbXNcIiwgSlNPTi5zdHJpbmdpZnkoY2FydEl0ZW1zKSk7XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjYXJ0OiB7IC4uLnN0YXRlLmNhcnQsIGNhcnRJdGVtcyB9IH07IC8vVXBkYXRlZCBzdGF0ZS5cclxuICAgIH1cclxuXHJcbiAgICBjYXNlIFwiQ0FSVF9SRU1PVkVfSVRFTVwiOiB7XHJcbiAgICAgIGNvbnN0IGNhcnRJdGVtcyA9IHN0YXRlLmNhcnQuY2FydEl0ZW1zLmZpbHRlcihcclxuICAgICAgICAoaXRlbSkgPT4gaXRlbS5faWQgIT09IGFjdGlvbi5wYXlsb2FkLl9pZFxyXG4gICAgICApO1xyXG4gICAgICBDb29raWVzLnNldChcImNhcnRJdGVtc1wiLCBKU09OLnN0cmluZ2lmeShjYXJ0SXRlbXMpKTtcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNhcnQ6IHsgLi4uc3RhdGUuY2FydCwgY2FydEl0ZW1zIH0gfTtcclxuICAgIH1cclxuXHJcbiAgICBjYXNlIFwiQ0FSVF9DTEVBUlwiOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2FydDogeyAuLi5zdGF0ZS5jYXJ0LCBjYXJ0SXRlbXM6IFtdIH0gfTtcclxuXHJcbiAgICBjYXNlIFwiU0FWRV9TSElQUElOR19BRERSRVNTXCI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2FydDogeyAuLi5zdGF0ZS5jYXJ0LCBzaGlwcGluZ0FkZHJlc3M6IGFjdGlvbi5wYXlsb2FkIH0sXHJcbiAgICAgIH07XHJcblxyXG4gICAgY2FzZSBcIlNBVkVfUEFZTUVOVF9NRVRIT0RcIjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjYXJ0OiB7IC4uLnN0YXRlLmNhcnQsIHBheW1lbnRNZXRob2Q6IGFjdGlvbi5wYXlsb2FkIH0sXHJcbiAgICAgIH07XHJcblxyXG4gICAgY2FzZSBcIlVTRVJfTE9HSU5cIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHVzZXJJbmZvOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG5cclxuICAgIGNhc2UgXCJVU0VSX0xPR09VVFwiOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHVzZXJJbmZvOiBudWxsLFxyXG4gICAgICAgIGNhcnQ6IHsgY2FydEl0ZW1zOiBbXSwgc2hpcHBpbmdBZGRyZXNzOiB7fSwgcGF5bWVudE1ldGhvZDogXCJcIiB9LFxyXG4gICAgICB9O1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBTdG9yZVByb3ZpZGVyKHByb3BzKSB7XHJcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XHJcbiAgY29uc3QgdmFsdWUgPSB7IHN0YXRlLCBkaXNwYXRjaCB9O1xyXG4gIHJldHVybiA8U3RvcmUuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT57cHJvcHMuY2hpbGRyZW59PC9TdG9yZS5Qcm92aWRlcj47XHJcbn1cclxuIiwiIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHBheXBhbC9yZWFjdC1wYXlwYWwtanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwianMtY29va2llXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5vdGlzdGFja1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIlBheVBhbFNjcmlwdFByb3ZpZGVyIiwiU25hY2tiYXJQcm92aWRlciIsInVzZUVmZmVjdCIsIlN0b3JlUHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImpzc1N0eWxlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBhcmVudEVsZW1lbnQiLCJyZW1vdmVDaGlsZCIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsIkNvb2tpZXMiLCJjcmVhdGVDb250ZXh0IiwidXNlUmVkdWNlciIsImNvbnNvbGUiLCJsb2ciLCJnZXQiLCJKU09OIiwicGFyc2UiLCJTdG9yZSIsImluaXRpYWxTdGF0ZSIsImRhcmtNb2RlIiwiY2FydCIsImNhcnRJdGVtcyIsInNoaXBwaW5nQWRkcmVzcyIsInBheW1lbnRNZXRob2QiLCJ1c2VySW5mbyIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJuZXdJdGVtIiwicGF5bG9hZCIsImV4aXN0SXRlbSIsImZpbmQiLCJpdGVtIiwiX2lkIiwibWFwIiwibmFtZSIsInNldCIsInN0cmluZ2lmeSIsImZpbHRlciIsInByb3BzIiwiZGlzcGF0Y2giLCJ2YWx1ZSIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==