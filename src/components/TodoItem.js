import React from 'react'

const Todo = (todo) => (
  <li>
    {todo && todo.completed ? '👌' : '👋'}{' '}
    <span>
      {todo.content}
    </span>
  </li>
)

export default Todo
