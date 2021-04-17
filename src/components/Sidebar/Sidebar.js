import React from "react";
import {
  SidebarContainer,
  SidebarTop,
  SidebarStats,
  SidebarStat,
  SidebarBottom,
  SidebarRecentItem,
} from "./Sidebar.styles";

//? Material-Ui/core
import { Avatar } from "@material-ui/core";

//? React Redux
import { useSelector } from "react-redux";
import { selectUser } from "../../app/features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <SidebarRecentItem>
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </SidebarRecentItem>
  );

  return (
    <SidebarContainer>
      <SidebarTop>
        <img
          src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MXwxMjA3fD88MHxleHBsb3JlLWZlZwR8MXx8fGVufDB8fHw%3D&w=1000&q=80"
          alt=""
        />
        <Avatar src={user.photoUrl} className="sidebar_avatar">
          {user.displayName[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </SidebarTop>

      <SidebarStats>
        <SidebarStat>
          <p>Who viewd you</p>
          <p className="sidebar__statNum">2,543</p>
        </SidebarStat>
        <SidebarStat>
          <p>Views on post</p>
          <p className="sidebar__statNum">2,448</p>
        </SidebarStat>
      </SidebarStats>

      <SidebarBottom>
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("desgin")}
        {recentItem("developer")}
      </SidebarBottom>
    </SidebarContainer>
  );
}

export default Sidebar;
