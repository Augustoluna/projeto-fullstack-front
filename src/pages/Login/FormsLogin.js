import React from "react";
import useForm from "../../hooks/useForm";
import { Email, Password, LoginButton, LoginForm } from "./Styled";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";

const FormsLogin = () => {
  const [form, onChange, clear] = useForm({ email: "", password: "" });

  const onSubmitForm = (event) => {
    event.preventDefault();
    login();
  };

  const login = () => {
    axios
      .post(`${BASE_URL}/user/login`, form)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        clear();
      })
      .catch((err) => alert("Erro no login"));
  };
  return (
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
  );
};

export default FormsLogin;
