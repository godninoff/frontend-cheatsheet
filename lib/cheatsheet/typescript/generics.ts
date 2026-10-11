import { q } from "../helpers";

export const ts12 = q(
  "ts-12",
  "typescript",
  "Что такое дженерики?",
  `Generics позволяют параметризовать тип и писать универсальный код, который сохраняет информацию о конкретном типе.

Например:

\`\`\`ts
function identity<T>(value: T): T {
  return value;
}
\`\`\`

Generic можно ограничивать через extends.`,
  12,
);
