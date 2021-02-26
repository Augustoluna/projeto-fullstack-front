import styled from "styled-components";
import valley from "../../assets/valley.jpg";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-image: url(${valley});
  background-size: 100% 100%;
`;

export const AddImageDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  height: 80vh;
  width: 30vw;
  border: 2px solid black;
  border-radius: 10px;
  box-shadow: 10px 5px 20px black;
`;

export const Title = styled.p`
  display: flex;
  justify-content: center;
  color: white;
  font-size: 20px;
  border-radius: 10px;
  width: 70%;
  font-size: 22px;
`;

export const AddImageInput = styled.input`
  display: flex;
  height: 5%;
  width: 60%;
  border-radius: 10px;
  border: none;
  outline: none;
`;

export const SubmitImageButton = styled.button`
  display: flex;
  height: 10%;
  width: 40%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  outline: none;
  border: 1px solid white;
  background-color: black;
  color: white;

  &:hover {
    cursor: pointer;
    border: 1px solid black;
    background-color: yellow;
    color: black;
  }

  &:active {
    background-color: navajowhite;
    color: black;
  }
`;
