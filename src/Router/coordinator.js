export const goToLogin = (history) => {
  history.push("/login");
};

export const goToSignup = (history) => {
  history.push("/signup");
};

export const goToHome = (history) => {
  history.push("/home");
};

export const goToAddImage = (history) => {
  history.push("/addimage");
};

export const goToImages = (history) => {
  history.push("/");
};

export const goToImageDetails = (history, id) => {
  history.push(`/details/${id}`);
};
