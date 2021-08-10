import { INCREMENT_SCORE, UPDATE_STATUS } from "../actions/quizActions";

export const updateStatus = (status: string) => {
   return { type: UPDATE_STATUS, payload: status };
};

export const incrementScore = () => {
   return { type: INCREMENT_SCORE };
};
