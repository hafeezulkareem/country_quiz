import React from "react";
import { connect, RootStateOrAny } from "react-redux";
import { Dispatch } from "redux";

import { ONGOING } from "../../constants/quizConstants";
import { updateStatus } from "../../redux/actionCreators";

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
}

const QuizCompleted = (props: QuizCompletedProps) => {
   const { score, tryAgain } = props;

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
            <TryAgainButton onClick={tryAgain}>Try Again</TryAgainButton>
         </ResultsContainer>
      </QuizDetailsContainer>
   );
};

const mapStateToProps = (state: RootStateOrAny) => {
   return { score: state.score };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
   return { tryAgain: () => dispatch(updateStatus(ONGOING)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuizCompleted);
