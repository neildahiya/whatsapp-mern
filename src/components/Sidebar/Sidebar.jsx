import React, { Component } from "react";
import "./Sidebar.styles.scss";
import SidebarHeader from "./SidebarHeader/SidebarHeader";
import SidebarSearch from "./SidebarSearch/SidebarSearch";
import ChatContact from "./ChatContact/ChatContact";
import { connect } from "react-redux";
import Chats from "./Chats/Chats";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <SidebarHeader />
        <SidebarSearch />
        <Chats />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    chats: state.chats,
  };
};
export default connect(mapStateToProps)(Sidebar);
