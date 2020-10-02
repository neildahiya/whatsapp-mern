import React from "react";
import "./ChatareaHeader.styles.scss";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SearchIcon from "@material-ui/icons/Search";
const ChatareaHeader = ({ person }) => {
  return (
    <div className="chatarea-header">
      <div className="left">
        <AccountCircleIcon />
        <h4>{person}</h4>
      </div>
      <div className="right">
        <SearchIcon />
        <MoreVertIcon />
      </div>
    </div>
  );
};

export default ChatareaHeader;
