import React from "react";
import "./ChatContact.styles.scss";
import FaceIcon from "@material-ui/icons/Face";

const ChatContact = () => {
  return (
    <div className="chat-contact">
      <div className="person-img">
        <FaceIcon style={{ fontSize: 50 }} className="person-image" />
      </div>
      <div className="name-and-message">
        <p id="name">Neil Dahiya</p>
        <p id="last-mess">This was his last message</p>
      </div>
      <div className="timestamp">5:00 AM</div>
    </div>
  );
};

export default ChatContact;
