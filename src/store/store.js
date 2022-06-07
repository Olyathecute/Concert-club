import { configureStore } from '@reduxjs/toolkit'
import usersSlice from '../features/users/usersSlice'
import postsSlice from '../features/posts/postsSlice'
import commentsSlice from '../features/comments/commentsSlice'
import themeSlice from '../features/theme/themeSlice'

export const store = configureStore({
  reducer: {
    users: usersSlice,
    posts: postsSlice,
    comments: commentsSlice,
    theme: themeSlice
  }
})
