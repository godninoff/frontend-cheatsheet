import type { Category } from "@/types/cheatsheet";

import { html1 } from "./html/html-what-is";
import { html2 } from "./html/html-tag";
import { html3 } from "./html/semantic-markup";
import { html4 } from "./html/semantic-tags";
import { html5 } from "./html/accessibility";
import { html6 } from "./html/picture";
import { html7 } from "./html/margin-vs-padding";
import { html8 } from "./html/margin-collapse";
import { html9 } from "./html/adaptive-vs-fluid";
import { html10 } from "./html/dom-tree";
import { html11 } from "./html/alt";

export const htmlCategory: Category = {
  id: "html",
  name: "HTML",
  slug: "html",
  sort_order: 1,
  questions: [
    html1,
    html2,
    html3,
    html4,
    html5,
    html6,
    html7,
    html8,
    html9,
    html10,
    html11,
  ],
};
