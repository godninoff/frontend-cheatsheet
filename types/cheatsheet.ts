export interface Question {
  id: string;
  category_id: string;
  question: string;
  answer: string;
  sort_order: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  sort_order: number;
  questions: Question[];
}
