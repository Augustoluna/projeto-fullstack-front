import { useEffect } from "react";
import { useHistory } from "react-router";
import { goToImages } from "../Router/coordinator";

const useUnprotectedPage = () => {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      goToImages();
    }
  }, [history]);
};

export default useUnprotectedPage;
