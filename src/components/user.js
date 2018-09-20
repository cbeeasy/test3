import React, { Component } from 'react'

import FormFields from '../widgets/Forms/formFields'

class User extends Component {
  state = {
    formData: {
      name: {
        element: 'input',
        value: '',
        label: true,
        labelText: 'Name',
        config: {
          name: 'name_input',
          type: 'text',
          placeholder: 'Enter your name'
        },
        validation: {
          required: true,
          minLen: 5
        },
        valid: false,
        touched: false,
        validationMessage: ''
      },

      lastname: {
        element: 'input',
        value: '',
        label: true,
        labelText: 'Lastname',
        config: {
          name: 'lastname_input',
          type: 'text',
          placeholder: 'Enter your last name'
        },
        validation: {
          required: true
        },
        valid: false,
        touched: false,
        validationMessage: ''
      },
      message: {
        element: 'textarea',
        value: '',
        label: true,
        labelText: 'Comment',
        config: {
          name: 'comment_input',
          rows: 4,
          cols: 36
        },
        validation: {
          required: false
        },
        valid: true
      },
      age: {
        element: 'select',
        value: '',
        label: true,
        labelText: 'Age',
        config: {
          name: 'age_input',
          options: [
            { val: '1', text: '10-20' },
            { val: '2', text: '21-30' },
            { val: '3', text: '31-40' },
            { val: '4', text: '+40' }
          ]
        },
        validation: {
          required: false
        },
        valid: true
      }
    }
  }

  updateForm = (newState) => {
    // console.log(newState)
    this.setState({
      formData: newState
    })
  }

  submitForm = (event) => {
    // vers REST etc...
    event.preventDefault()

    const dataToSubmit = {}

    let formIsValid = true

    const keys = Object.keys(this.state.formData)
    // const values = Object.values(this.state.formData)
    keys.forEach((key) => {
      dataToSubmit[key] = this.state.formData[key].value
    })

    keys.forEach((key) => {
      formIsValid = this.state.formData[key].valid && formIsValid
    })

    if (formIsValid) console.log(dataToSubmit)
    // axios.post(url,dataToSubmit)
  }

  render () {
    return (
      <div className='container'>
        User
        <form onSubmit={this.submitForm}>
          <FormFields
            formData={this.state.formData}
            onblur={newState => this.updateForm(newState)}
            change={newState => this.updateForm(newState)}
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default User
