import styled from 'styled-components'

export const Form = styled.form`
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
`

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
`

export const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
`

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
`

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.lacreiGreen};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover, &:focus {
    background-color: ${({ theme }) => theme.colors.lightGreen};
    outline: none;
  }
`