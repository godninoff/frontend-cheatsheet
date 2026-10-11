import type { Category } from "@/types/cheatsheet";

import { css1 } from "./css/css-what-is";
import { css2 } from "./css/specificity";
import { css3 } from "./css/centering";
import { css4 } from "./css/block-vs-inline";
import { css5 } from "./css/pseudo-classes-elements";
import { css6 } from "./css/positioning";
import { css7 } from "./css/flexbox-vs-grid";
import { css8 } from "./css/css-class-isolation";
import { css9 } from "./css/vendor-prefixes";
import { css10 } from "./css/cascade";
import { css11 } from "./css/preprocessors-postprocessors";

export const cssCategory: Category = {
  id: "css",
  name: "CSS",
  slug: "css",
  sort_order: 2,
  questions: [
    css1,
    css2,
    css3,
    css4,
    css5,
    css6,
    css7,
    css8,
    css9,
    css10,
    css11,
  ],
};
