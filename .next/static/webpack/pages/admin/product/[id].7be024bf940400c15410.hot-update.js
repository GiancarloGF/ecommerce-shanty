"use strict";
self["webpackHotUpdate_N_E"]("pages/admin/product/[id]",{

/***/ "./pages/admin/product/[id].js":
/*!*************************************!*\
  !*** ./pages/admin/product/[id].js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSP": function() { return /* binding */ __N_SSP; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_User_Desktop_ecom_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_User_Desktop_ecom_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_User_Desktop_ecom_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_User_Desktop_ecom_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_User_Desktop_ecom_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _utils_error__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../utils/error */ "./utils/error.js");
/* harmony import */ var _utils_Store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../utils/Store */ "./utils/Store.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _utils_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../utils/styles */ "./utils/styles.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/dist/notistack.esm.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\User\\Desktop\\ecom-nextjs\\pages\\admin\\product\\[id].js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_User_Desktop_ecom_nextjs_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }














function reducer(state, action) {
  switch (action.type) {
    case "FETCH_REQUEST":
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true,
        error: ""
      });

    case "FETCH_SUCCESS":
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: ""
      });

    case "FETCH_FAIL":
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: action.payload
      });

    default:
      return state;
  }
}

function ProductEdit(_ref) {
  _s();

  var _this = this;

  var params = _ref.params;
  var productId = params.id;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_8__.useContext)(_utils_Store__WEBPACK_IMPORTED_MODULE_10__.Store),
      state = _useContext.state;

  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_8__.useReducer)(reducer, {
    loading: true,
    error: ""
  }),
      _useReducer$ = _useReducer[0],
      loading = _useReducer$.loading,
      error = _useReducer$.error,
      dispatch = _useReducer[1];

  var _useForm = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_13__.useForm)(),
      handleSubmit = _useForm.handleSubmit,
      control = _useForm.control,
      errors = _useForm.formState.errors,
      setValue = _useForm.setValue;

  var _useSnackbar = (0,notistack__WEBPACK_IMPORTED_MODULE_14__.useSnackbar)(),
      enqueueSnackbar = _useSnackbar.enqueueSnackbar,
      closeSnackbar = _useSnackbar.closeSnackbar;

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
  var classes = (0,_utils_styles__WEBPACK_IMPORTED_MODULE_12__.default)();
  var userInfo = state.userInfo;
  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(function () {
    if (!userInfo) {
      return router.push("/login");
    } else {
      var fetchData = /*#__PURE__*/function () {
        var _ref2 = (0,C_Users_User_Desktop_ecom_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_User_Desktop_ecom_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
          var _yield$axios$get, data;

          return C_Users_User_Desktop_ecom_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  dispatch({
                    type: "FETCH_REQUEST"
                  });
                  _context.next = 4;
                  return axios__WEBPACK_IMPORTED_MODULE_4___default().get("/api/admin/products/".concat(productId), {
                    headers: {
                      authorization: "Bearer ".concat(userInfo.token)
                    }
                  });

                case 4:
                  _yield$axios$get = _context.sent;
                  data = _yield$axios$get.data;
                  dispatch({
                    type: "FETCH_SUCCESS"
                  });
                  setValue("name", data.name);
                  setValue("slug", data.slug);
                  setValue("price", data.price);
                  setValue("image", data.image);
                  setValue("category", data.category);
                  setValue("brand", data.brand);
                  setValue("countInStock", data.countInStock);
                  setValue("description", data.description);
                  _context.next = 20;
                  break;

                case 17:
                  _context.prev = 17;
                  _context.t0 = _context["catch"](0);
                  dispatch({
                    type: "FETCH_FAIL",
                    payload: (0,_utils_error__WEBPACK_IMPORTED_MODULE_9__.getError)(_context.t0)
                  });

                case 20:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[0, 17]]);
        }));

        return function fetchData() {
          return _ref2.apply(this, arguments);
        };
      }();

      fetchData();
    }
  }, []);

  var submitHandler = /*#__PURE__*/function () {
    var _ref4 = (0,C_Users_User_Desktop_ecom_nextjs_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_User_Desktop_ecom_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(_ref3) {
      var name, _yield$axios$put, data;

      return C_Users_User_Desktop_ecom_nextjs_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              name = _ref3.name;
              closeSnackbar();
              _context2.prev = 2;
              _context2.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_4___default().put("/api/admin/products/".concat(productId), {
                name: name
              }, {
                headers: {
                  authorization: "Bearer ".concat(userInfo.token)
                }
              });

            case 5:
              _yield$axios$put = _context2.sent;
              data = _yield$axios$put.data;
              enqueueSnackbar("Product updated successfully", {
                variant: "success"
              });
              _context2.next = 13;
              break;

            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](2);
              enqueueSnackbar((0,_utils_error__WEBPACK_IMPORTED_MODULE_9__.getError)(_context2.t0), {
                variant: "error"
              });

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 10]]);
    }));

    return function submitHandler(_x) {
      return _ref4.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_11__.default, {
    title: "Edit Product ".concat(productId),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.Grid, {
      container: true,
      spacing: 1,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.Grid, {
        item: true,
        md: 3,
        xs: 12,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.Card, {
          className: classes.section,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.List, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
              href: "/admin/dashboard",
              passHref: true,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.ListItem, {
                button: true,
                component: "a",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.ListItemText, {
                  primary: "Admin Dashboard"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
              href: "/admin/orders",
              passHref: true,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.ListItem, {
                button: true,
                component: "a",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.ListItemText, {
                  primary: "Orders"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 111,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
              href: "/admin/products",
              passHref: true,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.ListItem, {
                selected: true,
                button: true,
                component: "a",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.ListItemText, {
                  primary: "Products"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 116,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 115,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.Grid, {
        item: true,
        md: 9,
        xs: 12,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.Card, {
          className: classes.section,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.List, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.ListItem, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.Typography, {
                component: "h1",
                variant: "h1",
                children: ["Edit Product ", productId]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.ListItem, {
              children: [loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.CircularProgress, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 29
              }, this), error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.Typography, {
                className: classes.error,
                children: error
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.ListItem, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
                onSubmit: handleSubmit(submitHandler),
                className: classes.form,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.List, {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.ListItem, {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hook_form__WEBPACK_IMPORTED_MODULE_13__.Controller, {
                      name: "name",
                      control: control,
                      defaultValue: "",
                      rules: {
                        required: true
                      },
                      render: function render(_ref5) {
                        var field = _ref5.field;
                        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.TextField, _objectSpread({
                          variant: "outlined",
                          fullWidth: true,
                          id: "name",
                          label: "Name",
                          error: Boolean(errors.name),
                          helperText: errors.name ? "Name is required" : ""
                        }, field), void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 151,
                          columnNumber: 27
                        }, _this);
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 143,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 142,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.ListItem, {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hook_form__WEBPACK_IMPORTED_MODULE_13__.Controller, {
                      name: "slug",
                      control: control,
                      defaultValue: "",
                      rules: {
                        required: true
                      },
                      render: function render(_ref6) {
                        var field = _ref6.field;
                        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.TextField, _objectSpread({
                          variant: "outlined",
                          fullWidth: true,
                          id: "slug",
                          label: "Slug",
                          error: Boolean(errors.slug),
                          helperText: errors.slug ? "Slug is required" : ""
                        }, field), void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 172,
                          columnNumber: 27
                        }, _this);
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 164,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 163,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.ListItem, {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hook_form__WEBPACK_IMPORTED_MODULE_13__.Controller, {
                      name: "price",
                      control: control,
                      defaultValue: "",
                      rules: {
                        required: true
                      },
                      render: function render(_ref7) {
                        var field = _ref7.field;
                        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.TextField, _objectSpread({
                          variant: "outlined",
                          fullWidth: true,
                          id: "price",
                          label: "Price",
                          error: Boolean(errors.price),
                          helperText: errors.price ? "Price is required" : ""
                        }, field), void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 193,
                          columnNumber: 27
                        }, _this);
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 185,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 184,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.ListItem, {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hook_form__WEBPACK_IMPORTED_MODULE_13__.Controller, {
                      name: "image",
                      control: control,
                      defaultValue: "",
                      rules: {
                        required: true
                      },
                      render: function render(_ref8) {
                        var field = _ref8.field;
                        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.TextField, _objectSpread({
                          variant: "outlined",
                          fullWidth: true,
                          id: "image",
                          label: "Image",
                          error: Boolean(errors.image),
                          helperText: errors.image ? "Image is required" : ""
                        }, field), void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 214,
                          columnNumber: 27
                        }, _this);
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 206,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 205,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.ListItem, {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hook_form__WEBPACK_IMPORTED_MODULE_13__.Controller, {
                      name: "category",
                      control: control,
                      defaultValue: "",
                      rules: {
                        required: true
                      },
                      render: function render(_ref9) {
                        var field = _ref9.field;
                        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.TextField, _objectSpread({
                          variant: "outlined",
                          fullWidth: true,
                          id: "category",
                          label: "Category",
                          error: Boolean(errors.category),
                          helperText: errors.category ? "Category is required" : ""
                        }, field), void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 235,
                          columnNumber: 27
                        }, _this);
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 227,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 226,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.ListItem, {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hook_form__WEBPACK_IMPORTED_MODULE_13__.Controller, {
                      name: "brand",
                      control: control,
                      defaultValue: "",
                      rules: {
                        required: true
                      },
                      render: function render(_ref10) {
                        var field = _ref10.field;
                        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.TextField, _objectSpread({
                          variant: "outlined",
                          fullWidth: true,
                          id: "brand",
                          label: "Brand",
                          error: Boolean(errors.brand),
                          helperText: errors.brand ? "Brand is required" : ""
                        }, field), void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 258,
                          columnNumber: 27
                        }, _this);
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 250,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 249,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.ListItem, {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hook_form__WEBPACK_IMPORTED_MODULE_13__.Controller, {
                      name: "countInStock",
                      control: control,
                      defaultValue: "",
                      rules: {
                        required: true
                      },
                      render: function render(_ref11) {
                        var field = _ref11.field;
                        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.TextField, _objectSpread({
                          variant: "outlined",
                          fullWidth: true,
                          id: "countInStock",
                          label: "Count in stock",
                          error: Boolean(errors.countInStock),
                          helperText: errors.countInStock ? "Count in stock is required" : ""
                        }, field), void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 279,
                          columnNumber: 27
                        }, _this);
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 271,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 270,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.ListItem, {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hook_form__WEBPACK_IMPORTED_MODULE_13__.Controller, {
                      name: "description",
                      control: control,
                      defaultValue: "",
                      rules: {
                        required: true
                      },
                      render: function render(_ref12) {
                        var field = _ref12.field;
                        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.TextField, _objectSpread({
                          variant: "outlined",
                          fullWidth: true,
                          multiline: true,
                          id: "description",
                          label: "Description",
                          error: Boolean(errors.description),
                          helperText: errors.description ? "Description is required" : ""
                        }, field), void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 304,
                          columnNumber: 27
                        }, _this);
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 296,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 295,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.ListItem, {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.Button, {
                      variant: "contained",
                      type: "submit",
                      fullWidth: true,
                      color: "primary",
                      children: "Update"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 323,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 322,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 141,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 99,
    columnNumber: 5
  }, this);
}

_s(ProductEdit, "oYOXQec3u0VE2AUtIoxM7SBxPmg=", false, function () {
  return [react_hook_form__WEBPACK_IMPORTED_MODULE_13__.useForm, notistack__WEBPACK_IMPORTED_MODULE_14__.useSnackbar, next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter, _utils_styles__WEBPACK_IMPORTED_MODULE_12__.default];
});

_c = ProductEdit;
var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (_c3 = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(_c2 = function _c2() {
  return Promise.resolve(ProductEdit);
}, {
  ssr: false
}));

var _c, _c2, _c3;

$RefreshReg$(_c, "ProductEdit");
$RefreshReg$(_c2, "%default%$dynamic");
$RefreshReg$(_c3, "%default%");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vcHJvZHVjdC9baWRdLjdiZTAyNGJmOTQwNDAwYzE1NDEwLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTd0IsT0FBVCxDQUFpQkMsS0FBakIsRUFBd0JDLE1BQXhCLEVBQWdDO0FBQzlCLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUssZUFBTDtBQUNFLDZDQUFZRixLQUFaO0FBQW1CRyxRQUFBQSxPQUFPLEVBQUUsSUFBNUI7QUFBa0NDLFFBQUFBLEtBQUssRUFBRTtBQUF6Qzs7QUFDRixTQUFLLGVBQUw7QUFDRSw2Q0FBWUosS0FBWjtBQUFtQkcsUUFBQUEsT0FBTyxFQUFFLEtBQTVCO0FBQW1DQyxRQUFBQSxLQUFLLEVBQUU7QUFBMUM7O0FBQ0YsU0FBSyxZQUFMO0FBQ0UsNkNBQVlKLEtBQVo7QUFBbUJHLFFBQUFBLE9BQU8sRUFBRSxLQUE1QjtBQUFtQ0MsUUFBQUEsS0FBSyxFQUFFSCxNQUFNLENBQUNJO0FBQWpEOztBQUNGO0FBQ0UsYUFBT0wsS0FBUDtBQVJKO0FBVUQ7O0FBRUQsU0FBU00sV0FBVCxPQUFpQztBQUFBOztBQUFBOztBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTtBQUMvQixNQUFNQyxTQUFTLEdBQUdELE1BQU0sQ0FBQ0UsRUFBekI7O0FBRCtCLG9CQUViNUIsaURBQVUsQ0FBQ1ksZ0RBQUQsQ0FGRztBQUFBLE1BRXZCTyxLQUZ1QixlQUV2QkEsS0FGdUI7O0FBQUEsb0JBR1FsQixpREFBVSxDQUFDaUIsT0FBRCxFQUFVO0FBQ3pESSxJQUFBQSxPQUFPLEVBQUUsSUFEZ0Q7QUFFekRDLElBQUFBLEtBQUssRUFBRTtBQUZrRCxHQUFWLENBSGxCO0FBQUE7QUFBQSxN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LGVBcUxFLDhEQUFDLHdEQUFEO0FBQUEsMkNBQ0UsOERBQUMsc0RBQUQ7QUFDRSw2QkFBTyxFQUFDLFdBRFY7QUFFRSwwQkFBSSxFQUFDLFFBRlA7QUFHRSwrQkFBUyxNQUhYO0FBSUUsMkJBQUssRUFBQyxTQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFyTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F0QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBbVBEOztHQWhUUXBDO1VBWUhULHVEQUN1Q0MscURBQzVCckIsb0RBQ0NrQjs7O0tBZlRXOztBQXdUVCwrREFBZSxNQUFBOUIsbURBQU8sT0FBQztBQUFBLFNBQU1vRSxPQUFPLENBQUNDLE9BQVIsQ0FBZ0J2QyxXQUFoQixDQUFOO0FBQUEsQ0FBRCxFQUFxQztBQUFFd0MsRUFBQUEsR0FBRyxFQUFFO0FBQVAsQ0FBckMsQ0FBdEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vcHJvZHVjdC9baWRdLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IE5leHRMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlQ29udGV4dCwgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIEdyaWQsXHJcbiAgTGlzdCxcclxuICBMaXN0SXRlbSxcclxuICBUeXBvZ3JhcGh5LFxyXG4gIENhcmQsXHJcbiAgQnV0dG9uLFxyXG4gIExpc3RJdGVtVGV4dCxcclxuICBUZXh0RmllbGQsXHJcbiAgQ2lyY3VsYXJQcm9ncmVzcyxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgZ2V0RXJyb3IgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvZXJyb3JcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvU3RvcmVcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IHVzZVN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvc3R5bGVzXCI7XHJcbmltcG9ydCB7IENvbnRyb2xsZXIsIHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XHJcbmltcG9ydCB7IHVzZVNuYWNrYmFyIH0gZnJvbSBcIm5vdGlzdGFja1wiO1xyXG5cclxuZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBcIkZFVENIX1JFUVVFU1RcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IHRydWUsIGVycm9yOiBcIlwiIH07XHJcbiAgICBjYXNlIFwiRkVUQ0hfU1VDQ0VTU1wiOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogZmFsc2UsIGVycm9yOiBcIlwiIH07XHJcbiAgICBjYXNlIFwiRkVUQ0hfRkFJTFwiOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogZmFsc2UsIGVycm9yOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gUHJvZHVjdEVkaXQoeyBwYXJhbXMgfSkge1xyXG4gIGNvbnN0IHByb2R1Y3RJZCA9IHBhcmFtcy5pZDtcclxuICBjb25zdCB7IHN0YXRlIH0gPSB1c2VDb250ZXh0KFN0b3JlKTtcclxuICBjb25zdCBbeyBsb2FkaW5nLCBlcnJvciB9LCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIHtcclxuICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICBlcnJvcjogXCJcIixcclxuICB9KTtcclxuICBjb25zdCB7XHJcbiAgICBoYW5kbGVTdWJtaXQsXHJcbiAgICBjb250cm9sLFxyXG4gICAgZm9ybVN0YXRlOiB7IGVycm9ycyB9LFxyXG4gICAgc2V0VmFsdWUsXHJcbiAgfSA9IHVzZUZvcm0oKTtcclxuICBjb25zdCB7IGVucXVldWVTbmFja2JhciwgY2xvc2VTbmFja2JhciB9ID0gdXNlU25hY2tiYXIoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgeyB1c2VySW5mbyB9ID0gc3RhdGU7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXVzZXJJbmZvKSB7XHJcbiAgICAgIHJldHVybiByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIkZFVENIX1JFUVVFU1RcIiB9KTtcclxuICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL2FkbWluL3Byb2R1Y3RzLyR7cHJvZHVjdElkfWAsIHtcclxuICAgICAgICAgICAgaGVhZGVyczogeyBhdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dXNlckluZm8udG9rZW59YCB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiRkVUQ0hfU1VDQ0VTU1wiIH0pO1xyXG4gICAgICAgICAgc2V0VmFsdWUoXCJuYW1lXCIsIGRhdGEubmFtZSk7XHJcbiAgICAgICAgICBzZXRWYWx1ZShcInNsdWdcIiwgZGF0YS5zbHVnKTtcclxuICAgICAgICAgIHNldFZhbHVlKFwicHJpY2VcIiwgZGF0YS5wcmljZSk7XHJcbiAgICAgICAgICBzZXRWYWx1ZShcImltYWdlXCIsIGRhdGEuaW1hZ2UpO1xyXG4gICAgICAgICAgc2V0VmFsdWUoXCJjYXRlZ29yeVwiLCBkYXRhLmNhdGVnb3J5KTtcclxuICAgICAgICAgIHNldFZhbHVlKFwiYnJhbmRcIiwgZGF0YS5icmFuZCk7XHJcbiAgICAgICAgICBzZXRWYWx1ZShcImNvdW50SW5TdG9ja1wiLCBkYXRhLmNvdW50SW5TdG9jayk7XHJcbiAgICAgICAgICBzZXRWYWx1ZShcImRlc2NyaXB0aW9uXCIsIGRhdGEuZGVzY3JpcHRpb24pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIkZFVENIX0ZBSUxcIiwgcGF5bG9hZDogZ2V0RXJyb3IoZXJyKSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgIGZldGNoRGF0YSgpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuICBcclxuICBjb25zdCBzdWJtaXRIYW5kbGVyID0gYXN5bmMgKHsgbmFtZSB9KSA9PiB7XHJcbiAgICBjbG9zZVNuYWNrYmFyKCk7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnB1dChcclxuICAgICAgICBgL2FwaS9hZG1pbi9wcm9kdWN0cy8ke3Byb2R1Y3RJZH1gLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IGhlYWRlcnM6IHsgYXV0aG9yaXphdGlvbjogYEJlYXJlciAke3VzZXJJbmZvLnRva2VufWAgfSB9XHJcbiAgICAgICk7XHJcblxyXG4gICAgICBlbnF1ZXVlU25hY2tiYXIoXCJQcm9kdWN0IHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5XCIsIHsgdmFyaWFudDogXCJzdWNjZXNzXCIgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgZW5xdWV1ZVNuYWNrYmFyKGdldEVycm9yKGVyciksIHsgdmFyaWFudDogXCJlcnJvclwiIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgdGl0bGU9e2BFZGl0IFByb2R1Y3QgJHtwcm9kdWN0SWR9YH0+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsxfT5cclxuICAgICAgICA8R3JpZCBpdGVtIG1kPXszfSB4cz17MTJ9PlxyXG4gICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb259PlxyXG4gICAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi9hZG1pbi9kYXNoYm9hcmRcIiBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY29tcG9uZW50PVwiYVwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJBZG1pbiBEYXNoYm9hcmRcIj48L0xpc3RJdGVtVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9OZXh0TGluaz5cclxuICAgICAgICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi9hZG1pbi9vcmRlcnNcIiBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY29tcG9uZW50PVwiYVwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJPcmRlcnNcIj48L0xpc3RJdGVtVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9OZXh0TGluaz5cclxuICAgICAgICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi9hZG1pbi9wcm9kdWN0c1wiIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtIHNlbGVjdGVkIGJ1dHRvbiBjb21wb25lbnQ9XCJhXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlByb2R1Y3RzXCI+PC9MaXN0SXRlbVRleHQ+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgIDwvTmV4dExpbms+XHJcbiAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSBtZD17OX0geHM9ezEyfT5cclxuICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9ufT5cclxuICAgICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDFcIiB2YXJpYW50PVwiaDFcIj5cclxuICAgICAgICAgICAgICAgICAgRWRpdCBQcm9kdWN0IHtwcm9kdWN0SWR9XHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICB7bG9hZGluZyAmJiA8Q2lyY3VsYXJQcm9ncmVzcz48L0NpcmN1bGFyUHJvZ3Jlc3M+fVxyXG4gICAgICAgICAgICAgICAge2Vycm9yICYmIChcclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmVycm9yfT57ZXJyb3J9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQoc3VibWl0SGFuZGxlcil9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e0Jvb2xlYW4oZXJyb3JzLm5hbWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscGVyVGV4dD17ZXJyb3JzLm5hbWUgPyBcIk5hbWUgaXMgcmVxdWlyZWRcIiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvQ29udHJvbGxlcj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDb250cm9sbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzbHVnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZCB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzbHVnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU2x1Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17Qm9vbGVhbihlcnJvcnMuc2x1Zyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtlcnJvcnMuc2x1ZyA/IFwiU2x1ZyBpcyByZXF1aXJlZFwiIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9Db250cm9sbGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZCB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtCb29sZWFuKGVycm9ycy5wcmljZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtlcnJvcnMucHJpY2UgPyBcIlByaWNlIGlzIHJlcXVpcmVkXCIgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID48L1RleHRGaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgID48L0NvbnRyb2xsZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBydWxlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiSW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e0Jvb2xlYW4oZXJyb3JzLmltYWdlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9e2Vycm9ycy5pbWFnZSA/IFwiSW1hZ2UgaXMgcmVxdWlyZWRcIiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvQ29udHJvbGxlcj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDb250cm9sbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjYXRlZ29yeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDYXRlZ29yeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17Qm9vbGVhbihlcnJvcnMuY2F0ZWdvcnkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscGVyVGV4dD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5jYXRlZ29yeSA/IFwiQ2F0ZWdvcnkgaXMgcmVxdWlyZWRcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9Db250cm9sbGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJyYW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZCB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJicmFuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkJyYW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtCb29sZWFuKGVycm9ycy5icmFuZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtlcnJvcnMuYnJhbmQgPyBcIkJyYW5kIGlzIHJlcXVpcmVkXCIgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID48L1RleHRGaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgID48L0NvbnRyb2xsZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY291bnRJblN0b2NrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZCB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjb3VudEluU3RvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDb3VudCBpbiBzdG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17Qm9vbGVhbihlcnJvcnMuY291bnRJblN0b2NrKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMuY291bnRJblN0b2NrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkNvdW50IGluIHN0b2NrIGlzIHJlcXVpcmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9Db250cm9sbGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZCB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e0Jvb2xlYW4oZXJyb3JzLmRlc2NyaXB0aW9uKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMuZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiRGVzY3JpcHRpb24gaXMgcmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID48L1RleHRGaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgID48L0NvbnRyb2xsZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBVcGRhdGVcclxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcGFyYW1zIH0pIHtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgcGFyYW1zIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZHluYW1pYygoKSA9PiBQcm9taXNlLnJlc29sdmUoUHJvZHVjdEVkaXQpLCB7IHNzcjogZmFsc2UgfSk7XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsImR5bmFtaWMiLCJ1c2VSb3V0ZXIiLCJOZXh0TGluayIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsInVzZVJlZHVjZXIiLCJHcmlkIiwiTGlzdCIsIkxpc3RJdGVtIiwiVHlwb2dyYXBoeSIsIkNhcmQiLCJCdXR0b24iLCJMaXN0SXRlbVRleHQiLCJUZXh0RmllbGQiLCJDaXJjdWxhclByb2dyZXNzIiwiZ2V0RXJyb3IiLCJTdG9yZSIsIkxheW91dCIsInVzZVN0eWxlcyIsIkNvbnRyb2xsZXIiLCJ1c2VGb3JtIiwidXNlU25hY2tiYXIiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwibG9hZGluZyIsImVycm9yIiwicGF5bG9hZCIsIlByb2R1Y3RFZGl0IiwicGFyYW1zIiwicHJvZHVjdElkIiwiaWQiLCJkaXNwYXRjaCIsImhhbmRsZVN1Ym1pdCIsImNvbnRyb2wiLCJlcnJvcnMiLCJmb3JtU3RhdGUiLCJzZXRWYWx1ZSIsImVucXVldWVTbmFja2JhciIsImNsb3NlU25hY2tiYXIiLCJyb3V0ZXIiLCJjbGFzc2VzIiwidXNlckluZm8iLCJwdXNoIiwiZmV0Y2hEYXRhIiwiZ2V0IiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJ0b2tlbiIsImRhdGEiLCJuYW1lIiwic2x1ZyIsInByaWNlIiwiaW1hZ2UiLCJjYXRlZ29yeSIsImJyYW5kIiwiY291bnRJblN0b2NrIiwiZGVzY3JpcHRpb24iLCJzdWJtaXRIYW5kbGVyIiwicHV0IiwidmFyaWFudCIsInNlY3Rpb24iLCJmb3JtIiwicmVxdWlyZWQiLCJmaWVsZCIsIkJvb2xlYW4iLCJQcm9taXNlIiwicmVzb2x2ZSIsInNzciJdLCJzb3VyY2VSb290IjoiIn0=