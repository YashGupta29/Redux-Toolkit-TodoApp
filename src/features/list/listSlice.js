import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
  name: "list",
  initialState: {
    lists: [],
  },
  reducers: {
    add: (state, action) => {
      state.lists = [action.payload, ...state.lists];
    },
    del: (state, action) => {
      state.lists = state.lists.filter((list) => list.id !== action.payload);
    },
  },
});

export const { add, del } = listSlice.actions;

export default listSlice.reducer;
