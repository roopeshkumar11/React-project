
import { configureStore } from "@reduxjs/toolkit";
import counterslice from "./Counter";
import privactsilce from "./privacy";

const counterstore=configureStore({reducer:{
    counter:counterslice.reducer,
    privacy:privactsilce.reducer
}});

export default counterstore


