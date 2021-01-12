import React, { Component } from "react";
import ChatContact from "../ChatContact/ChatContact";
import "./Chats.styles.scss";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import axios from "axios";
import {
  changeActive,
  getAllUsers,
  getAllMessages,
} from "../../../store/actions/chatActions";
import { isAuthenticated } from "../../../store/actions/authActions";

class Chats extends Component {
  handleClick = (e) => {
    this.props.changeActive(e.target.id);
    const fromPerson = this.props.user.username;
    const otherPerson = e.target.id;

    this.props.getAllMessages({
      fromPerson,
      otherPerson,
    });
  };
  componentDidMount() {
    this.props.isAuthenticated();
    this.props.getAllUsers();
    setTimeout(() => {
      // console.log(this.props.allUsers[0]._id)
      this.props.changeActive(this.props.allUsers[0]._id);
      const fromPerson = this.props.user.username;
      const otherPerson = this.props.allUsers[0]._id;

      this.props.getAllMessages({
        fromPerson,
        otherPerson,
      });
    }, 1000);
  }
  render() {
    const { chats, allUsers } = this.props;
    // console.log(allUsers);
    return (
      <div>
        {allUsers && allUsers.length ? (
          allUsers.map((chat) => {
            return (
              <div
                key={uuidv4()}
                id={chat.id}
                name={chat.email}
                onClick={this.handleClick}
              >
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
    allUsers: state.chats.allUsers,
    user: state.auth.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeActive: (id) => dispatch(changeActive(id)),
    isAuthenticated: () => dispatch(isAuthenticated()),
    getAllUsers: () => dispatch(getAllUsers()),
    getAllMessages: (payload) => dispatch(getAllMessages(payload)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Chats);
