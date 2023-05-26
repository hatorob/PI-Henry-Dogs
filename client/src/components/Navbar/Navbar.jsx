import { DivNavbar, DivRedes, DivTitlePage, DivNavbarNavigate, H1, P, StyledNavlink  } from './styled';
import { useNavigate } from 'react-router-dom';



const Navbar = () => {
    const navigate = useNavigate();
    //!Cuando le de click a titulo lo lleve a home
    const handleClick = () => navigate("/home");

    return(
        <DivNavbar>
            <DivRedes>
                REDES
            </DivRedes>
            <DivTitlePage>
                <H1 onClick={handleClick}>PI-DOGS-HENRY</H1>
            </DivTitlePage>
            <DivNavbarNavigate>
                <StyledNavlink to="/home">
                    <P>INICIO</P>
                </StyledNavlink>
                <StyledNavlink to="/createDog">
                    <P>CREAR PERRO</P>
                </StyledNavlink>
                <StyledNavlink to="/" >
                    <P>SALIR</P>
                </StyledNavlink>
            </DivNavbarNavigate>
        </DivNavbar>
    )
}

export default Navbar;