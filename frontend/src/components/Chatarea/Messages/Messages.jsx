import React, { Component } from "react";
import "./Messages.styles.scss";
import { v4 as uuidv4 } from "uuid";
import io from "socket.io-client";
import Message from "./Message/Message";
import { connect } from "react-redux";

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
    let { messages, user } = this.props;
    const socket = io("http://localhost:5000");
    socket.emit("new chat page", {
      personName: messages,
    });
    messages = messages.messages;
    // console.log(messages.messages);
    return (
      <div className="messages">
        {messages && messages.length ? (
          messages.map((message) => {
            return (
              <Message
                key={uuidv4()}
                message={message}
                isSender={message.fromPerson === user.username}
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
const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    messages: state.chats.messages || [],
  };
};
export default connect(mapStateToProps)(Messages);
