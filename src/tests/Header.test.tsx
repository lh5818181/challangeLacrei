import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import Header from '@components/header/Header'
import theme from '@styles/theme'

describe('Header component', () => {
  test('renders header with logo and nav links', () => {
    render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    )
    expect(screen.getByText(/Lacrei Saúde/i)).toBeInTheDocument()
    expect(screen.getByText(/Início/i)).toBeInTheDocument()
    expect(screen.getByText(/Diversidade/i)).toBeInTheDocument()
    expect(screen.getByText(/Confirmação/i)).toBeInTheDocument()
  })
})
