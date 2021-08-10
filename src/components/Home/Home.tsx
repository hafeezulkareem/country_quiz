import React from "react";
import { getQuestion } from "../../utils/quizUtils";

import { Quiz } from "../Quiz";

import { HomeContainer } from "./styledComponents";

const Home = () => {
   getQuestion();
   return (
      <HomeContainer>
         <Quiz />
      </HomeContainer>
   );
};

export default Home;
