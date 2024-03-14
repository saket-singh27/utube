import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name:"chat",
    initialState:{
        messages:[]
    },
    reducers:{
        addChats:(state,action)=>{
            state.messages.splice(20,1);
            state.messages.unshift(action.payload);
        }
    }
});

export default chatSlice.reducer;
export const {addChats} = chatSlice.actions;