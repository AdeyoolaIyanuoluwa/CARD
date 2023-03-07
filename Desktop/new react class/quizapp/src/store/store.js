import { configureStore } from "@reduxjs/toolkit";
import { correctReducers } from "../slices/correctSlice";
import { wrongreducer } from "../slices/wrongSlice";

const store = configureStore({
    reducer:{
        correct: correctReducers,
        wrong: wrongreducer
    }
})

export default store