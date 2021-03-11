import React from "react";
import { useHistory } from "react-router";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";
import { MainDiv, LoginDiv, Title, GoBackButton } from "../Login/Styled";
import FormsLogin from "./FormsLogin";

const Login = ({ setRightButton }) => {
  useUnprotectedPage();
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <MainDiv>
      <LoginDiv>
        <Title> FAÇA SEU LOGIN </Title>
        <FormsLogin setRightButton={setRightButton} />
        <GoBackButton onClick={goBack}> VOLTAR </GoBackButton>
      </LoginDiv>
    </MainDiv>
  );
};

export default Login;
