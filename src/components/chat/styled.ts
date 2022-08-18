import styled from "styled-components";

export const ChatWapper = styled.div`
    width:100%;
    height:100vh;
    flex-direction: column;
    justify-content: flex-start;
    align-items:center;
    overflow: none;
`;

export const Header = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    padding: 0 5%;
    background-color: white;
`;
export const WhiteSpace = styled.div`
    width: 100px;
    height: 100%;
`;
export const Title = styled.h1`
    font-size: 40px;
    font-weight: 100;
`;
export const HeaderBtn = styled.button`
    width: 100px;
    height: 50px;
    border-radius: 10px;
    color: white;
    border: none;
    font-size: 20px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    :hover{
        cursor: pointer;
    }
`;


export const Select = styled.div`
    width: 100%;
    height: 650px;
    overflow-y: scroll;
    overflow-x: hidden;
    background-color: #f4f4f4;
`;

export const ChattingList = styled.ul`
    width: 100%;
    height: 100%;
    list-style:none;
    padding : 0 15px;
    display: flex;
    flex-direction: column;
    
    .user{
        font-size: 15px;
        margin-bottom: 0.3rem;
    }

    .message {
        border-radius: 5px;
        padding: 10px 10px;
        font-size: 22px;
        margin:  0 5px;
        flex: 7;
    }
    .time{
        font-size: 15px;
        margin: 0 5px;
    }

    .sent{
        flex-direction: row-reverse;
        float: right;
    }

    .sent .message{
    background: #c8d2ff;
    }

    .received .message{
        background: #fff;
    }

`;

export const Liwapper = styled.li`
    width: 100%;
    height: max-content;
    min-height: 50px;
    padding: 0.3rem;
    gap: 10px;
    margin-top: 0.5rem;
    flex-direction: row;
    /* border: 1px solid black; */
    
    div{
        width: max-content;
        max-width: 700px;
        height: max-content;
        margin: 10px 0;
    
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        gap: 15px;

        span{
            word-break: break-all; //줄바꿈
        }
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
        border-radius: 10px;
        padding-left: 50px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        font-size: 20px;
    }
`;

export const SendBtn = styled.button`
    width: 100px;
    height: 60px;
    background-color: black;
    color: white;
    border-radius: 10px;
    border: none;
    font-size: 20px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

    :hover{
        cursor: pointer;
    }
`;