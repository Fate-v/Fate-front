import { useCallback, useEffect, useState } from 'react';
import * as S from "./styled";
import { useRecoilState } from 'recoil';
import { nameState, roomNumber } from '../../recoil/state';
const URL = "url/1234:40001"

import {io} from "socket.io-client";

interface IMessage {
    user: string;
    message: string;
  }

const Chat = () => {
    const [chatting, setChatting] = useState(true);
    const [sendMessage, setSendMessage] = useState<string>("");
    const [connected, setConnected] = useState<boolean>(false);
    const [chat, setChat] = useState<IMessage[]>([]);
    
    const [room, setRoom] = useRecoilState(roomNumber)
    const [name, setName] = useRecoilState(nameState);

    const socket = io(URL);

    useEffect(() : any =>{

        socket.on("connect", () =>{     // socket 연결
            console.log("SOCKET CONNECT!",socket.id);
            setConnected(true);

        });

        socket.emit('requestRandomChat'); // 채팅할 방 요청

        socket.on('completeMatch', function(data){ // 요청 완료됬을때
          console.log('completeMatch!');
        });

        socket.on("sendMessage", (message:IMessage) => { //message
          chat.push(message);
          setChat([...chat]);
        });

        if (socket) return () => socket.disconnect();

    },[]);
  
  const sendMessageHandler  = useCallback( // input 입력 이벤트함수
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSendMessage(event.target.value);
    },
    [sendMessage]
  );

  const enterKeyPress = (event: any) => { //enter key event
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

      // const response = await axios.post("/api/chat", message);
      setSendMessage("");
    }
  };

  const HeaderBtnClick = () =>{ 
    if(chatting){  //방나가기일때
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
        <S.HeaderBtn style={{backgroundColor : chatting ? "#FF5252" : "#8870FE" }} onClick={HeaderBtnClick}>{chatting ? "방나가기" : "방찾기"}</S.HeaderBtn>
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
        <input type={"text"} placeholder="내용을 입력하세요" onKeyPress={enterKeyPress} onChange={sendMessageHandler}/>
        <S.SendBtn >전송</S.SendBtn>
    </S.InputWapper>
    </S.ChatWapper>
  )
}

export default Chat