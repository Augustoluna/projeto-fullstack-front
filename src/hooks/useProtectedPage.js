import { useLayoutEffect } from "react";
import { useHistory } from "react-router";
import { goToImages } from "../Router/coordinator";

const useProtectedPage = () => {
  const history = useHistory();

  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      goToImages(history);
    }
  }, [history]);
};

export default useProtectedPage;
