import React from "react";
import {
  HeaderContainer,
  HeaderLeft,
  HeaderRight,
  HeaderSearch,
  Input,
  Img,
} from "./Header.styles";

//? Icons
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";

//? Components
import HeaderOption from "./HeaderOption/HeaderOption";

//? React Redux
import { useDispatch } from "react-redux";
import { logout } from "../../app/features/userSlice";
import { auth } from "../../firebase";

function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <HeaderContainer>
      <HeaderLeft>
        <Img
          src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
          alt="LinkedIn Svg-Logo"
        />

        <HeaderSearch>
          <SearchIcon />
          <Input type="text" placeholder="Search" />
        </HeaderSearch>
      </HeaderLeft>

      <HeaderRight>
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notification" />
        <HeaderOption
          title="me"
          onClick={logoutOfApp}
        />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;
