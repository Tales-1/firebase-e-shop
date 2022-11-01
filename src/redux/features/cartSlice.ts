import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";


interface Item {
    name?:string
    description?:string
    price?:number
    type?:string
    url?:string[]
    id?:string
}


type State = {
    shoppingCart:Item[]
    total:number

}

const initialState:State = {
    shoppingCart:[],
    total:0
}

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action) => {
            state.shoppingCart.push(action.payload)
            state.total+=action.payload.price
        },
        removeFromCart:(state,action) => { 
            state.shoppingCart = state.shoppingCart.filter(item => item.id !== action.payload.id)
            state.total = Math.round((state.total - action.payload.price) * 100) /100

        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions

export const selectCart = (state:RootState) => state.cart.shoppingCart
export const selectTotal = (state:RootState) => state.cart.total

export default cartSlice.reducer