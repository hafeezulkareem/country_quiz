import React from "react";
import { connect, RootStateOrAny } from "react-redux";

import { COMPLETED, ONGOING } from "../../constants/quizConstants";

import { Question } from "../Question";
import { QuizCompleted } from "../QuizCompleted";
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

interface QuizProps {
   status: string;
}

const Quiz = (props: QuizProps) => {
   const { status } = props;

   return (
      <QuizContainer>
         <QuizHeader>
            <QuizTitle>Country Quiz</QuizTitle>
            {status === ONGOING ? (
               <LogoContainer>
                  <QuizLogo />
               </LogoContainer>
            ) : null}
         </QuizHeader>
         <QuestionCard>
            {status === COMPLETED ? (
               <QuizCompleted />
            ) : (
               <QuestionContainer>
                  <Question question={sampleQuestion} />
               </QuestionContainer>
            )}
         </QuestionCard>
      </QuizContainer>
   );
};

const mapStateToProps = (state: RootStateOrAny) => {
   return { status: state.status };
};

export default connect(mapStateToProps)(Quiz);
