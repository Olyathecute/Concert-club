import { configureStore } from '@reduxjs/toolkit'
import usersSlice from '../features/users/usersSlice'
import postsSlice from '../features/posts/postsSlice'

export const store = configureStore({
  reducer: {
    users: usersSlice,
    posts: postsSlice
  }
})
