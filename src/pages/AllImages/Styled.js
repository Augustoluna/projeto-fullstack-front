import Fab from "@material-ui/core/Fab";
import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

export const AddImageButton = styled(Fab)`
  position: fixed;
  right: 20px;
  bottom: 20px;
`;
