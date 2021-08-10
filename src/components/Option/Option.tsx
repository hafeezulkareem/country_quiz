import React from "react";
import { colors } from "../../theme/colors";

import { OptionType } from "../../types";

import { OptionButton, OptionSerial, OptionText } from "./styledComponents";

interface OptionProps {
   option: OptionType;
   onClick: (option: OptionType) => void;
   completed: boolean;
   selected: OptionType | null;
}

const Option = (props: OptionProps) => {
   const {
      option: { serial, option, correct },
      onClick,
      completed,
      selected,
   } = props;

   const getColors = () => {
      if (completed) {
         if (selected) {
            if (correct) {
               return { background: colors.silverTree, text: colors.white };
            }
            if (!selected.correct && selected.option === option) {
               return { background: colors.apricot, text: colors.white };
            }
         }
         return { background: "transparent", text: colors.indigo };
      }
      return { background: "transparent", text: colors.indigo };
   };

   return (
      <OptionButton
         disabled={completed}
         onClick={() => onClick(props.option)}
         colors={getColors()}
      >
         <OptionSerial>{serial}</OptionSerial>
         <OptionText>{option}</OptionText>
      </OptionButton>
   );
};

export default Option;
