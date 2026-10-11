import { q } from "../helpers";

export const browser16 = q(
  "browser-16",
  "browser",
  "Как работает Event Loop в браузере?",
  "JavaScript выполняется в call stack. Асинхронные операции выполняются браузерными API, а их callbacks попадают в очереди. Event Loop переносит задачи в stack, когда он освобождается. Microtasks, например Promise callbacks, выполняются раньше следующей macrotask.",
  16,
);
