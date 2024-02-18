import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"app",
    initialState:{
        isMenuFlag:true,
    },
    reducers:{
        toggleMenu:(state)=>{
            state.isMenuFlag = !state.isMenuFlag;
        }
    }
});

export const {toggleMenu} = appSlice.actions;
export default appSlice.reducer;