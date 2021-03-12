import axios from "axios";
import { BASE_URL } from "../constants/urls";

export const createImage = (body, clear) => {
  axios
    .post(`${BASE_URL}/image/createImage`, body, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then((res) => {
      alert(res.data.message);
      clear();
    })
    .catch((err) => {
      alert(err.response.message);
    });
};
