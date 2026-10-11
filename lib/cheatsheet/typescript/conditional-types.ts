import { q } from "../helpers";

export const ts10 = q(
  "ts-10",
  "typescript",
  "Что такое conditional types?",
  `Conditional types позволяют получить разные типы в зависимости от условия. Синтаксис:

\`\`\`ts
T extends U ? X : Y
\`\`\`

Например:

\`\`\`ts
type IsString<T> = T extends string ? true : false;
\`\`\`

Многие utility types TypeScript используют этот механизм.`,
  10,
);
