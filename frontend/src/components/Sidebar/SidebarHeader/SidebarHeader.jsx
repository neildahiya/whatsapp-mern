import React from "react";
import "./SidebarHeader.styles.scss";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MessageIcon from "@material-ui/icons/Message";
import DataUsageIcon from "@material-ui/icons/DataUsage";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
const SidebarHeader = (props) => {
  return (
    <div className="sidebar-header">
      <div className="left">
        <AccountCircleIcon />
      </div>
      <div className="right">
        <DataUsageIcon />
        <MessageIcon />
        <MoreVertIcon />
      </div>
    </div>
  );
};

export default SidebarHeader;
