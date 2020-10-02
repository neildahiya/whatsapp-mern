import React from "react";
import moment from "moment";
import "./Message.styles.scss";
const Message = ({ message, isSender }) => {
  return (
    <div className="message">
      <p
        style={
          isSender
            ? { float: "right", backgroundColor: "#dbf5c6" }
            : { float: "left" }
        }
      >
        {message.text}
        <span>{moment(message.timestamp).format("h:mm a")}</span>
      </p>
    </div>
  );
};

export default Message;
