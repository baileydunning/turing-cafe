import React from 'react'
import Form from './Form'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

describe('Form', () => {
  const mockMakeReservation = jest.fn()

  beforeEach(() => {
    render(<Form makeReservation={ mockMakeReservation } />)
  })

  it('should render the form', () => {
    const nameField = screen.getByPlaceholderText('Name')
    expect(nameField).toBeInTheDocument()
  })

  it('should update text on change', () => {
    const nameField = screen.getByPlaceholderText('Name')
    userEvent.type(nameField, 'bailey')

    expect(nameField.value).toContain('bailey')
  })

  it('should make a reservation on submission', () => {
    const nameField = screen.getByPlaceholderText('Name')
    const dateField = screen.getByPlaceholderText('Date (mm/dd)')
    const timeField = screen.getByPlaceholderText('Time')
    const numberField = screen.getByPlaceholderText('Number of guests')
    const makeReservationButton = screen.getByTestId('reservation-btn')

    userEvent.type(nameField, 'bailey')
    userEvent.type(dateField, '11/03')
    userEvent.type(timeField, '6')
    userEvent.type(numberField, '3')
    userEvent.click(makeReservationButton)

    expect(mockMakeReservation).toHaveBeenCalled()
  })
})