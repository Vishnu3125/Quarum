import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    value: 1,
  },
  reducers: {
    login: (state) => {
      state.value = 1
    },
    signup: (state) => {
      state.value = 0
    },
  },
})

export const { login, signup } = authSlice.actions

export default authSlice.reducer