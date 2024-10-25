import { configureStore } from '@reduxjs/toolkit'
import todo from './Slices/ToDo'

export default configureStore({
  reducer: {
    info: todo,
  },
})