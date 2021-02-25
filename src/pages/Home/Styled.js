import styled from "styled-components";
import landscape from "../../assets/landscape.jpg";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-image: url(${landscape});
  background-size: cover;
`;

export const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 10px;
  height: 70vh;
  width: 30vw;
`;

export const GoToSignUpPage = styled.button`
  display: flex;
  height: 20%;
  width: 80%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  outline: none;
  border: none;
  background-color: #ff6700;
  color: #fffff0;

  &:hover {
    cursor: pointer;
    background-color: #fcc200;
    color: black;
  }

  &:active {
    background-color: #ff6700;
    color: #fffff0;
  }
`;

export const GoToLoginPage = styled.button`
  display: flex;
  height: 20%;
  width: 80%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  outline: none;
  border: none;
  background-color: #372772;
  color: #fffff0;

  &:hover {
    cursor: pointer;
    background-color: #ff6fff;
    color: black;
  }

  &:active {
    background-color: #372772;
    color: #fffff0;
  }
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  height: 10vh;
  width: 20vw;
  color: black;
`;
