import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from './actionTypes'

let nextTodoID = 0

export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoID,
    content
  }
})

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id: id }
})

export const setFilter = filter => ({
  type: SET_FILTER,
  payload: { filter: filter }
})
