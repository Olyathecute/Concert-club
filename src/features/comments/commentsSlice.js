import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getComments = createAsyncThunk('users/getPosts', async (_, { rejectWithValue, dispatch }) => {
  const result = await axios.get(`https://jsonplaceholder.typicode.com/posts/1/comments`)
  dispatch(setComments(result.data))
})

export const commentsSlice = createSlice({
  name: 'comments',
  initialState: [],
  reducers: {
    setComments: (_, action) => action.payload,
    addComment: (state, action) => state.push(action.payload)
  },
  extraReducers: {
    [getComments.fulfilled]: () => console.log('fulfilled'),
    [getComments.pending]: () => console.log('pending'),
    [getComments.rejected]: () => console.log('rejected')
  }
})

export const { setComments } = commentsSlice.actions
export default commentsSlice.reducer
