import { configureStore } from "@reduxjs/toolkit";
import Slice1 from "./Store - slices/slice-1"
import Slice_2 from "./Store - slices/slice-2"
import Slice_3 from "./Store - slices/slice-3"

export const Store=configureStore({
    reducer:{
        Adult: Slice1,
        Bambino:Slice_2,
        Neonato:Slice_3
    }
})
export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch
