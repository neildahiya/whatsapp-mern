import React, { Component } from "react";
import ChatareaHeader from "./ChatareaHeader/ChatareaHeader";
import "./Chatarea.styles.scss";
import Messages from "./Messages/Messages";
import ChatInput from "./ChatInput/ChatInput";
import { connect } from "react-redux";
class Chatarea extends Component {
  render() {
    // console.log(this.props);
    const { activeChat } = this.props;
    // console.log(activeChat.messages);
    return (
      <div className="chat-area">
        <ChatareaHeader person={activeChat.otherPerson} />
        <Messages messages={activeChat.messages} />
        <ChatInput />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    activeChat: state.chats.chats[state.chats.active],
    active: state.chats.active,
  };
};
export default connect(mapStateToProps)(Chatarea);
