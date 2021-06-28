import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer from '../features/auth/authSlice'
import pageReducer from '../features/pages/pageSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    page: pageReducer,
  },
})