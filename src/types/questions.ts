export interface QuestionType {
  id: number;
  title: string;
  subtitle: string;
  image_uri: string;
  uri: string;
  order: number;
}

export interface QuestionsState {
  data: QuestionType[];
  loading: boolean;
  error: string | null;
}
