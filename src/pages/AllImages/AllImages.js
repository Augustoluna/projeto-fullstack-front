import React from "react";
import { BASE_URL } from "../../constants/urls";
import ImageCard from "../../components/ImageCard/ImageCard";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { MainDiv } from "./Styled";

const AllImages = () => {
  useProtectedPage();
  const images = useRequestData([], `${BASE_URL}/image/all`);
  console.log(images);

  const imageCards = images.map((image) => {
    return (
      <ImageCard
        key={image.id}
        title={image.subtitle}
        image={image.file}
        onClick={() => null}
      />
    );
  });

  return <MainDiv>{imageCards}</MainDiv>;
};

export default AllImages;
