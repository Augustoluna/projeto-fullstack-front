import { useLayoutEffect } from "react";
import { useHistory } from "react-router";
import { goToHome } from "../Router/coordinator";

const useProtectedPage = () => {
  const history = useHistory();

  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      goToHome(history);
    }
  }, [history]);
};

export default useProtectedPage;
