import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components'
import Switch from 'react-switch'
import { Container, MenuContainer, Nav, Li} from './styles';
import { shade } from 'polished'

interface Props{
    toggleTheme(): void;
}
const Header: React.FC<Props> = ({toggleTheme}) =>{
    const { colors, title } = useContext(ThemeContext)
    return(
        <Container>
            <MenuContainer>
                <Nav>
                    <Li>Home</Li>
                    <Li>Histórias</Li>
                    <Li>Universos</Li>
                    <Li>Contato</Li>
                </Nav>
                <Switch
                onChange={ toggleTheme }
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={30}
                width={60}
                handleDiameter={20}
                offHandleColor={colors.Color_Primary}
                offColor={shade(0.1,colors.Color_Primary)}
                onColor={shade(0.1,colors.Color_Primary)}
                onHandleColor={colors.Color_Primary}
                />
            </MenuContainer>
        </Container>
    );
};
export default Header