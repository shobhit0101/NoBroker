import './chat-interface.css'

const ChatInterface = () => {
    return (
        <div className="BoxChat" style={{"marginTop":"5rem"}}>
            <div className="BoxInfoUser">
                <img src="https://w7.pngwing.com/pngs/954/328/png-transparent-computer-icons-user-profile-avatar-heroes-head-recruiter-thumbnail.png" className="ImageProfileBot" />
                <p className="NameBot">Owoner</p>
                <div className="Menu">
                    <div>New chat</div>
                </div>
            </div>
            <div className="BoxMassage">
                {/* <div className="SendmsgNow">send now Massage (hello , how are you,...)</div> */}
            </div>
            <div className="BoxSend">
                <input type="text" className="msgUser" placeholder="enter your text..." />
                <button className='send-btn'><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
                <button className='send-btn'><i class="fa fa-video-camera" aria-hidden="true"></i></button>
                {/* <div className="send"><svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M7.75778 6.14799C6.84443 5.77187 6.0833 5.45843 5.49196 5.30702C4.91915 5.16036 4.18085 5.07761 3.63766 5.62862C3.09447 6.17962 3.18776 6.91666 3.34259 7.48732C3.50242 8.07644 3.8267 8.83302 4.21583 9.7409L4.86259 11.25H10C10.4142 11.25 10.75 11.5858 10.75 12C10.75 12.4142 10.4142 12.75 10 12.75H4.8626L4.21583 14.2591C3.8267 15.167 3.50242 15.9236 3.34259 16.5127C3.18776 17.0833 3.09447 17.8204 3.63766 18.3714C4.18085 18.9224 4.91915 18.8396 5.49196 18.693C6.0833 18.5416 6.84443 18.2281 7.75777 17.852L19.1997 13.1406C19.4053 13.0561 19.6279 12.9645 19.7941 12.867C19.944 12.779 20.3434 12.5192 20.3434 12C20.3434 11.4808 19.944 11.221 19.7941 11.133C19.6279 11.0355 19.4053 10.9439 19.1997 10.8594L7.75778 6.14799Z"
                        fill="black" />
                </svg></div> */}
            </div>

        </div>
    )
}

export default ChatInterface