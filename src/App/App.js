import React, { Component } from 'react'
import Form from '../Form/Form'
import Container from '../Container/Container'
import Card from '../Card/Card'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <main data-testid='app-body'>
        <h1>Turing Cafe</h1>
      </main>
    )
  }
}

export default App
