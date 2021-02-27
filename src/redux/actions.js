import { ADD_TODO } from './actionTypes'

let nextTodoID = 0

export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoID,
    content
  }
})
