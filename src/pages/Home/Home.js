import React from "react";
import { useHistory } from "react-router-dom";
import {
  MainDiv,
  ButtonsDiv,
  GoToLoginPage,
  GoToSignUpPage,
  Title,
} from "../Home/Styled";

const Home = () => {
  const history = useHistory();

  const goToLoginPage = () => {
    history.push("/login");
  };

  const goToSignupPage = () => {
    history.push("/signup");
  };

  return (
    <MainDiv>
      <Title> PICTURESCOOL </Title>
      <ButtonsDiv>
        <GoToLoginPage onClick={goToLoginPage}>
          {" "}
          Já possui login? Clique para entrar.
        </GoToLoginPage>
        <GoToSignUpPage onClick={goToSignupPage}>
          {" "}
          Não tem um login? Crie aqui.{" "}
        </GoToSignUpPage>
      </ButtonsDiv>
    </MainDiv>
  );
};

export default Home;
