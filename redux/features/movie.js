import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = [];
const movieSlice = createSlice({
  name: "movie",
  initialState: { value: initialStateValue },
  reducers: {
    //Logic behind redux
    getMovie: (state, action) => {},
  },
});

export default movieSlice.reducer;

export const { getMovie } = movieSlice.actions;
