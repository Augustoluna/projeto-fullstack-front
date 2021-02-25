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
      <Title> SHARIMAGE </Title>
      <ButtonsDiv>
        <GoToSignUpPage> Não tem um login? Crie aqui. </GoToSignUpPage>
        <GoToLoginPage> Já possui login. Clique para entrar.</GoToLoginPage>
      </ButtonsDiv>
    </MainDiv>
  );
};

export default Home;
