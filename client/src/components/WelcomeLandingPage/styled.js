import styled from 'styled-components';

export const DivPage = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgb(216,213,214);
`;

export const DivContainer = styled.div`
    width: 90%;
    height: 100vh;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;
export const DivWelcome = styled.div`
    height:85%;
    margin-top: 50px;
    background: #ffffff;
    border-radius:50px;    
    display: flex;
    flex-direction: column;
    justify-content: center;
    aling-items: center;
`;

export const DivVideo = styled.div`
    height:85%;
    margin-top: 50px;
    background: #061F2F;
    border-radius:50px;
`

export const VideoPlay = styled.video`
    width: 100%;
    height: 100%;
`;

export const H1 = styled.h1`
    font-size: 50px;
`;

export const P = styled.h1`
    font-size: 35px;
    font-family: 'Old Standard TT', serif;
    font-style: italic;
    Font-weight: 400;
`;

export const ImageDog = styled.img`
    witdh: 155px;
    height: 155px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
`;

export const ButtonLogin = styled.button`
    width: 30%;
    height: 70px;
    margin: 40px auto;
    font-size: 30px;
    font-family: 'Old Standard TT', serif;
    font-style: italic;
    Font-weight: 400;
    background-color: #fff;
    color: #2F4450;
    border: 2px solid #2F4450;
    border-radius: 10px;

    &:hover {
        transition: 0.8s;
        cursor: pointer;
        color: #fff;
        background-color: #2F4450;
        border: none;
        border-radius: 10px;
    }

    

`;



/* 
@media (max-width: 768px) {
    width: 60%;
    height: 50px;
    font-size: 20px;
  }
 */

