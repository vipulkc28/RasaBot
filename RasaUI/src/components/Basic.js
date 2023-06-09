import "./chatBot.css";
import { useEffect, useState } from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import SendIcon from "@mui/icons-material/Send";
import { IconButton } from "@mui/material";
import Navbar from "./Navbar";
import userIcon from '../img/user.png';
import botIcon from '../img/bot.png';

function Basic() {
  const [chat, setChat] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [botTyping, setbotTyping] = useState(false);

  useEffect(() => {
    console.log("called");
    const objDiv = document.getElementById("messageArea");
    objDiv.scrollTop = objDiv.scrollHeight;
  }, [chat]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const name = "MITRABot";
    const request_temp = { sender: "user", sender_id: name, msg: inputMessage };

    if (inputMessage !== "") {
      setChat((chat) => [...chat, request_temp]);
      setbotTyping(true);
      setInputMessage("");
      rasaAPI(name, inputMessage);
    } else {
      window.alert("Please enter valid message");
    }
  };

  const rasaAPI = async function handleClick(name, msg) {
    //chatData.push({sender : "user", sender_id : name, msg : msg});

    await fetch("http://localhost:5005/webhooks/rest/webhook", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        charset: "UTF-8",
      },
      credentials: "same-origin",
      body: JSON.stringify({ sender: name, message: msg }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          const temp = response[0];
          var tmpImg = response[1];
          
          // var img = tmpImg["image"].split(',');
          // console.log(img);
          tmpImg = tmpImg?tmpImg:{"image":""};

          const recipient_id = temp["recipient_id"];
          const recipient_msg = temp["text"];
          const recipient_image = tmpImg["image"].split(',');

          const response_temp = {
            sender: "bot",
            recipient_id: recipient_id,
            msg: recipient_msg,
            rimage: recipient_image,
          };
          setbotTyping(false);

          setChat((chat) => [...chat, response_temp]);

          // scrollBottom();
        }
      });
  };

  console.log(chat);

  const stylecard = {
    padding: "0px",
  };
  const styleFooter = {
    //maxWidth : '32rem',
    height: "11vh",
    borderTop: "1px solid #ccc",
    paddingTop: "5px",
  };
  const styleBody = {
    paddingTop: "10px",
    height: "85vh",
    overflowY: "a",
    overflowX: "hidden",
  };

  return (
    <div>
      {/* <button onClick={()=>rasaAPI("shreyas","hi")}>Try this</button> */}

      <div className="container">
        <div className="row justify-content-center">
          <div className="card" style={stylecard}>
            {/* <div className="cardHeader text-white" style={styleHeader}>
              <h1 style={{ marginBottom: "0px" }}>MITRABot</h1>
              {botTyping ? <h6>Bot Typing....</h6> : null}
            </div> */}
            <Navbar botTyping={botTyping} />
            <div className="cardBody" id="messageArea" style={styleBody}>
              <div className="row msgarea">
                {chat.map((user, key) => (
                  <div key={key}>
                    {user.sender === "bot" ? (
                      <>
                        <div className="msgalignstart">
                          {/* Bot Icon */}
                          <img src={botIcon} alt="Bot Icon" height={30}/>
                          <p className="botmsg">{user.msg}</p>
                        </div>
                        {user["rimage"].map((img, i) => 
                          <div key={i}>
                            <img
                              className="img-response"
                              src={img}
                              alt=""
                            />
                          </div>
                      )}
                        
                      </>
                    ) : (
                      <>
                        <div className="msgalignend">
                          <p className="usermsg">{user.msg}</p>
                          <img src={userIcon} alt="user-icon" height={30}/>
                        </div>
                        <div>
                          <img src={user.rimage} alt="" />
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="cardFooter text-white" style={styleFooter}>
              <div className="row">
                <form style={{ display: "flex" }} onSubmit={handleSubmit}>
                  <div className="col-12" style={{ paddingRight: "0px" }}>
                    <input
                      onChange={(e) => setInputMessage(e.target.value)}
                      value={inputMessage}
                      type="text"
                      className="msginp"
                    ></input>
                    <IconButton
                      className="circleBtn"
                      type="submit"
                      aria-label="delete"
                    >
                      <SendIcon />
                    </IconButton>
                  </div>
                  <div className=" cola">
                    {/* <button type="submit" className="circleBtn">
                      <IoMdSend className="sendBtn" />
                    </button> */}
                    
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basic;
