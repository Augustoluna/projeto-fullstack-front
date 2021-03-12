import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

export const ImageCardContainer = styled(Card)`
  width: 250px;
  margin: 10px;
  color: black;
`;

export const ImageCardContent = styled(CardContent)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
`;
