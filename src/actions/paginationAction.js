import { PAGINATION_LAST,PAGINATION_START,PAGINATION_PREV,PAGINATION_NEXT } from "./types";
//for moving to next page 
export const moveNext = (items, product) => (dispatch) =>  {
    
}
//prev
export const movePrev = (items, product) => (dispatch) =>  {
    
}
//last 
export const moveLast = (items, product) => (dispatch) =>  {
    
}
//first page
export const moveFirst = (items, product) => (dispatch) =>  {
    
}









export const addToCart = (items, product) => (dispatch) => {
  const cartItems = items.slice();
  let productAlreadyInCart = false;

  cartItems.forEach((cp) => {
    if (cp.id === product.id) {
      cp.count += 1;
      productAlreadyInCart = true;
    }
  });

  if (!productAlreadyInCart) {
    cartItems.push({ ...product, count: 1 });
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  dispatch({ type: ADD_TO_CART, payload: { cartItems } });
};

export const removeFromCart = (items, product) => (dispatch) => {
  const cartItems = items.slice().filter((a) => a.id !== product.id);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
};