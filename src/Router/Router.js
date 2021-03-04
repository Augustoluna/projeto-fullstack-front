import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import AddImage from "../pages/AddImage/AddImage";
import AllImages from "../pages/AllImages/AllImages";
import Home from "../pages/Home/Home";
import ImageDetails from "../pages/ImageDetails/ImageDetails";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/addimage">
          <AddImage />
        </Route>
        <Route exact path="/">
          <AllImages />
        </Route>
        <Route exact path="/details/:id">
          <ImageDetails />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
