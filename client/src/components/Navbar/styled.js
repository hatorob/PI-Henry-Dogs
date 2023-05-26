import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const DivNavbar = styled.div`
    height: 78px;
    background: rgb(216,213,214);
    display: grid;
    grid-template-columns: 0.48fr auto 0.6fr;
`;

export const DivRedes = styled.div`
   
`;

export const DivTitlePage = styled.div`
    
`;

export const DivNavbarNavigate = styled.div`
    display: flex;
    gap: 20px;
    justify-content: end;
`;

export const H1 = styled.h1`}
    margin: 0;
    font-size: 50px;
`;
export const P = styled.h1`}
    font-size: 25px;
    text-align: center;
`;

export const StyledNavlink = styled(NavLink)`
    text-decoration: none;
    padding: 0 10px;
    color: black;
    &.active {
        background-color: #2F4450;
        color: white;
    }
    &:nth-child(3) {
        color: #fff;
        background-color: black;
    }

`;