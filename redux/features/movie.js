import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchMovies = createAsyncThunk("movies/fetchMovies", async (param) => {
  console.log("param: ", param);
  let res = await fetch("https://fakestoreapi.com/products");
  res = await res.json();
  return res;
});

const initialStateValue = [];
const movieSlice = createSlice({
  name: "movie",
  initialState: { value: initialStateValue },
  reducers: {
    //Logic behind redux
    getMovie: (state, action) => {},
  },
  extraReducers: {
    [fetchMovies.pending]: () => {
      console.log("pending");
    },
    [fetchMovies.fulfilled]: (state, action) => {
      console.log("fetch success");
      return { ...state, value: action.payload };
    },
    [fetchMovies.rejected]: () => {
      console.log("rejected");
    },
  },
});

export default movieSlice.reducer;

export const { getMovie } = movieSlice.actions;

export { fetchMovies };
