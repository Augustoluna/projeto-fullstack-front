import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToImages } from "../Router/coordinator";

export const login = (body, clear, history, setRightButton) => {
  axios
    .post(`${BASE_URL}/user/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear();
      goToImages(history);
      setRightButton("Logout");
    })
    .catch((err) => alert(err.response.data.message));
};

export const signUp = (body, clear, history, setRightButton) => {
  axios
    .post(`${BASE_URL}/user/signup`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear();
      goToImages(history);
      setRightButton("Logout");
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
};
