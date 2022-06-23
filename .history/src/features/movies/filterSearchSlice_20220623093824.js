import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listSearch: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    listSearchHistory: (state, action) => {
      state.listSearch.unshift(action.payload);
    },
    deleteItemSearchHistory: (state, action) => {
      const newState = state.listSearch.filter(
        (data) => data.id !== action.payload
      );
      state.listSearch = newState;
    },
  },
});

export const { listSearchHistory, deleteItemSearchHistory } =
  filterSlice.actions;

export default filterSlice.reducer;
