import React, { Component } from 'react'

class Controlled extends Component {
  state = {
    name: '',
    lastname: ''
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleLastNameChange = (event) => {
    this.setState({
      lastname: event.target.value
    })
  }

  onSubmitHandler = (event) => {
    event.preventDefault()
    console.log(this.state)
  }

  render () {
    return (
      <div className='container'>
        Controlled
        <br />
        <form onSubmit={this.onSubmitHandler}>
          <div className='form_element'>
            <label htmlFor='lInputName'>Enter name</label>
            <input
              id='lInputName'
              type='text'
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </div>
          <div className='form_element'>
            <label htmlFor='lInputLastName'>Enter last name</label>
            <input
              id='lInputLastName'
              type='text'
              value={this.state.lastname}
              onChange={this.handleLastNameChange}
            />
          </div>
          <button onClick={this.handleSubmit} type='submit'>
            Sign In
          </button>
        </form>
      </div>
    )
  }
}

export default Controlled
