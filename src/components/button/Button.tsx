import React from 'react'
import { StyledButton } from './buttonStyles'
interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  ariaLabel?: string
}

export default function Button({ children, onClick, type = 'button', ariaLabel }: ButtonProps) {
  return (
    <StyledButton onClick={onClick} type={type} aria-label={ariaLabel}>
      {children}
    </StyledButton>
  )
}