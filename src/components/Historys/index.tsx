import React from 'react';
import { Container, ContainerHistory, Sign, Title, } from './styles';
import { shade } from 'polished'
import { Lantern } from '../Home/styles';


const Home: React.FC= () =>{
    
    return(
        <Container>
            <Sign>
                <Title>Histórias</Title>
                <Lantern></Lantern>
            </Sign>

            <ContainerHistory>
                
            </ContainerHistory>
        </Container>
    );
};
export default Home