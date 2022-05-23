import { createSlice } from "@reduxjs/toolkit";

export const catSlice= createSlice({
    name:"cats",
    initialState:{
        cats:[],
        isLoading:false
    },
    reducers:{
        //action
        getCats : (state,action)=>{
            
        }
    }
})

export default catSlice.reducer
export const {getCats} = catSlice.actions
