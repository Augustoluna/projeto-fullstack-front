import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
import { ImageContainer, ScreenContainer } from "./Styled";
import FormsAddImage from "./FormsAddImage";
import Typography from "@material-ui/core/Typography";

const AddImage = () => {
  useProtectedPage();
  return (
    <ScreenContainer>
      <ImageContainer>
        <Typography gutterBottom variant={"h4"} align={"center"}>
          Adicionar Nova Imagem
        </Typography>
        <FormsAddImage />
      </ImageContainer>
    </ScreenContainer>
  );
};

export default AddImage;
