export interface OptionType {
   serial: string;
   option: string;
   correct: boolean;
}

export interface QuestionType {
   question: string;
   options: Array<OptionType>;
}
