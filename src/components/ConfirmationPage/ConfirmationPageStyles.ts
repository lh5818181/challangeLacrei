import styled from 'styled-components'

export const Container = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.lightGray};
`

export const ConfirmationContainer = styled.main`
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`

export const List = styled.ul`
  list-style: none;
  padding: 0;
`

export const ListItem = styled.li`
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
`

export const Checkmark = styled.span`
  color: green;
  font-weight: bold;
  margin-right: 0.5rem;
`