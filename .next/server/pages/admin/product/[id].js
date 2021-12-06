"use strict";
(() => {
var exports = {};
exports.id = 4590;
exports.ids = [4590];
exports.modules = {

/***/ 529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9639);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1731);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9873);
/* harmony import */ var _utils_Store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2236);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4941);
/* harmony import */ var _utils_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(530);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2662);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3308);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_12__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














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

function ProductEdit({
  params
}) {
  const productId = params.id;
  const {
    state
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_utils_Store__WEBPACK_IMPORTED_MODULE_8__/* .Store */ .y);
  const {
    0: {
      loading,
      error,
      loadingUpdate,
      loadingUpload
    },
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useReducer)(reducer, {
    loading: true,
    error: ""
  });
  const {
    handleSubmit,
    control,
    formState: {
      errors
    },
    setValue
  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_11__.useForm)();
  const {
    enqueueSnackbar,
    closeSnackbar
  } = (0,notistack__WEBPACK_IMPORTED_MODULE_12__.useSnackbar)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const classes = (0,_utils_styles__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z)();
  const {
    userInfo
  } = state;
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    if (!userInfo) {
      return router.push("/login");
    } else {
      const fetchData = async () => {
        try {
          dispatch({
            type: "FETCH_REQUEST"
          });
          const {
            data
          } = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`/api/admin/products/${productId}`, {
            headers: {
              authorization: `Bearer ${userInfo.token}`
            } //This is the token from the login used to authenticate the user when fetching data.

          });
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
        } catch (err) {
          dispatch({
            type: "FETCH_FAIL",
            payload: (0,_utils_error__WEBPACK_IMPORTED_MODULE_7__/* .getError */ .b)(err)
          });
        }
      };

      fetchData();
    }
  }, []);

  const uploadHandler = async (e, imageField = 'image') => {
    const file = e.target.files[0];
    const bodyFormData = new FormData();
    bodyFormData.append('file', file);

    try {
      dispatch({
        type: 'UPLOAD_REQUEST'
      });
      const {
        data
      } = await axios__WEBPACK_IMPORTED_MODULE_1___default().post('/api/admin/upload', bodyFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          authorization: `Bearer ${userInfo.token}`
        }
      });
      dispatch({
        type: 'UPLOAD_SUCCESS'
      });
      setValue(imageField, data.secure_url);
      enqueueSnackbar('File uploaded successfully', {
        variant: 'success'
      });
    } catch (err) {
      dispatch({
        type: 'UPLOAD_FAIL',
        payload: (0,_utils_error__WEBPACK_IMPORTED_MODULE_7__/* .getError */ .b)(err)
      });
      enqueueSnackbar((0,_utils_error__WEBPACK_IMPORTED_MODULE_7__/* .getError */ .b)(err), {
        variant: 'error'
      });
    }
  };

  const submitHandler = async ({
    name,
    slug,
    price,
    category,
    image,
    featuredImage,
    brand,
    countInStock,
    description
  }) => {
    closeSnackbar();

    try {
      dispatch({
        type: "UPDATE_REQUEST"
      });
      await axios__WEBPACK_IMPORTED_MODULE_1___default().put(`/api/admin/products/${productId}`, {
        name,
        slug,
        price,
        category,
        image,
        isFeatured,
        featuredImage,
        brand,
        countInStock,
        description
      }, {
        headers: {
          authorization: `Bearer ${userInfo.token}`
        }
      });
      dispatch({
        type: "UPDATE_SUCCESS"
      });
      enqueueSnackbar("Product updated successfully", {
        variant: "success"
      });
      router.push("/admin/products");
    } catch (err) {
      dispatch({
        type: "UPDATE_FAIL",
        payload: (0,_utils_error__WEBPACK_IMPORTED_MODULE_7__/* .getError */ .b)(err)
      });
      enqueueSnackbar((0,_utils_error__WEBPACK_IMPORTED_MODULE_7__/* .getError */ .b)(err), {
        variant: "error"
      });
    }
  };

  const {
    0: isFeatured,
    1: setIsFeatured
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z, {
    title: `Edit Product ${productId}`,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Grid, {
      container: true,
      spacing: 1,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Grid, {
        item: true,
        md: 3,
        xs: 12,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Card, {
          className: classes.section,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.List, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__.default, {
              href: "/admin/dashboard",
              passHref: true,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItem, {
                button: true,
                component: "a",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItemText, {
                  primary: "Admin Dashboard"
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__.default, {
              href: "/admin/orders",
              passHref: true,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItem, {
                button: true,
                component: "a",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItemText, {
                  primary: "Orders"
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__.default, {
              href: "/admin/products",
              passHref: true,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItem, {
                selected: true,
                button: true,
                component: "a",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItemText, {
                  primary: "Products"
                })
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__.default, {
              href: "/admin/users",
              passHref: true,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItem, {
                button: true,
                component: "a",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItemText, {
                  primary: "Users"
                })
              })
            })]
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Grid, {
        item: true,
        md: 9,
        xs: 12,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Card, {
          className: classes.section,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.List, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItem, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                component: "h1",
                variant: "h1",
                children: ["Edit Product ", productId]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItem, {
              children: [loading && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.CircularProgress, {}), error && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                className: classes.error,
                children: error
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItem, {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                onSubmit: handleSubmit(submitHandler),
                className: classes.form,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.List, {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItem, {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_11__.Controller, {
                      name: "name",
                      control: control,
                      defaultValue: "",
                      rules: {
                        required: true
                      },
                      render: ({
                        field
                      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.TextField, _objectSpread({
                        variant: "outlined",
                        fullWidth: true,
                        id: "name",
                        label: "Name",
                        error: Boolean(errors.name),
                        helperText: errors.name ? "Name is required" : ""
                      }, field))
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItem, {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_11__.Controller, {
                      name: "slug",
                      control: control,
                      defaultValue: "",
                      rules: {
                        required: true
                      },
                      render: ({
                        field
                      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.TextField, _objectSpread({
                        variant: "outlined",
                        fullWidth: true,
                        id: "slug",
                        label: "Slug",
                        error: Boolean(errors.slug),
                        helperText: errors.slug ? "Slug is required" : ""
                      }, field))
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItem, {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_11__.Controller, {
                      name: "price",
                      control: control,
                      defaultValue: "",
                      rules: {
                        required: true
                      },
                      render: ({
                        field
                      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.TextField, _objectSpread({
                        variant: "outlined",
                        fullWidth: true,
                        id: "price",
                        label: "Price",
                        error: Boolean(errors.price),
                        helperText: errors.price ? "Price is required" : ""
                      }, field))
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItem, {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_11__.Controller, {
                      name: "image",
                      control: control,
                      defaultValue: "",
                      rules: {
                        required: true
                      },
                      render: ({
                        field
                      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.TextField, _objectSpread({
                        variant: "outlined",
                        fullWidth: true,
                        id: "image",
                        label: "Image",
                        error: Boolean(errors.image),
                        helperText: errors.image ? "Image is required" : ""
                      }, field))
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItem, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Button, {
                      variant: "contained",
                      component: "label",
                      children: ["Upload File", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "file",
                        onChange: uploadHandler,
                        hidden: true
                      })]
                    }), loadingUpload && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.CircularProgress, {})]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItem, {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.FormControlLabel, {
                      label: "Is Featured",
                      control: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Checkbox, {
                        onClick: e => setIsFeatured(e.target.checked),
                        checked: isFeatured,
                        name: "isFeatured"
                      })
                    })
                  }), isFeatured && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItem, {
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_11__.Controller, {
                        name: "featuredImage",
                        control: control,
                        defaultValue: "",
                        rules: {
                          required: true
                        },
                        render: ({
                          field
                        }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.TextField, _objectSpread({
                          variant: "outlined",
                          fullWidth: true,
                          id: "featuredImage",
                          label: "Featured Image",
                          error: Boolean(errors.featuredImage),
                          helperText: errors.featuredImage ? 'Featured Image is required' : ''
                        }, field))
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItem, {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Button, {
                        variant: "contained",
                        component: "label",
                        children: ["Upload File", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                          type: "file",
                          onChange: e => uploadHandler(e, 'featuredImage'),
                          hidden: true
                        })]
                      }), loadingUpload && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.CircularProgress, {})]
                    })]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItem, {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_11__.Controller, {
                      name: "category",
                      control: control,
                      defaultValue: "",
                      rules: {
                        required: true
                      },
                      render: ({
                        field
                      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.TextField, _objectSpread({
                        variant: "outlined",
                        fullWidth: true,
                        id: "category",
                        label: "Category",
                        error: Boolean(errors.category),
                        helperText: errors.category ? "Category is required" : ""
                      }, field))
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItem, {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_11__.Controller, {
                      name: "brand",
                      control: control,
                      defaultValue: "",
                      rules: {
                        required: true
                      },
                      render: ({
                        field
                      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.TextField, _objectSpread({
                        variant: "outlined",
                        fullWidth: true,
                        id: "brand",
                        label: "Brand",
                        error: Boolean(errors.brand),
                        helperText: errors.brand ? "Brand is required" : ""
                      }, field))
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItem, {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_11__.Controller, {
                      name: "countInStock",
                      control: control,
                      defaultValue: "",
                      rules: {
                        required: true
                      },
                      render: ({
                        field
                      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.TextField, _objectSpread({
                        variant: "outlined",
                        fullWidth: true,
                        id: "countInStock",
                        label: "Count in stock",
                        error: Boolean(errors.countInStock),
                        helperText: errors.countInStock ? "Count in stock is required" : ""
                      }, field))
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItem, {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_11__.Controller, {
                      name: "description",
                      control: control,
                      defaultValue: "",
                      rules: {
                        required: true
                      },
                      render: ({
                        field
                      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.TextField, _objectSpread({
                        variant: "outlined",
                        fullWidth: true,
                        multiline: true,
                        id: "description",
                        label: "Description",
                        error: Boolean(errors.description),
                        helperText: errors.description ? "Description is required" : ""
                      }, field))
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItem, {
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Button, {
                      variant: "contained",
                      type: "submit",
                      fullWidth: true,
                      color: "primary",
                      children: "Update"
                    }), loadingUpdate && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.CircularProgress, {})]
                  })]
                })
              })
            })]
          })
        })
      })]
    })
  });
}

async function getServerSideProps({
  params
}) {
  return {
    props: {
      params
    }
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => Promise.resolve(ProductEdit), {
  ssr: false
}));

/***/ }),

/***/ 1731:
/***/ ((module) => {

module.exports = require("@material-ui/core");

/***/ }),

/***/ 3772:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Cancel");

/***/ }),

/***/ 1358:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ 3016:
/***/ ((module) => {

module.exports = require("@material-ui/icons/Search");

/***/ }),

/***/ 2376:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 6155:
/***/ ((module) => {

module.exports = require("js-cookie");

/***/ }),

/***/ 5619:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 9639:
/***/ ((module) => {

module.exports = require("next/dynamic");

/***/ }),

/***/ 701:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6731:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 3308:
/***/ ((module) => {

module.exports = require("notistack");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 2662:
/***/ ((module) => {

module.exports = require("react-hook-form");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1664,6420,2236,3001,1542], () => (__webpack_exec__(529)));
module.exports = __webpack_exports__;

})();