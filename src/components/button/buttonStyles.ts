import styled from 'styled-components'

export const StyledButton = styled.button`
  color: ${({ theme }) => theme.colors.lacreiGreen};
  margin-left: 0; /* mobile: sem margem esquerda */
  text-decoration: none;
  padding: 10px 16px;
  font-weight: 700;
  font-size: 1rem;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.lightGray};
  background-color: ${({ theme }) => theme.colors.lightGray};
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  width: 100%; /* mobile: botão ocupa toda largura */

  &:hover, &:focus {
    background-color: ${({ theme }) => theme.colors.lacreiGreen};
    color: ${({ theme }) => theme.colors.white};
    outline: none;
  }

  @media(min-width: 768px) {
    margin-left: 1.5rem; /* desktop: margem esquerda */
    width: auto; /* desktop: largura automática */
    padding: 10px 20px;
  }
`
