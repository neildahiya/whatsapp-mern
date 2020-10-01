import React, { Component } from "react";
import ChatContact from "../ChatContact/ChatContact";
import "./Chats.styles.scss";
class Chats extends Component {
  render() {
    return (
      <div>
        <ChatContact className="active" />
        <ChatContact />
        <ChatContact />
      </div>
    );
  }
}
export default Chats;
