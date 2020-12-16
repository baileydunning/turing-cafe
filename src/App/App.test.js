import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'
import { getReservationData } from '../apiCalls'
import userEvent from '@testing-library/user-event'
jest.mock('../apiCalls.js')

describe('App', () => {
  const mockedReservations = [{ id: 123, name: 'Kyle', date: '8/8', time: '7:00', number: 3 }]
  
  beforeEach(() => {
    getReservationData.mockResolvedValueOnce(mockedReservations)
    render(<App />)
  })

  it('should render the application', () => {
    const header = screen.getByTestId('app-body')
    expect(header).toBeInTheDocument()
  })

  it('should display reservations', async () => {
    const reservationName = await waitFor(() => screen.getByText('Kyle'))
    expect(reservationName).toBeInTheDocument()
  })

  it('should add reservations to display on form submission', () => {
    const nameField = screen.getByPlaceholderText('Name')
    const dateField = screen.getByPlaceholderText('Date (mm/dd)')
    const timeField = screen.getByPlaceholderText('Time')
    const numberField = screen.getByPlaceholderText('Number of guests')
    const makeReservationButton = screen.getByTestId('reservation-btn')

    userEvent.type(nameField, 'Bailey')
    userEvent.type(dateField, '11/03')
    userEvent.type(timeField, '6')
    userEvent.type(numberField, '3')
    userEvent.click(makeReservationButton)

    const newReservationName = screen.getByText('Bailey')
    expect(newReservationName).toBeInTheDocument()
  })
})
