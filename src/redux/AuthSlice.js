import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import Toast from 'react-native-toast-message';

export const login = createAsyncThunk('auth/login', async config => {
  return await axios
    .request(config)
    .then(response => {
      response.data.success === true
        ? Toast.show({
            type: 'success',
            text1: 'Login Successfully',
          })
        : Toast.show({
            type: 'error',
            text1: 'Email or Password Is Incorrect',
          });
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
    isLoggedInWithGoogle: false,
    isLoggedInWithFacebook: false,
  },
  reducers: {
    setToken(state, action) {
      if (action.payload.accessTokenSource === 'FACEBOOK_APPLICATION_WEB') {
        state.token = action.payload.accessToken;
        state.userloggedIn =
          action.payload.accessToken.trim().length > 0 ? true : false;
        state.isLoggedInWithFacebook =
          action.payload.accessToken.trim().length > 0 ? true : false;
      } else {
        state.token = action.payload;
        state.userloggedIn = action.payload.trim().length > 0 ? true : false;
        state.isLoggedInWithGoogle =
          action.payload.trim().length > 0 ? true : false;
      }
    },
    setData(state, action) {
      state.data = action.payload;
    },
    Logout(state) {
      state.userloggedIn = false;
      state.loading = false;
      state.data = {};
      state.token = '';
      state.isLoggedInWithGoogle = false;
      state.isLoggedInWithFacebook=false
    },
  },
  extraReducers: builder => {
    builder.addCase(login.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      console.log('data>>', action.payload);
      console.log(
        'jkdshkjaghkgktg==========>   ',
        action.payload.token.trim().length,
      );
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
export const {Logout, setToken, setData} = AuthSlice.actions;
export default AuthSlice.reducer;
