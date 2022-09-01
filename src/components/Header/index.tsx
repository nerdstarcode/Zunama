import React, { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components'
import Switch from 'react-switch'
import { Container, MenuContainer, Nav, Li, } from './styles';
import { shade } from 'polished'
import {Lantern} from '../Home/styles'

interface Props{
    toggleTheme(): void;
}
const Header: React.FC<Props> = ({toggleTheme}) =>{
    const { colors, title } = useContext(ThemeContext);
    const [menu, setMenu ] = useState('burguer');
    const toggleButton = () => {
        setMenu(menu === 'burguer' ? 'active' : 'burguer');
    }
    const [activeNav, setActiveNav] = useState('#')

    return(
        <Container>
            <MenuContainer className='headerBlur'>
                <Nav className={'blur ' + menu}>
                    <Li onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><a onClick={toggleButton} href='#'>Home</a></Li>
                    <Li onClick={() => setActiveNav('#history')} className={activeNav === '#history' ? 'active' : ''} ><a onClick={toggleButton} href='#history'>Histórias</a></Li>
                    <Li onClick={() => setActiveNav('#universe')} className={activeNav === '#universe' ? 'active' : ''}><a onClick={toggleButton} href='#universe'>Universos</a></Li>
                    <Li onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><a onClick={toggleButton} href='#contact'>Contato</a></Li>
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
                <div className="mobile">
                    <h2>Bruno Alves</h2>
                    <Lantern/>
                </div>
                <button className='burguer' onClick={toggleButton}>
                    <svg width="40" height="22" viewBox="0 0 40 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y="18" width="40" height="4" rx="2" fill="#272424"/>
                        <rect y="12" width="40" height="4" rx="2" fill="#272424"/>
                        <rect y="6" width="40" height="4" rx="2" fill="#272424"/>
                        <rect width="40" height="4" rx="2" fill="#272424"/>
                    </svg>
                </button>
            </MenuContainer>
        </Container>
    );
};
export default Header