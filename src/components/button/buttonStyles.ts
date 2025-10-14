import styled from 'styled-components'

export const StyledButton = styled.button`
  color: ${({ theme }) => theme.colors.lacreiGreen};
  margin-left: 1.5rem;
  text-decoration: none;
  padding: 10px 20px;
  font-weight: 700;
  font-size: 1rem;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.lightGray};
  background-color: ${({ theme }) => theme.colors.lightGray};
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover, &:focus {
    background-color: ${({ theme }) => theme.colors.lacreiGreen};
    color: ${({ theme }) => theme.colors.white};
    outline: none;
  }
`