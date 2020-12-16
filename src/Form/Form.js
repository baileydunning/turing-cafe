import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor(props) {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const newReservation = {
      id: Date.now(),
      name: this.state.name,
      date: this.state.date,
      time: this.state.time,
      number: this.state.number
    }
    this.props.makeReservation(newReservation)
    this.setState({name: '', date: '', time: '', number: ''})
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit } className='reservation-form'>
        <input
          type='text'
          name='name'
          placeholder='Name'
          className='input-field'
          value={ this.state.name }
          onChange={ this.handleChange }>
        </input>
        <input
          type='text'
          name='date'
          placeholder='Date (mm/dd)'
          className='input-field'
          value={ this.state.date }
          onChange={ this.handleChange }>
        </input>
        <input
          type='text'
          name='time'
          placeholder='Time'
          className='input-field'
          value={ this.state.time }
          onChange={ this.handleChange }>
        </input>
        <input
          type='text'
          name='number'
          placeholder='Number of guests'
          className='input-field'
          value={ this.state.number }
          onChange={ this.handleChange }>
        </input>
        <button 
          className='submit-btn'
          data-testid='reservation-btn'>
          Make Reservation
        </button>
      </form>
    )
  }
}

export default Form