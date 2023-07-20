import { createSlice } from "@reduxjs/toolkit";

const universitiesReducer = createSlice({
  name: "universitiesReducer",
  initialState: {
    input: "",
    selectedCity: [],
  },
  reducers: {
    setInput(state, action) {
      state.input = action.payload;
    },
    setSelectedCity(state, action) {
      state.selectedCity = action.payload;
    },
  },
});

export const { setSelectedCity, setInput } = universitiesReducer.actions;
export default universitiesReducer.reducer;
