import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { StyledToolbar } from "./Styled";
import Button from "@material-ui/core/Button";
import { goToImages, goToLogin } from "../../Router/coordinator";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  return (
    <AppBar position="static">
      <StyledToolbar>
        <Button color="inherit" onClick={() => goToImages(history)}>
          PICTURESCOOL
        </Button>
        <Button color="inherit" onClick={() => goToLogin(history)}>
          Login
        </Button>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
