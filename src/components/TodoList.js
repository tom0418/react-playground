import React from 'react'
import { connect } from 'react-redux'
import TodoItem from './TodoItem'
import { getTodosByVisibilityFilter } from '../redux/selectors'

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

const mapStateToProps = state => {
  const { visibilityFilter } = state
  const todos = getTodosByVisibilityFilter(state, visibilityFilter)
  return { todos }
}

export default connect(mapStateToProps)(TodoList)

