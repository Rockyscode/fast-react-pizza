import { createSlice, createSelector } from '@reduxjs/toolkit'

const initialState = {
    cart: [],
}

const cartSlice = createSlice(
    {
        name: 'cart',
        initialState,
        reducers: {
            addItem: (state, action) => {
                //payload = newItem;
                state.cart.push(action.payload);
             },
            deleteItem: (state, action) => {
               state.cart = state.cart.filter((item)=> item.pizzaId !== action.payload)
            },
            increaseItemQuantity: (state, action) => {
                //payload = pizzaId
                const item = state.cart.find((item) => item.pizzaId === action.payload);
                item.quantity++;
                item.totalPrice = item.quantity * item.unitPrice;
            },
            decreaseItemQuantity: (state, action) => {
                //payload = pizzaId
                const item = state.cart.find((item) => item.pizzaId === action.payload);
                item.quantity--;
                item.totalPrice = item.quantity * item.unitPrice;
            },
            clearCart: (state) => {
                state.cart = []
            },     
        }
    }
)

export const {addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearCart} = cartSlice.actions;

export default cartSlice.reducer;

export const getUsername = (state) => state.user.username;

// Create a selector function using createSelector
export const getCart = createSelector(
  // First argument: an array of input selectors
  [state => state.cart],
  // Second argument: a function that receives the input selectors' results
  // and returns the derived data
  cart => cart
);

// Create a selector function using createSelector
export const getTotalCartQuantity = createSelector(
  // First argument: an array of input selectors
  [getCart],
  // Second argument: a function that receives the input selectors' results
  // and returns the derived data
  cart => cart.reduce((sum, item) => sum + item.quantity, 0)
);

// Create a selector function using createSelector
export const getTotalCartPrice = createSelector(
  // First argument: an array of input selectors
  [getCart],
  // Second argument: a function that receives the input selectors' results
  // and returns the derived data
  cart => cart.reduce((sum, item) => sum + item.totalPrice, 0)
);

// Create a selector function using createSelector
export const getCurrentQuantityById = id => createSelector(
  // First argument: an array of input selectors
  [getCart],
  // Second argument: a function that receives the input selectors' results
  // and returns the derived data
  cart => cart.find((item) => item.pizzaId === id )?.quantity ?? 0
);
