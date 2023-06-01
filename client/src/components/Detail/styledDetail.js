import styled from "styled-components";


export const DivPage = styled.div`
    width: 100%;
    height: auto;
`;


export const DivContainer = styled.div`
    width: 90%;
    height: 100vh;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;


export const DivImage = styled.div`
    height:90%;
    margin-top: 50px;
    background-image: url(${props => props.imagen});
    border-radius:50px;
    background-position: center;
    background-size: cover;
    h1 {
        margin: 0;
        font-size: 40px;
    }
`

export const DivDetail= styled.div`
    height:90%;
    margin-top: 50px;
    background: #061F2F;
    border-radius:50px;    
    display: flex;
    flex-direction: column;
    justify-content: center;
    aling-items: center;
    h1 {
        color: #fff;
    }
`;

export const DivHeightWeight = styled.div`
    display: flex;
    justify-content: space-evenly;
    border-bottom: 1px solid #fff;
`;

export const Span = styled.span`
    color: #fff;
    font-size: 28px;
`;

export const P = styled.p`
    color: rgb(216,213,214);
    font-size: 28px;
`;

export const DivTemperaments = styled.div`
    border-bottom: 1px solid #fff;
    h2 {
        margin:0;
        color: #fff;
        border-bottom: 1px solid #fff;
    }

    ul {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        li {
            list-style: none;
            padding: 0;
            font-size: 20px;
            color: rgb(216,213,214);
        }
    }
`;

export const Button = styled.button`
    width: 70%;
    margin: 20px auto 0 auto;
    padding: 10px 15px;
    border-radius: 15px;
    border: none;
    color: black;
    font-family: 'Carter One', cursive;
    font-size: 20px;
`;