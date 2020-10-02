import React, { Component } from "react";
import "./ChatInput.styles.scss";
import EmojiEmotionsOutlinedIcon from "@material-ui/icons/EmojiEmotionsOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import { connect } from "react-redux";
import { sendMessage } from "../../../store/actions/chatActions";

class ChatInput extends Component {
  state = {
    newMessage: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const messageToSend = {
      message: this.state.newMessage,
      id: this.props.active,
    };
    this.props.sendMessage(messageToSend);
    this.setState({
      newMessage: "",
    });
  };
  handleChange = (e) => {
    this.setState({
      newMessage: e.target.value,
    });
    // console.log(this.state);
    // console.log(this.props);
  };
  render() {
    return (
      <form className="chatinput-search" onSubmit={this.handleSubmit}>
        <EmojiEmotionsOutlinedIcon style={{ fontSize: 30 }} className="icon" />

        <input
          type="text"
          value={this.state.newMessage}
          placeholder="Enter the message"
          onChange={this.handleChange}
        />
        <SendOutlinedIcon
          style={{ fontSize: 30 }}
          className="icon"
          onClick={this.handleSubmit}
        />
      </form>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    active: state.chats.active,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (message) => dispatch(sendMessage(message)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ChatInput);
