import React, { Component } from 'react'

class Uncontrolled extends Component {
  handleSubmit = (event) => {
    // Il n'y a pas de submit/action donc on veut éviter un re-render
    // et bloquer le comportement par défaut de submit
    event.preventDefault()

    const values = {
      name: this.name.value,
      lastName: this.lastName.value
    }
    console.log(values)
  }

  render () {
    return (
      <div className='container'>
        Uncontrolled
        <br />
        <form>
          <div className='form_element'>
            <label htmlFor='lInputName'>Enter name</label>
            <input id='lInputName' type='text' ref={input => (this.name = input)} />
          </div>
          <div className='form_element'>
            <label htmlFor='lInputLastName'>Enter last name</label>
            <input id='lInputLastName' type='text' ref={input => (this.lastName = input)} />
          </div>
          <button onClick={this.handleSubmit} type='submit'>
            Sign In
          </button>
        </form>
      </div>
    )
  }
}

export default Uncontrolled
