import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { filterSearch } = filterSlice.actions;

export default filterSlice.reducer;
