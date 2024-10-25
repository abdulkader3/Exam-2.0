import { createSlice } from '@reduxjs/toolkit'

export const TodoList = createSlice({

  name: 'todoList',
  initialState: {
    TodoListValue: null,
  },


  reducers: {
    UserDataOfToDo: (state, action) => {
      state.value = action.payload
    },
  },





})
export const { UserDataOfToDo } = TodoList.actions

export default TodoList.reducer
