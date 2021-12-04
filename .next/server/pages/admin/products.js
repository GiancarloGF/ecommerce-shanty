(() => {
var exports = {};
exports.id = "pages/admin/products";
exports.ids = ["pages/admin/products"];
exports.modules = {

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Menu */ "@material-ui/icons/Menu");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Cancel */ "@material-ui/icons/Cancel");
/* harmony import */ var _material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Search */ "@material-ui/icons/Search");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var utils_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/styles */ "./utils/styles.js");
/* harmony import */ var utils_Store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! utils/Store */ "./utils/Store.js");
/* harmony import */ var _utils_error__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/error */ "./utils/error.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! notistack */ "notistack");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_14__);


var _jsxFileName = "C:\\Users\\USER\\Documents\\GitHub\\ecommerce-shanty\\components\\Layout.js";
















function Layout({
  title,
  description,
  children
}) {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_12__.useRouter)();
  const {
    state,
    dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(utils_Store__WEBPACK_IMPORTED_MODULE_9__.Store);
  const {
    darkMode,
    cart,
    userInfo
  } = state; // Switch botton issue is fixed partialy with this code. Look up another ways to fix this.!!!!
  // if(darkMode===true){
  //     document.getElementsByClassName('MuiButtonBase-root')[0].classList.add('Mui-checked')
  // }

  const theme = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.createTheme)({
    typography: {
      h1: {
        fontSize: "1.6rem",
        fontWeight: 400,
        margin: "1rem 0"
      },
      h2: {
        fontSize: "1.4rem",
        fontWeight: 400,
        margin: "1rem 0"
      }
    },
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: "#f0c000"
      },
      secondary: {
        main: "#208080"
      }
    }
  });
  const classes = (0,utils_styles__WEBPACK_IMPORTED_MODULE_8__.default)();
  const {
    0: sidbarVisible,
    1: setSidebarVisible
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  const sidebarOpenHandler = () => {
    setSidebarVisible(true);
  };

  const sidebarCloseHandler = () => {
    setSidebarVisible(false);
  };

  const {
    0: categories,
    1: setCategories
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    enqueueSnackbar
  } = (0,notistack__WEBPACK_IMPORTED_MODULE_13__.useSnackbar)();

  const fetchCategories = async () => {
    try {
      const {
        data
      } = await axios__WEBPACK_IMPORTED_MODULE_14___default().get(`/api/products/categories`);
      setCategories(data);
    } catch (err) {
      enqueueSnackbar((0,_utils_error__WEBPACK_IMPORTED_MODULE_10__.getError)(err), {
        variant: 'error'
      });
    }
  };

  const {
    0: query,
    1: setQuery
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');

  const queryChangeHandler = e => {
    setQuery(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();
    router.push(`/search?query=${query}`);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    fetchCategories();
  }, []); // eslint-disable-line no-use-before-define

  const darkModeChangeHandler = () => {
    dispatch({
      type: darkMode ? "DARK_MODE_OFF" : "DARK_MODE_ON"
    });
    const newDarkMode = !darkMode;
    js_cookie__WEBPACK_IMPORTED_MODULE_11___default().set("darkMode", newDarkMode ? "ON" : "OFF");
  };

  const {
    0: anchorEl,
    1: setAnchorEl
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null); //TO open or close menu.

  const loginClickHandler = e => {
    setAnchorEl(e.currentTarget);
  };

  const loginMenuCloseHandler = (e, redirect) => {
    setAnchorEl(null);

    if (redirect) {
      router.push(redirect);
    }
  };

  const logoutClickHandler = () => {
    setAnchorEl(null);
    dispatch({
      type: "USER_LOGOUT"
    });
    js_cookie__WEBPACK_IMPORTED_MODULE_11___default().remove("userInfo");
    js_cookie__WEBPACK_IMPORTED_MODULE_11___default().remove("cartItems");
    js_cookie__WEBPACK_IMPORTED_MODULE_11___default().remove('shippinhAddress');
    js_cookie__WEBPACK_IMPORTED_MODULE_11___default().remove('paymentMethod');
    router.push("/");
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: title ? `${title} - Shanty` : "Shanty"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 9
      }, this), description && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 25
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {
      theme: theme,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.CssBaseline, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 9
      }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.AppBar, {
        position: "static",
        className: classes.navbar,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Toolbar, {
          className: classes.toolbar,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Box, {
            display: "flex",
            alignItems: "center",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.IconButton, {
              edge: "start",
              "aria-label": "open drawer",
              onClick: sidebarOpenHandler,
              className: classes.menuButton,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_5___default()), {
                className: classes.navbarButton
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 155,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
              href: "/",
              passHref: true,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Link, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                  className: classes.brand,
                  children: "Shanty Shop"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 159,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 158,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 157,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Drawer, {
            anchor: "left",
            open: sidbarVisible,
            onClose: sidebarCloseHandler,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.List, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.ListItem, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Box, {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                    children: "Shopping by category"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 175,
                    columnNumber: 21
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.IconButton, {
                    "aria-label": "close",
                    onClick: sidebarCloseHandler,
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_Cancel__WEBPACK_IMPORTED_MODULE_6___default()), {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 180,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 176,
                    columnNumber: 21
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 170,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 169,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Divider, {
                light: true
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 184,
                columnNumber: 17
              }, this), categories.map(category => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                href: `/search?category=${category}`,
                passHref: true,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.ListItem, {
                  button: true,
                  component: "a",
                  onClick: sidebarCloseHandler,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.ListItemText, {
                    primary: category
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 196,
                    columnNumber: 23
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 191,
                  columnNumber: 21
                }, this)
              }, category, false, {
                fileName: _jsxFileName,
                lineNumber: 186,
                columnNumber: 19
              }, this))]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: classes.searchSection,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
              onSubmit: submitHandler,
              className: classes.searchForm,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.InputBase, {
                name: "query",
                className: classes.searchInput,
                placeholder: "Search products",
                onChange: queryChangeHandler
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 204,
                columnNumber: 17
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.IconButton, {
                type: "submit",
                className: classes.iconButton,
                "aria-label": "search",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_7___default()), {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 215,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 210,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 202,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Switch, {
              checked: darkMode,
              onChange: darkModeChangeHandler
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 220,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
              href: "/cart",
              passHref: true,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Link, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                  component: "span",
                  children: cart.cartItems.length > 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Badge, {
                    color: "secondary",
                    badgeContent: cart.cartItems.length,
                    children: "Cart"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 228,
                    columnNumber: 23
                  }, this) : 'Cart'
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 226,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 225,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 224,
              columnNumber: 15
            }, this), userInfo ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Button, {
                "aria-controls": "simple-menu",
                "aria-haspopup": "true",
                onClick: loginClickHandler,
                className: classes.navbarButton,
                children: userInfo.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 242,
                columnNumber: 19
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Menu, {
                id: "simple-menu",
                anchorEl: anchorEl,
                keepMounted: true,
                open: Boolean(anchorEl),
                onClose: loginMenuCloseHandler,
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
                  onClick: e => loginMenuCloseHandler(e, "/profile"),
                  children: "Profile"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 257,
                  columnNumber: 21
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
                  onClick: e => loginMenuCloseHandler(e, "/order-history"),
                  children: "Order History"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 262,
                  columnNumber: 21
                }, this), userInfo.isAdmin && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
                  onClick: e => loginMenuCloseHandler(e, '/admin/dashboard'),
                  children: "Admin Dashboard"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 270,
                  columnNumber: 23
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.MenuItem, {
                  onClick: logoutClickHandler,
                  children: "Logout"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 278,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 250,
                columnNumber: 19
              }, this)]
            }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
              href: "/login",
              passHref: true,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Link, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                  component: "span",
                  children: "Login"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 284,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 283,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 282,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 219,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Container, {
        className: classes.main,
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 291,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
        className: classes.footer,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
          children: "All rights reserved. Shanty."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 293,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 292,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 138,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js");

var _router1 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router).isLocalURL(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router1).useRouter();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router).resolveHref(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router).resolveHref(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.default.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection).useIntersection({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  _react.default.useEffect(() => {
    const shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);

  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router).isLocalURL(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router).getDomainLocale(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router).addBasePath((0, _router).addLocale(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}

const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.createRouteLoader = createRouteLoader;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/utils/get-asset-path-from-route */ "../shared/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (e) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR');

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // We wait for pages to be built in dev before we start the route transition
// timeout to prevent an un-necessary hard navigation in development.


let devBuildPromise; // Resolve a promise that times out after given amount of milliseconds.

function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject); // We wrap these checks separately for better dead-code elimination in
    // production bundles.

    if (true) {
      (devBuildPromise || Promise.resolve()).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => setTimeout(() => {
          if (!cancelled) {
            reject(err);
          }
        }, ms));
      });
    }

    if (false) {}
  });
}

function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute).default(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        const routeFilesPromise = getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        });

        if (true) {
          devBuildPromise = new Promise(resolve => {
            if (routeFilesPromise) {
              return routeFilesPromise.finally(() => {
                resolve();
              });
            }
          });
        }

        return resolvePromiseWithTimeout(routeFilesPromise, MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Router", ({
  enumerable: true,
  get: function () {
    return _router.default;
  }
}));
Object.defineProperty(exports, "withRouter", ({
  enumerable: true,
  get: function () {
    return _withRouter.default;
  }
}));
exports.useRouter = useRouter;
exports.createRouter = createRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/router */ "./node_modules/next/dist/shared/lib/router/router.js"));

var _routerContext = __webpack_require__(/*! ../shared/lib/router-context */ "../shared/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const singletonRouter = {
  router: null,
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
}

var _default = singletonRouter;
exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
}

function createRouter(...args) {
  singletonRouter.router = new _router.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}

function makePublicRouterInstance(router) {
  const _router1 = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router1[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router1[property]) ? [] : {}, _router1[property]) // makes sure query is not stateful
      ;
      continue;
    }

    instance[property] = _router1[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router1[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react).useRef();
  const [visible, setVisible] = (0, _react).useState(false);
  const setRef = (0, _react).useCallback(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react).useEffect(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback).requestIdleCallback(() => setVisible(true));
        return () => (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router).useRouter()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/shared/lib/router/router.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/shared/lib/router/router.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../../server/denormalize-page-path */ "../../../server/denormalize-page-path");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "../i18n/normalize-locale-path");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "../mitt"));

var _utils = __webpack_require__(/*! ../utils */ "../shared/lib/utils");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./utils/is-dynamic");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./utils/parse-relative-url");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./utils/querystring");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?5c99"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./utils/route-matcher");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./utils/route-regex");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash).normalizePathTrailingSlash(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {} else {
    return false;
  }
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}

function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils).getLocationOrigin();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex).getRouteRegex(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher).getRouteMatcher(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = '' // did not satisfy all requirements
    ; // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}

function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  let urlAsString = typeof href === 'string' ? href : (0, _utils).formatWithValidation(href); // repeated slashes and backslashes in the URL are considered
  // invalid and will never match a Next.js page/file

  const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
  const urlAsStringNoProto = urlProtoMatch ? urlAsString.substr(urlProtoMatch[0].length) : urlAsString;
  const urlParts = urlAsStringNoProto.split('?');

  if ((urlParts[0] || '').match(/(\/\/|\\)/)) {
    console.error(`Invalid href passed to next/router: ${urlAsString}, repeated forward-slashes (//) or backslashes \\ are not valid in the href`);
    const normalizedUrl = (0, _utils).normalizeRepeatedSlashes(urlAsStringNoProto);
    urlAsString = (urlProtoMatch ? urlProtoMatch[0] : '') + normalizedUrl;
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash).normalizePathTrailingSlash(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic).isDynamicRoute(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring).searchParamsToUrlQuery(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils).formatWithValidation({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils).getLocationOrigin();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils).getLocationOrigin();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash).removePathTrailingSlash((0, _denormalizePagePath).denormalizePagePath(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic).isDynamicRoute(page) && (0, _routeRegex).getRouteRegex(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader).markAssetError(err);
    }

    throw err;
  });
}

class Router {
  constructor(pathname1, query1, as1, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component: Component1,
    err: err1,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    // Static Data Cache
    this.sdc = {}; // In-flight Server Data Requests, for deduping

    this.sdr = {};
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname: pathname1,
          query: query1
        } = this;
        this.changeState('replaceState', (0, _utils).formatWithValidation({
          pathname: addBasePath(pathname1),
          query: query1
        }), (0, _utils).getURL());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as: as1,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname: pathname1
      } = (0, _parseRelativeUrl).parseRelativeUrl(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as1 === this.asPath && pathname1 === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as1, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname1 !== '/_error') {
      this.components[this.route] = {
        Component: Component1,
        initial: true,
        props: initialProps,
        err: err1,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: []
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname1;
    this.query = query1; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic).isDynamicRoute(pathname1) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? pathname1 : as1;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    const prevLocale = this.locale;

    if (false) { var ref; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as;
    let localeChange = prevLocale !== this.locale; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs) && !localeChange) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname1,
      query: query1
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader).getClientBuildManifest());
    } catch (err1) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname1 = pathname1 ? (0, _normalizeTrailingSlash).removePathTrailingSlash(delBasePath(pathname1)) : pathname1;

    if (shouldResolveHref && pathname1 !== '/_error') {
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname1, pages);

        if (parsed.pathname !== pathname1) {
          pathname1 = parsed.pathname;
          parsed.pathname = addBasePath(pathname1);
          url = (0, _utils).formatWithValidation(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic).isDynamicRoute(route)) {
      const parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex).getRouteRegex(route);
      const routeMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query1) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query1[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils).formatWithValidation(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query1, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query1, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var ref, ref1;
      let routeInfo = await this.getRouteInfo(route, pathname1, query1, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl).parseRelativeUrl(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query1, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname1 === '/_error' && ((ref = self.__NEXT_DATA__.props) === null || ref === void 0 ? void 0 : (ref1 = ref.pageProps) === null || ref1 === void 0 ? void 0 : ref1.statusCode) === 500 && (props === null || props === void 0 ? void 0 : props.pageProps)) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      var _scroll;

      const shouldScroll = (_scroll = options.scroll) !== null && _scroll !== void 0 ? _scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname1, query1, cleanedAs, routeInfo, forcedScroll !== null && forcedScroll !== void 0 ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err1) {
      if (err1.cancelled) {
        return false;
      }

      throw err1;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils).getURL() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader).isAssetError(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component1;
      let styleSheets;
      let props;

      if (typeof Component1 === 'undefined' || typeof styleSheets === 'undefined') {
        ({
          page: Component1,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component: Component1,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component1, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component: Component1,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component1)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils).formatWithValidation({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component1, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err2) {
      return this.handleRouteInfoError(err2, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname2
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname2) {
        pathname2 = parsed.pathname;
        parsed.pathname = pathname2;
        url = (0, _utils).formatWithValidation(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname2); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err2 = new Error('Loading initial props cancelled');
        err2.cancelled = true;
        throw err2;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err2 => {
      delete this.sdr[resourceKey];
      throw err2;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App1
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App1);

    ctx.AppTree = AppTree;
    return (0, _utils).loadGetInitialProps(App1, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

Router.events = (0, _mitt).default();
exports.default = Router;

/***/ }),

/***/ "./pages/admin/products.js":
/*!*********************************!*\
  !*** ./pages/admin/products.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var utils_error__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/error */ "./utils/error.js");
/* harmony import */ var utils_Store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/Store */ "./utils/Store.js");
/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Layout */ "./components/Layout.js");
/* harmony import */ var utils_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! utils/styles */ "./utils/styles.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! notistack */ "notistack");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_11__);

var _jsxFileName = "C:\\Users\\USER\\Documents\\GitHub\\ecommerce-shanty\\pages\\admin\\products.js";

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
        products: action.payload,
        error: ""
      });

    case "FETCH_FAIL":
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: action.payload
      });

    case 'CREATE_REQUEST':
      return _objectSpread(_objectSpread({}, state), {}, {
        loadingCreate: true
      });

    case 'CREATE_SUCCESS':
      return _objectSpread(_objectSpread({}, state), {}, {
        loadingCreate: false
      });

    case 'CREATE_FAIL':
      return _objectSpread(_objectSpread({}, state), {}, {
        loadingCreate: false
      });

    case 'DELETE_REQUEST':
      return _objectSpread(_objectSpread({}, state), {}, {
        loadingDelete: true
      });

    case 'DELETE_SUCCESS':
      return _objectSpread(_objectSpread({}, state), {}, {
        loadingDelete: false,
        successDelete: true
      });

    case 'DELETE_FAIL':
      return _objectSpread(_objectSpread({}, state), {}, {
        loadingDelete: false
      });

    case 'DELETE_RESET':
      return _objectSpread(_objectSpread({}, state), {}, {
        loadingDelete: false,
        successDelete: false
      });

    default:
      state;
  }
}

function AdminProducts() {
  const {
    state
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(utils_Store__WEBPACK_IMPORTED_MODULE_8__.Store);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const classes = (0,utils_styles__WEBPACK_IMPORTED_MODULE_10__.default)();
  const {
    userInfo
  } = state;
  const {
    0: {
      loading,
      error,
      products,
      loadingCreate,
      successDelete,
      loadingDelete
    },
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useReducer)(reducer, {
    loading: true,
    products: [],
    error: ""
  });
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    if (!userInfo) {
      router.push("/login");
    }

    const fetchData = async () => {
      try {
        dispatch({
          type: "FETCH_REQUEST"
        });
        const {
          data
        } = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`/api/admin/products`, {
          headers: {
            authorization: `Bearer ${userInfo.token}`
          }
        });
        dispatch({
          type: "FETCH_SUCCESS",
          payload: data
        });
      } catch (err) {
        dispatch({
          type: "FETCH_FAIL",
          payload: (0,utils_error__WEBPACK_IMPORTED_MODULE_7__.getError)(err)
        });
      }
    };

    if (successDelete) {
      dispatch({
        type: 'DELETE_RESET'
      });
    } else {
      fetchData();
    }
  }, [successDelete]); // eslint-disable-line no-use-before-define

  const {
    enqueueSnackbar
  } = (0,notistack__WEBPACK_IMPORTED_MODULE_11__.useSnackbar)();

  const createHandler = async () => {
    if (!window.confirm('Are you sure?')) {
      return;
    }

    try {
      dispatch({
        type: 'CREATE_REQUEST'
      });
      const {
        data
      } = await axios__WEBPACK_IMPORTED_MODULE_1___default().post(`/api/admin/products`, {}, {
        headers: {
          authorization: `Bearer ${userInfo.token}`
        }
      });
      dispatch({
        type: 'CREATE_SUCCESS'
      });
      enqueueSnackbar('Product created successfully', {
        variant: 'success'
      });
      router.push(`/admin/product/${data.product._id}`);
    } catch (err) {
      dispatch({
        type: 'CREATE_FAIL'
      });
      enqueueSnackbar((0,utils_error__WEBPACK_IMPORTED_MODULE_7__.getError)(err), {
        variant: 'error'
      });
    }
  };

  const deleteHandler = async productId => {
    if (!window.confirm('Are you sure?')) {
      return;
    }

    try {
      dispatch({
        type: 'DELETE_REQUEST'
      });
      await axios__WEBPACK_IMPORTED_MODULE_1___default().delete(`/api/admin/products/${productId}`, {
        headers: {
          authorization: `Bearer ${userInfo.token}`
        }
      });
      dispatch({
        type: 'DELETE_SUCCESS'
      });
      enqueueSnackbar('Product deleted successfully', {
        variant: 'success'
      });
    } catch (err) {
      dispatch({
        type: 'DELETE_FAIL'
      });
      enqueueSnackbar((0,utils_error__WEBPACK_IMPORTED_MODULE_7__.getError)(err), {
        variant: 'error'
      });
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_Layout__WEBPACK_IMPORTED_MODULE_9__.default, {
    title: "Products",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Grid, {
      container: true,
      spacing: 1,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Grid, {
        item: true,
        md: 3,
        xs: 12,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Card, {
          className: classes.section,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.List, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
              href: "/admin/dashboard",
              passHref: true,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItem, {
                button: true,
                component: "a",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItemText, {
                  primary: "Admin Dashboard"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 139,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 138,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
              href: "/admin/orders",
              passHref: true,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItem, {
                button: true,
                component: "a",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItemText, {
                  primary: "Orders"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 144,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
              href: "/admin/products",
              passHref: true,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItem, {
                selected: true,
                button: true,
                component: "a",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItemText, {
                  primary: "Products"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 149,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 148,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
              href: "/admin/users",
              passHref: true,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItem, {
                button: true,
                component: "a",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItemText, {
                  primary: "Users"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 154,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 153,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Grid, {
        item: true,
        md: 9,
        xs: 12,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Card, {
          className: classes.section,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.List, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItem, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Grid, {
                container: true,
                alignItems: "center",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Grid, {
                  item: true,
                  xs: 6,
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                    component: "h1",
                    variant: "h1",
                    children: "Products"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 166,
                    columnNumber: 21
                  }, this), loadingDelete && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.CircularProgress, {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 169,
                    columnNumber: 39
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 165,
                  columnNumber: 19
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Grid, {
                  align: "right",
                  item: true,
                  xs: 6,
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Button, {
                    onClick: createHandler,
                    color: "primary",
                    variant: "contained",
                    children: "Create"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 172,
                    columnNumber: 21
                  }, this), loadingCreate && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.CircularProgress, {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 179,
                    columnNumber: 39
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 171,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 164,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.ListItem, {
              children: loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.CircularProgress, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 186,
                columnNumber: 19
              }, this) : error ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Typography, {
                className: classes.error,
                children: error
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 188,
                columnNumber: 19
              }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.TableContainer, {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Table, {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.TableHead, {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.TableRow, {
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.TableCell, {
                        children: "ID"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 194,
                        columnNumber: 27
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.TableCell, {
                        children: "NAME"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 195,
                        columnNumber: 27
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.TableCell, {
                        children: "PRICE"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 196,
                        columnNumber: 27
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.TableCell, {
                        children: "CATEGORY"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 197,
                        columnNumber: 27
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.TableCell, {
                        children: "COUNT"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 198,
                        columnNumber: 27
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.TableCell, {
                        children: "RATING"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 199,
                        columnNumber: 27
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.TableCell, {
                        children: "ACTIONS"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 200,
                        columnNumber: 27
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 193,
                      columnNumber: 25
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 192,
                    columnNumber: 23
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.TableBody, {
                    children: products.map(product => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.TableRow, {
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.TableCell, {
                        children: product._id.substring(20, 24)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 206,
                        columnNumber: 29
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.TableCell, {
                        children: product.name
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 209,
                        columnNumber: 29
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.TableCell, {
                        children: ["$", product.price]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 210,
                        columnNumber: 29
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.TableCell, {
                        children: product.category
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 211,
                        columnNumber: 29
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.TableCell, {
                        children: product.countInStock
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 212,
                        columnNumber: 29
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.TableCell, {
                        children: product.rating
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 213,
                        columnNumber: 29
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.TableCell, {
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                          href: `/admin/product/${product._id}`,
                          passHref: true,
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Button, {
                            size: "small",
                            variant: "contained",
                            children: "Edit"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 219,
                            columnNumber: 33
                          }, this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 215,
                          columnNumber: 31
                        }, this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.Button, {
                          onClick: () => deleteHandler(product._id),
                          size: "small",
                          variant: "contained",
                          children: "Delete"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 223,
                          columnNumber: 31
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 214,
                        columnNumber: 29
                      }, this)]
                    }, product._id, true, {
                      fileName: _jsxFileName,
                      lineNumber: 205,
                      columnNumber: 27
                    }, this))
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 203,
                    columnNumber: 23
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 191,
                  columnNumber: 21
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 190,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 184,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 132,
    columnNumber: 5
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => Promise.resolve(AdminProducts), {
  ssr: false
}));

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

/***/ "./utils/db.js":
/*!*********************!*\
  !*** ./utils/db.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

/***/ "./utils/styles.js":
/*!*************************!*\
  !*** ./utils/styles.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);

const useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(theme => ({
  navbar: {
    backgroundColor: "#203040",
    "& a": {
      color: "#FFFFFF",
      marginLeft: 10
    }
  },
  main: {
    minHeight: "80vh"
  },
  footer: {
    textAlign: "center",
    marginTop: 10
  },
  section: {
    marginTop: 10,
    marginBottom: 10
  },
  form: {
    width: '100%',
    maxWidth: 800,
    margin: "0 auto"
  },
  brand: {
    fontWeight: "bold",
    fontSize: "1.5rem"
  },
  grow: {
    flexGrow: 1
  },
  navbarButton: {
    color: "#ffffff",
    textTransform: "initial"
  },
  transparentBackgroud: {
    backgroundColor: "transparent"
  },
  error: {
    color: "#f04040"
  },
  fullWidth: {
    width: "100%"
  },
  reviewForm: {
    maxWidth: 800,
    width: '100%'
  },
  reviewItem: {
    marginRight: '1rem',
    borderRight: '1px #808080 solid',
    paddingRight: '1rem'
  },
  toolbar: {
    justifyContent: 'space-between'
  },
  menuButton: {
    padding: 0
  },
  mt1: {
    marginTop: '1rem'
  },
  // search
  searchSection: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  searchForm: {
    border: '1px solid #ffffff',
    backgroundColor: '#ffffff',
    borderRadius: 5
  },
  searchInput: {
    paddingLeft: 5,
    color: '#000000',
    '& ::placeholder': {
      color: '#606060'
    }
  },
  iconButton: {
    backgroundColor: '#f8c040',
    padding: 5,
    borderRadius: '0 5px 5px 0',
    '& span': {
      color: '#000000'
    }
  },
  sort: {
    marginRight: 5
  },
  fullContainer: {
    height: '100vh'
  },
  mapInputBox: {
    position: 'absolute',
    display: 'flex',
    left: 0,
    right: 0,
    margin: '10px auto',
    width: 300,
    height: 40,
    '& input': {
      width: 250
    }
  }
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useStyles);

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/icons/Cancel":
/*!********************************************!*\
  !*** external "@material-ui/icons/Cancel" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/Cancel");

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "@material-ui/icons/Search":
/*!********************************************!*\
  !*** external "@material-ui/icons/Search" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@material-ui/icons/Search");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("js-cookie");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "../../../server/denormalize-page-path":
/*!************************************************************!*\
  !*** external "next/dist/server/denormalize-page-path.js" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ "../i18n/normalize-locale-path":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/i18n/normalize-locale-path.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ "../mitt":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/mitt.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ "../shared/lib/router-context":
/*!*********************************************************!*\
  !*** external "next/dist/shared/lib/router-context.js" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ "../shared/lib/router/utils/get-asset-path-from-route":
/*!*********************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/get-asset-path-from-route.js" ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./utils/is-dynamic":
/*!******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/is-dynamic.js" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ "./utils/parse-relative-url":
/*!**************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/parse-relative-url.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ "./utils/querystring":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/querystring.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ "./utils/route-matcher":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-matcher.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ "./utils/route-regex":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-regex.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dynamic");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-is");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "?5c99":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/admin/products.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb20tbmV4dGpzLy4vY29tcG9uZW50cy9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vZWNvbS1uZXh0anMvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9saW5rLmpzIiwid2VicGFjazovL2Vjb20tbmV4dGpzLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzIiwid2VicGFjazovL2Vjb20tbmV4dGpzLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovL2Vjb20tbmV4dGpzLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGUtbG9hZGVyLmpzIiwid2VicGFjazovL2Vjb20tbmV4dGpzLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGVyLmpzIiwid2VicGFjazovL2Vjb20tbmV4dGpzLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvdXNlLWludGVyc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9lY29tLW5leHRqcy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovL2Vjb20tbmV4dGpzLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vZWNvbS1uZXh0anMvLi9wYWdlcy9hZG1pbi9wcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly9lY29tLW5leHRqcy8uL3V0aWxzL1N0b3JlLmpzIiwid2VicGFjazovL2Vjb20tbmV4dGpzLy4vdXRpbHMvZGIuanMiLCJ3ZWJwYWNrOi8vZWNvbS1uZXh0anMvLi91dGlscy9lcnJvci5qcyIsIndlYnBhY2s6Ly9lY29tLW5leHRqcy8uL3V0aWxzL3N0eWxlcy5qcyIsIndlYnBhY2s6Ly9lY29tLW5leHRqcy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vZWNvbS1uZXh0anMvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovL2Vjb20tbmV4dGpzL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0NhbmNlbFwiIiwid2VicGFjazovL2Vjb20tbmV4dGpzL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL01lbnVcIiIsIndlYnBhY2s6Ly9lY29tLW5leHRqcy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9TZWFyY2hcIiIsIndlYnBhY2s6Ly9lY29tLW5leHRqcy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vZWNvbS1uZXh0anMvZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly9lY29tLW5leHRqcy9leHRlcm5hbCBcIm1vbmdvb3NlXCIiLCJ3ZWJwYWNrOi8vZWNvbS1uZXh0anMvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qc1wiIiwid2VicGFjazovL2Vjb20tbmV4dGpzL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanNcIiIsIndlYnBhY2s6Ly9lY29tLW5leHRqcy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL21pdHQuanNcIiIsIndlYnBhY2s6Ly9lY29tLW5leHRqcy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vZWNvbS1uZXh0anMvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL2Vjb20tbmV4dGpzL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanNcIiIsIndlYnBhY2s6Ly9lY29tLW5leHRqcy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanNcIiIsIndlYnBhY2s6Ly9lY29tLW5leHRqcy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qc1wiIiwid2VicGFjazovL2Vjb20tbmV4dGpzL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanNcIiIsIndlYnBhY2s6Ly9lY29tLW5leHRqcy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qc1wiIiwid2VicGFjazovL2Vjb20tbmV4dGpzL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly9lY29tLW5leHRqcy9leHRlcm5hbCBcIm5leHQvZHluYW1pY1wiIiwid2VicGFjazovL2Vjb20tbmV4dGpzL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vZWNvbS1uZXh0anMvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2Vjb20tbmV4dGpzL2V4dGVybmFsIFwibm90aXN0YWNrXCIiLCJ3ZWJwYWNrOi8vZWNvbS1uZXh0anMvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2Vjb20tbmV4dGpzL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9lY29tLW5leHRqcy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2Vjb20tbmV4dGpzL2lnbm9yZWR8QzpcXFVzZXJzXFxVU0VSXFxEb2N1bWVudHNcXEdpdEh1YlxcZWNvbW1lcmNlLXNoYW50eVxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxzaGFyZWRcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBOZXh0TGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7XHJcbiAgQXBwQmFyLFxyXG4gIFRvb2xiYXIsXHJcbiAgVHlwb2dyYXBoeSxcclxuICBDb250YWluZXIsXHJcbiAgTGluayxcclxuICBjcmVhdGVUaGVtZSxcclxuICBUaGVtZVByb3ZpZGVyLFxyXG4gIENzc0Jhc2VsaW5lLFxyXG4gIFN3aXRjaCxcclxuICBCYWRnZSxcclxuICBCdXR0b24sXHJcbiAgTWVudSxcclxuICBNZW51SXRlbSxcclxuICBCb3gsXHJcbiAgSWNvbkJ1dHRvbixcclxuICBEcmF3ZXIsXHJcbiAgTGlzdCxcclxuICBMaXN0SXRlbSxcclxuICBEaXZpZGVyLFxyXG4gIExpc3RJdGVtVGV4dCxcclxuICBJbnB1dEJhc2UsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudSc7XHJcbmltcG9ydCBDYW5jZWxJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DYW5jZWwnO1xyXG5pbXBvcnQgU2VhcmNoSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2VhcmNoJztcclxuaW1wb3J0IHVzZVN0eWxlcyBmcm9tIFwidXRpbHMvc3R5bGVzXCI7XHJcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcInV0aWxzL1N0b3JlXCI7XHJcbmltcG9ydCB7IGdldEVycm9yIH0gZnJvbSAnLi4vdXRpbHMvZXJyb3InO1xyXG5pbXBvcnQgQ29va2llcyBmcm9tIFwianMtY29va2llXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VTbmFja2JhciB9IGZyb20gJ25vdGlzdGFjayc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IHRpdGxlLCBkZXNjcmlwdGlvbiwgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgc3RhdGUsIGRpc3BhdGNoIH0gPSB1c2VDb250ZXh0KFN0b3JlKTtcclxuICBjb25zdCB7IGRhcmtNb2RlLCBjYXJ0LCB1c2VySW5mbyB9ID0gc3RhdGU7XHJcblxyXG4gIC8vIFN3aXRjaCBib3R0b24gaXNzdWUgaXMgZml4ZWQgcGFydGlhbHkgd2l0aCB0aGlzIGNvZGUuIExvb2sgdXAgYW5vdGhlciB3YXlzIHRvIGZpeCB0aGlzLiEhISFcclxuICAvLyBpZihkYXJrTW9kZT09PXRydWUpe1xyXG4gIC8vICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdNdWlCdXR0b25CYXNlLXJvb3QnKVswXS5jbGFzc0xpc3QuYWRkKCdNdWktY2hlY2tlZCcpXHJcbiAgLy8gfVxyXG5cclxuICBjb25zdCB0aGVtZSA9IGNyZWF0ZVRoZW1lKHtcclxuICAgIHR5cG9ncmFwaHk6IHtcclxuICAgICAgaDE6IHtcclxuICAgICAgICBmb250U2l6ZTogXCIxLjZyZW1cIixcclxuICAgICAgICBmb250V2VpZ2h0OiA0MDAsXHJcbiAgICAgICAgbWFyZ2luOiBcIjFyZW0gMFwiLFxyXG4gICAgICB9LFxyXG4gICAgICBoMjoge1xyXG4gICAgICAgIGZvbnRTaXplOiBcIjEuNHJlbVwiLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcclxuICAgICAgICBtYXJnaW46IFwiMXJlbSAwXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgcGFsZXR0ZToge1xyXG4gICAgICB0eXBlOiBkYXJrTW9kZSA/IFwiZGFya1wiIDogXCJsaWdodFwiLFxyXG4gICAgICBwcmltYXJ5OiB7XHJcbiAgICAgICAgbWFpbjogXCIjZjBjMDAwXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHNlY29uZGFyeToge1xyXG4gICAgICAgIG1haW46IFwiIzIwODA4MFwiLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9KTtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcblxyXG4gIGNvbnN0IFtzaWRiYXJWaXNpYmxlLCBzZXRTaWRlYmFyVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgc2lkZWJhck9wZW5IYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgc2V0U2lkZWJhclZpc2libGUodHJ1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBzaWRlYmFyQ2xvc2VIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgc2V0U2lkZWJhclZpc2libGUoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IFtjYXRlZ29yaWVzLCBzZXRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCB7IGVucXVldWVTbmFja2JhciB9ID0gdXNlU25hY2tiYXIoKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hDYXRlZ29yaWVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvcHJvZHVjdHMvY2F0ZWdvcmllc2ApO1xyXG4gICAgICBzZXRDYXRlZ29yaWVzKGRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGVucXVldWVTbmFja2JhcihnZXRFcnJvcihlcnIpLCB7IHZhcmlhbnQ6ICdlcnJvcicgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgcXVlcnlDaGFuZ2VIYW5kbGVyID0gKGUpID0+IHtcclxuICAgIHNldFF1ZXJ5KGUudGFyZ2V0LnZhbHVlKTtcclxuICB9O1xyXG4gIGNvbnN0IHN1Ym1pdEhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgcm91dGVyLnB1c2goYC9zZWFyY2g/cXVlcnk9JHtxdWVyeX1gKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hDYXRlZ29yaWVzKCk7XHJcbiAgfSwgW10pOy8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcclxuXHJcbiAgY29uc3QgZGFya01vZGVDaGFuZ2VIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBkYXJrTW9kZSA/IFwiREFSS19NT0RFX09GRlwiIDogXCJEQVJLX01PREVfT05cIiB9KTtcclxuICAgIGNvbnN0IG5ld0RhcmtNb2RlID0gIWRhcmtNb2RlO1xyXG4gICAgQ29va2llcy5zZXQoXCJkYXJrTW9kZVwiLCBuZXdEYXJrTW9kZSA/IFwiT05cIiA6IFwiT0ZGXCIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gdXNlU3RhdGUobnVsbCk7IC8vVE8gb3BlbiBvciBjbG9zZSBtZW51LlxyXG5cclxuICBjb25zdCBsb2dpbkNsaWNrSGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICBzZXRBbmNob3JFbChlLmN1cnJlbnRUYXJnZXQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxvZ2luTWVudUNsb3NlSGFuZGxlciA9IChlLCByZWRpcmVjdCkgPT4ge1xyXG4gICAgc2V0QW5jaG9yRWwobnVsbCk7XHJcbiAgICBpZiAocmVkaXJlY3QpIHtcclxuICAgICAgcm91dGVyLnB1c2gocmVkaXJlY3QpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxvZ291dENsaWNrSGFuZGxlciA9ICgpID0+IHtcclxuICAgIHNldEFuY2hvckVsKG51bGwpO1xyXG4gICAgZGlzcGF0Y2goeyB0eXBlOiBcIlVTRVJfTE9HT1VUXCIgfSk7XHJcbiAgICBDb29raWVzLnJlbW92ZShcInVzZXJJbmZvXCIpO1xyXG4gICAgQ29va2llcy5yZW1vdmUoXCJjYXJ0SXRlbXNcIik7XHJcbiAgICBDb29raWVzLnJlbW92ZSgnc2hpcHBpbmhBZGRyZXNzJyk7XHJcbiAgICBDb29raWVzLnJlbW92ZSgncGF5bWVudE1ldGhvZCcpO1xyXG4gICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+e3RpdGxlID8gYCR7dGl0bGV9IC0gU2hhbnR5YCA6IFwiU2hhbnR5XCJ9PC90aXRsZT5cclxuICAgICAgICB7ZGVzY3JpcHRpb24gJiYgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259PjwvbWV0YT59XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgey8qIFRoZW1lUHJvdmlkZXIgaXMgbmVjZXNzYXJ5IGZvciBjcmVhdGVUaGVtZSAqL31cclxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz4gey8qIENzc0Jhc2VsaW5lIGlzIG5lY2Vzc2FyeSBmb3IgY3JlYXRlVGhlbWUgKi99XHJcbiAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5uYXZiYXJ9PlxyXG4gICAgICAgICAgPFRvb2xiYXIgY2xhc3NOYW1lPXtjbGFzc2VzLnRvb2xiYXJ9PlxyXG4gICAgICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICBlZGdlPVwic3RhcnRcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm9wZW4gZHJhd2VyXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3NpZGViYXJPcGVuSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51QnV0dG9ufVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxNZW51SWNvbiBjbGFzc05hbWU9e2NsYXNzZXMubmF2YmFyQnV0dG9ufSAvPlxyXG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi9cIiBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgIDxMaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuYnJhbmR9PlNoYW50eSBTaG9wPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvTmV4dExpbms+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8RHJhd2VyXHJcbiAgICAgICAgICAgICAgYW5jaG9yPVwibGVmdFwiXHJcbiAgICAgICAgICAgICAgb3Blbj17c2lkYmFyVmlzaWJsZX1cclxuICAgICAgICAgICAgICBvbkNsb3NlPXtzaWRlYmFyQ2xvc2VIYW5kbGVyfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlNob3BwaW5nIGJ5IGNhdGVnb3J5PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiY2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c2lkZWJhckNsb3NlSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2FuY2VsSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPERpdmlkZXIgbGlnaHQgLz5cclxuICAgICAgICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IChcclxuICAgICAgICAgICAgICAgICAgPE5leHRMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtjYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgICAgICBocmVmPXtgL3NlYXJjaD9jYXRlZ29yeT0ke2NhdGVnb3J5fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgcGFzc0hyZWZcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJhXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3NpZGViYXJDbG9zZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtjYXRlZ29yeX0+PC9MaXN0SXRlbVRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgPC9OZXh0TGluaz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnNlYXJjaFNlY3Rpb259PlxyXG4gICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXRIYW5kbGVyfSBjbGFzc05hbWU9e2NsYXNzZXMuc2VhcmNoRm9ybX0+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRCYXNlXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdWVyeVwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZWFyY2hJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggcHJvZHVjdHNcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cXVlcnlDaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaWNvbkJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxTZWFyY2hJY29uIC8+XHJcbiAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8U3dpdGNoXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXtkYXJrTW9kZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtkYXJrTW9kZUNoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgPjwvU3dpdGNoPlxyXG4gICAgICAgICAgICAgIDxOZXh0TGluayBocmVmPVwiL2NhcnRcIiBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgIDxMaW5rPlxyXG4gICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwic3BhblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjYXJ0LmNhcnRJdGVtcy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPEJhZGdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFkZ2VDb250ZW50PXtjYXJ0LmNhcnRJdGVtcy5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENhcnRcclxuICAgICAgICAgICAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICdDYXJ0J1xyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L05leHRMaW5rPlxyXG4gICAgICAgICAgICAgIHt1c2VySW5mbyA/IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwic2ltcGxlLW1lbnVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtsb2dpbkNsaWNrSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubmF2YmFyQnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3VzZXJJbmZvLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8TWVudVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwic2ltcGxlLW1lbnVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cclxuICAgICAgICAgICAgICAgICAgICBrZWVwTW91bnRlZFxyXG4gICAgICAgICAgICAgICAgICAgIG9wZW49e0Jvb2xlYW4oYW5jaG9yRWwpfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2xvZ2luTWVudUNsb3NlSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGxvZ2luTWVudUNsb3NlSGFuZGxlcihlLCBcIi9wcm9maWxlXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIFByb2ZpbGVcclxuICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luTWVudUNsb3NlSGFuZGxlcihlLCBcIi9vcmRlci1oaXN0b3J5XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgT3JkZXIgSGlzdG9yeVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAge3VzZXJJbmZvLmlzQWRtaW4gJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luTWVudUNsb3NlSGFuZGxlcihlLCAnL2FkbWluL2Rhc2hib2FyZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQWRtaW4gRGFzaGJvYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2xvZ291dENsaWNrSGFuZGxlcn0+TG9nb3V0PC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxOZXh0TGluayBocmVmPVwiL2xvZ2luXCIgcGFzc0hyZWY+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cInNwYW5cIj5Mb2dpbjwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9OZXh0TGluaz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICA8L0FwcEJhcj5cclxuICAgICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYWlufT57Y2hpbGRyZW59PC9Db250YWluZXI+XHJcbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9e2NsYXNzZXMuZm9vdGVyfT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5PkFsbCByaWdodHMgcmVzZXJ2ZWQuIFNoYW50eS48L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9yb3V0ZXIgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyXCIpO1xudmFyIF9yb3V0ZXIxID0gcmVxdWlyZShcIi4vcm91dGVyXCIpO1xudmFyIF91c2VJbnRlcnNlY3Rpb24gPSByZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3QgcHJlZmV0Y2hlZCA9IHtcbn07XG5mdW5jdGlvbiBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICFyb3V0ZXIpIHJldHVybjtcbiAgICBpZiAoISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSByZXR1cm47XG4gICAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAgIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpPT57XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBjdXJMb2NhbGUgPSBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xuICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWU7XG59XG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQpIHtcbiAgICBjb25zdCB7IHRhcmdldCAgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgcmV0dXJuIHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicgfHwgZXZlbnQubWV0YUtleSB8fCBldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5IHx8IGV2ZW50LmFsdEtleSB8fCBldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMjtcbn1cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKSB7XG4gICAgY29uc3QgeyBub2RlTmFtZSAgfSA9IGUuY3VycmVudFRhcmdldDtcbiAgICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAgICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICAgIGlmIChzY3JvbGwgPT0gbnVsbCAmJiBhcy5pbmRleE9mKCcjJykgPj0gMCkge1xuICAgICAgICBzY3JvbGwgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gICAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgICAgIHNoYWxsb3csXG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgc2Nyb2xsXG4gICAgfSk7XG59XG5mdW5jdGlvbiBMaW5rKHByb3BzKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3MpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgKyAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCIgOiAnJykpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZCA9IHtcbiAgICAgICAgICAgIGhyZWY6IHRydWVcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wcyA9IE9iamVjdC5rZXlzKHJlcXVpcmVkUHJvcHNHdWFyZCk7XG4gICAgICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gPT0gbnVsbCB8fCB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgICAgICAgICAgY29uc3QgXyA9IGtleTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZCA9IHtcbiAgICAgICAgICAgIGFzOiB0cnVlLFxuICAgICAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgICAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICAgICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgICAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgICAgICAgICAgbG9jYWxlOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG9wdGlvbmFsUHJvcHMgPSBPYmplY3Qua2V5cyhvcHRpb25hbFByb3BzR3VhcmQpO1xuICAgICAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgICAgIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgcHJvcHNba2V5XTtcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdsb2NhbGUnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAncmVwbGFjZScgfHwga2V5ID09PSAnc2Nyb2xsJyB8fCBrZXkgPT09ICdzaGFsbG93JyB8fCBrZXkgPT09ICdwYXNzSHJlZicgfHwga2V5ID09PSAncHJlZmV0Y2gnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICAgICAgICAgIGNvbnN0IF8gPSBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICAgICAgY29uc3QgaGFzV2FybmVkID0gX3JlYWN0LmRlZmF1bHQudXNlUmVmKGZhbHNlKTtcbiAgICAgICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2U7XG4gICAgY29uc3Qgcm91dGVyID0gKDAsIF9yb3V0ZXIxKS51c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB7IGhyZWYgLCBhcyAgfSA9IF9yZWFjdC5kZWZhdWx0LnVzZU1lbW8oKCk9PntcbiAgICAgICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSAoMCwgX3JvdXRlcikucmVzb2x2ZUhyZWYocm91dGVyLCBwcm9wcy5ocmVmLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgICAgICAgIGFzOiBwcm9wcy5hcyA/ICgwLCBfcm91dGVyKS5yZXNvbHZlSHJlZihyb3V0ZXIsIHByb3BzLmFzKSA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmXG4gICAgICAgIH07XG4gICAgfSwgW1xuICAgICAgICByb3V0ZXIsXG4gICAgICAgIHByb3BzLmhyZWYsXG4gICAgICAgIHByb3BzLmFzXG4gICAgXSk7XG4gICAgbGV0IHsgY2hpbGRyZW4gLCByZXBsYWNlICwgc2hhbGxvdyAsIHNjcm9sbCAsIGxvY2FsZSAgfSA9IHByb3BzO1xuICAgIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNoaWxkcmVuID0gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLCBudWxsLCBjaGlsZHJlbik7XG4gICAgfVxuICAgIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICAgIGxldCBjaGlsZDtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNoaWxkID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNdWx0aXBsZSBjaGlsZHJlbiB3ZXJlIHBhc3NlZCB0byA8TGluaz4gd2l0aCBcXGBocmVmXFxgIG9mIFxcYCR7cHJvcHMuaHJlZn1cXGAgYnV0IG9ubHkgb25lIGNoaWxkIGlzIHN1cHBvcnRlZCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9saW5rLW11bHRpcGxlLWNoaWxkcmVuYCArICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIiA6ICcnKSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZCA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgIH1cbiAgICBjb25zdCBjaGlsZFJlZiA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmO1xuICAgIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSAoMCwgX3VzZUludGVyc2VjdGlvbikudXNlSW50ZXJzZWN0aW9uKHtcbiAgICAgICAgcm9vdE1hcmdpbjogJzIwMHB4J1xuICAgIH0pO1xuICAgIGNvbnN0IHNldFJlZiA9IF9yZWFjdC5kZWZhdWx0LnVzZUNhbGxiYWNrKChlbCk9PntcbiAgICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKTtcbiAgICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbCk7XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBjaGlsZFJlZixcbiAgICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmXG4gICAgXSk7XG4gICAgX3JlYWN0LmRlZmF1bHQudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGNvbnN0IHNob3VsZFByZWZldGNoID0gaXNWaXNpYmxlICYmIHAgJiYgKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZik7XG4gICAgICAgIGNvbnN0IGN1ckxvY2FsZSA9IHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XG4gICAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV07XG4gICAgICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgICAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBhcyxcbiAgICAgICAgaHJlZixcbiAgICAgICAgaXNWaXNpYmxlLFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIHAsXG4gICAgICAgIHJvdXRlclxuICAgIF0pO1xuICAgIGNvbnN0IGNoaWxkUHJvcHMgPSB7XG4gICAgICAgIHJlZjogc2V0UmVmLFxuICAgICAgICBvbkNsaWNrOiAoZSk9PntcbiAgICAgICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZSk9PntcbiAgICAgICAgaWYgKCEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuO1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO1xuICAgICAgICB9XG4gICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgICAgIHByaW9yaXR5OiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gICAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gICAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpIHtcbiAgICAgICAgY29uc3QgY3VyTG9jYWxlID0gdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAgICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbiAgICAgICAgLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbiAgICAgICAgY29uc3QgbG9jYWxlRG9tYWluID0gcm91dGVyICYmIHJvdXRlci5pc0xvY2FsZURvbWFpbiAmJiAoMCwgX3JvdXRlcikuZ2V0RG9tYWluTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlcywgcm91dGVyICYmIHJvdXRlci5kb21haW5Mb2NhbGVzKTtcbiAgICAgICAgY2hpbGRQcm9wcy5ocmVmID0gbG9jYWxlRG9tYWluIHx8ICgwLCBfcm91dGVyKS5hZGRCYXNlUGF0aCgoMCwgX3JvdXRlcikuYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpO1xuICAgIH1cbiAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpKTtcbn1cbnZhciBfZGVmYXVsdCA9IExpbms7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtcbmV4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSB2b2lkIDA7XG5mdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKSB7XG4gICAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGg7XG59XG5jb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSCA/IChwYXRoKT0+e1xuICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aCk7XG4gICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLyc7XG4gICAgfVxufSA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO1xuZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSBleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IHZvaWQgMDtcbmNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oY2IpIHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBjYih7XG4gICAgICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgMSk7XG59O1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaztcbmNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjayAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oaWQpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTtcbn07XG5leHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IGNhbmNlbElkbGVDYWxsYmFjaztcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5tYXJrQXNzZXRFcnJvciA9IG1hcmtBc3NldEVycm9yO1xuZXhwb3J0cy5pc0Fzc2V0RXJyb3IgPSBpc0Fzc2V0RXJyb3I7XG5leHBvcnRzLmdldENsaWVudEJ1aWxkTWFuaWZlc3QgPSBnZXRDbGllbnRCdWlsZE1hbmlmZXN0O1xuZXhwb3J0cy5jcmVhdGVSb3V0ZUxvYWRlciA9IGNyZWF0ZVJvdXRlTG9hZGVyO1xudmFyIF9nZXRBc3NldFBhdGhGcm9tUm91dGUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlXCIpKTtcbnZhciBfcmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDA7XG5mdW5jdGlvbiB3aXRoRnV0dXJlKGtleSwgbWFwLCBnZW5lcmF0b3IpIHtcbiAgICBsZXQgZW50cnkgPSBtYXAuZ2V0KGtleSk7XG4gICAgaWYgKGVudHJ5KSB7XG4gICAgICAgIGlmICgnZnV0dXJlJyBpbiBlbnRyeSkge1xuICAgICAgICAgICAgcmV0dXJuIGVudHJ5LmZ1dHVyZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KTtcbiAgICB9XG4gICAgbGV0IHJlc29sdmVyO1xuICAgIGNvbnN0IHByb20gPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgcmVzb2x2ZXIgPSByZXNvbHZlO1xuICAgIH0pO1xuICAgIG1hcC5zZXQoa2V5LCBlbnRyeSA9IHtcbiAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZXIsXG4gICAgICAgIGZ1dHVyZTogcHJvbVxuICAgIH0pO1xuICAgIHJldHVybiBnZW5lcmF0b3IgPyBnZW5lcmF0b3IoKS50aGVuKCh2YWx1ZSk9PihyZXNvbHZlcih2YWx1ZSksIHZhbHVlKVxuICAgICkgOiBwcm9tO1xufVxuZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluaykge1xuICAgIHRyeSB7XG4gICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIHJldHVybigvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICAgKCEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlKSB8fCBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJykpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmNvbnN0IGNhblByZWZldGNoID0gaGFzUHJlZmV0Y2goKTtcbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKGhyZWYsIGFzLCBsaW5rKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaik9PntcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgICAgICAgIHJldHVybiByZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuICAgICAgICBpZiAoYXMpIGxpbmsuYXMgPSBhcztcbiAgICAgICAgbGluay5yZWwgPSBgcHJlZmV0Y2hgO1xuICAgICAgICBsaW5rLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtcbiAgICAgICAgbGluay5vbmxvYWQgPSByZXM7XG4gICAgICAgIGxpbmsub25lcnJvciA9IHJlajtcbiAgICAgICAgLy8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbiAgICAgICAgbGluay5ocmVmID0gaHJlZjtcbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICB9KTtcbn1cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKTtcbmZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycikge1xuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyKSB7XG4gICAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVycjtcbn1cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChzcmMsIHNjcmlwdCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAgICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgICAgICAvLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmU7XG4gICAgICAgIHNjcmlwdC5vbmVycm9yID0gKCk9PnJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKVxuICAgICAgICA7XG4gICAgICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgICAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICAgICAgc2NyaXB0LmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtcbiAgICAgICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAgICAgLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG4gICAgICAgIHNjcmlwdC5zcmMgPSBzcmM7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9KTtcbn1cbi8vIFdlIHdhaXQgZm9yIHBhZ2VzIHRvIGJlIGJ1aWx0IGluIGRldiBiZWZvcmUgd2Ugc3RhcnQgdGhlIHJvdXRlIHRyYW5zaXRpb25cbi8vIHRpbWVvdXQgdG8gcHJldmVudCBhbiB1bi1uZWNlc3NhcnkgaGFyZCBuYXZpZ2F0aW9uIGluIGRldmVsb3BtZW50LlxubGV0IGRldkJ1aWxkUHJvbWlzZTtcbi8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHAsIG1zLCBlcnIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCk9PntcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBwLnRoZW4oKHIpPT57XG4gICAgICAgICAgICAvLyBSZXNvbHZlZCwgY2FuY2VsIHRoZSB0aW1lb3V0XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzb2x2ZShyKTtcbiAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgLy8gV2Ugd3JhcCB0aGVzZSBjaGVja3Mgc2VwYXJhdGVseSBmb3IgYmV0dGVyIGRlYWQtY29kZSBlbGltaW5hdGlvbiBpblxuICAgICAgICAvLyBwcm9kdWN0aW9uIGJ1bmRsZXMuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgKGRldkJ1aWxkUHJvbWlzZSB8fCBQcm9taXNlLnJlc29sdmUoKSkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgbXMpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmICghY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIG1zKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpIHtcbiAgICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtcbiAgICB9XG4gICAgY29uc3Qgb25CdWlsZE1hbmlmZXN0ID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcbiAgICAgICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I7XG4gICAgICAgIHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQiA9ICgpPT57XG4gICAgICAgICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7XG4gICAgICAgICAgICBjYiAmJiBjYigpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KG9uQnVpbGRNYW5pZmVzdCwgTVNfTUFYX0lETEVfREVMQVksIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpKTtcbn1cbmZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgICAgICAgc2NyaXB0czogW1xuICAgICAgICAgICAgICAgIGFzc2V0UHJlZml4ICsgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArIGVuY29kZVVSSSgoMCwgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSkuZGVmYXVsdChyb3V0ZSwgJy5qcycpKSwgXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuICAgICAgICAgICAgY3NzOiBbXVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCk9PntcbiAgICAgICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcCgoZW50cnkpPT5hc3NldFByZWZpeCArICcvX25leHQvJyArIGVuY29kZVVSSShlbnRyeSlcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNjcmlwdHM6IGFsbEZpbGVzLmZpbHRlcigodik9PnYuZW5kc1dpdGgoJy5qcycpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgY3NzOiBhbGxGaWxlcy5maWx0ZXIoKHYpPT52LmVuZHNXaXRoKCcuY3NzJylcbiAgICAgICAgICAgIClcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4KSB7XG4gICAgY29uc3QgZW50cnlwb2ludHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3QgbG9hZGVkU2NyaXB0cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBzdHlsZVNoZWV0cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCByb3V0ZXMgPSBuZXcgTWFwKCk7XG4gICAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYykge1xuICAgICAgICBsZXQgcHJvbSA9IGxvYWRlZFNjcmlwdHMuZ2V0KHNyYyk7XG4gICAgICAgIGlmIChwcm9tKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbTtcbiAgICAgICAgfVxuICAgICAgICAvLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG4gICAgICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCBwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpO1xuICAgICAgICByZXR1cm4gcHJvbTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWYpIHtcbiAgICAgICAgbGV0IHByb20gPSBzdHlsZVNoZWV0cy5nZXQoaHJlZik7XG4gICAgICAgIGlmIChwcm9tKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbTtcbiAgICAgICAgfVxuICAgICAgICBzdHlsZVNoZWV0cy5zZXQoaHJlZiwgcHJvbSA9IGZldGNoKGhyZWYpLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KT0+KHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogaHJlZixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogdGV4dFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKTtcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gcHJvbTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2hlbkVudHJ5cG9pbnQgKHJvdXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpO1xuICAgICAgICB9LFxuICAgICAgICBvbkVudHJ5cG9pbnQgKHJvdXRlLCBleGVjdXRlKSB7XG4gICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSkudGhlbigoZm4pPT5mbigpXG4gICAgICAgICAgICApLnRoZW4oKGV4cG9ydHMpPT4oe1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0IHx8IGV4cG9ydHMsXG4gICAgICAgICAgICAgICAgICAgIGV4cG9ydHM6IGV4cG9ydHNcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgLCAoZXJyKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVyclxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApLnRoZW4oKGlucHV0KT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSk7XG4gICAgICAgICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dCk7XG4gICAgICAgICAgICAgICAgaWYgKG9sZCAmJiAncmVzb2x2ZScgaW4gb2xkKSBvbGQucmVzb2x2ZShpbnB1dCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbG9hZFJvdXRlIChyb3V0ZSwgcHJlZmV0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCByb3V0ZXMsICgpPT57XG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVGaWxlc1Byb21pc2UgPSBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkudGhlbigoeyBzY3JpcHRzICwgY3NzICB9KT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKSA/IFtdIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLCBcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgfSkudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbigoZW50cnlwb2ludCk9Pih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlwb2ludCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHJlc1sxXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZGV2QnVpbGRQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocm91dGVGaWxlc1Byb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVGaWxlc1Byb21pc2UuZmluYWxseSgoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChyb3V0ZUZpbGVzUHJvbWlzZSwgTVNfTUFYX0lETEVfREVMQVksIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApKSkudGhlbigoeyBlbnRyeXBvaW50ICwgc3R5bGVzICB9KT0+e1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlczogc3R5bGVzXG4gICAgICAgICAgICAgICAgICAgIH0sIGVudHJ5cG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlcztcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJlZmV0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIGRvbid0IHdhbnQgdG8gY2FjaGUgZXJyb3JzIGR1cmluZyBwcmVmZXRjaFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJlZmV0Y2ggKHJvdXRlKSB7XG4gICAgICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAgICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICAgICAgICBsZXQgY247XG4gICAgICAgICAgICBpZiAoY24gPSBuYXZpZ2F0b3IuY29ubmVjdGlvbikge1xuICAgICAgICAgICAgICAgIC8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxuICAgICAgICAgICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkudGhlbigob3V0cHV0KT0+UHJvbWlzZS5hbGwoY2FuUHJlZmV0Y2ggPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCk9PnByZWZldGNoVmlhRG9tKHNjcmlwdCwgJ3NjcmlwdCcpXG4gICAgICAgICAgICAgICAgKSA6IFtdKVxuICAgICAgICAgICAgKS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT50aGlzLmxvYWRSb3V0ZShyb3V0ZSwgdHJ1ZSkuY2F0Y2goKCk9PntcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSkuY2F0Y2goLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAgICgpPT57XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLWxvYWRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlJvdXRlclwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3JvdXRlci5kZWZhdWx0O1xuICAgIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwid2l0aFJvdXRlclwiLCB7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3dpdGhSb3V0ZXIuZGVmYXVsdDtcbiAgICB9XG59KTtcbmV4cG9ydHMudXNlUm91dGVyID0gdXNlUm91dGVyO1xuZXhwb3J0cy5jcmVhdGVSb3V0ZXIgPSBjcmVhdGVSb3V0ZXI7XG5leHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSA9IG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX3JvdXRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3JvdXRlclwiKSk7XG52YXIgX3JvdXRlckNvbnRleHQgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dFwiKTtcbnZhciBfd2l0aFJvdXRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuY29uc3Qgc2luZ2xldG9uUm91dGVyID0ge1xuICAgIHJvdXRlcjogbnVsbCxcbiAgICByZWFkeUNhbGxiYWNrczogW10sXG4gICAgcmVhZHkgKGNiKSB7XG4gICAgICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKCk7XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgICAncGF0aG5hbWUnLFxuICAgICdyb3V0ZScsXG4gICAgJ3F1ZXJ5JyxcbiAgICAnYXNQYXRoJyxcbiAgICAnY29tcG9uZW50cycsXG4gICAgJ2lzRmFsbGJhY2snLFxuICAgICdiYXNlUGF0aCcsXG4gICAgJ2xvY2FsZScsXG4gICAgJ2xvY2FsZXMnLFxuICAgICdkZWZhdWx0TG9jYWxlJyxcbiAgICAnaXNSZWFkeScsXG4gICAgJ2lzUHJldmlldycsXG4gICAgJ2lzTG9jYWxlRG9tYWluJyxcbiAgICAnZG9tYWluTG9jYWxlcycsIFxuXTtcbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAgICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIFxuXTtcbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICAgJ3B1c2gnLFxuICAgICdyZXBsYWNlJyxcbiAgICAncmVsb2FkJyxcbiAgICAnYmFjaycsXG4gICAgJ3ByZWZldGNoJyxcbiAgICAnYmVmb3JlUG9wU3RhdGUnLCBcbl07XG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICAgIGdldCAoKSB7XG4gICAgICAgIHJldHVybiBfcm91dGVyLmRlZmF1bHQuZXZlbnRzO1xuICAgIH1cbn0pO1xudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpPT57XG4gICAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVyblxuICAgIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAgIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAgIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICAgICAgZ2V0ICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpO1xuICAgICAgICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF07XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICBzaW5nbGV0b25Sb3V0ZXJbZmllbGRdID0gKC4uLmFyZ3MpPT57XG4gICAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpO1xuICAgICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKTtcbiAgICB9O1xufSk7XG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpPT57XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpPT57XG4gICAgICAgIF9yb3V0ZXIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKT0+e1xuICAgICAgICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoMSl9YDtcbiAgICAgICAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXI7XG4gICAgICAgICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuZnVuY3Rpb24gZ2V0Um91dGVyKCkge1xuICAgIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICsgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIG9uIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO1xufVxudmFyIF9kZWZhdWx0ID0gc2luZ2xldG9uUm91dGVyO1xuZXhwb3J0cy5kZWZhdWx0ID0gX2RlZmF1bHQ7XG5mdW5jdGlvbiB1c2VSb3V0ZXIoKSB7XG4gICAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7XG59XG5mdW5jdGlvbiBjcmVhdGVSb3V0ZXIoLi4uYXJncykge1xuICAgIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgX3JvdXRlci5kZWZhdWx0KC4uLmFyZ3MpO1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYik9PmNiKClcbiAgICApO1xuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdO1xuICAgIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO1xufVxuZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcikge1xuICAgIGNvbnN0IF9yb3V0ZXIxID0gcm91dGVyO1xuICAgIGNvbnN0IGluc3RhbmNlID0ge1xuICAgIH07XG4gICAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcyl7XG4gICAgICAgIGlmICh0eXBlb2YgX3JvdXRlcjFbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihBcnJheS5pc0FycmF5KF9yb3V0ZXIxW3Byb3BlcnR5XSkgPyBbXSA6IHtcbiAgICAgICAgICAgIH0sIF9yb3V0ZXIxW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXIxW3Byb3BlcnR5XTtcbiAgICB9XG4gICAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICAgIGluc3RhbmNlLmV2ZW50cyA9IF9yb3V0ZXIuZGVmYXVsdC5ldmVudHM7XG4gICAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICAgICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3MpPT57XG4gICAgICAgICAgICByZXR1cm4gX3JvdXRlcjFbZmllbGRdKC4uLmFyZ3MpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy51c2VJbnRlcnNlY3Rpb24gPSB1c2VJbnRlcnNlY3Rpb247XG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO1xuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnO1xuZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uKHsgcm9vdE1hcmdpbiAsIGRpc2FibGVkICB9KSB7XG4gICAgY29uc3QgaXNEaXNhYmxlZCA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcjtcbiAgICBjb25zdCB1bm9ic2VydmUgPSAoMCwgX3JlYWN0KS51c2VSZWYoKTtcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSAoMCwgX3JlYWN0KS51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgc2V0UmVmID0gKDAsIF9yZWFjdCkudXNlQ2FsbGJhY2soKGVsKT0+e1xuICAgICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KCk7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm47XG4gICAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoZWwsIChpc1Zpc2libGUpPT5pc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpXG4gICAgICAgICAgICAsIHtcbiAgICAgICAgICAgICAgICByb290TWFyZ2luXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgaXNEaXNhYmxlZCxcbiAgICAgICAgcm9vdE1hcmdpbixcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgICgwLCBfcmVhY3QpLnVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFZpc2libGUodHJ1ZSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJldHVybiAoKT0+KDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5jYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgIHJldHVybiBbXG4gICAgICAgIHNldFJlZixcbiAgICAgICAgdmlzaWJsZVxuICAgIF07XG59XG5mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgY29uc3QgeyBpZCAsIG9ic2VydmVyICwgZWxlbWVudHMgIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKTtcbiAgICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spO1xuICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpIHtcbiAgICAgICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7XG4gICAgICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICAgICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpIHtcbiAgICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJztcbiAgICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKTtcbiAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cbiAgICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcyk9PntcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSk9PntcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDA7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgb3B0aW9ucyk7XG4gICAgb2JzZXJ2ZXJzLnNldChpZCwgaW5zdGFuY2UgPSB7XG4gICAgICAgIGlkLFxuICAgICAgICBvYnNlcnZlcixcbiAgICAgICAgZWxlbWVudHNcbiAgICB9KTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1pbnRlcnNlY3Rpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB3aXRoUm91dGVyO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gcmVxdWlyZShcIi4vcm91dGVyXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCkge1xuICAgIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzKSB7XG4gICAgICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgcm91dGVyOiAoMCwgX3JvdXRlcikudXNlUm91dGVyKClcbiAgICAgICAgfSwgcHJvcHMpKSk7XG4gICAgfVxuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcbiAgICBXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQub3JpZ0dldEluaXRpYWxQcm9wcztcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBuYW1lID0gQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bic7XG4gICAgICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgO1xuICAgIH1cbiAgICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdpdGgtcm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXREb21haW5Mb2NhbGUgPSBnZXREb21haW5Mb2NhbGU7XG5leHBvcnRzLmFkZExvY2FsZSA9IGFkZExvY2FsZTtcbmV4cG9ydHMuZGVsTG9jYWxlID0gZGVsTG9jYWxlO1xuZXhwb3J0cy5oYXNCYXNlUGF0aCA9IGhhc0Jhc2VQYXRoO1xuZXhwb3J0cy5hZGRCYXNlUGF0aCA9IGFkZEJhc2VQYXRoO1xuZXhwb3J0cy5kZWxCYXNlUGF0aCA9IGRlbEJhc2VQYXRoO1xuZXhwb3J0cy5pc0xvY2FsVVJMID0gaXNMb2NhbFVSTDtcbmV4cG9ydHMuaW50ZXJwb2xhdGVBcyA9IGludGVycG9sYXRlQXM7XG5leHBvcnRzLnJlc29sdmVIcmVmID0gcmVzb2x2ZUhyZWY7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG52YXIgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2ggPSByZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaFwiKTtcbnZhciBfcm91dGVMb2FkZXIgPSByZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlclwiKTtcbnZhciBfZGVub3JtYWxpemVQYWdlUGF0aCA9IHJlcXVpcmUoXCIuLi8uLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoXCIpO1xudmFyIF9ub3JtYWxpemVMb2NhbGVQYXRoID0gcmVxdWlyZShcIi4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoXCIpO1xudmFyIF9taXR0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7XG52YXIgX3V0aWxzID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xudmFyIF9pc0R5bmFtaWMgPSByZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO1xudmFyIF9wYXJzZVJlbGF0aXZlVXJsID0gcmVxdWlyZShcIi4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsXCIpO1xudmFyIF9xdWVyeXN0cmluZyA9IHJlcXVpcmUoXCIuL3V0aWxzL3F1ZXJ5c3RyaW5nXCIpO1xudmFyIF9yZXNvbHZlUmV3cml0ZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXNcIikpO1xudmFyIF9yb3V0ZU1hdGNoZXIgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO1xudmFyIF9yb3V0ZVJlZ2V4ID0gcmVxdWlyZShcIi4vdXRpbHMvcm91dGUtcmVnZXhcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5sZXQgZGV0ZWN0RG9tYWluTG9jYWxlO1xuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlO1xufVxuY29uc3QgYmFzZVBhdGggPSBwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIHx8ICcnO1xuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgICAgIGNhbmNlbGxlZDogdHJ1ZVxuICAgIH0pO1xufVxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoLCBwcmVmaXgpIHtcbiAgICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpID8gcGF0aCA9PT0gJy8nID8gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpIDogYCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpID09PSAnLycgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGh9YCA6IHBhdGg7XG59XG5mdW5jdGlvbiBnZXREb21haW5Mb2NhbGUocGF0aCwgbG9jYWxlLCBsb2NhbGVzLCBkb21haW5Mb2NhbGVzKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgbG9jYWxlID0gbG9jYWxlIHx8ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXRoLCBsb2NhbGVzKS5kZXRlY3RlZExvY2FsZTtcbiAgICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgdW5kZWZpbmVkLCBsb2NhbGUpO1xuICAgICAgICBpZiAoZGV0ZWN0ZWREb21haW4pIHtcbiAgICAgICAgICAgIHJldHVybiBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YmFzZVBhdGggfHwgJyd9JHtsb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHtsb2NhbGV9YH0ke3BhdGh9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFkZExvY2FsZShwYXRoLCBsb2NhbGUsIGRlZmF1bHRMb2NhbGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBjb25zdCBwYXRobmFtZSA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcbiAgICAgICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgJiYgcGF0aExvd2VyICE9PSAnLycgKyBsb2NhbGVMb3dlciA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKSA6IHBhdGg7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGgsIGxvY2FsZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgICAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIGxvY2FsZSAmJiAocGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlTG93ZXIgKyAnLycpIHx8IHBhdGhMb3dlciA9PT0gJy8nICsgbG9jYWxlTG93ZXIpID8gKHBhdGhuYW1lLmxlbmd0aCA9PT0gbG9jYWxlLmxlbmd0aCArIDEgPyAnLycgOiAnJykgKyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgOiBwYXRoO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIHBhdGhOb1F1ZXJ5SGFzaChwYXRoKSB7XG4gICAgY29uc3QgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpO1xuICAgIGNvbnN0IGhhc2hJbmRleCA9IHBhdGguaW5kZXhPZignIycpO1xuICAgIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGgpIHtcbiAgICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpO1xufVxuZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCkge1xuICAgIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gICAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpO1xufVxuZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCkge1xuICAgIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCk7XG4gICAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWA7XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBpc0xvY2FsVVJMKHVybCkge1xuICAgIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSB8fCB1cmwuc3RhcnRzV2l0aCgnIycpIHx8IHVybC5zdGFydHNXaXRoKCc/JykpIHJldHVybiB0cnVlO1xuICAgIHRyeSB7XG4gICAgICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgICAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKTtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KSB7XG4gICAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJyc7XG4gICAgY29uc3QgZHluYW1pY1JlZ2V4ID0gKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcbiAgICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3VwcztcbiAgICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9IC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyAoMCwgX3JvdXRlTWF0Y2hlcikuZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHwgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5O1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gcm91dGU7XG4gICAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3Vwcyk7XG4gICAgaWYgKCFwYXJhbXMuZXZlcnkoKHBhcmFtKT0+e1xuICAgICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJyc7XG4gICAgICAgIGNvbnN0IHsgcmVwZWF0ICwgb3B0aW9uYWwgIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXTtcbiAgICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYDtcbiAgICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFtcbiAgICAgICAgICAgIHZhbHVlXG4gICAgICAgIF07XG4gICAgICAgIHJldHVybiAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPSBpbnRlcnBvbGF0ZWRSb3V0ZS5yZXBsYWNlKHJlcGxhY2VkLCByZXBlYXQgPyB2YWx1ZS5tYXAoLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuICAgICAgICAvLyBwYXRoIGRlbGltaXRlciBlc2NhcGVkIHNpbmNlIHRoZXkgYXJlIGJlaW5nIGluc2VydGVkXG4gICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXG4gICAgICAgIC8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuICAgICAgICAoc2VnbWVudCk9PmVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxuICAgICAgICApLmpvaW4oJy8nKSA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpIHx8ICcvJyk7XG4gICAgfSkpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuICAgICAgICA7XG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBwYXJhbXMsXG4gICAgICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGVcbiAgICB9O1xufVxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpIHtcbiAgICBjb25zdCBmaWx0ZXJlZFF1ZXJ5ID0ge1xuICAgIH07XG4gICAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmaWx0ZXJlZFF1ZXJ5O1xufVxuZnVuY3Rpb24gcmVzb2x2ZUhyZWYocm91dGVyLCBocmVmLCByZXNvbHZlQXMpIHtcbiAgICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICAgIGxldCBiYXNlO1xuICAgIGxldCB1cmxBc1N0cmluZyA9IHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKTtcbiAgICAvLyByZXBlYXRlZCBzbGFzaGVzIGFuZCBiYWNrc2xhc2hlcyBpbiB0aGUgVVJMIGFyZSBjb25zaWRlcmVkXG4gICAgLy8gaW52YWxpZCBhbmQgd2lsbCBuZXZlciBtYXRjaCBhIE5leHQuanMgcGFnZS9maWxlXG4gICAgY29uc3QgdXJsUHJvdG9NYXRjaCA9IHVybEFzU3RyaW5nLm1hdGNoKC9eW2EtekEtWl17MSx9OlxcL1xcLy8pO1xuICAgIGNvbnN0IHVybEFzU3RyaW5nTm9Qcm90byA9IHVybFByb3RvTWF0Y2ggPyB1cmxBc1N0cmluZy5zdWJzdHIodXJsUHJvdG9NYXRjaFswXS5sZW5ndGgpIDogdXJsQXNTdHJpbmc7XG4gICAgY29uc3QgdXJsUGFydHMgPSB1cmxBc1N0cmluZ05vUHJvdG8uc3BsaXQoJz8nKTtcbiAgICBpZiAoKHVybFBhcnRzWzBdIHx8ICcnKS5tYXRjaCgvKFxcL1xcL3xcXFxcKS8pKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gbmV4dC9yb3V0ZXI6ICR7dXJsQXNTdHJpbmd9LCByZXBlYXRlZCBmb3J3YXJkLXNsYXNoZXMgKC8vKSBvciBiYWNrc2xhc2hlcyBcXFxcIGFyZSBub3QgdmFsaWQgaW4gdGhlIGhyZWZgKTtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZFVybCA9ICgwLCBfdXRpbHMpLm5vcm1hbGl6ZVJlcGVhdGVkU2xhc2hlcyh1cmxBc1N0cmluZ05vUHJvdG8pO1xuICAgICAgICB1cmxBc1N0cmluZyA9ICh1cmxQcm90b01hdGNoID8gdXJsUHJvdG9NYXRjaFswXSA6ICcnKSArIG5vcm1hbGl6ZWRVcmw7XG4gICAgfVxuICAgIC8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgdXJsQXNTdHJpbmdcbiAgICAgICAgXSA6IHVybEFzU3RyaW5nO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBiYXNlID0gbmV3IFVSTCh1cmxBc1N0cmluZy5zdGFydHNXaXRoKCcjJykgPyByb3V0ZXIuYXNQYXRoIDogcm91dGVyLnBhdGhuYW1lLCAnaHR0cDovL24nKTtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIC8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXG4gICAgICAgIGJhc2UgPSBuZXcgVVJMKCcvJywgJ2h0dHA6Ly9uJyk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSk7XG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSk7XG4gICAgICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnO1xuICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJiBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiYgcmVzb2x2ZUFzKSB7XG4gICAgICAgICAgICBjb25zdCBxdWVyeSA9ICgwLCBfcXVlcnlzdHJpbmcpLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKTtcbiAgICAgICAgICAgIGNvbnN0IHsgcmVzdWx0ICwgcGFyYW1zICB9ID0gaW50ZXJwb2xhdGVBcyhmaW5hbFVybC5wYXRobmFtZSwgZmluYWxVcmwucGF0aG5hbWUsIHF1ZXJ5KTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW4gPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpIDogZmluYWxVcmwuaHJlZjtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHJlc29sdmVkSHJlZixcbiAgICAgICAgICAgIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZlxuICAgICAgICBdIDogcmVzb2x2ZWRIcmVmO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcbiAgICAgICAgICAgIHVybEFzU3RyaW5nXG4gICAgICAgIF0gOiB1cmxBc1N0cmluZztcbiAgICB9XG59XG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmwpIHtcbiAgICBjb25zdCBvcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybDtcbn1cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXIsIHVybCwgYXMpIHtcbiAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlciwgdXJsLCB0cnVlKTtcbiAgICBjb25zdCBvcmlnaW4gPSAoMCwgX3V0aWxzKS5nZXRMb2NhdGlvbk9yaWdpbigpO1xuICAgIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pO1xuICAgIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKTtcbiAgICByZXNvbHZlZEhyZWYgPSBzdHJpcE9yaWdpbihyZXNvbHZlZEhyZWYpO1xuICAgIHJlc29sdmVkQXMgPSByZXNvbHZlZEFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzO1xuICAgIGNvbnN0IHByZXBhcmVkVXJsID0gaHJlZkhhZE9yaWdpbiA/IHJlc29sdmVkSHJlZiA6IGFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZik7XG4gICAgY29uc3QgcHJlcGFyZWRBcyA9IGFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLCBhcykpIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWY7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICAgICAgYXM6IGFzSGFkT3JpZ2luID8gcHJlcGFyZWRBcyA6IGFkZEJhc2VQYXRoKHByZXBhcmVkQXMpXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUsIHBhZ2VzKSB7XG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goKDAsIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoKS5kZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhdGhuYW1lKSk7XG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhuYW1lO1xuICAgIH1cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lKSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpPT57XG4gICAgICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHBhZ2UpICYmICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUgPSBwYWdlO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpO1xufVxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPSBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnkgJiYgISFmdW5jdGlvbigpIHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgdiA9ICdfX25leHQnO1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlO1xuICAgIH0gY2F0Y2ggKG4pIHtcbiAgICB9XG59KCk7XG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpO1xuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzKSB7XG4gICAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ1xuICAgIH0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubm90Rm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmQ6IFNTR19EQVRBX05PVF9GT1VORFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyKSB7XG4gICAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnIpPT57XG4gICAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgICAvLyBsb29wLlxuICAgICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgICAgICAoMCwgX3JvdXRlTG9hZGVyKS5tYXJrQXNzZXRFcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9KTtcbn1cbmNsYXNzIFJvdXRlciB7XG4gICAgY29uc3RydWN0b3IocGF0aG5hbWUxLCBxdWVyeTEsIGFzMSwgeyBpbml0aWFsUHJvcHMgLCBwYWdlTG9hZGVyICwgQXBwICwgd3JhcEFwcCAsIENvbXBvbmVudDogQ29tcG9uZW50MSAsIGVycjogZXJyMSAsIHN1YnNjcmlwdGlvbiAsIGlzRmFsbGJhY2sgLCBsb2NhbGUgLCBsb2NhbGVzICwgZGVmYXVsdExvY2FsZSAsIGRvbWFpbkxvY2FsZXMgLCBpc1ByZXZpZXcgIH0pe1xuICAgICAgICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICAgICAgICB0aGlzLnNkYyA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcbiAgICAgICAgdGhpcy5zZHIgPSB7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuX2lkeCA9IDA7XG4gICAgICAgIHRoaXMub25Qb3BTdGF0ZSA9IChlKT0+e1xuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlO1xuICAgICAgICAgICAgaWYgKCFzdGF0ZSkge1xuICAgICAgICAgICAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgICAgICAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgICAgICAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAgICAgICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgICAgICAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgICAgICAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgLCBxdWVyeTogcXVlcnkxICB9ID0gdGhpcztcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZTEpLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogcXVlcnkxXG4gICAgICAgICAgICAgICAgfSksICgwLCBfdXRpbHMpLmdldFVSTCgpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBmb3JjZWRTY3JvbGw7XG4gICAgICAgICAgICBjb25zdCB7IHVybCAsIGFzOiBhczEgLCBvcHRpb25zICwgaWR4ICB9ID0gc3RhdGU7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5faWR4ICE9PSBpZHgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogc2VsZi5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogc2VsZi5wYWdlWU9mZnNldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0gSlNPTi5wYXJzZSh2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5faWR4ID0gaWR4O1xuICAgICAgICAgICAgY29uc3QgeyBwYXRobmFtZTogcGF0aG5hbWUxICB9ID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAgICAgICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMxID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZTEgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgICAgICAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgICAgICAgICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzMSwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICB9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgICAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgIH0pLCBmb3JjZWRTY3JvbGwpO1xuICAgICAgICB9O1xuICAgICAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICAgICAgdGhpcy5yb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUxKTtcbiAgICAgICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgICAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgICAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgICAgIGlmIChwYXRobmFtZTEgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICAgICAgICAgIENvbXBvbmVudDogQ29tcG9uZW50MSxcbiAgICAgICAgICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICAgICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgICAgICAgICAgZXJyOiBlcnIxLFxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1BcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgICAgICAgQ29tcG9uZW50OiBBcHAsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogW11cbiAgICAgICAgfTtcbiAgICAgICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAgICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICAgICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzO1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWUxO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnkxO1xuICAgICAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgICAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgICAgICBjb25zdCBhdXRvRXhwb3J0RHluYW1pYyA9ICgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShwYXRobmFtZTEpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0O1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUxIDogYXMxO1xuICAgICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGg7XG4gICAgICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwO1xuICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgICAgIHRoaXMuaXNTc3IgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrO1xuICAgICAgICB0aGlzLmlzUmVhZHkgPSAhIShzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fCBzZWxmLl9fTkVYVF9EQVRBX18uZ2lwIHx8IHNlbGYuX19ORVhUX0RBVEFfXy5hcHBHaXAgJiYgIXNlbGYuX19ORVhUX0RBVEFfXy5nc3AgfHwgIWF1dG9FeHBvcnREeW5hbWljICYmICFzZWxmLmxvY2F0aW9uLnNlYXJjaCAmJiAhcHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyk7XG4gICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFpc1ByZXZpZXc7XG4gICAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSBmYWxzZTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlO1xuICAgICAgICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlcztcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGU7XG4gICAgICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMgPSBkb21haW5Mb2NhbGVzO1xuICAgICAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9ICEhZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHNlbGYubG9jYXRpb24uaG9zdG5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgICAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICAgICAgICBpZiAoYXMxLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAgICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgICAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZiA9IGFzMSAhPT0gcGF0aG5hbWUxO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSksXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeTFcbiAgICAgICAgICAgICAgICB9KSwgKDAsIF91dGlscykuZ2V0VVJMKCksIG9wdGlvbnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAgICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbG9hZCgpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cbiAgICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqLyBiYWNrKCkge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi8gcHVzaCh1cmwsIGFzLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHg6IHNlbGYucGFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBzZWxmLnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoICB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICh7IHVybCAsIGFzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqLyByZXBsYWNlKHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICAoeyB1cmwgLCBhcyAgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgfVxuICAgIGFzeW5jIGNoYW5nZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMsIGZvcmNlZFNjcm9sbCkge1xuICAgICAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2hvdWxkUmVzb2x2ZUhyZWYgPSB1cmwgPT09IGFzIHx8IG9wdGlvbnMuX2ggfHwgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY7XG4gICAgICAgIC8vIGZvciBzdGF0aWMgcGFnZXMgd2l0aCBxdWVyeSBwYXJhbXMgaW4gdGhlIFVSTCB3ZSBkZWxheVxuICAgICAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICAgICAgaWYgKG9wdGlvbnMuX2gpIHtcbiAgICAgICAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJldkxvY2FsZSA9IHRoaXMubG9jYWxlO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UgPyB0aGlzLmRlZmF1bHRMb2NhbGUgOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKTtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZTtcbiAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhcnNlZEFzLnBhdGhuYW1lKTtcbiAgICAgICAgICAgICAgICBhcyA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aCgoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgoaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsIHRoaXMubG9jYWxlcykucGF0aG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRpZE5hdmlnYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVmO1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbiAgICAgICAgICAgICAgICBpZiAoISgocmVmID0gdGhpcy5sb2NhbGVzKSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZi5pbmNsdWRlcyh0aGlzLmxvY2FsZSkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgICAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUodGhpcy5kb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIC8vIGlmIHdlIGFyZSBuYXZpZ2F0aW5nIHRvIGEgZG9tYWluIGxvY2FsZSBlbnN1cmUgd2UgcmVkaXJlY3QgdG8gdGhlXG4gICAgICAgICAgICAgICAgLy8gY29ycmVjdCBkb21haW5cbiAgICAgICAgICAgICAgICBpZiAoIWRpZE5hdmlnYXRlICYmIGRldGVjdGVkRG9tYWluICYmIHRoaXMuaXNMb2NhbGVEb21haW4gJiYgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YWRkQmFzZVBhdGgoYCR7dGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHt0aGlzLmxvY2FsZX1gfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJyl9YDtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcbiAgICAgICAgICAgICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICAgICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKT0+e1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghb3B0aW9ucy5faCkge1xuICAgICAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICAgICAgaWYgKF91dGlscy5TVCkge1xuICAgICAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHNoYWxsb3cgPWZhbHNlICB9ID0gb3B0aW9ucztcbiAgICAgICAgY29uc3Qgcm91dGVQcm9wcyA9IHtcbiAgICAgICAgICAgIHNoYWxsb3dcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgICAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpO1xuICAgICAgICB9XG4gICAgICAgIGFzID0gYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLCBvcHRpb25zLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKSk7XG4gICAgICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcywgdGhpcy5sb2NhbGUpO1xuICAgICAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXM7XG4gICAgICAgIGxldCBsb2NhbGVDaGFuZ2UgPSBwcmV2TG9jYWxlICE9PSB0aGlzLmxvY2FsZTtcbiAgICAgICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuICAgICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzO1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSwgbnVsbCk7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwYXJzZWQgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgbGV0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAsIHF1ZXJ5OiBxdWVyeTEgIH0gPSBwYXJzZWQ7XG4gICAgICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAgICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgICAgIGxldCBwYWdlcywgcmV3cml0ZXM7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO1xuICAgICAgICAgICAgKHsgX19yZXdyaXRlczogcmV3cml0ZXMgIH0gPSBhd2FpdCAoMCwgX3JvdXRlTG9hZGVyKS5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpO1xuICAgICAgICB9IGNhdGNoIChlcnIxKSB7XG4gICAgICAgICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcbiAgICAgICAgICAgIC8vIGRvIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbjpcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJztcbiAgICAgICAgfVxuICAgICAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgICAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgICAgIGxldCByZXNvbHZlZEFzID0gYXM7XG4gICAgICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAgICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgICAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgICAgICBwYXRobmFtZTEgPSBwYXRobmFtZTEgPyAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lMSkpIDogcGF0aG5hbWUxO1xuICAgICAgICBpZiAoc2hvdWxkUmVzb2x2ZUhyZWYgJiYgcGF0aG5hbWUxICE9PSAnL19lcnJvcicpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gKDAsIF9yZXNvbHZlUmV3cml0ZXMpLmRlZmF1bHQoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcywgdGhpcy5sb2NhbGUpKSwgcGFnZXMsIHJld3JpdGVzLCBxdWVyeTEsIChwKT0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcylcbiAgICAgICAgICAgICAgICAsIHRoaXMubG9jYWxlcyk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aDtcbiAgICAgICAgICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAgICAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUxID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXRobmFtZTEpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZTEsIHBhZ2VzKTtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUxID0gcGFyc2VkLnBhdGhuYW1lO1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXRobmFtZTEpO1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUxKTtcbiAgICAgICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgICsgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKTtcbiAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpO1xuICAgICAgICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9ICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChyb3V0ZSk7XG4gICAgICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gKDAsIF9yb3V0ZU1hdGNoZXIpLmdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWU7XG4gICAgICAgICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkxKSA6IHtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKChwYXJhbSk9PiFxdWVyeTFbcGFyYW1dXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7c2hvdWxkSW50ZXJwb2xhdGUgPyBgSW50ZXJwb2xhdGluZyBocmVmYCA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgKyBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oJywgJyl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKHNob3VsZEludGVycG9sYXRlID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYCA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICsgYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtzaG91bGRJbnRlcnBvbGF0ZSA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJyA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcyd9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICAgICAgICAgIGFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICAgICAgfSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTEsIGludGVycG9sYXRlZEFzLnBhcmFtcylcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeTEsIHJvdXRlTWF0Y2gpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciByZWYsIHJlZjE7XG4gICAgICAgICAgICBsZXQgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lMSwgcXVlcnkxLCBhcywgcmVzb2x2ZWRBcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICBsZXQgeyBlcnJvciAsIHByb3BzICwgX19OX1NTRyAsIF9fTl9TU1AgIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgICAgICAgIGlmICgoX19OX1NTRyB8fCBfX05fU1NQKSAmJiBwcm9wcykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5wYWdlUHJvcHMgJiYgcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Q7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgICAgICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAgICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWRIcmVmLnBhdGhuYW1lLCBwYWdlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHVybDogbmV3VXJsICwgYXM6IG5ld0FzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIGRlc3RpbmF0aW9uLCBkZXN0aW5hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBuZXdVcmwsIG5ld0FzLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFwcm9wcy5fX05fUFJFVklFVztcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vdEZvdW5kUm91dGU7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvNDA0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy80MDQnO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy9fZXJyb3InO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKG5vdEZvdW5kUm91dGUsIG5vdEZvdW5kUm91dGUsIHF1ZXJ5MSwgYXMsIHJlc29sdmVkQXMsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYWxsb3c6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXBwQ29tcCA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQ7XG4gICAgICAgICAgICAgICAgd2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZCA9IGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiYgIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuX2ggJiYgcGF0aG5hbWUxID09PSAnL19lcnJvcicgJiYgKChyZWYgPSBzZWxmLl9fTkVYVF9EQVRBX18ucHJvcHMpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogKHJlZjEgPSByZWYucGFnZVByb3BzKSA9PT0gbnVsbCB8fCByZWYxID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYxLnN0YXR1c0NvZGUpID09PSA1MDAgJiYgKHByb3BzID09PSBudWxsIHx8IHByb3BzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwcm9wcy5wYWdlUHJvcHMpKSB7XG4gICAgICAgICAgICAgICAgLy8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4gICAgICAgICAgICAgICAgLy8gd2hlbiB1cGRhdGluZyBxdWVyeSBpbmZvcm1hdGlvblxuICAgICAgICAgICAgICAgIHByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlID0gNTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuICAgICAgICAgICAgY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZSA9IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZTtcbiAgICAgICAgICAgIHZhciBfc2Nyb2xsO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkU2Nyb2xsID0gKF9zY3JvbGwgPSBvcHRpb25zLnNjcm9sbCkgIT09IG51bGwgJiYgX3Njcm9sbCAhPT0gdm9pZCAwID8gX3Njcm9sbCA6ICFpc1ZhbGlkU2hhbGxvd1JvdXRlO1xuICAgICAgICAgICAgY29uc3QgcmVzZXRTY3JvbGwgPSBzaG91bGRTY3JvbGwgPyB7XG4gICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICB9IDogbnVsbDtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZTEsIHF1ZXJ5MSwgY2xlYW5lZEFzLCByb3V0ZUluZm8sIGZvcmNlZFNjcm9sbCAhPT0gbnVsbCAmJiBmb3JjZWRTY3JvbGwgIT09IHZvaWQgMCA/IGZvcmNlZFNjcm9sbCA6IHJlc2V0U2Nyb2xsKS5jYXRjaCgoZSk9PntcbiAgICAgICAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZTtcbiAgICAgICAgICAgICAgICBlbHNlIHRocm93IGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZXJyMSkge1xuICAgICAgICAgICAgaWYgKGVycjEuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZXJyMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCAoMCwgX3V0aWxzKS5nZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgICAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3c7XG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKHtcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgYXMsXG4gICAgICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgICAgICAgICAgaWR4OiB0aGlzLl9pZHggPSBtZXRob2QgIT09ICdwdXNoU3RhdGUnID8gdGhpcy5faWR4IDogdGhpcy5faWR4ICsgMVxuICAgICAgICAgICAgfSwgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgICAgICcnLCBhcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzLCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoMCwgX3JvdXRlTG9hZGVyKS5pc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuICAgICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xuICAgICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgQ29tcG9uZW50MTtcbiAgICAgICAgICAgIGxldCBzdHlsZVNoZWV0cztcbiAgICAgICAgICAgIGxldCBwcm9wcztcbiAgICAgICAgICAgIGlmICh0eXBlb2YgQ29tcG9uZW50MSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHN0eWxlU2hlZXRzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICh7IHBhZ2U6IENvbXBvbmVudDEgLCBzdHlsZVNoZWV0cyAgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSB7XG4gICAgICAgICAgICAgICAgcHJvcHMsXG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiBDb21wb25lbnQxLFxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQxLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpO1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcmVzb2x2ZWRBcywgcm91dGVQcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xuICAgICAgICAgICAgaWYgKHJvdXRlUHJvcHMuc2hhbGxvdyAmJiBleGlzdGluZ1JvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mbztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mbyA/IHVuZGVmaW5lZCA6IGV4aXN0aW5nUm91dGVJbmZvO1xuICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvID8gY2FjaGVkUm91dGVJbmZvIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKT0+KHtcbiAgICAgICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1BcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBDb21wb25lbnQxICwgX19OX1NTRyAsIF9fTl9TU1AgIH0gPSByb3V0ZUluZm87XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlICB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQxKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRhdGFIcmVmO1xuICAgICAgICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICAgICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5XG4gICAgICAgICAgICAgICAgfSksIHJlc29sdmVkQXMsIF9fTl9TU0csIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YSgoKT0+X19OX1NTRyA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpIDogX19OX1NTUCA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50MSwgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlOiB0aGlzLmxvY2FsZSxcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxlczogdGhpcy5sb2NhbGVzLFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TG9jYWxlOiB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xuICAgICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XG4gICAgICAgIH0gY2F0Y2ggKGVycjIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVycjIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgZGF0YSwgcmVzZXRTY3JvbGwpIHtcbiAgICAgICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcbiAgICAgICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lO1xuICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnk7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XG4gICAgICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhLCByZXNldFNjcm9sbCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi8gYmVmb3JlUG9wU3RhdGUoY2IpIHtcbiAgICAgICAgdGhpcy5fYnBzID0gY2I7XG4gICAgfVxuICAgIG9ubHlBSGFzaENoYW5nZShhcykge1xuICAgICAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKTtcbiAgICAgICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpO1xuICAgICAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICAgICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAgICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAgICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICAgICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2g7XG4gICAgfVxuICAgIHNjcm9sbFRvSGFzaChhcykge1xuICAgICAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGlmIChoYXNoID09PSAnJyB8fCBoYXNoID09PSAndG9wJykge1xuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtcbiAgICAgICAgaWYgKGlkRWwpIHtcbiAgICAgICAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdO1xuICAgICAgICBpZiAobmFtZUVsKSB7XG4gICAgICAgICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cmxJc05ldyhhc1BhdGgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGg7XG4gICAgfVxuICAgIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovIGFzeW5jIHByZWZldGNoKHVybCwgYXNQYXRoID0gdXJsLCBvcHRpb25zID0ge1xuICAgIH0pIHtcbiAgICAgICAgbGV0IHBhcnNlZCA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICBsZXQgeyBwYXRobmFtZTogcGF0aG5hbWUyICB9ID0gcGFyc2VkO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXRobmFtZTIsIHRoaXMubG9jYWxlcykucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgbGV0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGFzUGF0aCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZTtcbiAgICAgICAgICAgICAgICBhc1BhdGggPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtcbiAgICAgICAgbGV0IHJlc29sdmVkQXMgPSBhc1BhdGg7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzUGF0aC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGxldCByZXdyaXRlcztcbiAgICAgICAgICAgICh7IF9fcmV3cml0ZXM6IHJld3JpdGVzICB9ID0gYXdhaXQgKDAsIF9yb3V0ZUxvYWRlcikuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKTtcbiAgICAgICAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gKDAsIF9yZXNvbHZlUmV3cml0ZXMpLmRlZmF1bHQoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzUGF0aCwgdGhpcy5sb2NhbGUpKSwgcGFnZXMsIHJld3JpdGVzLCBwYXJzZWQucXVlcnksIChwKT0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLCBwYWdlcylcbiAgICAgICAgICAgICwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmV3cml0ZXNSZXN1bHQuYXNQYXRoKSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkLnBhdGhuYW1lLCBwYWdlcyk7XG4gICAgICAgICAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZTIpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSBwYXJzZWQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xuICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgcm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMik7XG4gICAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHJvdXRlKS50aGVuKChpc1NzZyk9PntcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNTc2cgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZih1cmwsIHJlc29sdmVkQXMsIHRydWUsIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmxvY2FsZSA6IHRoaXMubG9jYWxlKSkgOiBmYWxzZTtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLCBcbiAgICAgICAgXSk7XG4gICAgfVxuICAgIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKSB7XG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgY2FuY2VsID0gdGhpcy5jbGMgPSAoKT0+e1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKTtcbiAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO1xuICAgICAgICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdDtcbiAgICB9XG4gICAgX2dldERhdGEoZm4pIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSAoKT0+e1xuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jbGMgPSBjYW5jZWw7XG4gICAgICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnIyID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJyk7XG4gICAgICAgICAgICAgICAgZXJyMi5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRocm93IGVycjI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKSB7XG4gICAgICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgIH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmICF0aGlzLmlzUHJldmlldyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGE7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKSB7XG4gICAgICAgIGNvbnN0IHsgaHJlZjogcmVzb3VyY2VLZXkgIH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmICh0aGlzLnNkcltyZXNvdXJjZUtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XSA9IGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpPT57XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgIH0pLmNhdGNoKChlcnIyKT0+e1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgICAgIHRocm93IGVycjI7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCBjdHgpIHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcDEgIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107XG4gICAgICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcDEpO1xuICAgICAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWU7XG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzKS5sb2FkR2V0SW5pdGlhbFByb3BzKEFwcDEsIHtcbiAgICAgICAgICAgIEFwcFRyZWUsXG4gICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICAgICAgICBjdHhcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFib3J0Q29tcG9uZW50TG9hZChhcywgcm91dGVQcm9wcykge1xuICAgICAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5jbGMoKTtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQsIHJlc2V0U2Nyb2xsKTtcbiAgICB9XG59XG5Sb3V0ZXIuZXZlbnRzID0gKDAsIF9taXR0KS5kZWZhdWx0KCk7XG5leHBvcnRzLmRlZmF1bHQgPSBSb3V0ZXI7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBOZXh0TGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZUNvbnRleHQsIHVzZVJlZHVjZXIgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBDaXJjdWxhclByb2dyZXNzLFxyXG4gIEdyaWQsXHJcbiAgTGlzdCxcclxuICBMaXN0SXRlbSxcclxuICBUeXBvZ3JhcGh5LFxyXG4gIENhcmQsXHJcbiAgQnV0dG9uLFxyXG4gIExpc3RJdGVtVGV4dCxcclxuICBUYWJsZUNvbnRhaW5lcixcclxuICBUYWJsZSxcclxuICBUYWJsZUhlYWQsXHJcbiAgVGFibGVSb3csXHJcbiAgVGFibGVDZWxsLFxyXG4gIFRhYmxlQm9keSxcclxufSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHsgZ2V0RXJyb3IgfSBmcm9tIFwidXRpbHMvZXJyb3JcIjtcclxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwidXRpbHMvU3RvcmVcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IHVzZVN0eWxlcyBmcm9tIFwidXRpbHMvc3R5bGVzXCI7XHJcbmltcG9ydCB7IHVzZVNuYWNrYmFyIH0gZnJvbSAnbm90aXN0YWNrJztcclxuXHJcbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgXCJGRVRDSF9SRVFVRVNUXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiB0cnVlLCBlcnJvcjogXCJcIiB9O1xyXG4gICAgY2FzZSBcIkZFVENIX1NVQ0NFU1NcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmc6IGZhbHNlLCBwcm9kdWN0czogYWN0aW9uLnBheWxvYWQsIGVycm9yOiBcIlwiIH07XHJcbiAgICBjYXNlIFwiRkVUQ0hfRkFJTFwiOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZzogZmFsc2UsIGVycm9yOiBhY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSAnQ1JFQVRFX1JFUVVFU1QnOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZ0NyZWF0ZTogdHJ1ZSB9O1xyXG4gICAgY2FzZSAnQ1JFQVRFX1NVQ0NFU1MnOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZ0NyZWF0ZTogZmFsc2UgfTtcclxuICAgIGNhc2UgJ0NSRUFURV9GQUlMJzpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGxvYWRpbmdDcmVhdGU6IGZhbHNlIH07XHJcbiAgICBjYXNlICdERUxFVEVfUkVRVUVTVCc6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nRGVsZXRlOiB0cnVlIH07XHJcbiAgICBjYXNlICdERUxFVEVfU1VDQ0VTUyc6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nRGVsZXRlOiBmYWxzZSwgc3VjY2Vzc0RlbGV0ZTogdHJ1ZSB9O1xyXG4gICAgY2FzZSAnREVMRVRFX0ZBSUwnOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgbG9hZGluZ0RlbGV0ZTogZmFsc2UgfTtcclxuICAgIGNhc2UgJ0RFTEVURV9SRVNFVCc6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nRGVsZXRlOiBmYWxzZSwgc3VjY2Vzc0RlbGV0ZTogZmFsc2UgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHN0YXRlO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gQWRtaW5Qcm9kdWN0cygpIHtcclxuICBjb25zdCB7IHN0YXRlIH0gPSB1c2VDb250ZXh0KFN0b3JlKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgeyB1c2VySW5mbyB9ID0gc3RhdGU7XHJcblxyXG4gIGNvbnN0IFtcclxuICAgIHsgbG9hZGluZywgZXJyb3IsIHByb2R1Y3RzLCBsb2FkaW5nQ3JlYXRlLCBzdWNjZXNzRGVsZXRlLCBsb2FkaW5nRGVsZXRlIH0sXHJcbiAgICBkaXNwYXRjaCxcclxuICBdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCB7XHJcbiAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgcHJvZHVjdHM6IFtdLFxyXG4gICAgZXJyb3I6IFwiXCIsXHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXVzZXJJbmZvKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJGRVRDSF9SRVFVRVNUXCIgfSk7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvYWRtaW4vcHJvZHVjdHNgLCB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7IGF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt1c2VySW5mby50b2tlbn1gIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIkZFVENIX1NVQ0NFU1NcIiwgcGF5bG9hZDogZGF0YSB9KTtcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIkZFVENIX0ZBSUxcIiwgcGF5bG9hZDogZ2V0RXJyb3IoZXJyKSB9KTtcclxuICAgICAgfVxyXG4gICAgfTsgaWYgKHN1Y2Nlc3NEZWxldGUpIHtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnREVMRVRFX1JFU0VUJyB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZldGNoRGF0YSgpO1xyXG4gICAgfVxyXG4gIH0sIFtzdWNjZXNzRGVsZXRlXSk7Ly8gZXNsaW50LWRpc2FibGUtbGluZSBuby11c2UtYmVmb3JlLWRlZmluZVxyXG5cclxuICBjb25zdCB7IGVucXVldWVTbmFja2JhciB9ID0gdXNlU25hY2tiYXIoKTtcclxuXHJcbiAgY29uc3QgY3JlYXRlSGFuZGxlciA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmICghd2luZG93LmNvbmZpcm0oJ0FyZSB5b3Ugc3VyZT8nKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdDUkVBVEVfUkVRVUVTVCcgfSk7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICBgL2FwaS9hZG1pbi9wcm9kdWN0c2AsXHJcbiAgICAgICAge30sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaGVhZGVyczogeyBhdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dXNlckluZm8udG9rZW59YCB9LFxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAnQ1JFQVRFX1NVQ0NFU1MnIH0pO1xyXG4gICAgICBlbnF1ZXVlU25hY2tiYXIoJ1Byb2R1Y3QgY3JlYXRlZCBzdWNjZXNzZnVsbHknLCB7IHZhcmlhbnQ6ICdzdWNjZXNzJyB9KTtcclxuICAgICAgcm91dGVyLnB1c2goYC9hZG1pbi9wcm9kdWN0LyR7ZGF0YS5wcm9kdWN0Ll9pZH1gKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdDUkVBVEVfRkFJTCcgfSk7XHJcbiAgICAgIGVucXVldWVTbmFja2JhcihnZXRFcnJvcihlcnIpLCB7IHZhcmlhbnQ6ICdlcnJvcicgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBkZWxldGVIYW5kbGVyID0gYXN5bmMgKHByb2R1Y3RJZCkgPT4ge1xyXG4gICAgaWYgKCF3aW5kb3cuY29uZmlybSgnQXJlIHlvdSBzdXJlPycpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0RFTEVURV9SRVFVRVNUJyB9KTtcclxuICAgICAgYXdhaXQgYXhpb3MuZGVsZXRlKGAvYXBpL2FkbWluL3Byb2R1Y3RzLyR7cHJvZHVjdElkfWAsIHtcclxuICAgICAgICBoZWFkZXJzOiB7IGF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt1c2VySW5mby50b2tlbn1gIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdERUxFVEVfU1VDQ0VTUycgfSk7XHJcbiAgICAgIGVucXVldWVTbmFja2JhcignUHJvZHVjdCBkZWxldGVkIHN1Y2Nlc3NmdWxseScsIHsgdmFyaWFudDogJ3N1Y2Nlc3MnIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ0RFTEVURV9GQUlMJyB9KTtcclxuICAgICAgZW5xdWV1ZVNuYWNrYmFyKGdldEVycm9yKGVyciksIHsgdmFyaWFudDogJ2Vycm9yJyB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCB0aXRsZT1cIlByb2R1Y3RzXCI+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsxfT5cclxuICAgICAgICA8R3JpZCBpdGVtIG1kPXszfSB4cz17MTJ9PlxyXG4gICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLnNlY3Rpb259PlxyXG4gICAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi9hZG1pbi9kYXNoYm9hcmRcIiBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY29tcG9uZW50PVwiYVwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJBZG1pbiBEYXNoYm9hcmRcIj48L0xpc3RJdGVtVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9OZXh0TGluaz5cclxuICAgICAgICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi9hZG1pbi9vcmRlcnNcIiBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY29tcG9uZW50PVwiYVwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJPcmRlcnNcIj48L0xpc3RJdGVtVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgPC9OZXh0TGluaz5cclxuICAgICAgICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi9hZG1pbi9wcm9kdWN0c1wiIHBhc3NIcmVmPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtIHNlbGVjdGVkIGJ1dHRvbiBjb21wb25lbnQ9XCJhXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlByb2R1Y3RzXCI+PC9MaXN0SXRlbVRleHQ+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgIDwvTmV4dExpbms+XHJcbiAgICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvYWRtaW4vdXNlcnNcIiBwYXNzSHJlZj5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbSBidXR0b24gY29tcG9uZW50PVwiYVwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJVc2Vyc1wiPjwvTGlzdEl0ZW1UZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICA8L05leHRMaW5rPlxyXG4gICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0gbWQ9ezl9IHhzPXsxMn0+XHJcbiAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMuc2VjdGlvbn0+XHJcbiAgICAgICAgICAgIDxMaXN0PlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgxXCIgdmFyaWFudD1cImgxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBQcm9kdWN0c1xyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICB7bG9hZGluZ0RlbGV0ZSAmJiA8Q2lyY3VsYXJQcm9ncmVzcyAvPn1cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBhbGlnbj1cInJpZ2h0XCIgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y3JlYXRlSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBDcmVhdGVcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICB7bG9hZGluZ0NyZWF0ZSAmJiA8Q2lyY3VsYXJQcm9ncmVzcyAvPn1cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIHtsb2FkaW5nID8gKFxyXG4gICAgICAgICAgICAgICAgICA8Q2lyY3VsYXJQcm9ncmVzcyAvPlxyXG4gICAgICAgICAgICAgICAgKSA6IGVycm9yID8gKFxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuZXJyb3J9PntlcnJvcn08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8VGFibGVDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+SUQ8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPk5BTUU8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlBSSUNFPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5DQVRFR09SWTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+Q09VTlQ8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlJBVElORzwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+QUNUSU9OUzwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93IGtleT17cHJvZHVjdC5faWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3QuX2lkLnN1YnN0cmluZygyMCwgMjQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntwcm9kdWN0Lm5hbWV9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPiR7cHJvZHVjdC5wcmljZX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3Byb2R1Y3QuY2F0ZWdvcnl9PC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntwcm9kdWN0LmNvdW50SW5TdG9ja308L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3Byb2R1Y3QucmF0aW5nfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5leHRMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9hZG1pbi9wcm9kdWN0LyR7cHJvZHVjdC5faWR9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzSHJlZlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21hbGxcIiB2YXJpYW50PVwiY29udGFpbmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFZGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmV4dExpbms+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGVsZXRlSGFuZGxlcihwcm9kdWN0Ll9pZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICAgICAgPC9UYWJsZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZHluYW1pYygoKSA9PiBQcm9taXNlLnJlc29sdmUoQWRtaW5Qcm9kdWN0cyksIHsgc3NyOiBmYWxzZSB9KTtcclxuIiwiaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFN0b3JlID0gY3JlYXRlQ29udGV4dCgpO1xyXG4vLyBjb25zb2xlLmxvZyhDb29raWVzLmdldChcInNoaXBwaW5nQWRkcmVzc1wiKSlcclxuLy8gY29uc29sZS5sb2coKEpTT04ucGFyc2UoQ29va2llcy5nZXQoXCJzaGlwcGluZ0FkZHJlc3NcIikpKSlcclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGRhcmtNb2RlOiBDb29raWVzLmdldChcImRhcmtNb2RlXCIpID09PSBcIk9OXCIgPyB0cnVlIDogZmFsc2UsXHJcbiAgY2FydDoge1xyXG4gICAgY2FydEl0ZW1zOiBDb29raWVzLmdldChcImNhcnRJdGVtc1wiKVxyXG4gICAgICA/IEpTT04ucGFyc2UoQ29va2llcy5nZXQoXCJjYXJ0SXRlbXNcIikpXHJcbiAgICAgIDogW10sXHJcbiAgICBzaGlwcGluZ0FkZHJlc3M6IENvb2tpZXMuZ2V0KFwic2hpcHBpbmdBZGRyZXNzXCIpXHJcbiAgICAgID8gQ29va2llcy5nZXQoXCJzaGlwcGluZ0FkZHJlc3NcIilcclxuICAgICAgOiB7IGxvY2F0aW9uOiB7fSB9LFxyXG4gICAgcGF5bWVudE1ldGhvZDogQ29va2llcy5nZXQoXCJwYXltZW50TWV0aG9kXCIpXHJcbiAgICAgID8gQ29va2llcy5nZXQoXCJwYXltZW50TWV0aG9kXCIpXHJcbiAgICAgIDogXCJcIixcclxuICB9LFxyXG4gIHVzZXJJbmZvOiBDb29raWVzLmdldChcInVzZXJJbmZvXCIpXHJcbiAgICA/IEpTT04ucGFyc2UoQ29va2llcy5nZXQoXCJ1c2VySW5mb1wiKSlcclxuICAgIDogbnVsbCxcclxufTtcclxuXHJcbmZ1bmN0aW9uIHJlZHVjZXIoc3RhdGUsIGFjdGlvbikge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgXCJEQVJLX01PREVfT05cIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGRhcmtNb2RlOiB0cnVlIH07XHJcbiAgICBjYXNlIFwiREFSS19NT0RFX09GRlwiOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZGFya01vZGU6IGZhbHNlIH07XHJcblxyXG4gICAgY2FzZSBcIkNBUlRfQUREX0lURU1cIjoge1xyXG4gICAgICBjb25zdCBuZXdJdGVtID0gYWN0aW9uLnBheWxvYWQ7IC8vIE5ldyBwcm9kdWN0IHRvIGFkZGluZy5cclxuICAgICAgY29uc3QgZXhpc3RJdGVtID0gc3RhdGUuY2FydC5jYXJ0SXRlbXMuZmluZChcclxuICAgICAgICAvL1JldHVybnMgdGhlIHByb2R1Y3QgaWYgaXQgZXhpc3QgaW4gdGhlIGNhcnRJdGVtcy4gT3RoZXJ3aXNlLCB1bmRlZmluZWQgaXMgcmV0dXJuZWQuXHJcbiAgICAgICAgKGl0ZW0pID0+IGl0ZW0uX2lkID09PSBuZXdJdGVtLl9pZFxyXG4gICAgICApO1xyXG4gICAgICAvL0NhcnRJdGVtcyBpcyB1cGRhdGVkLlxyXG4gICAgICBjb25zdCBjYXJ0SXRlbXMgPSBleGlzdEl0ZW1cclxuICAgICAgICA/IC8vSWYgdGhlIGl0ZW0gYWxyZWFkeSBleGlzdCBpbiBjYXJ0SXRlbXMsIHRoZW4gdGhlIGl0ZW0gaXMgIHVwZGF0ZWQgb25seSAobm90IGFkZGVkKS5cclxuICAgICAgICBzdGF0ZS5jYXJ0LmNhcnRJdGVtcy5tYXAoKGl0ZW0pID0+XHJcbiAgICAgICAgICBpdGVtLm5hbWUgPT09IGV4aXN0SXRlbS5uYW1lID8gbmV3SXRlbSA6IGl0ZW1cclxuICAgICAgICApXHJcbiAgICAgICAgOiAvL0lmIHRoZSBpdGVtIG5vdCBleGlzdCBpbiBjYXJ0SXRlbXMsIHRoZW4gdGhlIGl0ZW0gaXMgYWRkZWQgYW5kIGNhcnRJdGVtIGlzIHVwZGF0ZWQgKGluY3JlYXNlIGl0cyBsZW5ndGgpXHJcbiAgICAgICAgWy4uLnN0YXRlLmNhcnQuY2FydEl0ZW1zLCBuZXdJdGVtXTtcclxuXHJcbiAgICAgIENvb2tpZXMuc2V0KFwiY2FydEl0ZW1zXCIsIEpTT04uc3RyaW5naWZ5KGNhcnRJdGVtcykpO1xyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2FydDogeyAuLi5zdGF0ZS5jYXJ0LCBjYXJ0SXRlbXMgfSB9OyAvL1VwZGF0ZWQgc3RhdGUuXHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBcIkNBUlRfUkVNT1ZFX0lURU1cIjoge1xyXG4gICAgICBjb25zdCBjYXJ0SXRlbXMgPSBzdGF0ZS5jYXJ0LmNhcnRJdGVtcy5maWx0ZXIoXHJcbiAgICAgICAgKGl0ZW0pID0+IGl0ZW0uX2lkICE9PSBhY3Rpb24ucGF5bG9hZC5faWRcclxuICAgICAgKTtcclxuICAgICAgQ29va2llcy5zZXQoXCJjYXJ0SXRlbXNcIiwgSlNPTi5zdHJpbmdpZnkoY2FydEl0ZW1zKSk7XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjYXJ0OiB7IC4uLnN0YXRlLmNhcnQsIGNhcnRJdGVtcyB9IH07XHJcbiAgICB9XHJcblxyXG4gICAgY2FzZSBcIkNBUlRfQ0xFQVJcIjpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNhcnQ6IHsgLi4uc3RhdGUuY2FydCwgY2FydEl0ZW1zOiBbXSB9IH07XHJcblxyXG4gICAgY2FzZSBcIlNBVkVfU0hJUFBJTkdfQUREUkVTU1wiOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNhcnQ6IHtcclxuICAgICAgICAgIC4uLnN0YXRlLmNhcnQsXHJcbiAgICAgICAgICBzaGlwcGluZ0FkZHJlc3M6IHtcclxuICAgICAgICAgICAgLi4uc3RhdGUuY2FydC5zaGlwcGluZ0FkZHJlc3MsXHJcbiAgICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSAnU0FWRV9TSElQUElOR19BRERSRVNTX01BUF9MT0NBVElPTic6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2FydDoge1xyXG4gICAgICAgICAgLi4uc3RhdGUuY2FydCxcclxuICAgICAgICAgIHNoaXBwaW5nQWRkcmVzczoge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZS5jYXJ0LnNoaXBwaW5nQWRkcmVzcyxcclxuICAgICAgICAgICAgbG9jYXRpb246IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG5cclxuICAgIGNhc2UgXCJTQVZFX1BBWU1FTlRfTUVUSE9EXCI6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2FydDogeyAuLi5zdGF0ZS5jYXJ0LCBwYXltZW50TWV0aG9kOiBhY3Rpb24ucGF5bG9hZCB9LFxyXG4gICAgICB9O1xyXG5cclxuICAgIGNhc2UgXCJVU0VSX0xPR0lOXCI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCB1c2VySW5mbzogYWN0aW9uLnBheWxvYWQgfTtcclxuXHJcbiAgICBjYXNlIFwiVVNFUl9MT0dPVVRcIjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB1c2VySW5mbzogbnVsbCxcclxuICAgICAgICBjYXJ0OiB7XHJcbiAgICAgICAgICBjYXJ0SXRlbXM6IFtdLFxyXG4gICAgICAgICAgc2hpcHBpbmdBZGRyZXNzOiB7IGxvY2F0aW9uOiB7fSB9LFxyXG4gICAgICAgICAgcGF5bWVudE1ldGhvZDogJycsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gU3RvcmVQcm92aWRlcihwcm9wcykge1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xyXG4gIGNvbnN0IHZhbHVlID0geyBzdGF0ZSwgZGlzcGF0Y2ggfTtcclxuICByZXR1cm4gPFN0b3JlLlByb3ZpZGVyIHZhbHVlPXt2YWx1ZX0+e3Byb3BzLmNoaWxkcmVufTwvU3RvcmUuUHJvdmlkZXI+O1xyXG59XHJcbiIsIi8vIHJlcXVpcmUoJ2RvdGVudicpLmNvbmZpZygpXHJcbmltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCBjb25uZWN0aW9uID0ge307XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjb25uZWN0KCkge1xyXG4gIGlmIChjb25uZWN0aW9uLmlzQ29ubmVjdGVkKSB7XHJcbiAgICBjb25zb2xlLmxvZygnYWxyZWFkeSBjb25uZWN0ZWQnKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgaWYgKG1vbmdvb3NlLmNvbm5lY3Rpb25zLmxlbmd0aCA+IDApIHtcclxuICAgIGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPSBtb25nb29zZS5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlO1xyXG4gICAgaWYgKGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPT09IDEpIHtcclxuICAgICAgY29uc29sZS5sb2coJ3VzZSBwcmV2aW91cyBjb25uZWN0aW9uJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGF3YWl0IG1vbmdvb3NlLmRpc2Nvbm5lY3QoKTtcclxuICB9XHJcbiAgY29uc29sZS5sb2coJ21lIGNvbmVjdGFyZScpXHJcbiAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSSSwge1xyXG4gICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxyXG4gICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlXHJcbiAgfSkudGhlbigoZGIpPT57XHJcbiAgICBjb25zb2xlLmxvZygnbmV3IGNvbm5lY3Rpb24nKTtcclxuICAgIGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPSBkYi5jb25uZWN0aW9uc1swXS5yZWFkeVN0YXRlO1xyXG4gIH0pXHJcblxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBkaXNjb25uZWN0KCkge1xyXG4gIGlmIChjb25uZWN0aW9uLmlzQ29ubmVjdGVkKSB7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICBhd2FpdCBtb25nb29zZS5kaXNjb25uZWN0KCk7XHJcbiAgICAgIGNvbm5lY3Rpb24uaXNDb25uZWN0ZWQgPSBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdub3QgZGlzY29ubmVjdGVkJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vL2RiIHJldHVybnMgZGF0YSBpbiBvdGhlciBmb3JtYXQgdGhhdCBpcyBub3QgYSBqYXZhc2NyaXB0IGRhdGEsIHNvIHdlIG5lZWQgdG8gY29udmVydCB0aGF0IGRhdGEgdG8gc3RyaW5nLlxyXG5mdW5jdGlvbiBjb252ZXJ0RG9jVG9PYmooZG9jKSB7XHJcbiAgZG9jLl9pZCA9IGRvYy5faWQudG9TdHJpbmcoKTtcclxuICBkb2MuY3JlYXRlZEF0ID0gZG9jLmNyZWF0ZWRBdC50b1N0cmluZygpO1xyXG4gIGRvYy51cGRhdGVkQXQgPSBkb2MudXBkYXRlZEF0LnRvU3RyaW5nKCk7XHJcbiAgcmV0dXJuIGRvYztcclxufVxyXG5cclxuY29uc3QgZGIgPSB7IGNvbm5lY3QsIGRpc2Nvbm5lY3QsIGNvbnZlcnREb2NUb09iaiB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGI7XHJcblxyXG4vLyBcclxuLy8gY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpXHJcblxyXG4vLyBjb25zdCB1cmwgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSVxyXG5cclxuLy8gY29uc29sZS5sb2coJ2Nvbm5lY3RpbmcgdG8nLCB1cmwpXHJcblxyXG4vLyBtb25nb29zZS5jb25uZWN0KHVybCwgeyB1c2VOZXdVcmxQYXJzZXI6IHRydWUsIHVzZVVuaWZpZWRUb3BvbG9neTogdHJ1ZSB9KVxyXG4vLyAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbi8vICAgICBjb25zb2xlLmxvZygnY29ubmVjdGVkIHRvIE1vbmdvREInKVxyXG4vLyAgIH0pXHJcbi8vICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4vLyAgICAgY29uc29sZS5sb2coJ2Vycm9yIGNvbm5lY3RpbmcgdG8gTW9uZ29EQjonLCBlcnJvci5tZXNzYWdlKVxyXG4vLyAgIH0pXHJcbiAgXHJcblxyXG5cclxuey8qXHJcbigxKSBjb25uZWN0aW9ucyBpcyBhbiBhcnJheSB0aGF0IGNvbnRhaW5zIGFsbCBwcmV2aW91cyBjb25uZWN0aW9ucyB0byB0aGUgZGF0YWJhc2VcclxuXHJcbigyKSBJbiBwcm9kdWN0aW9uIGVudmlyb25tZW50LCB0aGUgY29ubmVjdGlvbiBtdXN0IGJlIGRpc2Nvbm5lY3RlZCBhZnRlciBlYWNoIHJlc3F1ZXN0IHRvIHRoZSBkYi5cclxuICAgIEJ1dCBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudCBpdCdzIG5vdCBuZWNlc3NhcnkgdG8gZGlzY29ubmVjdCBpbiBvcmRlciB0byBub3Qgb3ZlciBjaGFyZ2UgcmVzb3VyY2VzLlxyXG5cclxuKi99IiwiXHJcbmltcG9ydCBkYiBmcm9tICcuL2RiJztcclxuXHJcbmNvbnN0IGdldEVycm9yID0gKGVycikgPT5cclxuICBlcnIucmVzcG9uc2UgJiYgZXJyLnJlc3BvbnNlLmRhdGEgJiYgZXJyLnJlc3BvbnNlLmRhdGEubWVzc2FnZVxyXG4gICAgPyBlcnIucmVzcG9uc2UuZGF0YS5tZXNzYWdlXHJcbiAgICA6IGVyci5tZXNzYWdlO1xyXG5cclxuXHJcbi8vVG8gaGFuZGxlIGVycm9zIGluIG1pZGRsZXdhcmUgaW4gYmFja2VuZC5cclxuY29uc3Qgb25FcnJvciA9IGFzeW5jIChlcnIsIHJlcSwgcmVzLCBuZXh0KSA9PiB7XHJcbiAgYXdhaXQgZGIuZGlzY29ubmVjdCgpO1xyXG4gIHJlcy5zdGF0dXMoNTAwKS5zZW5kKHsgbWVzc2FnZTogZXJyLnRvU3RyaW5nKCkgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBnZXRFcnJvciwgb25FcnJvciB9OyIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIG5hdmJhcjoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiMyMDMwNDBcIixcclxuICAgIFwiJiBhXCI6IHtcclxuICAgICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxyXG4gICAgICBtYXJnaW5MZWZ0OiAxMCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBtYWluOiB7XHJcbiAgICBtaW5IZWlnaHQ6IFwiODB2aFwiLFxyXG4gIH0sXHJcbiAgZm9vdGVyOiB7XHJcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICBtYXJnaW5Ub3A6IDEwLFxyXG4gIH0sXHJcbiAgc2VjdGlvbjoge1xyXG4gICAgbWFyZ2luVG9wOiAxMCxcclxuICAgIG1hcmdpbkJvdHRvbTogMTAsXHJcbiAgfSxcclxuICBmb3JtOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgbWF4V2lkdGg6IDgwMCxcclxuICAgIG1hcmdpbjogXCIwIGF1dG9cIixcclxuICB9LFxyXG4gIGJyYW5kOiB7XHJcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcclxuICAgIGZvbnRTaXplOiBcIjEuNXJlbVwiLFxyXG4gIH0sXHJcbiAgZ3Jvdzoge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgfSxcclxuXHJcbiAgbmF2YmFyQnV0dG9uOiB7XHJcbiAgICBjb2xvcjogXCIjZmZmZmZmXCIsXHJcbiAgICB0ZXh0VHJhbnNmb3JtOiBcImluaXRpYWxcIixcclxuICB9LFxyXG5cclxuICB0cmFuc3BhcmVudEJhY2tncm91ZDoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgfSxcclxuXHJcbiAgZXJyb3I6IHtcclxuICAgIGNvbG9yOiBcIiNmMDQwNDBcIixcclxuICB9LFxyXG5cclxuICBmdWxsV2lkdGg6IHtcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICB9LFxyXG4gIHJldmlld0Zvcm06IHtcclxuICAgIG1heFdpZHRoOiA4MDAsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gIH0sXHJcbiAgcmV2aWV3SXRlbToge1xyXG4gICAgbWFyZ2luUmlnaHQ6ICcxcmVtJyxcclxuICAgIGJvcmRlclJpZ2h0OiAnMXB4ICM4MDgwODAgc29saWQnLFxyXG4gICAgcGFkZGluZ1JpZ2h0OiAnMXJlbScsXHJcbiAgfSxcclxuICB0b29sYmFyOiB7XHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gIH0sXHJcbiAgbWVudUJ1dHRvbjogeyBwYWRkaW5nOiAwIH0sXHJcbiAgbXQxOiB7IG1hcmdpblRvcDogJzFyZW0nIH0sXHJcbiAgLy8gc2VhcmNoXHJcbiAgc2VhcmNoU2VjdGlvbjoge1xyXG4gICAgZGlzcGxheTogJ25vbmUnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdtZCcpXToge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2VhcmNoRm9ybToge1xyXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICNmZmZmZmYnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICBib3JkZXJSYWRpdXM6IDUsXHJcbiAgfSxcclxuICBzZWFyY2hJbnB1dDoge1xyXG4gICAgcGFkZGluZ0xlZnQ6IDUsXHJcbiAgICBjb2xvcjogJyMwMDAwMDAnLFxyXG4gICAgJyYgOjpwbGFjZWhvbGRlcic6IHtcclxuICAgICAgY29sb3I6ICcjNjA2MDYwJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBpY29uQnV0dG9uOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjhjMDQwJyxcclxuICAgIHBhZGRpbmc6IDUsXHJcbiAgICBib3JkZXJSYWRpdXM6ICcwIDVweCA1cHggMCcsXHJcbiAgICAnJiBzcGFuJzoge1xyXG4gICAgICBjb2xvcjogJyMwMDAwMDAnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHNvcnQ6IHtcclxuICAgIG1hcmdpblJpZ2h0OiA1LFxyXG4gIH0sXHJcbiAgZnVsbENvbnRhaW5lcjogeyBoZWlnaHQ6ICcxMDB2aCcgfSxcclxuICBtYXBJbnB1dEJveDoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBsZWZ0OiAwLFxyXG4gICAgcmlnaHQ6IDAsXHJcbiAgICBtYXJnaW46ICcxMHB4IGF1dG8nLFxyXG4gICAgd2lkdGg6IDMwMCxcclxuICAgIGhlaWdodDogNDAsXHJcbiAgICAnJiBpbnB1dCc6IHtcclxuICAgICAgd2lkdGg6IDI1MCxcclxuICAgIH0sXHJcbiAgfSxcclxufSkpO1xyXG5leHBvcnQgZGVmYXVsdCB1c2VTdHlsZXM7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9DYW5jZWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL01lbnVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1NlYXJjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9keW5hbWljXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJub3Rpc3RhY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIi8qIChpZ25vcmVkKSAqLyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJIZWFkIiwiTmV4dExpbmsiLCJBcHBCYXIiLCJUb29sYmFyIiwiVHlwb2dyYXBoeSIsIkNvbnRhaW5lciIsIkxpbmsiLCJjcmVhdGVUaGVtZSIsIlRoZW1lUHJvdmlkZXIiLCJDc3NCYXNlbGluZSIsIlN3aXRjaCIsIkJhZGdlIiwiQnV0dG9uIiwiTWVudSIsIk1lbnVJdGVtIiwiQm94IiwiSWNvbkJ1dHRvbiIsIkRyYXdlciIsIkxpc3QiLCJMaXN0SXRlbSIsIkRpdmlkZXIiLCJMaXN0SXRlbVRleHQiLCJJbnB1dEJhc2UiLCJNZW51SWNvbiIsIkNhbmNlbEljb24iLCJTZWFyY2hJY29uIiwidXNlU3R5bGVzIiwiU3RvcmUiLCJnZXRFcnJvciIsIkNvb2tpZXMiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsInVzZVNuYWNrYmFyIiwiYXhpb3MiLCJ1c2VFZmZlY3QiLCJMYXlvdXQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJzdGF0ZSIsImRpc3BhdGNoIiwiZGFya01vZGUiLCJjYXJ0IiwidXNlckluZm8iLCJ0aGVtZSIsInR5cG9ncmFwaHkiLCJoMSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsIm1hcmdpbiIsImgyIiwicGFsZXR0ZSIsInR5cGUiLCJwcmltYXJ5IiwibWFpbiIsInNlY29uZGFyeSIsImNsYXNzZXMiLCJzaWRiYXJWaXNpYmxlIiwic2V0U2lkZWJhclZpc2libGUiLCJzaWRlYmFyT3BlbkhhbmRsZXIiLCJzaWRlYmFyQ2xvc2VIYW5kbGVyIiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJlbnF1ZXVlU25hY2tiYXIiLCJmZXRjaENhdGVnb3JpZXMiLCJkYXRhIiwiZ2V0IiwiZXJyIiwidmFyaWFudCIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJxdWVyeUNoYW5nZUhhbmRsZXIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzdWJtaXRIYW5kbGVyIiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwiZGFya01vZGVDaGFuZ2VIYW5kbGVyIiwibmV3RGFya01vZGUiLCJzZXQiLCJhbmNob3JFbCIsInNldEFuY2hvckVsIiwibG9naW5DbGlja0hhbmRsZXIiLCJjdXJyZW50VGFyZ2V0IiwibG9naW5NZW51Q2xvc2VIYW5kbGVyIiwicmVkaXJlY3QiLCJsb2dvdXRDbGlja0hhbmRsZXIiLCJyZW1vdmUiLCJuYXZiYXIiLCJ0b29sYmFyIiwibWVudUJ1dHRvbiIsIm5hdmJhckJ1dHRvbiIsImJyYW5kIiwibWFwIiwiY2F0ZWdvcnkiLCJzZWFyY2hTZWN0aW9uIiwic2VhcmNoRm9ybSIsInNlYXJjaElucHV0IiwiaWNvbkJ1dHRvbiIsImNhcnRJdGVtcyIsImxlbmd0aCIsIm5hbWUiLCJCb29sZWFuIiwiaXNBZG1pbiIsImZvb3RlciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsImRlZmF1bHQiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9yb3V0ZXIiLCJfcm91dGVyMSIsIl91c2VJbnRlcnNlY3Rpb24iLCJvYmoiLCJfX2VzTW9kdWxlIiwicHJlZmV0Y2hlZCIsInByZWZldGNoIiwiaHJlZiIsImFzIiwib3B0aW9ucyIsImlzTG9jYWxVUkwiLCJjYXRjaCIsImN1ckxvY2FsZSIsImxvY2FsZSIsImlzTW9kaWZpZWRFdmVudCIsImV2ZW50IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsInJlcGxhY2UiLCJzaGFsbG93Iiwic2Nyb2xsIiwibm9kZU5hbWUiLCJpbmRleE9mIiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJhcmdzIiwiRXJyb3IiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJrZXlzIiwiZm9yRWFjaCIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJwYXNzSHJlZiIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwidXNlUmVmIiwiY3VycmVudCIsImNvbnNvbGUiLCJ3YXJuIiwicCIsInVzZU1lbW8iLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlZEFzIiwicmVzb2x2ZUhyZWYiLCJjcmVhdGVFbGVtZW50IiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjaGlsZFJlZiIsInJlZiIsInNldEludGVyc2VjdGlvblJlZiIsImlzVmlzaWJsZSIsInVzZUludGVyc2VjdGlvbiIsInJvb3RNYXJnaW4iLCJzZXRSZWYiLCJ1c2VDYWxsYmFjayIsImVsIiwic2hvdWxkUHJlZmV0Y2giLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwib25DbGljayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsImxvY2FsZURvbWFpbiIsImlzTG9jYWxlRG9tYWluIiwiZ2V0RG9tYWluTG9jYWxlIiwibG9jYWxlcyIsImRvbWFpbkxvY2FsZXMiLCJhZGRCYXNlUGF0aCIsImFkZExvY2FsZSIsImRlZmF1bHRMb2NhbGUiLCJjbG9uZUVsZW1lbnQiLCJfZGVmYXVsdCIsInJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwYXRoIiwiZW5kc1dpdGgiLCJzbGljZSIsInByb2Nlc3MiLCJlbnYiLCJfX05FWFRfVFJBSUxJTkdfU0xBU0giLCJ0ZXN0IiwicmVxdWVzdElkbGVDYWxsYmFjayIsImNhbmNlbElkbGVDYWxsYmFjayIsInNlbGYiLCJiaW5kIiwid2luZG93IiwiY2IiLCJzdGFydCIsIkRhdGUiLCJub3ciLCJzZXRUaW1lb3V0IiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJNYXRoIiwibWF4IiwiaWQiLCJjbGVhclRpbWVvdXQiLCJtYXJrQXNzZXRFcnJvciIsImlzQXNzZXRFcnJvciIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJjcmVhdGVSb3V0ZUxvYWRlciIsIl9nZXRBc3NldFBhdGhGcm9tUm91dGUiLCJfcmVxdWVzdElkbGVDYWxsYmFjayIsIk1TX01BWF9JRExFX0RFTEFZIiwid2l0aEZ1dHVyZSIsImdlbmVyYXRvciIsImVudHJ5IiwiZnV0dXJlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZXNvbHZlciIsInByb20iLCJ0aGVuIiwiaGFzUHJlZmV0Y2giLCJsaW5rIiwiZG9jdW1lbnQiLCJNU0lucHV0TWV0aG9kQ29udGV4dCIsImRvY3VtZW50TW9kZSIsInJlbExpc3QiLCJzdXBwb3J0cyIsImNhblByZWZldGNoIiwicHJlZmV0Y2hWaWFEb20iLCJyZXMiLCJyZWoiLCJxdWVyeVNlbGVjdG9yIiwicmVsIiwiY3Jvc3NPcmlnaW4iLCJfX05FWFRfQ1JPU1NfT1JJR0lOIiwib25sb2FkIiwib25lcnJvciIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhcHBlbmRTY3JpcHQiLCJzcmMiLCJzY3JpcHQiLCJyZWplY3QiLCJib2R5IiwiZGV2QnVpbGRQcm9taXNlIiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsIm1zIiwiY2FuY2VsbGVkIiwiciIsIl9fQlVJTERfTUFOSUZFU1QiLCJvbkJ1aWxkTWFuaWZlc3QiLCJfX0JVSUxEX01BTklGRVNUX0NCIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImFzc2V0UHJlZml4Iiwicm91dGUiLCJzY3JpcHRzIiwiZW5jb2RlVVJJIiwiY3NzIiwibWFuaWZlc3QiLCJhbGxGaWxlcyIsImZpbHRlciIsInYiLCJlbnRyeXBvaW50cyIsIk1hcCIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsIm1heWJlRXhlY3V0ZVNjcmlwdCIsImZldGNoU3R5bGVTaGVldCIsImZldGNoIiwib2siLCJ0ZXh0IiwiY29udGVudCIsIndoZW5FbnRyeXBvaW50Iiwib25FbnRyeXBvaW50IiwiZXhlY3V0ZSIsImZuIiwiY29tcG9uZW50IiwiZXJyb3IiLCJpbnB1dCIsIm9sZCIsImxvYWRSb3V0ZSIsInJvdXRlRmlsZXNQcm9taXNlIiwiYWxsIiwiaGFzIiwiZW50cnlwb2ludCIsInN0eWxlcyIsImZpbmFsbHkiLCJhc3NpZ24iLCJjbiIsIm5hdmlnYXRvciIsImNvbm5lY3Rpb24iLCJzYXZlRGF0YSIsImVmZmVjdGl2ZVR5cGUiLCJvdXRwdXQiLCJlbnVtZXJhYmxlIiwiX3dpdGhSb3V0ZXIiLCJjcmVhdGVSb3V0ZXIiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJfcm91dGVyQ29udGV4dCIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiQXJyYXkiLCJpc0FycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImRpc2FibGVkIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidW5kZWZpbmVkIiwidGFnTmFtZSIsIm9ic2VydmUiLCJpZGxlQ2FsbGJhY2siLCJlbGVtZW50IiwiY2FsbGJhY2siLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImVudHJpZXMiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwid2l0aFJvdXRlciIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiZGlzcGxheU5hbWUiLCJkZWxMb2NhbGUiLCJoYXNCYXNlUGF0aCIsImRlbEJhc2VQYXRoIiwiaW50ZXJwb2xhdGVBcyIsIl9ub3JtYWxpemVUcmFpbGluZ1NsYXNoIiwiX3JvdXRlTG9hZGVyIiwiX2Rlbm9ybWFsaXplUGFnZVBhdGgiLCJfbm9ybWFsaXplTG9jYWxlUGF0aCIsIl9taXR0IiwiX3V0aWxzIiwiX2lzRHluYW1pYyIsIl9wYXJzZVJlbGF0aXZlVXJsIiwiX3F1ZXJ5c3RyaW5nIiwiX3Jlc29sdmVSZXdyaXRlcyIsIl9yb3V0ZU1hdGNoZXIiLCJfcm91dGVSZWdleCIsImRldGVjdERvbWFpbkxvY2FsZSIsIl9fTkVYVF9JMThOX1NVUFBPUlQiLCJiYXNlUGF0aCIsIl9fTkVYVF9ST1VURVJfQkFTRVBBVEgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiYWRkUGF0aFByZWZpeCIsInByZWZpeCIsInN0YXJ0c1dpdGgiLCJwYXRoTm9RdWVyeUhhc2giLCJub3JtYWxpemVMb2NhbGVQYXRoIiwiZGV0ZWN0ZWRMb2NhbGUiLCJkZXRlY3RlZERvbWFpbiIsImh0dHAiLCJkb21haW4iLCJwYXRobmFtZSIsInBhdGhMb3dlciIsInRvTG93ZXJDYXNlIiwibG9jYWxlTG93ZXIiLCJzdWJzdHIiLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiVVJMIiwib3JpZ2luIiwiYXNQYXRobmFtZSIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZ2V0Um91dGVSZWdleCIsImR5bmFtaWNHcm91cHMiLCJncm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImdldFJvdXRlTWF0Y2hlciIsInBhcmFtcyIsImV2ZXJ5IiwicGFyYW0iLCJyZXBlYXQiLCJvcHRpb25hbCIsInJlcGxhY2VkIiwic2VnbWVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsImpvaW4iLCJyZXN1bHQiLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5IiwiaW5jbHVkZXMiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsInVybFByb3RvTWF0Y2giLCJtYXRjaCIsInVybEFzU3RyaW5nTm9Qcm90byIsInVybFBhcnRzIiwic3BsaXQiLCJub3JtYWxpemVkVXJsIiwibm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzIiwiYXNQYXRoIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImlzRHluYW1pY1JvdXRlIiwic2VhcmNoUGFyYW1zIiwic2VhcmNoUGFyYW1zVG9VcmxRdWVyeSIsImhhc2giLCJzdHJpcE9yaWdpbiIsInByZXBhcmVVcmxBcyIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInByZXBhcmVkVXJsIiwicHJlcGFyZWRBcyIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYWdlcyIsImNsZWFuUGF0aG5hbWUiLCJkZW5vcm1hbGl6ZVBhZ2VQYXRoIiwic29tZSIsInBhZ2UiLCJyZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiIsImhpc3RvcnkiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwibiIsIlNTR19EQVRBX05PVF9GT1VORCIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwic3RhdHVzIiwianNvbiIsIm5vdEZvdW5kIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJSb3V0ZXIiLCJjb25zdHJ1Y3RvciIsInBhdGhuYW1lMSIsInF1ZXJ5MSIsImFzMSIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwiQ29tcG9uZW50IiwiQ29tcG9uZW50MSIsImVycjEiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwiaXNQcmV2aWV3Iiwic2RjIiwic2RyIiwiX2lkeCIsIm9uUG9wU3RhdGUiLCJjaGFuZ2VTdGF0ZSIsImdldFVSTCIsIl9fTiIsImZvcmNlZFNjcm9sbCIsImlkeCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ4IiwicGFnZVhPZmZzZXQiLCJ5IiwicGFnZVlPZmZzZXQiLCJnZXRJdGVtIiwicGFyc2UiLCJwYXJzZVJlbGF0aXZlVXJsIiwiaXNTc3IiLCJfYnBzIiwiY2hhbmdlIiwiX3NoYWxsb3ciLCJjb21wb25lbnRzIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJfX05fU1NQIiwiYXV0b0V4cG9ydER5bmFtaWMiLCJfX05FWFRfREFUQV9fIiwiYXV0b0V4cG9ydCIsInN1YiIsImNsYyIsIl93cmFwQXBwIiwiaXNSZWFkeSIsImdzc3AiLCJnaXAiLCJhcHBHaXAiLCJnc3AiLCJsb2NhdGlvbiIsInNlYXJjaCIsIl9fTkVYVF9IQVNfUkVXUklURVMiLCJob3N0bmFtZSIsIl9zaG91bGRSZXNvbHZlSHJlZiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxSZXN0b3JhdGlvbiIsInJlbG9hZCIsImJhY2siLCJtZXRob2QiLCJzaG91bGRSZXNvbHZlSHJlZiIsIl9oIiwicHJldkxvY2FsZSIsInBhcnNlZEFzIiwibG9jYWxlUGF0aFJlc3VsdCIsImRpZE5hdmlnYXRlIiwiYXNOb0Jhc2VQYXRoIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJyb3V0ZVByb3BzIiwiX2luRmxpZ2h0Um91dGUiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJsb2NhbGVDaGFuZ2UiLCJvbmx5QUhhc2hDaGFuZ2UiLCJlbWl0Iiwic2Nyb2xsVG9IYXNoIiwibm90aWZ5IiwicGFyc2VkIiwicmV3cml0ZXMiLCJnZXRQYWdlTGlzdCIsIl9fcmV3cml0ZXMiLCJ1cmxJc05ldyIsInJld3JpdGVzUmVzdWx0IiwibWF0Y2hlZFBhZ2UiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJlZjEiLCJyb3V0ZUluZm8iLCJnZXRSb3V0ZUluZm8iLCJwYWdlUHJvcHMiLCJfX05fUkVESVJFQ1QiLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJuZXdVcmwiLCJuZXdBcyIsIl9fTl9QUkVWSUVXIiwibm90Rm91bmRSb3V0ZSIsImZldGNoQ29tcG9uZW50IiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwic3RhdHVzQ29kZSIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJfc2Nyb2xsIiwic2hvdWxkU2Nyb2xsIiwicmVzZXRTY3JvbGwiLCJkb2N1bWVudEVsZW1lbnQiLCJsYW5nIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJtb2QiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJnZXREYXRhSHJlZiIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImVycjIiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwic2Nyb2xsVG8iLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwicGF0aG5hbWUyIiwiX2lzU3NnIiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImNhY2hlS2V5IiwicmVzb3VyY2VLZXkiLCJjdHgiLCJBcHAxIiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJkeW5hbWljIiwidXNlUmVkdWNlciIsIkNpcmN1bGFyUHJvZ3Jlc3MiLCJHcmlkIiwiQ2FyZCIsIlRhYmxlQ29udGFpbmVyIiwiVGFibGUiLCJUYWJsZUhlYWQiLCJUYWJsZVJvdyIsIlRhYmxlQ2VsbCIsIlRhYmxlQm9keSIsInJlZHVjZXIiLCJhY3Rpb24iLCJsb2FkaW5nIiwicHJvZHVjdHMiLCJwYXlsb2FkIiwibG9hZGluZ0NyZWF0ZSIsImxvYWRpbmdEZWxldGUiLCJzdWNjZXNzRGVsZXRlIiwiQWRtaW5Qcm9kdWN0cyIsImZldGNoRGF0YSIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwidG9rZW4iLCJjcmVhdGVIYW5kbGVyIiwiY29uZmlybSIsInBvc3QiLCJwcm9kdWN0IiwiX2lkIiwiZGVsZXRlSGFuZGxlciIsInByb2R1Y3RJZCIsInNlY3Rpb24iLCJwcmljZSIsImNvdW50SW5TdG9jayIsInJhdGluZyIsInNzciIsImNyZWF0ZUNvbnRleHQiLCJpbml0aWFsU3RhdGUiLCJzaGlwcGluZ0FkZHJlc3MiLCJwYXltZW50TWV0aG9kIiwibmV3SXRlbSIsImV4aXN0SXRlbSIsImZpbmQiLCJpdGVtIiwiU3RvcmVQcm92aWRlciIsIm1vbmdvb3NlIiwiY29ubmVjdCIsImlzQ29ubmVjdGVkIiwibG9nIiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIiwiTU9OR09EQl9VUkkiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJkYiIsImNvbnZlcnREb2NUb09iaiIsImRvYyIsInRvU3RyaW5nIiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0IiwicmVzcG9uc2UiLCJvbkVycm9yIiwicmVxIiwic2VuZCIsIm1ha2VTdHlsZXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsIm1hcmdpbkxlZnQiLCJtaW5IZWlnaHQiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJmb3JtIiwid2lkdGgiLCJtYXhXaWR0aCIsImdyb3ciLCJmbGV4R3JvdyIsInRleHRUcmFuc2Zvcm0iLCJ0cmFuc3BhcmVudEJhY2tncm91ZCIsImZ1bGxXaWR0aCIsInJldmlld0Zvcm0iLCJyZXZpZXdJdGVtIiwibWFyZ2luUmlnaHQiLCJib3JkZXJSaWdodCIsInBhZGRpbmdSaWdodCIsImp1c3RpZnlDb250ZW50IiwicGFkZGluZyIsIm10MSIsImRpc3BsYXkiLCJicmVha3BvaW50cyIsInVwIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZ0xlZnQiLCJzb3J0IiwiZnVsbENvbnRhaW5lciIsImhlaWdodCIsIm1hcElucHV0Qm94IiwicG9zaXRpb24iLCJsZWZ0IiwicmlnaHQiXSwic291cmNlUm9vdCI6IiJ9