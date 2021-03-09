import React from "react";
import { useHistory } from "react-router";
import { MainDiv, RegisterDiv, Title, GoBackButton } from "../SignUp/Styled";
import FormsSignUp from "./FormsSignUp";

const SignUp = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <MainDiv>
      <RegisterDiv>
        <Title>Preencha os campos abaixo:</Title>
        <FormsSignUp />
        <GoBackButton onClick={goBack}> VOLTAR </GoBackButton>
      </RegisterDiv>
    </MainDiv>
  );
};

export default SignUp;
