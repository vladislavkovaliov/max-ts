import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { UsersState } from './slice'

const rootSelector = ({ users }: RootState) => users

export const tasksSelector = createSelector(rootSelector, ({ users }: UsersState) => users)
