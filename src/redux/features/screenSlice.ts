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
    translate:string
    translateCart:string
    msg:string
    overlayHidden:boolean
    hamburgerVisible:boolean
    // type:string

}
 
const initialState:State = {
    viewportSizes:{
        mobile:window.innerWidth < 768,
        tablet:window.innerWidth > 768 && window.innerWidth < 1030,
        desktop:window.innerWidth > 1030
    },
    styles:"before:absolute before:inset-0 before:opacity-30",
    translate:"-translate-y-full",
    translateCart:"translate-x-full",
    msg:"empty",
    overlayHidden:true,
    hamburgerVisible:false
    // type:"",
}

export const screenSlice = createSlice({
    name:"screen",
    initialState,
    reducers:{
        setWidth:(state,action) => {
            state.viewportSizes.mobile = action.payload < 768
            state.viewportSizes.tablet = action.payload > 768 && action.payload < 1030,
            state.viewportSizes.desktop = action.payload > 1030
        },
        showNotification:(state, action) => {
            // state.type = action.payload.type
            state.msg = action.payload
            state.translate = "translate-y-0"
        },
        hideNotification:(state) => {
            state.translate ="-translate-y-full"
        },
        showCart:(state) => {
            state.translateCart = "translate-x-0"
            state.overlayHidden = false
        }, 
        hideCart:(state) => {
            state.translateCart = "translate-x-full"
            state.overlayHidden = true
        },
        toggleHamburger:(state,action) => {
            const type = action.payload
            if(type === "CLOSE"){
                state.hamburgerVisible = false
            } else if (type ==="OPEN"){
                state.hamburgerVisible = true
            } else { type ==="CLOSE"}
        }
    }
})

export const { setWidth, showNotification, hideNotification, hideCart, showCart, toggleHamburger} = screenSlice.actions

export const selectViewport = (state:RootState) => state.screen.viewportSizes
export const selectTranslate = (state:RootState) => state.screen.translate
export const selectOverlay = (state:RootState) => state.screen.styles
export const selectMsg = (state:RootState) => state.screen.msg
export const selectTranslateCart = (state:RootState) => state.screen.translateCart
export const selectOverlayHidden = (state:RootState) => state.screen.overlayHidden
export const selectHamburgerVisible = (state:RootState) => state.screen.hamburgerVisible
// export const selectType = (state:RootState) => state.screen.type

export default screenSlice.reducer