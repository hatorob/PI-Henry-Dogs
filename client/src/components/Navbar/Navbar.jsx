import { DivNavbar, DivRedes, DivTitlePage, DivNavbarNavigate, H1, P, StyledNavlink  } from './styledNavbar';
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
                    <P>HOME</P>
                </StyledNavlink>
                <StyledNavlink to="/createDog">
                    <P>CREATE DOG</P>
                </StyledNavlink>
                <StyledNavlink to="/" >
                    <P>LOGOUT</P>
                </StyledNavlink>
            </DivNavbarNavigate>
        </DivNavbar>
    )
}

export default Navbar;