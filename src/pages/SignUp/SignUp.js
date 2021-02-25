import React from "react";
import {
  MainDiv,
  RegisterDiv,
  Title,
  InputEmail,
  InputName,
  InputNickname,
  InputPassword,
  RegisterButton,
} from "../SignUp/Styled";

const SignUp = () => {
  return (
    <MainDiv>
      <RegisterDiv>
        <Title>Preencha os campos abaixo:</Title>
        <InputName placeholder="Nome" type="text" />
        <InputNickname placeholder="Nickname" type="text" />
        <InputEmail placeholder="Email" type="email" />
        <InputPassword placeholder="Senha (min 6 caracteres)" type="password" />
        <RegisterButton> Criar Login </RegisterButton>
      </RegisterDiv>
    </MainDiv>
  );
};

export default SignUp;
