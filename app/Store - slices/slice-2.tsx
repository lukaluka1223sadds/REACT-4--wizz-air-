import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const Slice_2=createSlice({
    name:"Slice_2",
    initialState:0,
    reducers:{
        AddMinus(state , action:PayloadAction<number>){
            return action.payload
        }
    }
})

export default Slice_2.reducer
export const { AddMinus} = Slice_2.actions