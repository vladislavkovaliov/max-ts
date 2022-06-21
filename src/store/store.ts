import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import users from './users/slice'
import { usersApi } from './users/actions'

const store = configureStore({
  reducer: {
    users,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: () => getDefaultMiddleware()
    .concat(usersApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
