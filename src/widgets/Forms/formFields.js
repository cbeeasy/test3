import React from 'react'

const FormFields = (props) => {
  const showLabel = (show, label) => (show ? <label>{label}</label> : null)

  const changeHandler = (event, id, blur) => {
    // on créé une structure clone de formData avec les nouvelles valeurs
    // change --> updateForm setState formData <-- newState
    const newState = props.formData
    newState[id].value = event.target.value

    // validation

    if (blur) {
      const validData = validate(newState[id])

      newState[id].valid = validData[0]
      newState[id].validationMessage = validData[1]
    }
    newState[id].touched = blur

    props.change(newState) // props définié dans le parent
  }

  const validate = (element) => {
    // console.log(element)
    let error = [true, '']

    if (element.validation.minLen) {
      const valid = element.value.length > element.validation.minLen
      const message = `${!valid ? `Mus be greater than ${element.validation.minLen}` : ''}`
      error = !valid ? [valid, message] : error
    }

    if (element.validation.required) {
      const valid = element.value.trim() !== ''
      const message = `${!valid ? 'This field is required' : ''}`

      error = !valid ? [valid, message] : error
    }

    return error
  }

  const showValidation = (data) => {
    let errorMessage = null
    if (data.validation && !data.valid) {
      errorMessage = <div className='label_error'>{data.validationMessage}</div>
    }
    return errorMessage
  }

  const renderTemplates = (data) => {
    let formTemplate = ''
    const values = data.settings

    switch (values.element) {
      case 'input':
        formTemplate = (
          <div>
            {showLabel(values.label, values.labelText)}
            <input
              {...values.config}
              value={values.value}
              onBlur={event => changeHandler(event, data.id, true)}
              onChange={event => changeHandler(event, data.id, false)}
            />
            {showValidation(values)}
          </div>
        )
        break

      case 'textarea':
        formTemplate = (
          <div>
            {showLabel(values.label, values.labelText)}
            <textarea
              {...values.config}
              value={values.value}
              onChange={event => changeHandler(event, data.id)}
            />
          </div>
        )
        break

      case 'select':
        formTemplate = (
          <div>
            {showLabel(values.label, values.labelText)}
            <select
              value={values.value}
              name={values.config.name}
              onChange={event => changeHandler(event, data.id)}
            >
              {values.config.options.map((item, i) => (
                <option key={i} value={item.val}>
                  {item.text}
                </option>
              ))}
            </select>
          </div>
        )
        break

      default:
        formTemplate = null
    }
    return formTemplate
  }

  const renderFields = () => {
    const formArray = []

    const keys = Object.keys(props.formData)
    // const values = Object.values(props.formData)
    keys.forEach((key) => {
      formArray.push({
        id: key,
        settings: props.formData[key]
      })
    })

    return formArray.map((item, i) => (
      <div key={i} className='form_element'>
        {renderTemplates(item)}
      </div>
    ))
  }

  return <div>{renderFields()}</div>
}

export default FormFields
