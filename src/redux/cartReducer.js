import { createSlice } from "@reduxjs/toolkit";


const cartReducer = createSlice({
    name: 'cartReducer',
    initialState: {
        cartItems: []
    },
    reducers: {
        rdx_add_item_to_cart: (state, action) => {
            const product = action.payload;

            const existItem = state.cartItems.find(cartItem => cartItem.id === product.id)

            if (!existItem) {
                const newProduct = { ...product, quantity: 1 }

                state.cartItems.push(newProduct);
            } else {

                state.cartItems = state.cartItems.map(cartItem => {
                    if (cartItem.id === product.id) {
                        cartItem.quantity += 1;
                    }
                    return cartItem;
                })
            }

        },
        rdx_remove_item_from_cart: (state, action) => {
            const id = action.payload;

            state.cartItems = state.cartItems.filter(cartItem => cartItem.id !== id);
        },
        rdx_clear_cart: (state) => {
            state.cartItems = [];
        },
    }
})


export default cartReducer.reducer;

export const { rdx_add_item_to_cart, rdx_remove_item_from_cart, rdx_clear_cart } = cartReducer.actions;

console.log('cartReducer', cartReducer);