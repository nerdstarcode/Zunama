import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 150vh;
    padding-top: 3.75rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ContainerLantern = styled.div`
    width: 100vw;
    max-width: 1200px;
    display: grid;
    grid-template-columns: 15vw 15vw 15vw 15vw;
    gap: 10vw;
    justify-content: center;
    @media screen and (min-width: 1200px){
        grid-template-columns: 200px 200px 200px 200px;
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
    height: 3px;
    border-radius: 1rem;
    background: ${props => props.theme.colors.Color_MenuAfter_Focus};
    transition: all 800ms ease;
    filter: ${props => props.theme.effects.blur};
    box-shadow: 0rem 0rem 3rem 0.3rem ${props => props.theme.colors.Color_Light_Blur};
    background: ${props => props.theme.colors.Color_Light}
`
export const SectionHome = styled.section`
    width: 100vw;
    max-width: 1200px;
    padding: 2rem 1.5rem;
    display: flex;
    flex-wrap: wrap;
    &>div{
        display: flex;
        flex-direction: column;
        align-items: center;
        h4{
            font-family: ${props => props.theme.fonts.Font_Primary};
            font-size: 1.3rem;
            padding: 3rem 0 1rem 0;
            letter-spacing: 0.34em;
            font-weight: 400;
        }
        .mySwiper{
            width: 20rem;
            height: 11.5rem;
            z-index: 0;
            @media screen and (max-width: 1000px){
                width: 15rem;
                height: 9rem;
            }
            @media screen and (max-width: 600px){
                width: 18rem;
                height: 10rem;
            }
            .slide{
                height: 9rem;
                display: flex;
                text-align: center;
                align-items: center;
                justify-content: center;
                transition: all 600ms ease;
                background: ${props => props.theme.colors.Color_Secundary};
                box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25), inset 0px 1.59055px 3.18111px -2.38583px #F2E8C0, inset 0px 3.18111px 10.3386px 6.36222px rgba(0, 0, 0, 0.25);
                border-radius: 10.3386px;
                @media screen and (max-width: 1000px){
                height: 6.5rem;
                }
                @media screen and (max-width: 600px){
                    height: 7.5rem;
                }
            }
            
            
        }
    }
    
    @media screen and (max-width: 600px){
        align-items: center;
        flex-direction: column;
    }
`
export const Photo = styled.article`
    height: 388px;
    width: 325px;
    border-radius: 0.5533rem;
    overflow: hidden;
    box-shadow: inset 0px 0px 22px 3px rgba(0, 0, 0, 0.6);
    background: ${props => props.theme.colors.Color_Primary};
        transition: all 600ms ease;
    @media screen and (max-width: 1000px){
        height: 300px;
        width: 250px;
    }
    @media screen and (max-width: 600px){
        height: 363px;
        width: 300px;
    }
    .photo{
        width: 100%;
        height: 80%;
        display: grid;
        grid-template-columns: 10% 10% 10% 10%;
        background-image: url(./src/assets/home/zunama.png);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
    .control{
        width: 100%;
        height: 17%;
        display: grid;
        grid-template-columns: 39% 39%;
        gap: 10%;
        justify-content: center;
        align-items: center;
    }
    .btn{
        transition: all 600ms ease;
        background: ${props => props.theme.colors.Color_Primary};
        border: none;
        box-shadow: inset 0 0 0.6rem 0.2rem rgba(0, 0, 0, 0.30);
        border-radius: 0.4838rem;
        font-family: ${props => props.theme.fonts.Font_Primary};
        font-weight: 400;

        color: ${props => props.theme.colors.Color};
        font-size: 1.2rem;
        height: 3rem;
        @media screen and (max-width: 1000px){
            font-size: 1rem;
            height: 2.5rem;
        }
    }
    .btn:hover{
        transition: all 600ms ease;
        cursor: pointer;
        box-shadow: inset 0 0 0.6rem 0.2rem ${props => props.theme.colors.Color_Light};
        color: ${props => props.theme.colors.Color_Light};
    }
    
`
export const About = styled.article`
    width: 65%;
    padding: 0 2rem;
    @media screen and (max-width: 765px){
        width: 54%;
    }
    @media screen and (max-width: 600px){
        width: 100%;
    } 
    user-select: none;
    header{
        width: max-content;
        h2{
            font-size: 2.5rem;
            letter-spacing: 0.34em;
            line-height: 2.6rem;
            font-family: ${props => props.theme.fonts.Font_Primary};
            font-weight: 400;
            @media screen and (max-width: 760px){
                font-size: 1.5rem;
                letter-spacing: 0.4em;
                line-height: 1.6rem;
            }
        }
        @media screen and (max-width: 600px){
            display: none;
        }   
    }
    .containerText{
        margin-top: 2rem;
        p{
            font-family: ${props => props.theme.fonts.Font_Secundary};
            text-align: justify;
            text-indent: 0.5rem;
        }
        @media screen and (max-width: 1000px){
            overflow-y: scroll;
            height: 200px;
            padding-right: 0.4rem;
            &::-webkit-scrollbar {
                width: 0.1rem;
            }
            &::-webkit-scrollbar-track {
                box-shadow: inset 0 0 6px ${props => props.theme.colors.Color_Primary};
            }
            &::-webkit-scrollbar-thumb {
                background-color: ${props => props.theme.colors.Color_Light_Blur};
                outline: 1px solid ${props => props.theme.colors.Color_Light};
            }
        }
    }
    
`