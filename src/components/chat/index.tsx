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
      <S.Title>Fate</S.Title>
      <S.Inputs>
        <input type={"text"} value={name} onChange={(e) => setName(e.target.value)}/>
        <S.Btn onClick={onClick}>입장하기</S.Btn>
      </S.Inputs>
    </S.ChatWapper>
  )
}

export default Chat