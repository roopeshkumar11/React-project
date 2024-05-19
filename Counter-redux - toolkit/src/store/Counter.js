import { createSlice } from "@reduxjs/toolkit";
const counterslice=createSlice({
    name:"counter",
    initialState:{counterval:0},
    reducers:
    {increment:(state)=>{
        state.counterval++;
    },

    decerement:(state)=>{
        state.counterval--;
    },
    add:(state,action)=>{
        state.counterval+=Number(action.payload.num)
    },
    sub:(state,action)=>{
        state.counterval-=Number(action.payload.num)
    }

}
})
export const counteraction=counterslice.actions
export default counterslice