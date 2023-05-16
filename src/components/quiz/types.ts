export type QuizResult = {
  name: string;
  slug: string;
  questions: Question[];
};

export type QuestionTypes = 'single' | 'multiple' | 'info';

export type Options = {
  label: string;
  value: string;
};

export type Question = {
  type: QuestionTypes;
  options: Options[];
  label: string;
  key: string;
  description?: string;
};
