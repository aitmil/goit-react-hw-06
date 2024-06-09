import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    name: "",
  },
  reducers: {
    setStatusFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setStatusFilter } = filterSlice.actions;

export const selectFilter = (state) => state.filters.name;

export const filtersReducer = filterSlice.reducer;
