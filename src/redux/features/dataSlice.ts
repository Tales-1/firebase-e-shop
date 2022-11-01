import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

import { getFirestore, collection, getDocs } from "firebase/firestore"
import { initializeApp } from "firebase/app";

export const firebaseConfig = {
    apiKey: "AIzaSyAyzZpxTRH6K2kPwJoJIc98pIbzDf3Vfno",
    authDomain: "fir-shop-app-24b54.firebaseapp.com",
    projectId: "fir-shop-app-24b54",
    storageBucket: "fir-shop-app-24b54.appspot.com",
    messagingSenderId: "312518196401",
    appId: "1:312518196401:web:9804694fcb8d3bf9d03690"
}

const app = initializeApp(firebaseConfig);
const db = getFirestore()
const colRef = collection(db,"products")

export const fetchData = createAsyncThunk("data/fetchItems", async() => {
    const snapshot = await getDocs(colRef)
    const products:Object[] = []
        snapshot.docs.forEach((doc)=>{
          products.push({...doc.data(),id:doc.id})
        })
    return products
})



interface Item {
    name?:string
    description?:string
    price?:number
    type?:string
    url?:string[]
    id?:string
}


type State = {
    products:Item[],
    filtered:Item[],
    currentItem:Item
    status:"idle" | "loading" | "fulfilled" | "rejected"
    error: null | unknown
}

const initialState:State = {
    products:[],
    currentItem:{},
    filtered:[],
    status:"idle",
    error:null
}


export const dataSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
        filter:(state,action) => {
           state.filtered = state.products.filter((item) => {
            if(item.type !== action.payload) return false
            
            return item
           })
        },
        findCurrent:(state,action) => { 
            let arr = state.filtered.filter((item) => {
                return item.id === action.payload
            })
            state.currentItem = arr[0]
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = "loading"
            })
            .addCase(fetchData.fulfilled, (state,action) => {
                state.status = "fulfilled"
                state.products = action.payload
            })
            .addCase(fetchData.rejected, (state,action) => {
                state.status = "rejected"
                state.error = action.error.message
            })
    }
})

export const { filter, findCurrent } = dataSlice.actions

export const selectStatus = (state:RootState) => state.fetcher.status
export const selectData = (state:RootState) => state.fetcher.products
export const selectFiltered = (state:RootState) => state.fetcher.filtered
export const selectCurrentItem = (state:RootState) => state.fetcher.currentItem
export const selectError = (state:RootState) => state.fetcher.error

export default dataSlice.reducer