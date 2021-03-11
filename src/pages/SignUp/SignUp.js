import React from "react";
import { useHistory } from "react-router";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import { MainDiv, RegisterDiv, Title, GoBackButton } from "../SignUp/Styled";
import FormsSignUp from "./FormsSignUp";

const SignUp = ({ setRightButton }) => {
  useUnprotectedPage();
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <MainDiv>
      <RegisterDiv>
        <Title>Preencha os campos abaixo:</Title>
        <FormsSignUp setRightButton={setRightButton} />
        <GoBackButton onClick={goBack}> VOLTAR </GoBackButton>
      </RegisterDiv>
    </MainDiv>
  );
};

export default SignUp;
