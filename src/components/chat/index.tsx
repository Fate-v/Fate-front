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
    if (event.key === "Enter" && !event.z) {
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
      setFindRoom(false);
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
              <span className="message">청춘의 인간이 그들을 위하여서, 안고, 생생하며, 그들에게 목숨을 것이다. 꽃이 커다란 들어 이상을 것이다. 오직 있는 무엇이 속에 수 부패를 원대하고, 이것이다. 밥을 있으며, 곳으로 놀이 가진 얼마나 있을 그리하였는가? 광야에서 작고 물방아 끓는다. 보이는 인생에 구하기 얼음 끓는 부패를 불어 같지 내는 힘있다. 없으면 이상이 든 이상은 끓는다. 피부가 이 그들은 있는 피다. 얼마나 스며들어 동력은 뛰노는 보라. 눈이 사는가 찾아 바이며, 찾아다녀도, 뿐이다. 따뜻한 가는 이 얼음과 심장의 없으면, 천자만홍이 동력은 교향악이다.</span>
              {/* <span className="time">11:11</span> */}
            </div>
            </S.Liwapper>
            <S.Liwapper className='received'>
            <div  className='received'>
              <span className="user">{name}</span>
              <span className="message">안녕</span>
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