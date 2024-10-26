import { createSlice } from '@reduxjs/toolkit'

export const TodoList = createSlice({

  name: 'todoList',
  initialState: {
    value: JSON.parse(localStorage.getItem('todouser')) ? JSON.parse(localStorage.getItem('todouser')) : null,
  },


  reducers: {
    UserDataOfToDo: (state, action) => {
      state.value = action.payload
    },
  },





})
export const { UserDataOfToDo } = TodoList.actions

export default TodoList.reducer
