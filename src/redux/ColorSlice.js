import {createSlice} from '@reduxjs/toolkit';
import images from '../assets/images';

const OptionSlice = createSlice({
  name: 'option',
  initialState: {option: 0,profile:images.profile},
  reducers: {
    selectOption(state, action) {
      state.option = action.payload;
    },
    profilePicture(state,action){
      state.profile=action.payload
    }
  },
});
export const {selectOption,profilePicture} = OptionSlice.actions;
export default OptionSlice.reducer;
