import { createSlice } from "@reduxjs/toolkit";

const preferencesReducer = createSlice({
  name: "preferencesReducer",
  initialState: {
    input: "",
  },
  reducers: {
    setInput(state, action) {
      state.input = action.payload;
    },
  },
});

export const { setInput } = preferencesReducer.actions;
export default preferencesReducer.reducer;
