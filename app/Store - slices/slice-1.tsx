import { createSlice, PayloadAction} from "@reduxjs/toolkit";

const Slice_1=createSlice({
    name:"Slice1",
    initialState:1,
    reducers:{
        aggiungiAdulto(state , action : PayloadAction<number> ){
              return action.payload
        }
    }
})
export default Slice_1.reducer
export const {aggiungiAdulto} = Slice_1.actions
