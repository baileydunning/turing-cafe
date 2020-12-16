import React from 'react'
import Card from './Card'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

describe('Card', () => {
  const reservationData = {
    id: 123, 
    name: 'Bailey', 
    date: '11/03', 
    time: '1', 
    number: '2'
  }

  const mockCancelReservation = jest.fn()
  
  beforeEach(() => {
    render(<Card 
            reservation={ reservationData } 
            cancelReservation={ mockCancelReservation } 
          />)
  })

  it('should render the card', () => {
    const reservationName = screen.getByText('Bailey')
    expect(reservationName).toBeInTheDocument()
  })

  it('should invoke cancel reservation', () => {
    const cancelReservationBtn = screen.getByRole('button')
    userEvent.click(cancelReservationBtn)

    expect(mockCancelReservation).toHaveBeenCalledWith(123)
    expect(mockCancelReservation).toHaveBeenCalledTimes(1)
  })
})