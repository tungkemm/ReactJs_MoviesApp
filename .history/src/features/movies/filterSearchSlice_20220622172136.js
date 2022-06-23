import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listSearch: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    listSearchHistory: (state, action) => {
      if (state.listSearch.includes(action.payload)) {
        return state.listSearch.unshift(action.payload) 
      }
      else {
        return state.listSearch
      }
    },
  },
});

export const { listSearchHistory } = filterSlice.actions;

export default filterSlice.reducer;
