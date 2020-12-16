import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'
jest.mock('../apiCalls.js')

describe('App', () => {
  beforeEach(() => {
    render(<App />)
  })

  it('should render the application', () => {
    const header = screen.getByTestId('app-body')
    expect(header).toBeInTheDocument()
  })
})
