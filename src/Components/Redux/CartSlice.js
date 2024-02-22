import {createSlice } from "@reduxjs/toolkit";
const cartState ={
    cart : []
}
export const cartSlice = createSlice({
    name: 'cart',
    initialState:cartState,
    reducers:{
        addToCart:(state,action)=>{
            state.cart.push(action.payload);
        }
    }
})