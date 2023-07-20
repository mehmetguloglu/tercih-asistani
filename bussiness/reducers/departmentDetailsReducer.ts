import { createSlice } from "@reduxjs/toolkit";

const departmentDetailsReducer = createSlice({
  name: "departmentDetailsReducer",
  initialState: {
    selectedCity: [],
    input: "",
    filterPoint: [0, 500],
    filterRanking: [0, 10000000],
    selectedDepartment: {},
  },
  reducers: {
    setSelectedCity(state, action) {
      state.selectedCity = action.payload;
    },
    setInput(state, action) {
      state.input = action.payload;
    },
    setFilterPoint(state, action) {
      state.filterPoint = action.payload;
    },
    setFilterRanking(state, action) {
      state.filterRanking = action.payload;
    },
    setSelectedDepartment(state, action) {
      state.selectedDepartment = action.payload;
    },
  },
});

export const {
  setSelectedCity,
  setInput,
  setFilterPoint,
  setFilterRanking,
  setSelectedDepartment,
} = departmentDetailsReducer.actions;
export default departmentDetailsReducer.reducer;
