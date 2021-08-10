import {
   INCREMENT_SCORE,
   UPDATE_STATUS,
   GENERATE_QUESTION,
   INIT_SCORE,
} from "../actions/quizActions";

export const updateStatus = (status: string) => {
   return { type: UPDATE_STATUS, payload: status };
};

export const incrementScore = () => {
   return { type: INCREMENT_SCORE };
};

export const generateQuestion = () => {
   return { type: GENERATE_QUESTION };
};

export const initScore = () => {
   return { type: INIT_SCORE };
};
