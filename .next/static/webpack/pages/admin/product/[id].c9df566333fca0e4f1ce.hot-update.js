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
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.ListItem, {
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
                          columnNumber: 27
                        }, _this);
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 316,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 315,
                    columnNumber: 21
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
                        columnNumber: 25
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 339,
                      columnNumber: 23
                    }, this), loadingUpload && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.CircularProgress, {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 347,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 338,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.ListItem, {
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
                          lineNumber: 358,
                          columnNumber: 27
                        }, _this);
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 350,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 349,
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
                          lineNumber: 381,
                          columnNumber: 27
                        }, _this);
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 373,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 372,
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
                          lineNumber: 402,
                          columnNumber: 27
                        }, _this);
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 394,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 393,
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
                          lineNumber: 427,
                          columnNumber: 27
                        }, _this);
                      }
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 419,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 418,
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
                      lineNumber: 446,
                      columnNumber: 23
                    }, this), loadingUpdate && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.CircularProgress, {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 454,
                      columnNumber: 41
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 445,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vcHJvZHVjdC9baWRdLmM5ZGY1NjYzMzNmY2EwZTRmMWNlLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTMkIsT0FBVCxDQUFpQkMsS0FBakIsRUFBd0JDLE1BQXhCLEVBQWdDO0FBQzlCLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUssZUFBTDtBQUNFLDZDQUFZRixLQUFaO0FBQW1CRyxRQUFBQSxPQUFPLEVBQUUsSUFBNUI7QUFBa0NDLFFBQUFBLEtBQUssRUFBRTtBQUF6Qzs7QUFDRixTQUFLLGVBQUw7QUFDRSw2Q0FBWUosS0FBWjtBQUFtQkcsUUFBQUEsT0FBTyxFQUFFLEtBQTVCO0FBQW1DQyxRQUFBQSxLQUFLLEVBQUU7QUFBMUM7O0FBQ0YsU0FBSyxZQUFMO0FBQ0UsNkNBQVlKLEtBQVo7QUFBbUJHLFFBQUFBLE9BQU8sRUFBRSxLQUE1QjtBQUFtQ0MsUUFBQUEsS0FBSyxFQUFFSCxNQUFNLENBQUNJO0FBQWpEOztBQUNGLFNBQUssZ0JBQUw7QUFDRSw2Q0FBWUwsS0FBWjtBQUFtQk0sUUFBQUEsYUFBYSxFQUFFLElBQWxDO0FBQXdDQyxRQUFBQSxXQUFXLEVBQUU7QUFBckQ7O0FBQ0YsU0FBSyxnQkFBTDtBQUNFLDZDQUFZUCxLQUFaO0FBQW1CTSxRQUFBQSxhQUFhLEVBQUUsS0FBbEM7QUFBeUNDLFFBQUFBLFdBQVcsRUFBRTtBQUF0RDs7QUFDRixTQUFLLGFBQUw7QUFDRSw2Q0FBWVAsS0FBWjtBQUFtQk0sUUFBQUEsYUFBYSxFQUFFLEtBQWxDO0FBQXlDQyxRQUFBQSxXQUFXLEVBQUVOLE1BQU0sQ0FBQ0k7QUFBN0Q7O0FBQ0YsU0FBSyxnQkFBTDtBQUNFLDZDQUFZTCxLQUFa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QTtBQUFBO0FBQUEsNEJBREYsRUFTR3hELGFBQWEsaUJBQUksOERBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFUcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQTNPRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTNCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUErU0Q7O0dBOVpRSTtVQVlIYix1REFDdUNDLHFEQUM1QnhCLG9EQUNDcUI7OztLQWZUZTs7QUFzYVQsK0RBQWUsTUFBQXJDLG1EQUFPLE9BQUM7QUFBQSxTQUFNNEYsT0FBTyxDQUFDQyxPQUFSLENBQWdCeEQsV0FBaEIsQ0FBTjtBQUFBLENBQUQsRUFBcUM7QUFBRXlELEVBQUFBLEdBQUcsRUFBRTtBQUFQLENBQXJDLENBQXRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2FkbWluL3Byb2R1Y3QvW2lkXS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBOZXh0TGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZUNvbnRleHQsIHVzZVJlZHVjZXIsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIEdyaWQsXHJcbiAgTGlzdCxcclxuICBMaXN0SXRlbSxcclxuICBUeXBvZ3JhcGh5LFxyXG4gIENhcmQsXHJcbiAgQnV0dG9uLFxyXG4gIExpc3RJdGVtVGV4dCxcclxuICBUZXh0RmllbGQsXHJcbiAgQ2lyY3VsYXJQcm9ncmVzcyxcclxuICBGb3JtQ29udHJvbExhYmVsLFxyXG4gIENoZWNrYm94LFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBnZXRFcnJvciB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9lcnJvclwiO1xyXG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9TdG9yZVwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gXCIuLi8uLi8uLi91dGlscy9zdHlsZXNcIjtcclxuaW1wb3J0IHsgQ29udHJvbGxlciwgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcclxuaW1wb3J0IHsgdXNlU25hY2tiYXIgfSBmcm9tIFwibm90aXN0YWNrXCI7XHJcblxyXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFwiRkVUQ0hfUkVRVUVTVFwiOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogdHJ1ZSwgZXJyb3I6IFwiXCIgfTtcclxuICAgIGNhc2UgXCJGRVRDSF9TVUNDRVNTXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSwgZXJyb3I6IFwiXCIgfTtcclxuICAgIGNhc2UgXCJGRVRDSF9GQUlMXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiBmYWxzZSwgZXJyb3I6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBjYXNlIFwiVVBEQVRFX1JFUVVFU1RcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmdVcGRhdGU6IHRydWUsIGVycm9yVXBkYXRlOiBcIlwiIH07XHJcbiAgICBjYXNlIFwiVVBEQVRFX1NVQ0NFU1NcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmdVcGRhdGU6IGZhbHNlLCBlcnJvclVwZGF0ZTogXCJcIiB9O1xyXG4gICAgY2FzZSBcIlVQREFURV9GQUlMXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nVXBkYXRlOiBmYWxzZSwgZXJyb3JVcGRhdGU6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBjYXNlICdVUExPQURfUkVRVUVTVCc6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nVXBsb2FkOiB0cnVlLCBlcnJvclVwbG9hZDogJycgfTtcclxuICAgIGNhc2UgJ1VQTE9BRF9TVUNDRVNTJzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmdVcGxvYWQ6IGZhbHNlLCBlcnJvclVwbG9hZDogJycsIH07XHJcbiAgICBjYXNlICdVUExPQURfRkFJTCc6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nVXBsb2FkOiBmYWxzZSwgZXJyb3JVcGxvYWQ6IGFjdGlvbi5wYXlsb2FkIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0RWRpdCh7IHBhcmFtcyB9KSB7XHJcbiAgY29uc3QgcHJvZHVjdElkID0gcGFyYW1zLmlkO1xyXG4gIGNvbnN0IHsgc3RhdGUgfSA9IHVzZUNvbnRleHQoU3RvcmUpO1xyXG4gIGNvbnN0IFt7IGxvYWRpbmcsIGVycm9yLCBsb2FkaW5nVXBkYXRlLCBsb2FkaW5nVXBsb2FkIH0sIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwge1xyXG4gICAgbG9hZGluZzogdHJ1ZSxcclxuICAgIGVycm9yOiBcIlwiLFxyXG4gIH0pO1xyXG4gIGNvbnN0IHtcclxuICAgIGhhbmRsZVN1Ym1pdCxcclxuICAgIGNvbnRyb2wsXHJcbiAgICBmb3JtU3RhdGU6IHsgZXJyb3JzIH0sXHJcbiAgICBzZXRWYWx1ZSxcclxuICB9ID0gdXNlRm9ybSgpO1xyXG4gIGNvbnN0IHsgZW5xdWV1ZVNuYWNrYmFyLCBjbG9zZVNuYWNrYmFyIH0gPSB1c2VTbmFja2JhcigpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB7IHVzZXJJbmZvIH0gPSBzdGF0ZTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghdXNlckluZm8pIHtcclxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiRkVUQ0hfUkVRVUVTVFwiIH0pO1xyXG4gICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvYWRtaW4vcHJvZHVjdHMvJHtwcm9kdWN0SWR9YCwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7IGF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt1c2VySW5mby50b2tlbn1gIH0sIC8vVGhpcyBpcyB0aGUgdG9rZW4gZnJvbSB0aGUgbG9naW4gdXNlZCB0byBhdXRoZW50aWNhdGUgdGhlIHVzZXIgd2hlbiBmZXRjaGluZyBkYXRhLlxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiRkVUQ0hfU1VDQ0VTU1wiIH0pO1xyXG4gICAgICAgICAgc2V0VmFsdWUoXCJuYW1lXCIsIGRhdGEubmFtZSk7XHJcbiAgICAgICAgICBzZXRWYWx1ZShcInNsdWdcIiwgZGF0YS5zbHVnKTtcclxuICAgICAgICAgIHNldFZhbHVlKFwicHJpY2VcIiwgZGF0YS5wcmljZSk7XHJcbiAgICAgICAgICBzZXRWYWx1ZShcImltYWdlXCIsIGRhdGEuaW1hZ2UpO1xyXG4gICAgICAgICAgc2V0VmFsdWUoJ2ZlYXR1cmVkSW1hZ2UnLCBkYXRhLmZlYXR1cmVkSW1hZ2UpO1xyXG4gICAgICAgICAgc2V0SXNGZWF0dXJlZChkYXRhLmlzRmVhdHVyZWQpO1xyXG4gICAgICAgICAgc2V0VmFsdWUoXCJjYXRlZ29yeVwiLCBkYXRhLmNhdGVnb3J5KTtcclxuICAgICAgICAgIHNldFZhbHVlKFwiYnJhbmRcIiwgZGF0YS5icmFuZCk7XHJcbiAgICAgICAgICBzZXRWYWx1ZShcImNvdW50SW5TdG9ja1wiLCBkYXRhLmNvdW50SW5TdG9jayk7XHJcbiAgICAgICAgICBzZXRWYWx1ZShcImRlc2NyaXB0aW9uXCIsIGRhdGEuZGVzY3JpcHRpb24pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIkZFVENIX0ZBSUxcIiwgcGF5bG9hZDogZ2V0RXJyb3IoZXJyKSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgIGZldGNoRGF0YSgpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgdXBsb2FkSGFuZGxlciA9IGFzeW5jIChlLCBpbWFnZUZpZWxkID0gJ2ltYWdlJykgPT4ge1xyXG4gICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgY29uc3QgYm9keUZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBib2R5Rm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdVUExPQURfUkVRVUVTVCcgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9hZG1pbi91cGxvYWQnLCBib2R5Rm9ybURhdGEsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnLFxyXG4gICAgICAgICAgYXV0aG9yaXphdGlvbjogYEJlYXJlciAke3VzZXJJbmZvLnRva2VufWAsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1VQTE9BRF9TVUNDRVNTJyB9KTtcclxuICAgICAgc2V0VmFsdWUoaW1hZ2VGaWVsZCwgZGF0YS5zZWN1cmVfdXJsKTtcclxuICAgICAgZW5xdWV1ZVNuYWNrYmFyKCdGaWxlIHVwbG9hZGVkIHN1Y2Nlc3NmdWxseScsIHsgdmFyaWFudDogJ3N1Y2Nlc3MnIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ1VQTE9BRF9GQUlMJywgcGF5bG9hZDogZ2V0RXJyb3IoZXJyKSB9KTtcclxuICAgICAgZW5xdWV1ZVNuYWNrYmFyKGdldEVycm9yKGVyciksIHsgdmFyaWFudDogJ2Vycm9yJyB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBzdWJtaXRIYW5kbGVyID0gYXN5bmMgKHtcclxuICAgIG5hbWUsXHJcbiAgICBzbHVnLFxyXG4gICAgcHJpY2UsXHJcbiAgICBjYXRlZ29yeSxcclxuICAgIGltYWdlLFxyXG4gICAgZmVhdHVyZWRJbWFnZSxcclxuICAgIGJyYW5kLFxyXG4gICAgY291bnRJblN0b2NrLFxyXG4gICAgZGVzY3JpcHRpb24sXHJcbiAgfSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJvblVwZGF0ZVwiKTtcclxuICAgIGNsb3NlU25hY2tiYXIoKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJVUERBVEVfUkVRVUVTVFwiIH0pO1xyXG5cclxuICAgICAgYXdhaXQgYXhpb3MucHV0KFxyXG4gICAgICAgIGAvYXBpL2FkbWluL3Byb2R1Y3RzLyR7cHJvZHVjdElkfWAsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbmFtZSxcclxuICAgICAgICAgIHNsdWcsXHJcbiAgICAgICAgICBwcmljZSxcclxuICAgICAgICAgIGNhdGVnb3J5LFxyXG4gICAgICAgICAgaW1hZ2UsXHJcbiAgICAgICAgICBpc0ZlYXR1cmVkLFxyXG4gICAgICAgICAgZmVhdHVyZWRJbWFnZSxcclxuICAgICAgICAgIGJyYW5kLFxyXG4gICAgICAgICAgY291bnRJblN0b2NrLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7IGhlYWRlcnM6IHsgYXV0aG9yaXphdGlvbjogYEJlYXJlciAke3VzZXJJbmZvLnRva2VufWAgfSB9XHJcbiAgICAgICk7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJVUERBVEVfU1VDQ0VTU1wiIH0pO1xyXG4gICAgICBlbnF1ZXVlU25hY2tiYXIoXCJQcm9kdWN0IHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5XCIsIHsgdmFyaWFudDogXCJzdWNjZXNzXCIgfSk7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL2FkbWluL3Byb2R1Y3RzXCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJVUERBVEVfRkFJTFwiLCBwYXlsb2FkOiBnZXRFcnJvcihlcnIpIH0pO1xyXG4gICAgICBlbnF1ZXVlU25hY2tiYXIoZ2V0RXJyb3IoZXJyKSwgeyB2YXJpYW50OiBcImVycm9yXCIgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW2lzRmVhdHVyZWQsIHNldElzRmVhdHVyZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCB0aXRsZT17YEVkaXQgUHJvZHVjdCAke3Byb2R1Y3RJZH1gfT5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezF9PlxyXG4gICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezN9IHhzPXsxMn0+XHJcbiAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbn0+XHJcbiAgICAgICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICAgIDxOZXh0TGluayBocmVmPVwiL2FkbWluL2Rhc2hib2FyZFwiIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjb21wb25lbnQ9XCJhXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkFkbWluIERhc2hib2FyZFwiPjwvTGlzdEl0ZW1UZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICA8L05leHRMaW5rPlxyXG4gICAgICAgICAgICAgIDxOZXh0TGluayBocmVmPVwiL2FkbWluL29yZGVyc1wiIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjb21wb25lbnQ9XCJhXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIk9yZGVyc1wiPjwvTGlzdEl0ZW1UZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICA8L05leHRMaW5rPlxyXG4gICAgICAgICAgICAgIDxOZXh0TGluayBocmVmPVwiL2FkbWluL3Byb2R1Y3RzXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gc2VsZWN0ZWQgYnV0dG9uIGNvbXBvbmVudD1cImFcIj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUHJvZHVjdHNcIj48L0xpc3RJdGVtVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9OZXh0TGluaz5cclxuICAgICAgICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi9hZG1pbi91c2Vyc1wiIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiBjb21wb25lbnQ9XCJhXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlVzZXJzXCI+PC9MaXN0SXRlbVRleHQ+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgIDwvTmV4dExpbms+XHJcbiAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSBtZD17OX0geHM9ezEyfT5cclxuICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWN0aW9ufT5cclxuICAgICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDFcIiB2YXJpYW50PVwiaDFcIj5cclxuICAgICAgICAgICAgICAgICAgRWRpdCBQcm9kdWN0IHtwcm9kdWN0SWR9XHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICB7bG9hZGluZyAmJiA8Q2lyY3VsYXJQcm9ncmVzcz48L0NpcmN1bGFyUHJvZ3Jlc3M+fVxyXG4gICAgICAgICAgICAgICAge2Vycm9yICYmIChcclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLmVycm9yfT57ZXJyb3J9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQoc3VibWl0SGFuZGxlcil9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e0Jvb2xlYW4oZXJyb3JzLm5hbWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscGVyVGV4dD17ZXJyb3JzLm5hbWUgPyBcIk5hbWUgaXMgcmVxdWlyZWRcIiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvQ29udHJvbGxlcj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDb250cm9sbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzbHVnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZCB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzbHVnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU2x1Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17Qm9vbGVhbihlcnJvcnMuc2x1Zyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtlcnJvcnMuc2x1ZyA/IFwiU2x1ZyBpcyByZXF1aXJlZFwiIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9Db250cm9sbGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZCB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtCb29sZWFuKGVycm9ycy5wcmljZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtlcnJvcnMucHJpY2UgPyBcIlByaWNlIGlzIHJlcXVpcmVkXCIgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLmZpZWxkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID48L1RleHRGaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgID48L0NvbnRyb2xsZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBydWxlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiSW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e0Jvb2xlYW4oZXJyb3JzLmltYWdlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9e2Vycm9ycy5pbWFnZSA/IFwiSW1hZ2UgaXMgcmVxdWlyZWRcIiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvQ29udHJvbGxlcj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbXBvbmVudD1cImxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFVwbG9hZCBGaWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXt1cGxvYWRIYW5kbGVyfSBoaWRkZW4gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2xvYWRpbmdVcGxvYWQgJiYgPENpcmN1bGFyUHJvZ3Jlc3MgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIklzIEZlYXR1cmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gc2V0SXNGZWF0dXJlZChlLnRhcmdldC5jaGVja2VkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2lzRmVhdHVyZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaXNGZWF0dXJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvRm9ybUNvbnRyb2xMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDb250cm9sbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmZWF0dXJlZEltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbD17Y29udHJvbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcnVsZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZCB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJmZWF0dXJlZEltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRmVhdHVyZWQgSW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e0Jvb2xlYW4oZXJyb3JzLmZlYXR1cmVkSW1hZ2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscGVyVGV4dD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5mZWF0dXJlZEltYWdlID8gJ0ZlYXR1cmVkIEltYWdlIGlzIHJlcXVpcmVkJyA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvQ29udHJvbGxlcj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbXBvbmVudD1cImxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFVwbG9hZCBGaWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHVwbG9hZEhhbmRsZXIoZSwgJ2ZlYXR1cmVkSW1hZ2UnKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoaWRkZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2xvYWRpbmdVcGxvYWQgJiYgPENpcmN1bGFyUHJvZ3Jlc3MgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q29udHJvbGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sPXtjb250cm9sfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBydWxlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImNhdGVnb3J5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2F0ZWdvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e0Jvb2xlYW4oZXJyb3JzLmNhdGVnb3J5KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMuY2F0ZWdvcnkgPyBcIkNhdGVnb3J5IGlzIHJlcXVpcmVkXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvQ29udHJvbGxlcj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDb250cm9sbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJicmFuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiYnJhbmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJCcmFuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcj17Qm9vbGVhbihlcnJvcnMuYnJhbmQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscGVyVGV4dD17ZXJyb3JzLmJyYW5kID8gXCJCcmFuZCBpcyByZXF1aXJlZFwiIDogXCJcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9Db250cm9sbGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xsZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvdW50SW5TdG9ja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiY291bnRJblN0b2NrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ291bnQgaW4gc3RvY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I9e0Jvb2xlYW4oZXJyb3JzLmNvdW50SW5TdG9jayl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLmNvdW50SW5TdG9ja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJDb3VudCBpbiBzdG9jayBpcyByZXF1aXJlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvVGV4dEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPjwvQ29udHJvbGxlcj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDb250cm9sbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2w9e2NvbnRyb2x9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGVzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yPXtCb29sZWFuKGVycm9ycy5kZXNjcmlwdGlvbil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLmRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkRlc2NyaXB0aW9uIGlzIHJlcXVpcmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5maWVsZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9UZXh0RmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9Db250cm9sbGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVXBkYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nVXBkYXRlICYmIDxDaXJjdWxhclByb2dyZXNzIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcGFyYW1zIH0pIHtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHsgcGFyYW1zIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZHluYW1pYygoKSA9PiBQcm9taXNlLnJlc29sdmUoUHJvZHVjdEVkaXQpLCB7IHNzcjogZmFsc2UgfSk7XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsImR5bmFtaWMiLCJ1c2VSb3V0ZXIiLCJOZXh0TGluayIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsInVzZVJlZHVjZXIiLCJ1c2VTdGF0ZSIsIkdyaWQiLCJMaXN0IiwiTGlzdEl0ZW0iLCJUeXBvZ3JhcGh5IiwiQ2FyZCIsIkJ1dHRvbiIsIkxpc3RJdGVtVGV4dCIsIlRleHRGaWVsZCIsIkNpcmN1bGFyUHJvZ3Jlc3MiLCJGb3JtQ29udHJvbExhYmVsIiwiQ2hlY2tib3giLCJnZXRFcnJvciIsIlN0b3JlIiwiTGF5b3V0IiwidXNlU3R5bGVzIiwiQ29udHJvbGxlciIsInVzZUZvcm0iLCJ1c2VTbmFja2JhciIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJsb2FkaW5nIiwiZXJyb3IiLCJwYXlsb2FkIiwibG9hZGluZ1VwZGF0ZSIsImVycm9yVXBkYXRlIiwibG9hZGluZ1VwbG9hZCIsImVycm9yVXBsb2FkIiwiUHJvZHVjdEVkaXQiLCJwYXJhbXMiLCJwcm9kdWN0SWQiLCJpZCIsImRpc3BhdGNoIiwiaGFuZGxlU3VibWl0IiwiY29udHJvbCIsImVycm9ycyIsImZvcm1TdGF0ZSIsInNldFZhbHVlIiwiZW5xdWV1ZVNuYWNrYmFyIiwiY2xvc2VTbmFja2JhciIsInJvdXRlciIsImNsYXNzZXMiLCJ1c2VySW5mbyIsInB1c2giLCJmZXRjaERhdGEiLCJnZXQiLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsInRva2VuIiwiZGF0YSIsIm5hbWUiLCJzbHVnIiwicHJpY2UiLCJpbWFnZSIsImZlYXR1cmVkSW1hZ2UiLCJzZXRJc0ZlYXR1cmVkIiwiaXNGZWF0dXJlZCIsImNhdGVnb3J5IiwiYnJhbmQiLCJjb3VudEluU3RvY2siLCJkZXNjcmlwdGlvbiIsInVwbG9hZEhhbmRsZXIiLCJlIiwiaW1hZ2VGaWVsZCIsImZpbGUiLCJ0YXJnZXQiLCJmaWxlcyIsImJvZHlGb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwicG9zdCIsInNlY3VyZV91cmwiLCJ2YXJpYW50Iiwic3VibWl0SGFuZGxlciIsImNvbnNvbGUiLCJsb2ciLCJwdXQiLCJzZWN0aW9uIiwiZm9ybSIsInJlcXVpcmVkIiwiZmllbGQiLCJCb29sZWFuIiwiY2hlY2tlZCIsIlByb21pc2UiLCJyZXNvbHZlIiwic3NyIl0sInNvdXJjZVJvb3QiOiIifQ==