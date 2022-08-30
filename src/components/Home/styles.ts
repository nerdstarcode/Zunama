import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 120vh;
    display: flex;
    justify-content: center;
    padding-top: 3.75rem;
`
export const ContainerLantern = styled.div`
    width: 100vw;
    max-width: 1200px;
    display: grid;
    grid-template-columns: 15vw 15vw 15vw 15vw;
    gap: 10vw;
    justify-content: center;
    @media screen and (min-width: 1200px){
        grid-template-columns: 180px 180px 180px 180px;
        gap: 120px;
    }
    @media screen and (max-width: 500px){
        grid-template-columns: 10vw 25vw 25vw 10vw;
        gap: 5vw;
    }
    padding: 0 1.5rem;
`
export const Lantern = styled.div`
    width: 100%;
    max-width: 180px;
    height: 3px;
    border-radius: 1rem;
    background: ${props => props.theme.colors.Color_MenuAfter_Focus};
    transition: all 800ms ease;
    filter: ${props => props.theme.effects.blur};
    box-shadow: 0rem 0rem 3rem 0.3rem ${props => props.theme.colors.Color_Light_Blur};
    background: ${props => props.theme.colors.Color_Light}
`
