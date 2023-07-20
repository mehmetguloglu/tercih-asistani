import { createSlice } from "@reduxjs/toolkit";

const universityDetailsReducer = createSlice({
  name: "universityDetailsReducer",
  initialState: {
    universityDetailsFilterModalVisible: false,
    filterPointType: ["", "", "", ""],
    filterPoints: [0, 500],
    filterRanking: [0, 10000000],
    selectedUniversity: {},
    input: "",
  },
  reducers: {
    setUniversityDetailsFilterModalVisible(state, action) {
      state.universityDetailsFilterModalVisible = action.payload;
    },
    setFilterPointType(state, action) {
      state.filterPointType = action.payload;
    },
    setFilterPoints(state, action) {
      state.filterPoints = action.payload;
    },
    setFilterRanking(state, action) {
      state.filterRanking = action.payload;
    },
    setSelectedUniversity(state, action) {
      state.selectedUniversity = action.payload;
    },
    setInput(state, action) {
      state.input = action.payload;
    },
  },
});

export const {
  setUniversityDetailsFilterModalVisible,
  setFilterPointType,
  setFilterPoints,
  setFilterRanking,
  setSelectedUniversity,
  setInput,
} = universityDetailsReducer.actions;
export default universityDetailsReducer.reducer;
