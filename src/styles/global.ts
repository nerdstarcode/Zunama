import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle `
  html{
    scroll-behavior: smooth;
  }
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
  // Button BurguerMenu
  button.burguer{
    width: 40px;
    height: 22px;
    background: none;
    border: none;
    stroke: ${props => props.theme.colors.Color_MenuAfter};
    z-index: 1000
  }
  button.burguer:hover{
    cursor: pointer;
  }
  button.burguer svg rect{
    fill: ${props => props.theme.colors.Color_MenuAfter};
  }
  @media screen and (min-width: 600px){
    button.burguer{
      display: none;
    }
    .headerBlur{
      backdrop-filter: blur(0.5rem);
    }
  }
  @media screen and (max-width: 600px){
    .blur{
      backdrop-filter: blur(0.5rem);
      -webkit-backdrop-filter:  blur(0.5rem);
    }
  }
  
`