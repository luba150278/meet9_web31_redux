import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reducers/auth.reducer'
import tasksReducer from './reducers/tasks.reducer'

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    auth: authReducer
  },
})
