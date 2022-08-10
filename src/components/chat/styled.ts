import styled from "styled-components";

export const ChatWapper = styled.div`
    width:100%;
    height:100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items:center;
`;

export const Header = styled.div`
    width: 90%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 5%;
    border: none;
`;
export const WhiteSpace = styled.div`
    width: 100px;
    height: 100%;
`;
export const Title = styled.h1`
    font-size: 60px;
`;
export const HeaderBtn = styled.button`
    width: 100px;
    height: 50px;
    border-radius: 10px;
    color: white;
    background-color: #FF5252;
    border: none;
    font-size: 15px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const Select = styled.div`
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    overflow-y: scroll;

    border: 1px solid gray;
`;
export const ChattingList = styled.ul`
    width: 100%;
    li{
        width: 60%;
        padding: 0.3rem;
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        margin-top: 0.5rem;
    }

    .profile{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    }
    .profile .user{
        font-size: 20px;
        margin-bottom: 0.3rem;
    }

    .message {
        border-radius: 5px;
        padding: 0.5rem;
        font-size: 32px;
        margin:  0 5px;
        flex: 7;
    }
    .time{
        font-size: 20px;
        margin: 0 5px;
    }

    .sent{
        flex-direction: row-reverse;
        float: right;
    }

    .sent .message{
    background: #ffeb33;
    }

    .received .message{
        background: #fff;
    }
`;





export const InputWapper = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 70px;

    input{
        border: none;
        outline: none;
        width: 80%;
        height: 60px;
        border-radius: 25px;
        padding-left: 50px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
`;

export const SendBtn = styled.button`
    width: 100px;
    height: 60px;
    background-color: black;
    color: white;
    border-radius: 10px;
    border: none;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;