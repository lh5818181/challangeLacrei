import styled from 'styled-components'

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
        <nav>
          <ul>
            <li><LinkItem href="#">Início</LinkItem></li>
            <li><LinkItem href="#">Sobre</LinkItem></li>
            <li><LinkItem href="#">Contato</LinkItem></li>
          </ul>
        </nav>
      </div>
      <div>
      <p>© 2025 Lacrei Saúde. Todos os direitos reservados.</p>
      </div>
    </FooterContainer>
  )
}