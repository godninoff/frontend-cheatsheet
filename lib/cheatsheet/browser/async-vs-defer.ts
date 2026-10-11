import { q } from "../helpers";

export const browser8 = q(
  "browser-8",
  "browser",
  "Чем отличаются async и defer у script?",
  "Оба атрибута позволяют загружать скрипт параллельно с разбором HTML. async выполняется сразу после загрузки и может прервать парсинг HTML, а defer выполняется после разбора HTML и сохраняет порядок скриптов.",
  8,
);
