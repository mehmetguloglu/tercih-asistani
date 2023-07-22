import { createSlice } from "@reduxjs/toolkit";

const preferencesReducer = createSlice({
  name: "preferencesReducer",
  initialState: {
    preferencesId: [],
  },
  reducers: {
    setPreferencesId(state, action) {
      state.preferencesId = action.payload;
    },
  },
});

export const { setPreferencesId } = preferencesReducer.actions;
export default preferencesReducer.reducer;
