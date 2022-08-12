import styled from "styled-components";

export const LoginWapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 100px;
`;

export const Title = styled.h1`
    font-size: 100px;
`;

export const Inputs = styled.div`
    margin: 0 auto;
    height: 400px;
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;

    input{
        height: 70px;
        width: 100%;
        border-radius: 10px;
        text-align: center;
        font-size: 25px;
        border: none;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        
    }

    p{
        margin-bottom: 50px;
        font-size: 25px;
        color: red;
    }
`;
 
export const Btn = styled.button`
    background-color: #8870FE;
    width: 100%;
    height: 70px;
    color: white;
    font-size: 25px;
    border: none;
    border-radius: 10px;
    text-align: center;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    cursor: pointer;
`;