import React, { Component } from "react";
import "./Chatroom.styles.scss";
import Sidebar from "../Sidebar/Sidebar";
import Chatarea from "../Chatarea/Chatarea";
import io from "socket.io-client";
class Chatroom extends Component {
  render() {
    return (
      <div className="chat-room">
        <Sidebar />
        <Chatarea />
      </div>
    );
  }
}
export default Chatroom;
