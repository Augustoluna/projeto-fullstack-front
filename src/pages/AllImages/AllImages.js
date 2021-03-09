import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";

const AllImages = () => {
  useProtectedPage();
  return (
    <div>
      <p>Página de todas as imagens</p>
    </div>
  );
};

export default AllImages;
