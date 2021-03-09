import styled from "styled-components";
import iceError from "../../assets/IceCreamError.jpg";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-image: url(${iceError});
  background-size: cover;
  color: white;
`;
