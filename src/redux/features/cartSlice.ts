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

}

const initialState:State = {
    shoppingCart:[],
}

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action) => {
            state.shoppingCart.push(action.payload)
        }
    }
})

export const { addToCart } = cartSlice.actions

export const selectCart = (state:RootState) => state.cart.shoppingCart

export default cartSlice.reducer