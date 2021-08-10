import { ONGOING } from "../../constants/quizConstants";

import { INCREMENT_SCORE, UPDATE_STATUS } from "../actions/quizActions";

const initialState = {
   status: ONGOING,
   score: 0,
};

export const quizReducers = (state = initialState, action: any) => {
   switch (action.type) {
      case UPDATE_STATUS:
         return { ...state, status: action.payload };
      case INCREMENT_SCORE:
         return { ...state, score: state.score + 1 };
      default:
         return state;
   }
};
