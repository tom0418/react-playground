import React from 'react'
import { connect } from 'react-redux'

const TodoItem = ({ todo }) => (
  <li>
    {todo && todo.completed ? '👌' : '👋'}{' '}
    <span>
      {todo.content}
    </span>
  </li>
)

export default connect(
  null
)(TodoItem)
