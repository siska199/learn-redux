import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = []

export const userSlice = createSlice({
  name: "user",
  initialState: { value: initialStateValue },
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
