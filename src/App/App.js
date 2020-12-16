import React, { Component } from 'react'
import Form from '../Form/Form'
import Container from '../Container/Container'
import Card from '../Card/Card'
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

  render() {
    return (
      <main data-testid='app-body'>
        <h1>Turing Cafe</h1>
        <Container reservations={this.state.reservations} />
      </main>
    )
  }
}

export default App
