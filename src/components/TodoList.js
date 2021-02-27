import React from 'react'
import { connect } from 'react-redux'
import TodoItem from './TodoItem'
import { getTodos } from '../redux/selectors'

const TodoList = ({ todos }) => (
  <ul>
    {todos && todos.length
      ? todos.map((todo) => {
        return <TodoItem key={`todo-${todo.id}`} todo={todo} />
      })
      : 'No todos, yay!'
    }
  </ul>
)

export default connect(state => ({ todos: getTodos(state) }))(TodoList)
