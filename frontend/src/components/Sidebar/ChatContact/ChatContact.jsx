import React, { useState } from "react";
import "./ChatContact.styles.scss";
import FaceIcon from "@material-ui/icons/Face";

const ChatContact = ({ chat }) => {
  const [lastDetails, setLastDetails] = useState({
    lastMessage: "",
    lastTime: "",
  });

  return (
    <div className="chat-contact">
      <div className="person-img" id={chat.id}>
        <FaceIcon style={{ fontSize: 50 }} className="person-image" />
      </div>
      <div className="name-and-message" id={chat.id}>
        <p className="name" id={chat.id}>
          {chat.otherPerson}
        </p>
        <p className="last-mess" id={chat.id}>
          This was his last message
        </p>
      </div>
      <div className="timestamp" id={chat.id}>
        5:00 AM
      </div>
    </div>
  );
};

export default ChatContact;
