import React from 'react'
import Container from './Container'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Container', () => {
  const reservationData = [{
    id: 123,
    name: 'Bailey',
    date: '11/03',
    time: '1',
    number: '2'
  }]

  const mockCancelReservation = jest.fn()
  
  beforeEach(() => {
    render(<Container reservations={ reservationData } cancelReservation={ mockCancelReservation } />)
  })

  it('should render the container', () => {
    const reservationsContainer = screen.getByTestId('reservations-container')
    expect(reservationsContainer).toBeInTheDocument()
  })

  it('should render cards from data', () => {
    const reservation = screen.getByText('Bailey')
    expect(reservation).toBeInTheDocument()
  })
})