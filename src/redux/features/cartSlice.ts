import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";


interface Item {
    name?:string
    description?:string
    price?:number
    type?:string
    url?:string[]
    id?:string
    qty?:number
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
            const {price, qty,id} = action.payload
            if(state.shoppingCart.some(item => item.id === id)){
                state.shoppingCart.forEach((item,index) => {
                    if(item.id === id){
                        let newQty = item.qty + qty
                        state.shoppingCart[index] = {...item,qty:newQty}
                    }
                })
            } else { state.shoppingCart.push(action.payload) }
            let total = price * qty
            console.log(total)
            state.total +=total
            console.log(state.total)  
        },
        removeFromCart:(state,action) => { 
            const {price, qty} = action.payload
            let total =  price * qty
            state.shoppingCart = state.shoppingCart.filter(item => item.id !== action.payload.id)
            state.total = Math.round((state.total- total) * 100) /100
        },
        increment:(state,action) => {
            const {id, price} = action.payload
            let currIndex = state.shoppingCart.findIndex(item => item.id === id)
            let finditem = state.shoppingCart.find(item => item.id === id)
            let newQty = finditem!.qty! + 1
            let updatedItem = {...finditem, qty:newQty }
            state.total = Math.round((state.total+price) * 100) / 100
            state.shoppingCart[currIndex] = updatedItem
        },
        decrement:(state,action) => {
            const {id,price} = action.payload
            let currIndex = state.shoppingCart.findIndex(item => item.id === id)
            let finditem = state.shoppingCart.find(item => item.id === id)
            let newQty = finditem!.qty! - 1
            if(newQty === 0){
                state.shoppingCart.splice(currIndex,1)
            } else {
                let updatedItem = {...finditem, qty:newQty }
                state.shoppingCart[currIndex] = updatedItem
            }
            state.total = Math.round((state.total-price) * 100) / 100
        }
    }
})

export const { addToCart, removeFromCart,increment, decrement } = cartSlice.actions

export const selectCart = (state:RootState) => state.cart.shoppingCart
export const selectTotal = (state:RootState) => state.cart.total

export default cartSlice.reducer