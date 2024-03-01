import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"app",
    initialState:{
        isMenuFlag:true,
        isThemeDark:false,
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuFlag = !state.isMenuFlag;
        },
        closeMenu:(state)=>{
            state.isMenuFlag = false;
        }
    }
});

export const {toggleMenu , closeMenu} = appSlice.actions;
export default appSlice.reducer;