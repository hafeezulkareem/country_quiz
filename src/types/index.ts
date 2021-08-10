export interface OptionType {
   serial: string;
   option: string;
   correct: boolean;
}

export interface QuestionType {
   type: number;
   question: string;
   options: Array<OptionType>;
   flag: string;
}
