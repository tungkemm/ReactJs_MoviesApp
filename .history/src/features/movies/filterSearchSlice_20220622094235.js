import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  listSearch : []
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterSearch: (state, action) => {
      state.search = action.payload;
    },
    listSearchHistory: (state, action) => {
      state.listSearch.push(action.payload)
    }
  },
});

export const { filterSearch, listSearchHistory } = filterSlice.actions;

export default filterSlice.reducer;
