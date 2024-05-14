import { configureStore } from '@reduxjs/toolkit'

//userReducer from userSlice
import userReducer from './user/userSlice'





export const store = configureStore({
  reducer: {
    user:userReducer,
  },


})  