import styled from 'styled-components'

export const Container = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.lightGray};
  padding: 1rem;

  @media(min-width: 768px) {
    padding: 0;
  }
`

export const ConfirmationContainer = styled.main`
  padding: 1rem;
  max-width: 100%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);

  @media(min-width: 768px) {
    max-width: 600px;
    padding: 2rem;
  }
`

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0 0 0;
`

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
`

export const Checkmark = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.5em;
  height: 1.5em;
  margin-right: 0.75em;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-size: 1em;
`
