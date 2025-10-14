import styled from 'styled-components'

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.lacreiGreen};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 1rem;

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;
    margin: 1rem 0 0 0;
  }

  @media(min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 24px 162px;

    navFooter {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    }
    
  }
`

export const LinkItem = styled.a`
  color: ${({ theme }) => theme.colors.white};
  margin: 0 0.75rem;
  text-decoration: none;
  padding: 10px 20px;
`

export const NavFooter = styled.nav`
  a {
    color: ${({ theme }) => theme.colors.lacreiGreen};
    margin: 0 0.75rem;
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


    @media(min-width: 768px) {
    
    navFooter {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    }
    
  }
  }`