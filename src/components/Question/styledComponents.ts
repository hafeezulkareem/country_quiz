import styled, { css } from "styled-components";

import { colors } from "../../theme/colors";

export const QuestionContainer = styled.div`
   display: flex;
   flex-direction: column;
`;

export const FlagContainer = styled.div`
   width: 84px;
   height: 54px;
`;

export const Flag = styled.img`
   width: 100%;
`;

interface QuestionTextProps {
   addTopMargin: boolean;
}

export const QuestionText = styled.h2`
   color: ${colors.chambray};
   font-size: 24px;
   ${(props: QuestionTextProps) =>
      props.addTopMargin &&
      css`
         margin-top: 12px;
      `}
`;

export const OptionsContainer = styled.div`
   margin-top: 24px;
`;

export const OptionContainer = styled.div`
   margin-top: 20px;

   &:first-child {
      margin-top: 0;
   }
`;

export const NextButtonContainer = styled.div`
   display: flex;
   justify-content: flex-end;
   margin-top: 12px;
`;

export const NextButton = styled.button`
   background-color: ${colors.seaBuckthorn};
   color: ${colors.white};
   border: none;
   padding: 12px 32px;
   font-weight: 500;
   border-radius: 12px;
   cursor: pointer;
`;
