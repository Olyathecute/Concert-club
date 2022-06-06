import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getPosts = createAsyncThunk('users/getPosts', async (_, { rejectWithValue, dispatch }) => {
  const result = await axios.get(`https://jsonplaceholder.typicode.com/users/1/posts`)
  dispatch(setPosts(result.data))
})

export const postsSlice = createSlice({
  name: 'posts',
  initialState: [],
  reducers: {
    setPosts: (state, action) => action.payload
  },
  extraReducers: {
    [getPosts.fulfilled]: () => console.log('fulfilled'),
    [getPosts.pending]: () => console.log('pending'),
    [getPosts.rejected]: () => console.log('rejected')
  }
})

export const { setPosts } = postsSlice.actions
export default postsSlice.reducer
