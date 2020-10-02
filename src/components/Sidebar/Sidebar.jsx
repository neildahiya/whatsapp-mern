import React, { Component } from "react";
import "./Sidebar.styles.scss";
import SidebarHeader from "./SidebarHeader/SidebarHeader";
import SidebarSearch from "./SidebarSearch/SidebarSearch";
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

export default Sidebar;
