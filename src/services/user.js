import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToImages } from "../Router/coordinator";

export const login = (body, clear, history) => {
  axios
    .post(`${BASE_URL}/user/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear();
      goToImages(history);
    })
    .catch((err) => alert("Erro no login"));
};

export const signUp = (body, clear, history) => {
  axios
    .post(`${BASE_URL}/user/signup`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear();
      goToImages(history);
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
};
