import React, { Component } from "react";
import "./ChatInput.styles.scss";
import EmojiEmotionsOutlinedIcon from "@material-ui/icons/EmojiEmotionsOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";

class ChatInput extends Component {
  render() {
    return (
      <div className="chatinput-search">
        <EmojiEmotionsOutlinedIcon style={{ fontSize: 30 }} className="icon" />
        <input type="text" placeholder="Enter the message" />
        <SendOutlinedIcon style={{ fontSize: 30 }} className="icon" />
      </div>
    );
  }
}

export default ChatInput;
