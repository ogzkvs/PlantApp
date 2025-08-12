import { API_BASE_URL } from '../config';
import { CategoryResponse, CategoryType } from '../types/categories';

export class CategoryService {
  static async fetchCategories(): Promise<CategoryType[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/getCategories`);
      const json: CategoryResponse = await response.json();

      return json?.data as CategoryType[];
    } catch (error) {
      console.error('Failed to fetch categories:', error);
      throw error;
    }
  }
}
