import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Button from '@components/Button'

test('renders button and handles click', () => {
  const handleClick = jest.fn()
  render(<Button onClick={handleClick}>Clique aqui</Button>)
  const button = screen.getByRole('button', { name: /clique aqui/i })
  fireEvent.click(button)
  expect(handleClick).toHaveBeenCalledTimes(1)
})
