import React, { Component } from 'react'

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
      <form onSubmit={ this.handleSubmit }>
        <input
          type='text'
          name='name'
          placeholder='Name'
          value={ this.state.name }
          onChange={ this.handleChange }>
        </input>
        <input
          type='text'
          name='date'
          placeholder='Date (mm/dd)'
          value={ this.state.date }
          onChange={ this.handleChange }>
        </input>
        <input
          type='text'
          name='time'
          placeholder='Time'
          value={ this.state.time }
          onChange={ this.handleChange }>
        </input>
        <input
          type='text'
          name='number'
          placeholder='Number of guests'
          value={ this.state.number }
          onChange={ this.handleChange }>
        </input>
        <button>Make Reservation</button>
      </form>
    )
  }
}

export default Form