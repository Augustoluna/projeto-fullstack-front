import React from "react";
import useForm from "../../hooks/useForm";
import { Email, Password, LoginButton, LoginForm } from "./Styled";
import { login } from "../../services/user";
import { useHistory } from "react-router";

const FormsLogin = ({ setRightButton }) => {
  const [form, onChange, clear] = useForm({ email: "", password: "" });
  const history = useHistory();

  const onSubmitForm = (event) => {
    event.preventDefault();
    login(form, clear, history, setRightButton);
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
