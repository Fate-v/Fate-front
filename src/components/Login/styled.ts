import styled from "styled-components";

type InputProp = {
    warning : boolean
}

export const LoginWapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 100px;


    .square{
        border-radius: 0px;
        width:300px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
`;

export const Title = styled.h1`
    font-size: 80px;
    font-weight: 300;
`;

export const Inputs = styled.div<InputProp>`
    margin: 0 auto;
    height: 400px;
    width: 580px;
    display: flex;
    flex-direction: column;
    align-items: center;

    input{
        height: 90px;
        width: 100%;
        border-radius: 10px;
        text-align: center;
        font-size: 25px;
        border: none;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        
        ::placeholder{
            color: ${(props) => props.warning ? "red": "gray" };
        }

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
    height: 90px;
    color: white;
    font-size: 25px;
    border: none;
    border-radius: 10px;
    text-align: center;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    cursor: pointer;
`;

export const Modal = styled.div`
    position: absolute;
    top: 70px;
    right: 100px;
    width: 50px;
    height: 50px;
    color: white;
    background-color: gray;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    cursor: pointer;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    font-size: 24px;

    transition: all 0.1s ease-out;

    .hidden{
        width: 0px;
        height: 0px;
        background-color: transparent;
        color: transparent;
    }
    
    .show{
        width: 300px;
    }

`;

export const ModalDetail = styled.div`
    position: absolute;
    top: 50px;
    right: 0px;
    width: 300px;
    height: 200px;
    background-color: #bdbebd;
    
    display: block;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding:15px 10px;
    color: white;

    transition: all 0.1s ease-out;

`;