import React from 'react'
import Link from 'next/link'
import { FooterContainer } from './FooterStyles'
import { Nav } from '@components/header/HeaderStyles'

export default function Footer() {
  return (
    <FooterContainer>
      <div>
      <Nav aria-label="Navegação segundaária">
        <Link href="/">Início</Link>
        <Link href="/diversity">Diversidade</Link>
        <Link href="/confirmation">Confirmação</Link>
      </Nav>
      </div>
      <div>
      <p>© 2025 Lacrei Saúde. Todos os direitos reservados.</p>
      </div>
    </FooterContainer>
  )
}