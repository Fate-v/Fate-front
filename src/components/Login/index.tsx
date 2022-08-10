import { useState } from 'react';
import * as S from "./styled";


const Login = () => {
    const [name,setName] = useState("");
    const [warning, setWarning] = useState(false);
    const onClick = () => {
        if(name == ""){setWarning(true); return}
        
    }
  return (
    <S.LoginWapper>
      <S.Title>Fate</S.Title>
      <S.Inputs>
        <input placeholder='이름 입력'  type={"text"} value={name} onChange={(e) => setName(e.target.value)}/>
        <S.Btn onClick={onClick}>입장하기</S.Btn>
      </S.Inputs>
    </S.LoginWapper>
  )
}

export default Login