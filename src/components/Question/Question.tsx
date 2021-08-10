import React from "react";

import { QuestionType } from "../../types";

import { Option } from "../Option";

import {
   OptionContainer,
   OptionsContainer,
   QuestionContainer,
   QuestionText,
} from "./styledComponents";

interface QuestionProps {
   question: QuestionType;
}

const Question = (props: QuestionProps) => {
   const {
      question: { question, options },
   } = props;

   const onClickOption = () => {};

   return (
      <QuestionContainer>
         <QuestionText>{question}</QuestionText>
         <OptionsContainer>
            {options.map((option) => (
               <OptionContainer key={option.serial}>
                  <Option option={option} onClick={onClickOption} />
               </OptionContainer>
            ))}
         </OptionsContainer>
      </QuestionContainer>
   );
};

export default Question;
