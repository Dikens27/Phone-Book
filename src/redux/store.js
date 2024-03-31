import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/slice';
import filtersReducer from './filters/slice';
import authReduser from './auth/slise';

export const store = configureStore({
  reducer: {
    auth: authReduser,
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});

export default store;
