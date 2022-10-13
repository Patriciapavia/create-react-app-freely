import { createSlice } from "@reduxjs/toolkit";

import { TripsData } from "../utils/data";

export const tripSlice = createSlice({
  name: "trips",
  initialState: { value: TripsData },
  reducers: {
    addTrip: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addTrip } = tripSlice.actions;
export default tripSlice.reducer;
