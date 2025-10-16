import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ThemeProvider } from 'styled-components'
import Footer from '@components/footer/Footer'
import theme from '@styles/theme'

describe('Footer component', () => {
  test('renders footer text', () => {
    render(
      <ThemeProvider theme={theme}>
        <Footer />
      </ThemeProvider>
    )
    expect(screen.getByText(/© 2025 Lacrei Saúde/i)).toBeInTheDocument()
  })
})
