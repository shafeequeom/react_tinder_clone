import React from "react";
import { useState } from "react";
import "./ChatScreen.css";
import { Avatar } from "@material-ui/core";

function ChatScreen() {
  const [messages, setMessages] = useState([
    {
      name: "Ellen",
      image:
        "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2020%2F07%2F27%2Fellen-degeneres.jpg",
      message: "Whats up?",
    },
    {
      name: "Ellen",
      image:
        "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2020%2F07%2F27%2Fellen-degeneres.jpg",
      message: "How are you",
    },
    {
      message: "I am great!",
    },
  ]);
  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH ELLEN ON 10TH JUNE 2020
      </p>
      {messages.map((message) => (
        <div className="chatScreen__message">
          <Avatar
            className="chatScreen__image"
            alt={message.name}
            src={message.image}
          />
          <p className="chatScreen__text">{message.message}</p>
        </div>
      ))}
    </div>
  );
}

export default ChatScreen;
