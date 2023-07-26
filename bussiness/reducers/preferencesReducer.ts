import { createSlice } from "@reduxjs/toolkit";

const preferencesReducer = createSlice({
  name: "preferencesReducer",
  initialState: {
    selectedPreferencesListId: "",
  },
  reducers: {
    setSelectedPreferencesListId(state, action) {
      state.selectedPreferencesListId = action.payload;
    },
  },
});

export const { setSelectedPreferencesListId } = preferencesReducer.actions;
export default preferencesReducer.reducer;
