export const q = (
  id: string,
  category_id: string,
  question: string,
  answer: string,
  sort_order: number,
) => ({
  id,
  category_id,
  question,
  answer,
  sort_order,
});
