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
              console.log("onUpdate");
              closeSnackbar();
              _context3.prev = 3;
              dispatch({
                type: "UPDATE_REQUEST"
              });
              _context3.next = 7;
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

            case 7:
              dispatch({
                type: "UPDATE_SUCCESS"
              });
              enqueueSnackbar("Product updated successfully", {
                variant: "success"
              });
              router.push("/admin/products");
              _context3.next = 16;
              break;

            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3["catch"](3);
              dispatch({
                type: "UPDATE_FAIL",
                payload: (0,_utils_error__WEBPACK_IMPORTED_MODULE_9__.getError)(_context3.t0)
              });
              enqueueSnackbar((0,_utils_error__WEBPACK_IMPORTED_MODULE_9__.getError)(_context3.t0), {
                variant: "error"
              });

            case 16:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[3, 12]]);
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
                  lineNumber: 170,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 169,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 168,
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
                  lineNumber: 175,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 174,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 173,
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
                  lineNumber: 180,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 179,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 178,
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
                  lineNumber: 185,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 184,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 183,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 165,
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
                lineNumber: 195,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 194,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.ListItem, {
              children: [loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.CircularProgress, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 200,
                columnNumber: 29
              }, this), error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.Typography, {
                className: classes.error,
                children: error
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 202,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 199,
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
                          lineNumber: 220,
                          columnNumber: 27
                        }, _this);
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 212,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 211,
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
                          lineNumber: 241,
                          columnNumber: 27
                        }, _this);
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 233,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 232,
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
                          lineNumber: 262,
                          columnNumber: 27
                        }, _this);
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 254,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 253,
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
                          lineNumber: 283,
                          columnNumber: 27
                        }, _this);
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 275,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 274,
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
                        lineNumber: 298,
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 296,
                      columnNumber: 23
                    }, this), loadingUpload && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.CircularProgress, {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 300,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 295,
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
                        lineNumber: 306,
                        columnNumber: 27
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 303,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 302,
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
                            lineNumber: 325,
                            columnNumber: 27
                          }, _this);
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 317,
                        columnNumber: 23
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 316,
                      columnNumber: 23
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
                          lineNumber: 342,
                          columnNumber: 23
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 340,
                        columnNumber: 21
                      }, this), loadingUpload && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.CircularProgress, {}, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 348,
                        columnNumber: 39
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 339,
                      columnNumber: 21
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
                          lineNumber: 363,
                          columnNumber: 27
                        }, _this);
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 355,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 354,
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
                          lineNumber: 386,
                          columnNumber: 27
                        }, _this);
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 378,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 377,
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
                          lineNumber: 407,
                          columnNumber: 27
                        }, _this);
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 399,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 398,
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
                          lineNumber: 432,
                          columnNumber: 27
                        }, _this);
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 424,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 423,
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
                      lineNumber: 451,
                      columnNumber: 23
                    }, this), loadingUpdate && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.CircularProgress, {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 459,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 450,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 210,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 206,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 205,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 193,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 163,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vcHJvZHVjdC9baWRdLmYwMjFhMmM3MTFhYWJiMmJhYzczLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUzJCLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCQyxNQUF4QixFQUFnQztBQUM5QixVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLLGVBQUw7QUFDRSw2Q0FBWUYsS0FBWjtBQUFtQkcsUUFBQUEsT0FBTyxFQUFFLElBQTVCO0FBQWtDQyxRQUFBQSxLQUFLLEVBQUU7QUFBekM7O0FBQ0YsU0FBSyxlQUFMO0FBQ0UsNkNBQVlKLEtBQVo7QUFBbUJHLFFBQUFBLE9BQU8sRUFBRSxLQUE1QjtBQUFtQ0MsUUFBQUEsS0FBSyxFQUFFO0FBQTFDOztBQUNGLFNBQUssWUFBTDtBQUNFLDZDQUFZSixLQUFaO0FBQW1CRyxRQUFBQSxPQUFPLEVBQUUsS0FBNUI7QUFBbUNDLFFBQUFBLEtBQUssRUFBRUgsTUFBTSxDQUFDSTtBQUFqRDs7QUFDRixTQUFLLGdCQUFMO0FBQ0UsNkNBQVlMLEtBQVo7QUFBbUJNLFFBQUFBLGFBQWEsRUFBRSxJQUFsQztBQUF3Q0MsUUFBQUEsV0FBVyxFQUFFO0FBQXJEOztBQUNGLFNBQUssZ0JBQUw7QUFDRSw2Q0FBWVAsS0FBWjtBQUFtQk0sUUFBQUEsYUFBYSxFQUFFLEtBQWxDO0FBQXlDQyxRQUFBQSxXQUFXLEVBQUU7QUFBdEQ7O0FBQ0YsU0FBSyxhQUFMO0FBQ0UsNkNBQVlQLEtBQVo7QUFBbUJNLFFBQUFBLGFBQWEsRUFBRSxLQUFsQztBQUF5Q0MsUUFBQUEsV0FBVyxFQUFFTixNQUFNLENBQUNJO0FBQTdEOztBQUNGLFNBQUssZ0JBQUw7QUFDRSw2Q0FBWUwsS0FB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LDJCQUFLLEVBQUMsU0FKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFERixFQVNHeEQsYUFBYSxpQkFBSSw4REFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQVRwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBaFBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBM0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW9URDs7R0FuYVFJO1VBWUhiLHVEQUN1Q0MscURBQzVCeEIsb0RBQ0NxQjs7O0tBZlRlOztBQTJhVCwrREFBZSxNQUFBckMsbURBQU8sT0FBQztBQUFBLFNBQU00RixPQUFPLENBQUNDLE9BQVIsQ0FBZ0J4RCxXQUFoQixDQUFOO0FBQUEsQ0FBRCxFQUFxQztBQUFFeUQsRUFBQUEsR0FBRyxFQUFFO0FBQVAsQ0FBckMsQ0FBdEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW4vcHJvZHVjdC9baWRdLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IE5leHRMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlQ29udGV4dCwgdXNlUmVkdWNlciwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgR3JpZCxcclxuICBMaXN0LFxyXG4gIExpc3RJdGVtLFxyXG4gIFR5cG9ncmFwaHksXHJcbiAgQ2FyZCxcclxuICBCdXR0b24sXHJcbiAgTGlzdEl0ZW1UZXh0LFxyXG4gIFRleHRGaWVsZCxcclxuICBDaXJjdWxhclByb2dyZXNzLFxyXG4gIEZvcm1Db250cm9sTGFiZWwsXHJcbiAgQ2hlY2tib3gsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IGdldEVycm9yIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2Vycm9yXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL1N0b3JlXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3N0eWxlc1wiO1xyXG5pbXBvcnQgeyBDb250cm9sbGVyLCB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5pbXBvcnQgeyB1c2VTbmFja2JhciB9IGZyb20gXCJub3Rpc3RhY2tcIjtcclxuXHJcbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgXCJGRVRDSF9SRVFVRVNUXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiB0cnVlLCBlcnJvcjogXCJcIiB9O1xyXG4gICAgY2FzZSBcIkZFVENIX1NVQ0NFU1NcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogXCJcIiB9O1xyXG4gICAgY2FzZSBcIkZFVENIX0ZBSUxcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgXCJVUERBVEVfUkVRVUVTVFwiOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZ1VwZGF0ZTogdHJ1ZSwgZXJyb3JVcGRhdGU6IFwiXCIgfTtcclxuICAgIGNhc2UgXCJVUERBVEVfU1VDQ0VTU1wiOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZ1VwZGF0ZTogZmFsc2UsIGVycm9yVXBkYXRlOiBcIlwiIH07XHJcbiAgICBjYXNlIFwiVVBEQVRFX0ZBSUxcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmdVcGRhdGU6IGZhbHNlLCBlcnJvclVwZGF0ZTogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgJ1VQTE9BRF9SRVFVRVNUJzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmdVcGxvYWQ6IHRydWUsIGVycm9yVXBsb2FkOiAnJyB9O1xyXG4gICAgY2FzZSAnVVBMT0FEX1NVQ0NFU1MnOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZ1VwbG9hZDogZmFsc2UsIGVycm9yVXBsb2FkOiAnJywgfTtcclxuICAgIGNhc2UgJ1VQTE9BRF9GQUlMJzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmdVcGxvYWQ6IGZhbHNlLCBlcnJvclVwbG9hZDogYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3RFZGl0KHsgcGFyYW1zIH0pIHtcclxuICBjb25zdCBwcm9kdWN0SWQgPSBwYXJhbXMuaWQ7XHJcbiAgY29uc3QgeyBzdGF0ZSB9ID0gdXNlQ29udGV4dChTdG9yZSk7XHJcbiAgY29uc3QgW3sgbG9hZGluZywgZXJyb3IsIGxvYWRpbmdVcGRhdGUsIGxvYWRpbmdVcGxvYWQgfSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCB7XHJcbiAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgZXJyb3I6IFwiXCIsXHJcbiAgfSk7XHJcbiAgY29uc3Qge1xyXG4gICAgaGFuZGxlU3VibWl0LFxyXG4gICAgY29udHJvbCxcclxuICAgIGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcclxuICAgIHNldFZhbHVlLFxyXG4gIH0gPSB1c2VGb3JtKCk7XHJcbiAgY29uc3QgeyBlbnF1ZXVlU25hY2tiYXIsIGNsb3NlU25hY2tiYXIgfSA9IHVzZVNuYWNrYmFyKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHsgdXNlckluZm8gfSA9IHN0YXRlO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCF1c2VySW5mbykge1xyXG4gICAgICByZXR1cm4gcm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJGRVRDSF9SRVFVRVNUXCIgfSk7XHJcbiAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9hZG1pbi9wcm9kdWN0cy8ke3Byb2R1Y3RJZH1gLCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgYXV0aG9yaXphdGlvbjogYEJlYXJlciAke3VzZXJJbmZvLnRva2VufWAgfSwgLy9UaGlzIGlzIHRoZSB0b2tlbiBmcm9tIHRoZSBsb2dpbiB1c2VkIHRvIGF1dGhlbnRpY2F0ZSB0aGUgdXNlciB3aGVuIGZldGNoaW5nIGRhdGEuXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJGRVRDSF9TVUNDRVNTXCIgfSk7XHJcbiAgICAgICAgICBzZXRWYWx1ZShcIm5hbWVcIiwgZGF0YS5uYW1lKTtcclxuICAgICAgICAgIHNldFZhbHVlKFwic2x1Z1wiLCBkYXRhLnNsdWcpO1xyXG4gICAgICAgICAgc2V0VmFsdWUoXCJwcmljZVwiLCBkYXRhLnByaWNlKTtcclxuICAgICAgICAgIHNldFZhbHVlKFwiaW1hZ2VcIiwgZGF0YS5pbWFnZSk7XHJcbiAgICAgICAgICBzZXRWYWx1ZSgnZmVhdHVyZWRJbWFnZScsIGRhdGEuZmVhdHVyZWRJbWFnZSk7XHJcbiAgICAgICAgICBzZXRJc0ZlYXR1cmVkKGRhdGEuaXNGZWF0dXJlZCk7XHJcbiAgICAgICAgICBzZXRWYWx1ZShcImNhdGVnb3J5XCIsIGRhdGEuY2F0ZWdvcnkpO1xyXG4gICAgICAgICAgc2V0VmFsdWUoXCJicmFuZFwiLCBkYXRhLmJyYW5kKTtcclxuICAgICAgICAgIHNldFZhbHVlKFwiY291bnRJblN0b2NrXCIsIGRhdGEuY291bnRJblN0b2NrKTtcclxuICAgICAgICAgIHNldFZhbHVlKFwiZGVzY3JpcHRpb25cIiwgZGF0YS5kZXNjcmlwdGlvbik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiRkVUQ0hfRkFJTFwiLCBwYXlsb2FkOiBnZXRFcnJvcihlcnIpIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgICAgZmV0Y2hEYXRhKCk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCB1cGxvYWRIYW5kbGVyID0gYXN5bmMgKGUsIGltYWdlRmllbGQgPSAnaW1hZ2UnKSA9PiB7XHJcbiAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICBjb25zdCBib2R5Rm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGJvZHlGb3JtRGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1VQTE9BRF9SRVFVRVNUJyB9KTtcclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL2FkbWluL3VwbG9hZCcsIGJvZHlGb3JtRGF0YSwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsXHJcbiAgICAgICAgICBhdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dXNlckluZm8udG9rZW59YCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnVVBMT0FEX1NVQ0NFU1MnIH0pO1xyXG4gICAgICBzZXRWYWx1ZShpbWFnZUZpZWxkLCBkYXRhLnNlY3VyZV91cmwpO1xyXG4gICAgICBlbnF1ZXVlU25hY2tiYXIoJ0ZpbGUgdXBsb2FkZWQgc3VjY2Vzc2Z1bGx5JywgeyB2YXJpYW50OiAnc3VjY2VzcycgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnVVBMT0FEX0ZBSUwnLCBwYXlsb2FkOiBnZXRFcnJvcihlcnIpIH0pO1xyXG4gICAgICBlbnF1ZXVlU25hY2tiYXIoZ2V0RXJyb3IoZXJyKSwgeyB2YXJpYW50OiAnZXJyb3InIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN1Ym1pdEhhbmRsZXIgPSBhc3luYyAoe1xyXG4gICAgbmFtZSxcclxuICAgIHNsdWcsXHJcbiAgICBwcmljZSxcclxuICAgIGNhdGVnb3J5LFxyXG4gICAgaW1hZ2UsXHJcbiAgICBmZWF0dXJlZEltYWdlLFxyXG4gICAgYnJhbmQsXHJcbiAgICBjb3VudEluU3RvY2ssXHJcbiAgICBkZXNjcmlwdGlvbixcclxuICB9KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcIm9uVXBkYXRlXCIpO1xyXG4gICAgY2xvc2VTbmFja2JhcigpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlVQREFURV9SRVFVRVNUXCIgfSk7XHJcblxyXG4gICAgICBhd2FpdCBheGlvcy5wdXQoXHJcbiAgICAgICAgYC9hcGkvYWRtaW4vcHJvZHVjdHMvJHtwcm9kdWN0SWR9YCxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgc2x1ZyxcclxuICAgICAgICAgIHByaWNlLFxyXG4gICAgICAgICAgY2F0ZWdvcnksXHJcbiAgICAgICAgICBpbWFnZSxcclxuICAgICAgICAgIGlzRmVhdHVyZWQsXHJcbiAgICAgICAgICBmZWF0dXJlZEltYWdlLFxyXG4gICAgICAgICAgYnJhbmQsXHJcbiAgICAgICAgICBjb3VudEluU3RvY2ssXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHsgaGVhZGVyczogeyBhdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dXNlckluZm8udG9rZW59YCB9IH1cclxuICAgICAgKTtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlVQREFURV9TVUNDRVNTXCIgfSk7XHJcbiAgICAgIGVucXVldWVTbmFja2JhcihcIlByb2R1Y3QgdXBkYXRlZCBzdWNjZXNzZnVsbHlcIiwgeyB2YXJpYW50OiBcInN1Y2Nlc3NcIiB9KTtcclxuICAgICAgcm91dGVyLnB1c2goXCIvYWRtaW4vcHJvZHVjdHNcIik7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlVQREFURV9GQUlMXCIsIHBheWxvYWQ6IGdldEVycm9yKGVycikgfSk7XHJcbiAgICAgIGVucXVldWVTbmFja2JhcihnZXRFcnJvcihlcnIpLCB7IHZhcmlhbnQ6IFwiZXJyb3JcIiB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBbaXNGZWF0dXJlZCwgc2V0SXNGZWF0dXJlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IHRpdGxlPXtgRWRpdCBQcm9kdWN0ICR7cHJvZHVjdElkfWB9PlxyXG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MX0+XHJcbiAgICAgICAgPEdyaWQgaXRlbSBtZD17M30geHM9ezEyfT5cclxuICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9ufT5cclxuICAgICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvYWRtaW4vZGFzaGJvYXJkXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNvbXBvbmVudD1cImFcIj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiQWRtaW4gRGFzaGJvYXJkXCI+PC9MaXN0SXRlbVRleHQ+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgIDwvTmV4dExpbms+XHJcbiAgICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvYWRtaW4vb3JkZXJzXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNvbXBvbmVudD1cImFcIj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiT3JkZXJzXCI+PC9MaXN0SXRlbVRleHQ+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgIDwvTmV4dExpbms+XHJcbiAgICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvYWRtaW4vcHJvZHVjdHNcIiBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBzZWxlY3RlZCBidXR0b24gY29tcG9uZW50PVwiYVwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJQcm9kdWN0c1wiPjwvTGlzdEl0ZW1UZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICA8L05leHRMaW5rPlxyXG4gICAgICAgICAgICAgIDxOZXh0TGluayBocmVmPVwiL2FkbWluL3VzZXJzXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNvbXBvbmVudD1cImFcIj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiVXNlcnNcIj48L0xpc3RJdGVtVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9OZXh0TGluaz5cclxuICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIG1kPXs5fSB4cz17MTJ9PlxyXG4gICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb259PlxyXG4gICAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoMVwiIHZhcmlhbnQ9XCJoMVwiPlxyXG4gICAgICAgICAgICAgICAgICBFZGl0IFByb2R1Y3Qge3Byb2R1Y3RJZH1cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIHtsb2FkaW5nICYmIDxDaXJjdWxhclByb2dyZXNzPjwvQ2lyY3VsYXJQcm9ncmVzcz59XHJcbiAgICAgICAgICAgICAgICB7ZXJyb3IgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuZXJyb3J9PntlcnJvcn08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChzdWJtaXRIYW5kbGVyKX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDb250cm9sbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZCB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17Qm9vbGVhbihlcnJvcnMubmFtZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtlcnJvcnMubmFtZSA/IFwiTmFtZSBpcyByZXF1aXJlZFwiIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9Db250cm9sbGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNsdWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBydWxlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInNsdWdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTbHVnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtCb29sZWFuKGVycm9ycy5zbHVnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9e2Vycm9ycy5zbHVnID8gXCJTbHVnIGlzIHJlcXVpcmVkXCIgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID48L1RleHRGaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgID48L0NvbnRyb2xsZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBydWxlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e0Jvb2xlYW4oZXJyb3JzLnByaWNlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9e2Vycm9ycy5wcmljZSA/IFwiUHJpY2UgaXMgcmVxdWlyZWRcIiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvQ29udHJvbGxlcj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDb250cm9sbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJJbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17Qm9vbGVhbihlcnJvcnMuaW1hZ2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscGVyVGV4dD17ZXJyb3JzLmltYWdlID8gXCJJbWFnZSBpcyByZXF1aXJlZFwiIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9Db250cm9sbGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29tcG9uZW50PVwibGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVXBsb2FkIEZpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9e3VwbG9hZEhhbmRsZXJ9IGhpZGRlbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7bG9hZGluZ1VwbG9hZCAmJiA8Q2lyY3VsYXJQcm9ncmVzcyAvPn1cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiSXMgRmVhdHVyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBzZXRJc0ZlYXR1cmVkKGUudGFyZ2V0LmNoZWNrZWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17aXNGZWF0dXJlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpc0ZlYXR1cmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9Gb3JtQ29udHJvbExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAge2lzRmVhdHVyZWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDb250cm9sbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmZWF0dXJlZEltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZCB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJmZWF0dXJlZEltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRmVhdHVyZWQgSW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e0Jvb2xlYW4oZXJyb3JzLmZlYXR1cmVkSW1hZ2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscGVyVGV4dD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5mZWF0dXJlZEltYWdlID8gJ0ZlYXR1cmVkIEltYWdlIGlzIHJlcXVpcmVkJyA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvQ29udHJvbGxlcj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb21wb25lbnQ9XCJsYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgVXBsb2FkIEZpbGVcclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdXBsb2FkSGFuZGxlcihlLCAnZmVhdHVyZWRJbWFnZScpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRkZW5cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAge2xvYWRpbmdVcGxvYWQgJiYgPENpcmN1bGFyUHJvZ3Jlc3MgLz59XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNhdGVnb3J5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZCB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjYXRlZ29yeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNhdGVnb3J5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtCb29sZWFuKGVycm9ycy5jYXRlZ29yeSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLmNhdGVnb3J5ID8gXCJDYXRlZ29yeSBpcyByZXF1aXJlZFwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID48L1RleHRGaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgID48L0NvbnRyb2xsZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiYnJhbmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBydWxlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImJyYW5kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQnJhbmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e0Jvb2xlYW4oZXJyb3JzLmJyYW5kKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9e2Vycm9ycy5icmFuZCA/IFwiQnJhbmQgaXMgcmVxdWlyZWRcIiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvQ29udHJvbGxlcj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDb250cm9sbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb3VudEluU3RvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBydWxlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNvdW50SW5TdG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNvdW50IGluIHN0b2NrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtCb29sZWFuKGVycm9ycy5jb3VudEluU3RvY2spfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscGVyVGV4dD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5jb3VudEluU3RvY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiQ291bnQgaW4gc3RvY2sgaXMgcmVxdWlyZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID48L1RleHRGaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgID48L0NvbnRyb2xsZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBydWxlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdWx0aWxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17Qm9vbGVhbihlcnJvcnMuZGVzY3JpcHRpb24pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscGVyVGV4dD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5kZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJEZXNjcmlwdGlvbiBpcyByZXF1aXJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvQ29udHJvbGxlcj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFVwZGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7bG9hZGluZ1VwZGF0ZSAmJiA8Q2lyY3VsYXJQcm9ncmVzcyAvPn1cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7IHBhcmFtcyB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGR5bmFtaWMoKCkgPT4gUHJvbWlzZS5yZXNvbHZlKFByb2R1Y3RFZGl0KSwgeyBzc3I6IGZhbHNlIH0pO1xyXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJkeW5hbWljIiwidXNlUm91dGVyIiwiTmV4dExpbmsiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZUNvbnRleHQiLCJ1c2VSZWR1Y2VyIiwidXNlU3RhdGUiLCJHcmlkIiwiTGlzdCIsIkxpc3RJdGVtIiwiVHlwb2dyYXBoeSIsIkNhcmQiLCJCdXR0b24iLCJMaXN0SXRlbVRleHQiLCJUZXh0RmllbGQiLCJDaXJjdWxhclByb2dyZXNzIiwiRm9ybUNvbnRyb2xMYWJlbCIsIkNoZWNrYm94IiwiZ2V0RXJyb3IiLCJTdG9yZSIsIkxheW91dCIsInVzZVN0eWxlcyIsIkNvbnRyb2xsZXIiLCJ1c2VGb3JtIiwidXNlU25hY2tiYXIiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwibG9hZGluZyIsImVycm9yIiwicGF5bG9hZCIsImxvYWRpbmdVcGRhdGUiLCJlcnJvclVwZGF0ZSIsImxvYWRpbmdVcGxvYWQiLCJlcnJvclVwbG9hZCIsIlByb2R1Y3RFZGl0IiwicGFyYW1zIiwicHJvZHVjdElkIiwiaWQiLCJkaXNwYXRjaCIsImhhbmRsZVN1Ym1pdCIsImNvbnRyb2wiLCJlcnJvcnMiLCJmb3JtU3RhdGUiLCJzZXRWYWx1ZSIsImVucXVldWVTbmFja2JhciIsImNsb3NlU25hY2tiYXIiLCJyb3V0ZXIiLCJjbGFzc2VzIiwidXNlckluZm8iLCJwdXNoIiwiZmV0Y2hEYXRhIiwiZ2V0IiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJ0b2tlbiIsImRhdGEiLCJuYW1lIiwic2x1ZyIsInByaWNlIiwiaW1hZ2UiLCJmZWF0dXJlZEltYWdlIiwic2V0SXNGZWF0dXJlZCIsImlzRmVhdHVyZWQiLCJjYXRlZ29yeSIsImJyYW5kIiwiY291bnRJblN0b2NrIiwiZGVzY3JpcHRpb24iLCJ1cGxvYWRIYW5kbGVyIiwiZSIsImltYWdlRmllbGQiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJib2R5Rm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInBvc3QiLCJzZWN1cmVfdXJsIiwidmFyaWFudCIsInN1Ym1pdEhhbmRsZXIiLCJjb25zb2xlIiwibG9nIiwicHV0Iiwic2VjdGlvbiIsImZvcm0iLCJyZXF1aXJlZCIsImZpZWxkIiwiQm9vbGVhbiIsImNoZWNrZWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNzciJdLCJzb3VyY2VSb290IjoiIn0=