"use strict";
(() => {
var exports = {};
exports.id = 9603;
exports.ids = [9603];
exports.modules = {

/***/ 4823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Search),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "@material-ui/core"
var core_ = __webpack_require__(1731);
// EXTERNAL MODULE: external "@material-ui/icons/Cancel"
var Cancel_ = __webpack_require__(3772);
var Cancel_default = /*#__PURE__*/__webpack_require__.n(Cancel_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/Layout.js
var Layout = __webpack_require__(4941);
// EXTERNAL MODULE: ./utils/db.js
var db = __webpack_require__(6420);
// EXTERNAL MODULE: ./models/Product.js
var Product = __webpack_require__(1908);
// EXTERNAL MODULE: ./utils/styles.js
var styles = __webpack_require__(530);
// EXTERNAL MODULE: ./components/ProductItem.js
var ProductItem = __webpack_require__(4486);
// EXTERNAL MODULE: ./utils/Store.js
var Store = __webpack_require__(2236);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./node_modules/@material-ui/lab/esm/Rating/Rating.js + 41 modules
var Rating = __webpack_require__(7831);
;// CONCATENATED MODULE: external "@material-ui/lab"
const lab_namespaceObject = require("@material-ui/lab");
;// CONCATENATED MODULE: ./pages/search.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const PAGE_SIZE = 3;
const prices = [{
  name: '$1 to $50',
  value: '1-50'
}, {
  name: '$51 to $200',
  value: '51-200'
}, {
  name: '$201 to $1000',
  value: '201-1000'
}];
const ratings = [1, 2, 3, 4, 5];
function Search(props) {
  const classes = (0,styles/* default */.Z)();
  const router = (0,router_.useRouter)();
  const {
    query = 'all',
    category = 'all',
    brand = 'all',
    price = 'all',
    rating = 'all',
    sort = 'featured'
  } = router.query;
  const {
    products,
    countProducts,
    categories,
    brands,
    pages
  } = props;

  const filterSearch = ({
    page,
    category,
    brand,
    sort,
    min,
    max,
    searchQuery,
    price,
    rating
  }) => {
    const path = router.pathname;
    const {
      query
    } = router;
    if (page) query.page = page;
    if (searchQuery) query.searchQuery = searchQuery;
    if (sort) query.sort = sort;
    if (category) query.category = category;
    if (brand) query.brand = brand;
    if (price) query.price = price;
    if (rating) query.rating = rating;
    if (min) query.min ? query.min : query.min === 0 ? 0 : min;
    if (max) query.max ? query.max : query.max === 0 ? 0 : max;
    router.push({
      pathname: path,
      query: query
    });
  };

  const categoryHandler = e => {
    filterSearch({
      category: e.target.value
    });
  };

  const pageHandler = (e, page) => {
    filterSearch({
      page
    });
  };

  const brandHandler = e => {
    filterSearch({
      brand: e.target.value
    });
  };

  const sortHandler = e => {
    filterSearch({
      sort: e.target.value
    });
  };

  const priceHandler = e => {
    filterSearch({
      price: e.target.value
    });
  };

  const ratingHandler = e => {
    filterSearch({
      rating: e.target.value
    });
  };

  const {
    state,
    dispatch
  } = (0,external_react_.useContext)(Store/* Store */.y);

  const addToCartHandler = async product => {
    const existItem = state.cart.cartItems.find(x => x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const {
      data
    } = await external_axios_default().get(`/api/products/${product._id}`);

    if (data.countInStock < quantity) {
      window.alert('Sorry. Product is out of stock');
      return;
    }

    dispatch({
      type: 'CART_ADD_ITEM',
      payload: _objectSpread(_objectSpread({}, product), {}, {
        quantity
      })
    });
    router.push('/cart');
  };

  return /*#__PURE__*/jsx_runtime_.jsx(Layout/* default */.Z, {
    title: "Search",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Grid, {
      className: classes.mt1,
      container: true,
      spacing: 1,
      children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
        item: true,
        md: 3,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.List, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(core_.ListItem, {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Box, {
              className: classes.fullWidth,
              children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
                children: "Categories"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Select, {
                fullWidth: true,
                value: category,
                onChange: categoryHandler,
                children: [/*#__PURE__*/jsx_runtime_.jsx(core_.MenuItem, {
                  value: "all",
                  children: "All"
                }), categories && categories.map(category => /*#__PURE__*/jsx_runtime_.jsx(core_.MenuItem, {
                  value: category,
                  children: category
                }, category))]
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(core_.ListItem, {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Box, {
              className: classes.fullWidth,
              children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
                children: "Brands"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Select, {
                value: brand,
                onChange: brandHandler,
                fullWidth: true,
                children: [/*#__PURE__*/jsx_runtime_.jsx(core_.MenuItem, {
                  value: "all",
                  children: "All"
                }), brands && brands.map(brand => /*#__PURE__*/jsx_runtime_.jsx(core_.MenuItem, {
                  value: brand,
                  children: brand
                }, brand))]
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(core_.ListItem, {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Box, {
              className: classes.fullWidth,
              children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
                children: "Prices"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Select, {
                value: price,
                onChange: priceHandler,
                fullWidth: true,
                children: [/*#__PURE__*/jsx_runtime_.jsx(core_.MenuItem, {
                  value: "all",
                  children: "All"
                }), prices.map(price => /*#__PURE__*/jsx_runtime_.jsx(core_.MenuItem, {
                  value: price.value,
                  children: price.name
                }, price.value))]
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(core_.ListItem, {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Box, {
              className: classes.fullWidth,
              children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
                children: "Ratings"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Select, {
                value: rating,
                onChange: ratingHandler,
                fullWidth: true,
                children: [/*#__PURE__*/jsx_runtime_.jsx(core_.MenuItem, {
                  value: "all",
                  children: "All"
                }), ratings.map(rating => /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.MenuItem, {
                  dispaly: "flex",
                  value: rating,
                  children: [/*#__PURE__*/jsx_runtime_.jsx(Rating/* default */.Z, {
                    value: rating,
                    readOnly: true
                  }), /*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
                    component: "span",
                    children: "& Up"
                  })]
                }, rating))]
              })]
            })
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Grid, {
        item: true,
        md: 9,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Grid, {
          container: true,
          justifyContent: "space-between",
          alignItems: "center",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Grid, {
            item: true,
            children: [products.length === 0 ? 'No' : countProducts, " Results", query !== 'all' && query !== '' && ' : ' + query, category !== 'all' && ' : ' + category, brand !== 'all' && ' : ' + brand, price !== 'all' && ' : Price ' + price, rating !== 'all' && ' : Rating ' + rating + ' & up', query !== 'all' && query !== '' || category !== 'all' || brand !== 'all' || rating !== 'all' || price !== 'all' ? /*#__PURE__*/jsx_runtime_.jsx(core_.Button, {
              onClick: () => router.push('/search'),
              children: /*#__PURE__*/jsx_runtime_.jsx((Cancel_default()), {})
            }) : null]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Grid, {
            item: true,
            children: [/*#__PURE__*/jsx_runtime_.jsx(core_.Typography, {
              component: "span",
              className: classes.sort,
              children: "Sort by"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(core_.Select, {
              value: sort,
              onChange: sortHandler,
              children: [/*#__PURE__*/jsx_runtime_.jsx(core_.MenuItem, {
                value: "featured",
                children: "Featured"
              }), /*#__PURE__*/jsx_runtime_.jsx(core_.MenuItem, {
                value: "lowest",
                children: "Price: Low to High"
              }), /*#__PURE__*/jsx_runtime_.jsx(core_.MenuItem, {
                value: "highest",
                children: "Price: High to Low"
              }), /*#__PURE__*/jsx_runtime_.jsx(core_.MenuItem, {
                value: "toprated",
                children: "Customer Reviews"
              }), /*#__PURE__*/jsx_runtime_.jsx(core_.MenuItem, {
                value: "newest",
                children: "Newest Arrivals"
              })]
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
          className: classes.mt1,
          container: true,
          spacing: 3,
          children: products.map(product => /*#__PURE__*/jsx_runtime_.jsx(core_.Grid, {
            item: true,
            md: 4,
            children: /*#__PURE__*/jsx_runtime_.jsx(ProductItem/* default */.Z, {
              product: product,
              addToCartHandler: addToCartHandler
            })
          }, product.name))
        }), /*#__PURE__*/jsx_runtime_.jsx(lab_namespaceObject.Pagination, {
          className: classes.mt1,
          defaultPage: parseInt(query.page || '1'),
          count: pages,
          onChange: pageHandler
        })]
      })]
    })
  });
}
async function getServerSideProps({
  query
}) {
  await db/* default.connect */.Z.connect();
  const pageSize = query.pageSize || PAGE_SIZE;
  const page = query.page || 1;
  const category = query.category || '';
  const brand = query.brand || '';
  const price = query.price || '';
  const rating = query.rating || '';
  const sort = query.sort || '';
  const searchQuery = query.query || '';
  const queryFilter = searchQuery && searchQuery !== 'all' ? {
    name: {
      $regex: searchQuery,
      $options: 'i'
    }
  } : {};
  const categoryFilter = category && category !== 'all' ? {
    category
  } : {};
  const brandFilter = brand && brand !== 'all' ? {
    brand
  } : {};
  const ratingFilter = rating && rating !== 'all' ? {
    rating: {
      $gte: Number(rating)
    }
  } : {}; // 10-50

  const priceFilter = price && price !== 'all' ? {
    price: {
      $gte: Number(price.split('-')[0]),
      $lte: Number(price.split('-')[1])
    }
  } : {};
  const order = sort === 'featured' ? {
    featured: -1
  } : sort === 'lowest' ? {
    price: 1
  } : sort === 'highest' ? {
    price: -1
  } : sort === 'toprated' ? {
    rating: -1
  } : sort === 'newest' ? {
    createdAt: -1
  } : {
    _id: -1
  };
  const categories = await Product/* default.find */.Z.find().distinct('category');
  const brands = await Product/* default.find */.Z.find().distinct('brand');
  const productDocs = await Product/* default.find */.Z.find(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, queryFilter), categoryFilter), priceFilter), brandFilter), ratingFilter), '-reviews').sort(order).skip(pageSize * (page - 1)).limit(pageSize).lean();
  const countProducts = await Product/* default.countDocuments */.Z.countDocuments(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, queryFilter), categoryFilter), priceFilter), brandFilter), ratingFilter));
  await db/* default.disconnect */.Z.disconnect();
  const products = productDocs.map(db/* default.convertDocToObj */.Z.convertDocToObj);
  return {
    props: {
      products,
      countProducts,
      page,
      pages: Math.ceil(countProducts / pageSize),
      categories,
      brands
    }
  };
}

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

/***/ 4047:
/***/ ((module) => {

module.exports = require("@material-ui/styles");

/***/ }),

/***/ 9137:
/***/ ((module) => {

module.exports = require("@material-ui/system");

/***/ }),

/***/ 2958:
/***/ ((module) => {

module.exports = require("@material-ui/utils");

/***/ }),

/***/ 2376:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 3536:
/***/ ((module) => {

module.exports = require("clsx");

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

/***/ 4229:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 2268:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1664,7831,6420,2236,3001,1542,1908,4486], () => (__webpack_exec__(4823)));
module.exports = __webpack_exports__;

})();