import React from "react";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { ImageCardContainer, ImageCardContent } from "./Styled";

const ImageCard = (props) => {
  console.log(props);
  return (
    <ImageCardContainer onClick={props.onClick}>
      <p>{props.title}</p>
      <CardActionArea>
        <CardMedia
          component={"img"}
          alt={props.title}
          height={"150px"}
          image={props.image}
          title={props.title}
        />
        <ImageCardContent>
          <Typography align={"center"}>{props.title.toUpperCase()}</Typography>
        </ImageCardContent>
      </CardActionArea>
    </ImageCardContainer>
  );
};

export default ImageCard;
