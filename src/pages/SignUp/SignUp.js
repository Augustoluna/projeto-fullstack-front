import React from "react";
import { useHistory } from "react-router";
import {
  MainDiv,
  RegisterDiv,
  Title,
  InputEmail,
  InputName,
  InputNickname,
  InputPassword,
  RegisterButton,
  GoBackButton,
} from "../SignUp/Styled";

const SignUp = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <MainDiv>
      <RegisterDiv>
        <Title>Preencha os campos abaixo:</Title>
        <InputName placeholder="Nome" type="text" />
        <InputNickname placeholder="Nickname" type="text" />
        <InputEmail placeholder="Email" type="email" />
        <InputPassword placeholder="Senha (min 6 caracteres)" type="password" />
        <RegisterButton> Criar Login </RegisterButton>
        <GoBackButton onClick={goBack}> VOLTAR </GoBackButton>
      </RegisterDiv>
    </MainDiv>
  );
};

export default SignUp;
