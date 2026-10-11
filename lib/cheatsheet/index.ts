import type { Category } from "@/types/cheatsheet";

import { browserCategory } from "./browser";
import { cssCategory } from "./css";
import { htmlCategory } from "./html";
import { javascriptCategory } from "./javascript";
import { reactCategory } from "./react";
import { typescriptCategory } from "./typescript";
import { examplesCategory } from "./examples";

export const seedCategories: Category[] = [
  javascriptCategory,
  browserCategory,
  reactCategory,
  typescriptCategory,
  htmlCategory,
  cssCategory,
  examplesCategory,
];
