import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.main};
    background-color: ${({ theme }) => theme.colors.lightGray};
    color: ${({ theme }) => theme.colors.darkGray};
  }

  a {
    color: ${({ theme }) => theme.colors.lacreiGreen};
    text-decoration: none;
  }

  a:hover, a:focus {
    text-decoration: underline;
  }

  button {
    font-family: ${({ theme }) => theme.fonts.main};
  }
`

export default GlobalStyle