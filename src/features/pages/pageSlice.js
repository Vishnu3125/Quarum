import { createSlice } from '@reduxjs/toolkit'

export const pageSlice = createSlice({
  name: 'page',
  initialState: {
    value: 0,
  },
  reducers: {
    auth: (state) => {
      state.value = 0
    },
    page: (state) => {
      state.value = 1
    },
  },
})

export const { auth, page } = pageSlice.actions

export default pageSlice.reducer