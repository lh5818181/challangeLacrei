import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.lacreiGreen};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 162px 24px 162px;
  

`

const Logo = styled.div`
  font-weight: bold;
  font-size: 1.5rem;

`

export const Nav = styled.nav`
  a {
    color: ${({ theme }) => theme.colors.lacreiGreen};
    margin-left: 1.5rem;
    text-decoration: none;
    padding: 10px 20px;
    font-weight: 700;
    font-size: 1rem;
    border-radius: 8px;
    border: 2px solid ${({ theme }) => theme.colors.lightGray};
    background-color: ${({ theme }) => theme.colors.lightGray};
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.colors.lacreiGreen};
      color: ${({ theme }) => theme.colors.white};
      outline: none;
    }
  }
`

export default function Header() {
  return (
    <HeaderContainer>
      <Logo>Lacrei Saúde</Logo>
      <Nav aria-label="Navegação principal">
        <Link href="/">Início</Link>
        <Link href="/diversity">Diversidade</Link>
        <Link href="/confirmation">Confirmação</Link>
      </Nav>
    </HeaderContainer>
  )
}