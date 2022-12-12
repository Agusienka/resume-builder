import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import goalReducer from '../features/goals/goalSlice'
import personalReducer from '../features/personals/personalSlice'
import educationReducer from '../features/educations/educationSlice'
import experienceReducer from '../features/experiences/experienceSlice'
import extraReducer from '../features/extras/extraSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    goals: goalReducer,
    personals: personalReducer,
    educations: educationReducer,
    experiences: experienceReducer,
    extras: extraReducer,
  },
});
