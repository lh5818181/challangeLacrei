import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from '@components/Header'

describe('Header component', () => {
  test('renders header with logo and nav links', () => {
    render(<Header />)
    expect(screen.getByText(/Lacrei Saúde/i)).toBeInTheDocument()
    expect(screen.getByText(/Início/i)).toBeInTheDocument()
    expect(screen.getByText(/Diversidade/i)).toBeInTheDocument()
    expect(screen.getByText(/Confirmação/i)).toBeInTheDocument()
  })
})
