import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Quayyum Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://media-exp1.licdn.com/dms/image/C5603AQHguWnYXDlslw/profile-displayphoto-shrink_800_800/0/1642283387726?e=1652313600&v=beta&t=S0zeDpgq2eHEuslAphMQHmmDOu139z2o-bAeaqP-8lk" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
