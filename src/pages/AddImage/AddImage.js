import React from "react";
import {
  MainDiv,
  AddImageDiv,
  Title,
  AddImageInput,
  SubmitImageButton,
} from "../AddImage/Styled";

const AddImage = () => {
  return (
    <MainDiv>
      <AddImageDiv>
        <Title>ENVIE SUA IMAGEM</Title>
        <AddImageInput placeholder="Subtítulo" name="subtitle" type="text" />
        <AddImageInput placeholder="Autor" name="author" type="text" />
        <AddImageInput placeholder="Data" name="date" type="date" />
        <AddImageInput placeholder="Arquivo" name="file" type="link" />
        <AddImageInput placeholder="Tags" name="tags" type="text" />
        <AddImageInput placeholder="Coleção" name="collection" type="text" />
        <SubmitImageButton> ENVIAR </SubmitImageButton>
      </AddImageDiv>
    </MainDiv>
  );
};

export default AddImage;
