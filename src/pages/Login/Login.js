import React from "react";
import {
  MainDiv,
  LoginDiv,
  Title,
  NameNickname,
  Password,
  LoginButton,
} from "../Login/Styled";

const Login = () => {
  return (
    <MainDiv>
      <LoginDiv>
        <Title> FAÇA SEU LOGIN </Title>
        <NameNickname placeholder="Nome ou Nickname" type="text" />
        <Password placeholder="Senha" type="password" />
        <LoginButton> LOGIN </LoginButton>
      </LoginDiv>
    </MainDiv>
  );
};

export default Login;
