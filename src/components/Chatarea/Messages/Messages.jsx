import React, { Component } from "react";
import "./Messages.styles.scss";
import Message from "./Message/Message";
class Messages extends Component {
  render() {
    return (
      <div className="messages">
        <Message isSender={false} />
        <Message isSender={true} />
        <Message isSender={false} />
        <Message isSender={true} />
        <Message isSender={false} />
        <Message isSender={true} />
        <Message isSender={false} />
        <Message isSender={true} />
        <Message isSender={false} />
        <Message isSender={true} />
        <Message isSender={false} />
        <Message isSender={true} />
        <Message isSender={false} />
        <Message isSender={true} />
        <Message isSender={false} />
      </div>
    );
  }
}
export default Messages;
