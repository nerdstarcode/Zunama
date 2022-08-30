import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle `
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background: ${props => props.theme.colors.Color_Primary};
        font-size: 0.875rem;
        color: ${props => props.theme.colors.Color};
        transition: all 600ms ease;
        overflow-x: hidden
    }
    body::-webkit-scrollbar {
        width: 0.1em;
        position: fixed
      }
      body::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px ${props => props.theme.colors.Color_Primary};
      }
      body::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.Color_Light_Blur};
        outline: 1px solid ${props => props.theme.colors.Color_Light};
      }
`