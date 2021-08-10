import React from "react";
import { connect, RootStateOrAny } from "react-redux";
import { Dispatch } from "redux";

import { ONGOING } from "../../constants/quizConstants";
import {
   generateQuestion,
   initScore,
   updateStatus,
} from "../../redux/actionCreators";

import { QuizCompletedLogo } from "../QuizCompletedLogo";

import {
   LogoContainer,
   QuizDetailsContainer,
   Results,
   ResultsContainer,
   ResultsSentence,
   ResultsTitle,
   TryAgainButton,
} from "./styledComponents";

interface QuizCompletedProps {
   score: string;
   tryAgain: () => void;
   generateNewQuestion: () => void;
   initScore: () => void;
}

const QuizCompleted = (props: QuizCompletedProps) => {
   const { score, tryAgain, generateNewQuestion, initScore } = props;

   const onClickTryAgain = () => {
      initScore();
      generateNewQuestion();
      tryAgain();
   };

   return (
      <QuizDetailsContainer>
         <LogoContainer>
            <QuizCompletedLogo />
         </LogoContainer>
         <ResultsContainer>
            <ResultsTitle>Results</ResultsTitle>
            <ResultsSentence>
               You got <Results>{score}</Results> correct answers
            </ResultsSentence>
            <TryAgainButton onClick={onClickTryAgain}>Try Again</TryAgainButton>
         </ResultsContainer>
      </QuizDetailsContainer>
   );
};

const mapStateToProps = (state: RootStateOrAny) => {
   return { score: state.score };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
   return {
      tryAgain: () => dispatch(updateStatus(ONGOING)),
      generateNewQuestion: () => dispatch(generateQuestion()),
      initScore: () => dispatch(initScore()),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizCompleted);
