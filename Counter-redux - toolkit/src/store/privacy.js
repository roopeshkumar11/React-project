import { createSlice } from "@reduxjs/toolkit"
const privactsilce=createSlice({
    name:"privacy",
    initialState:false,
    reducers:{
        toggle:(state)=>{
          return  state=!state
        }
    }
})
export const privacyaction=privactsilce.actions
export default privactsilce