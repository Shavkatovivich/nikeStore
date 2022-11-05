import { createSlice } from "@reduxjs/toolkit";
// import Cart from "../Components/Cart";


const initialState = {
    cartState: false,
    // cartItems: [],
}

console.log(initialState.cartState);

const CartSlice = createSlice({
    initialState,
    name: "cart",
    reducers: {
        setOpenCart: (action, state) => {
            state.cartState = action.payload.cartState;
        },
        setCloseCart: (action, state) => {
            state.cartState = action.payload.cartState;
        },
        setAddItemToCart: (action, state) => {
            // state.cartItems.push[(action.payload)]
        } 
    }
})

export const {setOpenCart, setCloseCart} = CartSlice.actions;

export const selectCarState = (state) => state.cart.cartState;

export default CartSlice.reducer;