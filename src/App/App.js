import React, { Component } from 'react'
import Form from '../Form/Form'
import Container from '../Container/Container'
import { getReservationData } from '../apiCalls'
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

  makeReservation = (reservation) =>{
    this.setState({reservations: [...this.state.reservations, reservation]})
  }

  render() {
    return (
      <main data-testid='app-body'>
        <h1>Turing Cafe</h1>
        <Form makeReservation={ this.makeReservation }/>
        <Container reservations={ this.state.reservations } />
      </main>
    )
  }
}

export default App
