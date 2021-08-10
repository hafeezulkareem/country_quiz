import styled from "styled-components";

import { colors } from "../../theme/colors";

export const QuestionContainer = styled.div`
   display: flex;
   flex-direction: column;
`;

export const QuestionText = styled.h2`
   margin: 0;
   padding: 0;
   color: ${colors.chambray};
   font-size: 24px;
`;

export const OptionsContainer = styled.div`
   margin-top: 32px;
`;

export const OptionContainer = styled.div`
   margin-top: 24px;

   &:first-child {
      margin-top: 0;
   }
`;
