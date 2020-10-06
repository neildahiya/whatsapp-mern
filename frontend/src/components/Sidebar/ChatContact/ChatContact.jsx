import React, { useState } from "react";
import "./ChatContact.styles.scss";
import FaceIcon from "@material-ui/icons/Face";

const ChatContact = ({ chat }) => {
  // console.log(chat);
  const [lastDetails, setLastDetails] = useState({
    lastMessage: "",
    lastTime: "",
  });

  return (
    <div className="chat-contact">
      <div className="person-img" id={chat._id} name={chat.email}>
        <FaceIcon style={{ fontSize: 50 }} className="person-image" />
      </div>
      <div className="name-and-message" id={chat._id} name={chat.email}>
        <p className="name" name={chat.email} id={chat._id}>
          {chat.username}
        </p>
        <p className="last-mess" id={chat._id} name={chat.email}>
          This was his last message
        </p>
      </div>
      <div className="timestamp" id={chat._id} name={chat.email}>
        5:00 AM
      </div>
    </div>
  );
};

export default ChatContact;
