import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import berryuserReducer from '../features/berryuser/berryuserSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    berryuser: berryuserReducer,
  },
});
