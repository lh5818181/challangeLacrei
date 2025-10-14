import Link from 'next/link'
import styled from 'styled-components'
import { Nav } from './Header'

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.lacreiGreen};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 162px 24px 162px;

  ul {
    list-style: none;
    display: flex;}
`

const LinkItem = styled.a`
  color: ${({ theme }) => theme.colors.white};
  margin-left: 1.5rem;
  text-decoration: none;
  padding: 10px 20px;
  `

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