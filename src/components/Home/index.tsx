import React from 'react';
import { Container, SectionHome, ContainerLantern, Lantern, Photo, About, Formacao, Destaques} from './styles';
import { shade } from 'polished'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper";

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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quam aperiam, nobis odit ducimus consequatur ab repudiandae, dolores error, autem labore veritatis necessitatibus aut. Repudiandae quibusdam tenetur maiores illo. Alias, architecto! Dolore sit asperiores autem, laborum veniam accusantium ipsum labore, inventore repellat in rerum omnis? Iure ipsam id, nobis in cum error aspernatur placeat. Dolor illo, quod ut cumque maiores velit aperiam laborum, facilis natus iste dolorem eveniet nostrum saepe temporibus? Ex veritatis eaque quod nisi modi doloribus illum nostrum qui, dolorem, ut magni molestias possimus illo minus assumenda molestiae dolores? Assumenda optio non cupiditate esse saepe modi, cum aliquid.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quam aperiam, nobis odit ducimus consequatur ab repudiandae, dolores error, autem labore veritatis necessitatibus aut. Repudiandae quibusdam tenetur maiores illo. Alias, architecto! Dolore sit asperiores autem, laborum veniam accusantium ipsum labore, inventore repellat in rerum omnis? Iure ipsam id, nobis in cum error aspernatur placeat. Dolor illo, quod ut cumque maiores velit 
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
                            <SwiperSlide className='slide'>Slide 1</SwiperSlide>
                            <SwiperSlide className='slide'>Slide 2</SwiperSlide>
                            <SwiperSlide className='slide'>Slide 3</SwiperSlide>
                            <SwiperSlide className='slide'>Slide 4</SwiperSlide>
                            <SwiperSlide className='slide'>Slide 5</SwiperSlide>
                            <SwiperSlide className='slide'>Slide 6</SwiperSlide>
                            <SwiperSlide className='slide'>Slide 7</SwiperSlide>
                            <SwiperSlide className='slide'>Slide 8</SwiperSlide>
                            <SwiperSlide className='slide'>Slide 9</SwiperSlide>
                        </Swiper>
                    </div>
                </Formacao>
                <Destaques className='destaques'>
                    <h4>Trabalhos Em Destaque</h4>
                    <div className='destaques_articles'>
                        <article className="destaque destaque_1">

                        </article>
                        <article className="destaque destaque_2">

                        </article>
                        <article className="destaque destaque_3">

                        </article>
                    </div>
                </Destaques>
            </SectionHome>
        </Container>
    );
};
export default Home