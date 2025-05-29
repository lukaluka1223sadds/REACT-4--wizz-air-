import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const Slice_3=createSlice({
    name:"Slice-3",
    initialState:0,
    reducers:{
        ArrMinPlus(state , action:PayloadAction<number>){
              return action.payload
        }
    }
})

export const {ArrMinPlus} = Slice_3.actions
export default Slice_3.reducer