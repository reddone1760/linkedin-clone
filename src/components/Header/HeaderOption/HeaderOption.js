import React from "react";
import { HeaderOptionContainer } from "./HeaderOption.styles";

//? Material-Ui/core
import { Avatar } from "@material-ui/core";

//? React Redux
import { useSelector } from "react-redux";
import { selectUser } from "../../../app/features/userSlice";

function HeaderOption({ Icon, title, onClick }) {
  const user = useSelector(selectUser);

  return (
    <HeaderOptionContainer onClick={onClick}>
      {Icon ? (
        <Icon className="HeaderOption__Icon" />
      ) : (
        <Avatar className="HeaderOption__Icon" src={user?.photoUrl}>
          {user?.displayName[0]}
        </Avatar>
      )}
      <h3>{title}</h3>
    </HeaderOptionContainer>
  );
}

export default HeaderOption;
