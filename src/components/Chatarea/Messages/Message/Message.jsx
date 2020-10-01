import React from "react";
import "./Message.styles.scss";
const Message = ({ isSender }) => {
  return (
    <div className="message">
      <p
        style={
          isSender
            ? { float: "right", backgroundColor: "#dbf5c6" }
            : { float: "left" }
        }
      >
        Message Message Message Message Message Message Message Message Message
        <span>5:00 AM</span>
      </p>
    </div>
  );
};

export default Message;
