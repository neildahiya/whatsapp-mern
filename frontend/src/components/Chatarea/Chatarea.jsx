import React, { Component } from "react";
import ChatareaHeader from "./ChatareaHeader/ChatareaHeader";
import "./Chatarea.styles.scss";
import Messages from "./Messages/Messages";
import ChatInput from "./ChatInput/ChatInput";
import { connect } from "react-redux";
class Chatarea extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { activeChat, active } = this.props;
    // console.log(activeChat);
    // console.log(activeChat.messages);
    return activeChat ? (
      <div className="chat-area">
        <ChatareaHeader person={activeChat.username} />
        {/* <Messages messages={activeChat.chats} /> */}
        <Messages />
        <ChatInput />
      </div>
    ) : (
      <div className="chat-area">
        It seems no person has signed up to the platform other than you
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    // activeChat: state.chats.chats[state.chats.active] || null,
    activeChat:
      state.chats.allUsers.filter((chat) => {
        return chat._id == state.chats.active;
      })[0] ||
      state.chats.allUsers[0] ||
      null,
    active: state.chats.active,
  };
};
export default connect(mapStateToProps)(Chatarea);
