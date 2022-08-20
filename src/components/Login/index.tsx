import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import * as S from "./styled";


const Login = () => {
    const router = useRouter();
    const InputRef = useRef<any>();

    const [warning, setWarning] = useState<boolean>(false);
    const [name,setName] = useState<string>("");

    const enterKeyPress = (event: any) => { //enter key 이벤트함수
      if (event.key === "Enter") {
        event.preventDefault();
        onClick();
      }
    };

    const onClick = () => {
        if(name == ""){
            setWarning(true);
            InputRef.current.focus();
            return;
        }
        window.sessionStorage.setItem("fate-name",name);
        router.push("/chat");
    }
    const onchange = (e:any) =>{
        if(e.target.value){setWarning(false)}
        setName(e.target.value);
    }
  return (
    <S.LoginWapper>
      <S.Title>Fate</S.Title>
      <S.Inputs warning={warning}>
        <input ref={InputRef} placeholder='이름입력'  style={{outlineColor : warning ? "red" : name ?  "blue" : "gray" }} 
        type={"text"} value={name} onChange={onchange} onKeyPress={enterKeyPress} />
        <p style={{ visibility : warning ? "visible" : "hidden"}}>이름을 입력하세요</p>
        <S.Btn onClick={onClick}>입장하기</S.Btn>
      </S.Inputs>
    </S.LoginWapper>
  )
}

export default Login;