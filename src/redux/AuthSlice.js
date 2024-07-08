import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import Toast from 'react-native-toast-message';

export const login = createAsyncThunk('auth/login', async config => {
  return await axios
    .request(config)
    .then(response => {
        response.data.success === true?Toast.show({
            type: 'success',
            text1:"Login Successfully",
          }):Toast.show({
            type: 'error',
            text1: "Email or Password Is Incorrect",
          })
      return response.data;
    })
    .catch(error => {
      Toast.show({
        type: 'error',
        text1: error.message,
      });
      return error;
    });
});

const AuthSlice = createSlice({
  name: 'Auth',
  initialState: {
    userloggedIn: false,
    loading: false,
    data: null,
    token: '',
  },
  reducers: {
    Logout(state) {
      state.userloggedIn = false;
      state.loading = false;
      state.data = {};
      state.token = '';
    },
  },
  extraReducers: builder => {
    builder.addCase(login.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      console.log('data>>', action.payload)
      state.loading = false;
      state.userloggedIn =
        action.payload.token.trim().length > 0 ? true : false;
      state.token = action.payload.token;
      state.data = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
    });
  },
});
export const {Logout} = AuthSlice.actions;
export default AuthSlice.reducer;
