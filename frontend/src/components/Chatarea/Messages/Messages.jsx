import React, { Component } from "react";
import "./Messages.styles.scss";
import { v4 as uuidv4 } from "uuid";
import io from "socket.io-client";
import Message from "./Message/Message";
class Messages extends Component {
  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }
  render() {
    const { messages } = this.props;
    const socket = io("http://localhost:5000");
    socket.emit("new chat page", {
      personName: messages,
    });
    // console.log(messages);
    return (
      <div className="messages">
        {messages && messages.length ? (
          messages.map((message) => {
            return (
              <Message
                key={uuidv4()}
                message={message}
                isSender={message.isSender}
              />
            );
          })
        ) : (
          <div>No messages found</div>
        )}
        <div
          style={{ float: "left", clear: "both" }}
          ref={(el) => {
            this.messagesEnd = el;
          }}
        ></div>
      </div>
    );
  }
}
export default Messages;
