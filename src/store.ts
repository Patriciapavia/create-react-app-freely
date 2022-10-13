import tripsReducer from "./feature/Trip";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    trips: tripsReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
