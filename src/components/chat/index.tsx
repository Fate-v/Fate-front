import { useState } from 'react';
import * as S from "./styled";


const Chat = () => {
    const [chatting, setChatting] = useState(true);

    const onClick = () =>{

    }

  return (
    <S.ChatWapper>
      <S.Header>
        <S.WhiteSpace />
        <S.Title>Fate</S.Title>
        <S.HeaderBtn style={{backgroundColor : chatting ? "#FF5252" : "#8870FE" }}>{chatting ? "방나가기" : "방찾기"}</S.HeaderBtn>
      </S.Header>
    <S.Select>
        <S.ChattingList >
            <li className='sent'>
            <span className="profile">
            <span className="user">환빈</span>
            </span>
            <span className="message">안녕</span>
            <span className="time">11:11</span>
            </li>
        </S.ChattingList>
    </S.Select>
    <S.InputWapper>
        <input type={"text"} placeholder="내용을 입력하세요"/>
        <S.SendBtn onClick={onClick}>전송</S.SendBtn>
    </S.InputWapper>
    </S.ChatWapper>
  )
}

export default Chat