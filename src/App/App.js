import React, { Component } from 'react'
import Form from '../Form/Form'
import Container from '../Container/Container'
import { getReservationData, postReservation } from '../apiCalls'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: [],
      error: ''
    }
  }

  componentDidMount() {
    getReservationData()
    .then(data => this.setState({reservations: data}))
    .catch(error => this.setState({error: error.message}))
  }

  makeReservation = (reservation) => {
    this.setState( { reservations: [...this.state.reservations, reservation] } )
    postReservation(reservation)
  }

  cancelReservation = (id) => {
    const filteredReservations = this.state.reservations.filter(reservation => reservation.id !== id)
    this.setState({reservations: filteredReservations})
  }

  render() {
    return (
      <main data-testid='app-body'>
        <h1>Turing Cafe</h1>
        <Form makeReservation={ this.makeReservation }/>
        <Container 
          reservations={ this.state.reservations }
          cancelReservation={ this.cancelReservation } 
        />
      </main>
    )
  }
}

export default App
