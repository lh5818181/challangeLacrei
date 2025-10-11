import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      lacreiGreen: string
      lightGreen: string
      darkGray: string
      lightGray: string
      white: string
    }
    fonts: {
      main: string
    }
  }
}
