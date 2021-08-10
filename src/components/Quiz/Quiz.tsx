import React from "react";

import { Question } from "../Question";
import { QuizLogo } from "../QuizLogo";

import {
   LogoContainer,
   QuestionCard,
   QuestionContainer,
   QuizContainer,
   QuizHeader,
   QuizTitle,
} from "./styledComponents";

const sampleQuestion = {
   question: "Kuala Lumpur is the capital of",
   options: [
      { serial: "A", option: "Vietnam", correct: false },
      { serial: "B", option: "Malaysia ", correct: true },

      { serial: "C", option: "Sweden", correct: false },
      { serial: "D", option: "Austria", correct: false },
   ],
};

const Quiz = () => {
   return (
      <QuizContainer>
         <QuizHeader>
            <QuizTitle>Country Quiz</QuizTitle>
            <LogoContainer>
               <QuizLogo />
            </LogoContainer>
         </QuizHeader>
         <QuestionCard>
            <QuestionContainer>
               <Question question={sampleQuestion} />
            </QuestionContainer>
         </QuestionCard>
      </QuizContainer>
   );
};

export default Quiz;
