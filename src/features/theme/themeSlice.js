import { createSlice } from '@reduxjs/toolkit'

export const themeSlice = createSlice({
  name: 'theme',
  initialState: 'normal',
  reducers: {
    setTheme: (_, action) => action.payload
  }
})

export const { setTheme } = themeSlice.actions
export default themeSlice.reducer
