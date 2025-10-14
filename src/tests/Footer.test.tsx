import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Footer from '@components/Footer'

describe('Footer component', () => {
  test('renders footer text', () => {
    render(<Footer />)
    expect(screen.getByText(/© 2025 Lacrei Saúde/i)).toBeInTheDocument()
  })
})
