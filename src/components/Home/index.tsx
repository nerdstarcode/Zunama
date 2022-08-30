import React from 'react';
import { Container, ContainerLantern, Lantern} from './styles';
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

        </Container>
    );
};
export default Home