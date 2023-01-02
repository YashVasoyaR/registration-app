import { configureStore } from '@reduxjs/toolkit'
import studentReducer from './pages/studentSlice';

export const store = configureStore({
  reducer: {
    students: studentReducer
  },
})