import type { Category } from "@/types/cheatsheet";

import { examples1 } from "./examples/closure";
import { examples2 } from "./examples/deep-clone";

export const examplesCategory: Category = {
  id: "examples",
  name: "Примеры задач",
  slug: "examples",
  sort_order: 7,
  questions: [examples1, examples2],
};
