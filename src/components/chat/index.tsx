import { useCallback, useEffect, useState } from 'react';
import * as S from "./styled";
import { useRecoilState } from 'recoil';
import { nameState } from '../../recoil/state';
const URL = "url/1234:40001"

import SocketIOClient from "socket.io-client";

interface IMessage {
    user: string;
    message: string;
  }

const Chat = () => {
    const [chatting, setChatting] = useState(true);
    const [sendMessage, setSendMessage] = useState<string>("");
    const [connected, setConnected] = useState<boolean>(false);
    const [chat, setChat] = useState<IMessage[]>([]);
    
    const [room, setRoom] = useState("");


    const [name, setName] = useRecoilState(nameState);

    useEffect(() : any =>{
        const socket = SocketIOClient(URL);

        socket.on("connect", () =>{
            console.log("SOCKET CONNECT!",socket.id);
            setConnected(true);
        });

        socket.on("message", (message:IMessage) => {
          chat.push(message);
          setChat([...chat]);
        });

        if (socket) return () => socket.disconnect();

    },[]);
  
  const sendMessageHandler  = useCallback( // input event
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
        <input type={"text"} placeholder="내용을 입력하세요" onKeyPress={enterKeyPress} onChange={sendMessageHandler}/>
        <S.SendBtn >전송</S.SendBtn>
    </S.InputWapper>
    </S.ChatWapper>
  )
}

export default Chat