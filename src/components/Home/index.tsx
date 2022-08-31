import React from 'react';
import { Container, SectionHome, ContainerLantern, Lantern, Photo, About} from './styles';
import { shade } from 'polished'

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
            </SectionHome>
        </Container>
    );
};
export default Home