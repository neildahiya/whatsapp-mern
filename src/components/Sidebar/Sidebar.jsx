import React, { Component } from "react";
import "./Sidebar.styles.scss";
import SidebarHeader from "./SidebarHeader/SidebarHeader";
import SidebarSearch from "./SidebarSearch/SidebarSearch";
import ChatContact from "./ChatContact/ChatContact";
class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <SidebarHeader />
        <SidebarSearch />
        <ChatContact className="active" />
        <ChatContact />
        <ChatContact />
      </div>
    );
  }
}

export default Sidebar;
