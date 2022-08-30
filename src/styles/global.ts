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
    }
`