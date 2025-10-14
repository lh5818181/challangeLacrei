import React from 'react'
import Link from 'next/link'
import { HeaderContainer, Logo, Nav } from './HeaderStyles'


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