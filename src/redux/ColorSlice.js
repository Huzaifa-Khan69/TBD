import {createSlice} from '@reduxjs/toolkit';

const OptionSlice = createSlice({
  name: 'option',
  initialState: {option: 0},
  reducers: {
    selectOption(state, action) {
      state.option = action.payload;
    },
  },
});
export const {selectOption} = OptionSlice.actions;
export default OptionSlice.reducer;
