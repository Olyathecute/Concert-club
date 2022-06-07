import { createSlice } from '@reduxjs/toolkit'

const getTheme = () => {
  const theme = `${window?.localStorage?.getItem('theme')}`
  if (['normal', 'increased'].includes(theme)) return theme

  const userMedia = window.matchMedia('(prefers-theme: normal)')
  if (userMedia.matches) return 'normal'

  return 'increased'
}

const initialState = getTheme()

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (_, action) => action.payload
  }
})

export const { setTheme } = themeSlice.actions
export default themeSlice.reducer
