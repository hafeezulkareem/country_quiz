import styled from "styled-components";

import { colors } from "../../theme/colors";

export const OptionButton = styled.button`
   width: 100%;
   display: flex;
   cursor: pointer;
   border: 2px solid ${colors.indigo};
   color: ${colors.indigo};
   font-weight: 500;
   padding: 10px 18px;
   border-radius: 12px;
   transition: all 0.1s linear;

   &:hover {
      background-color: ${colors.seaBuckthorn};
      border-color: ${colors.seaBuckthorn};
      color: ${colors.white};
   }
`;

export const OptionSerial = styled.span`
   margin-right: 32px;
`;

export const OptionText = styled.span``;

export const ResultIcon = styled.span``;
