import React from "react";

import { OptionType } from "../../types";

import { OptionButton, OptionSerial, OptionText } from "./styledComponents";

interface OptionProps {
   option: OptionType;
   onClick: () => void;
}

const Option = (props: OptionProps) => {
   const {
      option: { serial, option },
      onClick,
   } = props;

   return (
      <OptionButton onClick={onClick}>
         <OptionSerial>{serial}</OptionSerial>
         <OptionText>{option}</OptionText>
      </OptionButton>
   );
};

export default Option;
