import type { Category } from "@/types/cheatsheet";

import { react1 } from "./react/react-why";
import { react2 } from "./react/react-how-works";
import { react3 } from "./react/key-prop";
import { react4 } from "./react/controlled-uncontrolled";
import { react5 } from "./react/hooks";
import { react6 } from "./react/render-causes";
import { react7 } from "./react/useeffect-vs-uselayouteffect";
import { react8 } from "./react/rules-of-hooks";
import { react9 } from "./react/error-boundary";
import { react10 } from "./react/usememo-usecallback";
import { react11 } from "./react/context-disadvantages";
import { react12 } from "./react/batching";
import { react13 } from "./react/immutable-state";
import { react14 } from "./react/fiber";
import { react15 } from "./react/jsx";
import { react16 } from "./react/lazy-initialization";
import { react17 } from "./react/props-comparison";

export const reactCategory: Category = {
  id: "react",
  name: "React",
  slug: "react",
  sort_order: 5,
  questions: [
    react1,
    react2,
    react3,
    react4,
    react5,
    react6,
    react7,
    react8,
    react9,
    react10,
    react11,
    react12,
    react13,
    react14,
    react15,
    react16,
    react17,
  ],
};
