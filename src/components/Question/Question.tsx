import React, { useState } from "react";
import { Dispatch } from "redux";
import { connect, RootStateOrAny } from "react-redux";

import { COMPLETED } from "../../constants/quizConstants";
import {
   generateQuestion,
   incrementScore,
   updateStatus,
} from "../../redux/actionCreators";

import { OptionType, QuestionType } from "../../types";

import { Option } from "../Option";

import {
   Flag,
   FlagContainer,
   NextButton,
   NextButtonContainer,
   OptionContainer,
   OptionsContainer,
   QuestionContainer,
   QuestionText,
} from "./styledComponents";

interface QuestionProps {
   question: QuestionType;
   generateNewQuestion: () => void;
   completeQuiz: () => void;
   incrementCurrentScore: () => void;
}

const Question = (props: QuestionProps) => {
   const {
      question: { type, question, options, flag },
      generateNewQuestion,
      incrementCurrentScore,
      completeQuiz,
   } = props;

   const [completed, setCompleted] = useState(false);
   const [selected, setSelected] = useState<OptionType | null>(null);

   const onClickOption = (selectedOption: OptionType) => {
      setCompleted(true);
      setSelected(selectedOption);
   };

   const onClickNext = () => {
      if (selected?.correct) {
         setCompleted(false);
         setSelected(null);
         incrementCurrentScore();
         generateNewQuestion();
      } else {
         completeQuiz();
      }
   };

   return (
      <QuestionContainer>
         {type === 1 ? (
            <FlagContainer>
               <Flag src={flag} alt={"Country Flag"} />
            </FlagContainer>
         ) : null}
         <QuestionText addTopMargin={type === 1}>{question}</QuestionText>
         <OptionsContainer>
            {options.map((option) => (
               <OptionContainer key={option.serial}>
                  <Option
                     option={option}
                     onClick={onClickOption}
                     completed={completed}
                     selected={selected}
                  />
               </OptionContainer>
            ))}
         </OptionsContainer>
         {completed ? (
            <NextButtonContainer>
               <NextButton onClick={onClickNext}>Next</NextButton>
            </NextButtonContainer>
         ) : null}
      </QuestionContainer>
   );
};

const mapStateToProps = (state: RootStateOrAny) => {
   return { question: state.question };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
   return {
      generateNewQuestion: () => dispatch(generateQuestion()),
      completeQuiz: () => dispatch(updateStatus(COMPLETED)),
      incrementCurrentScore: () => dispatch(incrementScore()),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Question);
