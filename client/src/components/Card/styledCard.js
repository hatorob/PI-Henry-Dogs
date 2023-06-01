import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const DivCard = styled.div`
    border-radius: 30px; 
    height: 240px;
    background-image: url(${props => props.imagen});
    background-position: center;
    background-size: cover;
`;

export const DivDescription = styled.div`
    border-radius: 30px;
    width: 100%;
    height: 100%;
    background-color: rgba(73,70,71, 0.5);
    display: grid;
    grid-template-rows: 0.6fr 1fr;
    grid-template-areas: "weight weight name name name"
    "temperaments temperaments temperaments detail detail";
    h1 {
        margin: 0;
        padding: 10px 10px 20px 40px;
        color: #fff;
        grid-area: name;
        font-size: 18px;
    }
`;
export const DivWeight = styled.div`
    margin: 15px;
    width: 45px; 
    height: 45px; 
    background-color: #fff;
    grid-area: weight;
    border-radius: 50%;
    p {
        color: black;
        margin: 0;
        padding: 13px 0;
        font-family: 'Old Standard TT', serif;
        font-style: italic;
    }
`;

export const DivTemperaments = styled.div`
    grid-area: temperaments;
    margin-left: 20px;
    width: 140px; 
    height: 120px;
    background-color: rgba(255,255,255,0.2); 
    border-radius: 15px;
    p {
        margin: 0;
        padding: 5px;
        font-size: 15px;
        color: #fff;
        font-family: 'Old Standard TT', serif;
        font-style: italic;
    }
`;

export const DivDetail = styled.div`
    border: 2px solid #fff;
    margin: 60px 10px 0 auto;
    background-color: #fff;
    width: 50px; 
    height: 50px; 
    grid-area: detail;
    border-radius: 50%;
    p {
        color: black;
        margin: 10px 0 0 0;
        padding: 0;
        font-size: 25px;
        font-family: 'Old Standard TT', serif;
        font-style: italic;
        
    }
    &:hover {
        transition: 0.8s;
        cursor: pointer;
        background-color: #fff;
        border: none;
        p {
            color: black;
        }
    }
`;

export const DivLink = styled(Link)`
    text-decoration: none;
`;