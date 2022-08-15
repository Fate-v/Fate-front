import { useCallback, useEffect, useState } from 'react';
import * as S from "./styled";
import { useRecoilState } from 'recoil';
import { nameState } from '../../recoil/state';
const URL = "url/1234:40001" //서버주소

import {io} from "socket.io-client";

interface IMessage { //메세지  type
    user: string;
    message: string;
  }

const Chat = () => {
    const [connected, setConnected] = useState<boolean>(false); // socket 에 연결
    const [findRoom , setFindRoom] = useState<boolean>(false);  // 방찾기
    const [sendMessage, setSendMessage] = useState<string>(""); // 보낼메세지
    const [chat, setChat] = useState<IMessage[]>([]);           // 총 메세지
    
    const [name, setName] = useRecoilState(nameState);

    const socket = io(URL);

    useEffect(() : any =>{

        socket.on("connect", () =>{     // socket 연결
            console.log("SOCKET CONNECT!",socket.id);
            setConnected(true);

        });

        socket.emit('requestRandomChat'); // 채팅할 방 요청

        socket.on('completeMatch', function(data){ // 요청 완료됬을때
          console.log('방매칭에 성공했습니다!');
          setFindRoom(true);
        });

        socket.on("receiveMessage", (message:IMessage) => { //메세지   받기
          chat.push(message);
          setChat([...chat]);
        });

        // if (socket) return () => socket.disconnect();

    },[]);
  
  const sendMessageHandler  = useCallback( // input 입력 이벤트함수
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSendMessage(event.target.value);
    },
    [sendMessage]
  );

  const enterKeyPress = (event: any) => { //enter key 이벤트함수
    if (event.key === "Enter" && !event.shiftKey) {
      // send message
      event.preventDefault();
      submitSendMessage(event);
    }
  };

  const submitSendMessage = async (event: React.FormEvent<HTMLButtonElement>) => { // 메세지 전송
    event.preventDefault();
    if (sendMessage) {
      const message: IMessage = {
        user: name,
        message: sendMessage,
      };

      socket.emit('sendMessage', {message:message}); // 메세지 보내기
      setSendMessage(""); //input 초기화
    }
  };

  const HeaderBtnClick = () =>{ 
    if(connected){  //방나가기일때
      socket.emit('cancelRequest');
    }
    else{  //방찾기일떄
      socket.emit('requestRandomChat'); // 채팅할 방 요청
    }
  }


  return (
    <S.ChatWapper>
      <S.Header>
        <S.WhiteSpace />
        <S.Title>Fate</S.Title>
        <S.HeaderBtn style={{backgroundColor : connected ? "#FF5252" : "#8870FE" }} 
        onClick={HeaderBtnClick}>{connected ? "방나가기" : "방찾기"}</S.HeaderBtn>
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
        <input type={"text"} placeholder={findRoom ? "내용을 입력하세요" : "상대방을 찾는중입니다"} 
        value={findRoom ? sendMessage : ''} onKeyPress={enterKeyPress} onChange={sendMessageHandler}/>
        <S.SendBtn >전송</S.SendBtn>
    </S.InputWapper>
    </S.ChatWapper>
  )
}

export default Chat