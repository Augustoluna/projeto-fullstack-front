import React from "react";
import { BASE_URL } from "../../constants/urls";
import ImageCard from "../../components/ImageCard/ImageCard";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { AddImageButton, MainDiv } from "./Styled";
import { Add } from "@material-ui/icons";
import { goToAddImage, goToImageDetails } from "../../Router/coordinator";
import { useHistory } from "react-router";

const AllImages = () => {
  useProtectedPage();
  const history = useHistory();
  const images = useRequestData([], `${BASE_URL}/image/all`);

  const onClickCard = (id) => {
    goToImageDetails(history, id);
  };

  const imageCards = images.map((image) => {
    return (
      <ImageCard
        key={image.id}
        title={image.subtitle}
        image={image.file}
        onClick={() => onClickCard(image.id)}
      />
    );
  });

  return (
    <MainDiv>
      {imageCards}
      <AddImageButton color="primary" onClick={() => goToAddImage(history)}>
        <Add />
      </AddImageButton>
    </MainDiv>
  );
};

export default AllImages;
