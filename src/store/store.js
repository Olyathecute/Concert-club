import { configureStore } from '@reduxjs/toolkit'
import usersSlice from '../features/users/usersSlice'
import postsSlice from '../features/posts/postsSlice'
import commentsSlice from '../features/comments/commentsSlice'

export const store = configureStore({
  reducer: {
    users: usersSlice,
    posts: postsSlice,
    comments: commentsSlice
  }
})
