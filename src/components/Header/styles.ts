import styled from 'styled-components';

export const Container = styled.section`
    height: 3.75rem;
    width: 100vw;
    background: ${props => props.theme.colors.Color_Primary_80};
    box-shadow: 0rem 0.25rem 0.6875rem 0.0625rem rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(1.25rem);
    display: flex;
    justify-content: center
`
export const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    width: 100%;
    height: 100%;
    max-width: 1200px;
    padding: 0 0.625rem;
`
export const Nav = styled.nav`
    display: flex;
    width: 60%;
    list-style-type: none;
    justify-content: space-around;
    font-family: ${props => props.theme.fonts.Font_Primary};
    font-size: 1rem;
    cursor: pointer;
`
export const Li = styled.li`
    position: relative;
    transition: all 300ms ease;

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
        text-shadow: 0rem 0rem 0.375rem ${props => props.theme.colors.Color_MenuAfter_Focus};
        color: ${props => props.theme.colors.Color_MenuAfter_Focus}
    }
    &:hover::after{
        transition: all 800ms ease;
        filter: blur(0.09rem);
        box-shadow: 0rem 0rem 0.375rem ${props => props.theme.colors.Color_MenuAfter_Focus};
        background: ${props => props.theme.colors.Color_MenuAfter_Focus}
    }
`