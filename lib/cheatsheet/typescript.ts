import type { Category } from "@/types/cheatsheet";

import { ts1 } from "./typescript/typescript-pros-cons";
import { ts2 } from "./typescript/basic-types";
import { ts3 } from "./typescript/type-vs-interface";
import { ts4 } from "./typescript/any-vs-unknown";
import { ts5 } from "./typescript/never";
import { ts6 } from "./typescript/union-types";
import { ts7 } from "./typescript/void";
import { ts8 } from "./typescript/enum";
import { ts9 } from "./typescript/type-guards";
import { ts10 } from "./typescript/conditional-types";
import { ts11 } from "./typescript/keyof";
import { ts12 } from "./typescript/generics";
import { ts13 } from "./typescript/mapped-types";
import { ts14 } from "./typescript/utility-types";
import { ts15 } from "./typescript/function-overloads";
import { ts16 } from "./typescript/type-assertion";

export const typescriptCategory: Category = {
  id: "typescript",
  name: "TypeScript",
  slug: "typescript",
  sort_order: 4,
  questions: [
    ts1,
    ts2,
    ts3,
    ts4,
    ts5,
    ts6,
    ts7,
    ts8,
    ts9,
    ts10,
    ts11,
    ts12,
    ts13,
    ts14,
    ts15,
    ts16,
  ],
};
