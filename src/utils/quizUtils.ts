import Chance from "chance";

import { data } from "../constants/countriesData";

const chance = new Chance();

const getQuestionType = () => chance.integer({ min: 0, max: 1 });

const getQuestionText = (type: number, capital: string) =>
   type === 0
      ? `${capital} is the capital of`
      : `Which country does this flag belong to?`;

const getSerial = (index: number) => {
   switch (index) {
      case 0:
         return "A";
      case 1:
         return "B";
      case 2:
         return "C";
      case 3:
         return "D";
      default:
         return "NOTA";
   }
};

export const getQuestion = () => {
   const indexes = chance.unique(chance.natural, 4, {
      min: 0,
      max: data.length - 1,
   });
   const countries = [
      data[indexes[0]],
      data[indexes[1]],
      data[indexes[2]],
      data[indexes[3]],
   ];
   const correctAnswerIndex = chance.natural({ min: 0, max: 3 });
   const correctAnswer = countries[correctAnswerIndex];

   const questionType = getQuestionType();
   const questionText = getQuestionText(questionType, correctAnswer.capital);

   const options = countries.map((country, index) => {
      return {
         serial: getSerial(index),
         option: country.name,
         correct: correctAnswer.name === country.name,
      };
   });

   return {
      type: questionType,
      question: questionText,
      options,
      flag: correctAnswer.flag,
   };
};
