import styled from 'styled-components'

export const Container = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.lightGray};
  padding: 1rem; /* mobile: padding para evitar bordas coladas */

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
