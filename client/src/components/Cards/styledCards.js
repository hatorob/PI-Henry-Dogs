import styled from 'styled-components';

export const DivContainer = styled.div`
    width: 90%;
    margin: 10px auto 0 auto;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 20px;
`;

export const DivBottons = styled.div`
    margin: 20px;
    display: flex;
    gap: 30px;
    justify-content: center;
    button {
        border-radius: 15px 0 15px 0;
        border: 2px solid #2F4450;;
        color: #2F4450;
        font-family: 'Carter One', cursive;
        font-size: 15px;
        padding: 5px 15px;
    }
    button:hover {
        transition: 0.8s;
        border-radius: 15px 0 15px 0;
        border: none;
        background-color: #2F4450;
        color: #fff;
        font-family: 'Carter One', cursive;
        font-size: 15px;
        padding: 5px 15px;
    }
    label {
        padding: 4px 0 0 0;
        width: 30px;
        font-family: 'Old Standard TT', serif;
        font-size: 25px;
    }
`;