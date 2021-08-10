import styled from "styled-components";

import { colors } from "../../theme/colors";

export const QuizContainer = styled.div`
   width: 464px;
   position: relative;
`;

export const QuizHeader = styled.div`
   display: flex;
   justify-content: space-between;
`;

export const QuizTitle = styled.h1`
   text-transform: uppercase;
   font-weight: 700;
   font-size: 32px;
   color: ${colors.white};
`;

export const LogoContainer = styled.div`
   position: absolute;
   right: 0;
`;

export const QuestionCard = styled.div`
   margin-top: 10px;
   padding: 64px 32px;
   border-radius: 24px;
   background-color: ${colors.white};
   box-sizing: border-box;
`;

export const QuestionContainer = styled.div`
   margin-top: 24px;
`;
