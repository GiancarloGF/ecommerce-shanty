import Cookies from "js-cookie";
import { createContext, useReducer } from "react";

console.log(typeof Cookies.get("cartItems"));
export const Store = createContext();

const initialState = {
  darkMode: Cookies.get("darkMode") === "ON" ? true : false,
  cart: {
    cartItems: Cookies.get("cartItems")? JSON.parse(Cookies.get("cartItems")) : []
  },
  userInfo: Cookies.get("userInfo")? JSON.parse(Cookies.get("userInfo")): null
};

function reducer(state, action) {
  switch (action.type) {
    case "DARK_MODE_ON":
      return { ...state, darkMode: true };
    case "DARK_MODE_OFF":
      return { ...state, darkMode: false };

    case "CART_ADD_ITEM": {
      const newItem = action.payload; // New product to adding.
      const existItem = state.cart.cartItems.find(
        //Returns the product if it exist in the cartItems. Otherwise, undefined is returned.
        (item) => item._id === newItem._id
      );
      //CartItems is updated.
      const cartItems = existItem
        ? //If the item already exist in cartItems, then the item is  updated only (not added).
          state.cart.cartItems.map((item) =>
            item.name === existItem.name ? newItem : item
          )
        : //If the item not exist in cartItems, then the item is added and cartItem is updated (increase its length)
          [...state.cart.cartItems, newItem];

      Cookies.set("cartItems", JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } }; //Updated state.
    }

    case "CART_REMOVE_ITEM": {
      const cartItems = state.cart.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
      Cookies.set("cartItems", JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    }

    case "USER_LOGIN":
      return { ...state, userInfo: action.payload };
      
    case "USER_LOGOUT":
      return { ...state, userInfo: null, cart: { cartItems: [] } };

    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
