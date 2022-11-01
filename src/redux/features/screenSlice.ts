/* eslint-disable */
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";

interface State {
    viewportSizes:{
        mobile:boolean,
        tablet:boolean,
        desktop:boolean
    }
    styles:string
}
 
const initialState:State = {
    viewportSizes:{
        mobile:window.innerWidth < 768,
        tablet:window.innerWidth > 768 && window.innerWidth < 1030,
        desktop:window.innerWidth > 1030
    },
    styles:"before:absolute before:inset-0 before:bg-black before:opacity-40"
}

export const screenSlice = createSlice({
    name:"screen",
    initialState,
    reducers:{
        setWidth:(state,action) => {
            state.viewportSizes.mobile = action.payload < 768
            state.viewportSizes.tablet = action.payload > 768 && action.payload < 1030,
            state.viewportSizes.desktop = action.payload > 1030
        }
    }
})

export const { setWidth } = screenSlice.actions

export const selectViewport = (state:RootState) => state.screen.viewportSizes
export const selectOverlay = (state:RootState) => state.screen.styles

export default screenSlice.reducer