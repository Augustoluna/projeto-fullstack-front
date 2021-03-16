import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {
  InputsContainer,
  FormsAddImageContainer,
  AddImageForm,
} from "./Styled";
import useForm from "../../hooks/useForm";
import { createImage } from "../../services/image";

const FormsAddImage = () => {
  const [form, onChange, clear] = useForm({
    subtitle: "",
    tagsId: [],
    file: "",
    collectionId: "",
  });

  const onSubmitForm = (event) => {
    event.preventDefault();
    createImage(form, clear);
  };

  return (
    <AddImageForm onSubmit={onSubmitForm}>
      <FormsAddImageContainer>
        <InputsContainer>
          <TextField
            name={"subtitle"}
            value={form.subtitle}
            onChange={onChange}
            label={"Título"}
            variant={"outlined"}
            fullWidth
            required
            autoFocus
            margin={"normal"}
          />
          <TextField
            name={"collectionId"}
            value={form.collectionId}
            onChange={onChange}
            label={"Coleção"}
            variant={"outlined"}
            fullWidth
            required
            margin={"normal"}
          />
          <TextField
            name={"tagsId"}
            value={form.tagsId}
            onChange={onChange}
            label={"Tags"}
            variant={"outlined"}
            fullWidth
            required
            margin={"normal"}
          />
          <TextField
            name={"file"}
            value={form.file}
            onChange={onChange}
            label={"Link da imagem"}
            variant={"outlined"}
            fullWidth
            required
            margin={"normal"}
          />
        </InputsContainer>
        <Button
          color={"primary"}
          variant={"contained"}
          type={"submit"}
          fullWidth
        >
          Adicionar Imagem
        </Button>
      </FormsAddImageContainer>
    </AddImageForm>
  );
};

export default FormsAddImage;
