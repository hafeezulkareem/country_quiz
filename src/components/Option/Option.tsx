import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { TiTick } from "react-icons/ti";

import { colors } from "../../theme/colors";
import { OptionType } from "../../types";

import {
   OptionButton,
   OptionSerial,
   OptionText,
   ResultIcon,
} from "./styledComponents";

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

   const isCorrect = () => completed && correct;

   const isWrong = () =>
      completed && option === selected?.option && !selected.correct;

   const getColors = () => {
      if (isCorrect()) {
         return {
            background: colors.silverTree,
            text: colors.white,
            border: colors.silverTree,
         };
      }
      if (isWrong()) {
         return {
            background: colors.apricot,
            text: colors.white,
            border: colors.apricot,
         };
      }
      return {
         background: "transparent",
         text: colors.indigo,
         border: colors.indigo,
      };
   };

   return (
      <OptionButton
         disabled={completed}
         onClick={() => onClick(props.option)}
         colors={getColors()}
      >
         <OptionSerial>{serial}</OptionSerial>
         <OptionText>{option}</OptionText>
         {isCorrect() ? (
            <ResultIcon>
               <TiTick size={20} color={colors.white} />
            </ResultIcon>
         ) : null}
         {isWrong() ? (
            <ResultIcon>
               <IoIosCloseCircleOutline size={20} color={colors.white} />
            </ResultIcon>
         ) : null}
      </OptionButton>
   );
};

export default Option;
