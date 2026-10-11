import { q } from "../helpers";

export const ts13 = q(
  "ts-13",
  "typescript",
  "Что такое mapped types?",
  `Mapped type позволяет создать новый тип на основе существующего, перебирая его ключи.

Например:

\`\`\`ts
type User = {
  name: string;
  age: number;
};

type PartialUser = {
  [K in keyof User]?: User[K];
};
\`\`\`

Такой тип делает все свойства User необязательными. На mapped types построены многие utility types.`,
  13,
);
