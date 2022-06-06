import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getUsers = createAsyncThunk('users/getUsers', async (_, { rejectWithValue, dispatch }) => {
  const result = await axios.get(`https://jsonplaceholder.typicode.com/users`)
  dispatch(setUsers(result.data))
})

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    currentUser: null
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload
      state.currentUser = action.payload[0]
      console.log(state.currentUser)
    }
  },
  extraReducers: {
    [getUsers.fulfilled]: () => console.log('fulfilled'),
    [getUsers.pending]: () => console.log('pending'),
    [getUsers.rejected]: () => console.log('rejected')
  }
})

export const { setUsers } = usersSlice.actions
export default usersSlice.reducer
