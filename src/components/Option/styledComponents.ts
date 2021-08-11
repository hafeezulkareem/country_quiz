import styled from "styled-components";

import { colors } from "../../theme/colors";

interface OptionButtonProps {
   colors: { background: string; text: string };
}

export const OptionButton = styled.button`
   width: 100%;
   display: flex;
   align-items: center;
   cursor: pointer;
   border: 2px solid ${colors.indigo};
   font-weight: 500;
   padding: 10px 18px;
   border-radius: 12px;
   transition: all 0.1s linear;
   background-color: ${(props: OptionButtonProps) => props.colors.background};
   color: ${(props: OptionButtonProps) => props.colors.text};

   &:not(:disabled):hover {
      background-color: ${colors.seaBuckthorn};
      border-color: ${colors.seaBuckthorn};
      color: ${colors.white};
   }

   &:disabled {
      cursor: not-allowed;
   }
`;

export const OptionSerial = styled.span`
   margin-right: 32px;
`;

export const OptionText = styled.span``;

export const ResultIcon = styled.span`
   margin-left: auto;
`;
