import React from 'react'
import { connect } from 'react-redux'
import { addTodo} from '../redux/actions'

class AddTodo extends React.Component {
  render() {
    return (
      <div>
        <input />
        <button>Add Todo</button>
      </div>
    )
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodo)
