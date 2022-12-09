import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import goalReducer from '../features/goals/goalSlice'
import personalReducer from '../features/personals/personalSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    goals: goalReducer,
    personals: personalReducer,
  },
});
