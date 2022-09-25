import styled from 'styled-components';

export const Container = styled.section`
    width: 100vw;
    height: 150vh;
    padding-top: 3.75rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: ${props => props.theme.background.background};
    transition: background-image 500ms ease;
`
export const Sign = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: ${props => props.theme.colors.Color_Primary};
    border-radius: 50px 50px 5px 5px;
    transition: background-color 800ms ease;

`
export const Title = styled.h2`
    font-family: ${props => props.theme.fonts.Font_Primary};
    font-style: normal;
    font-weight: 400;
    font-size: 4rem;
    line-height: 4rem;
    margin-top: 1rem;
    margin-inline: 1rem;
    color: ${props => props.theme.colors.Color_MenuAfter_Focus};
    text-shadow: 0px 0px 11px rgba(242, 232, 192, 0.1);
    user-select: none;
    transition: background-color 800ms ease;
`

export const ContainerHistory = styled.div`
    width: 93%;
    margin-top: 3rem;
    height: 500px;
    background: ${props => props.theme.colors.Color_Primary};
    transition: background-color 800ms ease;
    box-shadow: inset 0px 4px 13px 6px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
`