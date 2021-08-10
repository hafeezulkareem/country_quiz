import styled from "styled-components";

import { colors } from "../../theme/colors";

export const QuizDetailsContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`;

export const LogoContainer = styled.div``;

export const ResultsContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-top: 24px;
`;

export const ResultsTitle = styled.h1`
   color: ${colors.cello};
`;

export const ResultsSentence = styled.p`
   color: ${colors.cello};
`;

export const Results = styled.span`
   font-size: 24px;
   font-weight: bold;
   color: ${colors.silverTree};
`;

export const TryAgainButton = styled.button`
   background-color: transparent;
   cursor: pointer;
   border: 2px solid ${colors.cello};
   color: ${colors.cello};
   font-weight: 600;
   padding: 12px 32px;
   border-radius: 12px;
   margin-top: 32px;
   transition: all 0.1s linear;
   &:hover {
      background-color: ${colors.seaBuckthorn};
      border-color: ${colors.seaBuckthorn};
      color: ${colors.white};
   }
`;
