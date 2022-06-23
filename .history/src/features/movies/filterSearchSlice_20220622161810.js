import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  listSearch : []
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    listSearchHistory: (state, action) => {
      state.listSearch.unshift(action.payload) // them ptu vao dau mang
    }
  },
});

export const { listSearchHistory } = filterSlice.actions;

export default filterSlice.reducer;
