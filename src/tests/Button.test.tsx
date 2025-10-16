import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import Button from '@components/button/Button'
import theme from '@styles/theme'

test('renders button and handles click', () => {
  const handleClick = jest.fn()
  render(
    <ThemeProvider theme={theme}>
      <Button onClick={handleClick}>Clique aqui</Button>
    </ThemeProvider>
  )
  const button = screen.getByRole('button', { name: /clique aqui/i })
  fireEvent.click(button)
  expect(handleClick).toHaveBeenCalledTimes(1)
})
