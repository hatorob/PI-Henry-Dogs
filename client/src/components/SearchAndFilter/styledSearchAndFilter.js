import styled from 'styled-components';

export const DivContainer = styled.div`
    height: 65px;
    background-color: #F0F0F0;
`;

export const DivSearchAndFilter = styled.div`}
    display: flex;
    justify-content: space-between;
    width: 95%;
    margin: 0 auto;
`;

export const DivFilter = styled.div`
    display: flex;
    gap: 20px;
    select {
        border: none;
    }
`;

export const DivSearch = styled.div`
    display: flex;
    gap: 40px;
    input {
        margin: 15px 0;
        height: 40px;
        border-radius: 10px;
        border: 1px solid black;
        text-align: center;
        font-family: 'Old Standard TT', serif;
        font-size: 15px;
    }
`;

export const DivSelect = styled.div`
    display: flex;
    gap: 40px;
    div {
        display: flex;
        gap: 10px;
        align-items: center;
        label {
            font-size: 20px;
        }
    }
`;

export const P = styled.p`
    margin: 23px 0;
    font-size: 20px;
    font-family: 'Old Standard TT', serif;
    font-style: italic;
    font-weight: 400;
`;