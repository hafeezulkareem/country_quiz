import { ONGOING } from "../../constants/quizConstants";
import { getQuestion } from "../../utils/quizUtils";

import {
   GENERATE_QUESTION,
   INCREMENT_SCORE,
   UPDATE_STATUS,
   INIT_SCORE,
} from "../actions/quizActions";

const initialState = {
   status: ONGOING,
   score: 0,
   question: getQuestion(),
};

export const quizReducers = (state = initialState, action: any) => {
   switch (action.type) {
      case GENERATE_QUESTION:
         return { ...state, question: getQuestion() };
      case UPDATE_STATUS:
         return { ...state, status: action.payload };
      case INCREMENT_SCORE:
         return { ...state, score: state.score + 1 };
      case INIT_SCORE:
         return { ...state, score: 0 };
      default:
         return state;
   }
};
