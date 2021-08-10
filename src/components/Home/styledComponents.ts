import styled from "styled-components";
import backgroundImage from "../../assets/images/background.png";

export const HomeContainer = styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   background-image: url(${backgroundImage});
   background-position: center;
   background-repeat: no-repeat;
`;
