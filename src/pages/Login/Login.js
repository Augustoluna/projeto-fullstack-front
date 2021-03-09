import React from "react";
import { useHistory } from "react-router";
import { MainDiv, LoginDiv, Title, GoBackButton } from "../Login/Styled";
import FormsLogin from "./FormsLogin";

const Login = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <MainDiv>
      <LoginDiv>
        <Title> FAÇA SEU LOGIN </Title>
        <FormsLogin />
        <GoBackButton onClick={goBack}> VOLTAR </GoBackButton>
      </LoginDiv>
    </MainDiv>
  );
};

export default Login;
