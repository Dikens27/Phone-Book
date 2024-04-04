import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contacts/slice';
import filtersReducer from './filters/slice';
import authReduser from './auth/slise';

const authPersistConfig = {
  key: 'authSlise',
  storage,
  whiteList: ['token'],
};

const authPersistReduser = persistReducer(authPersistConfig, authReduser);

export const store = configureStore({
  reducer: {
    auth: authPersistReduser,
    contacts: contactsReducer,
    filters: filtersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;

export const persistor = persistStore(store);
