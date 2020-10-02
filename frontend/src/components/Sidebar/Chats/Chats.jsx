import React, { Component } from "react";
import ChatContact from "../ChatContact/ChatContact";
import "./Chats.styles.scss";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import { changeActive } from "../../../store/actions/chatActions";
class Chats extends Component {
  handleClick = (e) => {
    // console.log(e.target);
    this.props.changeActive(e.target.id);
  };
  render() {
    const { chats } = this.props;
    return (
      <div>
        {chats && chats.length ? (
          chats.map((chat) => {
            return (
              <div key={uuidv4()} id={chat.id} onClick={this.handleClick}>
                <ChatContact chat={chat} />
              </div>
            );
          })
        ) : (
          <div>No chats available</div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    chats: state.chats.chats,
    active: state.chats.active,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeActive: (id) => dispatch(changeActive(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Chats);
