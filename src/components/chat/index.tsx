import { useCallback, useEffect, useState } from 'react';
import * as S from "./styled";
const URL = "url/1234:40001" //서버주소

import {io} from "socket.io-client";

interface IMessage { //메세지  type
    name: string;
    message: string;
  }

const Chat = () => {
    const [connected, setConnected] = useState<boolean>(false); // socket 에 연결
    const [findRoom , setFindRoom] = useState<boolean>(false);  // 방찾기
    const [sendMessage, setSendMessage] = useState<string>(""); // 보낼메세지
    const [chat, setChat] = useState<IMessage[]>([]);           // 총 메세지
    const [name,setName] = useState("");

    useEffect(()=>{
      if (typeof window !== 'undefined') { //pre-Rendering 오류 방지
        setName(window.sessionStorage.getItem('fate-name') ?? "none");
      }
    },[])
    const socket = io(URL);

    useEffect(() : any =>{

        socket.on("connect", () =>{     // socket 연결
            console.log("connected!");
            setConnected(true);
        });
        socket.emit('requestRandomChat'); // 채팅할 방 요청

        socket.on('completeMatch', function(data){ // 요청 완료됬을때
          console.log('방매칭에 성공했습니다!');
          setFindRoom(true);
        });

        socket.on("receiveMessage", (message:IMessage) => { //메세지 받기
          chat.push(message);
          setChat([...chat]);
        });

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
        name: name ?? "none",
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
        <S.ChattingList>
          {chat ? (
              chat.map((item,index) => (
              <S.Liwapper className={item.name === name ? "sent" : "received"}  key={index}>
                <div>
                  <span className="user">{name}</span>
                  <span className="message">{item.message}</span>
                  {/* <span className="time">11:11</span> */}
                </div>
              </S.Liwapper>
              ))
            ) : (<p>loding...</p>)
          }
          
            <S.Liwapper   className='sent'>
            <div  className='sent'>
              <span className="user">{name}</span>
              <p className="message">image.asdfasdfasdfasdfasdf</p>
              {/* <span className="time">11:11</span> */}
            </div>
            </S.Liwapper>
            <S.Liwapper className='received'>
            <div  className='received'>
              <span className="user">{name}</span>
              <p className="message">안녕</p>
              {/* <span className="time">11:11</span> */}
            </div>
            </S.Liwapper>
            
        </S.ChattingList>
    </S.Select>
    <S.InputWapper>
        <input type={"text"} placeholder={findRoom ? "내용을 입력하세요" : "대화중이 아닙니다"} 
        value={findRoom ? sendMessage : ''} onKeyPress={enterKeyPress} onChange={sendMessageHandler}/>
        <S.SendBtn >전송</S.SendBtn>
    </S.InputWapper>
    </S.ChatWapper>
  )
}

export default Chat