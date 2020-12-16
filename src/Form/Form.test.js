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
})