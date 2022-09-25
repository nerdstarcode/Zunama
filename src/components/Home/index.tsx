import React from 'react';
import { Container, SectionHome, ContainerLantern, Lantern, Photo, About, Formacao, Destaques} from './styles';
import { shade } from 'polished'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Home: React.FC= () =>{
    
    return(
        <Container>
            <ContainerLantern>
                <Lantern/>
                <Lantern/>
                <Lantern/>
                <Lantern/>
            </ContainerLantern>
            <SectionHome>
                <Photo>
                    <div className="photo">
                    </div>
                        <Lantern/>
                    <div className="control">
                        <button className="btn">
                            Currículo
                        </button>
                        <button className="btn">
                            Contato
                        </button>
                    </div>
                </Photo>
                <About className="about">
                    <header>
                        <h2>Bruno Alves</h2>
                        <Lantern/>
                    </header>
                    <div className='containerText'>
                        <p>
                            Olá, sou Bruno Alves, formado na instituição UNINOVE no curso de Tecnólogo Jogos Digitais, e atualmente estou cursando Pós-graduação em Cinema & Linguagem Audiovisual na instituição ESTÁCIO. Também sempre procuro cursos correlacionados a cinema e/ou roteiro. Atualmente estou fazendo curso de Inglês pela instituição King of Lenguages, e também Teatro. 
                        </p>
                        <p>
                            Sempre procuro conhecimento na área de história para abranger meu conhecimento ainda mais para poder criar meus roteiros e meus livros. Sei que tenho um potencial enorme e que ainda sim preciso de mais experiência para melhorar ainda mais meu conhecimento e conseguir atingir meu sonho.
                        </p>
                    </div>
                </About>
                <Formacao>
                    <h4>Formação</h4>
                    <div>
                        <Swiper
                            slidesPerView={2}
                            spaceBetween={10}
                            slidesPerGroup={2}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            pagination={{
                            clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                            >
                            <SwiperSlide key="s1" className='slide'>Slide 1</SwiperSlide>
                            <SwiperSlide key="s2" className='slide'>Slide 2</SwiperSlide>
                            <SwiperSlide key="s3" className='slide'>Slide 3</SwiperSlide>
                            <SwiperSlide key="s4" className='slide'>Slide 4</SwiperSlide>
                            <SwiperSlide key="s5" className='slide'>Slide 5</SwiperSlide>
                            <SwiperSlide key="s6" className='slide'>Slide 6</SwiperSlide>
                            <SwiperSlide key="s7" className='slide'>Slide 7</SwiperSlide>
                            <SwiperSlide key="s8" className='slide'>Slide 8</SwiperSlide>
                            <SwiperSlide key="s9" className='slide'>Slide 9</SwiperSlide>
                        </Swiper>
                    </div>
                </Formacao>
                <Destaques className='destaques'>
                    <h4>Trabalhos Em Destaque</h4>
                        <Swiper className='mySwiper destaques_articles'
                        breakpoints={
                            {
                                700: {
                                    slidesPerView: 1,
                                    slidesPerGroup: 1,

                                },
                                // when window width is >= 768px
                                701: {
                                    slidesPerView: 3,
                                    slidesPerGroup: 3,
                                },
                            }
                        }
                        spaceBetween={10}
                        loop={false}
                        loopFillGroupWithBlank={true}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[Pagination]}
                        >

                        <SwiperSlide className="destaque destaque_1 slide">
                            autem
                        </SwiperSlide>
                        <SwiperSlide className="destaque destaque_2 slide">
                            autem
                        </SwiperSlide>
                        <SwiperSlide className="destaque destaque_3 slide">
                            autem
                        </SwiperSlide>
                        </Swiper>
                </Destaques>
            </SectionHome>
        </Container>
    );
};
export default Home