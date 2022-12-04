import React, { useState,useRef,useEffect } from 'react'
import {io} from "socket.io-client";
import Peer from "simple-peer";
const socket = io("https://nobroker-chat-ioserver.onrender.com");
const Chat = () => {
    
    const [id, setid] = useState('')
    const[stream,setstream]=useState(null)
    // const[stream2,setstream2]=useState('')
    const[name,setname]=useState('')
    const [idToCall, setIdToCall] = useState("");
    const [callAccepted, setCallAccepted] = useState(false);
    const [caller, setCaller] = useState("");
    const [callerSignal, setCallerSignal] = useState();
    const [callEnded, setCallEnded] = useState(false);
    const [receivingCall, setReceivingCall] = useState(false);

    const myVideo = useRef();
    const userVideo = useRef();
    const connectionRef = useRef();
    //This will establish a connection between the client and the server that we

    //have created

    //On establishing the connection the socket will emit the unique id associated

    //with the connection between the client and the socketio server.
    useEffect((

      )=>{

        socket.on("me", (id) => {
          setid(id)
        //set the id
    
        });//This is a listener on the function that emits the unique id when the connection is made.
      },[])

    //We can use this id in the future.
    useEffect(() => {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((currentStream) => {
          setstream(currentStream);
          myVideo.current.srcObject = currentStream;
        });
      console.log("yuhu")
      socket.on("calluser", ({ from, name, signal }) => {
        setReceivingCall(true);
        setCaller(from);
        setname(name);
        setCallerSignal(signal);
      });
      // eslint-disable-next-line
    }, [socket]);
    //set the stream
    //we can also create a reference to this stream so it can directly be
    // used inside a component using the useRef hook
    
    //creating a callUser function to enable calling another user using the users 

  //unique socketio connection id

  const callUser = (id2) => {
    console.log("hj")
    const peer = new Peer({
            initiator: true,
            trickle: false,
            stream: stream //this is the current users stream
    });

    peer.on("signal", (data) => {
        socket.emit("calluser", {
            userToCall: id2,
            signalData: data,
            from:id ,//myId,
            name: name//myName

        })

    });

    peer.on("stream", (stream2) => {
      userVideo.current.srcObject = stream2;
        //other users stream can be stored to be displayed.

    });

    socket.on("callaccepted", ({ signal }) => {
      console.log("call")
      setCallAccepted(true);
      peer.signal(signal);
    });
    connectionRef.current = peer; //set the current peer connection

    };

  //answerCall function to accept an incoming peers call.

  const answerCall = () => {
    setCallAccepted(true);
    const peer = new Peer({

      initiator: false,

      trickle: false,

      stream: stream,

    });

    peer.on("signal", (data) => {
      
      socket.emit("answercall", { signal: data, to: caller });
      console.log("call")
    });

    peer.on("stream", (stream2) => {

      userVideo.current.srcObject = stream2;

    });

    peer.signal(callerSignal);

    connectionRef.current = peer;

  };

  //leaveCall function to destroy the peer-to-peer connection

  const leaveCall = () => {
    setCallEnded(true);
    connectionRef.current.destroy();
    window.location.reload();
  };

  return (
    <>
        <div className="container">
          {stream && <video playsInline ref={myVideo} muted autoPlay/>}
        </div>
        <div className="container">
          {callAccepted && !callEnded && <video playsInline ref={userVideo} autoPlay/>}
        </div>
        <div className="container">
          {receivingCall && !callAccepted && (
            <>
            <span>{name}</span>
            <button className="btn btn-success" onClick={answerCall}>Accept</button>
            </>
          )}
        </div>
        <div className="container">
          {receivingCall && !callAccepted && (
            <>
            <span>{name}</span>
            <button className="btn btn-success" onClick={answerCall}>Accept</button>
            </>
          )}
        </div>
        <div className="container">
        <button
                      type="submit"
                      onClick={() => callUser('Vzeqqcf19L0CN6o-AAAD')}
                    >
                      Join
                    </button>
        </div>
    </>
  )
}

export default Chat