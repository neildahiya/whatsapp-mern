import React, { Component } from "react";
import ChatareaHeader from "./ChatareaHeader/ChatareaHeader";
import "./Chatarea.styles.scss";
import Messages from "./Messages/Messages";
import ChatInput from "./ChatInput/ChatInput";
class Chatarea extends Component {
  render() {
    return (
      <div className="chat-area">
        <ChatareaHeader />
        <Messages />
        <ChatInput />
      </div>
    );
  }
}

export default Chatarea;
