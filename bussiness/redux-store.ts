import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import universityDetailsReducer from "./reducers/universityDetailsReducer";
import departmentDetailsReducer from "./reducers/departmentDetailsReducer";
import universitiesReducer from "./reducers/universitiesReducer";
import departmentsReducer from "./reducers/departmentsReducer";
import preferencesReducer from "./reducers/preferencesReducer";

export const store = configureStore({
  reducer: {
    universityDetailsReducer,
    departmentDetailsReducer,
    universitiesReducer,
    departmentsReducer,
    preferencesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
