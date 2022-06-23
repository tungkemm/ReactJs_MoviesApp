import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listSearch: [
    {
      item: []
    }
  ],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    listSearchHistory: (state, action) => {
      state.listSearch.unshift(action.payload) 
    },
  },
});

export const { listSearchHistory } = filterSlice.actions;

export default filterSlice.reducer;
