import styled from 'styled-components';

export const DivPage = styled.div`
    width: 100%;
    height: auto;
    background: rgb(216,213,214);
`;

export const DivContainer = styled.div`
    width: 90%;
    height: 87vh;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

export const DivVideo = styled.div`
    height:85%;
    margin-top: 50px;
    background: #061F2F;
    border-radius:50px;
`


export const VideoPlay = styled.video`
    width: 90%;
    height: 100%;
`;

export const DivForm = styled.div`
    height:85%;
    margin-top: 50px;
    background: #ffffff;
    border-radius:50px;    
    display: flex;
    flex-direction: column;
    justify-content: center;
    aling-items: center;
    h1 {
        margin: 0;
    }
    form {
        width: 90%;
        margin: 0 auto;
    }
    input {
        border-radius: 10px;
        margin: 10px;
        padding: 10px 15px;
        border: none;
        background-color: #2F4450;
        color: #fff;
        font-family: 'Carter One', cursive;
    }
    
    button {
        border-radius: 10px;
        width: 200px;
        margin-top: 5px;
        background-color: black;
        color: #fff;
        padding: 10px 15px;
        border: none;
        font-family: 'Old Standard TT', serif;
    }

    .number {
        width: 40px;
    }
    button:hover {
        cursor: pointer;
    }
`;

export const DivErrors = styled.div`
    transition: 1s;
    position: absolute;
    display: flex;
    flex-direction: column;
    gap: 10px;
    top: 190px;
    left: 520px;
    width: 250px;
    height: 350px;
    z-index:2;
    span {
        border-radius: 15px;
        background-color: #961929;
        padding: 2px 10px;
        color: #fff;
    }
    b {
        color: black;
    }
`;

export const DivBolitas = styled.div`
    transition: 0.2s;
    width: 40px;
    height: 40px;
    position: absolute;
    border-radius: 50%;
`;
export const DivBolitasDos = styled.div`
    transition: 0.4s;
    width: 20px;
    height: 20px;
    position: absolute;
    border-radius: 50%;
    background-color: #fff;
    left: -100px;
    bottom: -100px;
`;
export const DivBolitasTres = styled.div`
    transition: 0.6s;
    width: 30px;
    height: 30px;
    position: absolute;
    border-radius: 50%;
    background-color: #961929;
    left: -80px;
    bottom: -80px;
`;
export const DivBolitasCuatro = styled.div`
    transition: 0.8s;
    width: 40px;
    height: 40px;
    position: absolute;
    border-radius: 50%;
    background-color: #fff;
    left: -55px;
    bottom: -50px;
`;