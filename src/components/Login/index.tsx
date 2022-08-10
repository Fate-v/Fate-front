import Head from 'next/head'
import * as S from "./styled";


const Login = () => {
  return (
    <S.LoginWapper>
      <S.Title>Fate</S.Title>
      <S.Inputs>
        <input type={"text"} />
        <S.Btn value={"입장하기"} />
      </S.Inputs>
    </S.LoginWapper>
  )
}

export default Login