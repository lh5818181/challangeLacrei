import React from 'react'
import Link from 'next/link'
import { FooterContainer, NavFooter } from './FooterStyles'

export default function Footer() {
  return (
    <FooterContainer>
      <div>
      <NavFooter aria-label="Navegação segundaária">
        <Link href="/">Início</Link>
        <Link href="/diversity">Diversidade</Link>
        <Link href="/confirmation">Confirmação</Link>
      </NavFooter>
      </div>
      <div>
      <p>© 2025 Lacrei Saúde. Todos os direitos reservados.</p>
      </div>
    </FooterContainer>
  )
}