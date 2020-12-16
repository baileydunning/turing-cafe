import React from 'react'
import Header from './Header'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Header', () => {
  beforeEach(() => {
    render(<Header />)
  })

  it('should render the header', () => {
    const header = screen.getByText('Turing Cafe')
    expect(header).toBeInTheDocument()
  })
})