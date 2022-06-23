import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  password: ""
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    dataLogin: (state, action) => {
      state.username = action.payload.username;
      state.password = action.payload.password
    },
  },
});

export const { dataLogin } = loginSlice.actions;

export default loginSlice.reducer;
