import React from 'react'
import Todo from './Todo'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

const App = () => {
  return (
    <div>
      <Todo />
      <AddTodo />
      <TodoList />
    </div>
  )
}

export default App
