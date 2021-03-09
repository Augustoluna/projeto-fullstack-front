import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";

const ImageDetails = () => {
  useProtectedPage();
  return (
    <div>
      <p>Página de detalhamento das imagens</p>
    </div>
  );
};

export default ImageDetails;
