import { Typography } from "@material-ui/core";
import React from "react";
import { useHistory, useParams } from "react-router";
import { BASE_URL } from "../../constants/urls";
import useProtectedPage from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { MainDiv, StyledImage, ImageDiv, GoBackButton } from "./Styled";

const ImageDetails = () => {
  useProtectedPage();
  const history = useHistory();

  const params = useParams();
  const image = useRequestData({}, `${BASE_URL}/image/${params.id}`);

  const goBack = () => {
    history.goBack();
  };

  return (
    <MainDiv>
      {image && (
        <ImageDiv>
          <StyledImage src={image.file} />
          <Typography
            gutterBottom
            align={"center"}
            variant={"h5"}
            color={"primary"}
          >
            {image.subtitle}
          </Typography>
          <Typography align={"center"}>{image.author}</Typography>
          <Typography align={"center"}>{image.date}</Typography>
        </ImageDiv>
      )}
      <GoBackButton onClick={goBack}>VOLTAR</GoBackButton>
    </MainDiv>
  );
};

export default ImageDetails;
