import type { Category } from "@/types/cheatsheet";

import { browser1 } from "./browser/browser-url-flow";
import { browser2 } from "./browser/tcp-handshake";
import { browser3 } from "./browser/http-structure";
import { browser4 } from "./browser/http-methods";
import { browser5 } from "./browser/idempotent-http-methods";
import { browser6 } from "./browser/http-vs-https";
import { browser7 } from "./browser/http-headers";
import { browser8 } from "./browser/async-vs-defer";
import { browser9 } from "./browser/cors";
import { browser10 } from "./browser/preflight";
import { browser11 } from "./browser/web-vitals";
import { browser12 } from "./browser/seo-indexing";
import { browser13 } from "./browser/browser-storage";
import { browser14 } from "./browser/web-performance";
import { browser15 } from "./browser/cors-simple-request";
import { browser16 } from "./browser/event-loop";
import { browser17 } from "./browser/browser-threads";
import { browser18 } from "./browser/request-animation-frame";
import { browser19 } from "./browser/web-workers";
import { browser20 } from "./browser/rest-websocket-sse";
import { browser21 } from "./browser/http-versions";
import { browser22 } from "./browser/access-refresh-tokens";

export const browserCategory: Category = {
  id: "browser",
  name: "Browser",
  slug: "browser",
  sort_order: 6,
  questions: [
    browser1,
    browser2,
    browser3,
    browser4,
    browser5,
    browser6,
    browser7,
    browser8,
    browser9,
    browser10,
    browser11,
    browser12,
    browser13,
    browser14,
    browser15,
    browser16,
    browser17,
    browser18,
    browser19,
    browser20,
    browser21,
    browser22,
  ],
};
