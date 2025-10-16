import styled from 'styled-components'

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.lacreiGreen};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 1rem;
  gap: 2rem;
  width: 100%;

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;
    margin: 1rem 0 0 0;
    width: 100%;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 24px 162px;

    ul {
      justify-content: flex-start;
      margin: 0;
      width: auto;
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
  width: 100%;

  a {
    color: ${({ theme }) => theme.colors.lacreiGreen};
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

  @media (min-width: 768px) {
    flex-wrap: nowrap;
    justify-content: flex-start;
    margin-top: 0;
    width: auto;
  }
`
