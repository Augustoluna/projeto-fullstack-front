import React, { useState } from "react";
import Router from "./Router/Router";
import Header from "./components/Header/Header";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./constants/theme";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  const token = localStorage.getItem("token");
  const [rightButton, setRightButton] = useState(token ? "Logout" : "Login");

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header rightButton={rightButton} setRightButton={setRightButton} />
        <Router setRightButton={setRightButton} />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
