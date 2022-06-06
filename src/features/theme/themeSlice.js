import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
  name: 'theme',
  initialState: [],
  reducers: {
    setTheme: (state, action) => {}
  }
})

export const { setTheme } = themeSlice.actions
export default themeSlice.reducer
