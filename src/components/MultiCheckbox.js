import React, { useState } from 'react'
import { Field, reduxForm } from 'redux-form'

const checkList = [
  { id: 1, name: 'テスト1'},
  { id: 2, name: 'テスト2'},
  { id: 3, name: 'テスト3'},
]

const checkboxGroup = (props) => {
  let {options, input} = props;

  return options.map((option, index) => {
    return (
      <div className="checkbox" key={index}>
        <label>
          <input type="checkbox"
                 name={`${input.name}[${index}]`}
                 value={option.name}
                 checked={input.value.indexOf(option.name) !== -1}
                 onChange={(event) => {
                   const newValue = [...input.value];
                   if (event.target.checked) {
                     newValue.push(option.name);
                   } else {
                     newValue.splice(newValue.indexOf(option.name), 1);
                   }

                   return input.onChange(newValue);
                 }}/>
          {option.name}
        </label>
      </div>)
  });
}

const MultiCheckboxForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name='setting'
          component={checkboxGroup}
          options={checkList}
        />
        <button type='submit' disabled={pristine || submitting}>
          Submit
        </button>
        <button type='button' disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'sample'
})(MultiCheckboxForm)
