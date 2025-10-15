import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.lacreiGreen};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 1rem;
  width: 100%;

  @media (min-width: 480px) {
    padding: 20px 2rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 24px 5vw;
  }

  @media (min-width: 1200px) {
    padding: 24px 162px;
  }
`

export const Logo = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
    font-size: 2rem;
  }
`

export const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;

  a {
    color: ${({ theme }) => theme.colors.lacreiGreen};
    margin: 0.25rem 0.5rem;
    text-decoration: none;
    padding: 8px 16px;
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

  @media (min-width: 480px) {
    flex-wrap: nowrap;
    justify-content: center;
  }

  @media (min-width: 768px) {
    justify-content: flex-start;
    width: auto;
    a {
      margin: 0 0.75rem;
      font-size: 1.1rem;
      padding: 10px 20px;
    }
  }
`
