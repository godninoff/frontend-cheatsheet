import { q } from "../helpers";

export const ts16 = q(
  "ts-16",
  "typescript",
  "Что такое утверждение типов? (as)",
  `Type assertion через as сообщает TypeScript, что разработчик считает значение определённого типа.

Например:

\`\`\`ts
const input = element as HTMLInputElement;
\`\`\`

Assertion не преобразует значение на runtime и не выполняет проверку во время выполнения.`,
  16,
);
