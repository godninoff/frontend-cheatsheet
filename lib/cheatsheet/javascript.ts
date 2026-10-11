import type { Category } from "@/types/cheatsheet";

import { js1 } from "./javascript/variables";
import { js2 } from "./javascript/event-propagation";
import { js3 } from "./javascript/javascript-types";
import { js4 } from "./javascript/primitive-vs-reference";
import { js5 } from "./javascript/autoboxing";
import { js6 } from "./javascript/function-declarations";
import { js7 } from "./javascript/prototype-inheritance";
import { js8 } from "./javascript/proto-vs-prototype";
import { js9 } from "./javascript/this";
import { js10 } from "./javascript/this-in-classes";
import { js11 } from "./javascript/shallow-vs-deep-copy";
import { js12 } from "./javascript/closures";
import { js13 } from "./javascript/set-and-map";
import { js14 } from "./javascript/weakset-weakmap";
import { js15 } from "./javascript/prevent-default";
import { js16 } from "./javascript/stop-propagation";
import { js17 } from "./javascript/promise";
import { js18 } from "./javascript/async-await";
import { js19 } from "./javascript/promise-static-methods";
import { js20 } from "./javascript/copying-objects";
import { js21 } from "./javascript/higher-order-functions";
import { js22 } from "./javascript/null-vs-undefined";
import { js23 } from "./javascript/has-own-vs-in";
import { js24 } from "./javascript/garbage-collector";
import { js25 } from "./javascript/abort-request";
import { js26 } from "./javascript/pure-function";
import { js27 } from "./javascript/bind-call-apply";
import { js28 } from "./javascript/temporal-dead-zone";
import { js29 } from "./javascript/loops";
import { js30 } from "./javascript/rest-vs-spread";

export const javascriptCategory: Category = {
  id: "js",
  name: "JavaScript",
  slug: "javascript",
  sort_order: 3,
  questions: [
    js1,
    js2,
    js3,
    js4,
    js5,
    js6,
    js7,
    js8,
    js9,
    js10,
    js11,
    js12,
    js13,
    js14,
    js15,
    js16,
    js17,
    js18,
    js19,
    js20,
    js21,
    js22,
    js23,
    js24,
    js25,
    js26,
    js27,
    js28,
    js29,
    js30,
  ],
};
