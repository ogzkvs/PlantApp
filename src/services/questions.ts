import { QuestionType } from '../types/questions';
import { API_BASE_URL } from '../config';

export class QuestionService {
  static async fetchQuestions(): Promise<QuestionType[]> {
    const response = await fetch(`${API_BASE_URL}/getQuestions`);
    if (!response.ok) {
      throw new Error('Failed to fetch questions');
    }
    return (await response.json()) as QuestionType[];
  }
}
