import styled from 'styled-components'

export const FooterContainer = styled.footer`
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

export const LinkItem = styled.a`
  color: ${({ theme }) => theme.colors.white};
  margin-left: 1.5rem;
  text-decoration: none;
  padding: 10px 20px;
  `
