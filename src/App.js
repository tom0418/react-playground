import React from 'react'
import Todo from './Todo'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import VisibilityFilters from './components/VisibilityFilters'
// import SimpleForm from './components/Form'
// import SyncValidationForm from './components/SyncValidationForm'
import MultiCheckboxForm from './components/MultiCheckbox'
import './App.css'

const showResults = values =>
  new Promise(resolve => {
    setTimeout(() => {
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
      resolve()
    }, 500)
  })

const App = () => {
  return (
    <div className='todo-app'>
      <Todo />
      <AddTodo />
      <TodoList />
      <VisibilityFilters />
      {/*<SimpleForm onSubmit={showResults} />*/}
      {/*<SyncValidationForm onSubmit={showResults} />*/}
      <MultiCheckboxForm onSubmit={showResults} />
    </div>
  )
}

export default App
