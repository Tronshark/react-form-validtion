import React, { Component } from 'react'
import { FormErrors } from './FormErrors'
import './Form.css'

class Form extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      formErrors: { email: '', password: '' },
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
  }

  handleUserInput = e => {
    const name = e.target.name
    const value = e.target.value
    this.setState({ [name]: value }, () => {
      this.validateField(name, value)
    })
  }

  validateField (fieldName, value) {
    let fieldValidationErrors = this.state.formErrors
    let emailValid = this.state.emailValid
    let passwordValid = this.state.passwordValid

    switch (fieldName) {
      //email input error
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        fieldValidationErrors.email = emailValid ? '' : ' is invalid'
        //password error
        break
      case 'password':
        passwordValid = value.length >= 8
        fieldValidationErrors.password = passwordValid
          ? ''
          : ' must be minimum 8 characters'
        break
      default:
        break
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid
      },
      this.validateForm
    )
  }

  validateForm () {
    this.setState({
      formValid: this.state.emailValid && this.state.passwordValid
    })
  }

  errorClass (error) {
    return error.length === 0 ? '' : 'has-error'
  }

  render () {
    return (
      <form className='demoForm'>
        <h2>Sign in</h2>

        {/*error container */}
        <div className='panel panel-default'>
          <FormErrors formErrors={this.state.formErrors} />
        </div>

        {/*email container */}
        <div
          className={`form-group ${this.errorClass(
            this.state.formErrors.email
          )}`}
        >
          <label htmlFor='email'>Email address</label>
          <input
            type='email'
            required
            className='form-control'
            name='email'
            placeholder='Email'
            value={this.state.email}
            onChange={this.handleUserInput}
          />
        </div>

        {/*password container */}
        <div
          className={`form-group ${this.errorClass(
            this.state.formErrors.password
          )}`}
        >
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            className='form-control'
            name='password'
            placeholder='Password'
            value={this.state.password}
            onChange={this.handleUserInput}
          />
        </div>
        {/*signin button */}
        <button
          type='submit'
          className='Signinbutton'
          disabled={!this.state.formValid}
        >
          Sign in
        </button>
      </form>
    )
  }
}

export default Form
