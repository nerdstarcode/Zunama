import styled from 'styled-components';

export const Container = styled.section`
    height: 3.75rem;
    width: 100vw;
    background: ${props => props.theme.colors.Color_Primary_80};
    box-shadow: 0rem 0.25rem 0.6875rem 0.0625rem rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
`
export const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    max-width: 1200px;
    padding: 0 1.5rem;
    .mobile{
        h2{
            font-size: 1.5rem;
            letter-spacing: 0.4em;
            line-height: 1.6rem;
            font-family: ${props => props.theme.fonts.Font_Primary};
            @media screen and (min-width: 601px){
                display: none;
            }
            @media screen and (max-width: 600px){
                font-size: 1rem;
            }
            @media screen and (max-width: 354px){
                font-size: 0.8rem;
            }
        } 
    }
    @media screen and (min-width: 1200px){
        justify-content: space-between;
    }
    @media screen and (max-width: 600px){
        justify-content: space-between;
    }

`
export const Nav = styled.nav`
    display: flex;
    width: 75%;
    background: none;
    list-style-type: none;
    justify-content: space-between;
    font-family: ${props => props.theme.fonts.Font_Primary};
    font-size: 1rem;
    @media screen and (max-width: 600px){
        background: ${props => props.theme.colors.Color_Primary_80};
        flex-direction: column;
        position: absolute;
        top: 0;
        right: 0;
        align-items: center;
        justify-content: space-around;
        width: 90%;
        height: 100vh;
        z-index: 100;
        backdrop-filter: blur(0.5rem);
        -webkit-backdrop-filter:  blur(0.5rem);
        transform: translatex(100%);
    }
    &.active{
        @media screen and (max-width: 600px){
            transform: translatex(0);
            transition: all 500ms ease;
        }
    }
    
`
export const Li = styled.li`
    position: relative;
    transition: all 300ms ease;
    cursor: pointer;
    a{
        text-decoration: none;
        color: inherit;
    }
    &::after{
        content: ' ';
        width: 110%;
        height: 0.25rem;
        position: absolute;
        bottom: -0.125rem;
        left: 50%;
        transform: translatex(-50%);
        background: #423032;
        border-radius: 2rem;
        transition: all 800ms ease;
    }
    &:hover{
        transition: all 300ms ease;
        text-shadow: 0rem 0rem 0.375rem ${props => props.theme.colors.Color_Menu_Focus};
        color: ${props => props.theme.colors.Color_MenuAfter_Focus}
    }
    &:hover::after{
        transition: all 800ms ease;
        filter: ${props => props.theme.effects.blur};
        box-shadow: 0rem 0rem 0.375rem ${props => props.theme.colors.Color_MenuAfter_Focus};
        background: ${props => props.theme.colors.Color_MenuAfter_Focus}
    }
    &.active{
        text-shadow: 0rem 0rem 0.375rem ${props => props.theme.colors.Color_Menu_Focus};
        color: ${props => props.theme.colors.Color_MenuAfter_Focus}
    }
    &.active::after{
        transition: all 800ms ease;
        filter: ${props => props.theme.effects.blur};
        box-shadow: 0rem 0rem 0.375rem ${props => props.theme.colors.Color_MenuAfter_Focus};
        background: ${props => props.theme.colors.Color_MenuAfter_Focus}
    }
    
`


