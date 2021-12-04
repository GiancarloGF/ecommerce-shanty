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
/* harmony import */ var C_Users_USER_Documents_GitHub_ecommerce_shanty_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_USER_Documents_GitHub_ecommerce_shanty_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_USER_Documents_GitHub_ecommerce_shanty_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_USER_Documents_GitHub_ecommerce_shanty_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_USER_Documents_GitHub_ecommerce_shanty_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
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






var _jsxFileName = "C:\\Users\\USER\\Documents\\GitHub\\ecommerce-shanty\\pages\\admin\\product\\[id].js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_USER_Documents_GitHub_ecommerce_shanty_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }














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

    case "UPDATE_REQUEST":
      return _objectSpread(_objectSpread({}, state), {}, {
        loadingUpdate: true,
        errorUpdate: ""
      });

    case "UPDATE_SUCCESS":
      return _objectSpread(_objectSpread({}, state), {}, {
        loadingUpdate: false,
        errorUpdate: ""
      });

    case "UPDATE_FAIL":
      return _objectSpread(_objectSpread({}, state), {}, {
        loadingUpdate: false,
        errorUpdate: action.payload
      });

    case 'UPLOAD_REQUEST':
      return _objectSpread(_objectSpread({}, state), {}, {
        loadingUpload: true,
        errorUpload: ''
      });

    case 'UPLOAD_SUCCESS':
      return _objectSpread(_objectSpread({}, state), {}, {
        loadingUpload: false,
        errorUpload: ''
      });

    case 'UPLOAD_FAIL':
      return _objectSpread(_objectSpread({}, state), {}, {
        loadingUpload: false,
        errorUpload: action.payload
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
      loadingUpdate = _useReducer$.loadingUpdate,
      loadingUpload = _useReducer$.loadingUpload,
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
        var _ref2 = (0,C_Users_USER_Documents_GitHub_ecommerce_shanty_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_USER_Documents_GitHub_ecommerce_shanty_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
          var _yield$axios$get, data;

          return C_Users_USER_Documents_GitHub_ecommerce_shanty_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
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
                    } //This is the token from the login used to authenticate the user when fetching data.

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
                  setValue('featuredImage', data.featuredImage);
                  setIsFeatured(data.isFeatured);
                  setValue("category", data.category);
                  setValue("brand", data.brand);
                  setValue("countInStock", data.countInStock);
                  setValue("description", data.description);
                  _context.next = 22;
                  break;

                case 19:
                  _context.prev = 19;
                  _context.t0 = _context["catch"](0);
                  dispatch({
                    type: "FETCH_FAIL",
                    payload: (0,_utils_error__WEBPACK_IMPORTED_MODULE_9__.getError)(_context.t0)
                  });

                case 22:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[0, 19]]);
        }));

        return function fetchData() {
          return _ref2.apply(this, arguments);
        };
      }();

      fetchData();
    }
  }, []);

  var uploadHandler = /*#__PURE__*/function () {
    var _ref3 = (0,C_Users_USER_Documents_GitHub_ecommerce_shanty_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_USER_Documents_GitHub_ecommerce_shanty_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(e) {
      var imageField,
          file,
          bodyFormData,
          _yield$axios$post,
          data,
          _args2 = arguments;

      return C_Users_USER_Documents_GitHub_ecommerce_shanty_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              imageField = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : 'image';
              file = e.target.files[0];
              bodyFormData = new FormData();
              bodyFormData.append('file', file);
              _context2.prev = 4;
              dispatch({
                type: 'UPLOAD_REQUEST'
              });
              _context2.next = 8;
              return axios__WEBPACK_IMPORTED_MODULE_4___default().post('/api/admin/upload', bodyFormData, {
                headers: {
                  'Content-Type': 'multipart/form-data',
                  authorization: "Bearer ".concat(userInfo.token)
                }
              });

            case 8:
              _yield$axios$post = _context2.sent;
              data = _yield$axios$post.data;
              dispatch({
                type: 'UPLOAD_SUCCESS'
              });
              setValue(imageField, data.secure_url);
              enqueueSnackbar('File uploaded successfully', {
                variant: 'success'
              });
              _context2.next = 19;
              break;

            case 15:
              _context2.prev = 15;
              _context2.t0 = _context2["catch"](4);
              dispatch({
                type: 'UPLOAD_FAIL',
                payload: (0,_utils_error__WEBPACK_IMPORTED_MODULE_9__.getError)(_context2.t0)
              });
              enqueueSnackbar((0,_utils_error__WEBPACK_IMPORTED_MODULE_9__.getError)(_context2.t0), {
                variant: 'error'
              });

            case 19:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[4, 15]]);
    }));

    return function uploadHandler(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  var submitHandler = /*#__PURE__*/function () {
    var _ref5 = (0,C_Users_USER_Documents_GitHub_ecommerce_shanty_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_USER_Documents_GitHub_ecommerce_shanty_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee3(_ref4) {
      var name, slug, price, category, image, featuredImage, brand, countInStock, description;
      return C_Users_USER_Documents_GitHub_ecommerce_shanty_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              name = _ref4.name, slug = _ref4.slug, price = _ref4.price, category = _ref4.category, image = _ref4.image, featuredImage = _ref4.featuredImage, brand = _ref4.brand, countInStock = _ref4.countInStock, description = _ref4.description;
              closeSnackbar();
              _context3.prev = 2;
              dispatch({
                type: "UPDATE_REQUEST"
              });
              _context3.next = 6;
              return axios__WEBPACK_IMPORTED_MODULE_4___default().put("/api/admin/products/".concat(productId), {
                name: name,
                slug: slug,
                price: price,
                category: category,
                image: image,
                isFeatured: isFeatured,
                featuredImage: featuredImage,
                brand: brand,
                countInStock: countInStock,
                description: description
              }, {
                headers: {
                  authorization: "Bearer ".concat(userInfo.token)
                }
              });

            case 6:
              dispatch({
                type: "UPDATE_SUCCESS"
              });
              enqueueSnackbar("Product updated successfully", {
                variant: "success"
              });
              router.push("/admin/products");
              _context3.next = 15;
              break;

            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3["catch"](2);
              dispatch({
                type: "UPDATE_FAIL",
                payload: (0,_utils_error__WEBPACK_IMPORTED_MODULE_9__.getError)(_context3.t0)
              });
              enqueueSnackbar((0,_utils_error__WEBPACK_IMPORTED_MODULE_9__.getError)(_context3.t0), {
                variant: "error"
              });

            case 15:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[2, 11]]);
    }));

    return function submitHandler(_x2) {
      return _ref5.apply(this, arguments);
    };
  }();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false),
      isFeatured = _useState[0],
      setIsFeatured = _useState[1];

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
                  lineNumber: 169,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 168,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 167,
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
                  lineNumber: 174,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 173,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 172,
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
                  lineNumber: 179,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 178,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_7___default()), {
              href: "/admin/users",
              passHref: true,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.ListItem, {
                button: true,
                component: "a",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.ListItemText, {
                  primary: "Users"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 184,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 183,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 182,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 164,
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
                lineNumber: 194,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 193,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.ListItem, {
              children: [loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.CircularProgress, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 199,
                columnNumber: 29
              }, this), error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.Typography, {
                className: classes.error,
                children: error
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 201,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 198,
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
                      render: function render(_ref6) {
                        var field = _ref6.field;
                        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.TextField, _objectSpread({
                          variant: "outlined",
                          fullWidth: true,
                          id: "name",
                          label: "Name",
                          error: Boolean(errors.name),
                          helperText: errors.name ? "Name is required" : ""
                        }, field), void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 219,
                          columnNumber: 27
                        }, _this);
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 211,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 210,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.ListItem, {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hook_form__WEBPACK_IMPORTED_MODULE_13__.Controller, {
                      name: "slug",
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
                          id: "slug",
                          label: "Slug",
                          error: Boolean(errors.slug),
                          helperText: errors.slug ? "Slug is required" : ""
                        }, field), void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 240,
                          columnNumber: 27
                        }, _this);
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 232,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 231,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.ListItem, {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hook_form__WEBPACK_IMPORTED_MODULE_13__.Controller, {
                      name: "price",
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
                          id: "price",
                          label: "Price",
                          error: Boolean(errors.price),
                          helperText: errors.price ? "Price is required" : ""
                        }, field), void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 261,
                          columnNumber: 27
                        }, _this);
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 253,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 252,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.ListItem, {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hook_form__WEBPACK_IMPORTED_MODULE_13__.Controller, {
                      name: "image",
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
                          id: "image",
                          label: "Image",
                          error: Boolean(errors.image),
                          helperText: errors.image ? "Image is required" : ""
                        }, field), void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 282,
                          columnNumber: 27
                        }, _this);
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 274,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 273,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.ListItem, {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.Button, {
                      variant: "contained",
                      component: "label",
                      children: ["Upload File", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                        type: "file",
                        onChange: uploadHandler,
                        hidden: true
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 297,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 295,
                      columnNumber: 23
                    }, this), loadingUpload && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.CircularProgress, {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 299,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 294,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.ListItem, {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.FormControlLabel, {
                      label: "Is Featured",
                      control: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.Checkbox, {
                        onClick: function onClick(e) {
                          return setIsFeatured(e.target.checked);
                        },
                        checked: isFeatured,
                        name: "isFeatured"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 305,
                        columnNumber: 27
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 302,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 301,
                    columnNumber: 21
                  }, this), isFeatured && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.ListItem, {
                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hook_form__WEBPACK_IMPORTED_MODULE_13__.Controller, {
                        name: "featuredImage",
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
                            id: "featuredImage",
                            label: "Featured Image",
                            error: Boolean(errors.featuredImage),
                            helperText: errors.featuredImage ? 'Featured Image is required' : ''
                          }, field), void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 324,
                            columnNumber: 31
                          }, _this);
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 316,
                        columnNumber: 27
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 315,
                      columnNumber: 25
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.ListItem, {
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.Button, {
                        variant: "contained",
                        component: "label",
                        children: ["Upload File", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                          type: "file",
                          onChange: function onChange(e) {
                            return uploadHandler(e, 'featuredImage');
                          },
                          hidden: true
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 341,
                          columnNumber: 29
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 339,
                        columnNumber: 27
                      }, this), loadingUpload && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.CircularProgress, {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 347,
                        columnNumber: 45
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 338,
                      columnNumber: 25
                    }, this)]
                  }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.ListItem, {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hook_form__WEBPACK_IMPORTED_MODULE_13__.Controller, {
                      name: "category",
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
                          id: "category",
                          label: "Category",
                          error: Boolean(errors.category),
                          helperText: errors.category ? "Category is required" : ""
                        }, field), void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 362,
                          columnNumber: 27
                        }, _this);
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 354,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 353,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.ListItem, {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hook_form__WEBPACK_IMPORTED_MODULE_13__.Controller, {
                      name: "brand",
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
                          id: "brand",
                          label: "Brand",
                          error: Boolean(errors.brand),
                          helperText: errors.brand ? "Brand is required" : ""
                        }, field), void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 385,
                          columnNumber: 27
                        }, _this);
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 377,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 376,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.ListItem, {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hook_form__WEBPACK_IMPORTED_MODULE_13__.Controller, {
                      name: "countInStock",
                      control: control,
                      defaultValue: "",
                      rules: {
                        required: true
                      },
                      render: function render(_ref13) {
                        var field = _ref13.field;
                        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.TextField, _objectSpread({
                          variant: "outlined",
                          fullWidth: true,
                          id: "countInStock",
                          label: "Count in stock",
                          error: Boolean(errors.countInStock),
                          helperText: errors.countInStock ? "Count in stock is required" : ""
                        }, field), void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 406,
                          columnNumber: 27
                        }, _this);
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 398,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 397,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.ListItem, {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hook_form__WEBPACK_IMPORTED_MODULE_13__.Controller, {
                      name: "description",
                      control: control,
                      defaultValue: "",
                      rules: {
                        required: true
                      },
                      render: function render(_ref14) {
                        var field = _ref14.field;
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
                          lineNumber: 431,
                          columnNumber: 27
                        }, _this);
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 423,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 422,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.ListItem, {
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.Button, {
                      variant: "contained",
                      type: "submit",
                      fullWidth: true,
                      color: "primary",
                      children: "Update"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 450,
                      columnNumber: 23
                    }, this), loadingUpdate && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.CircularProgress, {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 458,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 449,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 209,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 205,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 204,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 192,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 162,
    columnNumber: 5
  }, this);
}

_s(ProductEdit, "hwFoxA3DwnU8VKF09XMdwztcUkE=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vcHJvZHVjdC9baWRdLjAzMmU5NzFiNDUxMTQ1YTExY2FiLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUzJCLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCQyxNQUF4QixFQUFnQztBQUM5QixVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLLGVBQUw7QUFDRSw2Q0FBWUYsS0FBWjtBQUFtQkcsUUFBQUEsT0FBTyxFQUFFLElBQTVCO0FBQWtDQyxRQUFBQSxLQUFLLEVBQUU7QUFBekM7O0FBQ0YsU0FBSyxlQUFMO0FBQ0UsNkNBQVlKLEtBQVo7QUFBbUJHLFFBQUFBLE9BQU8sRUFBRSxLQUE1QjtBQUFtQ0MsUUFBQUEsS0FBSyxFQUFFO0FBQTFDOztBQUNGLFNBQUssWUFBTDtBQUNFLDZDQUFZSixLQUFaO0FBQW1CRyxRQUFBQSxPQUFPLEVBQUUsS0FBNUI7QUFBbUNDLFFBQUFBLEtBQUssRUFBRUgsTUFBTSxDQUFDSTtBQUFqRDs7QUFDRixTQUFLLGdCQUFMO0FBQ0UsNkNBQVlMLEtBQVo7QUFBbUJNLFFBQUFBLGFBQWEsRUFBRSxJQUFsQztBQUF3Q0MsUUFBQUEsV0FBVyxFQUFFO0FBQXJEOztBQUNGLFNBQUssZ0JBQUw7QUFDRSw2Q0FBWVAsS0FBWjtBQUFtQk0sUUFBQUEsYUFBYSxFQUFFLEtBQWxDO0FBQXlDQyxRQUFBQSxXQUFXLEVBQUU7QUFBdEQ7O0FBQ0YsU0FBSyxhQUFMO0FBQ0UsNkNBQVlQLEtBQVo7QUFBbUJNLFFBQUFBLGFBQWEsRUFBRSxLQUFsQztBQUF5Q0MsUUFBQUEsV0FBVyxFQUFFTixNQUFNLENBQUNJO0FBQTdEOztBQUNGLFNBQUssZ0JBQUw7QUFDRSw2Q0FBWUwsS0FB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O0FBQUEsNEJBREYsRUFTR3RELGFBQWEsaUJBQUksOERBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFUcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQWhQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTNCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFvVEQ7O0dBbGFRSTtVQVlIYix1REFDdUNDLHFEQUM1QnhCLG9EQUNDcUI7OztLQWZUZTs7QUEwYVQsK0RBQWUsTUFBQXJDLG1EQUFPLE9BQUM7QUFBQSxTQUFNMEYsT0FBTyxDQUFDQyxPQUFSLENBQWdCdEQsV0FBaEIsQ0FBTjtBQUFBLENBQUQsRUFBcUM7QUFBRXVELEVBQUFBLEdBQUcsRUFBRTtBQUFQLENBQXJDLENBQXRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FkbWluL3Byb2R1Y3QvW2lkXS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBOZXh0TGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZUNvbnRleHQsIHVzZVJlZHVjZXIsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIEdyaWQsXHJcbiAgTGlzdCxcclxuICBMaXN0SXRlbSxcclxuICBUeXBvZ3JhcGh5LFxyXG4gIENhcmQsXHJcbiAgQnV0dG9uLFxyXG4gIExpc3RJdGVtVGV4dCxcclxuICBUZXh0RmllbGQsXHJcbiAgQ2lyY3VsYXJQcm9ncmVzcyxcclxuICBGb3JtQ29udHJvbExhYmVsLFxyXG4gIENoZWNrYm94LFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBnZXRFcnJvciB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9lcnJvclwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9TdG9yZVwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gXCIuLi8uLi8uLi91dGlscy9zdHlsZXNcIjtcclxuaW1wb3J0IHsgQ29udHJvbGxlciwgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcclxuaW1wb3J0IHsgdXNlU25hY2tiYXIgfSBmcm9tIFwibm90aXN0YWNrXCI7XHJcblxyXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFwiRkVUQ0hfUkVRVUVTVFwiOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogdHJ1ZSwgZXJyb3I6IFwiXCIgfTtcclxuICAgIGNhc2UgXCJGRVRDSF9TVUNDRVNTXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSwgZXJyb3I6IFwiXCIgfTtcclxuICAgIGNhc2UgXCJGRVRDSF9GQUlMXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSwgZXJyb3I6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBjYXNlIFwiVVBEQVRFX1JFUVVFU1RcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmdVcGRhdGU6IHRydWUsIGVycm9yVXBkYXRlOiBcIlwiIH07XHJcbiAgICBjYXNlIFwiVVBEQVRFX1NVQ0NFU1NcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmdVcGRhdGU6IGZhbHNlLCBlcnJvclVwZGF0ZTogXCJcIiB9O1xyXG4gICAgY2FzZSBcIlVQREFURV9GQUlMXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nVXBkYXRlOiBmYWxzZSwgZXJyb3JVcGRhdGU6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBjYXNlICdVUExPQURfUkVRVUVTVCc6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nVXBsb2FkOiB0cnVlLCBlcnJvclVwbG9hZDogJycgfTtcclxuICAgIGNhc2UgJ1VQTE9BRF9TVUNDRVNTJzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmdVcGxvYWQ6IGZhbHNlLCBlcnJvclVwbG9hZDogJycsIH07XHJcbiAgICBjYXNlICdVUExPQURfRkFJTCc6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nVXBsb2FkOiBmYWxzZSwgZXJyb3JVcGxvYWQ6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0RWRpdCh7IHBhcmFtcyB9KSB7XHJcbiAgY29uc3QgcHJvZHVjdElkID0gcGFyYW1zLmlkO1xyXG4gIGNvbnN0IHsgc3RhdGUgfSA9IHVzZUNvbnRleHQoU3RvcmUpO1xyXG4gIGNvbnN0IFt7IGxvYWRpbmcsIGVycm9yLCBsb2FkaW5nVXBkYXRlLCBsb2FkaW5nVXBsb2FkIH0sIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwge1xyXG4gICAgbG9hZGluZzogdHJ1ZSxcclxuICAgIGVycm9yOiBcIlwiLFxyXG4gIH0pO1xyXG4gIGNvbnN0IHtcclxuICAgIGhhbmRsZVN1Ym1pdCxcclxuICAgIGNvbnRyb2wsXHJcbiAgICBmb3JtU3RhdGU6IHsgZXJyb3JzIH0sXHJcbiAgICBzZXRWYWx1ZSxcclxuICB9ID0gdXNlRm9ybSgpO1xyXG4gIGNvbnN0IHsgZW5xdWV1ZVNuYWNrYmFyLCBjbG9zZVNuYWNrYmFyIH0gPSB1c2VTbmFja2JhcigpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB7IHVzZXJJbmZvIH0gPSBzdGF0ZTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghdXNlckluZm8pIHtcclxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiRkVUQ0hfUkVRVUVTVFwiIH0pO1xyXG4gICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvYWRtaW4vcHJvZHVjdHMvJHtwcm9kdWN0SWR9YCwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7IGF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt1c2VySW5mby50b2tlbn1gIH0sIC8vVGhpcyBpcyB0aGUgdG9rZW4gZnJvbSB0aGUgbG9naW4gdXNlZCB0byBhdXRoZW50aWNhdGUgdGhlIHVzZXIgd2hlbiBmZXRjaGluZyBkYXRhLlxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiRkVUQ0hfU1VDQ0VTU1wiIH0pO1xyXG4gICAgICAgICAgc2V0VmFsdWUoXCJuYW1lXCIsIGRhdGEubmFtZSk7XHJcbiAgICAgICAgICBzZXRWYWx1ZShcInNsdWdcIiwgZGF0YS5zbHVnKTtcclxuICAgICAgICAgIHNldFZhbHVlKFwicHJpY2VcIiwgZGF0YS5wcmljZSk7XHJcbiAgICAgICAgICBzZXRWYWx1ZShcImltYWdlXCIsIGRhdGEuaW1hZ2UpO1xyXG4gICAgICAgICAgc2V0VmFsdWUoJ2ZlYXR1cmVkSW1hZ2UnLCBkYXRhLmZlYXR1cmVkSW1hZ2UpO1xyXG4gICAgICAgICAgc2V0SXNGZWF0dXJlZChkYXRhLmlzRmVhdHVyZWQpO1xyXG4gICAgICAgICAgc2V0VmFsdWUoXCJjYXRlZ29yeVwiLCBkYXRhLmNhdGVnb3J5KTtcclxuICAgICAgICAgIHNldFZhbHVlKFwiYnJhbmRcIiwgZGF0YS5icmFuZCk7XHJcbiAgICAgICAgICBzZXRWYWx1ZShcImNvdW50SW5TdG9ja1wiLCBkYXRhLmNvdW50SW5TdG9jayk7XHJcbiAgICAgICAgICBzZXRWYWx1ZShcImRlc2NyaXB0aW9uXCIsIGRhdGEuZGVzY3JpcHRpb24pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIkZFVENIX0ZBSUxcIiwgcGF5bG9hZDogZ2V0RXJyb3IoZXJyKSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgIGZldGNoRGF0YSgpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgdXBsb2FkSGFuZGxlciA9IGFzeW5jIChlLCBpbWFnZUZpZWxkID0gJ2ltYWdlJykgPT4ge1xyXG4gICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgY29uc3QgYm9keUZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBib2R5Rm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdVUExPQURfUkVRVUVTVCcgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9hZG1pbi91cGxvYWQnLCBib2R5Rm9ybURhdGEsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnLFxyXG4gICAgICAgICAgYXV0aG9yaXphdGlvbjogYEJlYXJlciAke3VzZXJJbmZvLnRva2VufWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1VQTE9BRF9TVUNDRVNTJyB9KTtcclxuICAgICAgc2V0VmFsdWUoaW1hZ2VGaWVsZCwgZGF0YS5zZWN1cmVfdXJsKTtcclxuICAgICAgZW5xdWV1ZVNuYWNrYmFyKCdGaWxlIHVwbG9hZGVkIHN1Y2Nlc3NmdWxseScsIHsgdmFyaWFudDogJ3N1Y2Nlc3MnIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1VQTE9BRF9GQUlMJywgcGF5bG9hZDogZ2V0RXJyb3IoZXJyKSB9KTtcclxuICAgICAgZW5xdWV1ZVNuYWNrYmFyKGdldEVycm9yKGVyciksIHsgdmFyaWFudDogJ2Vycm9yJyB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBzdWJtaXRIYW5kbGVyID0gYXN5bmMgKHtcclxuICAgIG5hbWUsXHJcbiAgICBzbHVnLFxyXG4gICAgcHJpY2UsXHJcbiAgICBjYXRlZ29yeSxcclxuICAgIGltYWdlLFxyXG4gICAgZmVhdHVyZWRJbWFnZSxcclxuICAgIGJyYW5kLFxyXG4gICAgY291bnRJblN0b2NrLFxyXG4gICAgZGVzY3JpcHRpb24sXHJcbiAgfSkgPT4ge1xyXG4gICAgY2xvc2VTbmFja2JhcigpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlVQREFURV9SRVFVRVNUXCIgfSk7XHJcblxyXG4gICAgICBhd2FpdCBheGlvcy5wdXQoXHJcbiAgICAgICAgYC9hcGkvYWRtaW4vcHJvZHVjdHMvJHtwcm9kdWN0SWR9YCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgc2x1ZyxcclxuICAgICAgICAgIHByaWNlLFxyXG4gICAgICAgICAgY2F0ZWdvcnksXHJcbiAgICAgICAgICBpbWFnZSxcclxuICAgICAgICAgIGlzRmVhdHVyZWQsXHJcbiAgICAgICAgICBmZWF0dXJlZEltYWdlLFxyXG4gICAgICAgICAgYnJhbmQsXHJcbiAgICAgICAgICBjb3VudEluU3RvY2ssXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgaGVhZGVyczogeyBhdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dXNlckluZm8udG9rZW59YCB9IH1cclxuICAgICAgKTtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlVQREFURV9TVUNDRVNTXCIgfSk7XHJcbiAgICAgIGVucXVldWVTbmFja2JhcihcIlByb2R1Y3QgdXBkYXRlZCBzdWNjZXNzZnVsbHlcIiwgeyB2YXJpYW50OiBcInN1Y2Nlc3NcIiB9KTtcclxuICAgICAgcm91dGVyLnB1c2goXCIvYWRtaW4vcHJvZHVjdHNcIik7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlVQREFURV9GQUlMXCIsIHBheWxvYWQ6IGdldEVycm9yKGVycikgfSk7XHJcbiAgICAgIGVucXVldWVTbmFja2JhcihnZXRFcnJvcihlcnIpLCB7IHZhcmlhbnQ6IFwiZXJyb3JcIiB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBbaXNGZWF0dXJlZCwgc2V0SXNGZWF0dXJlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IHRpdGxlPXtgRWRpdCBQcm9kdWN0ICR7cHJvZHVjdElkfWB9PlxyXG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MX0+XHJcbiAgICAgICAgPEdyaWQgaXRlbSBtZD17M30geHM9ezEyfT5cclxuICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9ufT5cclxuICAgICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvYWRtaW4vZGFzaGJvYXJkXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNvbXBvbmVudD1cImFcIj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiQWRtaW4gRGFzaGJvYXJkXCI+PC9MaXN0SXRlbVRleHQ+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgIDwvTmV4dExpbms+XHJcbiAgICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvYWRtaW4vb3JkZXJzXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNvbXBvbmVudD1cImFcIj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiT3JkZXJzXCI+PC9MaXN0SXRlbVRleHQ+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgIDwvTmV4dExpbms+XHJcbiAgICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvYWRtaW4vcHJvZHVjdHNcIiBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBzZWxlY3RlZCBidXR0b24gY29tcG9uZW50PVwiYVwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJQcm9kdWN0c1wiPjwvTGlzdEl0ZW1UZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICA8L05leHRMaW5rPlxyXG4gICAgICAgICAgICAgIDxOZXh0TGluayBocmVmPVwiL2FkbWluL3VzZXJzXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNvbXBvbmVudD1cImFcIj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiVXNlcnNcIj48L0xpc3RJdGVtVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9OZXh0TGluaz5cclxuICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIG1kPXs5fSB4cz17MTJ9PlxyXG4gICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb259PlxyXG4gICAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoMVwiIHZhcmlhbnQ9XCJoMVwiPlxyXG4gICAgICAgICAgICAgICAgICBFZGl0IFByb2R1Y3Qge3Byb2R1Y3RJZH1cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIHtsb2FkaW5nICYmIDxDaXJjdWxhclByb2dyZXNzPjwvQ2lyY3VsYXJQcm9ncmVzcz59XHJcbiAgICAgICAgICAgICAgICB7ZXJyb3IgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuZXJyb3J9PntlcnJvcn08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChzdWJtaXRIYW5kbGVyKX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDb250cm9sbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZCB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17Qm9vbGVhbihlcnJvcnMubmFtZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtlcnJvcnMubmFtZSA/IFwiTmFtZSBpcyByZXF1aXJlZFwiIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9Db250cm9sbGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNsdWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBydWxlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNsdWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTbHVnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtCb29sZWFuKGVycm9ycy5zbHVnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9e2Vycm9ycy5zbHVnID8gXCJTbHVnIGlzIHJlcXVpcmVkXCIgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID48L1RleHRGaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgID48L0NvbnRyb2xsZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBydWxlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e0Jvb2xlYW4oZXJyb3JzLnByaWNlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9e2Vycm9ycy5wcmljZSA/IFwiUHJpY2UgaXMgcmVxdWlyZWRcIiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvQ29udHJvbGxlcj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDb250cm9sbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJJbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17Qm9vbGVhbihlcnJvcnMuaW1hZ2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscGVyVGV4dD17ZXJyb3JzLmltYWdlID8gXCJJbWFnZSBpcyByZXF1aXJlZFwiIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9Db250cm9sbGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29tcG9uZW50PVwibGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVXBsb2FkIEZpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9e3VwbG9hZEhhbmRsZXJ9IGhpZGRlbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7bG9hZGluZ1VwbG9hZCAmJiA8Q2lyY3VsYXJQcm9ncmVzcyAvPn1cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiSXMgRmVhdHVyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBzZXRJc0ZlYXR1cmVkKGUudGFyZ2V0LmNoZWNrZWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17aXNGZWF0dXJlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpc0ZlYXR1cmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9Gb3JtQ29udHJvbExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAge2lzRmVhdHVyZWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250cm9sbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmVhdHVyZWRJbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImZlYXR1cmVkSW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRmVhdHVyZWQgSW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtCb29sZWFuKGVycm9ycy5mZWF0dXJlZEltYWdlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5mZWF0dXJlZEltYWdlID8gJ0ZlYXR1cmVkIEltYWdlIGlzIHJlcXVpcmVkJyA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9Db250cm9sbGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29tcG9uZW50PVwibGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVwbG9hZCBGaWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHVwbG9hZEhhbmRsZXIoZSwgJ2ZlYXR1cmVkSW1hZ2UnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZGVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nVXBsb2FkICYmIDxDaXJjdWxhclByb2dyZXNzIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDb250cm9sbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjYXRlZ29yeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDYXRlZ29yeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17Qm9vbGVhbihlcnJvcnMuY2F0ZWdvcnkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscGVyVGV4dD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5jYXRlZ29yeSA/IFwiQ2F0ZWdvcnkgaXMgcmVxdWlyZWRcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9Db250cm9sbGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImJyYW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZCB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJicmFuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkJyYW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtCb29sZWFuKGVycm9ycy5icmFuZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtlcnJvcnMuYnJhbmQgPyBcIkJyYW5kIGlzIHJlcXVpcmVkXCIgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID48L1RleHRGaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgID48L0NvbnRyb2xsZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY291bnRJblN0b2NrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZCB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjb3VudEluU3RvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDb3VudCBpbiBzdG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17Qm9vbGVhbihlcnJvcnMuY291bnRJblN0b2NrKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMuY291bnRJblN0b2NrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkNvdW50IGluIHN0b2NrIGlzIHJlcXVpcmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9Db250cm9sbGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZCB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e0Jvb2xlYW4oZXJyb3JzLmRlc2NyaXB0aW9uKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMuZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiRGVzY3JpcHRpb24gaXMgcmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID48L1RleHRGaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgID48L0NvbnRyb2xsZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBVcGRhdGVcclxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2xvYWRpbmdVcGRhdGUgJiYgPENpcmN1bGFyUHJvZ3Jlc3MgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBwYXJhbXMgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkeW5hbWljKCgpID0+IFByb21pc2UucmVzb2x2ZShQcm9kdWN0RWRpdCksIHsgc3NyOiBmYWxzZSB9KTtcclxuIl0sIm5hbWVzIjpbImF4aW9zIiwiZHluYW1pYyIsInVzZVJvdXRlciIsIk5leHRMaW5rIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VDb250ZXh0IiwidXNlUmVkdWNlciIsInVzZVN0YXRlIiwiR3JpZCIsIkxpc3QiLCJMaXN0SXRlbSIsIlR5cG9ncmFwaHkiLCJDYXJkIiwiQnV0dG9uIiwiTGlzdEl0ZW1UZXh0IiwiVGV4dEZpZWxkIiwiQ2lyY3VsYXJQcm9ncmVzcyIsIkZvcm1Db250cm9sTGFiZWwiLCJDaGVja2JveCIsImdldEVycm9yIiwiU3RvcmUiLCJMYXlvdXQiLCJ1c2VTdHlsZXMiLCJDb250cm9sbGVyIiwidXNlRm9ybSIsInVzZVNuYWNrYmFyIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImxvYWRpbmciLCJlcnJvciIsInBheWxvYWQiLCJsb2FkaW5nVXBkYXRlIiwiZXJyb3JVcGRhdGUiLCJsb2FkaW5nVXBsb2FkIiwiZXJyb3JVcGxvYWQiLCJQcm9kdWN0RWRpdCIsInBhcmFtcyIsInByb2R1Y3RJZCIsImlkIiwiZGlzcGF0Y2giLCJoYW5kbGVTdWJtaXQiLCJjb250cm9sIiwiZXJyb3JzIiwiZm9ybVN0YXRlIiwic2V0VmFsdWUiLCJlbnF1ZXVlU25hY2tiYXIiLCJjbG9zZVNuYWNrYmFyIiwicm91dGVyIiwiY2xhc3NlcyIsInVzZXJJbmZvIiwicHVzaCIsImZldGNoRGF0YSIsImdldCIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwidG9rZW4iLCJkYXRhIiwibmFtZSIsInNsdWciLCJwcmljZSIsImltYWdlIiwiZmVhdHVyZWRJbWFnZSIsInNldElzRmVhdHVyZWQiLCJpc0ZlYXR1cmVkIiwiY2F0ZWdvcnkiLCJicmFuZCIsImNvdW50SW5TdG9jayIsImRlc2NyaXB0aW9uIiwidXBsb2FkSGFuZGxlciIsImUiLCJpbWFnZUZpZWxkIiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwiYm9keUZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJwb3N0Iiwic2VjdXJlX3VybCIsInZhcmlhbnQiLCJzdWJtaXRIYW5kbGVyIiwicHV0Iiwic2VjdGlvbiIsImZvcm0iLCJyZXF1aXJlZCIsImZpZWxkIiwiQm9vbGVhbiIsImNoZWNrZWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNzciJdLCJzb3VyY2VSb290IjoiIn0=