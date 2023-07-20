import { createSlice } from "@reduxjs/toolkit";

const departmentsReducer = createSlice({
  name: "departmentsReducer",
  initialState: {
    input: "",
  },
  reducers: {
    setInput(state, action) {
      state.input = action.payload;
    },
  },
});

export const { setInput } = departmentsReducer.actions;
export default departmentsReducer.reducer;
