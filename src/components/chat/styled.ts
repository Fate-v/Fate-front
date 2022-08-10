import styled from "styled-components";

export const ChatWapper = styled.div`
    width:100%;
    height:100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items:center;
`;

export const Header = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: space-around;
`;
export const WhiteSpace = styled.div`
    width: 100px;
    height: 100%;
`;
export const Title = styled.title`
    font-size: 35px;
`;
export const HeaderBtn = styled.button`
    width: 100px;
    height: 130px;
    border-radius: 10px;
    color: white;
    background-color: red;
`;

export const Select = styled.select`
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    overflow-y: scroll;
`;

export const InputWapper = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    input{
        border: 1px solid black;
        outline: none;
        width: 80%;

    }
`;

export const SendBtn = styled.button`
    width: 100px;
    height: 100px;
    background-color: black;
    color: white;
`;