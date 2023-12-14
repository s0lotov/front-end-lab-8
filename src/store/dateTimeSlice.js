import { createSlice } from '@reduxjs/toolkit';

const dateTimeSlice = createSlice({
  name: 'dateTime',
  initialState: {
    currentDateTime: new Date(),
  },
  reducers: {
    updateDateTime: (state, action) => {
      state.currentDateTime = {
        date: action.payload.date || state.currentDateTime.date,
        time: action.payload.time || state.currentDateTime.time,
      };
    },
  },
});

export const { updateDateTime } = dateTimeSlice.actions;
export const selectCurrentDateTime = (state) => state.dateTime.currentDateTime;

export default dateTimeSlice.reducer;
