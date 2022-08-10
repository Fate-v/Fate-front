import { useState } from 'react';
import * as S from "./styled";


const Chat = () => {
    const [name,setName] = useState("");
    const [warning, setWarning] = useState(false);
    const onClick = () => {
        if(name == ""){setWarning(true); return}
        
    }
  return (
    <S.ChatWapper>
      <S.Header>
        <S.WhiteSpace />
        <S.Title>Fate</S.Title>
        <S.HeaderBtn>방나가기</S.HeaderBtn>
      </S.Header>
    <S.Select>
    </S.Select>
    <S.InputWapper>
        <input type={"text"} value="내용을 입력하세요"/>
        <S.SendBtn></S.SendBtn>
    </S.InputWapper>
    </S.ChatWapper>
  )
}

export default Chat