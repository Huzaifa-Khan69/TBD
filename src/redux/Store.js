import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
} from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import ColorSlice from './ColorSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthSlice from './AuthSlice';

const reducers = combineReducers({
  option: ColorSlice,
  auth:AuthSlice
});

const persistConfig = {key: 'root', storage: AsyncStorage, whitelist: ['auth']};
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: {
    Data: persistedReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);