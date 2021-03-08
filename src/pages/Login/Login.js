import React from "react";
import { useHistory } from "react-router";
import useForm from "../../hooks/useForm";
import {
  MainDiv,
  LoginDiv,
  Title,
  Email,
  Password,
  LoginButton,
  GoBackButton,
  LoginForm,
} from "../Login/Styled";

const Login = () => {
  const [form, onChange, clear] = useForm({ email: "", password: "" });

  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
  };
  return (
    <MainDiv>
      <LoginDiv>
        <Title> FAÇA SEU LOGIN </Title>
        <LoginForm onSubmit={onSubmitForm}>
          <Email
            placeholder="Email"
            type="email"
            name={"email"}
            value={form.email}
            onChange={onChange}
            required
          />
          <Password
            placeholder="Senha"
            type="password"
            name={"password"}
            value={form.password}
            onChange={onChange}
            required
          />
          <LoginButton type={"submit"}> LOGIN </LoginButton>
        </LoginForm>
        <GoBackButton onClick={goBack}> VOLTAR </GoBackButton>
      </LoginDiv>
    </MainDiv>
  );
};

export default Login;
