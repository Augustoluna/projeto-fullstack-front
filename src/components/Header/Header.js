import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { StyledToolbar } from "./Styled";
import Button from "@material-ui/core/Button";
import { goToHome, goToImages, goToLogin } from "../../Router/coordinator";
import { useHistory } from "react-router-dom";

const Header = ({ rightButton, setRightButton }) => {
  const history = useHistory();

  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
  };

  const rightButtonAction = () => {
    if (token) {
      logout();
      setRightButton("Login");
      goToHome(history);
    } else {
      goToLogin(history);
    }
  };

  return (
    <AppBar position="static">
      <StyledToolbar>
        <Button color="inherit" onClick={() => goToImages(history)}>
          PICTURESCOOL
        </Button>
        <Button color="inherit" onClick={rightButtonAction}>
          {rightButton}
        </Button>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
