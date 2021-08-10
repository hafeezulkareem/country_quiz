import { createStore } from "redux";

import { quizReducers } from "./reducers/quizReducers";

export const store = createStore(quizReducers);
