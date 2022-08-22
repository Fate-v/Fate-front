import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import * as S from "./styled";


const Login = () => {
    const router = useRouter();
    const InputRef = useRef<any>();

    const [warning, setWarning] = useState<boolean>(false);
    const [name,setName] = useState<string>("");
    const [modalHover, setModalHover] = useState<boolean>(true);  //모달 버튼 hover state
    const [modalDetail , setModalDetail] = useState<boolean>(false);  //모달 설명 hover state

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

    const onModalHover = (option:boolean) =>{
      setModalHover(option);
    }

  return (
    <S.LoginWapper>
      <S.Modal onMouseOver={() => onModalHover(true)} onMouseLeave={() => modalDetail ? onModalHover(false) :   onModalHover(false)}
      className={modalHover ? "square" : ""} >?
        <S.ModalDetail  onMouseOver={() => setModalDetail(true)}  onMouseLeave={() => onModalHover(false)} className={modalHover ? "show" : "hidden" }>
            Fate 는 1대1 익명랜덤채팅 사이트 입니다.
        </S.ModalDetail>
      </S.Modal>
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