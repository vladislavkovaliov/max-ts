import { createSlice } from '@reduxjs/toolkit'

const name = 'users'

export interface UsersState {
  users: Array<string>
}

const initialState: UsersState = {
  users: [],
}

export const usersSlice = createSlice({
  name,
  initialState,
  reducers: {},
})

export default usersSlice.reducer
