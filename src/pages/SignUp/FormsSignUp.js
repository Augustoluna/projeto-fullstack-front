import axios from "axios";
import React from "react";
import { BASE_URL } from "../../constants/urls";
import useForm from "../../hooks/useForm";
import {
  InputEmail,
  InputName,
  InputNickname,
  InputPassword,
  RegisterButton,
  SignupForm,
} from "../SignUp/Styled";

const FormsSignUp = () => {
  const [form, onChange, clear] = useForm({
    name: "",
    email: "",
    password: "",
    nickname: "",
  });

  const onSubmitForm = (event) => {
    event.preventDefault();
    signUp();
  };

  const signUp = () => {
    axios
      .post(`${BASE_URL}/user/signup`, form)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        clear();
        console.log(res);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <SignupForm onSubmit={onSubmitForm}>
      <InputName
        placeholder="Nome"
        type="text"
        name={"name"}
        value={form.name}
        onChange={onChange}
        required
      />
      <InputNickname
        placeholder="Nickname"
        type="text"
        name={"nickname"}
        value={form.nickname}
        onChange={onChange}
        required
      />
      <InputEmail
        placeholder="Email"
        type="email"
        name={"email"}
        value={form.email}
        onChange={onChange}
        required
      />
      <InputPassword
        placeholder="Senha (min 6 caracteres)"
        type="password"
        name={"password"}
        value={form.password}
        onChange={onChange}
        required
      />
      <RegisterButton type={"submit"}> Criar Login </RegisterButton>
    </SignupForm>
  );
};

export default FormsSignUp;
