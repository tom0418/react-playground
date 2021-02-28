import React from 'react'
import Todo from './Todo'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import VisibilityFilters from './components/VisibilityFilters'
import './App.css'

const App = () => {
  return (
    <div className='todo-app'>
      <Todo />
      <AddTodo />
      <TodoList />
      <VisibilityFilters />
    </div>
  )
}

export default App
