import React from "react";
import { useHistory } from "react-router";
import {
  MainDiv,
  LoginDiv,
  Title,
  NameNickname,
  Password,
  LoginButton,
  GoBackButton,
} from "../Login/Styled";

const Login = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };
  return (
    <MainDiv>
      <LoginDiv>
        <Title> FAÇA SEU LOGIN </Title>
        <NameNickname placeholder="Nome ou Nickname" type="text" />
        <Password placeholder="Senha" type="password" />
        <LoginButton> LOGIN </LoginButton>
        <GoBackButton onClick={goBack}> VOLTAR </GoBackButton>
      </LoginDiv>
    </MainDiv>
  );
};

export default Login;
