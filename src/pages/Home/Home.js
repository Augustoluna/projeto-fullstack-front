import React from "react";
import {
  MainDiv,
  ButtonsDiv,
  GoToLoginPage,
  GoToSignUpPage,
  Title,
} from "../Home/Styled";

const Home = () => {
  return (
    <MainDiv>
      <Title> PICTURESCOOL </Title>
      <ButtonsDiv>
        <GoToLoginPage> Já possui login? Clique para entrar.</GoToLoginPage>
        <GoToSignUpPage> Não tem um login? Crie aqui. </GoToSignUpPage>
      </ButtonsDiv>
    </MainDiv>
  );
};

export default Home;
